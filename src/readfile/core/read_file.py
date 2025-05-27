#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import glob
import os
import re
from typing import TextIO

import hjson

from src.settings import settings


class ReadFile:
    @staticmethod
    def read_all(dir: str) -> dict:
        datas = {}
        files = glob.glob('*.txt', root_dir=dir)
        for file in files:
            data = ReadFile.read_file(os.path.join(dir, file))
            datas.update(data)
        return datas

    @staticmethod
    def read_file(file: str) -> dict:
        """
        読み込んだファイルの内容を返す
        :return: ファイル情報
        """
        data = ReadFile.__read(file)
        hjson_text = ReadFile.__convert_to_hjson(data)
        return hjson.loads(hjson_text)

    @staticmethod
    def __read(file: str, replace_params: dict = {}) -> list:
        data = []
        pattern = r'(?<![<>])=|#|{'

        # COUNCILとTIERは後で取り直すときに面倒なので一緒に保存しておく
        if 'COUNCIL' in replace_params:
            data.append('COUNCIL:')
            data.append(replace_params['COUNCIL'])
        if 'TIER' in replace_params:
            data.append('TIER:')
            data.append(replace_params['TIER'])

        # Stellarisのファイルを読み込み、結果をdataに格納する
        with open(file, encoding='utf_8') as rf:
            for line in rf:
                if not line:  # EOF
                    break

                # 何故かBOMありのパターンがあるのでBOMを無視する
                if line[0] == '\ufeff':
                    line = line[1:]

                # 読み込んだ内容から、コメント行と改行を削除する
                line = line.split('#')[0].strip()
                if not line:
                    continue

                # inline_scriptsの変数名で置換する
                for key, value in replace_params.items():
                    line = line.replace('$' + key + '$', value)

                while True:
                    # 区切り文字を探す。
                    m = re.search(pattern, line)
                    if not m:
                        if line:
                            data.append(line)
                        break

                    # 区切り文字毎に処理する
                    start, mid, end = line[:m.start()].strip(), line[m.start()].strip(), line[m.start()+1:].strip()

                    # コメント行は無視
                    if mid == '#':
                        end = ''
                    # startの中に「"」が奇数しかない場合、区切っちゃいけない文字列を区切ってしまっているので再度連結し直す
                    if start.count('"') % 2 == 1:
                        index = line.find('"', line.find('"') + 1) + 1
                        start, mid, end = line[:index].strip(), '', line[index+1:].strip()

                    # key, valueパターン
                    if mid == '=':
                        # inline_script
                        if 'inline_script' in start:
                            data.extend(ReadFile.read_inline_script_file(rf, end, replace_params))
                            break
                        elif 'prerequisites' in start:
                            if end != '{}':
                                data.append('prerequisites:')
                                data.extend(ReadFile.read_prerequisites(rf, end, replace_params))
                            break
                        else:
                            data.append(start + ":")
                    # valueのみ
                    elif mid == '{':
                        if start:
                            data.append(start)
                        data.append('{')
                    elif start:
                        data.append(start)

                    line = end

            return data

    @staticmethod
    def read_inline_script_file(rf: TextIO, end: str, replace_params: dict) -> list:
        if '{' == end:
            params = {}

            for line in rf:
                if not line:  # EOF
                    break
                if '}' in line:
                    break

                # 読み込んだ内容から、コメント行と改行を削除する
                line = line.split('#')[0].strip()
                if not line:
                    continue

                # inline_scriptsの変数名で置換する
                for key, value in replace_params.items():
                    line = line.replace('$' + key + '$', value)

                key, value = line.split('=', 1)
                params.update({key.strip().strip('"'): value.strip().strip('"')})

            file = os.path.join(settings.GAME_BASE_DIR, settings.INLINE_SCRIPTS_DIR, params['script'] + '.txt')
            return ReadFile.__read(file, params)

        else:
            file = os.path.join(settings.GAME_BASE_DIR, settings.INLINE_SCRIPTS_DIR, end.strip().strip('"') + '.txt')
            return ReadFile.__read(file)

    @staticmethod
    def read_prerequisites(rf: TextIO, text: str, replace_params: dict) -> list:
        data = []

        if text.count('{') - text.count('}') == 0:
            for i, value in enumerate(text.split()):
                value = value.strip()
                if '=' == value:
                    pass
                elif '{' == value or '}' == value:
                    data.append(value)
                elif 'OR' == value.upper():
                    data.append('{}OR:'.format(i))
                else:
                    data.append('{}:'.format(i))
                    data.append(value)

            return data

        for line in rf:
            if not line:  # EOF
                break

            # 読み込んだ内容から、コメント行と改行を削除する
            line = line.split('#')[0].strip()
            if not line:
                continue
            # inline_scriptsの変数名で置換する
            for key, value in replace_params.items():
                line = line.replace('$' + key + '$', value)
            text += ' ' + line

            if text.count('{') - text.count('}') == 0:
                for i, value in enumerate(text.split()):
                    value = value.strip()
                    if '=' == value:
                        pass
                    elif '{' == value or '}' == value:
                        data.append(value)
                    elif 'OR' == value.upper():
                        data.append('OR{}:'.format(i))
                    else:
                        data.append('{}:'.format(i))
                        data.append(value)
                break

        return data

    @staticmethod
    def __convert_to_hjson(data: list) -> str:
        hjson_text = []
        index = 0
        max = len(data)

        # 取得したデータのうち、ListのフォーマットがHJSONに対応できていないので改めて綺麗にする
        while index < max:
            value = data[index]

            # "{ value }"なデータで":"や"<"や">"がないものはListのはずなので、"[]"に変換して良いはず
            if value[0] == '{' and value[-1] == '}' and ':' not in value and '<' not in value and '>' not in value:
                tmp = '[ ' + value[1:-1] + ' ]'
                hjson_text += tmp.split()

            # "{"の後のデータに":"がない場合はListのはずなので、"[]"に変換して良いはず
            elif value[0] == '{' and data[index + 1][-1] != ':' and '<' not in data[index + 1] and '>' not in data[index + 1]:
                tmp = '[' + value[1:]

                index += 1
                while index < max:
                    value = data[index]
                    if value[-1] == '}':
                        tmp += " " + value[:-1] + ' ]'
                        break
                    tmp += " " + value
                    index += 1
                hjson_text += tmp.split()

            # a > bやa <= bなどの比較演算子を使っている場合は、a: "> b"などに変換する
            elif '>' in value:
                inequality_index = value.find('>')
                if '}' in value:
                    close_index = value.find('}')
                    hjson_text.append(value[:inequality_index].strip() + ': ">' + value[inequality_index+1:close_index] + '"')
                    hjson_text.append(value[close_index:])
                else:
                    hjson_text.append(value[:inequality_index].strip() + ': ">' + value[inequality_index + 1:] + '"')
            elif '<' in value:
                inequality_index = value.find('<')
                if '}' in value:
                    close_index = value.find('}')
                    hjson_text.append(value[:inequality_index].strip() + ': "<' + value[inequality_index+1:close_index] + '"')
                    hjson_text.append(value[close_index:])
                else:
                    hjson_text.append(value[:inequality_index].strip() + ': "<' + value[inequality_index + 1:] + '"')

            # }の前にデータがあるとHJSONは}を文字列と認識して閉じ括弧の数が足りなくなるので、行を分ける
            elif value[-1] == '}' and len(value) > 1:
                hjson_text += value[:-1].split()
                hjson_text.append('}')

            elif '"' in value:
                hjson_text.append(value)

            elif 'event_target:' in value:
                if value[-1] == ':':
                    hjson_text.append('"' + value[:-1] + '":')
                else:
                    hjson_text.append('"' + value + '"')
            else:
                hjson_text += value.split()

            index += 1

        return '\n'.join(hjson_text)

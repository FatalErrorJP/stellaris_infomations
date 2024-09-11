#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
from typing import TextIO

from src.settings import settings


class InlineScripts:
    @staticmethod
    def read_for_str(inline_scripts: str) -> dict:
        return InlineScripts.read_for_dict({'script': inline_scripts})

    @staticmethod
    def read_for_dict(inline_scripts: dict) -> dict:
        # COUNCILとTIERだけは、後から取得しようとすると面倒になるので、ここで保存しておく
        params = {}
        if 'COUNCIL' in inline_scripts:
            params['COUNCIL'] = inline_scripts['COUNCIL']
        if 'TIER' in inline_scripts:
            params['TIER'] = inline_scripts['TIER']

        params.update(InlineScripts.__read(inline_scripts))
        return params

    @staticmethod
    def __read(inline_scripts: dict) -> dict:
        file = os.path.join(settings.GAME_BASE_DIR, settings.INLINE_SCRIPTS_DIR, inline_scripts['script'] + '.txt')
        with open(file, encoding='utf_8') as rf:
            return InlineScripts.__read_params(rf, inline_scripts)

    @staticmethod
    def __read_params(rf: TextIO, inline_scripts: dict) -> dict:
        params = {}

        for line in rf:
            if not line:  # EOF
                break

            # 読み込んだ内容から、コメント行と改行を削除する
            line = line.split('#')[0].strip()
            if not line:
                continue

            # inline_scriptsの変数名で置換する
            for key, value in inline_scripts.items():
                line = line.replace('$' + key + '$', value)

            if '{' in line:  # Array or Dictパターン
                tmp = InlineScripts.__get_array_or_dict_parameter(rf, inline_scripts, line)
                if 'inline_script' in tmp:
                    params.update(InlineScripts.read_for_dict(tmp['inline_script']))
                else:
                    params.update(tmp)
            elif '}' in line:  # 1特性の処理の終了
                break
            elif '=' in line:  # 1parameter
                tmp = InlineScripts.__get_param(line)
                if 'inline_script' in tmp:
                    params.update(InlineScripts.read_for_str(tmp['inline_script']))
                else:
                    params.update(tmp)
            elif line:  # keyのみでvalueが存在しないパターン。Arrayのデータの一部のはずだが、一旦Disc{key:value}として無理矢理格納する
                params.update({line: ''})

        return params

    @staticmethod
    def __get_array_or_dict_parameter(rf: TextIO, inline_scripts: dict, line: str) -> dict:
        key, value = line.split('{', 1)
        key = key.split('=')[0].strip()
        value = value.strip()

        if '}' in value:
            value = value.split('}')[0].strip()
            if '=' in value:  # ワンライナーのDict
                return {key: InlineScripts.__get_param(value.split('}')[0].strip())}
            else:  # ワンライナーのArray
                return {key: value.split()}
        else:  # Array or Dictパターンがワンライナーではない場合
            return {key: InlineScripts.__read_params(rf, inline_scripts)}

    @staticmethod
    def __get_param(line: str) -> dict:
        key, value = line.split('=', 1)
        return {key.strip(): value.strip()}

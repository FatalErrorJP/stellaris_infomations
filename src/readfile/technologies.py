#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import glob
import os
from typing import TextIO

from src.readfile.inline_scripts import InlineScripts
from src.settings import settings


class Technologies:
    __data: dict = {}

    @staticmethod
    def get_data() -> dict:
        """
        リーダー特性の辞書データを返す
        :return: リーダー特性の辞書データ
        """
        if not Technologies.__data:
            Technologies.__read_all()
        return Technologies.__data

    @staticmethod
    def __read_all() -> None:
        dir = os.path.join(settings.GAME_BASE_DIR, settings.TECHNOLOGY_DIR)
        files = glob.glob('*.txt', root_dir=dir)
        for file in files:
            Technologies.__read(os.path.join(dir, file))

    @staticmethod
    def __read(file: str) -> None:
        with open(file, encoding='utf_8') as rf:
            for line in rf:
                if not line:  # EOF
                    break

                # 読み込んだ内容から、コメント行と改行を削除する
                line = line.split('#')[0].strip()
                if not line:
                    continue

                # 1研究分のデータを読み込む
                if '{' in line:
                    key = line.split('=')[0].strip()
                    params = Technologies.__read_params(rf)

                    # ArrayなのにDictにしてしまっていたデータがあるので、Arrayに変換する
                    for param in params:
                        if isinstance(params[param], dict):
                            if not any(params[param].values()):
                                params[param] = list(params[param].keys())

                    Technologies.__data.update({key: params})

    @staticmethod
    def __read_params(rf: TextIO) -> dict:
        params = {}

        while True:
            line = rf.readline()
            if not line:  # EOF
                break

            # 読み込んだ内容から、コメント行と改行を削除する
            line = line.split('#')[0].strip()
            if not line:
                continue

            if '{' in line:  # Array or Dictパターン
                tmp = Technologies.__get_array_or_dict_parameter(rf, line)
                if 'inline_script' in tmp:
                    params.update(InlineScripts.read_for_dict(tmp['inline_script']))
                else:
                    params.update(tmp)
            elif '}' in line:  # 1特性の処理の終了
                break
            elif '=' in line:  # 1parameter
                tmp = Technologies.__get_param(line)
                if 'inline_script' in tmp:
                    params.update(InlineScripts.read_for_str(tmp['inline_script']))
                else:
                    params.update(tmp)
            elif line:  # keyのみでvalueが存在しないパターン。Arrayのデータの一部のはずだが、一旦Disc{key:value}として無理矢理格納する
                params.update({line: ''})

        return params

    @staticmethod
    def __get_array_or_dict_parameter(rf: TextIO, line: str) -> dict:
        key, value = line.split('{', 1)
        key = key.split('=')[0].strip()
        value = value.strip()

        if '}' in value:
            value = value.split('}')[0].strip().strip('"')
            if '=' in value:  # ワンライナーのDict
                return {key: Technologies.__get_param(value.split('}')[0].strip())}
            else:  # ワンライナーのArray
                return {key: value.replace('"', '').split()}
        else:  # Array or Dictパターンがワンライナーではない場合
            return {key: Technologies.__read_params(rf)}

    @staticmethod
    def __get_param(line: str) -> dict:
        key, value = line.split('=', 1)
        return {key.strip().strip('"'): value.strip().strip('"')}

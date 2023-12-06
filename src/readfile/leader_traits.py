#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import glob
import os
from typing import TextIO

from src.readfile.inline_scripts import InlineScripts
from src.settings import settings


class LeaderTraits:
    __data: dict = {}

    @staticmethod
    def get_data() -> dict:
        """
        リーダー特性の辞書データを返す
        :return: リーダー特性の辞書データ
        """
        if not LeaderTraits.__data:
            LeaderTraits.__read_all()
        return LeaderTraits.__data

    @staticmethod
    def __read_all() -> None:
        dir = os.path.join(settings.GAME_BASE_DIR, settings.LEADER_TRAIT_DIR)
        files = glob.glob('*.txt', root_dir=dir)
        for file in files:
            LeaderTraits.__read(os.path.join(dir, file))

    @staticmethod
    def __read(file: str) -> None:
        with open(file) as rf:
            for line in rf:
                if not line:  # EOF
                    break

                # 読み込んだ内容から、コメント行と改行を削除する
                line = line.split('#')[0].strip()
                if not line:
                    continue

                # 1特性分のデータを読み込む
                if '{' in line:
                    key = line.split('=')[0].strip()
                    params = LeaderTraits.__read_params(rf)

                    if 'leader_class' in params:
                        # ArrayなのにDictにしてしまっていたデータがあるので、Arrayに変換する
                        for param in params:
                            if isinstance(params[param], dict):
                                if not any(params[param].values()):
                                    params[param] = list(params[param].keys())

                        # 1特性分のデータを保存する
                        LeaderTraits.__data.update({key: params})

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
                tmp = LeaderTraits.__get_array_or_dict_parameter(rf, line)
                if 'inline_script' in tmp:
                    params.update(InlineScripts.read_for_dict(tmp['inline_script']))
                else:
                    params.update(tmp)
            elif '}' in line:  # 1特性の処理の終了
                break
            elif '=' in line:  # 1parameter
                tmp = LeaderTraits.__get_param(line)
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
                return {key: LeaderTraits.__get_param(value.split('}')[0].strip())}
            else:  # ワンライナーのArray
                return {key: value.split()}
        else:  # Array or Dictパターンがワンライナーではない場合
            return {key: LeaderTraits.__read_params(rf)}

    @staticmethod
    def __get_param(line: str) -> dict:
        key, value = line.split('=', 1)
        return {key.strip(): value.strip().strip('"')}

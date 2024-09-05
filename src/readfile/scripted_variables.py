#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import glob
import os
import re

from src.settings import settings


class ScriptedVariables:
    __data: dict = {}

    @staticmethod
    def get_data() -> dict:
        """
        ローカライズファイルの辞書データを返す
        :return: ローカライズファイルの辞書データ
        """
        if not ScriptedVariables.__data:
            ScriptedVariables.__read_all()
        return ScriptedVariables.__data

    @staticmethod
    def get_value(key: str) -> str:
        data = ScriptedVariables.get_data()
        if key in data:
            return data[key]
        else:
            return key

    @staticmethod
    def __read_all() -> None:
        dir = os.path.join(settings.GAME_BASE_DIR, settings.SCRIPTED_VARIABLES_DIR)
        files = glob.glob('*.txt', root_dir=dir)
        for file in files:
            ScriptedVariables.__read(os.path.join(dir, file))

    @staticmethod
    def __read(file: str) -> None:
        with open(file, encoding="utf-8") as rf:
            for line in rf:
                if not line:  # EOF
                    break

                # 読み込んだ内容から、コメント行と改行を削除する
                line = line.split('#')[0].strip()
                if not line:
                    continue

                # key,valueに分ける
                if '=' in line:
                    key, value = line.split('=', 1)
                    ScriptedVariables.__data[key.strip()] = value.strip()

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

from src.readfile.core.read_file import ReadFile
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
            Technologies.__data = Technologies.__read_all()
        return Technologies.__data

    @staticmethod
    def __read_all() -> dict:
        dir = os.path.join(settings.GAME_BASE_DIR, settings.TECHNOLOGY_DIR)
        datas = ReadFile.read_all(dir)

        # @xxxxx = yyyyyみたいなものもあるのでそれは除外する
        datas = {key: value for key, value in datas.items() if isinstance(value, dict)}
        return datas

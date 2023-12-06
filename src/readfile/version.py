#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import os

from src.settings import settings


class Version:
    __version: str = None

    @staticmethod
    def get_version() -> str:
        """
        Stellarisのバージョン番号を取得する
        :return: バージョン番号
        """
        if not Version.__version:
            Version.__version = Version.__read_version_file()
        return Version.__version

    @staticmethod
    def __read_version_file() -> str:
        input_file = os.path.join(settings.GAME_BASE_DIR, settings.VERSION_FILE_NAME)
        with open(input_file, encoding='utf_8') as rf:
            return json.load(rf)['rawVersion']

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

from src.readfile.core.read_file import ReadFile
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
            LeaderTraits.__data = LeaderTraits.__read_all()
        return LeaderTraits.__data

    @staticmethod
    def __read_all() -> dict:
        dir = os.path.join(settings.GAME_BASE_DIR, settings.LEADER_TRAIT_DIR)
        datas = ReadFile.read_all(dir)

        # 当該ディレクトリの中のデータはリーダー特性だけでなく、種族特性の定義も含まれている
        # 欲しいのはリーダー特性のみのため、leader_classというキーがあるものだけにする
        datas = {key: value for key, value in datas.items() if isinstance(value, dict) and 'leader_class' in value}
        return datas

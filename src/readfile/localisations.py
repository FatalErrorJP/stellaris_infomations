#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import glob
import os
import re

from src.settings import settings


class Localisations:
    __data: dict = {}

    @staticmethod
    def get_data() -> dict:
        """
        ローカライズファイルの辞書データを返す
        :return: ローカライズファイルの辞書データ
        """
        if not Localisations.__data:
            Localisations.__read_all()
        return Localisations.__data

    @staticmethod
    def get_value(key: str) -> str:
        """
        ローカライズファイルのキー名を元に、valueを返す
        $xxxxx$なととキー名を間接参照しているケースについては、参照先まで遡って取得するようにする
        :param key: キー名
        :return: value
        """
        lower_key = key.lower()
        data = Localisations.get_data()

        if lower_key in data:
            if re.fullmatch(r'^.*\$.+\$.*', data[lower_key]):
                top, _, tmp = data[lower_key].partition('$')
                mid, _, end = tmp.partition('$')
                return top + Localisations.get_value(mid) + Localisations.get_value(end)
            else:
                return data[lower_key]
        elif re.fullmatch(r'^.*\$.+\$.*', key):
            top, _, tmp = key.partition('$')
            mid, _, end = tmp.partition('$')
            return top + Localisations.get_value(mid) + Localisations.get_value(end)
        else:
            return key

    @staticmethod
    def get_modifier_value(key: str) -> str:
        """
        modifierの名前を元に、日本語名を返す
        :param key: キー名
        :return: value
        """
        return Localisations.get_value('mod_' + key)

    @staticmethod
    def __read_all() -> None:
        dir = os.path.join(settings.GAME_BASE_DIR, settings.LOCALISATION_DIR)
        files = glob.glob('*.yml', root_dir=dir)
        for file in files:
            Localisations.__read(os.path.join(dir, file))

    @staticmethod
    def __read(file: str) -> None:
        with open(file, encoding='utf_8_sig') as rf:
            for line in rf:
                if not line:  # EOF
                    break

                # 読み込んだ内容から、コメント行と改行を削除する
                line = line.split('#')[0].strip()
                if not line:
                    continue

                # key,valueに分ける
                data = re.split(r':\d*', line, 1)
                if data[1]:
                    key = data[0].strip().lower()
                    value = data[1].strip().split('"')[1]
                    # 無限ループ対策
                    if key != value.strip('$'):
                        Localisations.__data[key] = value

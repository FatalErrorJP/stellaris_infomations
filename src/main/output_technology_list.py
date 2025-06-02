#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import glob
import os
from typing import TextIO

from src.parser.technology_parser import TechnologyParser
from src.readfile.version import Version
from src.settings import settings
from src.vo.technology import Technology


def main() -> None:
    if not os.path.exists(settings.OUTPUT_DIR):
        os.mkdir(settings.OUTPUT_DIR)

    technologies = _read_file()
    _write_file(technologies)


def _read_file() -> list[Technology]:
    technology_dir = os.path.join(settings.GAME_BASE_DIR, settings.TECHNOLOGY_DIR)
    files = glob.glob('*.txt', root_dir=technology_dir)

    technology_list = []
    for file in files:
        file_path = os.path.join(technology_dir, file)
        print("=====" + file_path)

        # 種族特性とリーダー特性があるので、リーダー特性のみを抽出する
        parser = TechnologyParser()
        technologies = parser.parse_file(file_path)
        technology_list.extend(technologies)

        for technology in technologies:
            if technology.extra_properties:
                print([technology.obj_id, technology.extra_properties])

    return technology_list


def _write_file(technologies: list[Technology]) -> None:
    output_file = os.path.join(settings.OUTPUT_DIR, settings.OUTPUT_TECHNOLOGY_FILE)
    with open(output_file, 'w', encoding='utf-8') as wf:
        # ヘッダー
        wf.writelines(settings.TEMPLATE_TECHNOLOGY_HEADER.format(version=Version.get_version()))
        # データ
        _write_data(wf, technologies)
        # フッター
        wf.writelines(settings.TEMPLATE_TECHNOLOGY_FOOTER)


def _write_data(wf: TextIO, technologies: list[Technology]) -> None:
    # ノード
    for i in range(0, 10):
        for technology in technologies:
            if str(i) == technology.tier:
                wf.writelines(settings.TEMPLATE_TECHNOLOGY_DATA_1.format(
                    key=technology.obj_id,
                    name=technology.name,
                    area=technology.area,
                    category=technology.category,
                    tier=technology.tier,
                    cost=technology.cost,
                    weight=technology.weight,
                    weight_modifier=technology.weight_modifier,
                    prerequisites=technology.prerequisites,
                    color=technology.color,
                    potential=technology.potential,
                ))

    # ノード間の繋がり
    for i in range(0, 10):
        for technology in technologies:
            if str(i) == technology.tier:
                if technology._prerequisites:
                    for technology_prerequisites in technology._prerequisites.split('\n'):
                        for prerequisite in technology_prerequisites.strip().replace('"', '').split(' '):
                            if prerequisite in ['OR', '=', '{', '}']:
                                continue
                            wf.writelines(settings.TEMPLATE_TECHNOLOGY_DATA_2.format(
                                key1=prerequisite.strip(''),
                                key2=technology.obj_id,
                            ))


if __name__ == "__main__":
    main()

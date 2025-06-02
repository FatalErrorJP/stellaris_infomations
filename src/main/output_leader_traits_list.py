#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import glob
import os
from typing import TextIO

from src.parser.trait_parser import TraitParser
from src.readfile.version import Version
from src.settings import settings
from src.vo.trait import Trait


def main() -> None:
    if not os.path.exists(settings.OUTPUT_DIR):
        os.mkdir(settings.OUTPUT_DIR)

    leader_traits = _read_file()
    _write_file(leader_traits)


def _read_file() -> list[Trait]:
    leader_traits_dir = os.path.join(settings.GAME_BASE_DIR, settings.LEADER_TRAIT_DIR)
    files = glob.glob('*.txt', root_dir=leader_traits_dir)

    leader_traits = []
    for file in files:
        file_path = os.path.join(leader_traits_dir, file)
        print("=====" + file_path)

        # 種族特性とリーダー特性があるので、リーダー特性のみを抽出する
        parser = TraitParser()
        traits = parser.parse_file(file_path)
        for trait in traits:
            if trait.leader_class:
                leader_traits.append(trait)

                if trait.extra_properties:
                    print([trait.obj_id, trait.extra_properties])

    return leader_traits


def _write_file(leader_traits: list[Trait]) -> None:
    output_file = os.path.join(settings.OUTPUT_DIR, settings.OUTPUT_LEADER_TRAIT_FILE)

    with open(output_file, 'w', encoding='utf-8') as wf:
        # タイトル行
        wf.writelines(settings.TEMPLATE_TITLE.format(title="リーダー特性一覧", version=Version.get_version()))
        # テーブルヘッダー
        wf.writelines(settings.TEMPLATE_LEADER_TRAITS_HEADER)
        # テーブルデータ
        _write_data(wf, leader_traits)
        # テーブルフッター
        wf.writelines(settings.TEMPLATE_FOOTER)


def _write_data(wf: TextIO, leader_traits: list[Trait]) -> None:
    for leader_trait in leader_traits:
        wf.writelines(settings.TEMPLATE_LEADER_TRAITS_DATA.format(
            key=leader_trait.obj_id,
            name=leader_trait.name,
            commander=leader_trait.is_commander,
            official=leader_trait.is_official,
            scientist=leader_trait.is_scientist,
            leader_trait_type=leader_trait.leader_trait_type,
            modifier=leader_trait.modifiers,
            immortal_leaders=leader_trait.immortal_leaders,
            ftl_inhibitor=leader_trait.ftl_inhibitor,
            on_gained_effect=leader_trait.on_gained_effect,
            initial=leader_trait.initial,
            randomized=leader_trait.randomized,
            replace_traits=leader_trait.replace_traits,
            starting_ruler_trait=leader_trait.starting_ruler_trait,
            allowed_origins=leader_trait.allowed_origins,
            forbidden_origins=leader_trait.forbidden_origins,
            allowed_ethics=leader_trait.allowed_ethics,
            leader_potential_add=leader_trait.leader_potential_add,
            prerequisites=leader_trait.prerequisites,
            opposites=leader_trait.opposites,
            ethic_destiny_trait=leader_trait.ethic_destiny_trait,
        ))


if __name__ == "__main__":
    main()

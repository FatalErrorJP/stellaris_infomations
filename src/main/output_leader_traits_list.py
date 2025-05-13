#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
from typing import TextIO

from src.readfile.leader_traits import LeaderTraits
from src.readfile.localisations import Localisations
from src.readfile.version import Version
from src.settings import settings
from src.util.dict_extracor import DictExtractor


def main() -> None:
    if not os.path.exists(settings.OUTPUT_DIR):
        os.mkdir(settings.OUTPUT_DIR)

    _write_leader_trait_file()


def _write_leader_trait_file() -> None:
    output_file = os.path.join(settings.OUTPUT_DIR, settings.OUTPUT_LEADER_TRAIT_FILE)
    with open(output_file, 'w', encoding='utf-8') as wf:
        # タイトル行
        wf.writelines(settings.TEMPLATE_TITLE.format(title="リーダー特性一覧", version=Version.get_version()))
        # テーブルヘッダー
        wf.writelines(settings.TEMPLATE_LEADER_TRAITS_HEADER)
        # テーブルデータ
        _write_leader_trait_data(wf)
        # テーブルフッター
        wf.writelines(settings.TEMPLATE_FOOTER)


def _write_leader_trait_data(wf: TextIO) -> None:
    for key, datas in LeaderTraits.get_data().items():
        data = dict(datas)

        wf.writelines(settings.TEMPLATE_LEADER_TRAITS_DATA.format(
            key=key,
            name=Localisations.get_value(key),
            commander=_get_leader_class('commander', data),
            official=_get_leader_class('official', data),
            scientist=_get_leader_class('scientist', data),
            leader_trait_type=DictExtractor.get_param('leader_trait_type', data, 'basic'),
            council=DictExtractor.get_param('COUNCIL', data, 'no'),
            tier=DictExtractor.get_param('TIER', data, 'none'),
            modifier=DictExtractor.get_modifiers(data),
            immortal_leaders=DictExtractor.get_param('immortal_leaders', data, 'no'),
            ftl_inhibitor=DictExtractor.get_param('ftl_inhibitor', data, 'no'),
            can_retreat=DictExtractor.get_param('ftl_inhibitor', data, 'yes'),
            on_gained_effect=DictExtractor.get_param_json('on_gained_effect', data),
            initial=DictExtractor.get_param('initial', data),
            randomized=DictExtractor.get_param('randomized', data, 'yes'),
            replace_traits=DictExtractor.get_param_list('replace_traits', data),
            starting_ruler_trait=DictExtractor.get_param('starting_ruler_trait', data, 'no'),
            allowed_origins=DictExtractor.get_param_list('allowed_origins', data),
            forbidden_origins=DictExtractor.get_param_list('forbidden_origins', data),
            allowed_ethics=DictExtractor.get_param_list('allowed_ethics', data),
            leader_potential_add=DictExtractor.get_param_json('leader_potential_add', data),
            prerequisites=_get_prerequisites('prerequisites', data),
            opposites=DictExtractor.get_param_list('opposites', data),
            ethic_destiny_trait=DictExtractor.get_param('ethic_destiny_trait', data, 'no'),
        ))


def _get_leader_class(key: str, data: dict) -> str:
    leader_class = data['leader_class']

    if isinstance(leader_class, list):
        if key in leader_class:
            return 'yes'
        else:
            return 'no'
    elif leader_class == 'all':
        return 'yes'
    else:
        return ''


def _get_prerequisites(key: str, data: dict) -> str:
    result = ''
    if key in data:
        for prerequisites_key in data[key]:
            prerequisite = data[key][prerequisites_key]
            if 'OR' in prerequisites_key:
                result += 'OR = { +\n'
                for prerequisite_or_key in prerequisite:
                    result += '  ' + Localisations.get_value(prerequisite[prerequisite_or_key]) + ' +\n'
                result += '} +\n'
            else:
                result += Localisations.get_value(prerequisite) + ' +\n'
    return result


if __name__ == "__main__":
    main()

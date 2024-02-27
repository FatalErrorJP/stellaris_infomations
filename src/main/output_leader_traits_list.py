#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import os
from typing import TextIO

from src.enum.modifier_type import ModifierType
from src.readfile.leader_traits import LeaderTraits
from src.readfile.localisations import Localisations
from src.readfile.version import Version
from src.settings import settings


def main() -> None:
    if not os.path.exists(settings.OUTPUT_DIR):
        os.mkdir(settings.OUTPUT_DIR)

    _write_leader_trait_file()


def _write_leader_trait_file() -> None:
    output_file = os.path.join(settings.OUTPUT_DIR, settings.OUTPUT_LEADER_TRAIT_FILE)
    with open(output_file, 'w', encoding='utf-8') as wf:
        # タイトル行
        wf.writelines(settings.TEMPLATE_TITLE.format(version=Version.get_version()))
        # テーブルヘッダー
        wf.writelines(settings.TEMPLATE_HEADER)
        # テーブルデータ
        _write_leader_trait_data(wf)
        # テーブルフッター
        wf.writelines(settings.TEMPLATE_FOOTER)


def _write_leader_trait_data(wf: TextIO) -> None:
    for key, data in LeaderTraits.get_data().items():
        wf.writelines(settings.TEMPLATE_DATA.format(
            key=key,
            name=Localisations.get_value(key),
            commander=_get_leader_class('commander', data),
            official=_get_leader_class('official', data),
            scientist=_get_leader_class('scientist', data),
            leader_trait_type=_get_param('leader_trait_type', data, 'basic'),
            council=_get_param('COUNCIL', data),
            tier=_get_param('TIER', data),
            modifier=_get_modifiers(data),
            immortal_leaders=_get_param('immortal_leaders', data, 'no'),
            ftl_inhibitor=_get_param('ftl_inhibitor', data, 'no'),
            can_retreat=_get_param('ftl_inhibitor', data, 'yes'),
            on_gained_effect=_get_param_json('on_gained_effect', data),
            initial=_get_param('initial', data),
            randomized=_get_param('randomized', data, 'yes'),
            replace_traits=_get_param_list('replace_traits', data),
            starting_ruler_trait=_get_param('starting_ruler_trait', data, 'no'),
            allowed_origins=_get_param_list('allowed_origins', data),
            forbidden_origins=_get_param_list('forbidden_origins', data),
            allowed_ethics=_get_param_list('allowed_ethics', data),
            leader_potential_add=_get_param_json('leader_potential_add', data),
            prerequisites=_get_param_list('prerequisites', data),
            opposites=_get_param_list('opposites', data),
            ethic_destiny_trait=_get_param('ethic_destiny_trait', data, 'no'),
        ))


def _get_param(key: str, data: dict, default_value='') -> str:
    if key in data:
        return data[key]
    return default_value


def _get_param_list(key: str, data: dict, default_value='') -> str:
    if key in data:
        result = ''
        for value in data[key]:
            result += Localisations.get_value(value) + ' +\n'
        return result
    return default_value


def _get_param_json(key: str, data: dict, default_value='') -> str:
    if key in data:
        return json.dumps(data[key], indent=4, )
    return default_value


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


def _get_modifiers(data) -> str:
    result = ''
    for modifier in ModifierType:
        result += _get_modifier(modifier, data)
    return result


def _get_modifier(modifier, data) -> str:
    result = ''
    name = modifier.value['name']
    desc = modifier.value['desc']

    if name in data:
        result += desc

        if modifier in (ModifierType.Custom_tooltip, ModifierType.Custom_tooltip_with_modifiers):
            result += '・' + Localisations.get_value(data[name]) + ' +\n'
        elif modifier == ModifierType.Triggered_desc:
            for key, value in data[name].items():
                if key == 'trigger':
                    result += '・trigger条件：' + json.dumps(value) + ' +\n'
                elif key == 'exclusive_trigger':
                    result += '・exclusive_trigger条件：' + json.dumps(value) + ' +\n'
                else:
                    result += '・' + Localisations.get_value(value) + ' +\n'
        else:
            for key, value in data[name].items():
                if key == 'potential':
                    result += '・条件：' + json.dumps(value) + ' +\n'
                else:
                    result += '・' + key + ' (' + Localisations.get_modifier_value(key) + ')' + ' = ' + value + ' +\n'
        result += ' +\n'
    return result


if __name__ == "__main__":
    main()

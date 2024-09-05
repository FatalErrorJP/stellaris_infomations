#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import os
from typing import TextIO

from src.readfile.localisations import Localisations
from src.readfile.scripted_variables import ScriptedVariables
from src.readfile.technologies import Technologies
from src.readfile.version import Version
from src.settings import settings


def main() -> None:
    if not os.path.exists(settings.OUTPUT_DIR):
        os.mkdir(settings.OUTPUT_DIR)

    _write_technology_list()


def _write_technology_list() -> None:
    output_file = os.path.join(settings.OUTPUT_DIR, settings.OUTPUT_TECHNOLOGY_FILE)
    with open(output_file, 'w', encoding='utf-8') as wf:
        # ヘッダー
        wf.writelines(settings.TEMPLATE_TECHNOLOGY_HEADER.format(version=Version.get_version()))
        # データ
        _write_leader_trait_data(wf)
        # フッター
        wf.writelines(settings.TEMPLATE_TECHNOLOGY_FOOTER)


def _write_leader_trait_data(wf: TextIO) -> None:
    # ノード
    for i in range(0, 10):
        for key, data in Technologies.get_data().items():
            if i == int(_get_param('tier', data)):
                wf.writelines(settings.TEMPLATE_TECHNOLOGY_DATA_1.format(
                    key=key,
                    name=Localisations.get_value(key),
                    area=Localisations.get_value(_get_param('area', data)),
                    category=_get_param_category('category', data),
                    tier=_get_param('tier', data),
                    cost=_get_param('cost', data),
                    weight=_get_param('weight', data),
                    weight_modifier=_get_json('weight_modifier', data),
                    prerequisites=_get_param_prerequisites('prerequisites', data),
                    color=_get_color('area', data),
                    potential=_get_json('potential', data)
                ))

    # ノード間の繋がり
    for i in range(0, 10):
        for key, data in Technologies.get_data().items():
            if i == int(_get_param('tier', data)):
                if 'prerequisites' in data:
                    for prerequisites_key in data['prerequisites']:
                        wf.writelines(settings.TEMPLATE_TECHNOLOGY_DATA_2.format(
                            key1=prerequisites_key.strip('"'),
                            key2=key,
                        ))


def _get_param(key: str, data: dict, default_value='') -> str:
    if key in data:
        if data[key][0] == '@':
            return ScriptedVariables.get_value(data[key])
        else:
            return data[key]
    return default_value


def _get_param_category(key: str, data: dict) -> str:
    if key in data:
        return Localisations.get_value(data[key][0])
    return ''


def _get_param_prerequisites(key: str, data: dict) -> str:
    value = []
    if key in data:
        for prerequisite in data[key]:
            value.append(Localisations.get_value(prerequisite))
    return "\n".join(value)


def _get_color(key: str, data: dict) -> str:
    area = data[key]
    is_dangerous = False
    is_rare = False
    if 'is_dangerous' in data:
        is_dangerous = data['is_dangerous']
    if 'is_rare' in data:
        is_rare = data['is_rare']

    if is_dangerous:
        return '#ff0000'
    elif is_rare:
        return '#9370db'
    elif area == 'physics':
        return '#add8e6'
    elif area == 'society':
        return '#90ee90'
    elif area == 'engineering':
        return '#cd853f'
    else:
        return '#ffffff'


def _get_json(key: str, data: dict) -> str:
    if key in data:
        return json.dumps(data[key], indent=2).replace('"', '\\"').replace('\n', '\\n')
    else:
        return ''


if __name__ == "__main__":
    main()

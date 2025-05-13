#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json

from src.enum.modifier_type import ModifierType
from src.readfile.localisations import Localisations


class DictExtractor:
    @staticmethod
    def get_param(key: str, data: dict, default_value='') -> str:
        if key in data:
            return data[key]
        return default_value

    @staticmethod
    def get_param_list(key: str, data: dict, default_value='') -> str:
        if key in data:
            result = ''
            for value in data[key]:
                result += Localisations.get_value(value) + ' +\n'
            return result
        return default_value

    @staticmethod
    def get_param_json(key: str, data: dict, default_value='') -> str:
        if key in data:
            return json.dumps(data[key], indent=4, )
        return default_value

    @staticmethod
    def get_modifiers(data) -> str:
        result = ''
        for modifier in ModifierType:
            result += DictExtractor.get_modifier(modifier, data)
        return result

    @staticmethod
    def get_modifier(modifier, data) -> str:
        result = ''
        name = modifier.value['name']
        desc = modifier.value['desc']

        if name in data and data[name]:
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
                        result += '・' + key + ' (' + Localisations.get_modifier_value(key) + ')' + ' = ' + str(value) + ' +\n'
            result += ' +\n'
        return result

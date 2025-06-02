import json
import re
from abc import ABC
from typing import Any

from src.readfile.localisations import Localisations


class BaseVo(ABC):
    def __init__(self, file_path: str, obj_id: str, **kwargs: Any):
        if not isinstance(obj_id, str) or not obj_id:
            raise ValueError("ID must be a non-empty string.")

        self._file_path = file_path
        self._obj_id = obj_id
        # 定義済みの引数に含まれない追加のプロパティを _extra_properties に格納
        self._extra_properties = kwargs

    @property
    def file_path(self) -> str:
        return self._file_path

    @property
    def obj_id(self) -> str:
        return self._obj_id

    @property
    def name(self) -> str:
        return Localisations.get_value(self._obj_id)

    @property
    def extra_properties(self) -> dict[str, Any]:
        return self._extra_properties.copy()  # コピーを返して元の辞書の変更を防ぐ

    def _get_bool_str(self, target: bool, default: str = ''):
        return {True: 'yes', False: 'no'}.get(target, default)

    def _get_list(self, target: list, default: str = ''):
        if target:
            result = ''
            for value in target:
                result += Localisations.get_value(value) + ' +\n'
            return result
        return default

    def _get_raw_string(self, target: str, localise_key_head: str = ''):
        result = ''
        pattern = re.compile(r'^\s*([a-zA-Z0-9_]+)\s*=', re.MULTILINE)

        if not target:
            return result

        for line in target.split('\n'):
            match = pattern.match(line)
            if match:
                key = match.group(1)
                localisations_key = Localisations.get_value(key)
                localisations_key2 = Localisations.get_value(localise_key_head + key)
                if key != localisations_key:
                    result += line.replace(f"{key}", f"{key}({localisations_key})") + ' +\n'
                elif localise_key_head + key != localisations_key2:
                    result += line.replace(f"{key}", f"{key}({localisations_key2})") + ' +\n'
                else:
                    result += line + ' +\n'
            else:
                key = line.strip()
                localisations_key = Localisations.get_value(line.strip())
                if key != localisations_key:
                    result += key + '(' + localisations_key + ')' + ' +\n'
                else:
                    result += line + ' +\n'

        return result

    def _get_param_json(self, target: dict[str], default_value='') -> str:
        if target:
            return json.dumps(target, indent=2, )
        return default_value

    def _get_modifier(self, target_list: list[dict[str]], localise_key_head: str = '', default_value='') -> str:
        if not target_list:
            return default_value

        result = ''
        for target in target_list:
            for key, value in target.items():
                if key == 'trigger':
                    result += '・trigger条件：' + json.dumps(value) + ' +\n'
                elif key == 'exclusive_trigger':
                    result += '・exclusive_trigger条件：' + json.dumps(value) + ' +\n'
                elif key == 'potential':
                    result += '・条件：' + json.dumps(value) + ' +\n'
                else:
                    localisations_key1 = Localisations.get_value(key)
                    localisations_key2 = Localisations.get_value(localise_key_head + key)
                    if key != localisations_key1:
                        resultkey = f"{key}({localisations_key1})"
                    elif localise_key_head + key != localisations_key2:
                        resultkey = f"{key}({localisations_key2})"
                    else:
                        resultkey = key

                    localisations_value1 = Localisations.get_value(value)
                    localisations_value2 = Localisations.get_value(localise_key_head + value)
                    if value != localisations_value1:
                        resultvalue = f"{value}({localisations_value1})"
                    elif localise_key_head + value != localisations_value2:
                        resultvalue = f"{value}({localisations_value2})"
                    else:
                        resultvalue = value

                    result += f"・{resultkey} = {resultvalue} +\n"
            result += ' +\n'

        return result

    def __repr__(self) -> str:
        return f"id='{self._obj_id}'"

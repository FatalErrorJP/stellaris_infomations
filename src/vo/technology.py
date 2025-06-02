import json
from typing import Any, Optional

from src.readfile.localisations import Localisations
from src.readfile.scripted_variables import ScriptedVariables
from src.vo.base_vo import BaseVo


class Technology(BaseVo):
    """
    Stellarisの建造物データを保持するイミュータブルなクラス。
    ファイルから解析された情報をコンストラクタで設定し、その後は変更できません。
    """

    def __init__(self,
                 file_path: str,
                 obj_id: str,
                 icon: str = None,
                 start_tech: bool = None,
                 ai_update_type: str = None,
                 levels: str = None,
                 cost: str = None,
                 cost_per_level: str = None,
                 area: str = None,
                 tier: str = None,
                 is_rare: bool = None,
                 prerequisites: str = None,
                 category: list[str] = None,
                 feature_flags: list[str] = None,
                 weight: Optional[str] = None,
                 weight_modifier: list[dict[str]] = None,
                 weight_groups: list[str] = None,
                 ai_weight: dict[str] = None,
                 potential: dict[str] = None,
                 mod_weight_if_group_picked: dict[str] = None,
                 modifier: list[dict[str]] = None,
                 technology_swap: Optional[list[str]] = None,
                 gateway: str = None,
                 is_reverse_engineerable: str = None,
                 prereqfor_desc: list[dict[str]] = None,
                 is_insight: bool = None,
                 is_dangerous: bool = None,
                 starting_potential: dict[str] = None,
                 **kwargs: Any):  # ここに **kwargs を追加し、任意の引数を受け取れるようにする

        super().__init__(file_path, obj_id, **kwargs)
        self._icon = icon
        self._start_tech = start_tech
        self._ai_update_type = ai_update_type
        self._cost = cost
        self._levels = levels
        self._cost_per_level = cost_per_level
        self._area = area
        self._tier = tier
        self._is_rare = is_rare
        self._prerequisites = prerequisites
        self._category = category or []
        self._feature_flags = feature_flags or []
        self._weight = weight
        self._weight_modifier = weight_modifier
        self._weight_groups = weight_groups
        self._ai_weight = ai_weight or {}
        self._potential = potential or {}
        self._mod_weight_if_group_picked = mod_weight_if_group_picked
        self._modifier = modifier or []
        self._technology_swap = technology_swap or []
        self._gateway = gateway
        self._is_reverse_engineerable = is_reverse_engineerable
        self._prereqfor_desc = prereqfor_desc
        self._is_insight = is_insight
        self._is_dangerous = is_dangerous
        self._starting_potential = starting_potential

    @property
    def icon(self) -> str:
        return self._icon

    @property
    def start_tech(self) -> Optional[str]:
        return self._start_tech

    @property
    def ai_update_type(self) -> Optional[str]:
        return self._ai_update_type

    @property
    def cost(self) -> Optional[str]:
        return self._get_param(self._cost)

    @property
    def levels(self) -> Optional[str]:
        return self._levels

    @property
    def cost_per_level(self) -> Optional[str]:
        return self._cost_per_level

    @property
    def area(self) -> str:
        return Localisations.get_value(self._area)

    @property
    def tier(self) -> str:
        return self._get_param(self._tier)

    @property
    def is_rare(self) -> bool:
        return self._is_rare

    @property
    def prerequisites(self) -> str:
        result = ''
        if self._prerequisites:
            for item in self._prerequisites.split('\n'):
                for item2 in item.strip().split(' '):
                    result += Localisations.get_value(item2.strip().strip('"')) + '\n'
        return result

    @property
    def prerequisites2(self) -> str:
        result = []
        if self._prerequisites:
            for item in self._prerequisites.split('\n'):
                for item2 in item.strip().split(' '):
                    result.append('"' + Localisations.get_value(item2.strip().strip('"')) + '"')
        return '[' + ','.join(result) + ']'

    @property
    def category(self) -> str:
        return Localisations.get_value(self._category[0])

    @property
    def feature_flags(self) -> Optional[str]:
        return self._feature_flags

    @property
    def weight(self) -> str:
        return self._get_param(self._weight)

    @property
    def weight_modifier(self) -> str:
        if self._weight_modifier and self._weight_modifier[0]:
            return json.dumps(self._weight_modifier, indent=2).replace('"', '\\"').replace('\n', '\\n').replace('\\\\"', '\\"')
        return ''

    @property
    def weight_modifier2(self) -> str:
        if self._weight_modifier and self._weight_modifier[0]:
            return json.dumps(self._weight_modifier)
        return []

    @property
    def weight_groups(self) -> Optional[str]:
        return self._weight_groups

    @property
    def ai_weight(self) -> Optional[str]:
        return self._ai_weight

    @property
    def potential(self) -> str:
        if self._potential:
            return json.dumps(self._potential, indent=2).replace('"', '\\"').replace('\n', '\\n').replace('\\\\"', '\\"')
        return ''

    @property
    def potential2(self) -> str:
        if self._potential:
            return json.dumps(self._potential)
        return {}

    @property
    def mod_weight_if_group_picked(self) -> Optional[str]:
        return self._mod_weight_if_group_picked

    @property
    def modifier(self) -> Optional[str]:
        return self._modifier

    @property
    def technology_swap(self) -> Optional[str]:
        return self._technology_swap

    @property
    def gateway(self) -> Optional[str]:
        return self._gateway

    @property
    def is_reverse_engineerable(self) -> Optional[str]:
        return self._is_reverse_engineerable

    @property
    def prereqfor_desc(self) -> Optional[str]:
        return self._prereqfor_desc

    @property
    def is_insight(self) -> bool:
        return self._is_insight

    @property
    def is_dangerous(self) -> bool:
        return self._is_dangerous

    @property
    def starting_potential(self) -> dict[str]:
        return self._starting_potential

    @property
    def color(self) -> str:
        if self._is_dangerous:
            return '#ff0000'
        elif self._is_rare:
            return '#9370db'
        elif self._area == 'physics':
            return '#add8e6'
        elif self._area == 'society':
            return '#90ee90'
        elif self._area == 'engineering':
            return '#cd853f'
        else:
            return '#ffffff'

    def _get_param(self, target) -> str:
        if isinstance(target, int):
            return str(target)
        if isinstance(target, str):
            if target[0] == '@':
                return ScriptedVariables.get_value(target)
            else:
                return target
        if isinstance(target, list):
            return self._get_param(target[0]['factor'])
        if not target:
            return ''
        return target

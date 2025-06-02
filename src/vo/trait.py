from typing import Any

from src.readfile.localisations import Localisations
from src.vo.base_vo import BaseVo


class Trait(BaseVo):
    """
    Stellarisの建造物データを保持するイミュータブルなクラス。
    ファイルから解析された情報をコンストラクタで設定し、その後は変更できません。
    """

    def __init__(self,
                 file_path: str,
                 obj_id: str,
                 icon: dict[str] = None,
                 background_icon: str = None,
                 initial: bool = None,
                 randomized: bool = None,
                 immortal_leaders: bool = None,
                 force_councilor_trait: bool = None,
                 ftl_inhibitor: bool = None,
                 notify_on_gained: bool = None,
                 hide_age: bool = None,
                 starting_ruler_trait: bool = None,
                 ethic_destiny_trait: bool = None,
                 cost: str = None,
                 fleet_specialization_tag: str = None,
                 leader_class: list[str] = None,
                 leader_trait_type: str = None,
                 leader_trait_rarity: str = None,
                 leader_potential_add: dict[str] = None,
                 prerequisites: str = None,
                 sorting_priority: str = None,
                 replace_traits: list[str] = None,
                 allowed_origins: list[str] = None,
                 forbidden_origins: list[str] = None,
                 allowed_ethics: list[str] = None,
                 opposites: list[str] = None,
                 custom_subtitle: str = None,
                 custom_tooltip: str = None,
                 custom_tooltip_with_modifiers: str = None,
                 triggered_desc: list[dict[str]] = None,
                 modifier: list[dict[str]] = None,
                 self_modifier: list[dict[str]] = None,
                 planet_modifier: list[dict[str]] = None,
                 system_modifier: list[dict[str]] = None,
                 sector_modifier: list[dict[str]] = None,
                 fleet_modifier: list[dict[str]] = None,
                 army_modifier: list[dict[str]] = None,
                 galcom_modifier: list[dict[str]] = None,
                 federation_modifier: list[dict[str]] = None,
                 background_planet_modifier: list[dict[str]] = None,
                 councilor_modifier: list[dict[str]] = None,
                 triggered_modifier: list[dict[str]] = None,
                 triggered_self_modifier: list[dict[str]] = None,
                 triggered_planet_modifier: list[dict[str]] = None,
                 triggered_system_modifier: list[dict[str]] = None,
                 triggered_sector_modifier: list[dict[str]] = None,
                 triggered_fleet_modifier: list[dict[str]] = None,
                 triggered_army_modifier: list[dict[str]] = None,
                 triggered_galcom_modifier: list[dict[str]] = None,
                 triggered_federation_modifier: list[dict[str]] = None,
                 triggered_background_planet_modifier: list[dict[str]] = None,
                 triggered_councilor_modifier: list[dict[str]] = None,
                 on_gained_effect: dict[str] = None,
                 ai_weight: dict[str] = None,
                 selectable_weight: dict[str] = None,
                 trade_acceptance_weight: dict[str] = None,
                 species_potential_add: dict[str] = None,
                 **kwargs: Any):  # ここに **kwargs を追加し、任意の引数を受け取れるようにする
        super().__init__(file_path, obj_id, **kwargs)
        self._icon = icon or {}
        self._background_icon = background_icon
        self._initial = initial
        self._randomized = randomized
        self._immortal_leaders = immortal_leaders
        self._force_councilor_trait = force_councilor_trait
        self._ftl_inhibitor = ftl_inhibitor
        self._notify_on_gained = notify_on_gained
        self._hide_age = hide_age
        self._starting_ruler_trait = starting_ruler_trait
        self._ethic_destiny_trait = ethic_destiny_trait
        self._cost = cost
        self._fleet_specialization_tag = fleet_specialization_tag
        self._leader_class = leader_class or []
        self._leader_trait_type = leader_trait_type
        self._leader_trait_rarity = leader_trait_rarity
        self._leader_potential_add = leader_potential_add
        self._prerequisites = prerequisites
        self._sorting_priority = sorting_priority
        self._replace_traits = replace_traits or []
        self._allowed_origins = allowed_origins or []
        self._forbidden_origins = forbidden_origins or []
        self._allowed_ethics = allowed_ethics or []
        self._opposites = opposites or []
        self._custom_subtitle = custom_subtitle
        self._custom_tooltip = custom_tooltip
        self._custom_tooltip_with_modifiers = custom_tooltip_with_modifiers
        self._triggered_desc = triggered_desc or []
        self._modifier = modifier or []
        self._self_modifier = self_modifier or []
        self._planet_modifier = planet_modifier or []
        self._system_modifier = system_modifier or []
        self._sector_modifier = sector_modifier or []
        self._fleet_modifier = fleet_modifier or []
        self._army_modifier = army_modifier or []
        self._galcom_modifier = galcom_modifier or []
        self._federation_modifier = federation_modifier or []
        self._background_planet_modifier = background_planet_modifier or []
        self._councilor_modifier = councilor_modifier or []
        self._triggered_modifier = triggered_modifier or []
        self._triggered_self_modifier = triggered_self_modifier or []
        self._triggered_planet_modifier = triggered_planet_modifier or []
        self._triggered_system_modifier = triggered_system_modifier or []
        self._triggered_sector_modifier = triggered_sector_modifier or []
        self._triggered_fleet_modifier = triggered_fleet_modifier or []
        self._triggered_army_modifier = triggered_army_modifier or []
        self._triggered_galcom_modifier = triggered_galcom_modifier or []
        self._triggered_federation_modifier = triggered_federation_modifier or []
        self._triggered_background_planet_modifier = triggered_background_planet_modifier or []
        self._triggered_councilor_modifier = triggered_councilor_modifier or []
        self._on_gained_effect = on_gained_effect or {}
        self._ai_weight = ai_weight or {}
        self._selectable_weight = selectable_weight or {}
        self._trade_acceptance_weight = trade_acceptance_weight or {}
        self._species_potential_add = species_potential_add or {}

    # ゲッターメソッド（読み取り専用アクセスを提供）
    @property
    def icon(self) -> str:
        return self._get_param_json(self._icon)

    @property
    def background_icon(self) -> str:
        return self._background_icon

    @property
    def initial(self) -> str:
        return self._get_bool_str(self._initial)

    @property
    def randomized(self) -> str:
        return self._get_bool_str(self._randomized, 'yes')

    @property
    def immortal_leaders(self) -> str:
        return self._get_bool_str(self._immortal_leaders, 'no')

    @property
    def force_councilor_trait(self) -> str:
        return self._get_bool_str(self._force_councilor_trait, 'no')

    @property
    def ftl_inhibitor(self) -> str:
        return self._get_bool_str(self._get_bool_str(self._ftl_inhibitor, 'no'))

    @property
    def notify_on_gained(self) -> str:
        return self._get_bool_str(self._notify_on_gained, 'yes')

    @property
    def hide_age(self) -> bool:
        return self._hide_age

    @property
    def starting_ruler_trait(self) -> str:
        return self._get_bool_str(self._starting_ruler_trait, 'no')

    @property
    def ethic_destiny_trait(self) -> str:
        return self._get_bool_str(self._ethic_destiny_trait, 'no')

    @property
    def cost(self) -> str:
        return self._cost

    @property
    def fleet_specialization_tag(self) -> str:
        return self._fleet_specialization_tag

    @property
    def leader_class(self) -> Any:
        return self._leader_class

    @property
    def is_commander(self) -> str:
        return self._get_leader_class('commander')

    @property
    def is_official(self) -> str:
        return self._get_leader_class('official')

    @property
    def is_scientist(self) -> str:
        return self._get_leader_class('scientist')

    @property
    def leader_trait_type(self) -> str:
        return self._leader_trait_type or 'basic'

    @property
    def leader_trait_rarity(self) -> str:
        return self._leader_trait_rarity

    @property
    def leader_potential_add(self) -> str:
        return self._get_param_json(self._leader_potential_add)

    @property
    def prerequisites(self) -> str:
        result = ''
        if self._prerequisites:
            for item in self._prerequisites.split('\n'):
                result += Localisations.get_value(item.strip().strip('"')) + '\n'
        return result

    @property
    def sorting_priority(self) -> str:
        return self._sorting_priority

    @property
    def replace_traits(self) -> str:
        return self._get_list(self._replace_traits)

    @property
    def allowed_origins(self) -> str:
        return self._get_list(self._allowed_origins)

    @property
    def forbidden_origins(self) -> str:
        return self._get_list(self._forbidden_origins)

    @property
    def allowed_ethics(self) -> str:
        return self._get_list(self._allowed_ethics)

    @property
    def opposites(self) -> str:
        return self._get_list(self._opposites)

    @property
    def custom_subtitle(self) -> str:
        return self._custom_subtitle

    @property
    def custom_tooltip(self) -> str:
        return Localisations.get_value(self._custom_tooltip or '')

    @property
    def custom_tooltip_with_modifiers(self) -> str:
        return Localisations.get_value(self._custom_tooltip_with_modifiers or '')

    @property
    def triggered_desc(self) -> str:
        return self._get_modifier(self._triggered_desc)

    @property
    def modifiers(self) -> str:
        modifiers = {
            'リーダーアサイン時': self.modifier,
            '本人': self.self_modifier,
            '惑星': self.planet_modifier,
            '星系': self.system_modifier,
            'セクター': self.sector_modifier,
            '艦隊': self.fleet_modifier,
            '地上軍': self.army_modifier,
            '銀河共同体': self.galcom_modifier,
            '連邦': self.federation_modifier,
            '出身地': self.background_planet_modifier,
            '評議会': self.councilor_modifier,
            'リーダーアサイン時(条件あり)': self.triggered_modifier,
            '本人(条件あり)': self.triggered_self_modifier,
            '惑星(条件あり)': self.triggered_planet_modifier,
            '星系(条件あり)': self.triggered_system_modifier,
            'セクター(条件あり)': self.triggered_sector_modifier,
            '艦隊(条件あり)': self.triggered_fleet_modifier,
            '地上軍(条件あり)': self.triggered_army_modifier,
            '銀河共同体(条件あり)': self.triggered_galcom_modifier,
            '連邦(条件あり)': self.triggered_federation_modifier,
            '出身地(条件あり)': self.triggered_background_planet_modifier,
            '評議会(条件あり)': self.triggered_councilor_modifier,
            'custom_tooltip': self.custom_tooltip,
            'custom_tooltip_with_modifiers': self.custom_tooltip_with_modifiers,
            'triggered_desc': self.triggered_desc,
        }
        result = ''
        for key, value in modifiers.items():
            if value:
                result += key + ': +\n' + value
        return result

    @property
    def modifier(self) -> str:
        return self._get_modifier(self._modifier, 'mod_')

    @property
    def self_modifier(self) -> str:
        return self._get_modifier(self._self_modifier, 'mod_')

    @property
    def planet_modifier(self) -> str:
        return self._get_modifier(self._planet_modifier, 'mod_')

    @property
    def system_modifier(self) -> str:
        return self._get_modifier(self._system_modifier, 'mod_')

    @property
    def sector_modifier(self) -> str:
        return self._get_modifier(self._sector_modifier, 'mod_')

    @property
    def fleet_modifier(self) -> str:
        return self._get_modifier(self._fleet_modifier, 'mod_')

    @property
    def army_modifier(self) -> str:
        return self._get_modifier(self._army_modifier, 'mod_')

    @property
    def galcom_modifier(self) -> str:
        return self._get_modifier(self._galcom_modifier, 'mod_')

    @property
    def federation_modifier(self) -> str:
        return self._get_modifier(self._federation_modifier, 'mod_')

    @property
    def background_planet_modifier(self) -> str:
        return self._get_modifier(self._background_planet_modifier, 'mod_')

    @property
    def councilor_modifier(self) -> str:
        return self._get_modifier(self._councilor_modifier, 'mod_')

    @property
    def triggered_modifier(self) -> str:
        return self._get_modifier(self._triggered_modifier, 'mod_')

    @property
    def triggered_self_modifier(self) -> str:
        return self._get_modifier(self._triggered_self_modifier, 'mod_')

    @property
    def triggered_planet_modifier(self) -> str:
        return self._get_modifier(self._triggered_planet_modifier, 'mod_')

    @property
    def triggered_system_modifier(self) -> str:
        return self._get_modifier(self._triggered_system_modifier, 'mod_')

    @property
    def triggered_sector_modifier(self) -> str:
        return self._get_modifier(self._triggered_sector_modifier, 'mod_')

    @property
    def triggered_fleet_modifier(self) -> str:
        return self._get_modifier(self._triggered_fleet_modifier, 'mod_')

    @property
    def triggered_army_modifier(self) -> str:
        return self._get_modifier(self._triggered_army_modifier, 'mod_')

    @property
    def triggered_galcom_modifier(self) -> str:
        return self._get_modifier(self._triggered_galcom_modifier, 'mod_')

    @property
    def triggered_federation_modifier(self) -> str:
        return self._get_modifier(self._triggered_federation_modifier, 'mod_')

    @property
    def triggered_background_planet_modifier(self) -> str:
        return self._get_modifier(self._triggered_background_planet_modifier, 'mod_')

    @property
    def triggered_councilor_modifier(self) -> str:
        return self._get_modifier(self._triggered_councilor_modifier, 'mod_')

    @property
    def on_gained_effect(self) -> str:
        return self._get_param_json(self._on_gained_effect)

    @property
    def ai_weight(self) -> str:
        return self._get_param_json(self._ai_weight)

    @property
    def selectable_weight(self) -> str:
        return self._get_param_json(self._selectable_weight)

    @property
    def trade_acceptance_weight(self) -> str:
        return self._get_param_json(self._trade_acceptance_weight)

    @property
    def species_potential_add(self) -> str:
        return self._get_param_json(self._species_potential_add)

    def _get_leader_class(self, key: str) -> str:
        if key in self._leader_class or self._leader_class == 'all':
            return 'yes'
        else:
            return 'no'

    def __repr__(self) -> str:
        return f"trait(id='{self._obj_id}')"

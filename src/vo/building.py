from typing import Any, Optional

from src.vo.base_vo import BaseVo


class Building(BaseVo):

    def __init__(self,
                 file_path: str,
                 obj_id: str,
                 capital: Optional[bool] = None,
                 can_build: Optional[bool] = None,
                 can_demolish: Optional[bool] = None,
                 can_be_ruined: Optional[bool] = None,
                 can_be_disabled: Optional[bool] = None,
                 planetary_ftl_inhibitor: Optional[bool] = None,
                 position_priority: Optional[str] = None,
                 skip_automation_upgrading: Optional[bool] = None,
                 category: Optional[str] = None,
                 building_sets: Optional[list[str]] = None,
                 desc: Optional[list[str]] = None,
                 empire_limit: Optional[str] = None,
                 planet_limit: Optional[str] = None,
                 potential: Optional[str] = None,
                 convert_to: Optional[list[str]] = None,
                 allow: Optional[str] = None,
                 upgrades: Optional[list[str]] = None,
                 prerequisites: Optional[list[str]] = None,
                 show_tech_unlock_if: Optional[str] = None,
                 on_enabled: Optional[str] = None,
                 on_queued: Optional[str] = None,
                 on_unqueued: Optional[str] = None,
                 on_built: Optional[str] = None,
                 on_destroy: Optional[str] = None,
                 on_repaired: Optional[str] = None,
                 country_modifier: Optional[list[str]] = None,
                 planet_modifier: Optional[list[str]] = None,
                 inline_script: Optional[list[str]] = None,
                 triggered_country_modifier: Optional[list[str]] = None,
                 triggered_planet_modifier: Optional[list[str]] = None,
                 triggered_planet_pop_group_modifier_for_species: Optional[list[str]] = None,
                 triggered_planet_pop_group_modifier_for_all: Optional[list[str]] = None,
                 resources: Optional[str] = None,
                 triggered_desc: Optional[list[str]] = None,
                 destroy_trigger: Optional[str] = None,
                 additional_ai_weight: Optional[int] = None,
                 custom_storm_ai_weight: Optional[list[str]] = None,
                 icon: Optional[str] = None,
                 ruined_icon: Optional[str] = None,
                 base_buildtime: Optional[str] = None,
                 is_essential: Optional[bool] = None,
                 exempt_from_ai_planet_specialization: Optional[bool] = None,
                 ai_estimate_without_unemployment: Optional[bool] = None,
                 ai_resource_production: Optional[str] = None,
                 ai_weight_coefficient: Optional[str] = None,
                 ai_weight: Optional[str] = None,
                 show_in_tech: Optional[bool] = None,
                 owner_type: Optional[bool] = None,
                 custom_tooltip:  Optional[bool] = None,
                 **kwargs: Any):  # ここに **kwargs を追加し、任意の引数を受け取れるようにする

        super().__init__(file_path, obj_id, **kwargs)
        self._capital = capital
        self._can_build = can_build
        self._can_demolish = can_demolish
        self._can_be_ruined = can_be_ruined
        self._can_be_disabled = can_be_disabled
        self._planetary_ftl_inhibitor = planetary_ftl_inhibitor
        self._position_priority = position_priority
        self._skip_automation_upgrading = skip_automation_upgrading
        self._category = category
        self._building_sets = building_sets or []
        self._desc = desc or []
        self._empire_limit = empire_limit
        self._planet_limit = planet_limit
        self._potential = potential
        self._convert_to = convert_to or []
        self._allow = allow
        self._upgrades = upgrades or []
        self._prerequisites = prerequisites or []
        self._show_tech_unlock_if = show_tech_unlock_if
        self._on_enabled = on_enabled
        self._on_queued = on_queued
        self._on_unqueued = on_unqueued
        self._on_built = on_built
        self._on_destroy = on_destroy
        self._on_repaired = on_repaired
        self._country_modifier = country_modifier
        self._planet_modifier = planet_modifier or []
        self._inline_script = inline_script or []
        self._triggered_country_modifier = triggered_country_modifier or []
        self._triggered_planet_modifier = triggered_planet_modifier or []
        self._triggered_planet_pop_group_modifier_for_species = triggered_planet_pop_group_modifier_for_species or []
        self._triggered_planet_pop_group_modifier_for_all = triggered_planet_pop_group_modifier_for_all or []
        self._resources = resources
        self._triggered_desc = triggered_desc or []
        self._destroy_trigger = destroy_trigger
        self._additional_ai_weight = additional_ai_weight
        self._custom_storm_ai_weight = custom_storm_ai_weight
        self._icon = icon
        self._ruined_icon = ruined_icon
        self._base_buildtime = base_buildtime
        self._is_essential = is_essential
        self._exempt_from_ai_planet_specialization = exempt_from_ai_planet_specialization
        self._ai_estimate_without_unemployment = ai_estimate_without_unemployment
        self._ai_resource_production = ai_resource_production
        self._ai_weight_coefficient = ai_weight_coefficient
        self._ai_weight = ai_weight
        self._show_in_tech = show_in_tech
        self._owner_type = owner_type
        self._custom_tooltip = custom_tooltip

    # ゲッターメソッド（読み取り専用アクセスを提供）
    @property
    def capital(self) -> Optional[bool]:
        return self._capital

    @property
    def can_build(self) -> Optional[bool]:
        return self._can_build

    @property
    def can_demolish(self) -> Optional[bool]:
        return self._can_demolish

    @property
    def can_be_ruined(self) -> Optional[bool]:
        return self._can_be_ruined

    @property
    def can_be_disabled(self) -> Optional[bool]:
        return self._can_be_disabled

    @property
    def planetary_ftl_inhibitor(self) -> Optional[bool]:
        return self._planetary_ftl_inhibitor

    @property
    def position_priority(self) -> Optional[int]:
        return self._position_priority

    @property
    def skip_automation_upgrading(self) -> Optional[bool]:
        return self._skip_automation_upgrading

    @property
    def category(self) -> Optional[str]:
        return self._category

    @property
    def building_sets(self) -> list[str]:
        return self._building_sets

    @property
    def desc(self) -> list[str]:
        return self._desc

    @property
    def empire_limit(self) -> Optional[str]:
        return self._empire_limit

    @property
    def planet_limit(self) -> Optional[str]:
        return self._planet_limit

    @property
    def potential(self) -> Optional[str]:
        return self._potential

    @property
    def convert_to(self) -> list[str]:
        return self._convert_to

    @property
    def allow(self) -> Optional[str]:
        return self._allow

    @property
    def upgrades(self) -> list[str]:
        return self._upgrades

    @property
    def prerequisites(self) -> list[str]:
        return self._prerequisites

    @property
    def show_tech_unlock_if(self) -> Optional[str]:
        return self._show_tech_unlock_if

    @property
    def on_enabled(self) -> Optional[str]:
        return self._on_enabled

    @property
    def on_queued(self) -> Optional[str]:
        return self._on_queued

    @property
    def on_unqueued(self) -> Optional[str]:
        return self._on_unqueued

    @property
    def on_built(self) -> Optional[str]:
        return self._on_built

    @property
    def on_destroy(self) -> Optional[str]:
        return self._on_destroy

    @property
    def on_repaired(self) -> Optional[str]:
        return self._on_repaired

    @property
    def country_modifier(self) -> Optional[str]:
        return self._country_modifier

    @property
    def planet_modifier(self) -> Optional[str]:
        return self._planet_modifier

    @property
    def inline_script(self) -> list[str]:
        return self._inline_script

    @property
    def triggered_country_modifier(self) -> list[str]:
        return self._triggered_country_modifier

    @property
    def triggered_planet_modifier(self) -> list[str]:
        return self._triggered_planet_modifier

    @property
    def triggered_planet_pop_group_modifier_for_species(self) -> list[str]:
        return self._triggered_planet_pop_group_modifier_for_species

    @property
    def triggered_planet_pop_group_modifier_for_all(self) -> list[str]:
        return self._triggered_planet_pop_group_modifier_for_all

    @property
    def resources(self) -> Optional[str]:
        return self._resources

    @property
    def triggered_desc(self) -> list[str]:
        return self._triggered_desc

    @property
    def destroy_trigger(self) -> Optional[str]:
        return self._destroy_trigger

    @property
    def additional_ai_weight(self) -> Optional[int]:
        return self._additional_ai_weight

    @property
    def custom_storm_ai_weight(self) -> Optional[int]:
        return self._custom_storm_ai_weight

    @property
    def icon(self) -> Optional[str]:
        return self._icon

    @property
    def ruined_icon(self) -> Optional[str]:
        return self._ruined_icon

    @property
    def base_buildtime(self) -> Optional[str]:
        return self._base_buildtime

    @property
    def is_essential(self) -> Optional[bool]:
        return self._is_essential

    @property
    def exempt_from_ai_planet_specialization(self) -> Optional[bool]:
        return self._exempt_from_ai_planet_specialization

    @property
    def ai_estimate_without_unemployment(self) -> Optional[bool]:
        return self._ai_estimate_without_unemployment

    @property
    def ai_resource_production(self) -> Optional[str]:
        return self._ai_resource_production

    @property
    def ai_weight_coefficient(self) -> Optional[str]:
        return self._ai_weight_coefficient

    @property
    def ai_weight(self) -> Optional[str]:
        return self._ai_weight

    @property
    def show_in_tech(self) -> Optional[str]:
        return self._show_in_tech

    @property
    def owner_type(self) -> Optional[str]:
        return self._owner_type

    @property
    def custom_tooltip(self) -> Optional[str]:
        return self._custom_tooltip

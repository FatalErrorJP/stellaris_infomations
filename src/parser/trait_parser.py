from typing import Type

from src.parser.base_parser import BaseParser
from src.vo.trait import Trait


class TraitParser(BaseParser):
    _model_class: Type[Trait] = Trait

    def _get_simlle_list_keys(self) -> list[str]:
        return ['opposites', 'leader_class', 'replace_traits', 'allowed_origins', 'forbidden_origins', 'allowed_ethics']

    def _get_prerequisites_block_keys(self) -> list[str]:
        return ['prerequisites']

    def _multi_raw_string_block_keys(self) -> list[str]:
        return ['icon', 'inline_script', 'triggered_desc', 'modifier', 'self_modifier', 'planet_modifier', 'system_modifier', 'sector_modifier', 'fleet_modifier',
                'army_modifier', 'galcom_modifier', 'federation_modifier', 'background_planet_modifier', 'councilor_modifier', 'triggered_modifier',
                'triggered_self_modifier', 'triggered_planet_modifier', 'triggered_system_modifier', 'triggered_sector_modifier',
                'triggered_fleet_modifier', 'triggered_army_modifier', 'triggered_galcom_modifier', 'triggered_federation_modifier',
                'triggered_background_planet_modifier', 'triggered_councilor_modifier']

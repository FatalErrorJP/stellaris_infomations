from typing import Type

from src.parser.base_parser import BaseParser
from src.vo.technology import Technology


class TechnologyParser(BaseParser):
    _model_class: Type[Technology] = Technology

    def _get_simlle_list_keys(self) -> list[str]:
        return ['category', 'feature_flags', 'weight_groups']

    def _get_prerequisites_block_keys(self) -> list[str]:
        return ['prerequisites']

    def _multi_raw_string_block_keys(self) -> list[str]:
        return ['cost', 'modifier', 'weight_modifier', 'technology_swap', 'prereqfor_desc']

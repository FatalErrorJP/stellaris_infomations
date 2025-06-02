import glob
import os
import pprint
from typing import Type

from src.parser.base_parser import BaseParser
from src.settings import settings
from src.vo.building import Building


class BuildingParser(BaseParser):
    _model_class: Type[Building] = Building

    def _get_simlle_list_keys(self) -> list[str]:
        return ['building_sets', 'convert_to', 'upgrades', 'prerequisites']

    def _get_prerequisites_block_keys(self) -> list[str]:
        return ['empire_limit', 'planet_limit', 'potential', 'allow', 'show_tech_unlock_if', 'on_enabled', 'on_queued', 'on_built', 'on_destroy', 'on_repaired',
                'planet_modifier', 'resources', 'custom_storm_ai_weight', 'ai_weight', 'destroy_trigger', 'ai_resource_production']

    def _multi_raw_string_block_keys(self) -> list[str]:
        return ['inline_script', 'desc', 'country_modifier', 'planet_modifier', 'triggered_country_modifier', 'triggered_planet_modifier', 'triggered_planet_pop_group_modifier_for_species',
                'triggered_planet_pop_group_modifier_for_all', 'triggered_desc']


# --- 使用例 ---
if __name__ == "__main__":
    dir = os.path.join(settings.GAME_BASE_DIR, 'common/buildings/')
    files = glob.glob('*.txt', root_dir=dir)
    for file in files:
        file_path = os.path.join(dir, file)
        print("=====" + file_path)
        parser = BuildingParser()
        buildings = parser.parse_file(file_path)
        print(f"Parsed {len(buildings)} buildings.")

        # 各ビルディングの情報を表示
        for building in buildings:
            #pprint.pprint(vars(building), sort_dicts=False)
            if building.extra_properties:
                print("==" + building.obj_id)
                print(building.extra_properties)
        #    if building.inline_script:
        #        print("==" + building.id)
        #        print(building.inline_script)

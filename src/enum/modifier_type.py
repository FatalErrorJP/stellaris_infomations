from enum import Enum


class ModifierType(Enum):
    Modifiers = {
        'name': 'modifier', 'desc': 'リーダーアサイン時: +\n'
    }
    Self_modifier = {
        'name': 'self_modifier', 'desc': '本人: +\n'
    }
    Planet_modifier = {
        'name': 'planet_modifier', 'desc': '惑星: +\n'
    }
    System_modifier = {
        'name': 'system_modifier', 'desc': '星系: +\n'
    }
    Sector_modifier = {
        'name': 'sector_modifier', 'desc': 'セクター: +\n'
    }
    Fleet_modifier = {
        'name': 'fleet_modifier', 'desc': '艦隊: +\n'
    }
    Army_modifier = {
        'name': 'army_modifier', 'desc': '地上軍: +\n'
    }
    Galcom_modifier = {
        'name': 'galcom_modifier', 'desc': '銀河共同体: +\n'
    }
    Federation_modifier = {
        'name': 'federation_modifier', 'desc': '連邦: +\n'
    }
    Background_planet_modifier = {
        'name': 'background_planet_modifier', 'desc': '出身地: +\n'
    }
    Cuncilor_modifier = {
        'name': 'councilor_modifier', 'desc': '評議会: +\n'
    }
    Triggered_modifier = {
        'name': 'triggered_modifier', 'desc': 'リーダーアサイン時(条件あり): +\n'
    }
    Triggered_self_modifier = {
        'name': 'triggered_self_modifier', 'desc': '本人(条件あり): +\n'
    }
    Triggered_planet_modifier = {
        'name': 'triggered_planet_modifier', 'desc': '惑星(条件あり): +\n'
    }
    Triggered_system_modifier = {
        'name': 'triggered_system_modifier', 'desc': '星系(条件あり): +\n'
    }
    Triggered_sector_modifier = {
        'name': 'triggered_sector_modifier', 'desc': 'セクター(条件あり): +\n'
    }
    Triggered_fleet_modifier = {
        'name': 'triggered_fleet_modifier', 'desc': '艦隊(条件あり): +\n'
    }
    Triggered_army_modifier = {
        'name': 'triggered_army_modifier', 'desc': '地上軍(条件あり): +\n'
    }
    Triggered_galcom_modifier = {
        'name': 'triggered_galcom_modifier', 'desc': '銀河共同体(条件あり): +\n'
    }
    Triggered_federation_modifier = {
        'name': 'triggered_federation_modifier', 'desc': '連邦(条件あり): +\n'
    }
    Triggered_background_planet_modifier = {
        'name': 'triggered_background_planet_modifier', 'desc': '出身地(条件あり): +\n'
    }
    Triggered_councilor_modifier = {
        'name': 'triggered_councilor_modifier', 'desc': '評議会(条件あり): +\n'
    }
    Custom_tooltip = {
        'name': 'custom_tooltip', 'desc': 'custom_tooltip: +\n'
    }
    Custom_tooltip_with_modifiers = {
        'name': 'custom_tooltip_with_modifiers', 'desc': 'custom_tooltip_with_modifiers: +\n'
    }
    Triggered_desc = {
        'name': 'triggered_desc', 'desc': 'triggered_desc: +\n'
    }

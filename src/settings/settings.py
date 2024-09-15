#!/usr/bin/env python3
# -*- coding: utf-8 -*-
###############################################################################
# 共通設定
# GAME_BASE_DIR: Stellarisのディレクトリパス
# VERSION_FILE_NAME: Stellarisのバージョン情報の記載されているファイル名
# LOCALISATION_DIR: Stellarisの日本語ローカライズファイルのフォルダパス
###############################################################################
GAME_BASE_DIR = 'C:/Program Files (x86)/Steam/steamapps/common/Stellaris'
VERSION_FILE_NAME = 'launcher-settings.json'
LEADER_TRAIT_DIR = 'common/traits'
TECHNOLOGY_DIR = 'common/technology'
SCRIPTED_VARIABLES_DIR = 'common/scripted_variables'
INLINE_SCRIPTS_DIR = 'common/inline_scripts'
LOCALISATION_DIR = 'localisation/japanese'
OUTPUT_DIR = './tmp'
OUTPUT_LEADER_TRAIT_FILE = 'leader_traits.adoc'
OUTPUT_TECHNOLOGY_FILE = 'tech_tree.dot'
OUTPUT_TECHNOLOGY_FILE2 = 'tech_tree_elements.js'

###############################################################################
# AsciiDocのテンプレート設定
###############################################################################
TEMPLATE_TITLE = '''= {title} Ver{version}
最終更新日: {{docdatetime}}
:docinfo: private,shared
:docinfodir: ../staticfile/meta
:table-caption: 表

'''

# leader_traits関連テンプレート
TEMPLATE_LEADER_TRAITS_HEADER = '''[[GotoTop]]
link:./[トップへ戻る]

[cols="24*a", separator=＆, options="autowidth,header"]
.リーダー特性一覧
|===
＆物理名 ＆論理名 ＆司令官 ＆役人 ＆科学者 ＆特性タイプ ＆評議会 ＆ティア
＆効果 ＆不死 ＆FTL妨害 ＆緊急FTLの利用 ＆特性取得時に発生するEffect
＆initial ＆randomized  ＆replace_traits
＆統治者作成時に設定可能な特性 ＆統治者作成時に設定可能な起源 ＆統治者作成時に設定不可能な起源 ＆統治者作成時に設定可能な志向
＆習得条件 ＆前提技術 ＆排他特性 ＆志向特有の運命特性
'''
TEMPLATE_LEADER_TRAITS_DATA = '''＆ {key}
＆ {name}
＆ {commander}
＆ {official}
＆ {scientist}
＆ {leader_trait_type}
＆ {council}
＆ {tier}
＆ {modifier}
＆ {immortal_leaders}
＆ {ftl_inhibitor}
＆ {can_retreat}
＆ {on_gained_effect}
＆ {initial}
＆ {randomized}
＆ {replace_traits}
＆ {starting_ruler_trait}
＆ {allowed_origins}
＆ {forbidden_origins}
＆ {allowed_ethics}
＆ {leader_potential_add}
＆ {prerequisites}
＆ {opposites}
＆ {ethic_destiny_trait}
'''
TEMPLATE_FOOTER = '''|===
'''

# technology関連テンプレート
TEMPLATE_TECHNOLOGY_HEADER = '''
digraph tech_tree {{
  compound = true;
  concentrate=true;
  ranksep = 2;
  label = "{version}"
  graph [
    charset="UTF-8",
    layout = dot,
    rankdir="LR",
    fontname="BIZ UDPGothic",
    fontsize="12pt",
    overlap=false,
    splines=true,
    remincross=true
  ];
  node [
    fontname="BIZ UDPGothic",
    shape = "box",
    fontsize="10pt",
    margin="0.3,0.1",
  ];
  edge [
    fontname="BIZ UDPGothic",
  ];
'''
TEMPLATE_TECHNOLOGY_DATA_1 = '''
  subgraph cluster_{key} {{
    label = "{name}"
    {key}_info [
        label = "{area}({category})\\ltier:{tier}\\lcost:{cost}\\lweight:{weight}\\l"
        tooltip = "weight_modifier:\\n{weight_modifier}"
    ];
    tooltip = "前提研究:\\n{prerequisites}\\n\\nその他の条件:\\n{potential}"
    bgcolor="{color}"
  }}
'''
TEMPLATE_TECHNOLOGY_DATA_2 = '''  {key1}_info->{key2}_info[ltail=cluster_{key1}, lhead=cluster_{key2}];
'''
TEMPLATE_TECHNOLOGY_FOOTER = '''}
'''

TEMPLATE_TECHNOLOGY2_HEADER = '''
function getVersion() {{
    return "{version}";
}}

function getElements() {{
    return [
'''
TEMPLATE_TECHNOLOGY2_DATA_1 = '''{{
    data: {{
      id: '{key}',
      name: '{name}',
      tier: {tier},
      cost: {cost},
      area:'{area}',
      category: '{category}',
      weight: {weight},
      weight_modifier: {weight_modifier},
      prerequisites: {prerequisites},
      potential: {potential}
    }},
    classes: '{color}'
}},
'''
TEMPLATE_TECHNOLOGY2_DATA_2 = '''{{ data: {{ id: '{key1}_to_{key2}', source: '{key1}', target: '{key2}' }} }},
'''
TEMPLATE_TECHNOLOGY2_FOOTER = '''    ];
}
'''
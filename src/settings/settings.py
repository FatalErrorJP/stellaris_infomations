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
INLINE_SCRIPTS_DIR = 'common/inline_scripts'
LOCALISATION_DIR = 'localisation/japanese'
OUTPUT_DIR = './asciidoc'
OUTPUT_LEADER_TRAIT_FILE = 'leader_traits.adoc'

###############################################################################
# AsciiDocのテンプレート設定
###############################################################################
TEMPLATE_TITLE = '''= リーダー特性一覧 Ver{version}
最終更新日: {{docdatetime}}
:docinfo: private,shared
:docinfodir: ../staticfile/meta
:table-caption: 表

'''
TEMPLATE_HEADER = '''[[GotoTop]]
link:./[トップへ戻る]

[cols="27*a", separator=＆, options="autowidth,header"]
.リーダー特性一覧
|===
＆物理名 ＆論理名 ＆司令官 ＆役人 ＆科学者 ＆レアリティ ＆サブクラス ＆ネガティブ ＆評議会 ＆ティア
＆効果 ＆不死 ＆FTL妨害 ＆緊急FTLの利用 ＆特性取得時に発生するEffect
＆initial ＆randomized  ＆熟練クラスの保持が必要 ＆replace_traits
＆統治者作成時に設定可能な特性 ＆統治者作成時に設定可能な起源 ＆統治者作成時に設定不可能な起源 ＆統治者作成時に設定可能な志向
＆習得条件 ＆前提技術 ＆排他特性 ＆志向特有の運命特性
'''
TEMPLATE_DATA = '''＆ {key}
＆ {name}
＆ {commander}
＆ {official}
＆ {scientist}
＆ {rarity}
＆ {subclass_trait}
＆ {negative}
＆ {council}
＆ {tier}
＆ {modifier}
＆ {immortal_leaders}
＆ {ftl_inhibitor}
＆ {can_retreat}
＆ {on_gained_effect}
＆ {initial}
＆ {randomized}
＆ {veteran_class_locked_trait}
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

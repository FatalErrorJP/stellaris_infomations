
function getVersion() {
    return "v4.0.13";
}

function getElements() {
    return [
{
    data: {
      id: 'tech_wilderness_terraform',
      name: '惑星上発芽',
      tier: 0,
      cost: 1000,
      area:'社会学',
      category: '新天地',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"is_wilderness_empire": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_solar_panel_network',
      name: '軌道エネルギー変換',
      tier: 0,
      cost: 0,
      area:'工学',
      category: '宇宙工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["星系港の建設"],
      potential: {"is_gestalt": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_space_exploration',
      name: '宇宙探索',
      tier: 0,
      cost: 0,
      area:'工学',
      category: '宇宙工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_corvettes',
      name: 'コルベット',
      tier: 0,
      cost: 1000,
      area:'工学',
      category: '宇宙工学',
      weight: 0,
      weight_modifier: {"factor": 1000},
      prerequisites: ["星系港の建設"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_starbase_1',
      name: '星系基地建設',
      tier: 0,
      cost: 0,
      area:'工学',
      category: '宇宙工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["宇宙建設"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_starbase_2',
      name: '星系港の建設',
      tier: 0,
      cost: 0,
      area:'工学',
      category: '宇宙工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["星系基地建設"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_assault_armies',
      name: '惑星間遠征軍',
      tier: 0,
      cost: 2000,
      area:'工学',
      category: '宇宙工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["惑星防衛"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_ship_armor_1',
      name: 'ナノ複合材',
      tier: 0,
      cost: 2000,
      area:'工学',
      category: '材料工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_thrusters_1',
      name: '化学スラスター',
      tier: 0,
      cost: 0,
      area:'工学',
      category: '推進システム工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_space_defense_station_1',
      name: '深宇宙防衛',
      tier: 0,
      cost: 0,
      area:'工学',
      category: '宇宙工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["星系基地建設"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_basic_industry',
      name: '産業基盤',
      tier: 0,
      cost: 0,
      area:'工学',
      category: '産業学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mechanized_mining',
      name: '機械化採掘',
      tier: 0,
      cost: 0,
      area:'工学',
      category: '産業学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_space_construction',
      name: '宇宙建設',
      tier: 0,
      cost: 0,
      area:'工学',
      category: '産業学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mass_drivers_1',
      name: 'マスドライバー',
      tier: 0,
      cost: 1000,
      area:'工学',
      category: '推進システム工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_flak_batteries_1',
      name: '対空砲',
      tier: 0,
      cost: 0,
      area:'工学',
      category: '推進システム工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_missiles_1',
      name: '核ミサイル',
      tier: 0,
      cost: 0,
      area:'工学',
      category: '推進システム工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"OR": {"country_uses_bio_ships": "no", "has_tradition": "tr_nanotech_4", "has_crisis_level": "crisis_level_2", "has_technology": "tech_cosmogenesis_escort"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_subspace_drive',
      name: '亜空間ドライブ',
      tier: 0,
      cost: 1000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_basic_science_lab_1',
      name: '科学的検証',
      tier: 0,
      cost: 1000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 0,
      weight_modifier: {"factor": 1000},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_fission_power',
      name: '核分裂発電',
      tier: 0,
      cost: 0,
      area:'物理学',
      category: '素粒子物理学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_reactor_boosters_1',
      name: 'リアクターブースター',
      tier: 0,
      cost: 0,
      area:'物理学',
      category: '素粒子物理学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["核分裂発電"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_shields_1',
      name: 'デフレクター',
      tier: 0,
      cost: 0,
      area:'物理学',
      category: '力場操作',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_power_plant_1',
      name: '高エネルギーコンデンサ',
      tier: 0,
      cost: 0,
      area:'物理学',
      category: '力場操作',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_hyper_drive_1',
      name: 'ハイパースペース航行',
      tier: 0,
      cost: 1500,
      area:'物理学',
      category: '素粒子物理学',
      weight: 0,
      weight_modifier: {"factor": 1000},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_lasers_1',
      name: '赤色レーザー',
      tier: 0,
      cost: 1000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_pd_tracking_1',
      name: 'アクティブ防衛',
      tier: 0,
      cost: 0,
      area:'物理学',
      category: 'コンピュータ',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_critter_feeder',
      name: '果実の庭',
      tier: 0,
      cost: 0,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {"factor": 1000},
      prerequisites: [],
      potential: {"has_origin": "origin_fruitful"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_planetary_defenses',
      name: '惑星防衛',
      tier: 0,
      cost: 0,
      area:'社会学',
      category: '軍事学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_interplanetary_commerce',
      name: '恒星間商業取引',
      tier: 0,
      cost: 0,
      area:'社会学',
      category: '統治学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"is_gestalt": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_industrial_farming',
      name: '農産業',
      tier: 0,
      cost: 0,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_hydroponics',
      name: '水耕栽培',
      tier: 0,
      cost: 0,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {"factor": 2, "modifier": {"factor": 2, "country_uses_bio_ships": "yes"}},
      prerequisites: [],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_colonization_1',
      name: '新天地プロトコル',
      tier: 0,
      cost: 0,
      area:'社会学',
      category: '新天地',
      weight: 0,
      weight_modifier: {"factor": 1000},
      prerequisites: ["宇宙探索"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_basic_health',
      name: '医療',
      tier: 0,
      cost: 0,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"is_regular_empire": "yes", "is_individual_machine": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_planetary_government',
      name: '惑星政府',
      tier: 0,
      cost: 1000,
      area:'社会学',
      category: '統治学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_holo_entertainment',
      name: 'ホロ・エンターテインメント',
      tier: 0,
      cost: 0,
      area:'社会学',
      category: '統治学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"is_gestalt": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_cultural_heritage',
      name: '社会文化史',
      tier: 0,
      cost: 0,
      area:'社会学',
      category: '統治学',
      weight: 0,
      weight_modifier: [],
      prerequisites: [],
      potential: {"OR": {"is_hive_empire": "no", "is_memorialist_empire": "yes"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_hive_node',
      name: 'シナプス構造体',
      tier: 0,
      cost: 0,
      area:'社会学',
      category: '統治学',
      weight: 0,
      weight_modifier: [],
      prerequisites: [],
      potential: {"is_hive_empire": "yes", "is_wilderness_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_wilderness_node',
      name: '存在の中心',
      tier: 0,
      cost: 0,
      area:'社会学',
      category: '統治学',
      weight: 0,
      weight_modifier: [],
      prerequisites: [],
      potential: {"is_wilderness_empire": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_maulers',
      name: 'モーラー',
      tier: 1,
      cost: 1000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_mauler_build_speed',
      name: 'モーラ―の孵化の標準化',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '生物学',
      weight: 95,
      weight_modifier: [],
      prerequisites: ["モーラー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_mauler_growth_1',
      name: '改良型モーラ―の開発',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '生物学',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["モーラー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_mauler_growth_2',
      name: '発展型モーラ―の開発',
      tier: 1,
      cost: 3000,
      area:'社会学',
      category: '生物学',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["改良型モーラ―の開発"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weavers',
      name: 'ウィーヴァー',
      tier: 1,
      cost: 2000,
      area:'社会学',
      category: '生物学',
      weight: 100,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["モーラー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_build_speed',
      name: 'ウィーヴァーの孵化の標準化',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '生物学',
      weight: 95,
      weight_modifier: [],
      prerequisites: ["ウィーヴァー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_healing_1',
      name: '胞子投射機',
      tier: 1,
      cost: 2000,
      area:'社会学',
      category: '生物学',
      weight: 100,
      weight_modifier: {},
      prerequisites: ["ウィーヴァー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_evasion_1',
      name: 'エネルギー・バースター',
      tier: 1,
      cost: 2000,
      area:'社会学',
      category: '生物学',
      weight: 100,
      weight_modifier: {},
      prerequisites: ["ウィーヴァー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_fire_rate_1',
      name: 'ウィーヴァー・バイオフィールドジェネレーター',
      tier: 1,
      cost: 2000,
      area:'社会学',
      category: '生物学',
      weight: 100,
      weight_modifier: {},
      prerequisites: ["ウィーヴァー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_confuser_1',
      name: 'グルーム・スポア',
      tier: 1,
      cost: 2000,
      area:'社会学',
      category: '生物学',
      weight: 100,
      weight_modifier: {},
      prerequisites: ["ウィーヴァー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_anti_evasion_1',
      name: 'ヴェクターロック砲',
      tier: 1,
      cost: 2000,
      area:'社会学',
      category: '生物学',
      weight: 100,
      weight_modifier: {},
      prerequisites: ["ウィーヴァー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_anti_fire_rate_1',
      name: 'リロードジャマー',
      tier: 1,
      cost: 2000,
      area:'社会学',
      category: '生物学',
      weight: 100,
      weight_modifier: {},
      prerequisites: ["ウィーヴァー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_industrial_storm_protection',
      name: '惑星規模の嵐対策',
      tier: 1,
      cost: 2000,
      area:'工学',
      category: '産業学',
      weight: 100,
      weight_modifier: {"modifier": {"factor": 2, "OR": {"has_origin": "origin_storm_chasers", "has_storm_attraction_civic": "yes"}}},
      prerequisites: [],
      potential: {"has_cosmic_storms_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_storm_prediction_1',
      name: '宇宙気象モデル',
      tier: 1,
      cost: 3000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 2, "OR": {"has_origin": "origin_storm_chasers", "has_storm_attraction_civic": "yes"}}},
      prerequisites: ["惑星規模の嵐対策"],
      potential: {"has_cosmic_storms_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_ship_hull_storm_breaker_1',
      name: '宇宙嵐減衰機',
      tier: 1,
      cost: 3000,
      area:'工学',
      category: '材料工学',
      weight: 100,
      weight_modifier: {"modifier": {"factor": 2, "OR": {"has_origin": "origin_storm_chasers", "has_storm_attraction_civic": "yes"}}},
      prerequisites: ["宇宙気象モデル"],
      potential: {"has_cosmic_storms_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_ship_storm_weapons_1',
      name: 'ペイロード防護壁',
      tier: 1,
      cost: 3000,
      area:'工学',
      category: '宇宙工学',
      weight: 100,
      weight_modifier: {"modifier": {"factor": 2, "OR": {"has_origin": "origin_storm_chasers", "has_storm_attraction_civic": "yes"}}},
      prerequisites: ["宇宙気象モデル"],
      potential: {"has_cosmic_storms_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_gargantuan_evolution',
      name: '巨大進化',
      tier: 1,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_corvette_build_speed',
      name: 'コルベット設計の標準化',
      tier: 1,
      cost: 2500,
      area:'工学',
      category: '宇宙工学',
      weight: 95,
      weight_modifier: [],
      prerequisites: ["コルベット"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_corvette_hull_1',
      name: '改良型コルベット船体',
      tier: 1,
      cost: 3000,
      area:'工学',
      category: '宇宙工学',
      weight: 90,
      weight_modifier: [],
      prerequisites: ["コルベット"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_strike_craft_1',
      name: '空母運用',
      tier: 1,
      cost: 3000,
      area:'工学',
      category: '宇宙工学',
      weight: 90,
      weight_modifier: [],
      prerequisites: ["星系港の建設"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_ship_armor_2',
      name: 'セラミック金属材',
      tier: 1,
      cost: 2500,
      area:'工学',
      category: '材料工学',
      weight: 95,
      weight_modifier: {"factor": 1.25, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "bulwark"}}},
      prerequisites: ["ナノ複合材"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_powered_exoskeletons',
      name: '強化外骨格',
      tier: 1,
      cost: 2000,
      area:'工学',
      category: '産業学',
      weight: 100,
      weight_modifier: {"factor": 1.5},
      prerequisites: ["産業基盤"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_space_mining_1',
      name: '無重力精錬所',
      tier: 1,
      cost: 2000,
      area:'工学',
      category: '産業学',
      weight: 100,
      weight_modifier: [],
      prerequisites: ["宇宙建設"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_space_mining_2',
      name: '長距離鉱物スキャナー',
      tier: 1,
      cost: 3000,
      area:'工学',
      category: '産業学',
      weight: 90,
      weight_modifier: [],
      prerequisites: ["無重力精錬所"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mining_1',
      name: '地熱水圧破砕',
      tier: 1,
      cost: 2000,
      area:'工学',
      category: '産業学',
      weight: 100,
      weight_modifier: [],
      prerequisites: ["産業基盤"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mineral_purification_1',
      name: '鉱物精製',
      tier: 1,
      cost: 3000,
      area:'工学',
      category: '産業学',
      weight: 90,
      weight_modifier: {"factor": 2, "modifier": {"factor": 5, "OR": {"num_districts": {"type": "district_generator_uncapped value: \"> 0 \""}}}},
      prerequisites: ["地熱水圧破砕"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_alloys_1',
      name: 'ホログラフィック鋳造',
      tier: 1,
      cost: 3000,
      area:'工学',
      category: '材料工学',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "prospectorium"}}},
      prerequisites: ["産業基盤"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_luxuries_1',
      name: 'ナノ回路組み立て',
      tier: 1,
      cost: 3000,
      area:'工学',
      category: '材料工学',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "prospectorium"}}},
      prerequisites: ["産業基盤"],
      potential: {"country_uses_consumer_goods": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_engineering_1',
      name: 'ナノメカニクス',
      tier: 1,
      cost: 3000,
      area:'工学',
      category: '材料工学',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "scholarium"}}},
      prerequisites: ["科学的検証"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_robotic_workers',
      name: '人工労働力',
      tier: 1,
      cost: 3000,
      area:'工学',
      category: '産業学',
      weight: 90,
      weight_modifier: {"factor": 1.5, "modifier": {"factor": 2, "OR": {"has_ethic": "ethic_fanatic_materialist"}}},
      prerequisites: ["強化外骨格"],
      potential: {"NOR": {"has_ethic": "ethic_gestalt_consciousness", "is_individual_machine": "yes"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_afterburners_1',
      name: 'アフターバーナー',
      tier: 1,
      cost: 2500,
      area:'工学',
      category: '推進システム工学',
      weight: 95,
      weight_modifier: {"factor": 1.25, "modifier": {"factor": 2, "has_technology": "tech_thrusters_3"}},
      prerequisites: ["化学スラスター"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_assembly_pattern',
      name: '組み立てパターン',
      tier: 1,
      cost: 3000,
      area:'工学',
      category: '産業学',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 1.25, "OR": {"has_ethic": "ethic_fanatic_militarist"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mass_drivers_2',
      name: 'コイルガン',
      tier: 1,
      cost: 2500,
      area:'工学',
      category: '推進システム工学',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["マスドライバー"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_missiles_2',
      name: '核融合ミサイル',
      tier: 1,
      cost: 2500,
      area:'工学',
      category: '推進システム工学',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["核ミサイル", "核融合発電"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_torpedoes_1',
      name: '宙間魚雷',
      tier: 1,
      cost: 2500,
      area:'工学',
      category: '推進システム工学',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["コルベット"],
      potential: {"OR": {"country_uses_bio_ships": "no", "has_tradition": "tr_nanotech_4", "has_crisis_level": "crisis_level_2", "has_technology": "tech_cosmogenesis_escort"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_boarding_cables',
      name: '搭乗ケーブル',
      tier: 1,
      cost: 8000,
      area:'工学',
      category: '推進システム工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_grand_archive_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_orbital_trash_dispersal',
      name: '軌道トラッシュ拡散',
      tier: 1,
      cost: 8000,
      area:'工学',
      category: '推進システム工学',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_basic_science_lab_2',
      name: 'エキゾチック物質研究所',
      tier: 1,
      cost: 3000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "scholarium"}}},
      prerequisites: ["科学的検証"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_space_science_1',
      name: 'ゼロG研究施設',
      tier: 1,
      cost: 2000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 100,
      weight_modifier: [],
      prerequisites: ["宇宙建設"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_space_science_2',
      name: '小型封じ込めフィールド',
      tier: 1,
      cost: 3000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 90,
      weight_modifier: [],
      prerequisites: ["ゼロG研究施設"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_physics_1',
      name: '量子コンピューティング',
      tier: 1,
      cost: 3000,
      area:'物理学',
      category: '力場操作',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "scholarium"}}},
      prerequisites: ["科学的検証"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_administrative_ai',
      name: '管理AI',
      tier: 1,
      cost: 2000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 100,
      weight_modifier: {"modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "scholarium"}}},
      prerequisites: ["科学的検証"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_cryostasis_1',
      name: '自動コロニー船',
      tier: 1,
      cost: 3000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 90,
      weight_modifier: [],
      prerequisites: ["管理AI", "新天地プロトコル"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_automated_exploration',
      name: '自動探索プロトコル',
      tier: 1,
      cost: 2500,
      area:'物理学',
      category: 'コンピュータ',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 2, "num_owned_planets": "> 20"}},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_combat_computers_1',
      name: '戦闘特化コンピュータ',
      tier: 1,
      cost: 3000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 2, "OR": {"has_technology": "tech_stingers"}}},
      prerequisites: ["管理AI"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_auxiliary_fire_control',
      name: '火器管制補助システム',
      tier: 1,
      cost: 3000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 90,
      weight_modifier: [],
      prerequisites: ["戦闘特化コンピュータ"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_encryption_1',
      name: '量子ファイアウォール',
      tier: 1,
      cost: 2500,
      area:'物理学',
      category: 'コンピュータ',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 5, "has_tradition": "tr_subterfuge_adopt"}},
      prerequisites: ["植民地官僚制度"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_decryption_1',
      name: '量子ハッキング',
      tier: 1,
      cost: 2500,
      area:'物理学',
      category: 'コンピュータ',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 5, "has_tradition": "tr_subterfuge_adopt"}},
      prerequisites: ["植民地官僚制度"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_fusion_power',
      name: '核融合発電',
      tier: 1,
      cost: 2500,
      area:'物理学',
      category: '素粒子物理学',
      weight: 95,
      weight_modifier: {"factor": 2, "modifier": {"factor": 2, "OR": {"has_technology": "tech_harbingers"}}},
      prerequisites: ["核分裂発電"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_reactor_boosters_2',
      name: '改良型リアクターブースター',
      tier: 1,
      cost: 3000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 90,
      weight_modifier: {"factor": 1.5},
      prerequisites: ["核融合発電", "リアクターブースター"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_reactor_boosters_3',
      name: '発展型リアクターブースター',
      tier: 1,
      cost: 12000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 50,
      weight_modifier: {"factor": 1.5},
      prerequisites: ["反物質発電", "改良型リアクターブースター"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_shields_2',
      name: '改良デフレクター',
      tier: 1,
      cost: 3000,
      area:'物理学',
      category: '力場操作',
      weight: 90,
      weight_modifier: {"factor": 1.25, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "bulwark"}}},
      prerequisites: ["デフレクター"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_power_plant_2',
      name: '力場調整',
      tier: 1,
      cost: 2000,
      area:'物理学',
      category: '力場操作',
      weight: 100,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_prosperity_adopt"}},
      prerequisites: ["高エネルギーコンデンサ"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_power_hub_1',
      name: '広域エネルギー管理',
      tier: 1,
      cost: 3000,
      area:'物理学',
      category: '力場操作',
      weight: 90,
      weight_modifier: {"factor": 2, "modifier": {"factor": 5, "OR": {"num_districts": {"type": "district_generator_uncapped value: \"> 0 \""}}}},
      prerequisites: ["力場調整"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_lasers_2',
      name: '青色レーザー',
      tier: 1,
      cost: 2500,
      area:'物理学',
      category: '素粒子物理学',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["赤色レーザー"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_space_trading',
      name: '宇宙交易会社',
      tier: 1,
      cost: 3000,
      area:'社会学',
      category: '統治学',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_prosperity_adopt"}},
      prerequisites: ["恒星間商業取引"],
      potential: {"is_regular_empire": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_eco_simulation',
      name: '環境シミュレーション',
      tier: 1,
      cost: 2000,
      area:'社会学',
      category: '生物学',
      weight: 100,
      weight_modifier: {"modifier": {"factor": 2, "country_uses_bio_ships": "yes"}},
      prerequisites: ["農産業"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_food_processing_1',
      name: '食品加工',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '生物学',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 2, "has_relic": "r_pox_sample"}},
      prerequisites: ["環境シミュレーション"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_society_1',
      name: '宇宙生物学',
      tier: 1,
      cost: 3000,
      area:'社会学',
      category: '生物学',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 2, "has_relic": "r_pox_sample"}},
      prerequisites: ["科学的検証"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_alien_life_studies',
      name: '異星生物学',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '生物学',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 2, "has_relic": "r_pox_sample"}},
      prerequisites: [],
      potential: {"is_regular_empire": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_frontier_health',
      name: '遺伝子健康管理',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '生物学',
      weight: 95,
      weight_modifier: {"factor": 2, "modifier": {"factor": 2, "has_country_flag": "payback_researching_gene_clinics"}},
      prerequisites: ["医療", "ゲノムマッピング"],
      potential: {"is_regular_empire": "yes", "is_individual_machine": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_dense_jungle',
      name: '選択的森林枯死',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '新天地',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 0, "num_owned_planets": "< 2"}},
      prerequisites: ["新天地プロトコル"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_quicksand_basin',
      name: '土壌改善',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '新天地',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 0, "num_owned_planets": "< 2"}},
      prerequisites: ["新天地プロトコル"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_noxious_swamp',
      name: '異星水力工学への習熟',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '新天地',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 0, "num_owned_planets": "< 2"}},
      prerequisites: ["新天地プロトコル"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_massive_glacier',
      name: '気候制御ネットワーク',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '新天地',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 0, "num_owned_planets": "< 2"}},
      prerequisites: ["新天地プロトコル"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_toxic_kelp',
      name: '海洋生態系管理',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '新天地',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 0, "num_owned_planets": "< 2"}},
      prerequisites: ["新天地プロトコル"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_deep_sinkhole',
      name: '地下植民',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '新天地',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 0, "num_owned_planets": "< 2"}},
      prerequisites: ["新天地プロトコル"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_genome_mapping',
      name: 'ゲノムマッピング',
      tier: 1,
      cost: 2000,
      area:'社会学',
      category: '生物学',
      weight: 100,
      weight_modifier: {"factor": 1.5, "modifier": {"factor": 2, "AND": {"OR": {"is_individual_machine": "yes", "has_origin": "origin_synthetic_fertility"}, "any_owned_species": {"is_organic_species": "yes"}}}},
      prerequisites: [],
      potential: {"OR": {"is_machine_empire": "no", "has_civic": "civic_machine_guided_sapience"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_doctrine_fleet_size_1',
      name: '宇宙戦ドクトリン',
      tier: 1,
      cost: 2000,
      area:'社会学',
      category: '軍事学',
      weight: 100,
      weight_modifier: {"factor": 3, "modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_doctrine_navy_size_1',
      name: '艦隊支援ドクトリン',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '軍事学',
      weight: 95,
      weight_modifier: {"factor": 3, "modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_ground_defense_planning',
      name: '地上防衛計画',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '軍事学',
      weight: 95,
      weight_modifier: {"factor": 2, "modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: ["惑星防衛"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_planetary_unification',
      name: '惑星統一',
      tier: 1,
      cost: 2000,
      area:'社会学',
      category: '統治学',
      weight: 100,
      weight_modifier: {"factor": 4, "modifier": {"factor": 0.75, "NOT": {"OR": {"has_ethic": "ethic_fanatic_pacifist"}}}},
      prerequisites: ["惑星政府"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_adaptive_bureaucracy',
      name: '柔軟な官僚機構',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '統治学',
      weight: 95,
      weight_modifier: {"modifier": {"factor": 1.5, "num_owned_planets": "> 4"}},
      prerequisites: ["惑星統一"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_neural_implants',
      name: '神経学習',
      tier: 1,
      cost: 3000,
      area:'社会学',
      category: '統治学',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 2, "count_owned_pop_amount": {"limit": {"OR": {"is_enslaved": "yes", "has_disconnected_drone_citizenship_type": "yes"}}, "count": ">= 3000"}}},
      prerequisites: [],
      potential: {"is_regular_empire": "yes", "allows_slavery": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_hyper_entertainment_forum',
      name: 'ハイパーエンターテイメント広場',
      tier: 1,
      cost: 3000,
      area:'社会学',
      category: '統治学',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_exotic_gases", "has_country_flag": "has_market_access"}}},
      prerequisites: ["ホロ・エンターテインメント"],
      potential: {"is_gestalt": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_heritage_site',
      name: '星界遺産',
      tier: 1,
      cost: 3000,
      area:'社会学',
      category: '統治学',
      weight: 90,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_rare_crystals", "has_country_flag": "has_market_access"}}},
      prerequisites: ["社会文化史"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_federation_code',
      name: '連邦規約',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '統治学',
      weight: 85,
      weight_modifier: {"factor": 2, "modifier": {"factor": 0.25, "has_ethic": "ethic_fanatic_xenophobe"}},
      prerequisites: ["植民地集権化"],
      potential: {"OR": {"days_passed": 0, "any_relation": {"can_form_federation_with_empire": "yes"}}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_xeno_linguistics',
      name: '異星言語学',
      tier: 1,
      cost: 2500,
      area:'社会学',
      category: '統治学',
      weight: 0,
      weight_modifier: {"factor": 0, "modifier": {"add": 100, "AND": {"is_regular_empire": "yes", "is_homicidal": "no", "is_gestalt": "no", "perc_communications_with_playable": "> 0"}}},
      prerequisites: [],
      potential: {"has_paragon_dlc": "yes", "is_regular_empire": "yes", "is_gestalt": "no", "is_homicidal": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_bio_reactor',
      name: 'バイオリアクター',
      tier: 1,
      cost: 2000,
      area:'社会学',
      category: '生物学',
      weight: 100,
      weight_modifier: {"factor": 0.1, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["農産業"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_space_whale_weapon_1',
      name: '周波数同期',
      tier: 1,
      cost: 3000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_robomodding_m',
      name: '機械テンプレートシステム',
      tier: 1,
      cost: 4000,
      area:'工学',
      category: '産業学',
      weight: 85,
      weight_modifier: [],
      prerequisites: ["強化外骨格"],
      potential: {"OR": {"is_machine_empire": "yes", "is_individual_machine": "yes"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_robomodding',
      name: '機械テンプレートシステム',
      tier: 1,
      cost: 4000,
      area:'工学',
      category: '産業学',
      weight: 85,
      weight_modifier: {"modifier": {"factor": 0, "has_policy_flag": "robots_outlawed"}},
      prerequisites: ["人工労働力"],
      potential: {"NOR": {"has_ethic": "ethic_gestalt_consciousness", "is_individual_machine": "yes"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_arcane_deciphering',
      name: '秘密の解読',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '考古学技術',
      weight: 70,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 3, "has_trait_in_council": {"TRAIT": "leader_trait_curator"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archeology_lab_ancrel',
      name: 'キュレーターの考古学ラボ',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '考古学技術',
      weight: 85,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_trait_in_council": {"TRAIT": "leader_trait_curator"}, "has_modifier": "curator_insight"}}},
      prerequisites: [],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archaeostudies',
      name: '考古学技術',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '考古学技術',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 3, "OR": {"has_country_flag": "origin_shoulders_closure", "has_completed_precursor_research": "yes"}}},
      prerequisites: [],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_rift_sphere',
      name: 'リフトスフィア',
      tier: 2,
      cost: 10000,
      area:'物理学',
      category: '力場操作',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_astral_planes_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_astral_harvesting',
      name: 'アストラル採取',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 85,
      weight_modifier: {"modifier": {"factor": 2, "any_system_within_border": {"OR": {"exists": "astral_rift", "any_system_planet": {"is_astral_scar": "yes"}}}}},
      prerequisites: [],
      potential: {"has_astral_planes_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_weaver_growth_1',
      name: '改良型ウィーヴァーの開発',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '生物学',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["ウィーヴァー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_growth_2',
      name: '発展型ウィーヴァーの開発',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '生物学',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["改良型ウィーヴァーの開発"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_healing_2',
      name: '改良型胞子投射機',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '生物学',
      weight: 85,
      weight_modifier: [],
      prerequisites: ["胞子投射機"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_evasion_2',
      name: 'タングラー胞子投射機',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '生物学',
      weight: 85,
      weight_modifier: [],
      prerequisites: ["エネルギー・バースター"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_fire_rate_2',
      name: 'ウィーヴァー・ブースターブラスター',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '生物学',
      weight: 85,
      weight_modifier: [],
      prerequisites: ["ウィーヴァー・バイオフィールドジェネレーター"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_confuser_2',
      name: 'タングル・パルス',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '生物学',
      weight: 85,
      weight_modifier: [],
      prerequisites: ["グルーム・スポア"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_anti_evasion_2',
      name: '酵素ウェブキャスター',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '生物学',
      weight: 85,
      weight_modifier: [],
      prerequisites: ["ヴェクターロック砲"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_anti_fire_rate_2',
      name: '射撃ディスラプター',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '生物学',
      weight: 85,
      weight_modifier: [],
      prerequisites: ["リロードジャマー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_storm_manipulation',
      name: '宇宙嵐の操作',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: '力場操作',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 0, "OR": {"has_origin": "origin_storm_chasers", "num_cosmic_storms_encountered": "< 3"}}},
      prerequisites: ["惑星規模の嵐対策"],
      potential: {"has_cosmic_storms_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_advanced_industrial_storm_protection',
      name: '惑星規模の嵐無力化',
      tier: 2,
      cost: 4000,
      area:'工学',
      category: '産業学',
      weight: 85,
      weight_modifier: {"modifier": {"factor": 2, "OR": {"has_origin": "origin_storm_chasers", "has_storm_attraction_civic": "yes"}}},
      prerequisites: ["惑星規模の嵐対策"],
      potential: {"has_cosmic_storms_dlc": "yes", "is_wilderness_empire": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_ship_hull_storm_breaker_2',
      name: 'ストームブレイカーコート',
      tier: 2,
      cost: 5000,
      area:'工学',
      category: '材料工学',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 2, "OR": {"has_origin": "origin_storm_chasers", "has_storm_attraction_civic": "yes"}}},
      prerequisites: ["宇宙嵐減衰機"],
      potential: {"has_cosmic_storms_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_ship_storm_weapons_2',
      name: '対宇宙嵐ケージ構造',
      tier: 2,
      cost: 5000,
      area:'工学',
      category: '宇宙工学',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 2, "OR": {"has_origin": "origin_storm_chasers", "has_storm_attraction_civic": "yes"}}},
      prerequisites: ["ペイロード防護壁"],
      potential: {"has_cosmic_storms_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_repeatable_lcluster_clue',
      name: 'Lゲートの知見',
      tier: 2,
      cost: 2000,
      area:'工学',
      category: '宇宙工学',
      weight: 70,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_country_flag": "encountered_first_lgate", "NOT": {"has_global_flag": "l_cluster_opened"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_experimental_subspace_navigation',
      name: '推測的ハイパーレーン脱出',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: '力場操作',
      weight: 75,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@eager_explorer_effect", "is_eager_explorer_empire": "yes"}},
      prerequisites: ["重力センサー"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_destroyers',
      name: '駆逐艦',
      tier: 2,
      cost: 4000,
      area:'工学',
      category: '宇宙工学',
      weight: 85,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["コルベット"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_corvette_hull_2',
      name: '発展型コルベット船体',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '宇宙工学',
      weight: 70,
      weight_modifier: {"modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["改良型コルベット船体"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_destroyer_build_speed',
      name: '駆逐艦設計の標準化',
      tier: 2,
      cost: 5000,
      area:'工学',
      category: '宇宙工学',
      weight: 75,
      weight_modifier: [],
      prerequisites: ["駆逐艦"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_destroyer_hull_1',
      name: '改良型駆逐艦船体',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '宇宙工学',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["駆逐艦"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_starbase_3',
      name: '星系軍港の建設',
      tier: 2,
      cost: 5000,
      area:'工学',
      category: '宇宙工学',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 10, "has_modifier": "agenda_impenetrable_border_finish"}},
      prerequisites: ["星系港の建設"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_modular_engineering',
      name: '組み立て工学',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '宇宙工学',
      weight: 70,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["星系軍港の建設"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_strike_craft_2',
      name: '改良型軍用機',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '宇宙工学',
      weight: 70,
      weight_modifier: [],
      prerequisites: ["空母運用"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_ship_armor_3',
      name: 'プラスチール材',
      tier: 2,
      cost: 5000,
      area:'工学',
      category: '材料工学',
      weight: 75,
      weight_modifier: {"factor": 1.25, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "bulwark"}}},
      prerequisites: ["セラミック金属材"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_crystal_armor_1',
      name: '結晶含有外板',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '材料工学',
      weight: 0,
      weight_modifier: {"modifier": {"add": 5, "has_country_flag": "crystal_armor_1_weight"}},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_armor_hardeners_1',
      name: '装甲強化',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '材料工学',
      weight: 70,
      weight_modifier: [],
      prerequisites: ["セラミック金属合金", "レアクリスタル製造"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_thrusters_2',
      name: 'イオンスラスター',
      tier: 2,
      cost: 4000,
      area:'工学',
      category: '推進システム工学',
      weight: 85,
      weight_modifier: {"factor": 1.25, "modifier": {"factor": 2, "OR": {"has_technology": "tech_weavers"}}},
      prerequisites: ["化学スラスター"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_defense_platform_hull_1',
      name: '構造的完全性の改善',
      tier: 2,
      cost: 5000,
      area:'工学',
      category: '宇宙工学',
      weight: 75,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "bulwark"}}},
      prerequisites: ["星系軍港の建設"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_space_mining_3',
      name: '鉱物切断ビーム',
      tier: 2,
      cost: 4000,
      area:'工学',
      category: '産業学',
      weight: 85,
      weight_modifier: [],
      prerequisites: ["長距離鉱物スキャナー"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_space_mining_4',
      name: '自律採鉱ドローン',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '産業学',
      weight: 70,
      weight_modifier: [],
      prerequisites: ["鉱物切断ビーム"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mining_2',
      name: '惑星核採掘',
      tier: 2,
      cost: 4000,
      area:'工学',
      category: '産業学',
      weight: 85,
      weight_modifier: [],
      prerequisites: ["地熱水圧破砕"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mineral_purification_2',
      name: '発展型鉱物精製',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '産業学',
      weight: 70,
      weight_modifier: {"factor": 2, "modifier": {"factor": 0, "NOR": {"has_technology": "tech_volatile_motes", "has_country_flag": "has_market_access"}}},
      prerequisites: ["鉱物精製", "植民地集権化"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_advanced_metallurgy_1',
      name: 'セラミック金属合金',
      tier: 2,
      cost: 4000,
      area:'工学',
      category: '材料工学',
      weight: 85,
      weight_modifier: {"factor": 2},
      prerequisites: ["ホログラフィック鋳造", "セラミック金属材"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_engineering_2',
      name: '自己接続回路',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '材料工学',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "scholarium"}}},
      prerequisites: ["ナノメカニクス"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_droid_workers',
      name: '人工専門家',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '産業学',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 2, "has_origin": "origin_mechanists"}},
      prerequisites: ["人工労働力", "植民地集権化"],
      potential: {"NOR": {"has_ethic": "ethic_gestalt_consciousness", "is_individual_machine": "yes"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_integrated_cybernetics',
      name: '統合サイバネティクス',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '産業学',
      weight: 70,
      weight_modifier: {"factor": 1.5},
      prerequisites: ["強化外骨格", "植民地集権化"],
      potential: {"OR": {"AND": {"is_machine_empire": "no", "is_individual_machine": "no"}, "has_civic": "civic_machine_assimilator"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_housing_1',
      name: '気象制御システム',
      tier: 2,
      cost: 5000,
      area:'工学',
      category: '産業学',
      weight: 75,
      weight_modifier: {"factor": 1.5},
      prerequisites: [],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mass_drivers_3',
      name: 'レールガン',
      tier: 2,
      cost: 4000,
      area:'工学',
      category: '推進システム工学',
      weight: 85,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["コイルガン"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_autocannons_1',
      name: '機関砲',
      tier: 2,
      cost: 5000,
      area:'工学',
      category: '推進システム工学',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 0.5, "NOT": {"has_technology": "tech_mass_drivers_1"}}},
      prerequisites: ["コイルガン"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_missiles_3',
      name: '反物質ミサイル',
      tier: 2,
      cost: 4000,
      area:'工学',
      category: '推進システム工学',
      weight: 85,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["核融合ミサイル"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_swarmer_missiles_1',
      name: 'スウォームミサイル',
      tier: 2,
      cost: 5000,
      area:'工学',
      category: '推進システム工学',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["OR = {", "  ハーヴィンジャー", "  スティンガー", "  核融合ミサイル", "}"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_cloaking_1',
      name: '基礎クロークフィールド',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: '力場操作',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 5, "has_tradition": "tr_subterfuge_adopt"}},
      prerequisites: ["改良デフレクター"],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_detection_array',
      name: '探知アレイ',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 5, "has_tradition": "tr_subterfuge_adopt"}},
      prerequisites: ["重力センサー"],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_assisted_detection',
      name: '発展型探知アルゴリズム',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 5, "has_tradition": "tr_subterfuge_adopt"}},
      prerequisites: ["探知アレイ"],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_unusual_senses',
      name: '特異な知覚法',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_new_numbers',
      name: '新たな数値',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_trinary_computing',
      name: '三進法コンピューティング',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_atmospheric_orbital_mechanics',
      name: '大気圏軌道力学',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_predatory_tactics',
      name: '捕食者戦術',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '軍事学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_satisfying_insults',
      name: '実りある侮辱',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '統治学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_compact_living',
      name: 'コンパクトな暮らし',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '統治学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_alien_topography',
      name: '異星地形学',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '新天地',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_xeno_aesthetics',
      name: '異星人の美学',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '統治学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_lost_building_methods',
      name: '失われた構造物の手法',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '産業学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_supreme_alloy',
      name: '超越合金',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '材料工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_ordered_retreat',
      name: '退却命令',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '宇宙工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_temple_of_transportation',
      name: '輸送の神殿',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '宇宙工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_galactic_archivism',
      name: '銀河アーカイブ',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '統治学',
      weight: 85,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_grand_archive_dlc": "yes", "OR": {"acquired_specimen_count": "> 0", "is_galactic_curators_empire": "yes", "is_beastmasters_empire": "yes"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_gravity_wells',
      name: '重力罠',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: '力場操作',
      weight: 85,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_grand_archive_dlc": "yes", "OR": {"has_encountered_any_fauna": "yes", "is_beastmasters_empire": "yes"}}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_gravity_snare_capacity_1',
      name: 'マイクロ特異点の強化',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: '力場操作',
      weight: 85,
      weight_modifier: {},
      prerequisites: ["重力罠"],
      potential: {"has_grand_archive_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_alien_cloning',
      name: '人工交配',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '生物学',
      weight: 85,
      weight_modifier: {"modifier": {"factor": "@federation_perk_factor", "has_federation": "yes", "federation": {"any_member": {"has_technology": "tech_alien_cloning"}, "NOT": {"has_federation_law": "fleet_contribution_none"}}}},
      prerequisites: ["重力罠"],
      potential: {"has_grand_archive_dlc": "yes", "OR": {"is_beastmasters_empire": "yes", "can_research_technology": "tech_genome_mapping"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_improved_incubators',
      name: '改良インキュベーター',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '生物学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_domestication_adopt"}},
      prerequisites: ["人工交配"],
      potential: {"has_grand_archive_dlc": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_controlled_mutations',
      name: '制御された突然変異',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '生物学',
      weight: 5000,
      weight_modifier: {},
      prerequisites: ["人工交配"],
      potential: {"has_any_dna": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_thrusters_bio_integration',
      name: 'スラスター生体統合',
      tier: 2,
      cost: 4000,
      area:'工学',
      category: '推進システム工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["制御された突然変異"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_hyper_drive_bio_integration',
      name: 'ハイパードライブ生体統合',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["制御された突然変異"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_sensors_bio_integration',
      name: 'センサー生体統合',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["制御された突然変異"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_combat_computers_bio_integration',
      name: '戦闘コンピュータ生体統合',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["制御された突然変異"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_orbital_arc_furnace',
      name: 'アーク炉',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '材料工学',
      weight: 70,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@federation_perk_factor", "has_federation": "yes", "federation": {"has_federation_perk": "rare_tech_boost", "any_member": {"has_technology": "tech_orbital_arc_furnace"}}}},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_dyson_swarm',
      name: 'ダイソン・スウォーム',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 70,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@federation_perk_factor", "has_federation": "yes", "federation": {"has_federation_perk": "rare_tech_boost", "any_member": {"has_technology": "tech_dyson_swarm"}}}},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_hyper_relays',
      name: 'ハイパーリレイ',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 70,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@eager_explorer_effect", "is_eager_explorer_empire": "yes"}},
      prerequisites: ["ハイパーレーン突破点"],
      potential: {"has_overlord_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_curator_lab',
      name: 'キュレーターの探査ラボ',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 85,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_trait_in_council": {"TRAIT": "leader_trait_curator"}, "has_modifier": "curator_insight"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_archeology_lab',
      name: 'キュレーターの考古学ラボ',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 85,
      weight_modifier: {"modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: [],
      potential: {"has_ancrel": "no"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_space_science_3',
      name: '量子プローブ',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 85,
      weight_modifier: [],
      prerequisites: ["小型封じ込めフィールド"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_space_science_4',
      name: '自律ステーション・プロトコル',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 70,
      weight_modifier: [],
      prerequisites: ["量子プローブ"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_physics_2',
      name: '統一場理論',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: '力場操作',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "scholarium"}}},
      prerequisites: ["量子コンピューティング"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_self_aware_logic',
      name: '自己進化論理',
      tier: 2,
      cost: 5000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 75,
      weight_modifier: [],
      prerequisites: ["管理AI"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_consumer_good_refinement_1',
      name: '市場分析アルゴリズム',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 85,
      weight_modifier: {"factor": 2},
      prerequisites: ["ナノ回路組み立て", "管理AI"],
      potential: {"country_uses_consumer_goods": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_encryption_2',
      name: '同時崩壊ストレージ',
      tier: 2,
      cost: 5000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 5, "has_tradition": "tr_subterfuge_adopt"}},
      prerequisites: ["量子ファイアウォール"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_decryption_2',
      name: 'シミュレートされた社会工学',
      tier: 2,
      cost: 5000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 5, "has_tradition": "tr_subterfuge_adopt"}},
      prerequisites: ["量子ハッキング"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_cold_fusion_power',
      name: '常温核融合発電',
      tier: 2,
      cost: 5000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 75,
      weight_modifier: {"factor": 2, "modifier": {"factor": 2, "OR": {"has_technology": "tech_harbingers"}}},
      prerequisites: ["核融合発電"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_shields_3',
      name: 'シールド',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: '力場操作',
      weight: 70,
      weight_modifier: {"factor": 1.25, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "bulwark"}}},
      prerequisites: ["改良デフレクター"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_shield_rechargers_1',
      name: 'シールドコンデンサ',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: '力場操作',
      weight: 70,
      weight_modifier: [],
      prerequisites: ["シールド"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_shield_hardeners_1',
      name: 'シールド強化',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: '力場操作',
      weight: 70,
      weight_modifier: [],
      prerequisites: ["シールドコンデンサ", "エキゾチックガス精製"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_sensors_2',
      name: '重力センサー',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 85,
      weight_modifier: {"modifier": {"factor": 1.25, "any_system_within_border": {"is_inside_nebula": "yes"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_power_plant_3',
      name: '量子エネルギー状態',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: '力場操作',
      weight: 85,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_prosperity_adopt"}},
      prerequisites: ["力場調整"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_power_hub_2',
      name: '惑星送電網',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: '力場操作',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "prospectorium"}}},
      prerequisites: ["広域エネルギー管理", "植民地集権化"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_hyper_drive_2',
      name: 'ハイパーレーン突破点',
      tier: 2,
      cost: 5000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 10, "mid_game_years_passed": "> 0", "has_country_flag": "chosen_empire"}},
      prerequisites: ["ハイパースペース航行"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_ftl_inhibitor',
      name: 'FTL妨害装置',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 85,
      weight_modifier: {"factor": 4, "modifier": {"factor": 1.25, "has_tradition": "tr_unyielding_adopt"}},
      prerequisites: ["ハイパースペース航行"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_lasers_3',
      name: '紫外線レーザー',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 85,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["青色レーザー"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_plasma_1',
      name: 'プラズマ投射砲',
      tier: 2,
      cost: 5000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 0.5, "NOT": {"has_technology": "tech_lasers_1"}}},
      prerequisites: ["青色レーザー"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_disruptors_1',
      name: 'ディスラプター',
      tier: 2,
      cost: 5000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 0.5, "NOT": {"has_technology": "tech_lasers_1"}}},
      prerequisites: ["青色レーザー"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_pd_tracking_2',
      name: '連結型支援システム',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 70,
      weight_modifier: [],
      prerequisites: ["アクティブ防衛"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_mining_drone_weapon_1',
      name: '採掘ドローンレーザー',
      tier: 2,
      cost: 5000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_space_cloud_weapon_1',
      name: '雷雲管',
      tier: 2,
      cost: 6000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'null_void_beam',
      name: '虚空光線砲',
      tier: 2,
      cost: 2500,
      area:'物理学',
      category: '素粒子物理学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_gene_crops',
      name: '遺伝子改良作物',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '生物学',
      weight: 85,
      weight_modifier: {"modifier": {"factor": 2, "country_uses_bio_ships": "yes"}},
      prerequisites: ["環境シミュレーション"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_society_2',
      name: '神経の組織化',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '生物学',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 2, "has_relic": "r_pox_sample"}},
      prerequisites: ["宇宙生物学"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_colonization_2',
      name: '大気濾過',
      tier: 2,
      cost: 3000,
      area:'社会学',
      category: '新天地',
      weight: 90,
      weight_modifier: [],
      prerequisites: ["新天地プロトコル"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_colonization_3',
      name: '過酷な環境への適応',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '新天地',
      weight: 70,
      weight_modifier: [],
      prerequisites: ["大気濾過"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_frontier_hospital',
      name: '細胞再生',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '生物学',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 2, "has_relic": "r_pox_sample"}},
      prerequisites: ["遺伝子健康管理", "植民地集権化"],
      potential: {"is_gestalt": "no", "is_individual_machine": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_mountain_range',
      name: '惑星表面加工',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '新天地',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 0, "num_owned_planets": "< 2"}},
      prerequisites: ["新天地プロトコル"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_volcano',
      name: '深部地殻加工',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '新天地',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 0, "num_owned_planets": "< 2"}},
      prerequisites: ["新天地プロトコル"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_dangerous_wildlife',
      name: '危険な原生生物排除',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '新天地',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 0, "num_owned_planets": "< 2"}},
      prerequisites: ["新天地プロトコル"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_terrestrial_sculpting',
      name: '惑星整形',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '新天地',
      weight: 70,
      weight_modifier: {"factor": 1.5, "modifier": {"add": 5, "has_origin": "origin_wilderness"}},
      prerequisites: ["新天地プロトコル"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_vitality_boosters',
      name: '生命活性剤',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '生物学',
      weight: 75,
      weight_modifier: {"factor": 1.5, "modifier": {"factor": 2, "AND": {"is_individual_machine": "yes", "any_owned_species": {"is_organic_species": "yes"}}}},
      prerequisites: ["ゲノムマッピング"],
      potential: {"OR": {"is_machine_empire": "no", "has_civic": "civic_machine_assimilator"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_epigenetic_triggers',
      name: 'エピジェネティック変化の誘発',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '生物学',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_country_flag": "found_presapients", "any_planet_within_border": {"any_owned_pop_group": {"is_sapient": "no", "NOT": {"has_trait": "trait_nascent_stage"}}}}}},
      prerequisites: ["ゲノムマッピング"],
      potential: {"NOR": {"has_valid_civic": "civic_fanatic_purifiers", "is_natural_design_empire": "yes", "is_wilderness_empire": "yes"}, "OR": {"is_machine_empire": "no", "has_civic": "civic_machine_guided_sapience"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_cloning',
      name: 'クローニング',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '生物学',
      weight: 75,
      weight_modifier: {"factor": 1.5, "modifier": {"factor": 2, "AND": {"is_individual_machine": "yes", "any_owned_species": {"is_organic_species": "yes"}}}},
      prerequisites: ["ゲノムマッピング"],
      potential: {"OR": {"is_machine_empire": "no", "has_civic": "civic_machine_assimilator"}, "is_wilderness_empire": "no", "is_natural_design_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_gene_banks',
      name: '遺伝子バンク',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '生物学',
      weight: 70,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["クローニング"],
      potential: {"OR": {"is_machine_empire": "no", "is_wilderness_empire": "no", "has_civic": "civic_machine_assimilator"}, "is_natural_design_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_doctrine_fleet_size_2',
      name: '反応陣形ドクトリン',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '軍事学',
      weight: 70,
      weight_modifier: {"factor": 3, "modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: ["宇宙戦ドクトリン"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_interstellar_fleet_traditions',
      name: '星間艦隊の伝統',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '軍事学',
      weight: 75,
      weight_modifier: {"factor": 3, "modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_doctrine_navy_size_2',
      name: '支援艦隊ドクトリン',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '軍事学',
      weight: 75,
      weight_modifier: {"factor": 10, "modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: ["艦隊支援ドクトリン"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_global_defense_grid',
      name: '惑星防衛網',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '軍事学',
      weight: 85,
      weight_modifier: {"factor": 2, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "bulwark"}}},
      prerequisites: ["地上防衛計画"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_galactic_ambitions',
      name: '星海への進出',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '新天地',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 0, "num_communications": "< 1"}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_interstellar_campaigns',
      name: '星間戦役',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '軍事学',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 0, "num_communications": "< 1"}},
      prerequisites: ["星海への進出"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_colonial_centralization',
      name: '植民地集権化',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '新天地',
      weight: 75,
      weight_modifier: {"factor": 4},
      prerequisites: ["惑星統一"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_planetary_infrastructure_1',
      name: 'セラモ金属インフラ',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '新天地',
      weight: 70,
      weight_modifier: {"factor": 4},
      prerequisites: ["植民地集権化", "セラミック金属材"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_subdermal_stimulation',
      name: '皮下刺激',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '生物学',
      weight: 75,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 2, "has_relic": "r_pox_sample"}},
      prerequisites: ["ゲノムマッピング"],
      potential: {"NOR": {"has_ethic": "ethic_gestalt_consciousness", "has_civic": "civic_dystopian_society", "is_individual_machine": "yes"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_effective_bureaucracy',
      name: '効率的な官僚制度',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '統治学',
      weight: 85,
      weight_modifier: {"modifier": {"factor": 1.5, "num_owned_planets": "> 4"}},
      prerequisites: ["柔軟な官僚機構"],
      potential: {"is_gestalt": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_colonial_bureaucracy',
      name: '植民地官僚制度',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '統治学',
      weight: 85,
      weight_modifier: {"modifier": {"factor": 1.5, "num_owned_planets": "> 4"}},
      prerequisites: ["柔軟な官僚機構"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_living_state',
      name: '活きた国家',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '統治学',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 1.25, "OR": {"has_ethic": "ethic_fanatic_authoritarian"}}},
      prerequisites: ["植民地集権化"],
      potential: {"NOT": {"has_ethic": "ethic_gestalt_consciousness"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_autonomous_agents',
      name: '自律エージェント',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '統治学',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 1.5, "num_owned_planets": "> 7"}},
      prerequisites: ["植民地集権化"],
      potential: {"has_ethic": "ethic_gestalt_consciousness"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_artificial_moral_codes',
      name: '人工的な倫理規範',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '統治学',
      weight: 75,
      weight_modifier: {"factor": 1.5},
      prerequisites: [],
      potential: {"NOT": {"has_ethic": "ethic_gestalt_consciousness"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_unity_of_purpose',
      name: '統一目標',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '統治学',
      weight: 70,
      weight_modifier: {"factor": 1.5},
      prerequisites: [],
      potential: {"is_gestalt": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_holographic_rituals',
      name: 'ホログラフィック儀式',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '統治学',
      weight: 75,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_rare_crystals", "has_country_flag": "has_market_access"}}},
      prerequisites: ["社会文化史"],
      potential: {"OR": {"has_ethic": "ethic_fanatic_spiritualist", "AND": {"is_gestalt": "no", "has_make_spiritualist_perk": "yes"}}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_hive_cluster',
      name: 'クラスタ化シナプス',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '統治学',
      weight: 75,
      weight_modifier: [],
      prerequisites: ["シナプス構造体"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_wilderness_cluster',
      name: 'クラスタ化シナプス',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '統治学',
      weight: 75,
      weight_modifier: [],
      prerequisites: ["存在の中心"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_penal_colonies',
      name: '流刑地惑星',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '統治学',
      weight: 70,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 0, "num_owned_planets": "< 2"}},
      prerequisites: ["人工的な倫理規範"],
      potential: {"is_gestalt": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_resort_colonies',
      name: 'リゾート惑星',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '統治学',
      weight: 70,
      weight_modifier: {"factor": 1.5, "modifier": {"factor": 0, "num_owned_planets": "< 2"}},
      prerequisites: ["人工的な倫理規範"],
      potential: {"is_gestalt": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_slave_colonies',
      name: '奴隷惑星',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '統治学',
      weight: 70,
      weight_modifier: {"factor": 1, "modifier": {"factor": 0, "OR": {"allows_slavery": "no", "NOT": {"any_owned_pop_group": {"is_enslaved": "yes"}}}}},
      prerequisites: ["神経学習"],
      potential: {"is_gestalt": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_xeno_diplomacy',
      name: '異星人外交',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '統治学',
      weight: 85,
      weight_modifier: {"factor": 2, "modifier": {"factor": 0.01, "has_civic": "civic_inwards_perfection"}},
      prerequisites: ["連邦規約"],
      potential: {"is_regular_empire": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_capital_productivity_1',
      name: '生産の改善',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '統治学',
      weight: 70,
      weight_modifier: {"factor": 1, "modifier": {"factor": 0.25, "NOT": {"has_tradition": "tr_prosperity_finish"}}},
      prerequisites: ["惑星統一"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_node_reformatting_1',
      name: '初歩的なノード再フォーマット',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '統治学',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 1.5, "any_owned_leader": {"is_councilor": "yes", "is_ruler": "no", "has_base_skill": ">= 9"}}},
      prerequisites: ["植民地集権化"],
      potential: {"is_machine_empire": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_node_culling_1',
      name: '初歩的なノード淘汰',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '統治学',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 2, "is_cloning_authority": "yes"}},
      prerequisites: ["植民地集権化"],
      potential: {"is_hive_empire": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_bio_reactor_2',
      name: '発展型バイオリアクター',
      tier: 2,
      cost: 4000,
      area:'社会学',
      category: '生物学',
      weight: 85,
      weight_modifier: {"factor": 0.1, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["バイオリアクター"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_amoeba_strike_craft_1',
      name: '鞭毛の武器化',
      tier: 2,
      cost: 6000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_enhanced_cryosleep_sedatives',
      name: '改良型冷凍睡眠用鎮静剤',
      tier: 2,
      cost: 2000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_mine_betharian',
      name: 'ベザリアン石精製',
      tier: 2,
      cost: 2500,
      area:'工学',
      category: '材料工学',
      weight: 95,
      weight_modifier: {"factor": 2, "modifier": {"factor": 0, "NOT": {"any_owned_planet": {"has_deposit": "d_betharian_deposit"}}}},
      prerequisites: ["宇宙建設"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mine_volatile_motes',
      name: '揮発性粉末の安定化',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 85,
      weight_modifier: {"factor": 2, "modifier": {"factor": 0, "NOT": {"any_owned_planet": {"OR": {"has_deposit": "d_industrial_sector"}}, "any_planet_within_border": {"OR": {"has_deposit": "d_volatile_motes_5"}}}}},
      prerequisites: ["宇宙建設"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_volatile_motes',
      name: '揮発性物質製造所',
      tier: 2,
      cost: 4000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 85,
      weight_modifier: {"factor": 2, "modifier": {"factor": 0.5, "OR": {"any_owned_planet": {"OR": {"has_deposit": "d_industrial_sector"}}, "any_planet_within_border": {"OR": {"has_deposit": "d_volatile_motes_5"}}}}},
      prerequisites: ["産業基盤"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_mine_exotic_gases',
      name: 'エキゾチックガス抽出',
      tier: 2,
      cost: 4000,
      area:'工学',
      category: '材料工学',
      weight: 85,
      weight_modifier: {"factor": 2, "modifier": {"factor": 0, "NOT": {"any_owned_planet": {"OR": {"has_deposit": "d_exotic_mountain"}}, "any_planet_within_border": {"OR": {"has_deposit": "d_exotic_gases_5"}}}}},
      prerequisites: ["宇宙建設"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_exotic_gases',
      name: 'エキゾチックガス精製',
      tier: 2,
      cost: 4000,
      area:'工学',
      category: '材料工学',
      weight: 85,
      weight_modifier: {"factor": 2, "modifier": {"factor": 0.5, "OR": {"any_owned_planet": {"OR": {"has_deposit": "d_exotic_mountain"}}, "any_planet_within_border": {"OR": {"has_deposit": "d_exotic_gases_5"}}}}},
      prerequisites: ["産業基盤"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mine_rare_crystals',
      name: 'レアクリスタル採掘',
      tier: 2,
      cost: 4000,
      area:'工学',
      category: '材料工学',
      weight: 85,
      weight_modifier: {"factor": 2, "modifier": {"add": 1, "has_country_flag": "tech_mine_rare_crystals_culling_boost"}},
      prerequisites: ["宇宙建設"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_rare_crystals',
      name: 'レアクリスタル製造',
      tier: 2,
      cost: 4000,
      area:'工学',
      category: '材料工学',
      weight: 85,
      weight_modifier: {"factor": 2, "modifier": {"factor": 0.5, "OR": {"any_owned_planet": {"OR": {"has_deposit": "d_industrial_sector"}}, "any_planet_within_border": {"OR": {"has_deposit": "d_rare_crystals_5"}}}}},
      prerequisites: ["産業基盤"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_nanite_transmutation',
      name: 'ナノマシン変成',
      tier: 2,
      cost: 6000,
      area:'工学',
      category: '材料工学',
      weight: 70,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: [],
      potential: {"host_has_dlc": "Distant Stars Story Pack"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_robomodding_points_1',
      name: 'モデル間標準化',
      tier: 2,
      cost: 8000,
      area:'工学',
      category: '産業学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 2, "has_origin": "origin_mechanists"}},
      prerequisites: ["機械テンプレートシステム", "人工専門家"],
      potential: {"NOT": {"has_ethic": "ethic_gestalt_consciousness", "is_individual_machine": "yes"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_adaptive_combat_algorithms',
      name: '適応型戦闘アルゴリズム',
      tier: 2,
      cost: 5000,
      area:'社会学',
      category: '軍事学',
      weight: 75,
      weight_modifier: {"factor": 1.5},
      prerequisites: [],
      potential: {"OR": {"is_machine_empire": "yes", "is_individual_machine": "yes"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_micro_replicators',
      name: 'マイクロレプリケーター',
      tier: 2,
      cost: 5000,
      area:'工学',
      category: '産業学',
      weight: 75,
      weight_modifier: {"factor": 1.5},
      prerequisites: [],
      potential: {"OR": {"is_machine_empire": "yes", "is_individual_machine": "yes"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_archaeoshield',
      name: '古代静止フィールド',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '考古学技術',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 0.85, "has_technology": "tech_archaeo_refinery", "NOT": {"has_ascension_perk": "ap_archaeoengineers"}}},
      prerequisites: ["考古学技術"],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archaeoarmor',
      name: '古代パルスアーマー',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '考古学技術',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 0.85, "has_technology": "tech_archaeo_refinery", "NOT": {"has_ascension_perk": "ap_archaeoengineers"}}},
      prerequisites: ["考古学技術"],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archaeo_mass_drivers',
      name: '古代規格外砲台群',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '考古学技術',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 0.85, "has_technology": "tech_archaeo_refinery", "NOT": {"has_ascension_perk": "ap_archaeoengineers"}}},
      prerequisites: ["考古学技術"],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archaeo_lasers',
      name: '古代崩壊発生器',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '考古学技術',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 0.85, "has_technology": "tech_archaeo_refinery", "NOT": {"has_ascension_perk": "ap_archaeoengineers"}}},
      prerequisites: ["考古学技術"],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archaeo_point_defence',
      name: '古代迎撃網',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '考古学技術',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 0.85, "has_technology": "tech_archaeo_refinery", "NOT": {"has_ascension_perk": "ap_archaeoengineers"}}},
      prerequisites: ["考古学技術"],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archaeo_missiles',
      name: '古代ナノミサイル・ランチャー',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '考古学技術',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 0.85, "has_technology": "tech_archaeo_refinery", "NOT": {"has_ascension_perk": "ap_archaeoengineers"}}},
      prerequisites: ["考古学技術"],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archaeo_mass_accelerator',
      name: '古代イオン化球砲台',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '考古学技術',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 0.85, "has_technology": "tech_archaeo_refinery", "NOT": {"has_ascension_perk": "ap_archaeoengineers"}}},
      prerequisites: ["考古学技術"],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archaeo_strike_crafts',
      name: '古代穿孔ドローン',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '考古学技術',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 0.85, "has_technology": "tech_archaeo_refinery", "NOT": {"has_ascension_perk": "ap_archaeoengineers"}}},
      prerequisites: ["考古学技術"],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archaeo_rampart',
      name: '古代軌道防衛網',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '考古学技術',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 0.85, "has_technology": "tech_archaeo_refinery", "NOT": {"has_ascension_perk": "ap_archaeoengineers"}}},
      prerequisites: ["考古学技術"],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archaeo_overcharger',
      name: '古代シールドチャージャー',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '考古学技術',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 0.85, "has_technology": "tech_archaeo_refinery", "NOT": {"has_ascension_perk": "ap_archaeoengineers"}}},
      prerequisites: ["考古学技術"],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archaeo_refinery',
      name: '古代精製施設',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '考古学技術',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 0.85, "has_technology": "tech_archaeo_refinery", "NOT": {"has_ascension_perk": "ap_archaeoengineers"}}},
      prerequisites: ["考古学技術"],
      potential: {"has_ancrel": "yes", "is_wilderness_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_harbingers',
      name: 'ハーヴィンジャー',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["ウィーヴァー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_harbinger_build_speed',
      name: 'ハーヴィンジャーの孵化の標準化',
      tier: 3,
      cost: 10000,
      area:'社会学',
      category: '生物学',
      weight: 60,
      weight_modifier: [],
      prerequisites: ["ハーヴィンジャー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_harbinger_growth_1',
      name: '改良型ハーヴィンジャーの開発',
      tier: 3,
      cost: 10000,
      area:'社会学',
      category: '生物学',
      weight: 60,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["ハーヴィンジャー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_harbinger_growth_2',
      name: '発展型ハーヴィンジャーの開発',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '生物学',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["改良型ハーヴィンジャーの開発"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_mandibles_2',
      name: '複合大顎',
      tier: 3,
      cost: 10000,
      area:'工学',
      category: '材料工学',
      weight: 60,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["モーラー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_weaver_bio_healing_3',
      name: '高度な胞子投射機',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["改良型胞子投射機"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_evasion_3',
      name: 'アジャイル・スパイクアレイ',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["タングラー胞子投射機"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_fire_rate_3',
      name: 'ウィーヴァー・有機技術増幅器',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["ウィーヴァー・ブースターブラスター"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_confuser_3',
      name: 'ニューロ・スカージ',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["タングル・パルス"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_anti_evasion_3',
      name: 'シーカー・シャードアレイ',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["酵素ウェブキャスター"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_anti_fire_rate_3',
      name: 'マインドミサイル',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["射撃ディスラプター"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_deep_space_citadel',
      name: '深宇宙シタデル',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '軍事学',
      weight: 50,
      weight_modifier: {"factor": 0.25, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["星系軍港の建設"],
      potential: {"has_biogenesis_dlc": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_advanced_storm_manipulation',
      name: '高度な宇宙嵐の操作',
      tier: 3,
      cost: 10000,
      area:'物理学',
      category: '力場操作',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 0.5, "num_cosmic_storms_encountered": "< 5"}},
      prerequisites: ["宇宙嵐の操作"],
      potential: {"has_cosmic_storms_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_storm_prediction_2',
      name: '確率流密度',
      tier: 3,
      cost: 12000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 2, "OR": {"has_origin": "origin_storm_chasers", "has_storm_attraction_civic": "yes"}}},
      prerequisites: ["宇宙気象モデル"],
      potential: {"has_cosmic_storms_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_lgate_activation',
      name: 'Lゲート起動',
      tier: 3,
      cost: 12000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {"NOT": {"has_global_flag": "l_cluster_opened"}}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_cruisers',
      name: '巡洋艦',
      tier: 3,
      cost: 8000,
      area:'工学',
      category: '宇宙工学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["駆逐艦"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_destroyer_hull_2',
      name: '発展型駆逐艦船体',
      tier: 3,
      cost: 8000,
      area:'工学',
      category: '宇宙工学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["改良型駆逐艦船体"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_cruiser_build_speed',
      name: '巡洋艦設計の標準化',
      tier: 3,
      cost: 10000,
      area:'工学',
      category: '宇宙工学',
      weight: 60,
      weight_modifier: [],
      prerequisites: ["巡洋艦"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_cruiser_hull_1',
      name: '改良型巡洋艦船体',
      tier: 3,
      cost: 12000,
      area:'工学',
      category: '宇宙工学',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["巡洋艦"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_starbase_4',
      name: '星系要塞の建設',
      tier: 3,
      cost: 10000,
      area:'工学',
      category: '宇宙工学',
      weight: 60,
      weight_modifier: {"modifier": {"factor": 5, "has_modifier": "agenda_impenetrable_border_finish"}},
      prerequisites: ["星系軍港の建設"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_habitat_1',
      name: '軌道上居住地',
      tier: 3,
      cost: 10000,
      area:'工学',
      category: '宇宙工学',
      weight: 60,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_expansion_finish"}},
      prerequisites: ["星系軍港の建設"],
      potential: {"is_wilderness_empire": "no", "OR": {"has_void_dweller_origin": "yes", "has_origin": "origin_toxic_knights", "host_has_dlc": "Utopia"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_space_defense_station_improvement',
      name: '工兵部隊',
      tier: 3,
      cost: 12000,
      area:'工学',
      category: '宇宙工学',
      weight: 50,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 1.25, "OR": {"has_ethic": "ethic_fanatic_militarist"}}},
      prerequisites: ["星系要塞の建設", "組み立て工学"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_strike_craft_3',
      name: '発展型軍用機',
      tier: 3,
      cost: 12000,
      area:'工学',
      category: '宇宙工学',
      weight: 50,
      weight_modifier: [],
      prerequisites: ["改良型軍用機"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_ship_armor_4',
      name: 'デュラスチール材',
      tier: 3,
      cost: 10000,
      area:'工学',
      category: '材料工学',
      weight: 60,
      weight_modifier: {"factor": 1.25, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "bulwark"}}},
      prerequisites: ["プラスチール材"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_thrusters_3',
      name: 'プラズマスラスター',
      tier: 3,
      cost: 8000,
      area:'工学',
      category: '推進システム工学',
      weight: 65,
      weight_modifier: {"factor": 1.25, "modifier": {"factor": 2, "OR": {"has_technology": "tech_harbingers"}}},
      prerequisites: ["イオンスラスター"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_space_mining_5',
      name: 'ナノマシン鉱物探査装置',
      tier: 3,
      cost: 8000,
      area:'工学',
      category: '産業学',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["自律採鉱ドローン"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mining_3',
      name: '鉱物分離',
      tier: 3,
      cost: 8000,
      area:'工学',
      category: '産業学',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["惑星核採掘"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_alloys_2',
      name: 'ナノセパレータ',
      tier: 3,
      cost: 8000,
      area:'工学',
      category: '材料工学',
      weight: 65,
      weight_modifier: {"factor": 2, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "prospectorium"}}},
      prerequisites: ["ホログラフィック鋳造", "植民地集権化"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_luxuries_2',
      name: 'レプリケーター自動端末',
      tier: 3,
      cost: 8000,
      area:'工学',
      category: '材料工学',
      weight: 65,
      weight_modifier: {"factor": 2, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "prospectorium"}}},
      prerequisites: ["ナノ回路組み立て", "植民地集権化"],
      potential: {"country_uses_consumer_goods": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_engineering_3',
      name: '超固体材料',
      tier: 3,
      cost: 12000,
      area:'工学',
      category: '材料工学',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "scholarium"}}},
      prerequisites: ["自己接続回路"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_afterburners_2',
      name: '発展型アフターバーナー',
      tier: 3,
      cost: 10000,
      area:'工学',
      category: '推進システム工学',
      weight: 60,
      weight_modifier: {"factor": 1.25},
      prerequisites: ["アフターバーナー", "プラズマスラスター"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_construction_templates',
      name: '建設用テンプレート',
      tier: 3,
      cost: 10000,
      area:'工学',
      category: '産業学',
      weight: 60,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 1.25, "OR": {"has_ethic": "ethic_fanatic_militarist"}}},
      prerequisites: ["組み立てパターン"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_housing_2',
      name: '反重力工学',
      tier: 3,
      cost: 8000,
      area:'工学',
      category: '産業学',
      weight: 65,
      weight_modifier: {"factor": 1.5, "modifier": {"factor": 0, "has_valid_civic": "civic_agrarian_idyll"}},
      prerequisites: ["気象制御システム"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mass_drivers_4',
      name: '発展型レールガン',
      tier: 3,
      cost: 8000,
      area:'工学',
      category: '推進システム工学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["レールガン"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_kinetic_artillery_1',
      name: '実体弾砲台',
      tier: 3,
      cost: 12000,
      area:'工学',
      category: '推進システム工学',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["発展型レールガン"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_autocannons_2',
      name: 'リッパーキャノン',
      tier: 3,
      cost: 8000,
      area:'工学',
      category: '推進システム工学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["機関砲"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_flak_batteries_2',
      name: '改良型対空砲',
      tier: 3,
      cost: 6000,
      area:'工学',
      category: '推進システム工学',
      weight: 70,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["対空砲"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_missiles_4',
      name: '量子ミサイル',
      tier: 3,
      cost: 8000,
      area:'工学',
      category: '推進システム工学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["反物質ミサイル"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_torpedoes_2',
      name: '装甲魚雷',
      tier: 3,
      cost: 10000,
      area:'工学',
      category: '推進システム工学',
      weight: 60,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["宙間魚雷"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_cloaking_2',
      name: '発展型クロークフィールド',
      tier: 3,
      cost: 12000,
      area:'物理学',
      category: '力場操作',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 5, "has_tradition": "tr_subterfuge_adopt"}},
      prerequisites: ["基礎クロークフィールド", "シールド"],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_gravity_snare_capacity_2',
      name: '重力操作の最適化',
      tier: 3,
      cost: 8000,
      area:'物理学',
      category: '力場操作',
      weight: 65,
      weight_modifier: {"modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["マイクロ特異点の強化"],
      potential: {"has_grand_archive_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_containment_vessel',
      name: 'キュレーターの収容プロトコル',
      tier: 3,
      cost: 8000,
      area:'物理学',
      category: '力場操作',
      weight: 0,
      weight_modifier: {"modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["重力罠"],
      potential: {"has_grand_archive_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_voidworm_immunity',
      name: 'ボイドワーム免疫',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_grand_archive_dlc": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_asteroidal_carapace',
      name: '小惑星型の甲殻',
      tier: 3,
      cost: 0,
      area:'工学',
      category: '材料工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_grand_archive_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_metabolic_gases',
      name: '代謝ガス',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_domestication_adopt"}},
      prerequisites: ["改良インキュベーター"],
      potential: {"has_grand_archive_dlc": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_unique_mutation_space_amoeba',
      name: 'リーチクラフト',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["高度な制御された突然変異"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_unique_mutation_tiyanki',
      name: '群歌のコード',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["高度な制御された突然変異"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_unique_mutation_voidworm',
      name: '強烈な嚢胞',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["高度な制御された突然変異"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_unique_mutation_cutholoid',
      name: '胃液の噴水',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["高度な制御された突然変異"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_unique_mutation_crystalline_entity',
      name: '核分裂コア',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["高度な制御された突然変異"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_akx_worm_1',
      name: 'エントロピーの再帰',
      tier: 3,
      cost: 4000,
      area:'物理学',
      category: '力場操作',
      weight: 60,
      weight_modifier: {"modifier": {"factor": 0, "always": "yes"}},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_akx_worm_2',
      name: '教義：奇妙なループ',
      tier: 3,
      cost: 4000,
      area:'社会学',
      category: '統治学',
      weight: 60,
      weight_modifier: {"modifier": {"factor": 0, "always": "yes"}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_akx_worm_3',
      name: 'オメガ理論',
      tier: 3,
      cost: 10000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 60,
      weight_modifier: {"modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["エントロピーの再帰", "教義：奇妙なループ"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_xeno_tourism_agency',
      name: '異星旅行代理店',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '統治学',
      weight: 65,
      weight_modifier: [],
      prerequisites: [],
      potential: {"is_megacorp": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_executive_retreat',
      name: '高級娯楽プログラム',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '統治学',
      weight: 65,
      weight_modifier: [],
      prerequisites: [],
      potential: {"is_megacorp": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_quantum_catapult',
      name: '量子カタパルト',
      tier: 3,
      cost: 16000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 50,
      weight_modifier: {"factor": 0.25, "modifier": {"factor": "@eager_explorer_effect", "is_eager_explorer_empire": "yes"}},
      prerequisites: [],
      potential: {"has_overlord_dlc": "yes", "OR": {"has_technology": "tech_mega_engineering", "has_country_flag": "has_quantum_catapult_insight", "has_origin": "origin_star_slingshot"}}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_orbital_ring_tier_1',
      name: '軌道環状施設',
      tier: 3,
      cost: 10000,
      area:'工学',
      category: '宇宙工学',
      weight: 60,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_expansion_finish"}},
      prerequisites: ["星系軍港の建設", "銀河規模の行政機構", "セラモ金属インフラ"],
      potential: {"has_overlord_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_basic_science_lab_3',
      name: '多次元研究',
      tier: 3,
      cost: 8000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 65,
      weight_modifier: {"factor": 2, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "scholarium"}}},
      prerequisites: ["エキゾチック物質研究所", "植民地集権化"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_global_research_initiative',
      name: '惑星間研究構想',
      tier: 3,
      cost: 8000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 65,
      weight_modifier: {"factor": 1.5, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "scholarium"}}},
      prerequisites: ["エキゾチック物質研究所", "植民地集権化"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_space_science_5',
      name: '多次元分析',
      tier: 3,
      cost: 8000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["自律ステーション・プロトコル"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_physics_3',
      name: '量子重力波',
      tier: 3,
      cost: 12000,
      area:'物理学',
      category: '力場操作',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "scholarium"}}},
      prerequisites: ["統一場理論"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_cryostasis_2',
      name: '自我をもつコロニー船',
      tier: 3,
      cost: 6000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 70,
      weight_modifier: [],
      prerequisites: ["自己進化論理", "自動コロニー船"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_combat_computers_2',
      name: '拡張型戦闘アルゴリズム',
      tier: 3,
      cost: 8000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["戦闘特化コンピュータ", "自己進化論理"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_neuro_quantum_links',
      name: '量子ニューロリンク',
      tier: 3,
      cost: 8000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 65,
      weight_modifier: {"factor": 1.5, "modifier": {"factor": 0.25, "NOR": {"has_trait_in_council": {"TRAIT": "leader_trait_curator"}}}},
      prerequisites: ["エキゾチック物質研究所", "統合サイバネティクス"],
      potential: {"is_wilderness_empire": "no", "OR": {"is_machine_empire": "no", "has_civic": "civic_machine_assimilator"}}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_antimatter_power',
      name: '反物質発電',
      tier: 3,
      cost: 10000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 60,
      weight_modifier: {"factor": 2, "modifier": {"factor": 2, "OR": {"has_technology": "tech_stingers"}}},
      prerequisites: ["常温核融合発電"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_shields_4',
      name: '発展型シールド',
      tier: 3,
      cost: 12000,
      area:'物理学',
      category: '力場操作',
      weight: 50,
      weight_modifier: {"factor": 1.25, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "bulwark"}}},
      prerequisites: ["シールド"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_planetary_shield_generator',
      name: '惑星シールド',
      tier: 3,
      cost: 8000,
      area:'物理学',
      category: '力場操作',
      weight: 65,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["シールド"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_sensors_3',
      name: '亜空間センサー',
      tier: 3,
      cost: 8000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 1.25, "any_system_within_border": {"is_inside_nebula": "yes"}}},
      prerequisites: ["重力センサー"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_power_plant_4',
      name: '量子力場操作',
      tier: 3,
      cost: 8000,
      area:'物理学',
      category: '力場操作',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_prosperity_adopt"}},
      prerequisites: ["量子エネルギー状態"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_hyper_drive_3',
      name: 'ハイパースペース後流',
      tier: 3,
      cost: 12000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 50,
      weight_modifier: {"modifier": {"factor": "@eager_explorer_effect", "is_eager_explorer_empire": "yes"}},
      prerequisites: ["ハイパーレーン突破点"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_wormhole_stabilization',
      name: 'ワームホール安定化',
      tier: 3,
      cost: 8000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 65,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 10, "mid_game_years_passed": "> 0", "has_country_flag": "chosen_empire"}},
      prerequisites: ["ハイパーレーン突破点"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_lasers_4',
      name: 'X線レーザー',
      tier: 3,
      cost: 8000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["紫外線レーザー"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_plasma_2',
      name: 'プラズマ加速砲',
      tier: 3,
      cost: 8000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["プラズマ投射砲"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_disruptors_2',
      name: 'イオンディスラプター',
      tier: 3,
      cost: 8000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["ディスラプター"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_energy_torpedoes_1',
      name: '陽子投射機',
      tier: 3,
      cost: 12000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 0.5, "NOT": {"has_technology": "tech_lasers_1"}}},
      prerequisites: ["X線レーザー", "OR = {", "  宙間魚雷", "  ハーヴィンジャー", "}"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_interstellar_economics',
      name: '恒星間経済',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '統治学',
      weight: 65,
      weight_modifier: {"factor": 2, "modifier": {"factor": 1.25, "has_tradition": "tr_prosperity_adopt"}},
      prerequisites: ["宇宙交易会社"],
      potential: {"is_gestalt": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_prescient_data_modeling',
      name: 'ヌマ的データモデリング',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '統治学',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_nano_vitality_crops',
      name: 'ナノ活性化作物',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 2, "country_uses_bio_ships": "yes"}},
      prerequisites: ["遺伝子改良作物"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_food_processing_2',
      name: '高度な食品加工',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 65,
      weight_modifier: {"factor": 2, "modifier": {"factor": 2, "country_uses_bio_ships": "yes"}},
      prerequisites: ["食品加工"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_society_3',
      name: '生体構造合成',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '生物学',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 2, "has_relic": "r_pox_sample"}},
      prerequisites: ["神経の組織化"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_colonization_4',
      name: '異星土壌の肥沃化',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '新天地',
      weight: 50,
      weight_modifier: [],
      prerequisites: ["過酷な環境への適応"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_tomb_world_adaption',
      name: '死の惑星への適応',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '新天地',
      weight: 65,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_nuked"}}},
      prerequisites: ["過酷な環境への適応"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_ecological_adaptation',
      name: '生態学的適応',
      tier: 3,
      cost: 10000,
      area:'社会学',
      category: '新天地',
      weight: 60,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_expansion_adopt"}},
      prerequisites: ["惑星整形"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_gene_tailoring',
      name: '遺伝子改変',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '生物学',
      weight: 65,
      weight_modifier: {"factor": 2, "modifier": {"factor": 0, "is_individual_machine": "yes", "NOT": {"any_owned_species": {"is_organic_species": "yes"}}}},
      prerequisites: ["ゲノムマッピング"],
      potential: {"OR": {"is_machine_empire": "no", "has_civic": "civic_machine_servitor"}, "is_natural_design_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_glandular_acclimation',
      name: '分泌系の順化',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '生物学',
      weight: 50,
      weight_modifier: {"factor": 1.5, "modifier": {"factor": 2, "AND": {"is_individual_machine": "yes", "any_owned_species": {"is_organic_species": "yes"}}}},
      prerequisites: ["遺伝子改変"],
      potential: {"OR": {"is_machine_empire": "no", "has_civic": "civic_machine_servitor"}, "is_natural_design_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_gene_expressions',
      name: '標的遺伝子発現',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '生物学',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 2, "has_relic": "r_pox_sample"}},
      prerequisites: ["遺伝子改変"],
      potential: {"OR": {"NOR": {"is_machine_empire": "yes", "is_individual_machine": "yes"}, "has_civic": "civic_machine_servitor"}, "NOR": {"has_valid_civic": "civic_hive_natural_design"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_selected_lineages',
      name: '血統選別',
      tier: 3,
      cost: 10000,
      area:'社会学',
      category: '生物学',
      weight: 60,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 0.5, "is_individual_machine": "yes", "any_owned_species": {"is_organic_species": "no"}}},
      prerequisites: ["生命活性剤"],
      potential: {"is_machine_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_regenerative_hull_tissue',
      name: '船体再生細胞',
      tier: 3,
      cost: 10000,
      area:'社会学',
      category: '生物学',
      weight: 60,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_doctrine_fleet_size_3',
      name: '星間戦争ドクトリン',
      tier: 3,
      cost: 10000,
      area:'社会学',
      category: '軍事学',
      weight: 60,
      weight_modifier: {"factor": 3, "modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: ["反応陣形ドクトリン"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_refit_standards',
      name: '規格再編',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '軍事学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: ["星間艦隊の伝統"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_command_matrix',
      name: '司令マトリクス',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '軍事学',
      weight: 50,
      weight_modifier: {"factor": 3, "modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: ["規格再編"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_doctrine_navy_size_3',
      name: '星間兵站ドクトリン',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '軍事学',
      weight: 65,
      weight_modifier: {"factor": 3, "modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: ["支援艦隊ドクトリン"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_centralized_command',
      name: '中央集中型司令部',
      tier: 3,
      cost: 10000,
      area:'社会学',
      category: '軍事学',
      weight: 60,
      weight_modifier: {"modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_combat_training',
      name: '戦闘訓練',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '軍事学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: ["中央集中型司令部"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_psionic_theory',
      name: '超能力理論',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '超能力',
      weight: 65,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 0, "AND": {"is_materialist": "yes", "NOR": {"has_tier1or2or3_in_council": {"TRAIT": "leader_trait_expertise_psionics"}, "has_councilor": {"COUNCILOR": "councilor_shroudwalker_teacher"}, "any_owned_pop_group": {"OR": {"pop_group_has_trait": "trait_latent_psionic"}}}}}},
      prerequisites: [],
      potential: {"OR": {"NOT": {"has_ethic": "ethic_gestalt_consciousness"}, "is_active_resolution": "resolution_galacticstudies_extradimensional_experimentation", "has_relic": "r_zro_crystal"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_telepathy',
      name: 'テレパシー',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '超能力',
      weight: 50,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 4, "OR": {"has_trait_in_council": {"TRAIT": "leader_trait_maniacal_3"}}}},
      prerequisites: ["超能力理論"],
      potential: {"NOT": {"has_ethic": "ethic_gestalt_consciousness"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_galactic_administration',
      name: '銀河規模の行政機構',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '統治学',
      weight: 50,
      weight_modifier: {"factor": 4},
      prerequisites: ["植民地集権化"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_global_production_strategy',
      name: '統一生産計画',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '統治学',
      weight: 65,
      weight_modifier: {"factor": 1.5, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "prospectorium"}}},
      prerequisites: ["ホログラフィック鋳造", "植民地集権化"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_galactic_bureaucracy',
      name: '銀河官僚制度',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '統治学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 1.5, "num_owned_planets": "> 4"}},
      prerequisites: ["植民地官僚制度"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_collective_self',
      name: '集合的自我',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '統治学',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 1.5, "OR": {"has_ethic": "ethic_fanatic_authoritarian"}}},
      prerequisites: ["植民地集権化"],
      potential: {"NOT": {"has_ethic": "ethic_gestalt_consciousness"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_embodied_dynamism',
      name: '体現ダイナミズム',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '統治学',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 1.5, "num_owned_planets": "> 10"}},
      prerequisites: ["自律エージェント"],
      potential: {"has_ethic": "ethic_gestalt_consciousness"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_synthetic_thought_patterns',
      name: '合成思考パターン',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '統治学',
      weight: 50,
      weight_modifier: {"factor": 1.5},
      prerequisites: ["人工的な倫理規範"],
      potential: {"is_gestalt": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_collective_production_methods',
      name: '集合的生産方法',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '統治学',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["統一目標"],
      potential: {"is_hive_empire": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_resource_processing_algorithms',
      name: '資源処理アルゴリズム',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '統治学',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["統一目標"],
      potential: {"is_machine_empire": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_paradise_dome',
      name: '牧歌的な建築様式',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '統治学',
      weight: 65,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_rare_crystals", "has_country_flag": "has_market_access"}}},
      prerequisites: ["気象制御システム"],
      potential: {"OR": {"is_gestalt": "no", "has_valid_civic": "civic_machine_servitor"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_hypercomms_forum',
      name: '地域超空間通信',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '統治学',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["星界遺産", "植民地集権化"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_autocurating_vault',
      name: '自動キュレートアルゴリズム',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '統治学',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["管理AI", "植民地集権化"],
      potential: {"NOR": {"has_ethic": "ethic_fanatic_spiritualist", "is_wilderness_empire": "yes"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_consecration_fields',
      name: '聖別された領域',
      tier: 3,
      cost: 10000,
      area:'社会学',
      category: '統治学',
      weight: 60,
      weight_modifier: [],
      prerequisites: ["ホログラフィック儀式", "植民地集権化"],
      potential: {"OR": {"has_ethic": "ethic_fanatic_spiritualist", "AND": {"is_gestalt": "no", "has_make_spiritualist_perk": "yes"}}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_hive_confluence',
      name: '思考の合流点',
      tier: 3,
      cost: 10000,
      area:'社会学',
      category: '統治学',
      weight: 60,
      weight_modifier: [],
      prerequisites: ["クラスタ化シナプス", "植民地集権化"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_wilderness_confluence',
      name: '思考の合流点',
      tier: 3,
      cost: 10000,
      area:'社会学',
      category: '統治学',
      weight: 60,
      weight_modifier: [],
      prerequisites: ["クラスタ化シナプス", "植民地集権化"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_psionic_barrier',
      name: 'サイオニック・バリア',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '超能力',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: ["超能力理論"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_housing_agrarian_idyll',
      name: '農業ユートピア',
      tier: 3,
      cost: 8000,
      area:'社会学',
      category: '統治学',
      weight: 65,
      weight_modifier: {"factor": 1.5, "modifier": {"factor": 0, "NOT": {"has_valid_civic": "civic_agrarian_idyll"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_xeno_relations',
      name: '異星人外交関係',
      tier: 3,
      cost: 10000,
      area:'社会学',
      category: '統治学',
      weight: 65,
      weight_modifier: {"factor": 2, "modifier": {"factor": 0.01, "has_civic": "civic_inwards_perfection"}},
      prerequisites: ["異星人外交", "銀河規模の行政機構"],
      potential: {"is_regular_empire": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_capital_productivity_2',
      name: '規模の効率性',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '統治学',
      weight: 70,
      weight_modifier: {"factor": 1, "modifier": {"factor": 0.25, "NOT": {"has_tradition": "tr_prosperity_finish"}}},
      prerequisites: ["植民地集権化", "生産の改善"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_node_reformatting_2',
      name: '基本的なノード再フォーマット',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '統治学',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 1.5, "any_owned_leader": {"is_councilor": "yes", "is_ruler": "no", "has_base_skill": ">= 9"}}},
      prerequisites: ["初歩的なノード再フォーマット"],
      potential: {"is_machine_empire": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_node_culling_2',
      name: '基本的なノード淘汰',
      tier: 3,
      cost: 12000,
      area:'社会学',
      category: '統治学',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 1.5, "any_owned_leader": {"is_councilor": "yes", "is_ruler": "no", "has_base_skill": ">= 9"}}},
      prerequisites: ["初歩的なノード淘汰"],
      potential: {"is_hive_empire": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_universal_marcophage',
      name: '万能マクロファージ',
      tier: 3,
      cost: 6000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_mine_zro',
      name: 'ズィロ蒸留物',
      tier: 3,
      cost: 10000,
      area:'社会学',
      category: '超能力',
      weight: 60,
      weight_modifier: {"modifier": {"factor": 2, "has_trait_in_council": {"TRAIT": "leader_trait_expertise_psionics"}}},
      prerequisites: ["亜空間センサー"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_mine_dark_matter',
      name: 'ダークマター吸収',
      tier: 3,
      cost: 12000,
      area:'物理学',
      category: '力場操作',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_country_flag": "dark_matter_found", "any_system_within_border": {"any_system_planet": {"has_resource": {"type": "sr_dark_matter amount: \"> 0 \""}}}, "any_relation": {"AND": {"is_country_type": "default", "has_communications": "ROOT", "has_technology": "tech_mine_dark_matter"}}}}},
      prerequisites: ["タキオンセンサー"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_binary_motivators',
      name: 'バイナリモチベーター',
      tier: 3,
      cost: 8000,
      area:'工学',
      category: '産業学',
      weight: 65,
      weight_modifier: [],
      prerequisites: ["植民地集権化", "機械テンプレートシステム"],
      potential: {"OR": {"is_machine_empire": "yes", "is_individual_machine": "yes"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_self_assembling_components',
      name: '自己組立式コンポーネント',
      tier: 3,
      cost: 12000,
      area:'工学',
      category: '産業学',
      weight: 50,
      weight_modifier: {"factor": 1.5},
      prerequisites: ["マイクロレプリケーター"],
      potential: {"OR": {"is_machine_empire": "yes", "is_individual_machine": "yes"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_secrets_cybrex',
      name: 'サイブレックスの採掘コア',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '考古学技術',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_secrets_league',
      name: '第一同盟の文書保管庫',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '考古学技術',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_secrets_irassian',
      name: 'イラッシアの宇宙軍工廠',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '考古学技術',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_secrets_vultaum',
      name: 'ヴルタウムの現実計算機',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '考古学技術',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_secrets_yuht',
      name: 'ユートの宇宙干渉計',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '考古学技術',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_secrets_baol',
      name: 'バオルの有機工場',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '考古学技術',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_secrets_zroni',
      name: 'ズィロニのストームキャスター',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '考古学技術',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archaeo_detection_scrambler',
      name: '古代ターゲット・スクランブラー',
      tier: 4,
      cost: 20000,
      area:'社会学',
      category: '考古学技術',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 0.85, "has_technology": "tech_archaeo_refinery", "NOT": {"has_ascension_perk": "ap_archaeoengineers"}}},
      prerequisites: ["考古学技術"],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archaeo_titan_beam',
      name: '古代破滅砲',
      tier: 4,
      cost: 20000,
      area:'社会学',
      category: '考古学技術',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 0.85, "has_technology": "tech_archaeo_refinery", "NOT": {"has_ascension_perk": "ap_archaeoengineers"}}},
      prerequisites: ["考古学技術"],
      potential: {"has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_stingers',
      name: 'スティンガー',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '生物学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["ハーヴィンジャー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_stinger_build_speed',
      name: 'スティンガーの孵化の標準化',
      tier: 4,
      cost: 20000,
      area:'社会学',
      category: '生物学',
      weight: 40,
      weight_modifier: [],
      prerequisites: ["スティンガー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_stinger_growth_1',
      name: '改良型スティンガーの開発',
      tier: 4,
      cost: 20000,
      area:'社会学',
      category: '生物学',
      weight: 40,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["スティンガー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_stinger_growth_2',
      name: '発展型スティンガーの開発',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '生物学',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["改良型スティンガーの開発"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_growth_chamber_1',
      name: '成長チャンバー',
      tier: 4,
      cost: 20000,
      area:'社会学',
      category: '生物学',
      weight: 40,
      weight_modifier: {"factor": 3, "modifier": {"factor": 2, "OR": {"is_militarist": "yes", "is_hive_empire": "yes", "is_wilderness_empire": "yes"}}},
      prerequisites: ["スティンガー", "OR = {", "  改良型モーラ―の開発", "  改良型スティンガーの開発", "  改良型ウィーヴァーの開発", "  改良型ハーヴィンジャーの開発", "}"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_growth_chamber_2',
      name: '高度な成長チャンバー',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '生物学',
      weight: 35,
      weight_modifier: {"factor": 3, "modifier": {"factor": 2, "OR": {"is_militarist": "yes", "is_hive_empire": "yes", "is_wilderness_empire": "yes"}}},
      prerequisites: ["成長チャンバー", "OR = {", "  発展型モーラ―の開発", "  発展型スティンガーの開発", "  発展型ウィーヴァーの開発", "  発展型ハーヴィンジャーの開発", "}"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_mandibles_3',
      name: '結晶質大顎',
      tier: 4,
      cost: 20000,
      area:'工学',
      category: '材料工学',
      weight: 40,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["複合大顎"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_weaver_bio_healing_4',
      name: '適応型胞子投射機',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '生物学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_exotic_gases", "has_country_flag": "has_market_access"}}},
      prerequisites: ["高度な胞子投射機"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_evasion_4',
      name: 'エレクトロ・スプレー',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '生物学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_rare_crystals", "has_country_flag": "has_market_access"}}},
      prerequisites: ["アジャイル・スパイクアレイ"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_fire_rate_4',
      name: 'ウィーヴァー・オーラキャスター',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '生物学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_volatile_motes", "has_country_flag": "has_market_access"}}},
      prerequisites: ["ウィーヴァー・有機技術増幅器"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_confuser_4',
      name: 'ルイン・バーブ',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '生物学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_volatile_motes", "has_country_flag": "has_market_access"}}},
      prerequisites: ["ニューロ・スカージ"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_anti_evasion_4',
      name: 'ピニオン加速砲',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '生物学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_rare_crystals", "has_country_flag": "has_market_access"}}},
      prerequisites: ["シーカー・シャードアレイ"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_anti_fire_rate_4',
      name: '分解ビーム',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '生物学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_volatile_motes", "has_country_flag": "has_market_access"}}},
      prerequisites: ["マインドミサイル"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_neuroregeneration',
      name: '神経再生医療',
      tier: 4,
      cost: 20000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_battleships',
      name: '戦艦',
      tier: 4,
      cost: 16000,
      area:'工学',
      category: '宇宙工学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["巡洋艦"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_cruiser_hull_2',
      name: '発展型巡洋艦船体',
      tier: 4,
      cost: 16000,
      area:'工学',
      category: '宇宙工学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["改良型巡洋艦船体"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_battleship_build_speed',
      name: '戦艦設計の標準化',
      tier: 4,
      cost: 20000,
      area:'工学',
      category: '宇宙工学',
      weight: 40,
      weight_modifier: [],
      prerequisites: ["戦艦"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_battleship_hull_1',
      name: '改良型戦艦船体',
      tier: 4,
      cost: 24000,
      area:'工学',
      category: '宇宙工学',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["戦艦"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_starbase_5',
      name: 'シタデルの建設',
      tier: 4,
      cost: 20000,
      area:'工学',
      category: '宇宙工学',
      weight: 40,
      weight_modifier: {"modifier": {"factor": 5, "has_modifier": "agenda_impenetrable_border_finish"}},
      prerequisites: ["星系要塞の建設"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_habitat_2',
      name: '軌道上居住地の拡張',
      tier: 4,
      cost: 20000,
      area:'工学',
      category: '宇宙工学',
      weight: 35,
      weight_modifier: {"modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["軌道上居住地", "星系要塞の建設"],
      potential: {"is_wilderness_empire": "no", "OR": {"has_void_dweller_origin": "yes", "host_has_dlc": "Utopia"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_habitat_3',
      name: '発展型宇宙居住地',
      tier: 4,
      cost: 40000,
      area:'工学',
      category: '宇宙工学',
      weight: 35,
      weight_modifier: {"modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["軌道上居住地の拡張", "シタデルの建設"],
      potential: {"is_wilderness_empire": "no", "OR": {"is_void_dweller_empire": "yes", "host_has_dlc": "Utopia"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_strike_craft_skrand',
      name: 'スクラヴァー軍用機',
      tier: 4,
      cost: 24000,
      area:'工学',
      category: '宇宙工学',
      weight: 0,
      weight_modifier: [],
      prerequisites: [],
      potential: {"has_paragon_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_ship_armor_5',
      name: 'ニュートロニウム材',
      tier: 4,
      cost: 20000,
      area:'工学',
      category: '材料工学',
      weight: 40,
      weight_modifier: {"factor": 1.25, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "bulwark"}}},
      prerequisites: ["デュラスチール材"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_crystal_armor_2',
      name: '結晶鍛造外板',
      tier: 4,
      cost: 16000,
      area:'工学',
      category: '材料工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_thrusters_4',
      name: 'インパルススラスター',
      tier: 4,
      cost: 16000,
      area:'工学',
      category: '推進システム工学',
      weight: 45,
      weight_modifier: {"factor": 1.25, "modifier": {"factor": 2, "OR": {"has_technology": "tech_stingers"}}},
      prerequisites: ["プラズマスラスター"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_advanced_metallurgy_2',
      name: 'デュラスチール混合合金',
      tier: 4,
      cost: 16000,
      area:'工学',
      category: '材料工学',
      weight: 45,
      weight_modifier: {"factor": 2},
      prerequisites: ["セラミック金属合金", "ナノセパレータ", "デュラスチール材"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_synthetic_workers',
      name: '人工監理官',
      tier: 4,
      cost: 20000,
      area:'工学',
      category: '産業学',
      weight: 40,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 0.2, "NOR": {"has_trait_in_council": {"TRAIT": "leader_trait_expertise_industry"}}}},
      prerequisites: ["人工専門家", "銀河規模の行政機構", "陽電子AI"],
      potential: {"NOR": {"has_ethic": "ethic_gestalt_consciousness", "is_individual_machine": "yes"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_synthetic_leaders',
      name: '人工自我',
      tier: 4,
      cost: 24000,
      area:'工学',
      category: '産業学',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 0.33, "has_origin": "origin_necrophage", "has_trait": "trait_necrophage"}},
      prerequisites: ["人工監理官"],
      potential: {"NOR": {"has_ethic": "ethic_gestalt_consciousness", "is_individual_machine": "yes"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_robot_assembly_complex',
      name: 'ロボットアセンブリーシステム',
      tier: 4,
      cost: 16000,
      area:'工学',
      category: '産業学',
      weight: 45,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["機械テンプレートシステム", "銀河規模の行政機構"],
      potential: {"NOT": {"has_ethic": "ethic_gestalt_consciousness"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mass_drivers_5',
      name: 'ガウス砲',
      tier: 4,
      cost: 16000,
      area:'工学',
      category: '推進システム工学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["発展型レールガン"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_kinetic_artillery_2',
      name: '大型実体弾砲',
      tier: 4,
      cost: 20000,
      area:'工学',
      category: '推進システム工学',
      weight: 40,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["ガウス砲", "実体弾砲台"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mass_accelerator_1',
      name: 'メガキャノン',
      tier: 4,
      cost: 20000,
      area:'工学',
      category: '推進システム工学',
      weight: 40,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["発展型レールガン", "OR = {", "  戦艦", "  スティンガー", "}"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mass_accelerator_2',
      name: 'ギガキャノン',
      tier: 4,
      cost: 24000,
      area:'工学',
      category: '推進システム工学',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["ガウス砲", "メガキャノン"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_autocannons_3',
      name: 'ストームファイアキャノン',
      tier: 4,
      cost: 16000,
      area:'工学',
      category: '推進システム工学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["リッパーキャノン"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_flak_batteries_3',
      name: '発展型対空砲',
      tier: 4,
      cost: 16000,
      area:'工学',
      category: '推進システム工学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["改良型対空砲"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_missiles_5',
      name: 'マローダーミサイル',
      tier: 4,
      cost: 20000,
      area:'工学',
      category: '推進システム工学',
      weight: 40,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["量子ミサイル"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_swarmer_missiles_2',
      name: 'ワールウィンドミサイル',
      tier: 4,
      cost: 20000,
      area:'工学',
      category: '推進システム工学',
      weight: 40,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["スウォームミサイル"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_torpedoes_3',
      name: '破壊魚雷',
      tier: 4,
      cost: 20000,
      area:'工学',
      category: '推進システム工学',
      weight: 40,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["装甲魚雷"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_cloaking_3',
      name: '最先端クロークフィールド',
      tier: 4,
      cost: 24000,
      area:'物理学',
      category: '力場操作',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 5, "has_tradition": "tr_subterfuge_adopt"}},
      prerequisites: ["発展型クロークフィールド", "発展型シールド"],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_gravity_snare_capacity_3',
      name: '収容システムの改善',
      tier: 4,
      cost: 16000,
      area:'物理学',
      category: '力場操作',
      weight: 45,
      weight_modifier: {"modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["重力操作の最適化"],
      potential: {"has_grand_archive_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_controlled_mutations_2',
      name: '高度な制御された突然変異',
      tier: 4,
      cost: 20000,
      area:'社会学',
      category: '生物学',
      weight: 20000,
      weight_modifier: {},
      prerequisites: ["制御された突然変異"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_unique_mutation_restorative_enzymes',
      name: '修復酵素',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["高度な制御された突然変異"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_unique_mutation_starborne_biology',
      name: 'スターボーン生物学',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["高度な制御された突然変異"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_identity_copy',
      name: '自我の複製',
      tier: 4,
      cost: 16000,
      area:'工学',
      category: '産業学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_identity_fusion',
      name: '自我の融合',
      tier: 4,
      cost: 20000,
      area:'工学',
      category: '産業学',
      weight: 40,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_country_flag": "advanced_identity_creation"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_identity_initialization',
      name: '自我の初期化',
      tier: 4,
      cost: 20000,
      area:'工学',
      category: '産業学',
      weight: 40,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_country_flag": "advanced_identity_creation"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_cosmogenesis_thesis',
      name: '無限理論の応用',
      tier: 4,
      cost: 75000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 25,
      weight_modifier: {"modifier": {"factor": 5, "has_technology": "tech_cosmogenesis_crisis_3"}},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_ascension_perk": "ap_cosmogenesis"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_gateway_activation',
      name: 'ゲートウェイ起動',
      tier: 4,
      cost: 24000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 35,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 4, "OR": {"owns_any_bypass": "lgate"}}},
      prerequisites: ["ハイパースペース後流"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_sapient_ai',
      name: '陽電子AI',
      tier: 4,
      cost: 16000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "scholarium"}}},
      prerequisites: ["自己進化論理"],
      potential: {"NOT": {"has_ethic": "ethic_gestalt_consciousness"}}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_positronic_implants',
      name: '陽電子インプラント',
      tier: 4,
      cost: 16000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "scholarium"}}},
      prerequisites: ["自己進化論理"],
      potential: {"has_ethic": "ethic_gestalt_consciousness"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_combat_computers_3',
      name: '知性的戦闘シミュレーション',
      tier: 4,
      cost: 20000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 40,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["拡張型戦闘アルゴリズム", "陽電子AI"],
      potential: {"NOT": {"has_ethic": "ethic_gestalt_consciousness"}}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_combat_computers_autonomous',
      name: '自律型艦船知能',
      tier: 4,
      cost: 20000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 40,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["拡張型戦闘アルゴリズム"],
      potential: {"has_ethic": "ethic_gestalt_consciousness"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_synchronized_defences',
      name: '同期的防御',
      tier: 4,
      cost: 20000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 40,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["自己進化論理"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_consumer_good_refinement_2',
      name: '大量消費予測',
      tier: 4,
      cost: 16000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 45,
      weight_modifier: {"factor": 2},
      prerequisites: ["レプリケーター自動端末", "市場分析アルゴリズム", "自己進化論理"],
      potential: {"country_uses_consumer_goods": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_encryption_3',
      name: '遡時性暗号鍵',
      tier: 4,
      cost: 20000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 5, "has_tradition": "tr_subterfuge_adopt"}},
      prerequisites: ["同時崩壊ストレージ"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_decryption_3',
      name: '疑似次元反転',
      tier: 4,
      cost: 20000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 50,
      weight_modifier: {"modifier": {"factor": 5, "has_tradition": "tr_subterfuge_adopt"}},
      prerequisites: ["シミュレートされた社会工学"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_zero_point_power',
      name: 'ゼロポイント発電',
      tier: 4,
      cost: 20000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 40,
      weight_modifier: {"factor": 2, "modifier": {"factor": 2, "OR": {"has_technology": "tech_stingers"}}},
      prerequisites: ["反物質発電"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_shields_5',
      name: 'ハイパーシールド',
      tier: 4,
      cost: 24000,
      area:'物理学',
      category: '力場操作',
      weight: 35,
      weight_modifier: {"factor": 1.25, "modifier": {"factor": 1.5, "is_specialist_subject_type": {"TYPE": "bulwark"}}},
      prerequisites: ["発展型シールド"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_sensors_4',
      name: 'タキオンセンサー',
      tier: 4,
      cost: 16000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 1.25, "any_system_within_border": {"is_inside_nebula": "yes"}}},
      prerequisites: ["亜空間センサー"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_lasers_5',
      name: 'ガンマ線レーザー',
      tier: 4,
      cost: 16000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["X線レーザー"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_energy_lance_1',
      name: '粒子ランス',
      tier: 4,
      cost: 20000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 40,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["X線レーザー", "OR = {", "  戦艦", "  スティンガー", "}"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_energy_lance_2',
      name: 'タキオンランス',
      tier: 4,
      cost: 24000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["ガンマ線レーザー", "粒子ランス"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_plasma_3',
      name: 'プラズマキャノン',
      tier: 4,
      cost: 16000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["プラズマ加速砲"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_arc_emitter_1',
      name: 'アーク放射器',
      tier: 4,
      cost: 20000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 40,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["位相ディスラプター", "OR = {", "  戦艦", "  スティンガー", "}"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_arc_emitter_2',
      name: '収束アーク放射器',
      tier: 4,
      cost: 24000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["アーク放射器"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_disruptors_3',
      name: '位相ディスラプター',
      tier: 4,
      cost: 16000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["イオンディスラプター"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_energy_torpedoes_2',
      name: '中性子投射機',
      tier: 4,
      cost: 20000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 40,
      weight_modifier: {"modifier": {"factor": 1.5, "has_ethic": "ethic_fanatic_militarist"}},
      prerequisites: ["陽子投射機"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_pd_tracking_3',
      name: '予測アルゴリズム',
      tier: 4,
      cost: 16000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 45,
      weight_modifier: [],
      prerequisites: ["連結型支援システム"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_galactic_markets',
      name: '銀河市場',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '統治学',
      weight: 45,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 0, "num_communications": "< 2"}},
      prerequisites: ["植民地集権化", "恒星間経済"],
      potential: {"is_gestalt": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_nutrient_replication',
      name: '滋養複製',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '生物学',
      weight: 35,
      weight_modifier: {"modifier": {"factor": 2, "country_uses_bio_ships": "yes"}},
      prerequisites: ["ナノ活性化作物"],
      potential: {"is_machine_empire": "no", "is_wilderness_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_colonization_5',
      name: '環境統合学',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '新天地',
      weight: 35,
      weight_modifier: [],
      prerequisites: ["異星土壌の肥沃化"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_climate_restoration',
      name: '気候修復',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '新天地',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_expansion_adopt"}},
      prerequisites: ["惑星整形"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_gene_seed_purification',
      name: '遺伝子シード精製',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '生物学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 2, "AND": {"is_individual_machine": "yes", "any_owned_species": {"is_organic_species": "yes"}}}},
      prerequisites: ["遺伝子改変"],
      potential: {"NOR": {"is_machine_empire": "yes", "is_natural_design_empire": "yes", "is_individual_machine": "yes", "is_wilderness_empire": "yes"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_morphogenetic_field_mastery',
      name: '発生学への習熟',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '生物学',
      weight: 45,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 1.25, "OR": {"has_trait_in_council": {"TRAIT": "leader_trait_spark_of_genius_2"}}}},
      prerequisites: ["エピジェネティック変化の誘発"],
      potential: {"NOR": {"is_machine_empire": "yes", "is_natural_design_empire": "yes", "is_individual_machine": "yes", "is_wilderness_empire": "yes"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_capacity_boosters',
      name: '能力増強',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '生物学',
      weight: 35,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 0.5, "is_individual_machine": "yes", "any_owned_species": {"is_organic_species": "no"}}},
      prerequisites: ["血統選別"],
      potential: {"is_machine_empire": "no", "is_natural_design_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_doctrine_fleet_size_4',
      name: '流動的艦隊型ドクトリン',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '軍事学',
      weight: 45,
      weight_modifier: {"factor": 3, "modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: ["星間戦争ドクトリン"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_doctrine_navy_size_4',
      name: '艦隊通信ドクトリン',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '軍事学',
      weight: 35,
      weight_modifier: {"factor": 3, "modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: ["星間兵站ドクトリン"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_precognition_interface',
      name: '予知型インターフェース',
      tier: 4,
      cost: 20000,
      area:'社会学',
      category: '超能力',
      weight: 40,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 2, "OR": {"has_trait_in_council": {"TRAIT": "leader_trait_maniacal_3"}}}},
      prerequisites: ["テレパシー"],
      potential: {"NOT": {"has_ethic": "ethic_gestalt_consciousness"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_thought_enforcement',
      name: '思想強制',
      tier: 4,
      cost: 20000,
      area:'社会学',
      category: '超能力',
      weight: 40,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 2, "OR": {"has_trait_in_council": {"TRAIT": "leader_trait_maniacal_3"}}}},
      prerequisites: ["テレパシー"],
      potential: {"NOT": {"has_ethic": "ethic_gestalt_consciousness"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_manifest_destiny',
      name: '明白なる天命',
      tier: 4,
      cost: 20000,
      area:'社会学',
      category: '新天地',
      weight: 40,
      weight_modifier: {"modifier": {"factor": 0, "num_communications": "< 1"}},
      prerequisites: ["星海への進出"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_galactic_campaigns',
      name: '銀河戦役',
      tier: 4,
      cost: 16000,
      area:'社会学',
      category: '軍事学',
      weight: 45,
      weight_modifier: {"modifier": {"factor": 0, "num_communications": "< 1"}},
      prerequisites: ["星間戦役"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_planetary_infrastructure_2',
      name: 'デュラスチール・インフラ',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '新天地',
      weight: 35,
      weight_modifier: {"factor": 4},
      prerequisites: ["銀河規模の行政機構", "デュラスチール材", "セラモ金属インフラ"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_tracking_implants',
      name: '追跡インプラント',
      tier: 4,
      cost: 20000,
      area:'社会学',
      category: '統治学',
      weight: 40,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["皮下刺激", "銀河官僚制度"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_transcendent_faith',
      name: 'メタ認知的信仰',
      tier: 4,
      cost: 20000,
      area:'社会学',
      category: '統治学',
      weight: 40,
      weight_modifier: [],
      prerequisites: ["聖別された領域", "銀河規模の行政機構"],
      potential: {"OR": {"has_ethic": "ethic_fanatic_spiritualist", "AND": {"is_gestalt": "no", "has_make_spiritualist_perk": "yes"}}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_ascension_theory',
      name: 'アセンション理論',
      tier: 4,
      cost: 20000,
      area:'社会学',
      category: '統治学',
      weight: 40,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 0, "num_ascension_perk_slots": "< 6"}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_capital_productivity_3',
      name: '生産性の最大化',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '統治学',
      weight: 70,
      weight_modifier: {"factor": 1, "modifier": {"factor": 0.25, "NOT": {"has_tradition": "tr_prosperity_finish"}}},
      prerequisites: ["銀河規模の行政機構", "規模の効率性"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_node_reformatting_3',
      name: '高度なノード再フォーマット',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '統治学',
      weight: 35,
      weight_modifier: {"modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["基本的なノード再フォーマット"],
      potential: {"is_machine_empire": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_node_culling_3',
      name: '高度なノード淘汰',
      tier: 4,
      cost: 24000,
      area:'社会学',
      category: '統治学',
      weight: 35,
      weight_modifier: {"modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["基本的なノード淘汰"],
      potential: {"is_hive_empire": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_robomodding_points_2',
      name: '回路代用',
      tier: 4,
      cost: 16000,
      area:'工学',
      category: '産業学',
      weight: 45,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 0.5, "NOR": {"has_trait_in_council": {"TRAIT": "leader_trait_expertise_industry"}}}},
      prerequisites: ["モデル間標準化", "人工監理官"],
      potential: {"NOT": {"has_ethic": "ethic_gestalt_consciousness", "is_individual_machine": "yes"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_nanite_assemblers',
      name: 'ナノマシン組立機',
      tier: 4,
      cost: 16000,
      area:'工学',
      category: '産業学',
      weight: 45,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["バイナリモチベーター", "銀河規模の行政機構"],
      potential: {"OR": {"is_machine_empire": "yes", "is_individual_machine": "yes"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mega_assembly',
      name: 'メガアセンブリーシステム',
      tier: 4,
      cost: 16000,
      area:'工学',
      category: '産業学',
      weight: 45,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["バイナリモチベーター", "銀河規模の行政機構"],
      potential: {"OR": {"is_machine_empire": "yes", "is_individual_machine": "yes"}}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_biomechanics',
      name: 'バイオメカニクス',
      tier: 4,
      cost: 20000,
      area:'社会学',
      category: '生物学',
      weight: 40,
      weight_modifier: {"modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["適応型戦闘アルゴリズム"],
      potential: {"OR": {"is_machine_empire": "yes", "is_individual_machine": "yes"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_archaeo_pk_devolving_beam',
      name: '退化砲',
      tier: 5,
      cost: 48000,
      area:'社会学',
      category: '考古学技術',
      weight: 20,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 0.85, "has_technology": "tech_archaeo_refinery", "NOT": {"has_ascension_perk": "ap_archaeoengineers"}}},
      prerequisites: [],
      potential: {"host_has_dlc": "Apocalypse", "has_ancrel": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_colossus',
      name: 'コロッサス',
      tier: 5,
      cost: 48000,
      area:'工学',
      category: '宇宙工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: ["タイタン"],
      potential: {"host_has_dlc": "Apocalypse"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_pk_cracker',
      name: '惑星破砕砲',
      tier: 5,
      cost: 48000,
      area:'工学',
      category: '宇宙工学',
      weight: 20,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 0.2, "NOR": {"has_trait_in_council": {"TRAIT": "leader_trait_expertise_voidcraft"}}}},
      prerequisites: ["コロッサス"],
      potential: {"host_has_dlc": "Apocalypse", "has_country_flag": "colossus_project", "is_pacifist": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_pk_shielder',
      name: '惑星調停機',
      tier: 5,
      cost: 48000,
      area:'物理学',
      category: '力場操作',
      weight: 20,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 2, "is_pacifist": "yes"}},
      prerequisites: ["コロッサス"],
      potential: {"host_has_dlc": "Apocalypse", "has_country_flag": "colossus_project"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_pk_neutron',
      name: '中性子掃射砲',
      tier: 5,
      cost: 48000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 20,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 2, "is_materialist": "yes"}},
      prerequisites: ["コロッサス"],
      potential: {"host_has_dlc": "Apocalypse", "has_country_flag": "colossus_project", "OR": {"is_spiritualist": "no", "NOR": {"AND": {"host_has_dlc": "Utopia", "OR": {"has_ascension_perk": "ap_mind_over_matter", "has_origin": "origin_shroudwalker_apprentice"}}}}, "is_pacifist": "no"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_pk_godray',
      name: '神聖執行器',
      tier: 5,
      cost: 48000,
      area:'社会学',
      category: '超能力',
      weight: 20,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 0.2, "NOR": {"has_trait_in_council": {"TRAIT": "leader_trait_expertise_psionics"}}}},
      prerequisites: ["コロッサス"],
      potential: {"host_has_dlc": "Apocalypse", "has_country_flag": "colossus_project", "is_spiritualist": "yes", "OR": {"AND": {"host_has_dlc": "Utopia", "OR": {"has_ascension_perk": "ap_mind_over_matter", "has_origin": "origin_shroudwalker_apprentice"}}}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_pk_nanobots',
      name: 'ナノマシン拡散機',
      tier: 5,
      cost: 48000,
      area:'工学',
      category: '宇宙工学',
      weight: 20,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 0.2, "NOR": {"has_trait_in_council": {"TRAIT": "leader_trait_expertise_voidcraft"}}}},
      prerequisites: ["コロッサス"],
      potential: {"host_has_dlc": "Apocalypse", "has_country_flag": "colossus_project", "has_valid_civic": "civic_machine_assimilator"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_btc_1',
      name: '恒星破砕砲',
      tier: 5,
      cost: 48000,
      area:'工学',
      category: '宇宙工学',
      weight: 20,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {"has_nemesis": "yes", "has_ascension_perk": "ap_become_the_crisis", "has_country_flag": "can_build_star_eaters"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_weaver_bio_healing_5',
      name: '知的適応型胞子投射機',
      tier: 5,
      cost: 32000,
      area:'社会学',
      category: '生物学',
      weight: 30,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_exotic_gases", "has_country_flag": "has_market_access"}}},
      prerequisites: ["適応型胞子投射機"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_healing_6',
      name: '再誕胞子',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '生物学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"is_country_type": "awakened_fallen_empire"}}},
      prerequisites: ["知的適応型胞子投射機"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_evasion_5',
      name: '回避ダーツ',
      tier: 5,
      cost: 32000,
      area:'社会学',
      category: '生物学',
      weight: 30,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_rare_crystals", "has_country_flag": "has_market_access"}}},
      prerequisites: ["エレクトロ・スプレー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_evasion_6',
      name: '対応型触手',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '生物学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"is_country_type": "awakened_fallen_empire"}}},
      prerequisites: ["回避ダーツ"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_fire_rate_5',
      name: 'ウィーヴァー・スウィフトシューター',
      tier: 5,
      cost: 32000,
      area:'社会学',
      category: '生物学',
      weight: 30,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_volatile_motes", "has_country_flag": "has_market_access"}}},
      prerequisites: ["ウィーヴァー・オーラキャスター"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_fire_rate_6',
      name: 'ウィーヴァー・ウェーブメイカー',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '生物学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"is_country_type": "awakened_fallen_empire"}}},
      prerequisites: ["ウィーヴァー・スウィフトシューター"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_confuser_5',
      name: 'スネアダーツ',
      tier: 5,
      cost: 32000,
      area:'社会学',
      category: '生物学',
      weight: 30,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_volatile_motes", "has_country_flag": "has_market_access"}}},
      prerequisites: ["ルイン・バーブ"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_confuser_6',
      name: 'ハヴォックストーム',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '生物学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"is_country_type": "awakened_fallen_empire"}}},
      prerequisites: ["スネアダーツ"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_anti_evasion_5',
      name: '獲物追跡砲',
      tier: 5,
      cost: 32000,
      area:'社会学',
      category: '生物学',
      weight: 30,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_rare_crystals", "has_country_flag": "has_market_access"}}},
      prerequisites: ["ピニオン加速砲"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_anti_evasion_6',
      name: '精密ランサー',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '生物学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"is_country_type": "awakened_fallen_empire"}}},
      prerequisites: ["獲物追跡砲"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_anti_fire_rate_5',
      name: 'フィーンド・ディスエーブラー',
      tier: 5,
      cost: 32000,
      area:'社会学',
      category: '生物学',
      weight: 30,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"has_technology": "tech_volatile_motes", "has_country_flag": "has_market_access"}}},
      prerequisites: ["分解ビーム"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_weaver_bio_anti_fire_rate_6',
      name: 'トラッカー・ストッパー',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '生物学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"is_country_type": "awakened_fallen_empire"}}},
      prerequisites: ["フィーンド・ディスエーブラー"],
      potential: {"country_uses_bio_ships": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_nanite_repair_system',
      name: 'ナノマシン修復システム',
      tier: 5,
      cost: 40000,
      area:'工学',
      category: '宇宙工学',
      weight: 25,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_nanite_autocannon',
      name: 'ナノマシン・オートキャノン',
      tier: 5,
      cost: 48000,
      area:'工学',
      category: '推進システム工学',
      weight: 20,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_nanite_flak_batteries',
      name: 'ナノマシン対空砲',
      tier: 5,
      cost: 48000,
      area:'工学',
      category: '推進システム工学',
      weight: 20,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_titans',
      name: 'タイタン',
      tier: 5,
      cost: 32000,
      area:'工学',
      category: '宇宙工学',
      weight: 30,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["OR = {", "  戦艦", "  発展型スティンガーの開発", "}"],
      potential: {"host_has_dlc": "Apocalypse"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_juggernaut',
      name: 'ジャガーノート',
      tier: 5,
      cost: 48000,
      area:'工学',
      category: '宇宙工学',
      weight: 20,
      weight_modifier: {"factor": 0.25, "modifier": {"factor": 1.25, "has_technology": "tech_titans"}},
      prerequisites: ["シタデルの建設", "OR = {", "  戦艦", "  発展型ハーヴィンジャーの開発", "}"],
      potential: {"host_has_dlc": "Federations"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_battleship_hull_2',
      name: '発展型戦艦船体',
      tier: 5,
      cost: 32000,
      area:'工学',
      category: '宇宙工学',
      weight: 30,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["改良型戦艦船体"],
      potential: {"country_uses_bio_ships": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_titan_hull_1',
      name: '改良型タイタン船体',
      tier: 5,
      cost: 40000,
      area:'工学',
      category: '宇宙工学',
      weight: 25,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["タイタン"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_titan_hull_2',
      name: '発展型タイタン船体',
      tier: 5,
      cost: 48000,
      area:'工学',
      category: '宇宙工学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 1.25, "has_tradition": "tr_supremacy_adopt"}},
      prerequisites: ["改良型タイタン船体"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_armor_hardeners_2',
      name: '適応型装甲強化',
      tier: 5,
      cost: 48000,
      area:'工学',
      category: '材料工学',
      weight: 20,
      weight_modifier: [],
      prerequisites: ["装甲強化", "生体金属"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_leviathan_techgenesis',
      name: 'リヴァイアサン技術創世記',
      tier: 5,
      cost: 32000,
      area:'工学',
      category: '産業学',
      weight: 30,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_repeatable_improved_tile_mineral_output',
      name: '抽出パターン',
      tier: 5,
      cost: 50000,
      area:'工学',
      category: '産業学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["発展型鉱物精製"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_repeatable_improved_military_station_damage',
      name: '同期発砲パターン',
      tier: 5,
      cost: 50000,
      area:'工学',
      category: '宇宙工学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["構造的完全性の改善"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_repeatable_improved_military_station_health',
      name: '強化されたコア層',
      tier: 5,
      cost: 50000,
      area:'工学',
      category: '宇宙工学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["構造的完全性の改善"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_repeatable_improved_armor_output',
      name: '高密度素材',
      tier: 5,
      cost: 50000,
      area:'工学',
      category: '材料工学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["プラスチール材"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_repeatable_weapon_type_explosive_damage',
      name: '熱量コントロール',
      tier: 5,
      cost: 50000,
      area:'工学',
      category: '推進システム工学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["反物質ミサイル"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_repeatable_weapon_type_explosive_fire_rate',
      name: '点火器の小型化',
      tier: 5,
      cost: 50000,
      area:'工学',
      category: '推進システム工学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["反物質ミサイル"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_repeatable_weapon_type_kinetic_damage',
      name: '高密度砲弾',
      tier: 5,
      cost: 50000,
      area:'工学',
      category: '推進システム工学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["レールガン"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_repeatable_weapon_type_kinetic_fire_rate',
      name: '装填の効率化',
      tier: 5,
      cost: 50000,
      area:'工学',
      category: '推進システム工学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["レールガン"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_repeatable_reduced_building_time',
      name: '組み立てアルゴリズム',
      tier: 5,
      cost: 50000,
      area:'工学',
      category: '産業学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["建設用テンプレート"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_dark_matter_deflector',
      name: 'ダークマターデフレクター',
      tier: 5,
      cost: 70000,
      area:'物理学',
      category: '力場操作',
      weight: 1,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"is_country_type": "awakened_fallen_empire"}}},
      prerequisites: ["ハイパーシールド"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_dark_matter_power_core',
      name: 'ダークマター発電',
      tier: 5,
      cost: 70000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 1,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"is_country_type": "awakened_fallen_empire"}}},
      prerequisites: ["ゼロポイント発電"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_dark_matter_propulsion',
      name: 'ダークマター推進',
      tier: 5,
      cost: 70000,
      area:'工学',
      category: '推進システム工学',
      weight: 1,
      weight_modifier: {"modifier": {"factor": 0, "NOR": {"is_country_type": "awakened_fallen_empire"}}},
      prerequisites: ["インパルススラスター"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_fe_affluence_1',
      name: '富の中心地',
      tier: 5,
      cost: 70000,
      area:'工学',
      category: '産業学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_fe_affluence_2',
      name: '富裕センター',
      tier: 5,
      cost: 70000,
      area:'工学',
      category: '産業学',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["富の中心地"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_fe_nourishment_1',
      name: '栄養物施設',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '生物学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "country_uses_bio_ships": "yes"}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_nourishment_2',
      name: '栄養物センター',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '生物学',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["栄養物施設"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_fabricator_1',
      name: '次元複製器',
      tier: 5,
      cost: 70000,
      area:'工学',
      category: '材料工学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_fe_fabricator_2',
      name: '次元ファブリケーター',
      tier: 5,
      cost: 70000,
      area:'工学',
      category: '材料工学',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["次元複製器"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_fe_singularity_1',
      name: '第3級時空特異点',
      tier: 5,
      cost: 70000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_fe_singularity_2',
      name: '第4級時空特異点',
      tier: 5,
      cost: 70000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["第3級時空特異点"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_fe_forge_1',
      name: '超級鋳造所',
      tier: 5,
      cost: 70000,
      area:'工学',
      category: '産業学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_fe_forge_2',
      name: '自動溶鉱炉',
      tier: 5,
      cost: 70000,
      area:'工学',
      category: '産業学',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["超級鋳造所"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_fe_dome_1',
      name: '上空ドローン',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '統治学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_dome_2',
      name: '最高天のドーム',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '統治学',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["上空ドローン"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_fortress_1',
      name: 'アスピスの砦',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '軍事学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_fortress_2',
      name: 'イージス施設',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '軍事学',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["アスピスの砦"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_administration_1',
      name: 'フラクタル行政プロセス',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '統治学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_administration_2',
      name: '量子行政プロセス',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '統治学',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["フラクタル行政プロセス"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_assembly_1',
      name: 'ロボット製造結合体',
      tier: 5,
      cost: 70000,
      area:'工学',
      category: '産業学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_fe_assembly_2',
      name: 'ロボット量子生産拠点',
      tier: 5,
      cost: 70000,
      area:'工学',
      category: '産業学',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["ロボット製造結合体"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_fe_clinic_1',
      name: '分子再活性化機関',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '生物学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_clinic_2',
      name: '生体再生機関',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '生物学',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["分子再活性化機関"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_security_1',
      name: '司法施設',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '統治学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_security_2',
      name: '司法のジグラット',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '統治学',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["司法施設"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_market_1',
      name: '銀河商取引拠点',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '統治学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_market_2',
      name: '星間商取引結合体',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '統治学',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["銀河商取引拠点"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_silo_1',
      name: '縮小宇宙補給所',
      tier: 5,
      cost: 70000,
      area:'物理学',
      category: '力場操作',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_fe_silo_2',
      name: '異次元補給所',
      tier: 5,
      cost: 70000,
      area:'物理学',
      category: '力場操作',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["縮小宇宙補給所"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_fe_entertainment_1',
      name: '仮想天福広場',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '統治学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_entertainment_2',
      name: '万物天福結合体',
      tier: 5,
      cost: 70000,
      area:'社会学',
      category: '統治学',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["仮想天福広場"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_fe_lab_1',
      name: '量子革新結合体',
      tier: 5,
      cost: 70000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_fe_lab_2',
      name: '超越的革新部門',
      tier: 5,
      cost: 70000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["量子革新結合体"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_fe_mine_1',
      name: '量子掘削所',
      tier: 5,
      cost: 70000,
      area:'工学',
      category: '材料工学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": "> 5000"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_fe_mine_2',
      name: '量子掘削拠点',
      tier: 5,
      cost: 70000,
      area:'工学',
      category: '材料工学',
      weight: 20,
      weight_modifier: {},
      prerequisites: ["量子掘削所"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_cloaking_dark_matter',
      name: 'ダークマター・クロークフィールド',
      tier: 5,
      cost: 70000,
      area:'物理学',
      category: '力場操作',
      weight: 25,
      weight_modifier: {"modifier": {"factor": 5, "has_tradition": "tr_subterfuge_adopt"}},
      prerequisites: ["ダークマターデフレクター", "最先端クロークフィールド"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_cloaking_psi',
      name: 'PSI位相フィールド・ジェネレーター',
      tier: 5,
      cost: 48000,
      area:'社会学',
      category: '超能力',
      weight: 25,
      weight_modifier: {"modifier": {"factor": 5, "has_tradition": "tr_subterfuge_adopt"}},
      prerequisites: ["PSIジャンプドライブ"],
      potential: {"NOT": {"has_ethic": "ethic_gestalt_consciousness"}, "has_first_contact_dlc": "yes"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_dark_matter_detection',
      name: 'ダークマター探知',
      tier: 5,
      cost: 48000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 5, "has_tradition": "tr_subterfuge_adopt"}},
      prerequisites: ["探知アレイ", "ダークマター吸収"],
      potential: {"has_first_contact_dlc": "yes"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_dragon_armor',
      name: '人工竜鱗',
      tier: 5,
      cost: 60000,
      area:'工学',
      category: '材料工学',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_enigmatic_encoder',
      name: '不可解なエンコーダー',
      tier: 5,
      cost: 60000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_enigmatic_decoder',
      name: '不可解なデコーダー',
      tier: 5,
      cost: 60000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_synth_queen_knowledge',
      name: 'セタナの考え',
      tier: 5,
      cost: 32000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 30,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_country_flag": "synth_queen_knowledge"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_cosmogenesis_crisis_1',
      name: '指数関数的学習理論',
      tier: 5,
      cost: 10000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_ascension_perk": "ap_cosmogenesis"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_cosmogenesis_crisis_2',
      name: '重力の筆',
      tier: 5,
      cost: 50000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_ascension_perk": "ap_cosmogenesis"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_cosmogenesis_crisis_3',
      name: '理論上の無限命題',
      tier: 5,
      cost: 100000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_ascension_perk": "ap_cosmogenesis"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_cosmogenesis_crisis_4',
      name: '現実の法則',
      tier: 5,
      cost: 200000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_ascension_perk": "ap_cosmogenesis"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_cosmogenesis_crisis_5',
      name: '新生の宇宙',
      tier: 5,
      cost: 300000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_ascension_perk": "ap_cosmogenesis"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_cosmogenesis_escort',
      name: 'リドル護衛艦',
      tier: 5,
      cost: 70000,
      area:'工学',
      category: '宇宙工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_cosmogenesis_battlecruiser',
      name: 'エニグマ巡洋戦艦',
      tier: 5,
      cost: 70000,
      area:'工学',
      category: '宇宙工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_cosmogenesis_FE_titan',
      name: 'パラドックスタイタン',
      tier: 5,
      cost: 70000,
      area:'工学',
      category: '宇宙工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_cosmogenesis_world',
      name: 'スケーラブルなレザボアコンピューティング',
      tier: 5,
      cost: 32000,
      area:'工学',
      category: '材料工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_ascension_perk": "ap_cosmogenesis"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_lathe_resonator',
      name: 'シナプスレゾネーター',
      tier: 5,
      cost: 30000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 30,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": ">= 10000"}}},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_ascension_perk": "ap_cosmogenesis", "has_technology": "tech_cosmogenesis_world"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_lathe_overclocker',
      name: 'シナプス・オーバークロッカー',
      tier: 5,
      cost: 30000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 30,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": ">= 10000"}}},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_ascension_perk": "ap_cosmogenesis", "has_technology": "tech_cosmogenesis_world"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_lathe_preserver',
      name: 'シナプス・プリザーバー',
      tier: 5,
      cost: 30000,
      area:'社会学',
      category: '生物学',
      weight: 30,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": ">= 10000"}}},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_ascension_perk": "ap_cosmogenesis", "has_technology": "tech_cosmogenesis_world"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_lathe_life_support',
      name: 'シナプス・サステイナー',
      tier: 5,
      cost: 30000,
      area:'社会学',
      category: '生物学',
      weight: 30,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": ">= 10000"}}},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_ascension_perk": "ap_cosmogenesis", "has_technology": "tech_cosmogenesis_world"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_lathe_cogitator',
      name: 'シナプス・コジテーター',
      tier: 5,
      cost: 30000,
      area:'社会学',
      category: '軍事学',
      weight: 30,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": ">= 10000"}}},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_ascension_perk": "ap_cosmogenesis", "has_technology": "tech_cosmogenesis_world"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_lathe_validator',
      name: 'シナプス・バリデーター',
      tier: 5,
      cost: 30000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 30,
      weight_modifier: {"modifier": {"factor": 2, "any_owned_planet": {"is_planet_class": "pc_cosmogenesis_world", "pop_amount": ">= 10000"}}},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes", "has_ascension_perk": "ap_cosmogenesis", "has_technology": "tech_cosmogenesis_world"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_nanite_repair_system_synth_queen',
      name: 'セタナのナノマシン',
      tier: 5,
      cost: 48000,
      area:'工学',
      category: '材料工学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {"has_machine_age_dlc": "yes"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mega_engineering',
      name: 'メガエンジニアリング',
      tier: 5,
      cost: 48000,
      area:'工学',
      category: '宇宙工学',
      weight: 20,
      weight_modifier: {"factor": 0.25, "modifier": {"factor": 20, "OR": {"has_any_megastructure_in_empire": "yes", "has_origin": "origin_shattered_ring"}}},
      prerequisites: ["シタデルの建設", "ゼロポイント発電", "OR = {", "  戦艦", "  スティンガー", "}"],
      potential: {}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_science_nexus',
      name: 'サイエンスネクサス',
      tier: 5,
      cost: 48000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 20,
      weight_modifier: {"factor": 0.25, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["メガエンジニアリング"],
      potential: {"host_has_dlc": "Utopia"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_sentry_array',
      name: 'セントリーアレイ',
      tier: 5,
      cost: 48000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 20,
      weight_modifier: {"factor": 0.25, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["メガエンジニアリング"],
      potential: {"host_has_dlc": "Utopia"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_strategic_coordination',
      name: '戦略調整センター',
      tier: 5,
      cost: 48000,
      area:'社会学',
      category: '軍事学',
      weight: 20,
      weight_modifier: {"factor": 0.25, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["メガエンジニアリング"],
      potential: {"host_has_dlc": "Megacorp"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_interstellar_assembly',
      name: '星間会議場',
      tier: 5,
      cost: 48000,
      area:'社会学',
      category: '統治学',
      weight: 20,
      weight_modifier: {"factor": 0.25, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["メガエンジニアリング"],
      potential: {"host_has_dlc": "Megacorp"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_mega_art',
      name: '巨大芸術体験施設',
      tier: 5,
      cost: 48000,
      area:'社会学',
      category: '統治学',
      weight: 20,
      weight_modifier: {"factor": 0.25, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["メガエンジニアリング"],
      potential: {"host_has_dlc": "Megacorp"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_gateway_construction',
      name: 'ゲートウェイ建造',
      tier: 5,
      cost: 48000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 20,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 4, "owns_any_bypass": "gateway"}},
      prerequisites: ["ゲートウェイ起動", "メガエンジニアリング"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_dyson_sphere',
      name: 'ダイソンスフィア',
      tier: 5,
      cost: 48000,
      area:'物理学',
      category: '力場操作',
      weight: 20,
      weight_modifier: {"factor": 0},
      prerequisites: ["メガエンジニアリング"],
      potential: {"host_has_dlc": "Utopia"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_matter_decompressor',
      name: '物質展開機',
      tier: 5,
      cost: 48000,
      area:'物理学',
      category: '力場操作',
      weight: 20,
      weight_modifier: {"factor": 0},
      prerequisites: ["メガエンジニアリング"],
      potential: {"host_has_dlc": "Megacorp"}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_ring_world',
      name: 'リング区域',
      tier: 5,
      cost: 48000,
      area:'工学',
      category: '宇宙工学',
      weight: 20,
      weight_modifier: {"factor": 0},
      prerequisites: ["メガエンジニアリング"],
      potential: {"host_has_dlc": "Utopia", "is_wilderness_empire": "no"}
    },
    classes: 'engineering'
},
{
    data: {
      id: 'tech_mega_shipyard',
      name: '巨大造船所',
      tier: 5,
      cost: 48000,
      area:'社会学',
      category: '軍事学',
      weight: 20,
      weight_modifier: {"factor": 0.25, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: ["メガエンジニアリング"],
      potential: {"host_has_dlc": "Federations"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_shield_hardeners_2',
      name: '発展型シールド強化',
      tier: 5,
      cost: 48000,
      area:'物理学',
      category: '力場操作',
      weight: 20,
      weight_modifier: [],
      prerequisites: ["シールド強化", "ズィロ蒸留物"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_jump_drive_1',
      name: 'ジャンプドライブ',
      tier: 5,
      cost: 32000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 30,
      weight_modifier: {"factor": 0.1, "modifier": {"factor": 1.25, "has_tradition": "tr_discovery_adopt"}},
      prerequisites: ["ゼロポイント発電"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_repeatable_improved_tile_energy_output',
      name: '応用超電導',
      tier: 5,
      cost: 50000,
      area:'物理学',
      category: '力場操作',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["量子エネルギー状態"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_repeatable_improved_shield_output',
      name: 'シールドハーモニクス',
      tier: 5,
      cost: 50000,
      area:'物理学',
      category: '力場操作',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["発展型シールド"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_repeatable_weapon_type_energy_damage',
      name: '合焦干渉計',
      tier: 5,
      cost: 50000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["X線レーザー"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_repeatable_weapon_type_energy_fire_rate',
      name: '瞬間冷却剤',
      tier: 5,
      cost: 50000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["青色レーザー"],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_repeatable_reduced_building_cost',
      name: '重力解析',
      tier: 5,
      cost: 50000,
      area:'物理学',
      category: 'コンピュータ',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_extradimensional_weapon_1',
      name: '超次元兵器',
      tier: 5,
      cost: 48000,
      area:'物理学',
      category: '素粒子物理学',
      weight: 0,
      weight_modifier: {"factor": 10, "modifier": {"factor": "@auth_cyber_dictatorial_collectivist_tech", "is_dictatorial_authority": "yes", "has_country_flag": "cyber_collectivist", "ruler": {"leader_class": "scientist"}}},
      prerequisites: [],
      potential: {}
    },
    classes: 'physics'
},
{
    data: {
      id: 'tech_doctrine_fleet_size_5',
      name: '無敵艦隊戦闘ドクトリン',
      tier: 5,
      cost: 48000,
      area:'社会学',
      category: '軍事学',
      weight: 20,
      weight_modifier: {"factor": 3, "modifier": {"factor": 2, "is_militarist": "yes"}},
      prerequisites: ["流動的艦隊型ドクトリン"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_psi_jump_drive_1',
      name: 'PSIジャンプドライブ',
      tier: 5,
      cost: 40000,
      area:'社会学',
      category: '超能力',
      weight: 25,
      weight_modifier: {"factor": 0.1, "modifier": {"factor": "@ap_grasp_the_void_travel_tech", "has_country_flag": "jaunted_traveler_secret_revealed"}},
      prerequisites: ["予知型インターフェース"],
      potential: {"NOT": {"has_ethic": "ethic_gestalt_consciousness"}}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_existential_campaigns',
      name: '存亡を賭けた戦役',
      tier: 5,
      cost: 48000,
      area:'社会学',
      category: '軍事学',
      weight: 20,
      weight_modifier: {"modifier": {"factor": 0, "has_ethic": "ethic_fanatic_pacifist"}},
      prerequisites: ["銀河戦役"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_psionic_shield',
      name: 'サイオニック・シールド',
      tier: 5,
      cost: 48000,
      area:'社会学',
      category: '超能力',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: ["超能力理論"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_covenant_composer',
      name: '作曲家の印',
      tier: 5,
      cost: 60000,
      area:'社会学',
      category: '超能力',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: ["超能力理論"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_covenant_eater',
      name: '喰らうものの印',
      tier: 5,
      cost: 60000,
      area:'社会学',
      category: '超能力',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: ["超能力理論"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_covenant_instrument',
      name: '道具の印',
      tier: 5,
      cost: 60000,
      area:'社会学',
      category: '超能力',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: ["超能力理論"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_covenant_whisperers',
      name: '囁き手の印',
      tier: 5,
      cost: 60000,
      area:'社会学',
      category: '超能力',
      weight: 0,
      weight_modifier: {"factor": 0},
      prerequisites: ["超能力理論"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_repeatable_improved_tile_food_output',
      name: '遺伝子組み換え作物',
      tier: 5,
      cost: 50000,
      area:'社会学',
      category: '生物学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["遺伝子改良作物"],
      potential: {"is_wilderness_empire": "no"}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_repeatable_improved_core_system_cap',
      name: '統治の効率化',
      tier: 5,
      cost: 50000,
      area:'社会学',
      category: '新天地',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["銀河官僚制度"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_repeatable_improved_army_damage',
      name: '攻撃性調整',
      tier: 5,
      cost: 50000,
      area:'社会学',
      category: '軍事学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["戦闘訓練"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_repeatable_improved_army_health',
      name: '痛覚鈍化',
      tier: 5,
      cost: 50000,
      area:'社会学',
      category: '軍事学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["戦闘訓練"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_repeatable_improved_leader_life_span',
      name: '細胞再活性化',
      tier: 5,
      cost: 50000,
      area:'社会学',
      category: '生物学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["生命活性剤"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_repeatable_naval_cap',
      name: '艦隊管理手順',
      tier: 5,
      cost: 50000,
      area:'社会学',
      category: '軍事学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["艦隊通信ドクトリン"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_repeatable_command_limit',
      name: '提督支援要員',
      tier: 5,
      cost: 50000,
      area:'社会学',
      category: '軍事学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["無敵艦隊戦闘ドクトリン"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_repeatable_improved_starbase_capacity',
      name: '星間拡張',
      tier: 5,
      cost: 50000,
      area:'社会学',
      category: '新天地',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["星海への進出"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_repeatable_weapon_type_strike_craft_fire_damage',
      name: 'シナプス迎撃機',
      tier: 5,
      cost: 50000,
      area:'社会学',
      category: '軍事学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["発展型軍用機"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_repeatable_weapon_type_strike_craft_fire_rate',
      name: '反復パイロット訓練',
      tier: 5,
      cost: 50000,
      area:'社会学',
      category: '軍事学',
      weight: 25,
      weight_modifier: {"factor": "@repatableTechFactor"},
      prerequisites: ["発展型軍用機"],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_swarm_strike_craft_1',
      name: 'スウォーム繁殖プール',
      tier: 5,
      cost: 48000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_scourge_missile_1',
      name: 'スカージミサイル',
      tier: 5,
      cost: 48000,
      area:'社会学',
      category: '生物学',
      weight: 0,
      weight_modifier: {},
      prerequisites: [],
      potential: {}
    },
    classes: 'society'
},
{
    data: {
      id: 'tech_mine_living_metal',
      name: '生体金属',
      tier: 5,
      cost: 32000,
      area:'工学',
      category: '材料工学',
      weight: 30,
      weight_modifier: {"factor": 0.5, "modifier": {"factor": 0, "NOT": {"any_planet_within_border": {"has_deposit": "d_living_metal_deposit"}}}},
      prerequisites: ["宇宙建設"],
      potential: {}
    },
    classes: 'engineering'
},
{ data: { id: 'tech_starbase_2_to_tech_solar_panel_network', source: 'tech_starbase_2', target: 'tech_solar_panel_network' } },
{ data: { id: 'tech_starbase_2_to_tech_corvettes', source: 'tech_starbase_2', target: 'tech_corvettes' } },
{ data: { id: 'tech_space_construction_to_tech_starbase_1', source: 'tech_space_construction', target: 'tech_starbase_1' } },
{ data: { id: 'tech_starbase_1_to_tech_starbase_2', source: 'tech_starbase_1', target: 'tech_starbase_2' } },
{ data: { id: 'tech_planetary_defenses_to_tech_assault_armies', source: 'tech_planetary_defenses', target: 'tech_assault_armies' } },
{ data: { id: 'tech_starbase_1_to_tech_space_defense_station_1', source: 'tech_starbase_1', target: 'tech_space_defense_station_1' } },
{ data: { id: 'tech_fission_power_to_tech_reactor_boosters_1', source: 'tech_fission_power', target: 'tech_reactor_boosters_1' } },
{ data: { id: 'tech_space_exploration_to_tech_colonization_1', source: 'tech_space_exploration', target: 'tech_colonization_1' } },
{ data: { id: 'tech_maulers_to_tech_mauler_build_speed', source: 'tech_maulers', target: 'tech_mauler_build_speed' } },
{ data: { id: 'tech_maulers_to_tech_mauler_growth_1', source: 'tech_maulers', target: 'tech_mauler_growth_1' } },
{ data: { id: 'tech_mauler_growth_1_to_tech_mauler_growth_2', source: 'tech_mauler_growth_1', target: 'tech_mauler_growth_2' } },
{ data: { id: 'tech_maulers_to_tech_weavers', source: 'tech_maulers', target: 'tech_weavers' } },
{ data: { id: 'tech_weavers_to_tech_weaver_build_speed', source: 'tech_weavers', target: 'tech_weaver_build_speed' } },
{ data: { id: 'tech_weavers_to_tech_weaver_bio_healing_1', source: 'tech_weavers', target: 'tech_weaver_bio_healing_1' } },
{ data: { id: 'tech_weavers_to_tech_weaver_bio_evasion_1', source: 'tech_weavers', target: 'tech_weaver_bio_evasion_1' } },
{ data: { id: 'tech_weavers_to_tech_weaver_bio_fire_rate_1', source: 'tech_weavers', target: 'tech_weaver_bio_fire_rate_1' } },
{ data: { id: 'tech_weavers_to_tech_weaver_bio_confuser_1', source: 'tech_weavers', target: 'tech_weaver_bio_confuser_1' } },
{ data: { id: 'tech_weavers_to_tech_weaver_bio_anti_evasion_1', source: 'tech_weavers', target: 'tech_weaver_bio_anti_evasion_1' } },
{ data: { id: 'tech_weavers_to_tech_weaver_bio_anti_fire_rate_1', source: 'tech_weavers', target: 'tech_weaver_bio_anti_fire_rate_1' } },
{ data: { id: 'tech_industrial_storm_protection_to_tech_storm_prediction_1', source: 'tech_industrial_storm_protection', target: 'tech_storm_prediction_1' } },
{ data: { id: 'tech_storm_prediction_1_to_tech_ship_hull_storm_breaker_1', source: 'tech_storm_prediction_1', target: 'tech_ship_hull_storm_breaker_1' } },
{ data: { id: 'tech_storm_prediction_1_to_tech_ship_storm_weapons_1', source: 'tech_storm_prediction_1', target: 'tech_ship_storm_weapons_1' } },
{ data: { id: 'tech_corvettes_to_tech_corvette_build_speed', source: 'tech_corvettes', target: 'tech_corvette_build_speed' } },
{ data: { id: 'tech_corvettes_to_tech_corvette_hull_1', source: 'tech_corvettes', target: 'tech_corvette_hull_1' } },
{ data: { id: 'tech_starbase_2_to_tech_strike_craft_1', source: 'tech_starbase_2', target: 'tech_strike_craft_1' } },
{ data: { id: 'tech_ship_armor_1_to_tech_ship_armor_2', source: 'tech_ship_armor_1', target: 'tech_ship_armor_2' } },
{ data: { id: 'tech_basic_industry_to_tech_powered_exoskeletons', source: 'tech_basic_industry', target: 'tech_powered_exoskeletons' } },
{ data: { id: 'tech_space_construction_to_tech_space_mining_1', source: 'tech_space_construction', target: 'tech_space_mining_1' } },
{ data: { id: 'tech_space_mining_1_to_tech_space_mining_2', source: 'tech_space_mining_1', target: 'tech_space_mining_2' } },
{ data: { id: 'tech_basic_industry_to_tech_mining_1', source: 'tech_basic_industry', target: 'tech_mining_1' } },
{ data: { id: 'tech_mining_1_to_tech_mineral_purification_1', source: 'tech_mining_1', target: 'tech_mineral_purification_1' } },
{ data: { id: 'tech_basic_industry_to_tech_alloys_1', source: 'tech_basic_industry', target: 'tech_alloys_1' } },
{ data: { id: 'tech_basic_industry_to_tech_luxuries_1', source: 'tech_basic_industry', target: 'tech_luxuries_1' } },
{ data: { id: 'tech_basic_science_lab_1_to_tech_engineering_1', source: 'tech_basic_science_lab_1', target: 'tech_engineering_1' } },
{ data: { id: 'tech_powered_exoskeletons_to_tech_robotic_workers', source: 'tech_powered_exoskeletons', target: 'tech_robotic_workers' } },
{ data: { id: 'tech_thrusters_1_to_tech_afterburners_1', source: 'tech_thrusters_1', target: 'tech_afterburners_1' } },
{ data: { id: 'tech_mass_drivers_1_to_tech_mass_drivers_2', source: 'tech_mass_drivers_1', target: 'tech_mass_drivers_2' } },
{ data: { id: 'tech_missiles_1_to_tech_missiles_2', source: 'tech_missiles_1', target: 'tech_missiles_2' } },
{ data: { id: 'tech_fusion_power_to_tech_missiles_2', source: 'tech_fusion_power', target: 'tech_missiles_2' } },
{ data: { id: 'tech_corvettes_to_tech_torpedoes_1', source: 'tech_corvettes', target: 'tech_torpedoes_1' } },
{ data: { id: 'tech_basic_science_lab_1_to_tech_basic_science_lab_2', source: 'tech_basic_science_lab_1', target: 'tech_basic_science_lab_2' } },
{ data: { id: 'tech_space_construction_to_tech_space_science_1', source: 'tech_space_construction', target: 'tech_space_science_1' } },
{ data: { id: 'tech_space_science_1_to_tech_space_science_2', source: 'tech_space_science_1', target: 'tech_space_science_2' } },
{ data: { id: 'tech_basic_science_lab_1_to_tech_physics_1', source: 'tech_basic_science_lab_1', target: 'tech_physics_1' } },
{ data: { id: 'tech_basic_science_lab_1_to_tech_administrative_ai', source: 'tech_basic_science_lab_1', target: 'tech_administrative_ai' } },
{ data: { id: 'tech_administrative_ai_to_tech_cryostasis_1', source: 'tech_administrative_ai', target: 'tech_cryostasis_1' } },
{ data: { id: 'tech_colonization_1_to_tech_cryostasis_1', source: 'tech_colonization_1', target: 'tech_cryostasis_1' } },
{ data: { id: 'tech_administrative_ai_to_tech_combat_computers_1', source: 'tech_administrative_ai', target: 'tech_combat_computers_1' } },
{ data: { id: 'tech_combat_computers_1_to_tech_auxiliary_fire_control', source: 'tech_combat_computers_1', target: 'tech_auxiliary_fire_control' } },
{ data: { id: 'tech_colonial_bureaucracy_to_tech_encryption_1', source: 'tech_colonial_bureaucracy', target: 'tech_encryption_1' } },
{ data: { id: 'tech_colonial_bureaucracy_to_tech_decryption_1', source: 'tech_colonial_bureaucracy', target: 'tech_decryption_1' } },
{ data: { id: 'tech_fission_power_to_tech_fusion_power', source: 'tech_fission_power', target: 'tech_fusion_power' } },
{ data: { id: 'tech_fusion_power_to_tech_reactor_boosters_2', source: 'tech_fusion_power', target: 'tech_reactor_boosters_2' } },
{ data: { id: 'tech_reactor_boosters_1_to_tech_reactor_boosters_2', source: 'tech_reactor_boosters_1', target: 'tech_reactor_boosters_2' } },
{ data: { id: 'tech_antimatter_power_to_tech_reactor_boosters_3', source: 'tech_antimatter_power', target: 'tech_reactor_boosters_3' } },
{ data: { id: 'tech_reactor_boosters_2_to_tech_reactor_boosters_3', source: 'tech_reactor_boosters_2', target: 'tech_reactor_boosters_3' } },
{ data: { id: 'tech_shields_1_to_tech_shields_2', source: 'tech_shields_1', target: 'tech_shields_2' } },
{ data: { id: 'tech_power_plant_1_to_tech_power_plant_2', source: 'tech_power_plant_1', target: 'tech_power_plant_2' } },
{ data: { id: 'tech_power_plant_2_to_tech_power_hub_1', source: 'tech_power_plant_2', target: 'tech_power_hub_1' } },
{ data: { id: 'tech_lasers_1_to_tech_lasers_2', source: 'tech_lasers_1', target: 'tech_lasers_2' } },
{ data: { id: 'tech_interplanetary_commerce_to_tech_space_trading', source: 'tech_interplanetary_commerce', target: 'tech_space_trading' } },
{ data: { id: 'tech_industrial_farming_to_tech_eco_simulation', source: 'tech_industrial_farming', target: 'tech_eco_simulation' } },
{ data: { id: 'tech_eco_simulation_to_tech_food_processing_1', source: 'tech_eco_simulation', target: 'tech_food_processing_1' } },
{ data: { id: 'tech_basic_science_lab_1_to_tech_society_1', source: 'tech_basic_science_lab_1', target: 'tech_society_1' } },
{ data: { id: 'tech_basic_health_to_tech_frontier_health', source: 'tech_basic_health', target: 'tech_frontier_health' } },
{ data: { id: 'tech_genome_mapping_to_tech_frontier_health', source: 'tech_genome_mapping', target: 'tech_frontier_health' } },
{ data: { id: 'tech_colonization_1_to_tech_dense_jungle', source: 'tech_colonization_1', target: 'tech_dense_jungle' } },
{ data: { id: 'tech_colonization_1_to_tech_quicksand_basin', source: 'tech_colonization_1', target: 'tech_quicksand_basin' } },
{ data: { id: 'tech_colonization_1_to_tech_noxious_swamp', source: 'tech_colonization_1', target: 'tech_noxious_swamp' } },
{ data: { id: 'tech_colonization_1_to_tech_massive_glacier', source: 'tech_colonization_1', target: 'tech_massive_glacier' } },
{ data: { id: 'tech_colonization_1_to_tech_toxic_kelp', source: 'tech_colonization_1', target: 'tech_toxic_kelp' } },
{ data: { id: 'tech_colonization_1_to_tech_deep_sinkhole', source: 'tech_colonization_1', target: 'tech_deep_sinkhole' } },
{ data: { id: 'tech_planetary_defenses_to_tech_ground_defense_planning', source: 'tech_planetary_defenses', target: 'tech_ground_defense_planning' } },
{ data: { id: 'tech_planetary_government_to_tech_planetary_unification', source: 'tech_planetary_government', target: 'tech_planetary_unification' } },
{ data: { id: 'tech_planetary_unification_to_tech_adaptive_bureaucracy', source: 'tech_planetary_unification', target: 'tech_adaptive_bureaucracy' } },
{ data: { id: 'tech_holo_entertainment_to_tech_hyper_entertainment_forum', source: 'tech_holo_entertainment', target: 'tech_hyper_entertainment_forum' } },
{ data: { id: 'tech_cultural_heritage_to_tech_heritage_site', source: 'tech_cultural_heritage', target: 'tech_heritage_site' } },
{ data: { id: 'tech_colonial_centralization_to_tech_federation_code', source: 'tech_colonial_centralization', target: 'tech_federation_code' } },
{ data: { id: 'tech_industrial_farming_to_tech_bio_reactor', source: 'tech_industrial_farming', target: 'tech_bio_reactor' } },
{ data: { id: 'tech_powered_exoskeletons_to_tech_robomodding_m', source: 'tech_powered_exoskeletons', target: 'tech_robomodding_m' } },
{ data: { id: 'tech_robotic_workers_to_tech_robomodding', source: 'tech_robotic_workers', target: 'tech_robomodding' } },
{ data: { id: 'tech_weavers_to_tech_weaver_growth_1', source: 'tech_weavers', target: 'tech_weaver_growth_1' } },
{ data: { id: 'tech_weaver_growth_1_to_tech_weaver_growth_2', source: 'tech_weaver_growth_1', target: 'tech_weaver_growth_2' } },
{ data: { id: 'tech_weaver_bio_healing_1_to_tech_weaver_bio_healing_2', source: 'tech_weaver_bio_healing_1', target: 'tech_weaver_bio_healing_2' } },
{ data: { id: 'tech_weaver_bio_evasion_1_to_tech_weaver_bio_evasion_2', source: 'tech_weaver_bio_evasion_1', target: 'tech_weaver_bio_evasion_2' } },
{ data: { id: 'tech_weaver_bio_fire_rate_1_to_tech_weaver_bio_fire_rate_2', source: 'tech_weaver_bio_fire_rate_1', target: 'tech_weaver_bio_fire_rate_2' } },
{ data: { id: 'tech_weaver_bio_confuser_1_to_tech_weaver_bio_confuser_2', source: 'tech_weaver_bio_confuser_1', target: 'tech_weaver_bio_confuser_2' } },
{ data: { id: 'tech_weaver_bio_anti_evasion_1_to_tech_weaver_bio_anti_evasion_2', source: 'tech_weaver_bio_anti_evasion_1', target: 'tech_weaver_bio_anti_evasion_2' } },
{ data: { id: 'tech_weaver_bio_anti_fire_rate_1_to_tech_weaver_bio_anti_fire_rate_2', source: 'tech_weaver_bio_anti_fire_rate_1', target: 'tech_weaver_bio_anti_fire_rate_2' } },
{ data: { id: 'tech_industrial_storm_protection_to_tech_storm_manipulation', source: 'tech_industrial_storm_protection', target: 'tech_storm_manipulation' } },
{ data: { id: 'tech_industrial_storm_protection_to_tech_advanced_industrial_storm_protection', source: 'tech_industrial_storm_protection', target: 'tech_advanced_industrial_storm_protection' } },
{ data: { id: 'tech_ship_hull_storm_breaker_1_to_tech_ship_hull_storm_breaker_2', source: 'tech_ship_hull_storm_breaker_1', target: 'tech_ship_hull_storm_breaker_2' } },
{ data: { id: 'tech_ship_storm_weapons_1_to_tech_ship_storm_weapons_2', source: 'tech_ship_storm_weapons_1', target: 'tech_ship_storm_weapons_2' } },
{ data: { id: 'tech_sensors_2_to_tech_experimental_subspace_navigation', source: 'tech_sensors_2', target: 'tech_experimental_subspace_navigation' } },
{ data: { id: 'tech_corvettes_to_tech_destroyers', source: 'tech_corvettes', target: 'tech_destroyers' } },
{ data: { id: 'tech_corvette_hull_1_to_tech_corvette_hull_2', source: 'tech_corvette_hull_1', target: 'tech_corvette_hull_2' } },
{ data: { id: 'tech_destroyers_to_tech_destroyer_build_speed', source: 'tech_destroyers', target: 'tech_destroyer_build_speed' } },
{ data: { id: 'tech_destroyers_to_tech_destroyer_hull_1', source: 'tech_destroyers', target: 'tech_destroyer_hull_1' } },
{ data: { id: 'tech_starbase_2_to_tech_starbase_3', source: 'tech_starbase_2', target: 'tech_starbase_3' } },
{ data: { id: 'tech_starbase_3_to_tech_modular_engineering', source: 'tech_starbase_3', target: 'tech_modular_engineering' } },
{ data: { id: 'tech_strike_craft_1_to_tech_strike_craft_2', source: 'tech_strike_craft_1', target: 'tech_strike_craft_2' } },
{ data: { id: 'tech_ship_armor_2_to_tech_ship_armor_3', source: 'tech_ship_armor_2', target: 'tech_ship_armor_3' } },
{ data: { id: 'tech_advanced_metallurgy_1_to_tech_armor_hardeners_1', source: 'tech_advanced_metallurgy_1', target: 'tech_armor_hardeners_1' } },
{ data: { id: 'tech_rare_crystals_to_tech_armor_hardeners_1', source: 'tech_rare_crystals', target: 'tech_armor_hardeners_1' } },
{ data: { id: 'tech_thrusters_1_to_tech_thrusters_2', source: 'tech_thrusters_1', target: 'tech_thrusters_2' } },
{ data: { id: 'tech_starbase_3_to_tech_defense_platform_hull_1', source: 'tech_starbase_3', target: 'tech_defense_platform_hull_1' } },
{ data: { id: 'tech_space_mining_2_to_tech_space_mining_3', source: 'tech_space_mining_2', target: 'tech_space_mining_3' } },
{ data: { id: 'tech_space_mining_3_to_tech_space_mining_4', source: 'tech_space_mining_3', target: 'tech_space_mining_4' } },
{ data: { id: 'tech_mining_1_to_tech_mining_2', source: 'tech_mining_1', target: 'tech_mining_2' } },
{ data: { id: 'tech_mineral_purification_1_to_tech_mineral_purification_2', source: 'tech_mineral_purification_1', target: 'tech_mineral_purification_2' } },
{ data: { id: 'tech_colonial_centralization_to_tech_mineral_purification_2', source: 'tech_colonial_centralization', target: 'tech_mineral_purification_2' } },
{ data: { id: 'tech_alloys_1_to_tech_advanced_metallurgy_1', source: 'tech_alloys_1', target: 'tech_advanced_metallurgy_1' } },
{ data: { id: 'tech_ship_armor_2_to_tech_advanced_metallurgy_1', source: 'tech_ship_armor_2', target: 'tech_advanced_metallurgy_1' } },
{ data: { id: 'tech_engineering_1_to_tech_engineering_2', source: 'tech_engineering_1', target: 'tech_engineering_2' } },
{ data: { id: 'tech_robotic_workers_to_tech_droid_workers', source: 'tech_robotic_workers', target: 'tech_droid_workers' } },
{ data: { id: 'tech_colonial_centralization_to_tech_droid_workers', source: 'tech_colonial_centralization', target: 'tech_droid_workers' } },
{ data: { id: 'tech_powered_exoskeletons_to_tech_integrated_cybernetics', source: 'tech_powered_exoskeletons', target: 'tech_integrated_cybernetics' } },
{ data: { id: 'tech_colonial_centralization_to_tech_integrated_cybernetics', source: 'tech_colonial_centralization', target: 'tech_integrated_cybernetics' } },
{ data: { id: 'tech_mass_drivers_2_to_tech_mass_drivers_3', source: 'tech_mass_drivers_2', target: 'tech_mass_drivers_3' } },
{ data: { id: 'tech_mass_drivers_2_to_tech_autocannons_1', source: 'tech_mass_drivers_2', target: 'tech_autocannons_1' } },
{ data: { id: 'tech_missiles_2_to_tech_missiles_3', source: 'tech_missiles_2', target: 'tech_missiles_3' } },
{ data: { id: 'tech_harbingers_to_tech_swarmer_missiles_1', source: 'tech_harbingers', target: 'tech_swarmer_missiles_1' } },
{ data: { id: 'tech_stingers_to_tech_swarmer_missiles_1', source: 'tech_stingers', target: 'tech_swarmer_missiles_1' } },
{ data: { id: 'tech_missiles_2_to_tech_swarmer_missiles_1', source: 'tech_missiles_2', target: 'tech_swarmer_missiles_1' } },
{ data: { id: 'tech_shields_2_to_tech_cloaking_1', source: 'tech_shields_2', target: 'tech_cloaking_1' } },
{ data: { id: 'tech_sensors_2_to_tech_detection_array', source: 'tech_sensors_2', target: 'tech_detection_array' } },
{ data: { id: 'tech_detection_array_to_tech_assisted_detection', source: 'tech_detection_array', target: 'tech_assisted_detection' } },
{ data: { id: 'tech_gravity_wells_to_tech_gravity_snare_capacity_1', source: 'tech_gravity_wells', target: 'tech_gravity_snare_capacity_1' } },
{ data: { id: 'tech_gravity_wells_to_tech_alien_cloning', source: 'tech_gravity_wells', target: 'tech_alien_cloning' } },
{ data: { id: 'tech_alien_cloning_to_tech_improved_incubators', source: 'tech_alien_cloning', target: 'tech_improved_incubators' } },
{ data: { id: 'tech_alien_cloning_to_tech_controlled_mutations', source: 'tech_alien_cloning', target: 'tech_controlled_mutations' } },
{ data: { id: 'tech_controlled_mutations_to_tech_thrusters_bio_integration', source: 'tech_controlled_mutations', target: 'tech_thrusters_bio_integration' } },
{ data: { id: 'tech_controlled_mutations_to_tech_hyper_drive_bio_integration', source: 'tech_controlled_mutations', target: 'tech_hyper_drive_bio_integration' } },
{ data: { id: 'tech_controlled_mutations_to_tech_sensors_bio_integration', source: 'tech_controlled_mutations', target: 'tech_sensors_bio_integration' } },
{ data: { id: 'tech_controlled_mutations_to_tech_combat_computers_bio_integration', source: 'tech_controlled_mutations', target: 'tech_combat_computers_bio_integration' } },
{ data: { id: 'tech_hyper_drive_2_to_tech_hyper_relays', source: 'tech_hyper_drive_2', target: 'tech_hyper_relays' } },
{ data: { id: 'tech_space_science_2_to_tech_space_science_3', source: 'tech_space_science_2', target: 'tech_space_science_3' } },
{ data: { id: 'tech_space_science_3_to_tech_space_science_4', source: 'tech_space_science_3', target: 'tech_space_science_4' } },
{ data: { id: 'tech_physics_1_to_tech_physics_2', source: 'tech_physics_1', target: 'tech_physics_2' } },
{ data: { id: 'tech_administrative_ai_to_tech_self_aware_logic', source: 'tech_administrative_ai', target: 'tech_self_aware_logic' } },
{ data: { id: 'tech_luxuries_1_to_tech_consumer_good_refinement_1', source: 'tech_luxuries_1', target: 'tech_consumer_good_refinement_1' } },
{ data: { id: 'tech_administrative_ai_to_tech_consumer_good_refinement_1', source: 'tech_administrative_ai', target: 'tech_consumer_good_refinement_1' } },
{ data: { id: 'tech_encryption_1_to_tech_encryption_2', source: 'tech_encryption_1', target: 'tech_encryption_2' } },
{ data: { id: 'tech_decryption_1_to_tech_decryption_2', source: 'tech_decryption_1', target: 'tech_decryption_2' } },
{ data: { id: 'tech_fusion_power_to_tech_cold_fusion_power', source: 'tech_fusion_power', target: 'tech_cold_fusion_power' } },
{ data: { id: 'tech_shields_2_to_tech_shields_3', source: 'tech_shields_2', target: 'tech_shields_3' } },
{ data: { id: 'tech_shields_3_to_tech_shield_rechargers_1', source: 'tech_shields_3', target: 'tech_shield_rechargers_1' } },
{ data: { id: 'tech_shield_rechargers_1_to_tech_shield_hardeners_1', source: 'tech_shield_rechargers_1', target: 'tech_shield_hardeners_1' } },
{ data: { id: 'tech_exotic_gases_to_tech_shield_hardeners_1', source: 'tech_exotic_gases', target: 'tech_shield_hardeners_1' } },
{ data: { id: 'tech_power_plant_2_to_tech_power_plant_3', source: 'tech_power_plant_2', target: 'tech_power_plant_3' } },
{ data: { id: 'tech_power_hub_1_to_tech_power_hub_2', source: 'tech_power_hub_1', target: 'tech_power_hub_2' } },
{ data: { id: 'tech_colonial_centralization_to_tech_power_hub_2', source: 'tech_colonial_centralization', target: 'tech_power_hub_2' } },
{ data: { id: 'tech_hyper_drive_1_to_tech_hyper_drive_2', source: 'tech_hyper_drive_1', target: 'tech_hyper_drive_2' } },
{ data: { id: 'tech_hyper_drive_1_to_tech_ftl_inhibitor', source: 'tech_hyper_drive_1', target: 'tech_ftl_inhibitor' } },
{ data: { id: 'tech_lasers_2_to_tech_lasers_3', source: 'tech_lasers_2', target: 'tech_lasers_3' } },
{ data: { id: 'tech_lasers_2_to_tech_plasma_1', source: 'tech_lasers_2', target: 'tech_plasma_1' } },
{ data: { id: 'tech_lasers_2_to_tech_disruptors_1', source: 'tech_lasers_2', target: 'tech_disruptors_1' } },
{ data: { id: 'tech_pd_tracking_1_to_tech_pd_tracking_2', source: 'tech_pd_tracking_1', target: 'tech_pd_tracking_2' } },
{ data: { id: 'tech_eco_simulation_to_tech_gene_crops', source: 'tech_eco_simulation', target: 'tech_gene_crops' } },
{ data: { id: 'tech_society_1_to_tech_society_2', source: 'tech_society_1', target: 'tech_society_2' } },
{ data: { id: 'tech_colonization_1_to_tech_colonization_2', source: 'tech_colonization_1', target: 'tech_colonization_2' } },
{ data: { id: 'tech_colonization_2_to_tech_colonization_3', source: 'tech_colonization_2', target: 'tech_colonization_3' } },
{ data: { id: 'tech_frontier_health_to_tech_frontier_hospital', source: 'tech_frontier_health', target: 'tech_frontier_hospital' } },
{ data: { id: 'tech_colonial_centralization_to_tech_frontier_hospital', source: 'tech_colonial_centralization', target: 'tech_frontier_hospital' } },
{ data: { id: 'tech_colonization_1_to_tech_mountain_range', source: 'tech_colonization_1', target: 'tech_mountain_range' } },
{ data: { id: 'tech_colonization_1_to_tech_volcano', source: 'tech_colonization_1', target: 'tech_volcano' } },
{ data: { id: 'tech_colonization_1_to_tech_dangerous_wildlife', source: 'tech_colonization_1', target: 'tech_dangerous_wildlife' } },
{ data: { id: 'tech_colonization_1_to_tech_terrestrial_sculpting', source: 'tech_colonization_1', target: 'tech_terrestrial_sculpting' } },
{ data: { id: 'tech_genome_mapping_to_tech_vitality_boosters', source: 'tech_genome_mapping', target: 'tech_vitality_boosters' } },
{ data: { id: 'tech_genome_mapping_to_tech_epigenetic_triggers', source: 'tech_genome_mapping', target: 'tech_epigenetic_triggers' } },
{ data: { id: 'tech_genome_mapping_to_tech_cloning', source: 'tech_genome_mapping', target: 'tech_cloning' } },
{ data: { id: 'tech_cloning_to_tech_gene_banks', source: 'tech_cloning', target: 'tech_gene_banks' } },
{ data: { id: 'tech_doctrine_fleet_size_1_to_tech_doctrine_fleet_size_2', source: 'tech_doctrine_fleet_size_1', target: 'tech_doctrine_fleet_size_2' } },
{ data: { id: 'tech_doctrine_navy_size_1_to_tech_doctrine_navy_size_2', source: 'tech_doctrine_navy_size_1', target: 'tech_doctrine_navy_size_2' } },
{ data: { id: 'tech_ground_defense_planning_to_tech_global_defense_grid', source: 'tech_ground_defense_planning', target: 'tech_global_defense_grid' } },
{ data: { id: 'tech_galactic_ambitions_to_tech_interstellar_campaigns', source: 'tech_galactic_ambitions', target: 'tech_interstellar_campaigns' } },
{ data: { id: 'tech_planetary_unification_to_tech_colonial_centralization', source: 'tech_planetary_unification', target: 'tech_colonial_centralization' } },
{ data: { id: 'tech_colonial_centralization_to_tech_planetary_infrastructure_1', source: 'tech_colonial_centralization', target: 'tech_planetary_infrastructure_1' } },
{ data: { id: 'tech_ship_armor_2_to_tech_planetary_infrastructure_1', source: 'tech_ship_armor_2', target: 'tech_planetary_infrastructure_1' } },
{ data: { id: 'tech_genome_mapping_to_tech_subdermal_stimulation', source: 'tech_genome_mapping', target: 'tech_subdermal_stimulation' } },
{ data: { id: 'tech_adaptive_bureaucracy_to_tech_effective_bureaucracy', source: 'tech_adaptive_bureaucracy', target: 'tech_effective_bureaucracy' } },
{ data: { id: 'tech_adaptive_bureaucracy_to_tech_colonial_bureaucracy', source: 'tech_adaptive_bureaucracy', target: 'tech_colonial_bureaucracy' } },
{ data: { id: 'tech_colonial_centralization_to_tech_living_state', source: 'tech_colonial_centralization', target: 'tech_living_state' } },
{ data: { id: 'tech_colonial_centralization_to_tech_autonomous_agents', source: 'tech_colonial_centralization', target: 'tech_autonomous_agents' } },
{ data: { id: 'tech_cultural_heritage_to_tech_holographic_rituals', source: 'tech_cultural_heritage', target: 'tech_holographic_rituals' } },
{ data: { id: 'tech_hive_node_to_tech_hive_cluster', source: 'tech_hive_node', target: 'tech_hive_cluster' } },
{ data: { id: 'tech_wilderness_node_to_tech_wilderness_cluster', source: 'tech_wilderness_node', target: 'tech_wilderness_cluster' } },
{ data: { id: 'tech_artificial_moral_codes_to_tech_penal_colonies', source: 'tech_artificial_moral_codes', target: 'tech_penal_colonies' } },
{ data: { id: 'tech_artificial_moral_codes_to_tech_resort_colonies', source: 'tech_artificial_moral_codes', target: 'tech_resort_colonies' } },
{ data: { id: 'tech_neural_implants_to_tech_slave_colonies', source: 'tech_neural_implants', target: 'tech_slave_colonies' } },
{ data: { id: 'tech_federation_code_to_tech_xeno_diplomacy', source: 'tech_federation_code', target: 'tech_xeno_diplomacy' } },
{ data: { id: 'tech_planetary_unification_to_tech_capital_productivity_1', source: 'tech_planetary_unification', target: 'tech_capital_productivity_1' } },
{ data: { id: 'tech_colonial_centralization_to_tech_node_reformatting_1', source: 'tech_colonial_centralization', target: 'tech_node_reformatting_1' } },
{ data: { id: 'tech_colonial_centralization_to_tech_node_culling_1', source: 'tech_colonial_centralization', target: 'tech_node_culling_1' } },
{ data: { id: 'tech_bio_reactor_to_tech_bio_reactor_2', source: 'tech_bio_reactor', target: 'tech_bio_reactor_2' } },
{ data: { id: 'tech_space_construction_to_tech_mine_betharian', source: 'tech_space_construction', target: 'tech_mine_betharian' } },
{ data: { id: 'tech_space_construction_to_tech_mine_volatile_motes', source: 'tech_space_construction', target: 'tech_mine_volatile_motes' } },
{ data: { id: 'tech_basic_industry_to_tech_volatile_motes', source: 'tech_basic_industry', target: 'tech_volatile_motes' } },
{ data: { id: 'tech_space_construction_to_tech_mine_exotic_gases', source: 'tech_space_construction', target: 'tech_mine_exotic_gases' } },
{ data: { id: 'tech_basic_industry_to_tech_exotic_gases', source: 'tech_basic_industry', target: 'tech_exotic_gases' } },
{ data: { id: 'tech_space_construction_to_tech_mine_rare_crystals', source: 'tech_space_construction', target: 'tech_mine_rare_crystals' } },
{ data: { id: 'tech_basic_industry_to_tech_rare_crystals', source: 'tech_basic_industry', target: 'tech_rare_crystals' } },
{ data: { id: 'tech_robomodding_to_tech_robomodding_points_1', source: 'tech_robomodding', target: 'tech_robomodding_points_1' } },
{ data: { id: 'tech_droid_workers_to_tech_robomodding_points_1', source: 'tech_droid_workers', target: 'tech_robomodding_points_1' } },
{ data: { id: 'tech_archaeostudies_to_tech_archaeoshield', source: 'tech_archaeostudies', target: 'tech_archaeoshield' } },
{ data: { id: 'tech_archaeostudies_to_tech_archaeoarmor', source: 'tech_archaeostudies', target: 'tech_archaeoarmor' } },
{ data: { id: 'tech_archaeostudies_to_tech_archaeo_mass_drivers', source: 'tech_archaeostudies', target: 'tech_archaeo_mass_drivers' } },
{ data: { id: 'tech_archaeostudies_to_tech_archaeo_lasers', source: 'tech_archaeostudies', target: 'tech_archaeo_lasers' } },
{ data: { id: 'tech_archaeostudies_to_tech_archaeo_point_defence', source: 'tech_archaeostudies', target: 'tech_archaeo_point_defence' } },
{ data: { id: 'tech_archaeostudies_to_tech_archaeo_missiles', source: 'tech_archaeostudies', target: 'tech_archaeo_missiles' } },
{ data: { id: 'tech_archaeostudies_to_tech_archaeo_mass_accelerator', source: 'tech_archaeostudies', target: 'tech_archaeo_mass_accelerator' } },
{ data: { id: 'tech_archaeostudies_to_tech_archaeo_strike_crafts', source: 'tech_archaeostudies', target: 'tech_archaeo_strike_crafts' } },
{ data: { id: 'tech_archaeostudies_to_tech_archaeo_rampart', source: 'tech_archaeostudies', target: 'tech_archaeo_rampart' } },
{ data: { id: 'tech_archaeostudies_to_tech_archaeo_overcharger', source: 'tech_archaeostudies', target: 'tech_archaeo_overcharger' } },
{ data: { id: 'tech_archaeostudies_to_tech_archaeo_refinery', source: 'tech_archaeostudies', target: 'tech_archaeo_refinery' } },
{ data: { id: 'tech_weavers_to_tech_harbingers', source: 'tech_weavers', target: 'tech_harbingers' } },
{ data: { id: 'tech_harbingers_to_tech_harbinger_build_speed', source: 'tech_harbingers', target: 'tech_harbinger_build_speed' } },
{ data: { id: 'tech_harbingers_to_tech_harbinger_growth_1', source: 'tech_harbingers', target: 'tech_harbinger_growth_1' } },
{ data: { id: 'tech_harbinger_growth_1_to_tech_harbinger_growth_2', source: 'tech_harbinger_growth_1', target: 'tech_harbinger_growth_2' } },
{ data: { id: 'tech_maulers_to_tech_mandibles_2', source: 'tech_maulers', target: 'tech_mandibles_2' } },
{ data: { id: 'tech_weaver_bio_healing_2_to_tech_weaver_bio_healing_3', source: 'tech_weaver_bio_healing_2', target: 'tech_weaver_bio_healing_3' } },
{ data: { id: 'tech_weaver_bio_evasion_2_to_tech_weaver_bio_evasion_3', source: 'tech_weaver_bio_evasion_2', target: 'tech_weaver_bio_evasion_3' } },
{ data: { id: 'tech_weaver_bio_fire_rate_2_to_tech_weaver_bio_fire_rate_3', source: 'tech_weaver_bio_fire_rate_2', target: 'tech_weaver_bio_fire_rate_3' } },
{ data: { id: 'tech_weaver_bio_confuser_2_to_tech_weaver_bio_confuser_3', source: 'tech_weaver_bio_confuser_2', target: 'tech_weaver_bio_confuser_3' } },
{ data: { id: 'tech_weaver_bio_anti_evasion_2_to_tech_weaver_bio_anti_evasion_3', source: 'tech_weaver_bio_anti_evasion_2', target: 'tech_weaver_bio_anti_evasion_3' } },
{ data: { id: 'tech_weaver_bio_anti_fire_rate_2_to_tech_weaver_bio_anti_fire_rate_3', source: 'tech_weaver_bio_anti_fire_rate_2', target: 'tech_weaver_bio_anti_fire_rate_3' } },
{ data: { id: 'tech_starbase_3_to_tech_deep_space_citadel', source: 'tech_starbase_3', target: 'tech_deep_space_citadel' } },
{ data: { id: 'tech_storm_manipulation_to_tech_advanced_storm_manipulation', source: 'tech_storm_manipulation', target: 'tech_advanced_storm_manipulation' } },
{ data: { id: 'tech_storm_prediction_1_to_tech_storm_prediction_2', source: 'tech_storm_prediction_1', target: 'tech_storm_prediction_2' } },
{ data: { id: 'tech_destroyers_to_tech_cruisers', source: 'tech_destroyers', target: 'tech_cruisers' } },
{ data: { id: 'tech_destroyer_hull_1_to_tech_destroyer_hull_2', source: 'tech_destroyer_hull_1', target: 'tech_destroyer_hull_2' } },
{ data: { id: 'tech_cruisers_to_tech_cruiser_build_speed', source: 'tech_cruisers', target: 'tech_cruiser_build_speed' } },
{ data: { id: 'tech_cruisers_to_tech_cruiser_hull_1', source: 'tech_cruisers', target: 'tech_cruiser_hull_1' } },
{ data: { id: 'tech_starbase_3_to_tech_starbase_4', source: 'tech_starbase_3', target: 'tech_starbase_4' } },
{ data: { id: 'tech_starbase_3_to_tech_habitat_1', source: 'tech_starbase_3', target: 'tech_habitat_1' } },
{ data: { id: 'tech_starbase_4_to_tech_space_defense_station_improvement', source: 'tech_starbase_4', target: 'tech_space_defense_station_improvement' } },
{ data: { id: 'tech_modular_engineering_to_tech_space_defense_station_improvement', source: 'tech_modular_engineering', target: 'tech_space_defense_station_improvement' } },
{ data: { id: 'tech_strike_craft_2_to_tech_strike_craft_3', source: 'tech_strike_craft_2', target: 'tech_strike_craft_3' } },
{ data: { id: 'tech_ship_armor_3_to_tech_ship_armor_4', source: 'tech_ship_armor_3', target: 'tech_ship_armor_4' } },
{ data: { id: 'tech_thrusters_2_to_tech_thrusters_3', source: 'tech_thrusters_2', target: 'tech_thrusters_3' } },
{ data: { id: 'tech_space_mining_4_to_tech_space_mining_5', source: 'tech_space_mining_4', target: 'tech_space_mining_5' } },
{ data: { id: 'tech_mining_2_to_tech_mining_3', source: 'tech_mining_2', target: 'tech_mining_3' } },
{ data: { id: 'tech_alloys_1_to_tech_alloys_2', source: 'tech_alloys_1', target: 'tech_alloys_2' } },
{ data: { id: 'tech_colonial_centralization_to_tech_alloys_2', source: 'tech_colonial_centralization', target: 'tech_alloys_2' } },
{ data: { id: 'tech_luxuries_1_to_tech_luxuries_2', source: 'tech_luxuries_1', target: 'tech_luxuries_2' } },
{ data: { id: 'tech_colonial_centralization_to_tech_luxuries_2', source: 'tech_colonial_centralization', target: 'tech_luxuries_2' } },
{ data: { id: 'tech_engineering_2_to_tech_engineering_3', source: 'tech_engineering_2', target: 'tech_engineering_3' } },
{ data: { id: 'tech_afterburners_1_to_tech_afterburners_2', source: 'tech_afterburners_1', target: 'tech_afterburners_2' } },
{ data: { id: 'tech_thrusters_3_to_tech_afterburners_2', source: 'tech_thrusters_3', target: 'tech_afterburners_2' } },
{ data: { id: 'tech_assembly_pattern_to_tech_construction_templates', source: 'tech_assembly_pattern', target: 'tech_construction_templates' } },
{ data: { id: 'tech_housing_1_to_tech_housing_2', source: 'tech_housing_1', target: 'tech_housing_2' } },
{ data: { id: 'tech_mass_drivers_3_to_tech_mass_drivers_4', source: 'tech_mass_drivers_3', target: 'tech_mass_drivers_4' } },
{ data: { id: 'tech_mass_drivers_4_to_tech_kinetic_artillery_1', source: 'tech_mass_drivers_4', target: 'tech_kinetic_artillery_1' } },
{ data: { id: 'tech_autocannons_1_to_tech_autocannons_2', source: 'tech_autocannons_1', target: 'tech_autocannons_2' } },
{ data: { id: 'tech_flak_batteries_1_to_tech_flak_batteries_2', source: 'tech_flak_batteries_1', target: 'tech_flak_batteries_2' } },
{ data: { id: 'tech_missiles_3_to_tech_missiles_4', source: 'tech_missiles_3', target: 'tech_missiles_4' } },
{ data: { id: 'tech_torpedoes_1_to_tech_torpedoes_2', source: 'tech_torpedoes_1', target: 'tech_torpedoes_2' } },
{ data: { id: 'tech_cloaking_1_to_tech_cloaking_2', source: 'tech_cloaking_1', target: 'tech_cloaking_2' } },
{ data: { id: 'tech_shields_3_to_tech_cloaking_2', source: 'tech_shields_3', target: 'tech_cloaking_2' } },
{ data: { id: 'tech_gravity_snare_capacity_1_to_tech_gravity_snare_capacity_2', source: 'tech_gravity_snare_capacity_1', target: 'tech_gravity_snare_capacity_2' } },
{ data: { id: 'tech_gravity_wells_to_tech_containment_vessel', source: 'tech_gravity_wells', target: 'tech_containment_vessel' } },
{ data: { id: 'tech_improved_incubators_to_tech_metabolic_gases', source: 'tech_improved_incubators', target: 'tech_metabolic_gases' } },
{ data: { id: 'tech_controlled_mutations_2_to_tech_unique_mutation_space_amoeba', source: 'tech_controlled_mutations_2', target: 'tech_unique_mutation_space_amoeba' } },
{ data: { id: 'tech_controlled_mutations_2_to_tech_unique_mutation_tiyanki', source: 'tech_controlled_mutations_2', target: 'tech_unique_mutation_tiyanki' } },
{ data: { id: 'tech_controlled_mutations_2_to_tech_unique_mutation_voidworm', source: 'tech_controlled_mutations_2', target: 'tech_unique_mutation_voidworm' } },
{ data: { id: 'tech_controlled_mutations_2_to_tech_unique_mutation_cutholoid', source: 'tech_controlled_mutations_2', target: 'tech_unique_mutation_cutholoid' } },
{ data: { id: 'tech_controlled_mutations_2_to_tech_unique_mutation_crystalline_entity', source: 'tech_controlled_mutations_2', target: 'tech_unique_mutation_crystalline_entity' } },
{ data: { id: 'tech_akx_worm_1_to_tech_akx_worm_3', source: 'tech_akx_worm_1', target: 'tech_akx_worm_3' } },
{ data: { id: 'tech_akx_worm_2_to_tech_akx_worm_3', source: 'tech_akx_worm_2', target: 'tech_akx_worm_3' } },
{ data: { id: 'tech_starbase_3_to_tech_orbital_ring_tier_1', source: 'tech_starbase_3', target: 'tech_orbital_ring_tier_1' } },
{ data: { id: 'tech_galactic_administration_to_tech_orbital_ring_tier_1', source: 'tech_galactic_administration', target: 'tech_orbital_ring_tier_1' } },
{ data: { id: 'tech_planetary_infrastructure_1_to_tech_orbital_ring_tier_1', source: 'tech_planetary_infrastructure_1', target: 'tech_orbital_ring_tier_1' } },
{ data: { id: 'tech_basic_science_lab_2_to_tech_basic_science_lab_3', source: 'tech_basic_science_lab_2', target: 'tech_basic_science_lab_3' } },
{ data: { id: 'tech_colonial_centralization_to_tech_basic_science_lab_3', source: 'tech_colonial_centralization', target: 'tech_basic_science_lab_3' } },
{ data: { id: 'tech_basic_science_lab_2_to_tech_global_research_initiative', source: 'tech_basic_science_lab_2', target: 'tech_global_research_initiative' } },
{ data: { id: 'tech_colonial_centralization_to_tech_global_research_initiative', source: 'tech_colonial_centralization', target: 'tech_global_research_initiative' } },
{ data: { id: 'tech_space_science_4_to_tech_space_science_5', source: 'tech_space_science_4', target: 'tech_space_science_5' } },
{ data: { id: 'tech_physics_2_to_tech_physics_3', source: 'tech_physics_2', target: 'tech_physics_3' } },
{ data: { id: 'tech_self_aware_logic_to_tech_cryostasis_2', source: 'tech_self_aware_logic', target: 'tech_cryostasis_2' } },
{ data: { id: 'tech_cryostasis_1_to_tech_cryostasis_2', source: 'tech_cryostasis_1', target: 'tech_cryostasis_2' } },
{ data: { id: 'tech_combat_computers_1_to_tech_combat_computers_2', source: 'tech_combat_computers_1', target: 'tech_combat_computers_2' } },
{ data: { id: 'tech_self_aware_logic_to_tech_combat_computers_2', source: 'tech_self_aware_logic', target: 'tech_combat_computers_2' } },
{ data: { id: 'tech_basic_science_lab_2_to_tech_neuro_quantum_links', source: 'tech_basic_science_lab_2', target: 'tech_neuro_quantum_links' } },
{ data: { id: 'tech_integrated_cybernetics_to_tech_neuro_quantum_links', source: 'tech_integrated_cybernetics', target: 'tech_neuro_quantum_links' } },
{ data: { id: 'tech_cold_fusion_power_to_tech_antimatter_power', source: 'tech_cold_fusion_power', target: 'tech_antimatter_power' } },
{ data: { id: 'tech_shields_3_to_tech_shields_4', source: 'tech_shields_3', target: 'tech_shields_4' } },
{ data: { id: 'tech_shields_3_to_tech_planetary_shield_generator', source: 'tech_shields_3', target: 'tech_planetary_shield_generator' } },
{ data: { id: 'tech_sensors_2_to_tech_sensors_3', source: 'tech_sensors_2', target: 'tech_sensors_3' } },
{ data: { id: 'tech_power_plant_3_to_tech_power_plant_4', source: 'tech_power_plant_3', target: 'tech_power_plant_4' } },
{ data: { id: 'tech_hyper_drive_2_to_tech_hyper_drive_3', source: 'tech_hyper_drive_2', target: 'tech_hyper_drive_3' } },
{ data: { id: 'tech_hyper_drive_2_to_tech_wormhole_stabilization', source: 'tech_hyper_drive_2', target: 'tech_wormhole_stabilization' } },
{ data: { id: 'tech_lasers_3_to_tech_lasers_4', source: 'tech_lasers_3', target: 'tech_lasers_4' } },
{ data: { id: 'tech_plasma_1_to_tech_plasma_2', source: 'tech_plasma_1', target: 'tech_plasma_2' } },
{ data: { id: 'tech_disruptors_1_to_tech_disruptors_2', source: 'tech_disruptors_1', target: 'tech_disruptors_2' } },
{ data: { id: 'tech_lasers_4_to_tech_energy_torpedoes_1', source: 'tech_lasers_4', target: 'tech_energy_torpedoes_1' } },
{ data: { id: 'tech_torpedoes_1_to_tech_energy_torpedoes_1', source: 'tech_torpedoes_1', target: 'tech_energy_torpedoes_1' } },
{ data: { id: 'tech_harbingers_to_tech_energy_torpedoes_1', source: 'tech_harbingers', target: 'tech_energy_torpedoes_1' } },
{ data: { id: 'tech_space_trading_to_tech_interstellar_economics', source: 'tech_space_trading', target: 'tech_interstellar_economics' } },
{ data: { id: 'tech_gene_crops_to_tech_nano_vitality_crops', source: 'tech_gene_crops', target: 'tech_nano_vitality_crops' } },
{ data: { id: 'tech_food_processing_1_to_tech_food_processing_2', source: 'tech_food_processing_1', target: 'tech_food_processing_2' } },
{ data: { id: 'tech_society_2_to_tech_society_3', source: 'tech_society_2', target: 'tech_society_3' } },
{ data: { id: 'tech_colonization_3_to_tech_colonization_4', source: 'tech_colonization_3', target: 'tech_colonization_4' } },
{ data: { id: 'tech_colonization_3_to_tech_tomb_world_adaption', source: 'tech_colonization_3', target: 'tech_tomb_world_adaption' } },
{ data: { id: 'tech_terrestrial_sculpting_to_tech_ecological_adaptation', source: 'tech_terrestrial_sculpting', target: 'tech_ecological_adaptation' } },
{ data: { id: 'tech_genome_mapping_to_tech_gene_tailoring', source: 'tech_genome_mapping', target: 'tech_gene_tailoring' } },
{ data: { id: 'tech_gene_tailoring_to_tech_glandular_acclimation', source: 'tech_gene_tailoring', target: 'tech_glandular_acclimation' } },
{ data: { id: 'tech_gene_tailoring_to_tech_gene_expressions', source: 'tech_gene_tailoring', target: 'tech_gene_expressions' } },
{ data: { id: 'tech_vitality_boosters_to_tech_selected_lineages', source: 'tech_vitality_boosters', target: 'tech_selected_lineages' } },
{ data: { id: 'tech_doctrine_fleet_size_2_to_tech_doctrine_fleet_size_3', source: 'tech_doctrine_fleet_size_2', target: 'tech_doctrine_fleet_size_3' } },
{ data: { id: 'tech_interstellar_fleet_traditions_to_tech_refit_standards', source: 'tech_interstellar_fleet_traditions', target: 'tech_refit_standards' } },
{ data: { id: 'tech_refit_standards_to_tech_command_matrix', source: 'tech_refit_standards', target: 'tech_command_matrix' } },
{ data: { id: 'tech_doctrine_navy_size_2_to_tech_doctrine_navy_size_3', source: 'tech_doctrine_navy_size_2', target: 'tech_doctrine_navy_size_3' } },
{ data: { id: 'tech_centralized_command_to_tech_combat_training', source: 'tech_centralized_command', target: 'tech_combat_training' } },
{ data: { id: 'tech_psionic_theory_to_tech_telepathy', source: 'tech_psionic_theory', target: 'tech_telepathy' } },
{ data: { id: 'tech_colonial_centralization_to_tech_galactic_administration', source: 'tech_colonial_centralization', target: 'tech_galactic_administration' } },
{ data: { id: 'tech_alloys_1_to_tech_global_production_strategy', source: 'tech_alloys_1', target: 'tech_global_production_strategy' } },
{ data: { id: 'tech_colonial_centralization_to_tech_global_production_strategy', source: 'tech_colonial_centralization', target: 'tech_global_production_strategy' } },
{ data: { id: 'tech_colonial_bureaucracy_to_tech_galactic_bureaucracy', source: 'tech_colonial_bureaucracy', target: 'tech_galactic_bureaucracy' } },
{ data: { id: 'tech_colonial_centralization_to_tech_collective_self', source: 'tech_colonial_centralization', target: 'tech_collective_self' } },
{ data: { id: 'tech_autonomous_agents_to_tech_embodied_dynamism', source: 'tech_autonomous_agents', target: 'tech_embodied_dynamism' } },
{ data: { id: 'tech_artificial_moral_codes_to_tech_synthetic_thought_patterns', source: 'tech_artificial_moral_codes', target: 'tech_synthetic_thought_patterns' } },
{ data: { id: 'tech_unity_of_purpose_to_tech_collective_production_methods', source: 'tech_unity_of_purpose', target: 'tech_collective_production_methods' } },
{ data: { id: 'tech_unity_of_purpose_to_tech_resource_processing_algorithms', source: 'tech_unity_of_purpose', target: 'tech_resource_processing_algorithms' } },
{ data: { id: 'tech_housing_1_to_tech_paradise_dome', source: 'tech_housing_1', target: 'tech_paradise_dome' } },
{ data: { id: 'tech_heritage_site_to_tech_hypercomms_forum', source: 'tech_heritage_site', target: 'tech_hypercomms_forum' } },
{ data: { id: 'tech_colonial_centralization_to_tech_hypercomms_forum', source: 'tech_colonial_centralization', target: 'tech_hypercomms_forum' } },
{ data: { id: 'tech_administrative_ai_to_tech_autocurating_vault', source: 'tech_administrative_ai', target: 'tech_autocurating_vault' } },
{ data: { id: 'tech_colonial_centralization_to_tech_autocurating_vault', source: 'tech_colonial_centralization', target: 'tech_autocurating_vault' } },
{ data: { id: 'tech_holographic_rituals_to_tech_consecration_fields', source: 'tech_holographic_rituals', target: 'tech_consecration_fields' } },
{ data: { id: 'tech_colonial_centralization_to_tech_consecration_fields', source: 'tech_colonial_centralization', target: 'tech_consecration_fields' } },
{ data: { id: 'tech_hive_cluster_to_tech_hive_confluence', source: 'tech_hive_cluster', target: 'tech_hive_confluence' } },
{ data: { id: 'tech_colonial_centralization_to_tech_hive_confluence', source: 'tech_colonial_centralization', target: 'tech_hive_confluence' } },
{ data: { id: 'tech_wilderness_cluster_to_tech_wilderness_confluence', source: 'tech_wilderness_cluster', target: 'tech_wilderness_confluence' } },
{ data: { id: 'tech_colonial_centralization_to_tech_wilderness_confluence', source: 'tech_colonial_centralization', target: 'tech_wilderness_confluence' } },
{ data: { id: 'tech_psionic_theory_to_tech_psionic_barrier', source: 'tech_psionic_theory', target: 'tech_psionic_barrier' } },
{ data: { id: 'tech_xeno_diplomacy_to_tech_xeno_relations', source: 'tech_xeno_diplomacy', target: 'tech_xeno_relations' } },
{ data: { id: 'tech_galactic_administration_to_tech_xeno_relations', source: 'tech_galactic_administration', target: 'tech_xeno_relations' } },
{ data: { id: 'tech_colonial_centralization_to_tech_capital_productivity_2', source: 'tech_colonial_centralization', target: 'tech_capital_productivity_2' } },
{ data: { id: 'tech_capital_productivity_1_to_tech_capital_productivity_2', source: 'tech_capital_productivity_1', target: 'tech_capital_productivity_2' } },
{ data: { id: 'tech_node_reformatting_1_to_tech_node_reformatting_2', source: 'tech_node_reformatting_1', target: 'tech_node_reformatting_2' } },
{ data: { id: 'tech_node_culling_1_to_tech_node_culling_2', source: 'tech_node_culling_1', target: 'tech_node_culling_2' } },
{ data: { id: 'tech_sensors_3_to_tech_mine_zro', source: 'tech_sensors_3', target: 'tech_mine_zro' } },
{ data: { id: 'tech_sensors_4_to_tech_mine_dark_matter', source: 'tech_sensors_4', target: 'tech_mine_dark_matter' } },
{ data: { id: 'tech_colonial_centralization_to_tech_binary_motivators', source: 'tech_colonial_centralization', target: 'tech_binary_motivators' } },
{ data: { id: 'tech_robomodding_m_to_tech_binary_motivators', source: 'tech_robomodding_m', target: 'tech_binary_motivators' } },
{ data: { id: 'tech_micro_replicators_to_tech_self_assembling_components', source: 'tech_micro_replicators', target: 'tech_self_assembling_components' } },
{ data: { id: 'tech_archaeostudies_to_tech_archaeo_detection_scrambler', source: 'tech_archaeostudies', target: 'tech_archaeo_detection_scrambler' } },
{ data: { id: 'tech_archaeostudies_to_tech_archaeo_titan_beam', source: 'tech_archaeostudies', target: 'tech_archaeo_titan_beam' } },
{ data: { id: 'tech_harbingers_to_tech_stingers', source: 'tech_harbingers', target: 'tech_stingers' } },
{ data: { id: 'tech_stingers_to_tech_stinger_build_speed', source: 'tech_stingers', target: 'tech_stinger_build_speed' } },
{ data: { id: 'tech_stingers_to_tech_stinger_growth_1', source: 'tech_stingers', target: 'tech_stinger_growth_1' } },
{ data: { id: 'tech_stinger_growth_1_to_tech_stinger_growth_2', source: 'tech_stinger_growth_1', target: 'tech_stinger_growth_2' } },
{ data: { id: 'tech_stingers_to_tech_growth_chamber_1', source: 'tech_stingers', target: 'tech_growth_chamber_1' } },
{ data: { id: 'tech_mauler_growth_1_to_tech_growth_chamber_1', source: 'tech_mauler_growth_1', target: 'tech_growth_chamber_1' } },
{ data: { id: 'tech_stinger_growth_1_to_tech_growth_chamber_1', source: 'tech_stinger_growth_1', target: 'tech_growth_chamber_1' } },
{ data: { id: 'tech_weaver_growth_1_to_tech_growth_chamber_1', source: 'tech_weaver_growth_1', target: 'tech_growth_chamber_1' } },
{ data: { id: 'tech_harbinger_growth_1_to_tech_growth_chamber_1', source: 'tech_harbinger_growth_1', target: 'tech_growth_chamber_1' } },
{ data: { id: 'tech_growth_chamber_1_to_tech_growth_chamber_2', source: 'tech_growth_chamber_1', target: 'tech_growth_chamber_2' } },
{ data: { id: 'tech_mauler_growth_2_to_tech_growth_chamber_2', source: 'tech_mauler_growth_2', target: 'tech_growth_chamber_2' } },
{ data: { id: 'tech_stinger_growth_2_to_tech_growth_chamber_2', source: 'tech_stinger_growth_2', target: 'tech_growth_chamber_2' } },
{ data: { id: 'tech_weaver_growth_2_to_tech_growth_chamber_2', source: 'tech_weaver_growth_2', target: 'tech_growth_chamber_2' } },
{ data: { id: 'tech_harbinger_growth_2_to_tech_growth_chamber_2', source: 'tech_harbinger_growth_2', target: 'tech_growth_chamber_2' } },
{ data: { id: 'tech_mandibles_2_to_tech_mandibles_3', source: 'tech_mandibles_2', target: 'tech_mandibles_3' } },
{ data: { id: 'tech_weaver_bio_healing_3_to_tech_weaver_bio_healing_4', source: 'tech_weaver_bio_healing_3', target: 'tech_weaver_bio_healing_4' } },
{ data: { id: 'tech_weaver_bio_evasion_3_to_tech_weaver_bio_evasion_4', source: 'tech_weaver_bio_evasion_3', target: 'tech_weaver_bio_evasion_4' } },
{ data: { id: 'tech_weaver_bio_fire_rate_3_to_tech_weaver_bio_fire_rate_4', source: 'tech_weaver_bio_fire_rate_3', target: 'tech_weaver_bio_fire_rate_4' } },
{ data: { id: 'tech_weaver_bio_confuser_3_to_tech_weaver_bio_confuser_4', source: 'tech_weaver_bio_confuser_3', target: 'tech_weaver_bio_confuser_4' } },
{ data: { id: 'tech_weaver_bio_anti_evasion_3_to_tech_weaver_bio_anti_evasion_4', source: 'tech_weaver_bio_anti_evasion_3', target: 'tech_weaver_bio_anti_evasion_4' } },
{ data: { id: 'tech_weaver_bio_anti_fire_rate_3_to_tech_weaver_bio_anti_fire_rate_4', source: 'tech_weaver_bio_anti_fire_rate_3', target: 'tech_weaver_bio_anti_fire_rate_4' } },
{ data: { id: 'tech_cruisers_to_tech_battleships', source: 'tech_cruisers', target: 'tech_battleships' } },
{ data: { id: 'tech_cruiser_hull_1_to_tech_cruiser_hull_2', source: 'tech_cruiser_hull_1', target: 'tech_cruiser_hull_2' } },
{ data: { id: 'tech_battleships_to_tech_battleship_build_speed', source: 'tech_battleships', target: 'tech_battleship_build_speed' } },
{ data: { id: 'tech_battleships_to_tech_battleship_hull_1', source: 'tech_battleships', target: 'tech_battleship_hull_1' } },
{ data: { id: 'tech_starbase_4_to_tech_starbase_5', source: 'tech_starbase_4', target: 'tech_starbase_5' } },
{ data: { id: 'tech_habitat_1_to_tech_habitat_2', source: 'tech_habitat_1', target: 'tech_habitat_2' } },
{ data: { id: 'tech_starbase_4_to_tech_habitat_2', source: 'tech_starbase_4', target: 'tech_habitat_2' } },
{ data: { id: 'tech_habitat_2_to_tech_habitat_3', source: 'tech_habitat_2', target: 'tech_habitat_3' } },
{ data: { id: 'tech_starbase_5_to_tech_habitat_3', source: 'tech_starbase_5', target: 'tech_habitat_3' } },
{ data: { id: 'tech_ship_armor_4_to_tech_ship_armor_5', source: 'tech_ship_armor_4', target: 'tech_ship_armor_5' } },
{ data: { id: 'tech_thrusters_3_to_tech_thrusters_4', source: 'tech_thrusters_3', target: 'tech_thrusters_4' } },
{ data: { id: 'tech_advanced_metallurgy_1_to_tech_advanced_metallurgy_2', source: 'tech_advanced_metallurgy_1', target: 'tech_advanced_metallurgy_2' } },
{ data: { id: 'tech_alloys_2_to_tech_advanced_metallurgy_2', source: 'tech_alloys_2', target: 'tech_advanced_metallurgy_2' } },
{ data: { id: 'tech_ship_armor_4_to_tech_advanced_metallurgy_2', source: 'tech_ship_armor_4', target: 'tech_advanced_metallurgy_2' } },
{ data: { id: 'tech_droid_workers_to_tech_synthetic_workers', source: 'tech_droid_workers', target: 'tech_synthetic_workers' } },
{ data: { id: 'tech_galactic_administration_to_tech_synthetic_workers', source: 'tech_galactic_administration', target: 'tech_synthetic_workers' } },
{ data: { id: 'tech_sapient_ai_to_tech_synthetic_workers', source: 'tech_sapient_ai', target: 'tech_synthetic_workers' } },
{ data: { id: 'tech_synthetic_workers_to_tech_synthetic_leaders', source: 'tech_synthetic_workers', target: 'tech_synthetic_leaders' } },
{ data: { id: 'tech_robomodding_to_tech_robot_assembly_complex', source: 'tech_robomodding', target: 'tech_robot_assembly_complex' } },
{ data: { id: 'tech_galactic_administration_to_tech_robot_assembly_complex', source: 'tech_galactic_administration', target: 'tech_robot_assembly_complex' } },
{ data: { id: 'tech_mass_drivers_4_to_tech_mass_drivers_5', source: 'tech_mass_drivers_4', target: 'tech_mass_drivers_5' } },
{ data: { id: 'tech_mass_drivers_5_to_tech_kinetic_artillery_2', source: 'tech_mass_drivers_5', target: 'tech_kinetic_artillery_2' } },
{ data: { id: 'tech_kinetic_artillery_1_to_tech_kinetic_artillery_2', source: 'tech_kinetic_artillery_1', target: 'tech_kinetic_artillery_2' } },
{ data: { id: 'tech_mass_drivers_4_to_tech_mass_accelerator_1', source: 'tech_mass_drivers_4', target: 'tech_mass_accelerator_1' } },
{ data: { id: 'tech_battleships_to_tech_mass_accelerator_1', source: 'tech_battleships', target: 'tech_mass_accelerator_1' } },
{ data: { id: 'tech_stingers_to_tech_mass_accelerator_1', source: 'tech_stingers', target: 'tech_mass_accelerator_1' } },
{ data: { id: 'tech_mass_drivers_5_to_tech_mass_accelerator_2', source: 'tech_mass_drivers_5', target: 'tech_mass_accelerator_2' } },
{ data: { id: 'tech_mass_accelerator_1_to_tech_mass_accelerator_2', source: 'tech_mass_accelerator_1', target: 'tech_mass_accelerator_2' } },
{ data: { id: 'tech_autocannons_2_to_tech_autocannons_3', source: 'tech_autocannons_2', target: 'tech_autocannons_3' } },
{ data: { id: 'tech_flak_batteries_2_to_tech_flak_batteries_3', source: 'tech_flak_batteries_2', target: 'tech_flak_batteries_3' } },
{ data: { id: 'tech_missiles_4_to_tech_missiles_5', source: 'tech_missiles_4', target: 'tech_missiles_5' } },
{ data: { id: 'tech_swarmer_missiles_1_to_tech_swarmer_missiles_2', source: 'tech_swarmer_missiles_1', target: 'tech_swarmer_missiles_2' } },
{ data: { id: 'tech_torpedoes_2_to_tech_torpedoes_3', source: 'tech_torpedoes_2', target: 'tech_torpedoes_3' } },
{ data: { id: 'tech_cloaking_2_to_tech_cloaking_3', source: 'tech_cloaking_2', target: 'tech_cloaking_3' } },
{ data: { id: 'tech_shields_4_to_tech_cloaking_3', source: 'tech_shields_4', target: 'tech_cloaking_3' } },
{ data: { id: 'tech_gravity_snare_capacity_2_to_tech_gravity_snare_capacity_3', source: 'tech_gravity_snare_capacity_2', target: 'tech_gravity_snare_capacity_3' } },
{ data: { id: 'tech_controlled_mutations_to_tech_controlled_mutations_2', source: 'tech_controlled_mutations', target: 'tech_controlled_mutations_2' } },
{ data: { id: 'tech_controlled_mutations_2_to_tech_unique_mutation_restorative_enzymes', source: 'tech_controlled_mutations_2', target: 'tech_unique_mutation_restorative_enzymes' } },
{ data: { id: 'tech_controlled_mutations_2_to_tech_unique_mutation_starborne_biology', source: 'tech_controlled_mutations_2', target: 'tech_unique_mutation_starborne_biology' } },
{ data: { id: 'tech_hyper_drive_3_to_tech_gateway_activation', source: 'tech_hyper_drive_3', target: 'tech_gateway_activation' } },
{ data: { id: 'tech_self_aware_logic_to_tech_sapient_ai', source: 'tech_self_aware_logic', target: 'tech_sapient_ai' } },
{ data: { id: 'tech_self_aware_logic_to_tech_positronic_implants', source: 'tech_self_aware_logic', target: 'tech_positronic_implants' } },
{ data: { id: 'tech_combat_computers_2_to_tech_combat_computers_3', source: 'tech_combat_computers_2', target: 'tech_combat_computers_3' } },
{ data: { id: 'tech_sapient_ai_to_tech_combat_computers_3', source: 'tech_sapient_ai', target: 'tech_combat_computers_3' } },
{ data: { id: 'tech_combat_computers_2_to_tech_combat_computers_autonomous', source: 'tech_combat_computers_2', target: 'tech_combat_computers_autonomous' } },
{ data: { id: 'tech_self_aware_logic_to_tech_synchronized_defences', source: 'tech_self_aware_logic', target: 'tech_synchronized_defences' } },
{ data: { id: 'tech_luxuries_2_to_tech_consumer_good_refinement_2', source: 'tech_luxuries_2', target: 'tech_consumer_good_refinement_2' } },
{ data: { id: 'tech_consumer_good_refinement_1_to_tech_consumer_good_refinement_2', source: 'tech_consumer_good_refinement_1', target: 'tech_consumer_good_refinement_2' } },
{ data: { id: 'tech_self_aware_logic_to_tech_consumer_good_refinement_2', source: 'tech_self_aware_logic', target: 'tech_consumer_good_refinement_2' } },
{ data: { id: 'tech_encryption_2_to_tech_encryption_3', source: 'tech_encryption_2', target: 'tech_encryption_3' } },
{ data: { id: 'tech_decryption_2_to_tech_decryption_3', source: 'tech_decryption_2', target: 'tech_decryption_3' } },
{ data: { id: 'tech_antimatter_power_to_tech_zero_point_power', source: 'tech_antimatter_power', target: 'tech_zero_point_power' } },
{ data: { id: 'tech_shields_4_to_tech_shields_5', source: 'tech_shields_4', target: 'tech_shields_5' } },
{ data: { id: 'tech_sensors_3_to_tech_sensors_4', source: 'tech_sensors_3', target: 'tech_sensors_4' } },
{ data: { id: 'tech_lasers_4_to_tech_lasers_5', source: 'tech_lasers_4', target: 'tech_lasers_5' } },
{ data: { id: 'tech_lasers_4_to_tech_energy_lance_1', source: 'tech_lasers_4', target: 'tech_energy_lance_1' } },
{ data: { id: 'tech_battleships_to_tech_energy_lance_1', source: 'tech_battleships', target: 'tech_energy_lance_1' } },
{ data: { id: 'tech_stingers_to_tech_energy_lance_1', source: 'tech_stingers', target: 'tech_energy_lance_1' } },
{ data: { id: 'tech_lasers_5_to_tech_energy_lance_2', source: 'tech_lasers_5', target: 'tech_energy_lance_2' } },
{ data: { id: 'tech_energy_lance_1_to_tech_energy_lance_2', source: 'tech_energy_lance_1', target: 'tech_energy_lance_2' } },
{ data: { id: 'tech_plasma_2_to_tech_plasma_3', source: 'tech_plasma_2', target: 'tech_plasma_3' } },
{ data: { id: 'tech_disruptors_3_to_tech_arc_emitter_1', source: 'tech_disruptors_3', target: 'tech_arc_emitter_1' } },
{ data: { id: 'tech_battleships_to_tech_arc_emitter_1', source: 'tech_battleships', target: 'tech_arc_emitter_1' } },
{ data: { id: 'tech_stingers_to_tech_arc_emitter_1', source: 'tech_stingers', target: 'tech_arc_emitter_1' } },
{ data: { id: 'tech_arc_emitter_1_to_tech_arc_emitter_2', source: 'tech_arc_emitter_1', target: 'tech_arc_emitter_2' } },
{ data: { id: 'tech_disruptors_2_to_tech_disruptors_3', source: 'tech_disruptors_2', target: 'tech_disruptors_3' } },
{ data: { id: 'tech_energy_torpedoes_1_to_tech_energy_torpedoes_2', source: 'tech_energy_torpedoes_1', target: 'tech_energy_torpedoes_2' } },
{ data: { id: 'tech_pd_tracking_2_to_tech_pd_tracking_3', source: 'tech_pd_tracking_2', target: 'tech_pd_tracking_3' } },
{ data: { id: 'tech_colonial_centralization_to_tech_galactic_markets', source: 'tech_colonial_centralization', target: 'tech_galactic_markets' } },
{ data: { id: 'tech_interstellar_economics_to_tech_galactic_markets', source: 'tech_interstellar_economics', target: 'tech_galactic_markets' } },
{ data: { id: 'tech_nano_vitality_crops_to_tech_nutrient_replication', source: 'tech_nano_vitality_crops', target: 'tech_nutrient_replication' } },
{ data: { id: 'tech_colonization_4_to_tech_colonization_5', source: 'tech_colonization_4', target: 'tech_colonization_5' } },
{ data: { id: 'tech_terrestrial_sculpting_to_tech_climate_restoration', source: 'tech_terrestrial_sculpting', target: 'tech_climate_restoration' } },
{ data: { id: 'tech_gene_tailoring_to_tech_gene_seed_purification', source: 'tech_gene_tailoring', target: 'tech_gene_seed_purification' } },
{ data: { id: 'tech_epigenetic_triggers_to_tech_morphogenetic_field_mastery', source: 'tech_epigenetic_triggers', target: 'tech_morphogenetic_field_mastery' } },
{ data: { id: 'tech_selected_lineages_to_tech_capacity_boosters', source: 'tech_selected_lineages', target: 'tech_capacity_boosters' } },
{ data: { id: 'tech_doctrine_fleet_size_3_to_tech_doctrine_fleet_size_4', source: 'tech_doctrine_fleet_size_3', target: 'tech_doctrine_fleet_size_4' } },
{ data: { id: 'tech_doctrine_navy_size_3_to_tech_doctrine_navy_size_4', source: 'tech_doctrine_navy_size_3', target: 'tech_doctrine_navy_size_4' } },
{ data: { id: 'tech_telepathy_to_tech_precognition_interface', source: 'tech_telepathy', target: 'tech_precognition_interface' } },
{ data: { id: 'tech_telepathy_to_tech_thought_enforcement', source: 'tech_telepathy', target: 'tech_thought_enforcement' } },
{ data: { id: 'tech_galactic_ambitions_to_tech_manifest_destiny', source: 'tech_galactic_ambitions', target: 'tech_manifest_destiny' } },
{ data: { id: 'tech_interstellar_campaigns_to_tech_galactic_campaigns', source: 'tech_interstellar_campaigns', target: 'tech_galactic_campaigns' } },
{ data: { id: 'tech_galactic_administration_to_tech_planetary_infrastructure_2', source: 'tech_galactic_administration', target: 'tech_planetary_infrastructure_2' } },
{ data: { id: 'tech_ship_armor_4_to_tech_planetary_infrastructure_2', source: 'tech_ship_armor_4', target: 'tech_planetary_infrastructure_2' } },
{ data: { id: 'tech_planetary_infrastructure_1_to_tech_planetary_infrastructure_2', source: 'tech_planetary_infrastructure_1', target: 'tech_planetary_infrastructure_2' } },
{ data: { id: 'tech_subdermal_stimulation_to_tech_tracking_implants', source: 'tech_subdermal_stimulation', target: 'tech_tracking_implants' } },
{ data: { id: 'tech_galactic_bureaucracy_to_tech_tracking_implants', source: 'tech_galactic_bureaucracy', target: 'tech_tracking_implants' } },
{ data: { id: 'tech_consecration_fields_to_tech_transcendent_faith', source: 'tech_consecration_fields', target: 'tech_transcendent_faith' } },
{ data: { id: 'tech_galactic_administration_to_tech_transcendent_faith', source: 'tech_galactic_administration', target: 'tech_transcendent_faith' } },
{ data: { id: 'tech_galactic_administration_to_tech_capital_productivity_3', source: 'tech_galactic_administration', target: 'tech_capital_productivity_3' } },
{ data: { id: 'tech_capital_productivity_2_to_tech_capital_productivity_3', source: 'tech_capital_productivity_2', target: 'tech_capital_productivity_3' } },
{ data: { id: 'tech_node_reformatting_2_to_tech_node_reformatting_3', source: 'tech_node_reformatting_2', target: 'tech_node_reformatting_3' } },
{ data: { id: 'tech_node_culling_2_to_tech_node_culling_3', source: 'tech_node_culling_2', target: 'tech_node_culling_3' } },
{ data: { id: 'tech_robomodding_points_1_to_tech_robomodding_points_2', source: 'tech_robomodding_points_1', target: 'tech_robomodding_points_2' } },
{ data: { id: 'tech_synthetic_workers_to_tech_robomodding_points_2', source: 'tech_synthetic_workers', target: 'tech_robomodding_points_2' } },
{ data: { id: 'tech_binary_motivators_to_tech_nanite_assemblers', source: 'tech_binary_motivators', target: 'tech_nanite_assemblers' } },
{ data: { id: 'tech_galactic_administration_to_tech_nanite_assemblers', source: 'tech_galactic_administration', target: 'tech_nanite_assemblers' } },
{ data: { id: 'tech_binary_motivators_to_tech_mega_assembly', source: 'tech_binary_motivators', target: 'tech_mega_assembly' } },
{ data: { id: 'tech_galactic_administration_to_tech_mega_assembly', source: 'tech_galactic_administration', target: 'tech_mega_assembly' } },
{ data: { id: 'tech_adaptive_combat_algorithms_to_tech_biomechanics', source: 'tech_adaptive_combat_algorithms', target: 'tech_biomechanics' } },
{ data: { id: 'tech_titans_to_tech_colossus', source: 'tech_titans', target: 'tech_colossus' } },
{ data: { id: 'tech_colossus_to_tech_pk_cracker', source: 'tech_colossus', target: 'tech_pk_cracker' } },
{ data: { id: 'tech_colossus_to_tech_pk_shielder', source: 'tech_colossus', target: 'tech_pk_shielder' } },
{ data: { id: 'tech_colossus_to_tech_pk_neutron', source: 'tech_colossus', target: 'tech_pk_neutron' } },
{ data: { id: 'tech_colossus_to_tech_pk_godray', source: 'tech_colossus', target: 'tech_pk_godray' } },
{ data: { id: 'tech_colossus_to_tech_pk_nanobots', source: 'tech_colossus', target: 'tech_pk_nanobots' } },
{ data: { id: 'tech_weaver_bio_healing_4_to_tech_weaver_bio_healing_5', source: 'tech_weaver_bio_healing_4', target: 'tech_weaver_bio_healing_5' } },
{ data: { id: 'tech_weaver_bio_healing_5_to_tech_weaver_bio_healing_6', source: 'tech_weaver_bio_healing_5', target: 'tech_weaver_bio_healing_6' } },
{ data: { id: 'tech_weaver_bio_evasion_4_to_tech_weaver_bio_evasion_5', source: 'tech_weaver_bio_evasion_4', target: 'tech_weaver_bio_evasion_5' } },
{ data: { id: 'tech_weaver_bio_evasion_5_to_tech_weaver_bio_evasion_6', source: 'tech_weaver_bio_evasion_5', target: 'tech_weaver_bio_evasion_6' } },
{ data: { id: 'tech_weaver_bio_fire_rate_4_to_tech_weaver_bio_fire_rate_5', source: 'tech_weaver_bio_fire_rate_4', target: 'tech_weaver_bio_fire_rate_5' } },
{ data: { id: 'tech_weaver_bio_fire_rate_5_to_tech_weaver_bio_fire_rate_6', source: 'tech_weaver_bio_fire_rate_5', target: 'tech_weaver_bio_fire_rate_6' } },
{ data: { id: 'tech_weaver_bio_confuser_4_to_tech_weaver_bio_confuser_5', source: 'tech_weaver_bio_confuser_4', target: 'tech_weaver_bio_confuser_5' } },
{ data: { id: 'tech_weaver_bio_confuser_5_to_tech_weaver_bio_confuser_6', source: 'tech_weaver_bio_confuser_5', target: 'tech_weaver_bio_confuser_6' } },
{ data: { id: 'tech_weaver_bio_anti_evasion_4_to_tech_weaver_bio_anti_evasion_5', source: 'tech_weaver_bio_anti_evasion_4', target: 'tech_weaver_bio_anti_evasion_5' } },
{ data: { id: 'tech_weaver_bio_anti_evasion_5_to_tech_weaver_bio_anti_evasion_6', source: 'tech_weaver_bio_anti_evasion_5', target: 'tech_weaver_bio_anti_evasion_6' } },
{ data: { id: 'tech_weaver_bio_anti_fire_rate_4_to_tech_weaver_bio_anti_fire_rate_5', source: 'tech_weaver_bio_anti_fire_rate_4', target: 'tech_weaver_bio_anti_fire_rate_5' } },
{ data: { id: 'tech_weaver_bio_anti_fire_rate_5_to_tech_weaver_bio_anti_fire_rate_6', source: 'tech_weaver_bio_anti_fire_rate_5', target: 'tech_weaver_bio_anti_fire_rate_6' } },
{ data: { id: 'tech_battleships_to_tech_titans', source: 'tech_battleships', target: 'tech_titans' } },
{ data: { id: 'tech_stinger_growth_2_to_tech_titans', source: 'tech_stinger_growth_2', target: 'tech_titans' } },
{ data: { id: 'tech_starbase_5_to_tech_juggernaut', source: 'tech_starbase_5', target: 'tech_juggernaut' } },
{ data: { id: 'tech_battleships_to_tech_juggernaut', source: 'tech_battleships', target: 'tech_juggernaut' } },
{ data: { id: 'tech_harbinger_growth_2_to_tech_juggernaut', source: 'tech_harbinger_growth_2', target: 'tech_juggernaut' } },
{ data: { id: 'tech_battleship_hull_1_to_tech_battleship_hull_2', source: 'tech_battleship_hull_1', target: 'tech_battleship_hull_2' } },
{ data: { id: 'tech_titans_to_tech_titan_hull_1', source: 'tech_titans', target: 'tech_titan_hull_1' } },
{ data: { id: 'tech_titan_hull_1_to_tech_titan_hull_2', source: 'tech_titan_hull_1', target: 'tech_titan_hull_2' } },
{ data: { id: 'tech_armor_hardeners_1_to_tech_armor_hardeners_2', source: 'tech_armor_hardeners_1', target: 'tech_armor_hardeners_2' } },
{ data: { id: 'tech_mine_living_metal_to_tech_armor_hardeners_2', source: 'tech_mine_living_metal', target: 'tech_armor_hardeners_2' } },
{ data: { id: 'tech_mineral_purification_2_to_tech_repeatable_improved_tile_mineral_output', source: 'tech_mineral_purification_2', target: 'tech_repeatable_improved_tile_mineral_output' } },
{ data: { id: 'tech_defense_platform_hull_1_to_tech_repeatable_improved_military_station_damage', source: 'tech_defense_platform_hull_1', target: 'tech_repeatable_improved_military_station_damage' } },
{ data: { id: 'tech_defense_platform_hull_1_to_tech_repeatable_improved_military_station_health', source: 'tech_defense_platform_hull_1', target: 'tech_repeatable_improved_military_station_health' } },
{ data: { id: 'tech_ship_armor_3_to_tech_repeatable_improved_armor_output', source: 'tech_ship_armor_3', target: 'tech_repeatable_improved_armor_output' } },
{ data: { id: 'tech_missiles_3_to_tech_repeatable_weapon_type_explosive_damage', source: 'tech_missiles_3', target: 'tech_repeatable_weapon_type_explosive_damage' } },
{ data: { id: 'tech_missiles_3_to_tech_repeatable_weapon_type_explosive_fire_rate', source: 'tech_missiles_3', target: 'tech_repeatable_weapon_type_explosive_fire_rate' } },
{ data: { id: 'tech_mass_drivers_3_to_tech_repeatable_weapon_type_kinetic_damage', source: 'tech_mass_drivers_3', target: 'tech_repeatable_weapon_type_kinetic_damage' } },
{ data: { id: 'tech_mass_drivers_3_to_tech_repeatable_weapon_type_kinetic_fire_rate', source: 'tech_mass_drivers_3', target: 'tech_repeatable_weapon_type_kinetic_fire_rate' } },
{ data: { id: 'tech_construction_templates_to_tech_repeatable_reduced_building_time', source: 'tech_construction_templates', target: 'tech_repeatable_reduced_building_time' } },
{ data: { id: 'tech_shields_5_to_tech_dark_matter_deflector', source: 'tech_shields_5', target: 'tech_dark_matter_deflector' } },
{ data: { id: 'tech_zero_point_power_to_tech_dark_matter_power_core', source: 'tech_zero_point_power', target: 'tech_dark_matter_power_core' } },
{ data: { id: 'tech_thrusters_4_to_tech_dark_matter_propulsion', source: 'tech_thrusters_4', target: 'tech_dark_matter_propulsion' } },
{ data: { id: 'tech_fe_affluence_1_to_tech_fe_affluence_2', source: 'tech_fe_affluence_1', target: 'tech_fe_affluence_2' } },
{ data: { id: 'tech_fe_nourishment_1_to_tech_fe_nourishment_2', source: 'tech_fe_nourishment_1', target: 'tech_fe_nourishment_2' } },
{ data: { id: 'tech_fe_fabricator_1_to_tech_fe_fabricator_2', source: 'tech_fe_fabricator_1', target: 'tech_fe_fabricator_2' } },
{ data: { id: 'tech_fe_singularity_1_to_tech_fe_singularity_2', source: 'tech_fe_singularity_1', target: 'tech_fe_singularity_2' } },
{ data: { id: 'tech_fe_forge_1_to_tech_fe_forge_2', source: 'tech_fe_forge_1', target: 'tech_fe_forge_2' } },
{ data: { id: 'tech_fe_dome_1_to_tech_fe_dome_2', source: 'tech_fe_dome_1', target: 'tech_fe_dome_2' } },
{ data: { id: 'tech_fe_fortress_1_to_tech_fe_fortress_2', source: 'tech_fe_fortress_1', target: 'tech_fe_fortress_2' } },
{ data: { id: 'tech_fe_administration_1_to_tech_fe_administration_2', source: 'tech_fe_administration_1', target: 'tech_fe_administration_2' } },
{ data: { id: 'tech_fe_assembly_1_to_tech_fe_assembly_2', source: 'tech_fe_assembly_1', target: 'tech_fe_assembly_2' } },
{ data: { id: 'tech_fe_clinic_1_to_tech_fe_clinic_2', source: 'tech_fe_clinic_1', target: 'tech_fe_clinic_2' } },
{ data: { id: 'tech_fe_security_1_to_tech_fe_security_2', source: 'tech_fe_security_1', target: 'tech_fe_security_2' } },
{ data: { id: 'tech_fe_market_1_to_tech_fe_market_2', source: 'tech_fe_market_1', target: 'tech_fe_market_2' } },
{ data: { id: 'tech_fe_silo_1_to_tech_fe_silo_2', source: 'tech_fe_silo_1', target: 'tech_fe_silo_2' } },
{ data: { id: 'tech_fe_entertainment_1_to_tech_fe_entertainment_2', source: 'tech_fe_entertainment_1', target: 'tech_fe_entertainment_2' } },
{ data: { id: 'tech_fe_lab_1_to_tech_fe_lab_2', source: 'tech_fe_lab_1', target: 'tech_fe_lab_2' } },
{ data: { id: 'tech_fe_mine_1_to_tech_fe_mine_2', source: 'tech_fe_mine_1', target: 'tech_fe_mine_2' } },
{ data: { id: 'tech_dark_matter_deflector_to_tech_cloaking_dark_matter', source: 'tech_dark_matter_deflector', target: 'tech_cloaking_dark_matter' } },
{ data: { id: 'tech_cloaking_3_to_tech_cloaking_dark_matter', source: 'tech_cloaking_3', target: 'tech_cloaking_dark_matter' } },
{ data: { id: 'tech_psi_jump_drive_1_to_tech_cloaking_psi', source: 'tech_psi_jump_drive_1', target: 'tech_cloaking_psi' } },
{ data: { id: 'tech_detection_array_to_tech_dark_matter_detection', source: 'tech_detection_array', target: 'tech_dark_matter_detection' } },
{ data: { id: 'tech_mine_dark_matter_to_tech_dark_matter_detection', source: 'tech_mine_dark_matter', target: 'tech_dark_matter_detection' } },
{ data: { id: 'tech_starbase_5_to_tech_mega_engineering', source: 'tech_starbase_5', target: 'tech_mega_engineering' } },
{ data: { id: 'tech_zero_point_power_to_tech_mega_engineering', source: 'tech_zero_point_power', target: 'tech_mega_engineering' } },
{ data: { id: 'tech_battleships_to_tech_mega_engineering', source: 'tech_battleships', target: 'tech_mega_engineering' } },
{ data: { id: 'tech_stingers_to_tech_mega_engineering', source: 'tech_stingers', target: 'tech_mega_engineering' } },
{ data: { id: 'tech_mega_engineering_to_tech_science_nexus', source: 'tech_mega_engineering', target: 'tech_science_nexus' } },
{ data: { id: 'tech_mega_engineering_to_tech_sentry_array', source: 'tech_mega_engineering', target: 'tech_sentry_array' } },
{ data: { id: 'tech_mega_engineering_to_tech_strategic_coordination', source: 'tech_mega_engineering', target: 'tech_strategic_coordination' } },
{ data: { id: 'tech_mega_engineering_to_tech_interstellar_assembly', source: 'tech_mega_engineering', target: 'tech_interstellar_assembly' } },
{ data: { id: 'tech_mega_engineering_to_tech_mega_art', source: 'tech_mega_engineering', target: 'tech_mega_art' } },
{ data: { id: 'tech_gateway_activation_to_tech_gateway_construction', source: 'tech_gateway_activation', target: 'tech_gateway_construction' } },
{ data: { id: 'tech_mega_engineering_to_tech_gateway_construction', source: 'tech_mega_engineering', target: 'tech_gateway_construction' } },
{ data: { id: 'tech_mega_engineering_to_tech_dyson_sphere', source: 'tech_mega_engineering', target: 'tech_dyson_sphere' } },
{ data: { id: 'tech_mega_engineering_to_tech_matter_decompressor', source: 'tech_mega_engineering', target: 'tech_matter_decompressor' } },
{ data: { id: 'tech_mega_engineering_to_tech_ring_world', source: 'tech_mega_engineering', target: 'tech_ring_world' } },
{ data: { id: 'tech_mega_engineering_to_tech_mega_shipyard', source: 'tech_mega_engineering', target: 'tech_mega_shipyard' } },
{ data: { id: 'tech_shield_hardeners_1_to_tech_shield_hardeners_2', source: 'tech_shield_hardeners_1', target: 'tech_shield_hardeners_2' } },
{ data: { id: 'tech_mine_zro_to_tech_shield_hardeners_2', source: 'tech_mine_zro', target: 'tech_shield_hardeners_2' } },
{ data: { id: 'tech_zero_point_power_to_tech_jump_drive_1', source: 'tech_zero_point_power', target: 'tech_jump_drive_1' } },
{ data: { id: 'tech_power_plant_3_to_tech_repeatable_improved_tile_energy_output', source: 'tech_power_plant_3', target: 'tech_repeatable_improved_tile_energy_output' } },
{ data: { id: 'tech_shields_4_to_tech_repeatable_improved_shield_output', source: 'tech_shields_4', target: 'tech_repeatable_improved_shield_output' } },
{ data: { id: 'tech_lasers_4_to_tech_repeatable_weapon_type_energy_damage', source: 'tech_lasers_4', target: 'tech_repeatable_weapon_type_energy_damage' } },
{ data: { id: 'tech_lasers_2_to_tech_repeatable_weapon_type_energy_fire_rate', source: 'tech_lasers_2', target: 'tech_repeatable_weapon_type_energy_fire_rate' } },
{ data: { id: 'tech_doctrine_fleet_size_4_to_tech_doctrine_fleet_size_5', source: 'tech_doctrine_fleet_size_4', target: 'tech_doctrine_fleet_size_5' } },
{ data: { id: 'tech_precognition_interface_to_tech_psi_jump_drive_1', source: 'tech_precognition_interface', target: 'tech_psi_jump_drive_1' } },
{ data: { id: 'tech_galactic_campaigns_to_tech_existential_campaigns', source: 'tech_galactic_campaigns', target: 'tech_existential_campaigns' } },
{ data: { id: 'tech_psionic_theory_to_tech_psionic_shield', source: 'tech_psionic_theory', target: 'tech_psionic_shield' } },
{ data: { id: 'tech_psionic_theory_to_tech_covenant_composer', source: 'tech_psionic_theory', target: 'tech_covenant_composer' } },
{ data: { id: 'tech_psionic_theory_to_tech_covenant_eater', source: 'tech_psionic_theory', target: 'tech_covenant_eater' } },
{ data: { id: 'tech_psionic_theory_to_tech_covenant_instrument', source: 'tech_psionic_theory', target: 'tech_covenant_instrument' } },
{ data: { id: 'tech_psionic_theory_to_tech_covenant_whisperers', source: 'tech_psionic_theory', target: 'tech_covenant_whisperers' } },
{ data: { id: 'tech_gene_crops_to_tech_repeatable_improved_tile_food_output', source: 'tech_gene_crops', target: 'tech_repeatable_improved_tile_food_output' } },
{ data: { id: 'tech_galactic_bureaucracy_to_tech_repeatable_improved_core_system_cap', source: 'tech_galactic_bureaucracy', target: 'tech_repeatable_improved_core_system_cap' } },
{ data: { id: 'tech_combat_training_to_tech_repeatable_improved_army_damage', source: 'tech_combat_training', target: 'tech_repeatable_improved_army_damage' } },
{ data: { id: 'tech_combat_training_to_tech_repeatable_improved_army_health', source: 'tech_combat_training', target: 'tech_repeatable_improved_army_health' } },
{ data: { id: 'tech_vitality_boosters_to_tech_repeatable_improved_leader_life_span', source: 'tech_vitality_boosters', target: 'tech_repeatable_improved_leader_life_span' } },
{ data: { id: 'tech_doctrine_navy_size_4_to_tech_repeatable_naval_cap', source: 'tech_doctrine_navy_size_4', target: 'tech_repeatable_naval_cap' } },
{ data: { id: 'tech_doctrine_fleet_size_5_to_tech_repeatable_command_limit', source: 'tech_doctrine_fleet_size_5', target: 'tech_repeatable_command_limit' } },
{ data: { id: 'tech_galactic_ambitions_to_tech_repeatable_improved_starbase_capacity', source: 'tech_galactic_ambitions', target: 'tech_repeatable_improved_starbase_capacity' } },
{ data: { id: 'tech_strike_craft_3_to_tech_repeatable_weapon_type_strike_craft_fire_damage', source: 'tech_strike_craft_3', target: 'tech_repeatable_weapon_type_strike_craft_fire_damage' } },
{ data: { id: 'tech_strike_craft_3_to_tech_repeatable_weapon_type_strike_craft_fire_rate', source: 'tech_strike_craft_3', target: 'tech_repeatable_weapon_type_strike_craft_fire_rate' } },
{ data: { id: 'tech_space_construction_to_tech_mine_living_metal', source: 'tech_space_construction', target: 'tech_mine_living_metal' } },
    ];
}

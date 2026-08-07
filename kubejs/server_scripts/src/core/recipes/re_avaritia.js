/**
 * @file Recipes for Re:Avaritia.
 * @version 1201-OMNIA
 * @author CelestialAbyss <https:github.com/CelestialAbyss> Modpack lead
 */

// requires: avaritia
// requires: kubejs_create

ServerEvents.recipes(event => {
  /**
   * STEP 1
   * NEUTRON COLLECTION
   */
  // T1 Neutron Collector
  event.recipes.create.mechanical_crafting('avaritia:neutron_collector', [
    'BBBBBBBBB',
    'B BBBBB B',
    'B  RRR  B',
    'C RRRRR C',
    'B RRTRR B',
    'C RRRRR C',
    'B  RRR  B',
    'B       B',
    'BBBCBCBBB'
  ], {
    B: 'minecraft:iron_block',
    C: 'avaritia:crystal_matrix_ingot',
    R: 'kubejs:redstone_singularity',
    T: 'kubejs:final_singularity_stage_one'
  }).id('kubejs:avaritia/mechanical_crafting/neutron_collector')
  event.recipes.avaritia.shaped_table(4, 'avaritia:neutron_collector', [
    'BBBBBBBBB',
    'B BBBBB B',
    'B  RRR  B',
    'C RRRRR C',
    'B RRTRR B',
    'C RRRRR C',
    'B  RRR  B',
    'B       B',
    'BBBCBCBBB'
  ], {
    B: 'minecraft:iron_block',
    C: 'avaritia:crystal_matrix_ingot',
    R: 'kubejs:redstone_singularity',
    T: 'kubejs:final_singularity_stage_one'
  }).id('avaritia:neutron_collector')
  // T2 Neutron Collector
  event.recipes.create.mechanical_crafting('avaritia:dense_neutron_collector', [
    'PPL   LPP',
    'PR     RP',
    'L NEEEN L',
    '  ECCCE  ',
    '  ECSCE  ',
    '  ECCCE  ',
    'L NEEEN L',
    'PR     RP',
    'PPL   LPP'
  ], {
    P: 'kubejs:ender_pearl_singularity',
    L: 'avaritia:diamond_lattice',
    R: 'kubejs:final_singularity_stage_two',
    N: 'avaritia:neutron_ingot',
    E: 'kubejs:emerald_singularity',
    C: 'avaritia:neutron_collector',
    S: 'avaritia:endest_pearl'
  }).id('kubejs:avaritia/mechanical_crafting/dense_neutron_collector')
  event.recipes.avaritia.shaped_table(4, 'avaritia:dense_neutron_collector', [
    'PPL   LPP',
    'PR     RP',
    'L NEEEN L',
    '  ECCCE  ',
    '  ECSCE  ',
    '  ECCCE  ',
    'L NEEEN L',
    'PR     RP',
    'PPL   LPP'
  ], {
    P: 'kubejs:ender_pearl_singularity',
    L: 'avaritia:diamond_lattice',
    R: 'kubejs:final_singularity_stage_two',
    N: 'avaritia:neutron_ingot',
    E: 'kubejs:emerald_singularity',
    C: 'avaritia:neutron_collector',
    S: 'avaritia:endest_pearl'
  }).id('avaritia:dense_neutron_collector')
  // T3 Neutron Collector
  event.recipes.create.mechanical_crafting('avaritia:denser_neutron_collector', [
    'GPP F PPG',
    'PUU   UUP',
    'PUABBBAUP',
    '  BCCCB  ',
    'F BCBCB F',
    '  BCCCB  ',
    'PUABBBAUP',
    'PUU   UUP',
    'GPP F PPG'
  ], {
    G: 'avaritia:neutron_gear',
    P: 'avaritia:neutron_pile',
    A: 'kubejs:gold_singularity',
    F: 'kubejs:final_singularity_stage_three',
    U: 'avaritia:blaze_cube',
    B: 'avaritia:blaze_cube_block',
    C: 'avaritia:neutron_collector'
  }).id('kubejs:mechanical_crafting/avaritia/denser_neutron_collector')
  event.recipes.avaritia.shaped_table(4, 'avaritia:denser_neutron_collector', [
    'GPP F PPG',
    'PUU   UUP',
    'PUABBBAUP',
    '  BCCCB  ',
    'F BCBCB F',
    '  BCCCB  ',
    'PUABBBAUP',
    'PUU   UUP',
    'GPP F PPG'
  ], {
    G: 'avaritia:neutron_gear',
    P: 'avaritia:neutron_pile',
    A: 'kubejs:gold_singularity',
    F: 'kubejs:final_singularity_stage_three',
    U: 'avaritia:blaze_cube',
    B: 'avaritia:blaze_cube_block',
    C: 'avaritia:neutron_collector'
  }).id('avaritia:denser_neutron_collector')
  // T4 Neutron Collector
  event.recipes.create.mechanical_crafting('avaritia:densest_neutron_collector', [
    'GG     GG',
    'GBBBBBBBG',
    ' BRBBBRB ',
    ' BBCCCBB ',
    ' BBCOCBB ',
    ' BBCCCBB ',
    ' BRBBBRB ',
    'GBBBBBBBG',
    'GG     GG'
  ], {
    G: 'avaritia:neutron_gear',
    B: 'avaritia:neutron',
    R: 'kubejs:final_singularity_stage_four',
    O: 'kubejs:command_block',
    C: 'avaritia:denser_neutron_collector'
  }).id('kubejs:mechanical_crafting/avaritia/densest_neutron_collector')
  event.recipes.avaritia.shaped_table(4, 'avaritia:densest_neutron_collector', [
    'GG     GG',
    'GBBBBBBBG',
    ' BRBBBRB ',
    ' BBCCCBB ',
    ' BBCOCBB ',
    ' BBCCCBB ',
    ' BRBBBRB ',
    'GBBBBBBBG',
    'GG     GG'
  ], {
    G: 'avaritia:neutron_gear',
    B: 'avaritia:neutron',
    R: 'kubejs:final_singularity_stage_four',
    O: 'kubejs:command_block',
    C: 'avaritia:denser_neutron_collector'
  }).id('avaritia:densest_neutron_collector')
  /**
   * STEP 2 - COMPRESSORS
   */
  // T1 Compressor
  event.recipes.create.mechanical_crafting('avaritia:neutron_compressor', [
    'IIIHHHIII',
    'C N   N C',
    'I N   N I',
    'C N   N C',
    'RNN O NNR',
    'C N   N C',
    'I N   N I',
    'C N   N C',
    'IIICICIII'
  ], {
    C: 'avaritia:crystal_matrix_ingot',
    H: 'minecraft:hopper',
    I: 'minecraft:iron_block',
    N: 'avaritia:neutron_ingot',
    O: 'avaritia:neutron',
    R: 'minecraft:redstone_block'
  }).id('kubejs:mechanical_crafting/avaritia/neutron_compressor')
  // T2 Compressor
  event.recipes.create.mechanical_crafting('avaritia:dense_neutron_compressor', [
    'AAC   CAA',
    'AB     BA',
    'C DEEED C',
    '  EGGGE  ',
    '  EGFGE  ',
    '  EGGGE  ',
    'C DEEED C',
    'AB     BA',
    'AAC   CAA'
  ], {
    A: 'minecraft:ender_pearl',
    B: 'minecraft:nether_star',
    C: 'avaritia:diamond_lattice',
    D: 'avaritia:neutron_ingot',
    E: 'minecraft:emerald_block',
    F: 'avaritia:endest_pearl',
    G: 'avaritia:neutron_compressor'
  }).id('kubejs:mechanical_crafting/avaritia/dense_neutron_compressor')
  // T3 Compressor
  event.recipes.create.mechanical_crafting('avaritia:denser_neutron_compressor', [
    'ABB F BBA',
    'BCC   CCB',
    'BCDEEEDCB',
    '  EGGGE  ',
    'F EGEGE F',
    '  EGGGE  ',
    'BCDEEEDCB',
    'BCC   CCB',
    'ABB F BBA'
  ], {
    A: 'avaritia:neutron_gear',
    B: 'avaritia:neutron_pile',
    C: 'avaritia:blaze_cube',
    D: 'kubejs:gold_singularity',
    E: 'avaritia:blaze_cube_block',
    F: 'minecraft:gold_block',
    G: 'avaritia:dense_neutron_compressor'
  }).id('kubejs:mechanical_crafting/avaritia/denser_neutron_compressor')
  event.recipes.avaritia.shaped_table(4, 'avaritia:denser_neutron_compressor', [
    'ABB F BBA',
    'BCC   CCB',
    'BCDEEEDCB',
    '  EGGGE  ',
    'F EGEGE F',
    '  EGGGE  ',
    'BCDEEEDCB',
    'BCC   CCB',
    'ABB F BBA'
  ], {
    A: 'avaritia:neutron_gear',
    B: 'avaritia:neutron_pile',
    C: 'avaritia:blaze_cube',
    D: 'kubejs:gold_singularity',
    E: 'avaritia:blaze_cube_block',
    F: 'minecraft:gold_block',
    G: 'avaritia:dense_neutron_compressor'
  }).id('avaritia:denser_neutron_compressor')
  // T4 Compressor
  event.recipes.create.mechanical_crafting('avaritia:densest_neutron_compressor', [
    'CC     CC',
    'C  BBB  C',
    '  AAAAA  ',
    ' BAXXXAB ',
    ' BAXYXAB ',
    ' BAXXXAB ',
    '  AAAAA  ',
    'C  BBB  C',
    'CC     CC'
  ], {
    A: 'minecraft:redstone_block',
    B: 'avaritia:neutron_ingot',
    C: 'avaritia:neutron_gear',
    X: 'avaritia:denser_neutron_compressor',
    Y: 'kubejs:final_singularity_stage_one'
  }).id('kubejs:mechanical_crafter/avaritia/densest_neutron_compressor')
  event.recipes.avaritia.shaped_table(4, 'avaritia:densest_neutron_compressor', [
    'CC     CC',
    'C  BBB  C',
    '  AAAAA  ',
    ' BAXXXAB ',
    ' BAXYXAB ',
    ' BAXXXAB ',
    '  AAAAA  ',
    'C  BBB  C',
    'CC     CC'
  ], {
    A: 'minecraft:redstone_block',
    B: 'avaritia:neutron_ingot',
    C: 'avaritia:neutron_gear',
    X: 'avaritia:denser_neutron_compressor',
    Y: 'kubejs:final_singularity_stage_one'
  }).id('avaritia:densest_neutron_compressor')
  /**
   * STEP 3 - Compression to Singularities
   */
  event.recipes.avaritia.compressor(
    'minecraft:amethyst_block',
    'kubejs:amethyst_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/amethyst_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:blue_ice',
    'kubejs:blue_ice_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/blue_ice_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:coal_block',
    'kubejs:coal_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/coal_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:coarse_dirt',
    'kubejs:coarse_dirt_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/coarse_dirt_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:cobblestone',
    'kubejs:cobblestone_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/cobblestone_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:copper_block',
    'kubejs:copper_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/copper_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:diamond_block',
    'kubejs:diamond_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/diamond_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:emerald_block',
    'kubejs:emerald_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/emerald_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:end_crystal',
    'kubejs:end_crystal_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/end_crystal_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:ender_pearl',
    'kubejs:ender_pearl_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/ender_pearl_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:glowstone',
    'kubejs:glowstone_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/glowstone_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:gold_block',
    'kubejs:gold_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/gold_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:gunpowder',
    'kubejs:gunpowder_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/gunpowder_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:honey_block',
    'kubejs:honey_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/honey_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:iron_block',
    'kubejs:iron_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/iron_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:lapis_block',
    'kubejs:lapis_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/lapis_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:netherite_block',
    'kubejs:netherite_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/netherite_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:quartz_block',
    'kubejs:quartz_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/quartz_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:red_sand',
    'kubejs:red_sand_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/red_sand_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:redstone_block',
    'kubejs:redstone_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/redstone_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:sand',
    'kubejs:sand_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/sand_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:sea_lantern',
    'kubejs:sea_lantern_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/sea_lantern_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:soul_sand',
    'kubejs:soul_sand_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/soul_sand_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:soul_soil',
    'kubejs:soul_soil_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/soul_soil_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:tinted_glass',
    'kubejs:tinted_glass_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/tinted_glass_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:tnt',
    'kubejs:tnt_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/tnt_singularity')
  event.recipes.avaritia.compressor(
    'create:andesite_alloy',
    'kubejs:andesite_alloy_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/andesite_alloy_singularity')
  event.recipes.avaritia.compressor(
    'create:brass_block',
    'kubejs:brass_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/brass_singularity')
  event.recipes.avaritia.compressor(
    'create:builders_tea',
    'kubejs:builders_tea_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/builders_tea_singularity')
  event.recipes.avaritia.compressor(
    'create:bar_of_chocolate',
    'kubejs:chocolate_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/chocolate_singularity')
  event.recipes.avaritia.compressor(
    'create:electron_tube',
    'kubejs:electron_tube_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/electron_tube_singularity')
  event.recipes.avaritia.compressor(
    'create:framed_glass',
    'kubejs:framed_glass_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/framed_glass_singularity')
  event.recipes.avaritia.compressor(
    'create:precision_mechanism',
    'kubejs:precision_mechanism_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/precision_mechanism_singularity')
  event.recipes.avaritia.compressor(
    'create:rose_quartz',
    'kubejs:rose_quartz_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/rose_quartz_singularity')
  event.recipes.avaritia.compressor(
    'create:sturdy_sheet',
    'kubejs:sturdy_sheet_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/sturdy_sheet_singularity')
  event.recipes.avaritia.compressor(
    'create:track',
    'kubejs:track_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/track_singularity')
  event.recipes.avaritia.compressor(
    'create:zinc_block',
    'kubejs:zinc_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/zinc_singularity')
  event.recipes.avaritia.compressor(
    'create:blaze_cake',
    'kubejs:blaze_cake_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/blaze_cake_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:black_concrete',
    'kubejs:concrete_black_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/black_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:blue_concrete',
    'kubejs:concrete_blue_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/blue_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:brown_concrete',
    'kubejs:concrete_brown_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/brown_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:cyan_concrete',
    'kubejs:concrete_cyan_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/cyan_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:gray_concrete',
    'kubejs:concrete_gray_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/gray_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:green_concrete',
    'kubejs:concrete_green_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/green_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:light_blue_concrete',
    'kubejs:concrete_light_blue_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/light_blue_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:light_gray_concrete',
    'kubejs:concrete_light_gray_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/light_gray_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:lime_concrete',
    'kubejs:concrete_lime_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/lime_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:magenta_concrete',
    'kubejs:concrete_magenta_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/magenta_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:orange_concrete',
    'kubejs:concrete_orange_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/orange_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:pink_concrete',
    'kubejs:concrete_pink_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/pink_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:purple_concrete',
    'kubejs:concrete_purple_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/purple_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:red_concrete',
    'kubejs:concrete_red_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/red_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:white_concrete',
    'kubejs:concrete_white_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/white_concrete_singularity')
  event.recipes.avaritia.compressor(
    'minecraft:yellow_concrete',
    'kubejs:concrete_yellow_singularity',
    64, 8
  ).id('kubejs:avaritia/compressor/yellow_concrete_singularity')
  if (Platform.isLoaded('ae2')) {
    event.recipes.avaritia.compressor(
      'ae2:sky_dust',
      'kubejs:sky_stone_singularity',
      25, 8
    ).id('kubejs:avaritia/compressor/sky_stone_singularity')
  }
  /**
   * STEP 4
   */
  /**
   * Eternal Singularity
   */
  event.recipes.avaritia.eternal_singularity([
    'kubejs:final_singularity',
    'kubejs:chromatic_concrete_singularity',
    'kubejs:monochromatic_singularity',
    'kubejs:blaze_cake_singularity',
    'kubejs:blueprint_shape',
    'kubejs:cpu_shape',
    'kubejs:emitter_shape',
    'kubejs:star_of_light_shape',
    'kubejs:watermelon_shape'
  ]).id('avaritia:eternal_singularity')
  event.recipes.create.crushing([
    '4x avaritia:record_fragment',
    Item.of('4x avaritia:record_fragment').withChance(0.25)
  ],
    '#minecraft:music_discs'
  ).processingTime(100).id('avaritia:record_fragment')
  // Infinity Catalyst recipe is automatically generated.
  event.recipes.create.mechanical_crafting('avaritia:infinity_ingot', [
    'NNNNNNNNN',
    'NMCCMCCMN',
    'NCMMCMMCN',
    'NMCCMCCMN',
    'NNNNNNNNN'
  ], {
    N: 'avaritia:neutron_ingot',
    M: 'avaritia:crystal_matrix_ingot',
    C: 'avaritia:infinity_catalyst'
  }).id('kubejs:mechanical_crafting/avaritia/infinity_ingot')
  /**
   * EVERYTHING ELSE
   */
  event.recipes.create.deploying('avaritia:soul_farmland', [
    'minecraft:soul_soil',
    '#minecraft:hoes'
  ]).keepHeldItem().id('kubejs:deploying/avaritia/soul_farmland')
  event.remove({ id: 'avaritia:crystal_matrix_ingot_normal' })
  event.recipes.create.mechanical_crafting('avaritia:crystal_matrix_ingot', [
    'LNL',
    'LNL'
  ], {
    L: 'avaritia:diamond_lattice',
    N: ['minecraft:nether_star', 'minecraft:end_crystal']
  }).id('kubejs:mechanical_crafting/avaritia/crystal_matrix_ingot')
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "n": {
        "item": "avaritia:neutron_ingot"
      }
    },
    "pattern": [
      " n ",
      "n n",
      " n "
    ],
    "result": {
      "item": "avaritia:neutron_gear"
    },
    "show_notification": true
  }).id('avaritia:neutron_gear')
  event.recipes.create.mechanical_crafting('avaritia:endest_pearl', [
    '   EEE   ',
    ' EEPPPEE ',
    ' EPPPPPE ',
    'EPPPIPPPE',
    'EPPISIPPE',
    'EPPPIPPPE',
    ' EPPPPPE ',
    ' EEPPPEE ',
    '   EEE   '
  ], {
    E: 'minecraft:end_stone',
    P: 'minecraft:ender_pearl',
    I: 'avaritia:neutron_ingot',
    S: 'minecraft:nether_star'
  }).id('kubejs:mechanical_crafting/avaritia/endest_pearl')
  event.recipes.create.mechanical_crafting('avaritia:upgrade_smithing_template', [
    ' mmmMmmm ',
    ' mNNiNNm ',
    ' mNiIiNm ',
    'n123i456n',
    'n7C8T9C0n',
    'nSWHIsrhn',
    ' mNnInNm ',
    ' mNNiNNm ',
    ' mmmMmmm '
  ], {
    m: 'avaritia:crystal_matrix_ingot',
    M: 'avaritia:crystal_matrix',
    N: 'avaritia:neutron_ingot',
    n: 'avaritia:neutron_pile',
    i: 'avaritia:infinity_nugget',
    I: 'avaritia:infinity_catalyst',
    T: 'minecraft:smithing_template',
    '1': 'minecraft:senty_armor_trim_smithing_template',
    '2': 'minecraft:dune_armor_trim_smithing_template',
    '3': 'minecraft:coast_armor_trim_smithing_template',
    '4': 'minecraft:wild_armor_trim_smithing_template',
    '5': 'minecraft:ward_armor_trim_smithing_template',
    '6': 'minecraft:eye_armor_trim_smithing_template',
    '7': 'minecraft:vex_armor_trim_smithing_template',
    '8': 'minecraft:tide_armor_trim_smithing_template',
    '9': 'minecraft:snout_armor_trim_smithing_template',
    '0': 'minecraft:rib_armor_trim_smithing_template',
    C: 'minecraft:snout_armor_trim_smithing_template',
    S: 'minecraft:spire_armor_trim_smithing_template',
    W: 'minecraft:wayfinder_armor_trim_smithing_template',
    H: 'minecraft:shaper_armor_trim_smithing_template',
    s: 'minecraft:silence_armor_trim_smithing_template',
    r: 'minecraft:raiser_armor_trim_smithing_template',
    h: 'minecraft:host_armor_trim_smithing_template'
  }).id('kubejs:mechanical_crafting/avaritia/upgrade_smithing_template')
  event.recipes.create.mechanical_crafting('2x avaritia:upgrade_smithing_template', [
    'MmmmmmM',
    'mnNNNnm',
    'mNCCCNm',
    'mNCSCNm',
    'mNCCCNm',
    'mnNNNnm',
    'MmmmmmM'
  ], {
    m: 'avaritia:crystal_matrix_ingot',
    M: 'avaritia:crystal_matrix',
    n: 'avaritia:neutron_pile',
    N: 'avaritia:neutron_ingot',
    C: 'avaritia:infinity_catalyst',
    S: 'avaritia:upgrade_smithing_template'
  }).id('kubejs:mechanical_crafting/avaritia/upgrade_smithing_template_duplicate')
  event.recipes.create.mechanical_crafting('avaritia:enhancement_core', [
    '   PPP   ',
    ' IPaaaPI ',
    ' PAyyyAP ',
    'PayyCyyaP',
    'PayCECyaP',
    'PayyCyyaP',
    ' PAyyyAP ',
    ' IPaaaPI ',
    '   PPP   '
  ], {
    P: 'avaritia:neutron_pile',
    I: 'avaritia:neutron_ingot',
    a: 'avaritia:crystal_matrix_ingot',
    A: 'avaritia:crystal_matrix',
    y: 'avaritia:infinity_nugget',
    C: 'avaritia:infinity_catalyst',
    E: 'avaritia:endest_pearl'
  }).id('kubejs:mechanical_crafting/avaritia/enhancement_core')
  event.recipes.create.mechanical_crafting('avaritia:infinity_upgrade', [
    ' aaadaaa ',
    'baeegeea ',
    'baegggea ',
    'bdiegeid ',
    'bdfehefdc',
    ' diegeidc',
    ' aedgdeac',
    ' aeegeeac',
    ' aaadaaa '
  ], {
    a: 'avaritia:neutron',
    b: 'avaritia:blaze_cube_block',
    c: 'avaritia:crystal_matrix_ingot',
    d: 'avaritia:neutron_ingot',
    e: 'avaritia:neutron_gear',
    f: 'avaritia:infinity_catalyst',
    g: 'avaritia:star_fuel',
    h: 'avaritia:eternal_singularity',
    i: 'avaritia:neutron_nugget'
  }).id('kubejs:mechanical_crafting/avaritia/infinity_upgrade')
  event.recipes.avaritia.extreme_smithing(
    'avaritia:infinity_clock',
    'avaritia:upgrade_smithing_template',
    'kubejs:chronokinesis',
    [
      'minecraft:enchanted_golden_apple',
      'avaritia:enhancement_core',
      'avaritia:eternal_singularity'
    ]
  ).id('avaritia:infinity_clock')
  // INFINITY ARMOR
  event.recipes.avaritia.shaped_table(4, 'avaritia:infinity_helmet', [
    ' AAAAAAA ',
    'ABBBDBBBA',
    'ABBBBBBBA',
    'ABBBBBBBA',
    'ACCCCCCCA',
    'ABBBBBBBA',
    'ABBBBBBBA',
    'ABBBBBBBA',
    '  BB BB  '
  ], {
    A: 'avaritia:neutron_ingot',
    B: 'avaritia:infinity_ingot',
    C: 'avaritia:infinity_catalyst',
    D: 'kubejs:final_helmet'
  }).id('avaritia:infinity_helmet')
  event.recipes.avaritia.shaped_table(4, 'avaritia:infinity_chestplate', [
    'CAA   AAC',
    'AAA   AAA',
    'AAA   AAA',
    ' ABBBBBA ',
    ' ABBDBBA ',
    ' ABBBBBA ',
    ' ABBBBBA ',
    '  AAAAA  '
  ], {
    A: 'avaritia:neutron_ingot',
    B: 'avaritia:infinity_ingot',
    C: 'avaritia:infinity_catalyst',
    D: 'kubejs:final_chestplate'
  }).id('avaritia:infinity_chestplate')
  event.recipes.avaritia.shaped_table(4, 'avaritia:infinity_pants', [
    'AAAAAAAAA',
    'ABBBDBBBA',
    'ABAAAAABA',
    'ABA   ABA',
    'ACA   ACA',
    'ABA   ABA',
    'ABA   ABA',
    'ABA   ABA',
    'AAA   AAA'
  ], {
    A: 'avaritia:neutron_ingot',
    B: 'avaritia:infinity_ingot',
    C: 'avaritia:infinity_catalyst',
    D: 'kubejs:final_leggings'
  }).id('avaritia:infinity_pants')
  event.recipes.avaritia.shaped_table(4, 'avaritia:infinity_boots', [
    ' AAA AAA ',
    ' ABA ABA ',
    ' ABADABA ',
    'AABA ABAA',
    'ABBA ABBA',
    'ACCA ACCA'
  ], {
    A: 'avaritia:neutron_ingot',
    B: 'avaritia:infinity_ingot',
    C: 'avaritia:infinity_catalyst',
    D: 'kubejs:final_boots'
  }).id('avaritia:infinity_boots')
})

AvaritiaEvents.singularity(event => {
  // Remove all Avaritia singularities.
  event.removeAll()
  // Remove all Avaritia Singularity recipes.
  event.removeAllRecipe()
})
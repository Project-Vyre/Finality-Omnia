/**
 * @file Server handler for Sophisticated Storage.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

// requires: sophisticatedstorage
// requires: kubejs_create
// ignored: false

// I apparently forgot I never commit this file sooo starting from scratch, again.

let sophisticated_wood = [
  'acacia',
  'birch',
  'crimson',
  'dark_oak',
  'jungle',
  'oak',
  'spruce',
  'warped',
  'mangrove',
  'cherry',
  'bamboo'
]

let itemIds = [
  'pickup',
  'filter',
  'magnet',
  'feeding',
  'compacting',
  'void',
  'hopper'
]

let singleStep = [
  'crafting',
  'stonecutter',
  'jukebox',
  'compression'
]

let autoIds = [
  'smelting',
  'smoking',
  'blasting'
]

ServerEvents.recipes(event => {
  for (let i = 0; i < itemIds.length; i++) {
    let element = itemIds[i];
    event.remove({ output: 'sophisticatedstorage:' + element + '_upgrade' })
    event.remove({ output: 'sophisticatedstorage:advanced_' + element + '_upgrade' })
  }
  for (let i = 0; i < singleStep.length; i++) {
    let element = singleStep[i];
    event.remove({ output: 'sophisticatedstorage:' + element + '_upgrade' })
  }
  for (let i = 0; i < autoIds.length; i++) {
    let element = autoIds[i];
    event.remove({ output: 'sophisticatedstorage:' + element + '_upgrade' })
    event.remove({ output: 'sophisticatedstorage:auto_' + element + '_upgrade' })
  }
  event.remove([
    { id: 'sophisticatedstorage:upgrade_base' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_1' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_1_plus' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_2' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_3' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_4' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_5' },
    { output: 'sophisticatedstorage:stack_upgrade_omega_tier' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_1_to_tier_1_plus_conversion' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_1_to_tier_2_conversion' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_1_to_tier_3_conversion' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_1_to_tier_4_conversion' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_1_to_tier_5_conversion' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_2_conversion' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_3_conversion' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_4_conversion' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_5_conversion' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_2_to_tier_3_conversion' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_2_to_tier_4_conversion' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_2_to_tier_5_conversion' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_3_to_tier_4_conversion' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_3_to_tier_5_conversion' },
    { output: 'sophisticatedstorage:stack_upgrade_tier_4_to_tier_5_conversion' },
    { output: 'sophisticatedstorage:basic_tier_upgrade' },
    { output: 'sophisticatedstorage:basic_to_copper_tier_upgrade' },
    { output: 'sophisticatedstorage:basic_to_iron_tier_upgrade' },
    { output: 'sophisticatedstorage:basic_to_gold_tier_upgrade' },
    { output: 'sophisticatedstorage:basic_to_diamond_tier_upgrade' },
    { output: 'sophisticatedstorage:basic_to_netherite_tier_upgrade' },
    { output: 'sophisticatedstorage:copper_to_iron_tier_upgrade' },
    { output: 'sophisticatedstorage:copper_to_gold_tier_upgrade' },
    { output: 'sophisticatedstorage:copper_to_diamond_tier_upgrade' },
    { output: 'sophisticatedstorage:copper_to_netherite_tier_upgrade' },
    { output: 'sophisticatedstorage:iron_to_gold_tier_upgrade' },
    { output: 'sophisticatedstorage:iron_to_diamond_tier_upgrade' },
    { output: 'sophisticatedstorage:iron_to_netherite_tier_upgrade' },
    { output: 'sophisticatedstorage:gold_to_diamond_tier_upgrade' },
    { output: 'sophisticatedstorage:gold_to_netherite_tier_upgrade' },
    { output: 'sophisticatedstorage:diamond_to_netherite_tier_upgrade' }
  ])
  /**
   * TIER UPGRADES
   */
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:upgrade_base', [
    'PSP',
    'SPS',
    'PSP'
  ], {
    P: '#minecraft:wooden_slabs',
    S: 'create:iron_sheet'
  }).id('kubejs:sophisticatedstorage/upgrade_base')
  event.recipes.minecraft.crafting_shapeless('sophisticatedstorage:basic_tier_upgrade', [
    'sophisticatedstorage:upgrade_base',
    'create:electron_tube'
  ]).id('kubejs:sophisticatedstorage/basic_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:basic_to_copper_tier_upgrade', [
    'CCC',
    'CBC',
    'CCC'
  ], {
    C: 'create:copper_sheet',
    B: 'sophisticatedstorage:basic_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/basic_to_copper_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:basic_to_iron_tier_upgrade', [
    'III',
    'IBI',
    'III'
  ], {
    I: 'create:iron_sheet',
    B: 'sophisticatedstorage:basic_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/basic_to_iron_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:basic_to_gold_tier_upgrade', [
    'GGG',
    'GIG',
    'GGG'
  ], {
    G: 'create:golden_sheet',
    I: 'sophisticatedstorage:basic_to_iron_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/basic_to_gold_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:basic_to_diamond_tier_upgrade', [
    'DDD',
    'DGD',
    'DDD'
  ], {
    D: 'minecraft:diamond',
    G: 'sophisticatedstorage:basic_to_gold_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/basic_to_diamond_tier_upgrade')
  event.recipes.minecraft.crafting_shapeless('sophisticatedstorage:basic_to_netherite_tier_upgrade', [
    'sophisticatedstorage:basic_to_diamond_tier_upgrade',
    'kubejs:netherite_sheet'
  ]).id('kubejs:sophisticatedstorage/basic_to_netherite_tier_upgrade')
  // Starting from copper tier
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:copper_to_iron_tier_upgrade', [
    ' S ',
    'SBS',
    ' S '
  ], {
    S: 'create:iron_sheet',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/copper_to_iron_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:copper_to_gold_tier_upgrade', [
    'GGG',
    'GCG',
    'GGG'
  ], {
    G: 'create:golden_sheet',
    C: 'sophisticatedstorage:copper_to_iron_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/copper_to_gold_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:copper_to_diamond_tier_upgrade', [
    'DDD',
    'DCD',
    'DDD'
  ], {
    D: 'minecraft:diamond',
    C: 'sophisticatedstorage:copper_to_gold_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/copper_to_diamond_tier_upgrade')
  event.recipes.minecraft.crafting_shapeless('sophisticatedstorage:copper_to_netherite_tier_upgrade', [
    'sophisticatedstorage:copper_to_diamond_tier_upgrade',
    'kubejs:netherite_sheet'
  ]).id('kubejs:sophisticatedstorage/copper_to_netherite_tier_upgrade')
  // Starting from iron tier
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:iron_to_gold_tier_upgrade', [
    'GGG',
    'GBG',
    'GGG'
  ], {
    G: 'create:golden_sheet',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/iron_to_gold_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:iron_to_diamond_tier_upgrade', [
    'DDD',
    'DBD',
    'DDD'
  ], {
    D: 'minecraft:diamond',
    B: 'sophisticatedstorage:iron_to_gold_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/iron_to_diamond_tier_upgrade')
  event.recipes.minecraft.crafting_shapeless('sophisticatedstorage:iron_to_netherite_tier_upgrade', [
    'sophisticatedstorage:iron_to_diamond_tier_upgrade',
    'kubejs:netherite_sheet'
  ]).id('kubejs:sophisticatedstorage/iron_to_netherite_tier_upgrade')
  // Starting from gold tier
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:gold_to_diamond_tier_upgrade', [
    'DDD',
    'DBD',
    'DDD'
  ], {
    D: 'minecraft:diamond',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/gold_to_diamond_tier_upgrade')
  event.recipes.minecraft.crafting_shapeless('sophisticatedstorage:gold_to_netherite_tier_upgrade', [
    'sophisticatedstorage:gold_to_diamond_tier_upgrade',
    'kubejs:netherite_sheet'
  ]).id('kubejs:sophisticatedstorage/gold_to_netherite_tier_upgrade')
  // Starting from diamond tier
  event.recipes.minecraft.crafting_shapeless('sophisticatedstorage:diamond_to_netherite_tier_upgrade', [
    'sophisticatedstorage:upgrade_base',
    'kubejs:netherite_sheet'
  ]).id('kubejs:sophisticatedstorage/diamond_to_netherite_tier_upgrade')
  /**
   * UPGRADE MODULES
   */
  // pickup
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:pickup_upgrade', [
    ' M ',
    'PBP',
    ' E '
  ], {
    M: 'create:sticky_mechanical_piston',
    P: '#minecraft:planks',
    B: 'sophisticatedstorage:upgrade_base',
    E: 'create:electron_tube'
  }).id('kubejs:sophisticatedstorage/pickup_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:advanced_pickup_upgrade', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'create:brass_sheet',
    B: 'sophisticatedstorage:pickup_upgrade'
  }).id('kubejs:sophisticatedstorage/advanced_pickup_upgrade')
  // filter
  event.recipes.minecraft.crafting_shapeless('sophisticatedstorage:filter_upgrade', [
    'sophisticatedstorage:upgrade_base',
    'create:filter',
    '4x create:electron_tube'
  ]).id('kubejs:sophisticatedstorage/filter_upgrade')
  event.recipes.minecraft.crafting_shapeless('sophisticatedstorage:advanced_filter_upgrade', [
    'sophisticatedstorage:filter_upgrade',
    'create:attribute_filter'
  ]).id('kubejs:sophisticatedstorage/advanced_filter_upgrade')
  // magnet
  if (!Platform.isLoaded('alexscaves')) {
    event.recipes.minecraft.crafting_shaped('sophisticatedstorage:magnet_upgrade', [
      'III',
      'IPI',
      'N S'
    ], {
      I: 'create:industrial_iron_block',
      P: 'sophisticatedstorage:pickup_upgrade',
      N: 'minecraft:redstone_block',
      S: 'minecraft:lapis_block'
    }).id('kubejs:sophisticatedstorage/magnet_upgrade')
    event.recipes.create.mechanical_crafting('sophisticatedstorage:advanced_magnet_upgrade', [
      ' ERE ',
      'IBMBI',
      'I   I',
      'I   I',
      'N   S'
    ], {
      R: 'create:precision_mechanism',
      E: 'create:electron_tube',
      B: 'create:brass_block',
      M: 'sophisticatedstorage:magnet_upgrade',
      I: 'create:industrial_iron_block',
      N: 'minecraft:redstone_block',
      S: 'minecraft:lapis_block'
    }).id('kubejs:sophisticatedstorage/mechanical_crafting/advanced_magnet_upgrade')
  }
  if (Platform.isLoaded('alexscaves')) {
    event.recipes.minecraft.crafting_shaped('sophisticatedstorage:magnet_upgrade', [
      'III',
      'IPI',
      'N S'
    ], {
      I: 'create:industrial_iron_block',
      P: 'sophisticatedstorage:pickup_upgrade',
      N: 'alexscaves:scarlet_neodymium_ingot',
      S: 'alexscaves:azure_neodymium_ingot'
    }).id('kubejs:sophisticatedstorage/magnet_upgrade')
    event.recipes.create.mechanical_crafting('sophisticatedstorage:advanced_magnet_upgrade', [
      ' ERE ',
      'IBMBI',
      'I   I',
      'I   I',
      'N   S'
    ], {
      R: 'create:precision_mechanism',
      E: 'create:electron_tube',
      B: 'create:brass_block',
      M: 'sophisticatedstorage:magnet_upgrade',
      I: 'create:industrial_iron_block',
      N: 'alexscaves:block_of_scarlet_neodymium',
      S: 'alexscaves:block_of_azure_neodymium'
    }).id('kubejs:sophisticatedstorage/mechanical_crafting/advanced_magnet_upgrade')
  }
  // feeding
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:feeding_upgrade', [
    ' C ',
    'ABM',
    ' D '
  ], {
    C: 'minecraft:golden_carrot',
    A: 'minecraft:golden_apple',
    B: 'sophisticatedstorage:upgrade_base',
    M: 'minecraft:glistering_melon_slice',
    D: 'create:deployer'
  }).id('kubejs:sophisticatedstorage/feeding_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:advanced_feeding_upgrade', [
    ' S ',
    'CBC',
    'RRR'
  ], {
    S: 'create:smart_chute',
    C: 'create:brass_casing',
    B: 'sophisticatedstorage:feeding_upgrade',
    R: 'create:mechanical_arm'
  }).id('kubejs:sophisticatedstorage/advanced_feeding_upgrade')
  // compacting
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:compacting_upgrade', [
    'EPE',
    'PBP',
    'EPE'
  ], {
    E: 'create:electron_tube',
    P: 'create:mechanical_piston',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/compacting_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:advanced_compacting_upgrade', [
    'NPN',
    'PBP',
    'NPN'
  ], {
    N: 'kubejs:null_matter',
    P: 'create:mechanical_piston',
    B: 'sophisticatedstorage:compacting_upgrade'
  }).id('kubejs:sophisticatedstorage/advanced_compacting_upgrade')
  // void
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:void_upgrade', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'kubejs:awakened_singularity_core',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/void_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:advanced_void_upgrade', [
    'NAN',
    'ABA',
    'NAN'
  ], {
    N: 'kubejs:null_matter',
    A: 'kubejs:awakened_singularity_core',
    B: 'sophisticatedstorage:void_upgrade'
  }).id('kubejs:sophisticatedstorage/mechanical_crafting/advanced_void_upgrade')
  // crafting
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:crafting_upgrade', [
    ' T ',
    'EBE',
    ' I '
  ], {
    T: 'minecraft:crafting_table',
    E: 'create:electron_tube',
    B: 'sophisticatedstorage:upgrade_base',
    I: 'create:item_vault'
  }).id('kubejs:sophisticatedstorage/crafting_upgrade')
  // stonecutter
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:stonecutter_upgrade', [
    ' T ',
    'EBE',
    ' I '
  ], {
    T: 'minecraft:stonecutter',
    E: 'create:electron_tube',
    B: 'sophisticatedstorage:upgrade_base',
    I: 'create:iron_sheet'
  }).id('kubejs:sophisticatedstorage/stonecutter_upgrade')
  /**
   * STACK UPGRADES
   */
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:stack_upgrade_tier_1', [
    'LLL',
    'LUL',
    'LLL'
  ], {
    L: '#minecraft:logs',
    U: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_1')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_1_plus', [
    'CCC',
    'CUC',
    'CCC'
  ], {
    C: 'kubejs:copper_singularity',
    U: 'sophisticatedstorage:stack_upgrade_tier_1'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_1_plus')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_2', [
    'III',
    'IUI',
    'III'
  ], {
    I: 'kubejs:iron_singularity',
    U: 'sophisticatedstorage:stack_upgrade_tier_1_plus'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_2')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_3', [
    'GGG',
    'GUG',
    'GGG'
  ], {
    G: 'kubejs:gold_singularity',
    U: 'sophisticatedstorage:stack_upgrade_tier_2'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_3')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_4', [
    'DDD',
    'DUD',
    'DDD'
  ], {
    D: 'kubejs:diamond_singularity',
    U: 'sophisticatedstorage:stack_upgrade_tier_3'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_4')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_5', [
    'NNN',
    'NUN',
    'NNN'
  ], {
    N: 'kubejs:netherite_singularity',
    U: 'sophisticatedstorage:stack_upgrade_tier_4'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_5')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_omega_tier', [
    ' FFF ',
    'FNNNF',
    'FNNNF',
    'FNNNF',
    ' FFF '
  ], {
    N: 'sophisticatedstorage:stack_upgrade_tier_5',
    F: 'kubejs:final_singularity'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_omega_tier')
  /**
   * STACK UPGRADE CONVERSION
   */
  // Tier 1 to next tier
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_1_to_tier_1_plus_conversion', [
    'III',
    'IBI',
    'GIG'
  ], {
    G: 'kubejs:copper_singularity',
    I: 'minecraft:copper_ingot',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_1_to_tier_1_plus_conversion')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_1_to_tier_2_conversion', [
    'III',
    'IBI',
    'GIG'
  ], {
    G: 'kubejs:iron_singularity',
    I: 'minecraft:iron_ingot',
    B: 'sophisticatedstorage:stack_upgrade_tier_1_to_tier_1_plus_conversion'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_1_to_tier_2_conversion')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_1_to_tier_3_conversion', [
    'III',
    'IBI',
    'GIG'
  ], {
    G: 'kubejs:gold_singularity',
    I: 'minecraft:gold_ingot',
    B: 'sophisticatedstorage:stack_upgrade_tier_1_to_tier_2_conversion'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_1_to_tier_3_conversion')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_1_to_tier_4_conversion', [
    'III',
    'IBI',
    'GIG'
  ], {
    G: 'kubejs:diamond_singularity',
    I: 'minecraft:diamond',
    B: 'sophisticatedstorage:stack_upgrade_tier_1_to_tier_3_conversion'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_1_to_tier_4_conversion')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_1_to_tier_5_conversion', [
    'III',
    'IBI',
    'GIG'
  ], {
    G: 'kubejs:netherite_singularity',
    I: 'minecraft:netherite_ingot',
    B: 'sophisticatedstorage:stack_upgrade_tier_1_to_tier_4_conversion'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_1_to_tier_5_conversion')
  // Tier 1 Plus to next tier
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_2_conversion', [
    ' I ',
    'IBI',
    ' G '
  ], {
    G: 'kubejs:iron_singularity',
    I: 'minecraft:iron_ingot',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_1_plus_to_tier_2_conversion')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_3_conversion', [
    'III',
    'IBI',
    'GIG'
  ], {
    G: 'kubejs:gold_singularity',
    I: 'minecraft:gold_ingot',
    B: 'sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_2_conversion'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_1_plus_to_tier_3_conversion')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_4_conversion', [
    'III',
    'IBI',
    'GIG'
  ], {
    G: 'kubejs:diamond_singularity',
    I: 'minecraft:diamond',
    B: 'sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_3_conversion'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_1_plus_to_tier_4_conversion')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_5_conversion', [
    'III',
    'IBI',
    'GIG'
  ], {
    G: 'kubejs:netherite_singularity',
    I: 'minecraft:netherite_ingot',
    B: 'sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_4_conversion'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_1_plus_to_tier_5_conversion')
  // Tier 2 to next tier
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_2_to_tier_3_conversion', [
    'III',
    'IBI',
    'GIG'
  ], {
    G: 'kubejs:gold_singularity',
    I: 'minecraft:gold_ingot',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_2_to_tier_3_conversion')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_2_to_tier_4_conversion', [
    'III',
    'IBI',
    'GIG'
  ], {
    G: 'kubejs:diamond_singularity',
    I: 'minecraft:diamond',
    B: 'sophisticatedstorage:stack_upgrade_tier_2_to_tier_3_conversion'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_2_to_tier_4_conversion')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_2_to_tier_5_conversion', [
    'III',
    'IBI',
    'GIG'
  ], {
    G: 'kubejs:netherite_singularity',
    I: 'minecraft:netherite_ingot',
    B: 'sophisticatedstorage:stack_upgrade_tier_2_to_tier_4_conversion'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_2_to_tier_5_conversion')
  // Tier 3 to next tier
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_3_to_tier_4_conversion', [
    'III',
    'IBI',
    'GIG'
  ], {
    G: 'kubejs:diamond_singularity',
    I: 'minecraft:diamond',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_3_to_tier_4_conversion')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_3_to_tier_5_conversion', [
    'III',
    'IBI',
    'GIG'
  ], {
    G: 'kubejs:netherite_singularity',
    I: 'minecraft:netherite_ingot',
    B: 'sophisticatedstorage:stack_upgrade_tier_3_to_tier_4_conversion'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_3_to_tier_5_conversion')
  // Tier 4 to tier 5
  event.recipes.create.mechanical_crafting('sophisticatedstorage:stack_upgrade_tier_4_to_tier_5_conversion', [
    'III',
    'IBI',
    'GIG'
  ], {
    G: 'kubejs:netherite_singularity',
    I: 'minecraft:netherite_ingot',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/stack_upgrade_tier_4_to_tier_5_conversion')
  // jukebox
  event.recipes.minecraft.crafting_shapeless('sophisticatedstorage:jukebox_upgrade', [
    'sophisticatedstorage:upgrade_base',
    'minecraft:jukebox',
    'create:electron_tube'
  ]).id('kubejs:sophisticatedstorage/jukebox_upgrade')
  // compression
  event.recipes.create.compacting('sophisticatedstorage:compression_upgrade', [
    'sophisticatedstorage:upgrade_base',
    '2x create:iron_sheet',
    '2x create:mechanical_piston',
    '2x create:electron_tube'
  ]).id('kubejs:sophisticatedstorage/compression_upgrade')
  // hopper
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:hopper_upgrade', [
    ' C ',
    'IUI',
    ' E '
  ], {
    C: 'create:chute',
    I: 'create:iron_sheet',
    U: 'sophisticatedstorage:upgrade_base',
    E: 'create:electron_tube'
  }).id('kubejs:sophisticatedstorage/hopper_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:advanced_hopper_upgrade', [
    ' C ',
    'BUB',
    ' B '
  ], {
    C: 'create:smart_chute',
    B: 'create:brass_sheet',
    U: 'sophisticatedstorage:hopper_upgrade'
  }).id('kubejs:sophisticatedstorage/advanced_hopper_upgrade')
  // pump
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:pump_upgrade', [
    ' F ',
    'MUM',
    ' F '
  ], {
    F: 'create:fluid_tank',
    M: 'create:mechanical_pump',
    U: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/pump_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:advanced_pump_upgrade', [
    ' B ',
    'SUS',
    ' B '
  ], {
    B: 'create:brass_sheet',
    S: 'create:smart_fluid_pipe',
    U: 'sophisticatedstorage:pump_upgrade'
  }).id('kubejs:sophisticatedstorage/advanced_pump_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:xp_pump_upgrade', [
    'LEL',
    'OUO',
    'LEL'
  ], {
    L: 'minecraft:lapis_lazuli',
    E: 'minecraft:ender_eye',
    O: 'minecraft:experience_bottle',
    U: 'sophisticatedstorage:advanced_pump_upgrade'
  }).id('kubejs:sophisticatedstorage/xp_pump_upgrade')
  event.recipes.minecraft.crafting_shapeless('sophisticatedstorage:shulker_box', [
    'minecraft:shulker_box',
    'create:electron_tube'
  ]).id('kubejs:sophisticatedstorage/shulker_box_from_vanilla_shulker_box')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:shulker_box', [
    ' S ',
    'EC ',
    ' S '
  ], {
    C: '#forge:chests',
    S: 'minecraft:shulker_shell',
    E: 'create:electron_tube'
  }).id('kubejs:sophisticatedstorage/shulker_box')
})
/**
 * @file Core duplicator recipes.
 * @version 1.20.1-OMNIA
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

let template_duplication = [
  'netherite_upgrade_smithing_template',
  'sentry_armor_trim_smithing_template',
  'vex_armor_trim_smithing_template',
  'wild_armor_trim_smithing_template',
  'coast_armor_trim_smithing_template',
  'dune_armor_trim_smithing_template',
  'wayfinder_armor_trim_smithing_template',
  'raiser_armor_trim_smithing_template',
  'shaper_armor_trim_smithing_template',
  'host_armor_trim_smithing_template',
  'ward_armor_trim_smithing_template',
  'silence_armor_trim_smithing_template',
  'tide_armor_trim_smithing_template',
  'snout_armor_trim_smithing_template',
  'rib_armor_trim_smithing_template',
  'eye_armor_trim_smithing_template',
  'spire_armor_trim_smithing_template'
]
let sherd_duplication = [
  'angler',
  'archer',
  'arms_up',
  'blade',
  'brewer',
  'burn',
  'danger',
  'explorer',
  'friend',
  'heart',
  'heartbreak',
  'howl',
  'miner',
  'mourner',
  'plenty',
  'prize',
  'sheaf',
  'shelter',
  'skull',
  'snort'
]
let item_duplication = {
  blue_ice: 'minecraft:blue_ice',
  egg: 'minecraft:egg',
  asurine: 'create:asurine',
  crimsite: 'create:crimsite',
  ochrum: 'create:ochrum',
  veridium: 'create:veridium',
  iridium_upgrade_smithing_template: 'kubejs:iridium_upgrade_smithing_template'
}
let tr_dpltr_deployer_recipes = [
  'blue_ice',
  'egg',
  'asurine',
  'crimsite',
  'ochrum',
  'veridium',
  'cinder_flour',
  'iridium_upgrade_smithing_template',
  'final_singularity'
]
let tr_dpltr_deployer_recipe_properties = {
  blue_ice: { item: 'minecraft:blue_ice', stack: 64, recipeId: 'kubejs:deploying/blue_ice_stack_duplication' },
  egg: { item: 'minecraft:egg', stack: 16, recipeId: 'kubejs:deploying/egg_stack_duplication' },
  asurine: { item: 'create:asurine', stack: 64, recipeId: 'kubejs:deploying/asurine_stack_duplication' },
  crimsite: { item: 'create:crimsite', stack: 64, recipeId: 'kubejs:deploying/crimsite_stack_duplication' },
  ochrum: { item: 'create:ochrum', stack: 64, recipeId: 'kubejs:deploying/ochrum_stack_duplication' },
  veridium: { item: 'create:veridium', stack: 64, recipeId: 'kubejs:deploying/veridium_stack_duplication' },
  cinder_flour: { item: 'create:cinder_flour', stack: 64, recipeId: 'kubejs:deploying/cinder_flour_stack_duplication' },
  iridium_upgrade_smithing_template: { item: 'kubejs:iridium_upgrade_smithing_template', stack: 64, recipeId: 'kubejs:deploying/iridium_upgrade_smithing_template_stack_duplication' },
  final_singularity: { item: 'kubejs:final_singularity', stack: 2, recipeId: 'kubejs:deploying/final_singularity_duplication' }
}

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('dimdoors')) {
    event.recipes.create.mechanical_crafting('kubejs:duplicator', [
      'NC',
      'SN'
    ], {
      C: 'create:clipboard',
      S: 'create:sturdy_sheet',
      N: '#forge:nuggets/netherite'
    }).id('kubejs:mechanical_crafting/duplicator')
  } else {
    event.recipes.create.mechanical_crafting('kubejs:duplicator', [
      'FC',
      'SF'
    ], {
      C: 'create:clipboard',
      S: 'create:sturdy_sheet',
      F: 'dimdoors:enduring_fibers'
    }).id('kubejs:mechanical_crafting/duplicator')
  }
  event.recipes.create.mechanical_crafting('kubejs:duplicator_block', [
    ' D ',
    'DED',
    ' D '
  ], {
    D: 'kubejs:duplicator',
    E: 'kubejs:high_entropy_alloy_block'
  }).id('kubejs:mechanical_crafting_duplicator_block')
  event.recipes.create.mechanical_crafting('kubejs:quad_duplicator', [
    'ID',
    'SI'
  ], {
    D: 'kubejs:duplicator',
    I: 'kubejs:iridium_nugget',
    S: 'kubejs:iridium_sheet'
  }).id('kubejs:mechanical_crafting/quad_duplicator')
  event.recipes.create.mechanical_crafting('kubejs:true_duplicator', [
    'HD',
    'SH'
  ], {
    D: 'kubejs:quad_duplicator',
    H: 'kubejs:high_entropy_alloy_nugget',
    S: 'kubejs:high_entropy_alloy_sheet'
  }).id('kubejs:mechanical_crafting/true_duplicator')
  for (let i = 0; i < template_duplication.length; i++) {
    let element = template_duplication[i];
    event.remove({ id: 'minecraft:' + element })
    event.recipes.create.deploying('2x minecraft:' + element, [
      'minecraft:' + element,
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + element + '_duplication')
    event.recipes.create.deploying('5x minecraft:' + element, [
      'minecraft:' + element,
      'kubejs:quad_duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + element + '_quad_duplication')
    event.recipes.create.deploying('64x minecraft:' + element, [
      'minecraft:' + element,
      'kubejs:true_duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + element + '_stack_duplication')
  }
  for (let i = 0; i < sherd_duplication.length; i++) {
    let element = sherd_duplication[i];
    event.recipes.create.deploying([
      '2x minecraft:' + element + '_pottery_sherd'
    ], [
      'minecraft:' + element + '_pottery_sherd',
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + element + '_pottery_sherd_duplication')
    event.recipes.create.deploying([
      '5x minecraft:' + element + '_pottery_sherd'
    ], [
      'minecraft:' + element + '_pottery_sherd',
      'kubejs:quad_duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + element + '_pottery_sherd_quad_duplication')
    event.recipes.create.deploying([
      '64x minecraft:' + element + '_pottery_sherd'
    ], [
      'minecraft:' + element + '_pottery_sherd',
      'kubejs:true_duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + element + '_pottery_sherd_stack_duplication')
  }
  for (let [recipeId, itemId] of Object.entries(item_duplication)) {
    event.recipes.create.deploying(Item.of(itemId, 2), [
      itemId,
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + recipeId + '_duplication')
    event.recipes.create.deploying(Item.of(itemId, 5), [
      itemId,
      'kubejs:quad_duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + recipeId + '_quad_duplication')
  }
  // TRUE DUPLICATOR RECIPES
  for (const element of tr_dpltr_deployer_recipes) {
    event.recipes.create.deploying(
      Item.of(tr_dpltr_deployer_recipe_properties[element].item, tr_dpltr_deployer_recipe_properties[element].stack), [
      tr_dpltr_deployer_recipe_properties[element].item,
      'kubejs:true_duplicator'
    ]).keepHeldItem().id(tr_dpltr_deployer_recipe_properties[element].recipeId)
  }
  event.recipes.create.compacting([
    '4x kubejs:deepslate_iridium_ore',
    '4x minecraft:tuff',
    'kubejs:true_duplicator'
  ], [
    'kubejs:crushed_raw_iridium',
    ['minecraft:deepslate', 'minecraft:cobbled_deepslate'],
    'kubejs:true_duplicator'
  ]).superheated().id('kubejs:compacting/true_duplicator/deepslate_iridium_ore_renewal')
  if (Platform.isLoaded('avaritia')) {
    event.recipes.create.deploying('64x avaritia:star_fuel', [
      'avaritia:star_fuel',
      'kubejs:true_duplicator'
    ]).keepHeldItem().id('kubejs:deploying/avaritia/star_fuel_stack_duplication')
  }
  if (Platform.isLoaded('powah')) {
    event.recipes.create.deploying('2x powah:uraninite_raw', [
      'powah:uraninite_raw',
      'kubejs:true_duplicator'
    ]).keepHeldItem().id('kubejs:deploying/powah/raw_uraninite_duplication')
  }
})
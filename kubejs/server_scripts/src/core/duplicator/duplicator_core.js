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
let item_duplication = {
  blue_ice: 'minecraft:blue_ice',
  egg: 'minecraft:egg',
  asurine: 'create:asurine',
  crimsite: 'create:crimsite',
  ochrum: 'create:ochrum',
  veridium: 'create:veridium',
  iridium_upgrade_smithing_template: 'kubejs:iridium_upgrade_smithing_template'
}
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

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('dimdoors')) {
    event.recipes.create.mechanical_crafting('kubejs:duplicator', [
      'NC',
      'SN'
    ], {
      C: 'create:clipboard',
      S: 'create:sturdy_sheet',
      N: '#forge:nuggets/netherite'
    }).id('finality:mechanical_crafting/duplicator')
  } else {
    event.recipes.create.mechanical_crafting('kubejs:duplicator', [
      'FC',
      'SF'
    ], {
      C: 'create:clipboard',
      S: 'create:sturdy_sheet',
      F: 'dimdoors:enduring_fibers'
    }).id('finality:mechanical_crafting/duplicator')
  }
  for (let i = 0; i < template_duplication.length; i++) {
    let element = template_duplication[i];
    event.remove({ id: 'minecraft:' + element })
    event.recipes.create.deploying('2x minecraft:' + element, [
      'minecraft:' + element,
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + element + '_duplication')
  }
  for (let [recipeId, itemId] of Object.entries(item_duplication)) {
    event.recipes.create.deploying(Item.of(itemId, 2), [
      itemId,
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + recipeId + '_duplication')
  }
  for (let i = 0; i < sherd_duplication.length; i++) {
    let element = sherd_duplication[i];
    event.recipes.create.deploying([
      '2x minecraft:' + element + '_pottery_sherd'
    ], [
      'minecraft:' + element + '_pottery_sherd',
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + element + '_pottery_sherd_duplication')
  }
})
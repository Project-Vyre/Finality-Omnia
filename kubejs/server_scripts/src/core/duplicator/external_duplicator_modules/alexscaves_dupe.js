/**
 * @file Server handler for Alex's Caves
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

// requires: alexscaves
// requires: kubejs_create

let alexscaves_sherds = [
  'dinosaur',
  'footprint',
  'guardian',
  'hero'
]

let alexscaves_duplication = {
  ambersol: 'alexscaves:ambersol',
  spelunkery_table: 'alexscaves:spelunkery_table',
  diving_helmet: 'alexscaves:diving_helmet',
  diving_chestplate: 'alexscaves:diving_chestplate',
  diving_leggings: 'alexscaves:diving_leggings',
  diving_boots: 'alexscaves:diving_boots',
  galena: 'alexscaves:galena'
}

let cave_tablets = {
  abyssal_chasm: '{CaveBiome:"alexscaves:abyssal_chasm"}',
  candy_cavity: '{CaveBiome:"alexscaves:candy_cavity"}',
  forlorn_hollows: '{CaveBiome:"alexscaves:forlorn_hollows"}',
  magnetic_caves: '{CaveBiome:"alexscaves:magnetic_caves"}',
  primordial_caves: '{CaveBiome:"alexscaves:primordial_caves"}',
  toxic_caves: '{CaveBiome:"alexscaves:toxic_caves"}'
}

ServerEvents.recipes(event => {
  event.remove({ id: 'alexscaves:polarity_armor_trim_smithing_template' })
  event.recipes.create.deploying('2x alexscaves:polarity_armor_trim_smithing_template', [
    'alexscaves:polarity_armor_trim_smithing_template',
    'kubejs:duplicator'
  ]).keepHeldItem().id('kubejs:deploying/polarity_armor_trim_smithing_template')
  for (let i = 0; i < alexscaves_sherds.length; i++) {
    let element = alexscaves_sherds[i];
    event.recipes.create.deploying([
      '2x alexscaves:' + element + '_pottery_sherd'
    ], [
      'alexscaves:' + element + '_pottery_sherd',
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:alexscaves/deploying/' + element + '_pottery_sherd_duplication')
    event.recipes.create.deploying([
      '4x alexscaves:' + element + '_pottery_sherd'
    ], [
      'alexscaves:' + element + '_pottery_sherd',
      'kubejs:quad_duplicator'
    ]).keepHeldItem().id('kubejs:alexscaves/deploying/' + element + 'pottery_sherd_quad_duplication')
    event.recipes.create.deploying([
      '64x alexscaves:' + element + '_pottery_sherd'
    ], [
      'alexscaves:' + element + '_pottery_sherd',
      'kubejs:true_duplicator'
    ]).keepHeldItem().id('kubejs:alexscaves/deploying/' + element + 'pottery_sherd_stack_duplication')
  }
  for (let [recipeId, itemId] of Object.entries(alexscaves_duplication)) {
    event.recipes.create.deploying(Item.of(itemId, 2), [
      itemId,
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:alexscaves/deploying/' + recipeId + '_duplication')
    event.recipes.create.deploying(Item.of(itemId, 4), [
      itemId,
      'kubejs:quad_duplicator'
    ]).keepHeldItem().id('kubejs:alexscaves/deploying/' + recipeId + '_quad_duplication')
    event.recipes.create.deploying(Item.of(itemId, 64), [
      itemId,
      'kubejs:true_duplicator'
    ]).keepHeldItem().id('kubejs:alexscaves/deploying/' + recipeId + '_stack_duplication')
  }
  for (let [recipeId, tabletId] of Object.entries(cave_tablets)) {
    event.recipes.create.deploying(Item.of('alexscaves:cave_tablet', 2, tabletId), [
      Item.of('alexscaves:cave_tablet', tabletId).weakNBT(),
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:alexscaves/deploying/' + recipeId + '_cave_tablet_duplication')
    event.recipes.create.deploying(Item.of('alexscaves:cave_tablet', 4, tabletId), [
      Item.of('alexscaves:cave_tablet', tabletId).weakNBT(),
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:alexscaves/deploying/' + recipeId + '_cave_tablet_quad_duplication')
    event.recipes.create.deploying(Item.of('alexscaves:cave_tablet', 64, tabletId), [
      Item.of('alexscaves:cave_tablet', tabletId).weakNBT(),
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:alexscaves/deploying/' + recipeId + '_cave_tablet_stack_duplication')
  }
})
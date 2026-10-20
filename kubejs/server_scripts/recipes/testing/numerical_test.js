// ignored: true
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting('minecraft:andesite', [
    'BABBAABB'
  ], {
    A: 'minecraft:black_wool',
    B: 'minecraft:white_wool'
  }).noMirror().id(`kubejs:mechanical_crafting/andesite_output`)
  event.recipes.create.mechanical_crafting('minecraft:diorite', [
    'BBAABBAB',
  ], {
    A: 'minecraft:black_wool',
    B: 'minecraft:white_wool'
  }).kjsMirror(false).id('kubejs:mechanical_crafting/diorite_output')

  event.recipes.create.mechanical_crafting('minecraft:stone', [
    '10110011'
  ], {
    '0': 'minecraft:black_wool',
    '1': 'minecraft:white_wool'
  }).noMirror().id(`kubejs:mechanical_crafting/stone_numerical_output`)
  event.recipes.create.mechanical_crafting('minecraft:deepslate', [
    '11001101',
  ], {
    '0': 'minecraft:black_wool',
    '1': 'minecraft:white_wool'
  }).kjsMirror(false).id('kubejs:mechanical_crafting/deepslate_numerical_output')
})
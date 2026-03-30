// requires: arknights_endfield
// requires: kubejs_create

ServerEvents.recipes(event => {
  // MINERAL VEINS
  event.recipes.create.compacting('arknights_endfield:originium_mineral_vein_block', [
    [
      'arknights_endfield:originium_ore',
      'arknights_endfield:originium_ore_block',
      'arknights_endfield:deepslate_originium_ore'
    ],
    'minecraft:budding_amethyst'
  ]).superheated().id('kubejs:arknights_endfield/compacting/originium_vein_creation')
  event.recipes.create.compacting('arknights_endfield:amethyst_mineral_vein_block', [
    [
      'arknights_endfield:amethyst_ore',
      'arknights_endfield:amethyst_ore_block',
      'arknights_endfield:deepslate_amethyst_ore'
    ],
    'minecraft:budding_amethyst'
  ]).superheated().id('kubejs:arknights_endfield/compacting/amethyst_vein_creation')
  event.recipes.create.compacting('arknights_endfield:ferrium_mineral_vein_block', [
    [
      'arknights_endfield:ferrium_ore',
      'arknights_endfield:ferrium_ore_block',
      'arknights_endfield:deepslate_ferrium_ore'
    ],
    'minecraft:budding_amethyst'
  ]).superheated().id('kubejs:arknights_endfield/compacting/ferrium_vein_creation')
  event.recipes.create.compacting('arknights_endfield:coal_mineral_vein_block', [
    ['minecraft:coal_ore', 'minecraft:deepslate_coal_ore'],
    'minecraft:budding_amethyst'
  ]).id('kubejs:arknights_endfield/compacting/coal_vein_creation')
  event.recipes.create.compacting('arknights_endfield:copper_mineral_vein_block', [
    ['minecraft:copper_ore', 'minecraft:deepslate_copper_ore'],
    'minecraft:budding_amethyst'
  ]).superheated().id('kubejs:arknights_endfield/compacting/copper_vein_creation')
  event.recipes.create.compacting('arknights_endfield:diamond_mineral_vein_block', [
    ['minecraft:diamond_ore', 'minecraft:deepslate_diamond_ore'],
    'minecraft:budding_amethyst'
  ]).superheated().id('kubejs:arknights_endfield/compacting/diamond_vein_creation')
  event.recipes.create.compacting('arknights_endfield:emerald_mineral_vein_block', [
    ['minecraft:emerald_ore', 'minecraft:deepslate_emerald_ore'],
    'minecraft:budding_amethyst'
  ]).superheated().id('kubejs:arknights_endfield/compacting/emerald_vein_creation')
  event.recipes.create.compacting('arknights_endfield:gold_mineral_vein_block', [
    ['minecraft:gold_ore', 'minecraft:deepslate_gold_ore'],
    'minecraft:budding_amethyst'
  ]).superheated().id('kubejs:arknights_endfield/compacting/gold_vein_creation')
  event.recipes.create.compacting('arknights_endfield:iron_mineral_vein_block', [
    ['minecraft:iron_ore', 'minecraft:deepslate_iron_ore'],
    'minecraft:budding_amethyst'
  ]).superheated().id('kubejs:arknights_endfield/compacting/iron_vein_creation')
})
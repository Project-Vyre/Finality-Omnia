// requires: create
// requires: farmersdelight
// ignored: true

let tools = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe']
let final_tools = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe', 'lance', 'scythe', 'katana']
let pickletweaks_tools = [
  'pickletweaks:netherite_paxel',
  'pickletweaks:netherite_sickle',
  'pickletweaks:netherite_scythe'
]

ServerEvents.recipes(event => {
  event.recipes.kubejs.shapeless(Item.of('minecraft:bow').set('minecraft:unbreakable', { showInTooltip: true }), [
    'minecraft:bow',
    'create:experience_block'
  ]).id('kubejs:unbreakable_bow')
  event.recipes.kubejs.shapeless(Item.of('minecraft:crossbow').set('minecraft:unbreakable', { showInTooltip: true }), [
    'minecraft:crossbow',
    'create:experience_block'
  ]).id('kubejs:unbreakable_crossbow')
  event.recipes.kubejs.shapeless(Item.of('minecraft:flint_and_steel').set('minecraft:unbreakable', { showInTooltip: true }), [
    'minecraft:flint_and_steel',
    'create:experience_block'
  ]).id('kubejs:unbreakable_flint_and_steel')
  if (Platform.isLoaded('kubejs_create')) {
    event.recipes.kubejs.shapeless(Item.of('kubejs:final_sand_paper').set('minecraft:unbreakable', { showInTooltip: true }), [
      'kubejs:final_sand_paper',
      'create:experience_block'
    ]).id('kubejs:unbreakable_final_sand_paper')
  }
  for (let i = 0; i < tools.length; i++) {
    let element = tools[i];
    event.recipes.kubejs.shapeless(Item.of('minecraft:netherite_' + element).set('minecraft:unbreakable', { showInTooltip: true }), [
      'minecraft:netherite_' + element,
      'create:experience_block'
    ]).id('kubejs:unbkreakable_netherite_' + element)
    event.recipes.kubejs.shapeless(Item.of('kubejs:iridium_' + element).set('minecraft:unbreakable', { showInTooltip: true }), [
      'kubejs:iridium_' + element,
      'create:experience_block'
    ]).id('kubejs:unbkreakable_iridium_' + element)
  }
  for (let i = 0; i < final_tools.length; i++) {
    let element = final_tools[i];
    event.recipes.kubejs.shapeless(Item.of('kubejs:final_' + element).set('minecraft:unbreakable', { showInTooltip: true }), [
      'kubejs:final_' + element,
      'create:experience_block'
    ]).id('kubejs:unbkreakable_final_' + element)
  }
  event.recipes.kubejs.shapeless(Item.of('farmersdelight:netherite_knife').set('minecraft:unbreakable', { showInTooltip: true }), [
    'farmersdelight:netherite_knife',
    'create:experience_block'
  ]).id('kubejs:farmersdelight/unbreakable_netherite_knife')
  if (Platform.isLoaded('chalk')) {
    for (let i = 0; i < COLOR.length; i++) {
      let chalk_color = COLOR[i];
      event.recipes.kubejs.shapeless(Item.of('chalk:' + chalk_color + '_chalk').set('minecraft:unbreakable', { showInTooltip: true }), [
        'chalk:' + chalk_color + '_chalk',
        'create:experience_block'
      ]).id('kubejs:chalk/unbreakable_' + chalk_color + '_chalk')
    }
  }
  if (Platform.isLoaded('pickletweaks')) {
    event.recipes.kubejs.shapeless(Item.of('pickletweaks:netherite_paxel').set('minecraft:unbreakable', { showInTooltip: true }), [
      'pickletweaks:netherite_paxel',
      'create:experience_block'
    ]).id('kubejs:pickletweaks/unbreakable_netherite_paxel')
    event.recipes.kubejs.shapeless(Item.of('pickletweaks:netherite_sickle').set('minecraft:unbreakable', { showInTooltip: true }), [
      'pickletweaks:netherite_sickle',
      'create:experience_block'
    ]).id('kubejs:pickletweaks/unbreakable_netherite_sickle')
    event.recipes.kubejs.shapeless(Item.of('pickletweaks:netherite_scythe').set('minecraft:unbreakable', { showInTooltip: true }), [
      'pickletweaks:netherite_scythe',
      'create:experience_block'
    ]).id('kubejs:pickletweaks/unbreakable_netherite_scythe')
  }
  if (Platform.isLoaded('justhammers')) {
    event.recipes.kubejs.shapeless(Item.of('justhammers:netherite_hammer').set('minecraft:unbreakable', { showInTooltip: true }), [
      'justhammers:netherite_hammer',
      'create:experience_block'
    ]).id('kubejs:justhammers/unbreakable_netherite_hammer')
    event.recipes.kubejs.shapeless(Item.of('justhammers:netherite_impact_hammer').set('minecraft:unbreakable', { showInTooltip: true }), [
      'justhammers:netherite_impact_hammer',
      'create:experience_block'
    ]).id('kubejs:justhammers/unbreakable_netherite_impact_hammer')
    event.recipes.kubejs.shapeless(Item.of('justhammers:netherite_reinforced_hammer').set('minecraft:unbreakable', { showInTooltip: true }), [
      'justhammers:netherite_reinforced_hammer',
      'create:experience_block'
    ]).id('kubejs:justhammers/unbreakable_netherite_reinforced_hammer')
    event.recipes.kubejs.shapeless(Item.of('justhammers:netherite_reinforced_impact_hammer').set('minecraft:unbreakable', { showInTooltip: true }), [
      'justhammers:netherite_reinforced_impact_hammer',
      'create:experience_block'
    ]).id('kubejs:justhammers/unbreakable_netherite_reinforced_impact_hammer')
    event.recipes.kubejs.shapeless(Item.of('justhammers:netherite_destructor_hammer').set('minecraft:unbreakable', { showInTooltip: true }), [
      'justhammers:netherite_destructor_hammer',
      'create:experience_block'
    ]).id('kubejs:justhammers/unbreakable_netherite_destructor_hammer')
  }
  if (Platform.isLoaded('celestisynth')) {
    let celestisynth_weapons = {
      solaris: 'celestisynth:solaris',
      crescentia: 'celestisynth:crescentia',
      breezebreaker: 'celestisynth:breezebreaker',
      poltergeist: 'celestisynth:poltergeist',
      aquaflora: 'celestisynth:aquaflora',
      rainfall_serenity: 'celestisynth:rainfall_serenity',
      frostbound: 'celestisynth:frostbound',
      keres: 'celestisynth:keres'
    }
    for (let [recipeid, id] of Object.entries(celestisynth_weapons)) {
      event.recipes.kubejs.shapeless(Item.of(id).set('minecraft:unbreakable', { showInTooltip: true }), [
        id,
        'create:experience_block'
      ]).id('kubejs:celestisynth/unbreakable_' + recipeid)
    }
  }
})

// 1.21.1 version
/*
ServerEvents.recipes(event => {
  event.recipes.kubejs.shapeless(Item.of('minecraft:bow').set('minecraft:unbreakable', { showInTooltip: true }), [
    'minecraft:bow',
    'create:experience_block'
  ]).id('kubejs:unbreakable_bow')
    event.recipes.kubejs.shapeless(Item.of('minecraft:crossbow').set('minecraft:unbreakable', { showInTooltip: true }), [
    'minecraft:crossbow',
    'create:experience_block'
  ]).id('kubejs:unbreakable_bow')
})
*/
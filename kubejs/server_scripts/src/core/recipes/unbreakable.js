/**
 * @file Force apply Unbreakable to tools correctly.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author pietro-lopes <https://github.com/pietro-lopes> Corrections
 * @author ladylexxie <https://github.com/ladylexxie> Inventory changed
 */

// requires: create
// requires: farmersdelight
// ignored: false

let tools = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe']
let final_tools = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe', 'lance', 'scythe', 'katana']
let pickletweaks_tools = [
  'pickletweaks:netherite_paxel',
  'pickletweaks:netherite_sickle',
  'pickletweaks:netherite_scythe'
]

ServerEvents.recipes(event => {
  event.recipes.kubejs.shapeless(Item.of('minecraft:bow').withNBT({ Unbreakable: 1 }), [
    'minecraft:bow',
    'create:experience_block'
  ]).id('kubejs:unbreakable_bow')
  event.recipes.kubejs.shapeless(Item.of('minecraft:crossbow').withNBT({ Unbreakable: 1 }), [
    'minecraft:crossbow',
    'create:experience_block'
  ]).id('kubejs:unbreakable_crossbow')
  event.recipes.kubejs.shapeless(Item.of('minecraft:flint_and_steel').withNBT({ Unbreakable: 1 }), [
    'minecraft:flint_and_steel',
    'create:experience_block'
  ]).id('kubejs:unbreakable_flint_and_steel')
  if (Platform.isLoaded('kubejs_create')) {
    event.recipes.kubejs.shapeless(Item.of('kubejs:final_sand_paper').withNBT({ Unbreakable: 1 }), [
      'kubejs:final_sand_paper',
      'create:experience_block'
    ]).id('kubejs:unbreakable_final_sand_paper')
  }
  for (let i = 0; i < tools.length; i++) {
    let element = tools[i];
    event.recipes.kubejs.shapeless(Item.of('minecraft:netherite_' + element).withNBT({ Unbreakable: 1 }), [
      'minecraft:netherite_' + element,
      'create:experience_block'
    ]).id('kubejs:unbkreakable_netherite_' + element)
    event.recipes.kubejs.shapeless(Item.of('kubejs:iridium_' + element).withNBT({ Unbreakable: 1 }), [
      'kubejs:iridium_' + element,
      'create:experience_block'
    ]).id('kubejs:unbkreakable_iridium_' + element)
  }
  for (let i = 0; i < final_tools.length; i++) {
    let element = final_tools[i];
    event.recipes.kubejs.shapeless(Item.of('kubejs:final_' + element).withNBT({ Unbreakable: 1 }), [
      'kubejs:final_' + element,
      'create:experience_block'
    ]).id('kubejs:unbkreakable_final_' + element)
  }
  event.recipes.kubejs.shapeless(Item.of('farmersdelight:netherite_knife').withNBT({ Unbreakable: 1 }), [
    'farmersdelight:netherite_knife',
    'create:experience_block'
  ]).id('kubejs:farmersdelight/unbreakable_netherite_knife')
  if (Platform.isLoaded('chalk')) {
    for (let i = 0; i < COLOR.length; i++) {
      let chalk_color = COLOR[i];
      event.recipes.kubejs.shapeless(Item.of('chalk:' + chalk_color + '_chalk').withNBT({ Unbreakable: 1 }), [
        'chalk:' + chalk_color + '_chalk',
        'create:experience_block'
      ]).id('kubejs:chalk/unbreakable_' + chalk_color + '_chalk')
    }
  }
  if (Platform.isLoaded('pickletweaks')) {
    event.recipes.kubejs.shapeless(Item.of('pickletweaks:netherite_paxel').withNBT({ Unbreakable: 1 }), [
      'pickletweaks:netherite_paxel',
      'create:experience_block'
    ]).id('kubejs:pickletweaks/unbreakable_netherite_paxel')
    event.recipes.kubejs.shapeless(Item.of('pickletweaks:netherite_sickle').withNBT({ Unbreakable: 1 }), [
      'pickletweaks:netherite_sickle',
      'create:experience_block'
    ]).id('kubejs:pickletweaks/unbreakable_netherite_sickle')
    event.recipes.kubejs.shapeless(Item.of('pickletweaks:netherite_scythe').withNBT({ Unbreakable: 1 }), [
      'pickletweaks:netherite_scythe',
      'create:experience_block'
    ]).id('kubejs:pickletweaks/unbreakable_netherite_scythe')
  }
  if (Platform.isLoaded('justhammers')) {
    event.recipes.kubejs.shapeless(Item.of('justhammers:netherite_hammer').withNBT({ Unbreakable: 1 }), [
      'justhammers:netherite_hammer',
      'create:experience_block'
    ]).id('kubejs:justhammers/unbreakable_netherite_hammer')
    event.recipes.kubejs.shapeless(Item.of('justhammers:netherite_impact_hammer').withNBT({ Unbreakable: 1 }), [
      'justhammers:netherite_impact_hammer',
      'create:experience_block'
    ]).id('kubejs:justhammers/unbreakable_netherite_impact_hammer')
    event.recipes.kubejs.shapeless(Item.of('justhammers:netherite_reinforced_hammer').withNBT({ Unbreakable: 1 }), [
      'justhammers:netherite_reinforced_hammer',
      'create:experience_block'
    ]).id('kubejs:justhammers/unbreakable_netherite_reinforced_hammer')
    event.recipes.kubejs.shapeless(Item.of('justhammers:netherite_reinforced_impact_hammer').withNBT({ Unbreakable: 1 }), [
      'justhammers:netherite_reinforced_impact_hammer',
      'create:experience_block'
    ]).id('kubejs:justhammers/unbreakable_netherite_reinforced_impact_hammer')
    event.recipes.kubejs.shapeless(Item.of('justhammers:netherite_destructor_hammer').withNBT({ Unbreakable: 1 }), [
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
      event.recipes.kubejs.shapeless(Item.of(id).withNBT({ Unbreakable: 1 }), [
        id,
        'create:experience_block'
      ]).id('kubejs:celestisynth/unbreakable_' + recipeid)
    }
  }
  if (Platform.isLoaded('ars_nouveau')) {
    let ars_armor = {
      sorceror_hood: 'ars_nouveau:sorcerer_hood',
      sorceror_robes: 'ars_nouveau:sorcerer_robes',
      sorceror_leggings: 'ars_nouveau:sorcerer_leggings',
      sorceror_boots: 'ars_nouveau:sorcerer_boots',
      arcanist_hood: 'ars_nouveau:arcanist_hood',
      arcanist_robes: 'ars_nouveau:arcanist_robes',
      arcanist_leggings: 'ars_nouveau:arcanist_leggings',
      arcanist_boots: 'ars_nouveau:arcanist_boots',
      battlemage_hood: 'ars_nouveau:battlemage_hood',
      battlemage_robes: 'ars_nouveau:battlemage_robes',
      battlemage_leggings: 'ars_nouveau:battlemage_leggings',
      battlemage_boots: 'ars_nouveau:battlemage_boots'
    }
    for (let [recipeid, id] of Object.entries(ars_armor)) {
      event.recipes.kubejs.shapeless(Item.of(id).withNBT({ Unbreakable: 1 }), [
        id,
        'create:experience_block'
      ]).id('kubejs:ars_nouveau/unbreakable_' + recipeid)
    }
  }
  if (Platform.isLoaded('ars_elemental')) {
    let ars_elemental_armor = {
      fire_hat: 'ars_elemental:fire_hat',
      fire_robes: 'ars_elemental:fire_robes',
      fire_leggings: 'ars_elemental:fire_leggings',
      fire_boots: 'ars_elemental:fire_boots',
      air_hat: 'ars_elemental:air_hat',
      air_robes: 'ars_elemental:air_robes',
      air_leggings: 'ars_elemental:air_leggings',
      air_boots: 'ars_elemental:air_boots',
      earth_hat: 'ars_elemental:earth_hat',
      earth_robes: 'ars_elemental:earth_robes',
      earth_leggings: 'ars_elemental:earth_leggings',
      earth_boots: 'ars_elemental:earth_boots',
      aqua_hat: 'ars_elemental:aqua_hat',
      aqua_robes: 'ars_elemental:aqua_robes',
      aqua_leggings: 'ars_elemental:aqua_leggings',
      aqua_boots: 'ars_elemental:aqua_boots'
    }
    for (let [recipeid, id] of Object.entries(ars_elemental_armor)) {
      event.recipes.kubejs.shapeless(Item.of(id).withNBT({ Unbreakable: 1 }), [
        id,
        'create:experience_block'
      ]).id('kubejs:ars_elemental/unbreakable_' + recipeid)
    }
  }
  if (Platform.isLoaded('irons_spellbooks')) {
    let irons_armor = {
      keeper_flamberge: 'irons_spellbooks:keeper_flamberge',
      legionnaire_flamberge: 'irons_spellbooks:legionnaire_flamberge',
      wandering_magician_helmet: 'irons_spellbooks:wandering_magician_helmet',
      wandering_magician_chestplate: 'irons_spellbooks:wandering_magician_chestplate',
      wandering_magician_leggings: 'irons_spellbooks:wandering_magician_leggings',
      wandering_magician_boots: 'irons_spellbooks:wandering_magician_boots',
      pumpkin_helmet: 'irons_spellbooks:pumpkin_helmet',
      pumpkin_chestplate: 'irons_spellbooks:pumpkin_chestplate',
      pumpkin_leggings: 'irons_spellbooks:pumpkin_leggings',
      pumpkin_boots: 'irons_spellbooks:pumpkin_boots',
      pyromancer_helmet: 'irons_spellbooks:pyromancer_helmet',
      pyromancer_chestplate: 'irons_spellbooks:pyromancer_chestplate',
      pyromancer_leggings: 'irons_spellbooks:pyromancer_leggings',
      pyromancer_boots: 'irons_spellbooks:pyromancer_boots',
      electromancer_helmet: 'irons_spellbooks:electromancer_helmet',
      electromancer_chestplate: 'irons_spellbooks:electromancer_chestplate',
      electromancer_leggings: 'irons_spellbooks:electromancer_leggings',
      electromancer_boots: 'irons_spellbooks:electromancer_boots',
      archevoker_helmet: 'irons_spellbooks:archevoker_helmet',
      archevoker_chestplate: 'irons_spellbooks:archevoker_chestplate',
      archevoker_leggings: 'irons_spellbooks:archevoker_leggings',
      archevoker_boots: 'irons_spellbooks:archevoker_boots',
      cultist_helmet: 'irons_spellbooks:cultist_helmet',
      cultist_chestplate: 'irons_spellbooks:cultist_chestplate',
      cultist_leggings: 'irons_spellbooks:cultist_leggings',
      cultist_boots: 'irons_spellbooks:cultist_boots',
      cryomancer_helmet: 'irons_spellbooks:cryomancer_helmet',
      cryomancer_chestplate: 'irons_spellbooks:cryomancer_chestplate',
      cryomancer_leggings: 'irons_spellbooks:cryomancer_leggings',
      cryomancer_boots: 'irons_spellbooks:cryomancer_boots',
      shadowwalker_helmet: 'irons_spellbooks:shadowwalker_helmet',
      shadowwalker_chestplate:'irons_spellbooks:shadowwalker_chestplate',
      shadowwalker_leggings: 'irons_spellbooks:shadowwalker_leggings',
      shadowwalker_boots: 'irons_spellbooks:shadowwalker_boots',
      priest_helmet: 'irons_spellbooks:priest_helmet',
      priest_chestplate: 'irons_spellbooks:priest_chestplate',
      priest_leggings: 'irons_spellbooks:priest_leggings',
      priest_boots: 'irons_spellbooks:priest_boots',
      plagued_helmet: 'irons_spellbooks:plagued_helmet',
      plagued_chestplate: 'irons_spellbooks:plagued_chestplate',
      plagued_leggings: 'irons_spellbooks:plagued_leggings',
      plagued_boots: 'irons_spellbooks:plagued_boots',
      netherite_mage_helmet: 'irons_spellbooks:netherite_mage_helmet',
      netherite_mage_chestplate: 'irons_spellbooks:netherite_mage_chestplate',
      netherite_mage_leggings: 'irons_spellbooks:netherite_mage_leggings',
      netherite_mage_boots: 'irons_spellbooks:netherite_mage_boots',
      wizard_helmet: 'irons_spellbooks:wizard_helmet',
      wizard_hat: 'irons_spellbooks:wizard_hat',
      wizard_chestplate: 'irons_spellbooks:wizard_chestplate',
      wizard_leggings: 'irons_spellbooks:wizard_leggings',
      wizard_boots: 'irons_spellbooks:wizard_boots',
      infernal_sorcerer_chestplate: 'irons_spellbooks:infernal_sorcerer_chestplate',
      paladin_chestplate: 'irons_spellbooks:paladin_chestplate',
      speed_boots: 'irons_spellbooks:speed_boots'
    }
    for (let [recipeid, id] of Object.entries(irons_armor)) {
      event.recipes.kubejs.shapeless(Item.of(id).withNBT({ Unbreakable: 1 }), [
        id,
        'create:experience_block'
      ]).id('kubejs:irons_spellbooks/unbreakable_' + recipeid)
    }
  }
})

/*
PlayerEvents.inventoryChanged(event => {
  const { item } = event
  for (let i = 0; i < tools.length; i++) {
    let element = tools[i];
    if (item.getId() == 'minecraft:netherite_' + element) {
      item.nbt.merge({ Unbreakable: 1 })
    }
    if (item.getId() == 'kubejs:iridium_' + element) {
      item.nbt.merge({ Unbreakable: 1 })
    }
  }
  for (let i = 0; i < final_tools.length; i++) {
    let element = final_tools[i];
    if (item.getId() == 'kubejs:final_' + element) {
      item.nbt.merge({ Unbreakable: 1 })
    }
  }
  for (let i = 0; i < mod_tools.length; i++) {
    let element = mod_tools[i];
    if (item.getId() == element) {
      item.nbt.merge({ Unbreakable: 1 })
    }
  }
})
*/
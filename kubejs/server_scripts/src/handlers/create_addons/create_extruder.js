// requires: create_mechanical_extruder
// requires: ae2
// requires: kubejs_create

/**
 * @file Server handler for Create Mehcanical Extruder.
 * @version 1.20.1-OMNIA
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

let orestones = {
  asurine: 'create:raw_zinc_block',
  crimsite: 'minecraft:raw_iron_block',
  ochrum: 'minecraft:raw_gold_block',
  veridium: 'minecraft:raw_copper_block',
}

ServerEvents.recipes(event => {
  event.remove({ output: 'create_mechanical_extruder:mechanical_extruder' })
  event.shaped('create_mechanical_extruder:mechanical_extruder', [
    'I I',
    'GPG',
    'IGI'
  ], {
    I: 'kubejs:iridium_casing',
    G: 'ae2:quartz_vibrant_glass',
    P: 'create:mechanical_press'
  }).id('create_mechanical_extruder:mechanical_extruder')
  event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:amethyst_shard').withChance(0.25), [
    Item.of('minecraft:budding_amethyst'),
    Item.of('minecraft:budding_amethyst')
  ]).requiredBonks(1)
    .withCatalyst('minecraft:budding_amethyst')
    .id('kubejs:extruding/amethyst_shard_from_budding_amethyst_catalyst')
  event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:amethyst_block'), [
    Item.of('kubejs:duplicator_block'),
    Item.of('kubejs:duplicator_block')
  ]).requiredBonks(1)
    .withCatalyst('minecraft:budding_amethyst')
    .id('kubejs:extruding/amethyst_duplication')
  for (let [material, raw] of Object.entries(orestones)) {
    event.recipes.create_mechanical_extruder.extruding(Item.of(raw, 64), [
      Item.of('kubejs:duplicator_block'),
      Item.of('kubejs:duplicator_block')
    ]).requiredBonks(1)
      .withCatalyst(`create:${material}`)
      .id(`kubejs:extruding/duplicator/${material}`)
    event.recipes.create_mechanical_extruder.extruding(Item.of(`create:${material}`), [
      Item.of(raw),
      Fluid.of('kubejs:condensed_universal_entropy')
    ]).requiredBonks(1)
      .withCatalyst('minecraft:crying_obsidian')
      .id(`kubejs:extruding/renew_extruder_${material}_with_crying_obsidian`)
  }
  event.recipes.create_mechanical_extruder.extruding(Item.of('create:limestone'), [
    Fluid.of('create:honey'),
    Fluid.of('minecraft:lava')
  ]).requiredBonks(1).id('kubejs:renew_extruder_limestone')
  event.recipes.create_mechanical_extruder.extruding(Item.of('create:limestone'), [
    Item.of('minecraft:honey_block'),
    Fluid.of('minecraft:lava')
  ]).requiredBonks(1).id('kubejs:renew_extruder_limestone_alt')
  event.recipes.create_mechanical_extruder.extruding(Item.of('create:limestone', 64), [
    Fluid.of('create:honey'),
    Fluid.of('minecraft:lava')
  ]).requiredBonks(1).withCatalyst('kubejs:duplicator_block').id('kubejs:extruding/duplicator/limestone_compat')
  event.recipes.create_mechanical_extruder.extruding(Item.of('create:scoria'), [
    Fluid.of('create:chocolate'),
    Fluid.of('minecraft:lava')
  ]).requiredBonks(1).id('kubejs:renew_extruder_scoria_compat')
  event.recipes.create_mechanical_extruder.extruding(Item.of('create:scoria', 64), [
    Fluid.of('create:chocolate'),
    Fluid.of('minecraft:lava')
  ]).requiredBonks(1).withCatalyst('kubejs:duplicator_block').id('kubejs:extruding/duplicator/scoria_compat')
  if (Platform.isLoaded('malum')) {
    event.recipes.create_mechanical_extruder.extruding(Item.of('malum:cthonic_gold_fragment'), [
      Item.of('malum:twisted_rock'),
      Fluid.of('kubejs:condensed_universal_entropy')
    ]).requiredBonks(4).withCatalyst('malum:cthonic_gold_ore').id('kubejs:malum/extruder_cthonic_gold')
  }
  if (Platform.isLoaded('quark')) {
    event.recipes.create_mechanical_extruder.extruding(Item.of('quark:shale'), [
      Item.of('minecraft:blue_ice'),
      Fluid.of('minecraft:lava')
    ]).requiredBonks(1).withCatalyst('quark:shale').id('kubejs:quark/extruder_shale')
  }
})
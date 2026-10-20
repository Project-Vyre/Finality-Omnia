/**
 * @file Everything carbon related.
 * @version 1211-OMNIA
 */

// requires: kubejs_create
// ignored: true

ServerEvents.recipes(event => {
  // COAL RENEW
  event.recipes.create.compacting([
    'minecraft:coal',
    CreateItem.of('create:experience_nugget', 0.25)
  ], 'minecraft:dried_kelp_block').heated().id('kubejs:compacting/renew_coal')
  event.recipes.create.compacting([
    'minecraft:coal_block',
    CreateItem.of('create:experience_nugget', 0.25)
  ], '9x minecraft:dried_kelp_block').heated().id('kubejs:compacting/renew_coal_bulk')
  // DIAMOND RENEW
  event.recipes.create.compacting([
    'minecraft:diamond',
    CreateItem.of('create:experience_nugget', 0.25)
  ], [
    'minecraft:coal_block',
    Fluid.of('minecraft:lava', 250)
  ]).superheated().id('kubejs:compacting/renew_diamond')
  event.recipes.create.compacting([
    'minecraft:diamond_block',
    CreateItem.of('create:experience_nugget', 0.25)
  ], [
    '9x minecraft:coal_block',
    Fluid.of('minecraft:lava', 250)
  ]).superheated().id('kubejs:compacting/renew_diamond_bulk')
  // CHARCOAL TO COAL CONVERSION
  event.recipes.create.compacting('minecraft:coal', [
    'minecraft:charcoal',
    Ingredient.of('#minecraft:leaves')
  ]).heated().id('kubejs:compacting/charcoal_with_leaves_to_coal_conversion')
  event.recipes.create.compacting('minecraft:coal', [
    'minecraft:charcoal',
    'minecraft:moss_block',
    Fluid.ingredientOf('create:potion', {
      "create:potion_fluid_bottle_type": "regular",
      "minecraft:potion_contents": {
        "potion": "minecraft:thick"
      }
    }).withAmount(250),
    // Fluid.of('create:potion', 250, '[create:potion_fluid_bottle_type="regular", potion_contents={potion:"minecraft:thick"}]')
  ]).heated().id('kubejs:compacting/charcoal_with_moss_to_coal_conversion')
})
  // 'minecraft:potion[potion_contents={potion:"minecraft:thick"}]'
  // 'create:potion_fluid_bottle_type="regular"[potion_contents={potion:"minecraft:thick"}]'
  /*
  event.custom({
    "type": "create:compacting",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:charcoal"
      },
      {
        "item": "minecraft:moss_block"
      },
      {
        "type": "neoforge:components",
        "amount": 250,
        "components": {
          "create:potion_fluid_bottle_type": "regular",
          "minecraft:potion_contents": {
            "potion": "minecraft:thick"
          }
        },
        "fluid": "create:potion"
      }
    ],
    "results": [
      {
        "id": "minecraft:coal"
      }
    ]
  }).id('kubejs:charcoal_with_moss_to_coal_conversion')
  */
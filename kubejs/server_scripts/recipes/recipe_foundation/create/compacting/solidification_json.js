/**
 * @file Fluid to solid conversion.
 * @version 1211-OMNIA
 */

// requires: create
// ignored: true

ServerEvents.recipes(event => {
  /**
   * 
   * @param {string} nugget 
   * @param {string} metal 
   */
  let NUGGET_SOLIDIFY = (nugget, metal) => {
    event.custom({
      type: 'create:compacting',
      ingredients: [
        {
          type: 'fluid_stack',
          amount: 10,
          fluid: `kubejs:molten_${metal}`
        }
      ],
      results: [
        Item.of(nugget).toJson()
      ]
    }).id(`kubejs:molten_${metal}_to_${metal}_nugget`)
  }
  /**
   * 
   * @param {string} ingot 
   * @param {string} metal 
   */
  let INGOT_SOLIDIFY = (ingot, metal) => {
    event.custom({
      type: 'create:compacting',
      ingredients: [
        {
          "type": "fluid_stack",
          "amount": 90,
          "fluid": `kubejs:molten_${metal}`
        }
      ],
      results: [
        Item.of(ingot).toJson()
      ]
    }).id(`kubejs:molten_${metal}_to_${metal}_ingot`)
  }
  NUGGET_SOLIDIFY('minecraft:iron_nugget', 'iron')
  NUGGET_SOLIDIFY('minecraft:gold_nugget', 'gold')
  NUGGET_SOLIDIFY('create:copper_nugget', 'copper')
  NUGGET_SOLIDIFY('create:zinc_nugget', 'zinc')
  NUGGET_SOLIDIFY('create:brass_nugget', 'brass')
  NUGGET_SOLIDIFY('kubejs:netherite_nugget', 'netherite')
  INGOT_SOLIDIFY('minecraft:iron_ingot', 'iron')
  INGOT_SOLIDIFY('minecraft:gold_ingot', 'gold')
  INGOT_SOLIDIFY('minecraft:copper_ingot', 'copper')
  INGOT_SOLIDIFY('create:zinc_ingot', 'zinc')
  INGOT_SOLIDIFY('create:brass_ingot', 'brass')
  INGOT_SOLIDIFY('minecraft:netherite_ingot', 'netherite')
})
/*
{
    "type": "create:compacting",
    "heat_requirement": "superheated",
    "ingredients": [
      {
        "item": "minecraft:coal_block"
      },
      {
        "type": "fluid_stack",
        "amount": 250,
        "fluid": "minecraft:lava"
      }
    ],
    "results": [
      {
        "id": "minecraft:diamond"
      },
      {
        "id": "create:experience_nugget",
        "chance": 0.25
      }
    ]
  }
*/
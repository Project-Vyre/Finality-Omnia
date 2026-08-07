/**
 * @file Create recipe tweaks that slightly deviate from the original recipes.
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: kubejs_create
// ignored: false
// Script should be set to ignored when adjustments are not necessary.

ServerEvents.recipes(event => {
  event.remove([
    { id: 'create:crushing/asurine' },
    { id: 'create:crushing/asurine_recycling' },
    { id: 'create:crushing/crimsite' },
    { id: 'create:crushing/crimsite_recycling' },
    { id: 'create:crushing/ochrum' },
    { id: 'create:crushing/ochrum_recycling' },
    { id: 'create:crushing/veridium' },
    { id: 'create:crushing/veridium_recycling' },
    { id: 'create:crushing/tuff' },
    { id: 'create:crushing/tuff_recycling' }
  ])
  /**
   * CRUSHING
   */
  // ORESTONES
  event.recipes.create.crushing([
    '9x create:crushed_raw_zinc',
    Item.of('create:zinc_nugget', 9).withChance(0.75)
  ], 'create:asurine').processingTime(250).id('kubejs:create/crushing/asurine')
  event.recipes.create.crushing([
    '9x create:crushed_raw_zinc',
    Item.of('create:zinc_nugget', 9).withChance(0.75)
  ], '#create:stone_types/asurine').processingTime(250).id('kubejs:create/crushing/asurine_recycling')
  event.recipes.create.crushing([
    '9x create:crushed_raw_iron',
    Item.of('minecraft:iron_nugget', 9).withChance(0.75)
  ], 'create:crimsite').processingTime(250).id('kubejs:create/crushing/crimsite')
  event.recipes.create.crushing([
    '9x create:crushed_raw_iron',
    Item.of('minecraft:iron_nugget', 9).withChance(0.75)
  ], '#create:stone_types/crimsite').processingTime(250).id('kubejs:create/crushing/crimsite_recycling')
  event.recipes.create.crushing([
    '9x create:crushed_raw_gold',
    Item.of('minecraft:gold_nugget', 9).withChance(0.75)
  ], 'create:ochrum').processingTime(250).id('kubejs:create/crushing/ochrum')
  event.recipes.create.crushing([
    '9x create:crushed_raw_gold',
    Item.of('minecraft:gold_nugget', 9).withChance(0.75)
  ], '#create:stone_types/ochrum').processingTime(250).id('kubejs:create/crushing/ochrum_recycling')
  event.recipes.create.crushing([
    '9x create:crushed_raw_copper',
    Item.of('create:copper_nugget', 9).withChance(0.75)
  ], 'create:veridium').processingTime(250).id('kubejs:create/crushing/veridium')
  event.recipes.create.crushing([
    '9x create:crushed_raw_copper',
    Item.of('create:copper_nugget', 9).withChance(0.75)
  ], '#create:stone_types/veridium').processingTime(250).id('kubejs:create/crushing/veridium_recycling')
  // TUFF
  if (Platform.isLoaded('createaddition')) {
    event.recipes.create.crushing([
      Item.of('minecraft:flint').withChance(0.25),
      Item.of('create:crushed_raw_gold').withChance(0.25),
      Item.of('create:crushed_raw_copper').withChance(0.25),
      Item.of('create:crushed_raw_zinc').withChance(0.25),
      Item.of('create:crushed_raw_iron').withChance(0.25),
      Item.of('kubejs:crushed_raw_iridium').withChance(0.25),
      Item.of('createaddition:electrum_nugget').withChance(0.25)
    ], 'minecraft:tuff').processingTime(350).id('kubejs:create/crushing/tuff')
    event.recipes.create.crushing([
      Item.of('minecraft:flint').withChance(0.25),
      Item.of('create:crushed_raw_gold').withChance(0.25),
      Item.of('create:crushed_raw_copper').withChance(0.25),
      Item.of('create:crushed_raw_zinc').withChance(0.25),
      Item.of('create:crushed_raw_iron').withChance(0.25),
      Item.of('kubejs:crushed_raw_iridium').withChance(0.25),
      Item.of('createaddition:electrum_nugget').withChance(0.25)
    ], '#create:stone_types/tuff').processingTime(350).id('kubejs:create/crushing/tuff_recycling')
  } else {
    event.recipes.create.crushing([
      Item.of('minecraft:flint').withChance(0.25),
      Item.of('create:crushed_raw_gold').withChance(0.25),
      Item.of('create:crushed_raw_copper').withChance(0.25),
      Item.of('create:crushed_raw_zinc').withChance(0.25),
      Item.of('create:crushed_raw_iron').withChance(0.25),
      Item.of('kubejs:crushed_raw_iridium').withChance(0.25)
    ], 'minecraft:tuff').processingTime(350).id('kubejs:create/crushing/tuff')
    event.recipes.create.crushing([
      Item.of('minecraft:flint').withChance(0.25),
      Item.of('create:crushed_raw_gold').withChance(0.25),
      Item.of('create:crushed_raw_copper').withChance(0.25),
      Item.of('create:crushed_raw_zinc').withChance(0.25),
      Item.of('create:crushed_raw_iron').withChance(0.25),
      Item.of('kubejs:crushed_raw_iridium').withChance(0.25)
    ], '#create:stone_types/tuff').processingTime(350).id('kubejs:create/crushing/tuff_recycling')
  }
  /**
   * SPLASHING
   */
  event.remove([
    { id: 'create:splashing/gravel' },
    { id: 'create:splashing/red_sand' },
    { id: 'create:splashing/soul_sand' }
  ])
  event.recipes.create.splashing([
    Item.of('minecraft:flint').withChance(0.50),
    Item.of('minecraft:iron_nugget', 3).withChance(0.25)
  ], 'minecraft:gravel').id('kubejs:create/splashing/gravel')
  event.recipes.create.splashing([
    Item.of('minecraft:gold_nugget', 3).withChance(0.50),
    Item.of('minecraft:dead_bush').withChance(0.05)
  ], 'minecraft:red_sand').id('kubejs:create/splashing/red_sand')
  event.recipes.create.splashing([
    Item.of('minecraft:quartz', 4).withChance(0.50),
    Item.of('minecraft:gold_nugget').withChance(0.10)
  ], 'minecraft:soul_sand').id('kubejs:create/splashing/soul_sand')
})
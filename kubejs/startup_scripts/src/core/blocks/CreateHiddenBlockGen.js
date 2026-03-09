// requires: create

/**
 * @file Soooo apparently these exist.
 */

StartupEvents.registry('block', event => {
  event.create('create:refined_radiance_block')
    .textureAll('create:block/refined_radiance_block')
    .soundType('netherite_block')
    .hardness(5)
    .resistance(1000)
    .lightLevel(1.0)
    .requiresTool(true)
    .tagBlock('minecraft:wither_immune')
    .tagBlock('minecraft:dragon_immune')
    .tagBlock('minecraft:mineable/pickaxe')
    .item(ctx => {
      ctx.rarity('rare')
      ctx.fireResistant(true)
    })
  event.create('create:dark_steel_block')
    .textureAll('create:block/dark_metal_block')
    .soundType('netherite_block')
    .hardness(5)
    .resistance(1000)
    .requiresTool(true)
    .tagBlock('minecraft:wither_immune')
    .tagBlock('minecraft:dragon_immune')
    .tagBlock('minecraft:mineable/pickaxe')
    .item(ctx => {
      ctx.rarity('uncommon')
      ctx.fireResistant(true)
    })
})
/**
 * @file Registry for blocks that depend on Fusion.
 * @version 1.21.1-OMNIA
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// ignored: false
// requires: fusion

StartupEvents.registry("block", (event) => {
  event
    .create("kubejs:iridium_block_connecting")
    .texture("kubejs:block/iridium_block_connecting")
    .soundType("netherite_block")
    .hardness(25)
    .resistance(1000)
    .requiresTool(true)
    .tagBlock("minecraft:wither_immune")
    .tagBlock("minecraft:dragon_immune")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:needs_netherite_tool")
    .item((ctx) => {
      ctx.rarity("rare")
      ctx.fireResistant(true)
      ctx.tag("kubejs:iridium_blocks")
    })
  event
    .create("kubejs:iridium_casing")
    .texture("kubejs:block/iridium_casing_connected")
    .soundType("netherite_block")
    .hardness(25)
    .resistance(1000)
    .requiresTool(true)
    .tagBlock("minecraft:wither_immune")
    .tagBlock("minecraft:dragon_immune")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("forge:needs_netherite_tool")
    .item((ctx) => {
      ctx.rarity("rare")
      ctx.fireResistant(true)
    })
  event
    .create("kubejs:ornate_iridium_block_connecting")
    .texture("kubejs:block/ornate_iridium_block_connecting")
    .soundType("netherite_block")
    .hardness(25)
    .resistance(1000)
    .requiresTool(true)
    .tagBlock("minecraft:wither_immune")
    .tagBlock("minecraft:dragon_immune")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:needs_netherite_tool")
    .item((ctx) => {
      ctx.rarity("rare")
      ctx.fireResistant(true)
      ctx.tag("kubejs:iridium_blocks")
    })
  event
    .create("kubejs:ornate_iridium_pillar_connecting")
    .soundType("netherite_block")
    .hardness(25)
    .resistance(1000)
    .requiresTool(true)
    .property(BlockProperties.AXIS)
    .placementState((ctx) => {
      ctx.set(BlockProperties.AXIS, ctx.nearestLookingDirection.axis)
    })
    .tagBlock("minecraft:wither_immune")
    .tagBlock("minecraft:dragon_immune")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:needs_netherite_tool")
    .item((ctx) => {
      ctx.rarity("rare")
      ctx.fireResistant(true)
      ctx.tag("kubejs:iridium_blocks")
    })
  event
    .create("kubejs:iridium_quartz_block_connecting")
    .texture("kubejs:block/iridium_quartz_block_connecting")
    .soundType("netherite_block")
    .hardness(25)
    .resistance(1000)
    .requiresTool(true)
    .tagBlock("minecraft:wither_immune")
    .tagBlock("minecraft:dragon_immune")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:needs_netherite_tool")
    .item((ctx) => {
      ctx.rarity("rare")
      ctx.fireResistant(true)
      ctx.tag("kubejs:iridium_blocks")
    })
  event
    .create("kubejs:iridium_tiles_connecting")
    .texture("kubejs:block/iridium_tiles_connecting")
    .soundType("netherite_block")
    .hardness(25)
    .resistance(1000)
    .requiresTool(true)
    .tagBlock("minecraft:wither_immune")
    .tagBlock("minecraft:dragon_immune")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:needs_netherite_tool")
    .item((ctx) => {
      ctx.rarity("rare")
      ctx.fireResistant(true)
      ctx.tag("kubejs:iridium_blocks")
    })
  event
    .create("kubejs:high_entropy_alloy_block_connecting")
    .texture("kubejs:block/high_entropy_alloy_block_connecting")
    .soundType("netherite_block")
    .hardness(500)
    .resistance(1000)
    .lightLevel(1.0)
    .requiresTool(true)
    .tagBlock("minecraft:wither_immune")
    .tagBlock("minecraft:dragon_immune")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("forge:needs_netherite_tool")
    .item((ctx) => {
      ctx.rarity("epic")
      ctx.fireResistant(true)
    })
})

/**
 * @file Tooltip generation for Fusion blocks only.
 * @version 1201-O
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: fusion

let blocks = [
  'iridium_block_connecting',
  'iridium_quartz_block_connecting',
  'iridium_tiles_connecting',
  'ornate_iridium_block_connecting',
  'ornate_iridium_pillar_connecting',
  'high_entropy_alloy_block_connecting'
]

ClientEvents.lang('en_us', event => {
  event.add('kubejs', 'kubejs.fusion.tooltip.connecting', 'Connecting')
})

ItemEvents.tooltip(event => {
  for (let i = 0; i < blocks.length; i++) {
    let id = blocks[i];
    event.add('kubejs:' + id, Component.translatable('kubejs.fusion.tooltip.connecting').gray())
  }
})
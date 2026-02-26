// requires: biomesoplenty
// requires: kubejs_create

/**
 * @file Server handler for Biomes O' Plenty.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.tags('item', event => {
  event.add('biomesoplenty:flesh', [
    'biomesoplenty:flesh',
    'biomesoplenty:porous_flesh'
  ])
})

ServerEvents.recipes(event => {
  event.recipes.create.sandpaper_polishing(
    'create:polished_rose_quartz',
    'biomesoplenty:rose_quartz_chunk'
  ).id('finality:create/sandpaper_polishing/bop_rose_quartz')
  event.shapeless('4x biomesoplenty:rose_quartz_chunk', [
    'biomesoplenty:rose_quartz_block'
  ]).id('finality:bop/rose_quartz_block_decompression')
  // FLESH RELATED RECIPES
  event.recipes.create.cutting([
    '2x minecraft:rotten_flesh',
    Item.of('biomesoplenty:flesh_tendons', 2).withChance(0.75)
  ], '#biomesoplenty:flesh').id('finality:bop/flesh_cutting')
  event.recipes.create.mixing('biomesoplenty:flesh', [
    'create:cinder_flour',
    '8x minecraft:rotten_flesh'
  ]).id('finality:bop/flesh_block')
  event.recipes.create.mixing('biomesoplenty:porous_flesh', [
    'minecraft:wet_sponge',
    '8x minecraft:rotten_flesh'
  ]).id('finality:bop/porous_flesh_block')
  if (Platform.isLoaded('aether')) {
    event.shaped('minecraft:chest', [
      'WWW',
      'W W',
      'WWW'
    ], {
      W: [
        'biomesoplenty:fir_planks',
        'biomesoplenty:redwood_planks',
        'biomesoplenty:cherry_planks', // deprecate in 1.20.x+
        'biomesoplenty:mahogany_planks',
        'biomesoplenty:jacaranda_planks',
        'biomesoplenty:palm_planks',
        'biomesoplenty:willow_planks',
        'biomesoplenty:dead_planks',
        'biomesoplenty:magic_planks',
        'biomesoplenty:umbran_planks',
        'biomesoplenty:hellbark_planks',
      ]
    }).id(`finality:biomesoplenty/crafting/vanilla_chest_fallback`)
  }
  // END CORRUPTION
  event.recipes.create.emptying([
    Fluid.of('biomesoplenty:liquid_null')
  ], 'kubejs:null_matter').id('kubejs:biomesoplenty/emptying/null_matter_emptying')
  event.recipes.create.emptying([
    Fluid.of('biomesoplenty:liquid_null'),
    'kubejs:monochromatic_singularity'
  ], 'kubejs:monochromatic_singularity').id('kubejs:biomesoplenty/emptying/liquid_null_from_monochromatic_singularity')
  event.recipes.create.filling('biomesoplenty:unmapped_end_stone', [
    'minecraft:end_stone',
    Fluid.of('biomesoplenty:liquid_null', 250)
  ]).id('kubejs:biomesoplenty/filling/unmapped_end_stone')
  event.recipes.create.filling('biomesoplenty:null_leaves', [
    '#minecraft:leaves',
    Fluid.of('biomesoplenty:liquid_null', 250)
  ]).id('kubejs:biomesoplenty/filling/null_leaves')
  event.recipes.create.filling('biomesoplenty:null_plant', [
    '#minecraft:saplings',
    Fluid.of('biomesoplenty:liquid_null', 250)
  ]).id('kubejs:biomesoplenty/filling/null_plant')
  event.recipes.create.crushing(
    'biomesoplenty:null_block',
    'biomesoplenty:null_end_stone'
  ).id('kubejs:biomesoplenty/crushing/null_block')
  event.recipes.minecraft.crafting_shaped('biomesoplenty:anomaly', [
    '00',
    '00'
  ], {
    0: 'biomesoplenty:null_block'
  }).id('kubejs:biomesoplenty/anomaly')
})

let bop_stripped_logs = [
  'biomesoplenty:stripped_empyreal_log',
  'biomesoplenty:stripped_fir_log',
  'biomesoplenty:stripped_maple_log',
  'biomesoplenty:stripped_pine_log'
]

let bop_stripped_woods = [
  'biomesoplenty:stripped_empyreal_wood',
  'biomesoplenty:stripped_fir_wood',
  'biomesoplenty:stripped_maple_wood',
  'biomesoplenty:stripped_pine_wood'
]

ServerEvents.tags('item', event => {
  if (Platform.isLoaded('create')) {
    for (let i = 0; i < bop_stripped_logs.length; i++) {
      let element = bop_stripped_logs[i];
      event.add('forge:stripped_logs', element)
    }
    for (let I = 0; I < bop_stripped_woods.length; I++) {
      let element = bop_stripped_woods[I];
      event.add('forge:stripped_wood', element)
    }
  }
})

ServerEvents.tags('block', event => {
  if (Platform.isLoaded('create')) {
    for (let i = 0; i < bop_stripped_logs.length; i++) {
      let element = bop_stripped_logs[i];
      event.add('forge:stripped_logs', element)
    }
    for (let I = 0; I < bop_stripped_woods.length; I++) {
      let element = bop_stripped_woods[I];
      event.add('forge:stripped_wood', element)
    }
  }
})

ServerEvents.tags('fluid', event => {
  event.add('create:bottomless/allow', [
    'biomesoplenty:blood',
    'biomesoplenty:liquid_null'
  ])
})
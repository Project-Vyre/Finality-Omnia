/**
 * @file Tooltip lang generation for everything related to Sophisticated Storage.
 * Requires {@link kubejs/client_scripts/lang/ProtoTooltipClass.js} to generate translation keys.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: sophisticatedstorage
// ignored: false

/** @info Highlight 1x { filtering } */
let sophstor_default_advanced_filtering = ['Advanced Upgrade', 'Has more %s options.']
let sophstor_stack_upgrade = 'Multiplies the number of stacks that can fit in a slot by '
/** @info Highlight 2x { pickup, direct } */
let sophstor_pickup_upgrade = 'Makes the storage block automatically %s dropped items on %s contact.'
/** @info Highlight 1x { Filters } */
let sophstor_filter_upgrade = '%s items transported in and / or out of the storage block.'
/** @info Highlight 2x { feeds, storage block's inventory } */
let sophstor_feeding_upgrade = 'Automatically %s player with food from the %s.'
/** @info Highlight 1x { compressed } */
let sophstor_compacting_upgrade = 'Compacts items into their %s variants.'
/** @info Highlight 1x { Voids } */
let sophstor_void_upgrade = '%s items selected in the filter.'
let sophstor_pump_upgrade = 'Pumps fluids between the storage block and adjacent blocks, if applicable.'
let sophstor_hopper_upgrade = 'Pulls items from storage blocks on top and / or pushes them to storage blocks below.'

let sophstor_blocks = [
  'barrel',
  'copper_barrel',
  'iron_barrel',
  'gold_barrel',
  'diamond_barrel',
  'netherite_barrel',
  'chest',
  'copper_chest',
  'iron_chest',
  'gold_chest',
  'diamond_chest',
  'netherite_chest',
  'limited_barrel_1',
  'limited_copper_barrel_1',
  'limited_iron_barrel_1',
  'limited_gold_barrel_1',
  'limited_diamond_barrel_1',
  'limited_netherite_barrel_1',
  'limited_barrel_2',
  'limited_copper_barrel_2',
  'limited_iron_barrel_2',
  'limited_gold_barrel_2',
  'limited_diamond_barrel_2',
  'limited_netherite_barrel_2',
  'limited_barrel_3',
  'limited_copper_barrel_3',
  'limited_iron_barrel_3',
  'limited_gold_barrel_3',
  'limited_diamond_barrel_3',
  'limited_netherite_barrel_3',
  'limited_barrel_4',
  'limited_copper_barrel_4',
  'limited_iron_barrel_4',
  'limited_gold_barrel_4',
  'limited_diamond_barrel_4',
  'limited_netherite_barrel_4'
]

ClientEvents.lang('en_us', event => {
  for (let i = 0; i < sophstor_blocks.length; i++) {
    let element = sophstor_blocks[i];
    event.addAll('kubejs',
      createTooltip('sophisticatedstorage:' + element)
        .addSummary('An advanced* storage solution!')
        .addBehaviour([
          'Additional Info',
          '*Requires %s to prevent item spillage into the world.'
        ])
        .addHighlight(['Packing Tape'])
        .build()
    )
  }
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:basic_tier_upgrade')
      .addSummary('Upgrades %s inventories to their %s version.')
      .addBehaviour([
        'Additional Info',
        'Does not work with %s or %s chests! There are recipes to convert them back to the vanilla chest.'
      ])
      .addHighlight([
        'vanilla',
        'sophisticated',
        'Quark',
        'Woodworks'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:stack_upgrade_tier_1')
      .addSummary(sophstor_stack_upgrade + '%s.')
      .addHighlight(['2x'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:stack_upgrade_tier_1_plus')
      .addSummary(sophstor_stack_upgrade + '%s.')
      .addHighlight(['3x'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:stack_upgrade_tier_2')
      .addSummary(sophstor_stack_upgrade + '%s.')
      .addHighlight(['4x'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:stack_upgrade_tier_3')
      .addSummary(sophstor_stack_upgrade + '%s.')
      .addHighlight(['8x'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:stack_upgrade_tier_4')
      .addSummary(sophstor_stack_upgrade + '%s.')
      .addHighlight(['16x'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:stack_upgrade_tier_5')
      .addSummary(sophstor_stack_upgrade + '%s.')
      .addHighlight(['32x'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:stack_upgrade_omega_tier')
      .addSummary('Multiplies the number of stacks that can fit in a slot by the %s value. %s')
      .addHighlight([
        'maximum',
        '[33,554,431X]'
      ])
      .build()
  )
  // UPGRADE MODULES
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:pickup_upgrade')
      .addSummary(sophstor_pickup_upgrade)
      .addHighlight(['pickup', 'direct'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:advanced_pickup_upgrade')
      .addSummary(sophstor_pickup_upgrade)
      .addBehaviour(sophstor_default_advanced_filtering)
      .addHighlight(['pickup', 'direct', 'filtering'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:filter_upgrade')
      .addSummary(sophstor_filter_upgrade)
      .addHighlight(['Filters'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:advanced_filter_upgrade')
      .addSummary(sophstor_filter_upgrade)
      .addBehaviour(sophstor_default_advanced_filtering)
      .addHighlight(['Filters', 'filtering'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:magnet_upgrade')
      .addSummary('Magnetically attracts items into the storage block.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:advanced_magnet_upgrade')
      .addSummary('Magnetically attracts items into the storage block with %s range.')
      .addBehaviour(sophstor_default_advanced_filtering)
      .addHighlight(['greater', 'filtering'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:feeding_upgrade')
      .addSummary(sophstor_feeding_upgrade)
      .addHighlight(['feeds', 'storage block\'s inventory'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:advanced_feeding_upgrade')
      .addSummary(sophstor_feeding_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'More options for when food gets fed to player.'
      ])
      .addHighlight(['feeds', 'storage block\'s inventory'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:compacting_upgrade')
      .addSummary(sophstor_compacting_upgrade)
      .addBehaviour([
        'Basic Upgrade',
        'Only works for %s compacting recipes.'
      ])
      .addHighlight(['compressed', '2x2'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:advanced_compacting_upgrade')
      .addSummary(sophstor_compacting_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'Works with both %s and %s compacting recipes with more filtering options.'
      ])
      .addHighlight(['compressed', '2x2', '3x3'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:void_upgrade')
      .addSummary(sophstor_void_upgrade)
      .addHighlight(['Voids'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:advanced_void_upgrade')
      .addSummary(sophstor_void_upgrade)
      .addBehaviour(sophstor_default_advanced_filtering)
      .addHighlight(['Voids', 'filtering'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:crafting_upgrade')
      .addSummary('Adds a crafting grid in your storage upgrade tab.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:stonecutter_upgrade')
      .addSummary('Adds a stonecutter in your storage upgrade tab.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:jukebox_upgrade')
      .addSummary('Your very own %s Jukebox, but in storage.')
      .addHighlight(['portable'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:advanced_jukebox_upgrade')
      .addSummary('Your very own %s Jukebox, but in storage.')
      .addBehaviour([
        'Advanced Upgrade',
        'Now allows for %s disc storage.'
      ])
      .addHighlight(['portable', 'more'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:pump_upgrade')
      .addSummary(sophstor_pump_upgrade)
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:advanced_pump_upgrade')
      .addSummary(sophstor_pump_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'Works with fluid containers in your hand and fluid blocks in the world. Also allows for filtering which fluids are pumped.'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:xp_pump_upgrade')
      .addSummary('Pumps experience between the storage block and the player.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:compression_upgrade')
      .addSummary('Automatically compresses / decompresses items. Recommended for use in Limited Barrels.')
      .addBehaviour([
        'Additional Info - 1',
        'When in Barrels, Chests or Shulker Boxes, the compression order is from most compacted form on the %s side to the most uncompressed form on the %s slots with an indicator.'
      ])
      .addBehaviour([
        'Additional Info - 2',
        'Slots marked with an %s after an item is placed inside a compression slot indicate that the item is unable to be compressed / decompressed any further. However, you can reposition the item itself on any of the five slots when in a Barrel, Chest or Shulker Box.'
      ])
      .addHighlight([
        'leftmost',
        'rightmost',
        'X'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:hopper_upgrade')
      .addSummary(sophstor_hopper_upgrade)
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:advanced_hopper_upgrade')
      .addSummary(sophstor_hopper_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        '%s and with input / output options.'
      ])
      .addHighlight(['Faster'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:alchemy_upgrade')
      .addSummary('Automatically uses potions, food with effects, or milk buckets.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:advanced_alchemy_upgrade')
      .addSummary('Automatically uses potions, food with effects, or milk buckets.')
      .addBehaviour([
        'Advanced Upgrade',
        'Has %s effect filtering options.'
      ])
      .addHighlight(['additional'])
      .build()
  )
  // Controller Blocks
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:controller')
      .addSummary('Allows depositing and transporting items to and from a %s of storage blocks.')
      .addHighlight(['connected multiblock'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:storage_link')
      .addSummary('Connects separate storage multiblocks to the %s.')
      .addBehaviour([
        'Linking',
        'Use the %s to link to the %s.'
      ])
      .addHighlight([
        'Controller',
        'Storage Tool'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:infinity_upgrade')
      .addSummary('Makes all items in storage have an infinite quantity. Only admins can set infinite items and break / pick up the storage block.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedstorage:survival_infinity_upgrade')
      .addSummary('Makes all items in storage have an infinite quantity. All players can set infinite items and break / pick up the storage block.')
      .build()
  )
})
/**
 * @file Tooltip lang generation for everything related to Sophisticated Backpacks.
 * Requires {@link kubejs/client_scripts/lang/ProtoTooltipClass.js} to generate translation keys.
 * Requires {@link kubejs/client_scripts/src/tooltips/tooltip_adding/external/P3pp3rF1y/SophisticatedBackpacksTooltips.js} to be displayed.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: sophisticatedbackpacks
// ignored: false

/** @info Highlight 1x { filtering } */
let sophback_default_advanced_filtering = ['Advanced Upgrade', 'Has more %s options.']
let sophback_stack_upgrade = 'Multiplies the number of stacks that can fit in a slot by '
/** @info Highlight 2x { pick up, direct } */
let sophback_pickup_upgrade = 'Makes backpack automatically %s dropped items on %s contact.'
/** @info Highlight 1x { Filters } */
let sophback_filter_upgrade = '%s items transported in and / or out of the backpack.'
/** @info Highlight 2x { feeds, backpack's inventory } */
let sophback_feeding_upgrade = 'Automatically %s player with food from the %s.'
/** @info Highlight 1x { compressed } */
let sophback_compacting_upgrade = 'Compacts items into their %s variants.'
/** @info Highlight 1x { Voids } */
let sophback_void_upgrade = '%s items selected in the filter.'
/** @info Highlight 2x { Restocks, [Sneak] } */
let sophback_restock_upgrade = '%s backpack with inventories interacted via %s + R-Click.'
/** @info Highlight 2x { Deposits, [Sneak] } */
let sophback_deposit_upgrade = '%s items from backpack into inventories interacted with via %s + R-Click.'
/** @info Highlight 1x { selected } */
let sophback_refill_upgrade = 'Keeps refilling stack of %s items in player\'s inventory.'
/** @info Highlight 1x { swaps } */
let sophback_tool_swapper_upgrade = 'Automatically %s item in player\'s hand for the one effective on the block / entity on left click.'
let sophback_pump_upgrade = 'Pumps fluids between the backpack and adjacent blocks, if applicable.'

ClientEvents.lang('en_us', event => {
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:stack_upgrade_starter_tier')
      .addSummary(sophback_stack_upgrade + '%s.')
      .addHighlight([
        '1.5x'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:stack_upgrade_tier_1')
      .addSummary(sophback_stack_upgrade + '%s.')
      .addHighlight(['2x'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:stack_upgrade_tier_2')
      .addSummary(sophback_stack_upgrade + '%s.')
      .addHighlight(['4x'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:stack_upgrade_tier_3')
      .addSummary(sophback_stack_upgrade + '%s.')
      .addHighlight(['8x'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:stack_upgrade_tier_4')
      .addSummary(sophback_stack_upgrade + '%s.')
      .addHighlight(['16x'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:stack_upgrade_omega_tier')
      .addSummary('Multiplies the number of stacks that can fit in a slot by the %s value. %s')
      .addHighlight([
        'maximum',
        '[33,554,431X]'
      ])
      .build()
  )
  // STACK DOWNGRADE
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:stack_downgrade_tier_1')
      .addSummary('Divides the number of stacks that can fit in a slot by %s.')
      .addHighlight(['8x'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:stack_downgrade_tier_2')
      .addSummary('Divides the number of stacks that can fit in a slot by %s.')
      .addHighlight(['16x'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:stack_downgrade_tier_3')
      .addSummary('Divides the number of stacks that can fit in a slot by %s.')
      .addHighlight(['32x'])
      .build()
  )
  // UPGRADE MODULES
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:pickup_upgrade')
      .addSummary(sophback_pickup_upgrade)
      .addHighlight([
        'pick up',
        'direct'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:advanced_pickup_upgrade')
      .addSummary(sophback_pickup_upgrade)
      .addBehaviour(sophback_default_advanced_filtering)
      .addHighlight([
        'pick up',
        'direct',
        'filtering'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:filter_upgrade')
      .addSummary(sophback_filter_upgrade)
      .addHighlight(['Filters'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:advanced_filter_upgrade')
      .addSummary(sophback_filter_upgrade)
      .addBehaviour(sophback_default_advanced_filtering)
      .addHighlight([
        'Filters',
        'filtering'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:magnet_upgrade')
      .addSummary('Magnetically attracts items into your backpack.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:advanced_magnet_upgrade')
      .addSummary('Magnetically attracts items into your backpack with %s range.')
      .addBehaviour(sophback_default_advanced_filtering)
      .addHighlight([
        'greater',
        'filtering'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:feeding_upgrade')
      .addSummary(sophback_feeding_upgrade)
      .addHighlight([
        'feeds',
        'backpack\'s inventory'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:advanced_feeding_upgrade')
      .addSummary(sophback_feeding_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'More options for when food gets fed to player.'
      ])
      .addHighlight([
        'feeds',
        'backpack\'s inventory'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:compacting_upgrade')
      .addSummary(sophback_compacting_upgrade)
      .addBehaviour([
        'Basic Upgrade',
        'Only works for %s compacting recipes.'
      ])
      .addHighlight([
        'compressed',
        '2x2'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:advanced_compacting_upgrade')
      .addSummary(sophback_compacting_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'Works with both %s and %s compacting recipes with more filtering options.'
      ])
      .addHighlight([
        'compressed',
        '2x2',
        '3x3'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:void_upgrade')
      .addSummary(sophback_void_upgrade)
      .addHighlight([
        'Voids'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:advanced_void_upgrade')
      .addSummary(sophback_void_upgrade)
      .addBehaviour(sophback_default_advanced_filtering)
      .addHighlight([
        'Voids',
        'filtering'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:restock_upgrade')
      .addSummary(sophback_restock_upgrade)
      .addHighlight([
        'Restocks',
        '[Sneak]'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:advanced_restock_upgrade')
      .addSummary(sophback_restock_upgrade)
      .addBehaviour(sophback_default_advanced_filtering)
      .addHighlight([
        'Restocks',
        '[Sneak]',
        'filtering'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:deposit_upgrade')
      .addSummary(sophback_deposit_upgrade)
      .addHighlight([
        'Deposits',
        '[Sneak]'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:advanced_deposit_upgrade')
      .addSummary(sophback_deposit_upgrade)
      .addBehaviour(sophback_default_advanced_filtering)
      .addHighlight([
        'Deposits',
        '[Sneak]',
        'filtering'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:refill_upgrade')
      .addSummary(sophback_refill_upgrade)
      .addHighlight(['selected'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:advanced_refill_upgrade')
      .addSummary(sophback_refill_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'Allows for more %s target slot selection. Also allows %s block pick from the backpack.'
      ])
      .addHighlight([
        'selected',
        'precise',
        '[Middle Click]'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:inception_upgrade')
      .addSummary('Makes it possible to put backpacks into the backpack. Backpack %s!')
      .addHighlight(['inception'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:everlasting_upgrade')
      .addSummary('Backpack becomes %s and can no longer despawn or fall into the void.')
      .addHighlight(['indestructible'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:crafting_upgrade')
      .addSummary('Adds a crafting grid in your backpack upgrade tab.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:stonecutter_upgrade')
      .addSummary('Adds a stonecutter in your backpack upgrade tab.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:anvil_upgrade')
      .addSummary('Adds an anvil in your backpack upgrade tab.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:smithing_upgrade')
      .addSummary('Adds the Smithing Table in your backpack upgrade tab.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:alchemy_upgrade')
      .addSummary('Automatically uses potions, food with effects, or milk buckets.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:advanced_alchemy_upgrade')
      .addSummary('Automatically uses potions, food with effects, or milk buckets.')
      .addBehaviour([
        'Advanced Upgrade',
        'Has %s effect filtering options.'
      ])
      .addHighlight(['additional'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:jukebox_upgrade')
      .addSummary('Your very own %s Jukebox, but on your backpack.')
      .addHighlight(['portable'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:advanced_jukebox_upgrade')
      .addSummary('Your very own %s Jukebox, but on your backpack.')
      .addBehaviour([
        'Advanced Upgrade',
        'Now allows for %s disc storage.'
      ])
      .addHighlight(['portable', 'more'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:tool_swapper_upgrade')
      .addSummary(sophback_tool_swapper_upgrade)
      .addHighlight(['swaps'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:advanced_tool_swapper_upgrade')
      .addSummary(sophback_tool_swapper_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'Has additional filter options and enables swapping to wrench-like tools for block / entity a player is looking at. %s a keybind to utilize!'
      ])
      .addHighlight([
        'swaps',
        'Requires'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:tank_upgrade')
      .addSummary('Replaces part of the backpack\'s inventory with %s storage.')
      .addHighlight(['fluid'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:battery_upgrade')
      .addSummary('Replaces part of the backpack\'s inventory with %s storage.')
      .addHighlight(['energy'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:pump_upgrade')
      .addSummary(sophback_pump_upgrade)
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:advanced_pump_upgrade')
      .addSummary(sophback_pump_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'Works with fluid containers in your hand and fluid blocks in the world. Also allows for filtering which fluids are pumped.'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:xp_pump_upgrade')
      .addSummary('Pumps experience between the backpack and the player.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:infinity_upgrade')
      .addSummary('Makes all items in backpack have an infinite quantity. Only admins can set infinite items and break / pick up the backpack.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('sophisticatedbackpacks:survival_infinity_upgrade')
      .addSummary('Makes all items in backpack have an infinite quantity. All players can set infinite items and break / pick up the backpack.')
      .build()
  )
})
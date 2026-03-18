/**
 * @file Custom tooltips generation for Sophisticated Backpacks.
 * Please note that Sophisticated Backpacks seems to start from tooltip line 2 instead of line 1.
 * For the advanced upgrades, they start from line 3.
 * Requires {@link kubejs/client_scripts/src/lang/en_us/external_lang/P3pp3rF1y/sophisticatedbackpacjs.js} for text.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: sophisticatedbackpacks
// ignored: false

ItemEvents.tooltip(event => {
  event.addAdvanced('sophisticatedbackpacks:stack_upgrade_starter_tier', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.stack_upgrade_starter_tier.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.stack_upgrade_starter_tier.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:stack_upgrade_tier_1', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.stack_upgrade_tier_1.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.stack_upgrade_tier_1.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:stack_upgrade_tier_2', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.stack_upgrade_tier_2.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.stack_upgrade_tier_2.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:stack_upgrade_tier_3', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.stack_upgrade_tier_3.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.stack_upgrade_tier_3.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:stack_upgrade_tier_4', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.stack_upgrade_tier_4.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.stack_upgrade_tier_4.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:stack_upgrade_omega_tier', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedbackpacks.stack_upgrade_omega_tier.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.stack_upgrade_omega_tier.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedbackpacks.stack_upgrade_omega_tier.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(4)
    }
  })
  // STACK DOWNGRADE
  event.addAdvanced('sophisticatedbackpacks:stack_downgrade_tier_1', (item, advanced, text) => {
    if (!event.isShift()) {
      text.remove(1)
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.remove(1)
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedbackpacks.stack_downgrade_tier_1.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.stack_downgrade_tier_1.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:stack_downgrade_tier_2', (item, advanced, text) => {
    if (!event.isShift()) {
      text.remove(1)
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.remove(1)
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedbackpacks.stack_downgrade_tier_2.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.stack_downgrade_tier_2.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:stack_downgrade_tier_3', (item, advanced, text) => {
    if (!event.isShift()) {
      text.remove(1)
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.remove(1)
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedbackpacks.stack_downgrade_tier_3.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.stack_downgrade_tier_3.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:pickup_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.pickup_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.pickup_upgrade.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedbackpacks.pickup_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:advanced_pickup_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(3, Component.translatable(kjsHoldShift))
    } else {
      text.add(3, Component.translatable(kjsHoldShiftHeld))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedbackpacks.advanced_pickup_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.advanced_pickup_upgrade.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedbackpacks.advanced_pickup_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(6, '')
      text.add(7, Component.translatable('item.sophisticatedbackpacks.advanced_pickup_upgrade.tooltip.condition1').gray())
      text.add(8, Component.translatable('item.sophisticatedbackpacks.advanced_pickup_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedbackpacks.advanced_pickup_upgrade.tooltip.highlight3').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:filter_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.filter_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.filter_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:advanced_filter_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(3, Component.translatable(kjsHoldShift))
    } else {
      text.add(3, Component.translatable(kjsHoldShiftHeld))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedbackpacks.advanced_filter_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.advanced_filter_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(6, '')
      text.add(7, Component.translatable('item.sophisticatedbackpacks.advanced_filter_upgrade.tooltip.condition1').gray())
      text.add(8, Component.translatable('item.sophisticatedbackpacks.advanced_filter_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedbackpacks.advanced_filter_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:magnet_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.magnet_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.magnet_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:advanced_magnet_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(3, Component.translatable(kjsHoldShift))
    } else {
      text.add(3, Component.translatable(kjsHoldShiftHeld))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedbackpacks.advanced_magnet_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.advanced_magnet_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(6, '')
      text.add(7, Component.translatable('item.sophisticatedbackpacks.advanced_magnet_upgrade.tooltip.condition1').gray())
      text.add(8, Component.translatable('item.sophisticatedbackpacks.advanced_magnet_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedbackpacks.advanced_magnet_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:feeding_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.feeding_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.feeding_upgrade.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedbackpacks.feeding_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:advanced_feeding_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(3, Component.translatable(kjsHoldShift))
    } else {
      text.add(3, Component.translatable(kjsHoldShiftHeld))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedbackpacks.advanced_feeding_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.advanced_feeding_upgrade.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedbackpacks.advanced_feeding_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(6, '')
      text.add(7, Component.translatable('item.sophisticatedbackpacks.advanced_feeding_upgrade.tooltip.condition1').gray())
      text.add(8, Component.translatable('item.sophisticatedbackpacks.advanced_feeding_upgrade.tooltip.behaviour1').color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:compacting_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(3, Component.translatable(kjsHoldShift))
    } else {
      text.add(3, Component.translatable(kjsHoldShiftHeld))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedbackpacks.compacting_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.compacting_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(6, '')
      text.add(7, Component.translatable('item.sophisticatedbackpacks.compacting_upgrade.tooltip.condition1').gray())
      text.add(8, Component.translatable('item.sophisticatedbackpacks.compacting_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedbackpacks.compacting_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:advanced_compacting_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(3, Component.translatable(kjsHoldShift))
    } else {
      text.add(3, Component.translatable(kjsHoldShiftHeld))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedbackpacks.advanced_compacting_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.advanced_compacting_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(6, '')
      text.add(7, Component.translatable('item.sophisticatedbackpacks.advanced_compacting_upgrade.tooltip.condition1').gray())
      text.add(8, Component.translatable('item.sophisticatedbackpacks.advanced_compacting_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedbackpacks.advanced_compacting_upgrade.tooltip.highlight2').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedbackpacks.advanced_compacting_upgrade.tooltip.highlight3').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:void_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.void_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.void_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:advanced_void_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(3, Component.translatable(kjsHoldShift))
    } else {
      text.add(3, Component.translatable(kjsHoldShiftHeld))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedbackpacks.advanced_void_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.advanced_void_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(6, '')
      text.add(7, Component.translatable('item.sophisticatedbackpacks.advanced_void_upgrade.tooltip.condition1').gray())
      text.add(8, Component.translatable('item.sophisticatedbackpacks.advanced_void_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedbackpacks.advanced_void_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:restock_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.restock_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.restock_upgrade.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedbackpacks.restock_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:advanced_restock_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(3, Component.translatable(kjsHoldShift))
    } else {
      text.add(3, Component.translatable(kjsHoldShiftHeld))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedbackpacks.advanced_restock_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.advanced_restock_upgrade.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedbackpacks.advanced_restock_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(6, '')
      text.add(7, Component.translatable('item.sophisticatedbackpacks.advanced_restock_upgrade.tooltip.condition1').gray())
      text.add(8, Component.translatable('item.sophisticatedbackpacks.advanced_restock_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedbackpacks.advanced_restock_upgrade.tooltip.highlight3').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:deposit_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.deposit_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.deposit_upgrade.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedbackpacks.deposit_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:advanced_deposit_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(3, Component.translatable(kjsHoldShift))
    } else {
      text.add(3, Component.translatable(kjsHoldShiftHeld))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedbackpacks.advanced_deposit_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.advanced_deposit_upgrade.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedbackpacks.advanced_deposit_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(6, '')
      text.add(7, Component.translatable('item.sophisticatedbackpacks.advanced_deposit_upgrade.tooltip.condition1').gray())
      text.add(8, Component.translatable('item.sophisticatedbackpacks.advanced_deposit_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedbackpacks.advanced_deposit_upgrade.tooltip.highlight3').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:refill_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.refill_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.refill_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:advanced_refill_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(4, Component.translatable(kjsHoldShift))
    } else {
      text.add(4, Component.translatable(kjsHoldShiftHeld))
      text.add(5, '')
      text.add(6, Component.translatable('item.sophisticatedbackpacks.advanced_refill_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.advanced_refill_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.sophisticatedbackpacks.advanced_refill_upgrade.tooltip.condition1').gray())
      text.add(9, Component.translatable('item.sophisticatedbackpacks.advanced_refill_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedbackpacks.advanced_refill_upgrade.tooltip.highlight2').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedbackpacks.advanced_refill_upgrade.tooltip.highlight3').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:inception_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.inception_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.inception_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:everlasting_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(3, Component.translatable(kjsHoldShift))
    } else {
      text.add(3, Component.translatable(kjsHoldShiftHeld))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedbackpacks.everlasting_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.everlasting_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:crafting_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.crafting_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.crafting_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:stonecutter_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.stonecutter_upgrade.tooltip.summary').color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:anvil_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.anvil_upgrade.tooltip.summary').color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:smithing_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedbackpacks.smithing_upgrade.tooltip.summary').color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedbackpacks:alchemy_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedbackpacks.alchemy_upgrade.tooltip.summary').color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedbackpacks:advanced_alchemy_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedbackpacks.advanced_alchemy_upgrade.tooltip.summary').color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedbackpacks.advanced_alchemy_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedbackpacks.advanced_alchemy_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedbackpacks.advanced_alchemy_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(7)
      text.remove(7)
    }
  })
  event.addAdvanced('sophisticatedbackpacks:jukebox_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.jukebox_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.jukebox_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:advanced_jukebox_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedbackpacks.advanced_jukebox_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.advanced_jukebox_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedbackpacks.advanced_jukebox_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedbackpacks.advanced_jukebox_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedbackpacks.advanced_jukebox_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(7)
      text.remove(7)
    }
  })
  event.addAdvanced('sophisticatedbackpacks:tool_swapper_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.tool_swapper_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.tool_swapper_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:advanced_tool_swapper_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(3, Component.translatable(kjsHoldShift))
    } else {
      text.add(3, Component.translatable(kjsHoldShiftHeld))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedbackpacks.advanced_tool_swapper_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.advanced_tool_swapper_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(6, '')
      text.add(7, Component.translatable('item.sophisticatedbackpacks.advanced_tool_swapper_upgrade.tooltip.condition1').gray())
      text.add(8, Component.translatable('item.sophisticatedbackpacks.advanced_tool_swapper_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedbackpacks.advanced_tool_swapper_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:tank_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.tank_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.tank_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:battery_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.battery_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedbackpacks.battery_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:pump_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.pump_upgrade.tooltip.summary').color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:advanced_pump_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(4, Component.translatable(kjsHoldShift))
    } else {
      text.add(4, Component.translatable(kjsHoldShiftHeld))
      text.add(5, '')
      text.add(6, Component.translatable('item.sophisticatedbackpacks.advanced_pump_upgrade.tooltip.summary').color(STANDARD.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.sophisticatedbackpacks.advanced_pump_upgrade.tooltip.condition1').gray())
      text.add(9, Component.translatable('item.sophisticatedbackpacks.advanced_pump_upgrade.tooltip.behaviour1').color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:xp_pump_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(2, Component.translatable(kjsHoldShift))
    } else {
      text.add(2, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.sophisticatedbackpacks.xp_pump_upgrade.tooltip.summary').color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedbackpacks:infinity_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedbackpacks.infinity_upgrade.tooltip.summary').color(STANDARD.txt))
      text.remove(4)
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedbackpacks:survival_infinity_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedbackpacks.survival_infinity_upgrade.tooltip.summary').color(STANDARD.txt))
      text.remove(4)
      text.remove(4)
    }
  })
})
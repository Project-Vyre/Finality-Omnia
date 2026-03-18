/**
 * @file Custom tooltips generation for Sophisticated Storage.
 * 
 */

// requires: sophisticatedstorage
// ignored: false

ItemEvents.tooltip(event => {
  // STORAGE BLOCKS
  for (let i = 0; i < sophstor_blocks.length; i++) {
    let element = sophstor_blocks[i];
    event.addAdvanced('sophisticatedstorage:' + element, (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, Component.translatable(kjsHoldShift))
      } else {
        text.add(1, Component.translatable(kjsHoldShiftHeld))
        text.add(2, '')
        text.add(3, Component.translatable('block.sophisticatedstorage.' + element + '.tooltip.summary').color(STANDARD.txt))
        text.add(4, '')
        text.add(5, Component.translatable('block.sophisticatedstorage.' + element + '.tooltip.condition1').gray())
        text.add(6, Component.translatable('block.sophisticatedstorage.' + element + '.tooltip.behaviour1',
          Component.translatable('block.sophisticatedstorage.' + element + '.tooltip.highlight1').color(STANDARD.hlt)
        ).color(STANDARD.txt))
      }
    })
  }
  event.addAdvanced('sophisticatedstorage:basic_tier_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.basic_tier_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.basic_tier_upgrade.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedstorage.basic_tier_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedstorage.basic_tier_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedstorage.basic_tier_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedstorage.basic_tier_upgrade.tooltip.highlight3').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedstorage.basic_tier_upgrade.tooltip.highlight4').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(7)
    }
  })
  event.addAdvanced('sophisticatedstorage:stack_upgrade_tier_1', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.stack_upgrade_tier_1.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.stack_upgrade_tier_1.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:stack_upgrade_tier_1_plus', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.stack_upgrade_tier_1_plus.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.stack_upgrade_tier_1_plus.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:stack_upgrade_tier_2', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.stack_upgrade_tier_2.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.stack_upgrade_tier_2.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:stack_upgrade_tier_3', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.stack_upgrade_tier_3.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.stack_upgrade_tier_3.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:stack_upgrade_tier_4', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.stack_upgrade_tier_4.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.stack_upgrade_tier_4.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:stack_upgrade_tier_5', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.stack_upgrade_tier_5.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.stack_upgrade_tier_5.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:stack_upgrade_omega_tier', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.stack_upgrade_omega_tier.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.stack_upgrade_omega_tier.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedstorage.stack_upgrade_omega_tier.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:pickup_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.pickup_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.pickup_upgrade.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedstorage.pickup_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:advanced_pickup_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.advanced_pickup_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.advanced_pickup_upgrade.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedstorage.advanced_pickup_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedstorage.advanced_pickup_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedstorage.advanced_pickup_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedstorage.advanced_pickup_upgrade.tooltip.highlight3').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(7)
      text.remove(7)
    }
  })
  event.addAdvanced('sophisticatedstorage:filter_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.filter_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.filter_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:advanced_filter_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.advanced_filter_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.advanced_filter_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedstorage.advanced_filter_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedstorage.advanced_filter_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedstorage.advanced_filter_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(7)
      text.remove(7)
    }
  })
  event.addAdvanced('sophisticatedstorage:magnet_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.magnet_upgrade.tooltip.summary').color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:advanced_magnet_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.advanced_magnet_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.advanced_magnet_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedstorage.advanced_magnet_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedstorage.advanced_magnet_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedstorage.advanced_magnet_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(7)
      text.remove(7)
    }
  })
  event.addAdvanced('sophisticatedstorage:feeding_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.feeding_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.feeding_upgrade.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedstorage.feeding_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:advanced_feeding_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.advanced_feeding_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.advanced_feeding_upgrade.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedstorage.advanced_feeding_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedstorage.advanced_feeding_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedstorage.advanced_feeding_upgrade.tooltip.behaviour1').color(STANDARD.txt))
      text.remove(7)
      text.remove(7)
    }
  })
  event.addAdvanced('sophisticatedstorage:compacting_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.compacting_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.compacting_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedstorage.compacting_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedstorage.compacting_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedstorage.compacting_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(7)
      text.remove(7)
    }
  })
  event.addAdvanced('sophisticatedstorage:advanced_compacting_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.advanced_compacting_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.advanced_compacting_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedstorage.advanced_compacting_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedstorage.advanced_compacting_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedstorage.advanced_compacting_upgrade.tooltip.highlight2').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedstorage.advanced_compacting_upgrade.tooltip.highlight3').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(7)
      text.remove(7)
    }
  })
  event.addAdvanced('sophisticatedstorage:void_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.void_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.void_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:advanced_void_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.advanced_void_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.advanced_void_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedstorage.advanced_void_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedstorage.advanced_void_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedstorage.advanced_void_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(7)
      text.remove(7)
    }
  })
  event.addAdvanced('sophisticatedstorage:crafting_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.crafting_upgrade.tooltip.summary').color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:stonecutter_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.stonecutter_upgrade.tooltip.summary').color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:jukebox_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.jukebox_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.jukebox_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:advanced_jukebox_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.advanced_jukebox_upgrade.tooltip.summary',
        Component.translatable('item.sophisticatedstorage.advanced_jukebox_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedstorage.advanced_jukebox_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedstorage.advanced_jukebox_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedstorage.advanced_jukebox_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(7)
      text.remove(7)
    }
  })
  event.addAdvanced('sophisticatedstorage:pump_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.pump_upgrade.tooltip.summary').color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:advanced_pump_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.advanced_pump_upgrade.tooltip.summary').color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedstorage.advanced_pump_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedstorage.advanced_pump_upgrade.tooltip.behaviour1').color(STANDARD.txt))
      text.remove(7)
      text.remove(7)
      text.remove(7)
    }
  })
  event.addAdvanced('sophisticatedstorage:xp_pump_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.xp_pump_upgrade.tooltip.summary').color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:compression_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.compression_upgrade.tooltip.summary').color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedstorage.compression_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedstorage.compression_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedstorage.compression_upgrade.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.sophisticatedstorage.compression_upgrade.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.sophisticatedstorage.compression_upgrade.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.sophisticatedstorage.compression_upgrade.tooltip.behaviour2',
        Component.translatable('item.sophisticatedstorage.compression_upgrade.tooltip.highlight3').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(10)
    }
  })
  event.addAdvanced('sophisticatedstorage:hopper_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.hopper_upgrade.tooltip.summary').color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:advanced_hopper_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.advanced_hopper_upgrade.tooltip.summary').color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedstorage.advanced_hopper_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedstorage.advanced_hopper_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedstorage.advanced_hopper_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(7)
      text.remove(7)
    }
  })
  event.addAdvanced('sophisticatedstorage:alchemy_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.alchemy_upgrade.tooltip.summary').color(STANDARD.txt))
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:advanced_alchemy_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.advanced_alchemy_upgrade.tooltip.summary').color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.sophisticatedstorage.advanced_alchemy_upgrade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.sophisticatedstorage.advanced_alchemy_upgrade.tooltip.behaviour1',
        Component.translatable('item.sophisticatedstorage.advanced_alchemy_upgrade.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.remove(7)
      text.remove(7)
    }
  })
  event.addAdvanced('sophisticatedstorage:controller', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.sophisticatedstorage.controller.tooltip.summary',
        Component.translatable('block.sophisticatedstorage.controller.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedstorage:storage_link', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.sophisticatedstorage.storage_link.tooltip.summary',
        Component.translatable('block.sophisticatedstorage.storage_link.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('block.sophisticatedstorage.storage_link.tooltip.condition1').gray())
      text.add(6, Component.translatable('block.sophisticatedstorage.storage_link.tooltip.behaviour1',
        Component.translatable('block.sophisticatedstorage.storage_link.tooltip.highlight2').color(STANDARD.hlt),
        Component.translatable('block.sophisticatedstorage.storage_link.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('sophisticatedstorage:infinity_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.infinity_upgrade.tooltip.summary').color(STANDARD.txt))
      text.remove(4)
      text.remove(4)
    }
  })
  event.addAdvanced('sophisticatedstorage:survival_infinity_upgrade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.sophisticatedstorage.survival_infinity_upgrade.tooltip.summary').color(STANDARD.txt))
      text.remove(4)
      text.remove(4)
    }
  })
})
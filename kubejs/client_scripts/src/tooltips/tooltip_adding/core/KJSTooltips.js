// ignored: false

ItemEvents.tooltip(event => {
  event.addAdvanced('kubejs:denied_result', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.denied_result.tooltip.summary',
        Component.translatable('item.kubejs.denied_result.tooltip.highlight1').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.denied_result.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.kubejs.denied_result.tooltip.behaviour1',
        Component.translatable('item.kubejs.denied_result.tooltip.highlight2').color(PURPLE.hlt),
        Component.translatable('item.kubejs.denied_result.tooltip.highlight3').color(PURPLE.hlt),
        Component.translatable('item.kubejs.denied_result.tooltip.highlight4').color(PURPLE.hlt),
        Component.translatable('item.kubejs.denied_result.tooltip.highlight5').color(PURPLE.hlt),
        Component.translatable('item.kubejs.denied_result.tooltip.highlight6').color(PURPLE.hlt)
      ).color(PURPLE.txt))
    }
  })
  event.addAdvanced('kubejs:errored_result', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.errored_result.tooltip.summary',
        Component.translatable('item.kubejs.errored_result.tooltip.highlight1').color(RED.hlt),
        Component.translatable('item.kubejs.errored_result.tooltip.highlight1').color(RED.hlt)
      ).color(RED.txt))
    }
  })
  event.addAdvanced('kubejs:lemon', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.lemon.tooltip.summary').color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.lemon.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.kubejs.lemon.tooltip.behaviour1',
        Component.translatable('item.kubejs.lemon.tooltip.highlight1').color(YELLOW.hlt),
        Component.translatable('item.kubejs.lemon.tooltip.highlight2').color(YELLOW.hlt)
      ).color(YELLOW.txt))
    }
  })
  event.addAdvanced('kubejs:unstable_entropy_particles', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.unstable_entropy_particles.tooltip.summary',
        Component.translatable('item.kubejs.unstable_entropy_particles.tooltip.highlight1').color(ENTROPY.hlt),
        Component.translatable('item.kubejs.unstable_entropy_particles.tooltip.highlight2').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.unstable_entropy_particles.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.kubejs.unstable_entropy_particles.tooltip.behaviour1').color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:stable_entropy_particles', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.stable_entropy_particles.tooltip.summary').color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:high_entropy_alloy_nugget', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.high_entropy_alloy_nugget.tooltip.summary').color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.high_entropy_alloy_nugget.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.kubejs.high_entropy_alloy_nugget.tooltip.behaviour1',
        Component.translatable('item.kubejs.high_entropy_alloy_nugget.tooltip.highlight1').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:high_entropy_alloy', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.high_entropy_alloy.tooltip.summary').color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.high_entropy_alloy.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.kubejs.high_entropy_alloy.tooltip.behaviour1',
        Component.translatable('item.kubejs.high_entropy_alloy.tooltip.highlight1').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:deconstructor', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.deconstructor.tooltip.summary',
        Component.translatable('item.kubejs.deconstructor.tooltip.highlight1').color(ENTROPY.hlt),
        Component.translatable('item.kubejs.deconstructor.tooltip.highlight2').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.deconstructor.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.kubejs.deconstructor.tooltip.behaviour1',
        Component.translatable('item.kubejs.deconstructor.tooltip.highlight3').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.kubejs.deconstructor.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.kubejs.deconstructor.tooltip.behaviour2',
        Component.translatable('item.kubejs.deconstructor.tooltip.highlight4').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(10, '')
      text.add(11, Component.translatable('item.kubejs.deconstructor.tooltip.condition3').gray())
      text.add(12, Component.translatable('item.kubejs.deconstructor.tooltip.behaviour3',
        Component.translatable('item.kubejs.deconstructor.tooltip.highlight5').color(ENTROPY.hlt),
        Component.translatable('item.kubejs.deconstructor.tooltip.highlight6').color(ENTROPY.hlt),
        Component.translatable('item.kubejs.deconstructor.tooltip.highlight7').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:reconstructor', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.reconstructor.tooltip.summary',
        Component.translatable('item.kubejs.reconstructor.tooltip.highlight1').color(ENTROPY.hlt),
        Component.translatable('item.kubejs.reconstructor.tooltip.highlight2').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
    }
  })
  // COMMAND BLOCKS
  event.addAdvanced('kubejs:command_block', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.kubejs.command_block.tooltip.summary',
        Component.translatable('block.kubejs.command_block.tooltip.highlight1').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:chain_command_block', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.kubejs.chain_command_block.tooltip.summary',
        Component.translatable('block.kubejs.chain_command_block.tooltip.highlight1').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:repeating_command_block', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.kubejs.repeating_command_block.tooltip.summary',
        Component.translatable('block.kubejs.repeating_command_block.tooltip.highlight1').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
    }
  })
  // FINAL TOOLS
  event.addAdvanced('kubejs:final_pickaxe', (item, advanced, text) => {
    
  })
})
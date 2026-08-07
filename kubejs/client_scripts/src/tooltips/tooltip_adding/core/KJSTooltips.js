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
  event.addAdvanced('kubejs:dormant_singularity_core', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.dormant_singularity_core.tooltip.summary').color(GRAY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.dormant_singularity_core.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.kubejs.dormant_singularity_core.tooltip.behaviour1',
        Component.translatable('item.kubejs.dormant_singularity_core.tooltip.highlight1').lightPurple()
      ).color(GRAY.txt))
    }
  })
  event.addAdvanced('kubejs:awakened_singularity_core', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.awakened_singularity_core.tooltip.summary').color(PURPLE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.awakened_singularity_core.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.kubejs.awakened_singularity_core.tooltip.behaviour1',
        Component.translatable('item.kubejs.awakened_singularity_core.tooltip.highlight1').lightPurple(),
        Component.translatable('item.kubejs.awakened_singularity_core.tooltip.highlight2').darkGray()
      ).color(PURPLE.txt))
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
  event.addAdvanced('kubejs:final_singularity_stage_nulla', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.final_singularity_stage_nulla.tooltip.summary').color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.final_singularity_stage_nulla.tooltip.condition1').color(ENTROPY.txt))
      text.add(6, Component.translatable('item.kubejs.final_singularity_stage_nulla.tooltip.behaviour1',
        Component.translatable('item.kubejs.final_singularity_stage_nulla.tooltip.highlight1').color(GREEN.hlt)
      ).color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:final_singularity_stage_one', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.final_singularity_stage_one.tooltip.summary').color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.final_singularity_stage_one.tooltip.condition1').color(ENTROPY.txt))
      text.add(6, Component.translatable('item.kubejs.final_singularity_stage_one.tooltip.behaviour1',
        Component.translatable('item.kubejs.final_singularity_stage_one.tooltip.highlight1').color(RED.hlt)
      ).color(ENTROPY.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.kubejs.final_singularity_stage_one.tooltip.condition2').color(ENTROPY.txt))
      text.add(9, Component.translatable('item.kubejs.final_singularity_stage_one.tooltip.behaviour2').color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:final_singularity_stage_two', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.final_singularity_stage_two.tooltip.summary').color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.final_singularity_stage_two.tooltip.condition1').color(ENTROPY.txt))
      text.add(6, Component.translatable('item.kubejs.final_singularity_stage_two.tooltip.behaviour1',
        Component.translatable('item.kubejs.final_singularity_stage_two.tooltip.highlight1').color(GREEN.hlt)
      ).color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:final_singularity_stage_three', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.final_singularity_stage_three.tooltip.summary').color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.final_singularity_stage_three.tooltip.condition1').color(ENTROPY.txt))
      text.add(6, Component.translatable('item.kubejs.final_singularity_stage_three.tooltip.behaviour1',
        Component.translatable('item.kubejs.final_singularity_stage_three.tooltip.highlight1').color(GREEN.hlt)
      ).color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:final_singularity_stage_four', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.final_singularity_stage_four.tooltip.summary').color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.final_singularity_stage_four.tooltip.condition1').color(ENTROPY.txt))
      text.add(6, Component.translatable('item.kubejs.final_singularity_stage_four.tooltip.behaviour1',
        Component.translatable('item.kubejs.final_singularity_stage_four.tooltip.highlight1').color(RED.hlt)
      ).color(ENTROPY.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.kubejs.final_singularity_stage_four.tooltip.condition2').color(ENTROPY.txt))
      text.add(9, Component.translatable('item.kubejs.final_singularity_stage_four.tooltip.behaviour2').color(ENTROPY.txt))
      text.add(10, '')
      text.add(11, Component.translatable('item.kubejs.final_singularity_stage_four.tooltip.condition3').color(ENTROPY.txt))
      text.add(12, Component.translatable('item.kubejs.final_singularity_stage_four.tooltip.behaviour3').color(ENTROPY.txt))
      text.add(13, '')
      text.add(14, Component.translatable('item.kubejs.final_singularity_stage_four.tooltip.condition4').color(ENTROPY.txt))
      text.add(15, Component.translatable('item.kubejs.final_singularity_stage_four.tooltip.behaviour4').color(ENTROPY.txt))
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
  // DUPLICATORS
  event.addAdvanced('kubejs:duplicator', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.duplicator.tooltip.summary',
        Component.translatable('item.kubejs.duplicator.tooltip.highlight1').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.duplicator.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.kubejs.duplicator.tooltip.behaviour1',
        Component.translatable('item.kubejs.duplicator.tooltip.highlight2').color(ENTROPY.hlt),
        Component.translatable('item.kubejs.duplicator.tooltip.highlight3').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.kubejs.duplicator.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.kubejs.duplicator.tooltip.behaviour2',
        Component.translatable('item.kubejs.duplicator.tooltip.highlight4').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(10, '')
      text.add(11, Component.translatable('item.kubejs.duplicator.tooltip.condition3').gray())
      text.add(12, Component.translatable('item.kubejs.duplicator.tooltip.behaviour3',
        Component.translatable('item.kubejs.duplicator.tooltip.highlight5').color(RED.hlt)
      ).color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:quad_duplicator', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.quad_duplicator.tooltip.summary',
        Component.translatable('item.kubejs.quad_duplicator.tooltip.highlight1').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.quad_duplicator.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.kubejs.quad_duplicator.tooltip.behaviour1',
        Component.translatable('item.kubejs.quad_duplicator.tooltip.highlight2').color(ENTROPY.hlt),
        Component.translatable('item.kubejs.quad_duplicator.tooltip.highlight3').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.kubejs.quad_duplicator.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.kubejs.quad_duplicator.tooltip.behaviour2',
        Component.translatable('item.kubejs.quad_duplicator.tooltip.highlight4').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(10, '')
      text.add(11, Component.translatable('item.kubejs.quad_duplicator.tooltip.condition3').gray())
      text.add(12, Component.translatable('item.kubejs.quad_duplicator.tooltip.behaviour3',
        Component.translatable('item.kubejs.quad_duplicator.tooltip.highlight5').color(RED.hlt)
      ).color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:true_duplicator', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.true_duplicator.tooltip.summary',
        Component.translatable('item.kubejs.true_duplicator.tooltip.highlight1').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.true_duplicator.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.kubejs.true_duplicator.tooltip.behaviour1',
        Component.translatable('item.kubejs.true_duplicator.tooltip.highlight2').color(ENTROPY.hlt),
        Component.translatable('item.kubejs.true_duplicator.tooltip.highlight3').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.kubejs.true_duplicator.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.kubejs.true_duplicator.tooltip.behaviour2',
        Component.translatable('item.kubejs.true_duplicator.tooltip.highlight4').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(10, '')
      text.add(11, Component.translatable('item.kubejs.true_duplicator.tooltip.condition3').gray())
      text.add(12, Component.translatable('item.kubejs.true_duplicator.tooltip.behaviour3',
        Component.translatable('item.kubejs.true_duplicator.tooltip.highlight5').color(RED.hlt)
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
  event.addAdvanced('kubejs:chronokinesis', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.chronokinesis.tooltip.summary').color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:final_pickaxe', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.final_pickaxe.tooltip.summary',
        Component.translatable('item.kubejs.final_pickaxe.tooltip.highlight1').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.final_pickaxe.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.kubejs.final_pickaxe.tooltip.behaviour1',
        Component.translatable('item.kubejs.final_pickaxe.tooltip.highlight2').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:final_axe', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.final_axe.tooltip.summary',
        Component.translatable('item.kubejs.final_axe.tooltip.highlight1').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.final_axe.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.kubejs.final_axe.tooltip.behaviour1',
        Component.translatable('item.kubejs.final_axe.tooltip.highlight2').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:final_shovel', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.final_shovel.tooltip.summary').color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:final_hoe', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.final_hoe.tooltip.summary',
        Component.translatable('item.kubejs.final_hoe.tooltip.highlight1').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
    }
  })
  event.addAdvanced('kubejs:final_sword', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.kubejs.final_sword.tooltip.summary',
        Component.translatable('item.kubejs.final_sword.tooltip.highlight1').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.kubejs.final_sword.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.kubejs.final_sword.tooltip.behaviour1').color(ENTROPY.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.kubejs.final_sword.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.kubejs.final_sword.tooltip.behaviour2',
        Component.translatable('item.kubejs.final_sword.tooltip.highlight2').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(10, '')
      text.add(11, Component.translatable('item.kubejs.final_sword.tooltip.condition3').gray())
      text.add(12, Component.translatable('item.kubejs.final_sword.tooltip.behaviour3',
        Component.translatable('item.kubejs.final_sword.tooltip.highlight3').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
      text.add(13, '')
      text.add(14, Component.translatable('item.kubejs.final_sword.tooltip.condition4').gray())
      text.add(15, Component.translatable('item.kubejs.final_sword.tooltip.behaviour4',
        Component.translatable('item.kubejs.final_sword.tooltip.highlight4').color(ENTROPY.hlt)
      ).color(ENTROPY.txt))
    }
  })
})
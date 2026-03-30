// requires: reliquary
// ignored: false

ItemEvents.tooltip(event => {
  event.addAdvanced('reliquary:holy_hand_grenade', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.reliquary.holy_hand_grenade.tooltip.summary',
        Component.translatable('item.reliquary.holy_hand_grenade.tooltip.highlight1').color(YELLOW.hlt)
      ).color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.reliquary.holy_hand_grenade.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.reliquary.holy_hand_grenade.tooltip.behaviour1').color(YELLOW.txt))
    }
  })
  event.addAdvanced('reliquary:shears_of_winter', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.reliquary.shears_of_winter.tooltip.summary').color(BLUE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.reliquary.shears_of_winter.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.reliquary.shears_of_winter.tooltip.behaviour1',
        Component.translatable('item.reliquary.shears_of_winter.tooltip.highlight1').color(BLUE.hlt)
      ).color(BLUE.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.reliquary.shears_of_winter.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.reliquary.shears_of_winter.tooltip.behaviour2').color(BLUE.txt))
    }
  })
  event.addAdvanced('reliquary:bullets/exorcism_bullet', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.reliquary.bullets.exorcism_bullet.tooltip.summary',
        Component.translatable('item.reliquary.bullets.exorcism_bullet.tooltip.highlight1').color(RED.hlt)
      ).color(RED.txt))
    }
  })
  event.addAdvanced('reliquary:bullets/blaze_bullet', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.reliquary.bullets.blaze_bullet.tooltip.summary',
        Component.translatable('item.reliquary.bullets.blaze_bullet.tooltip.highlight1').color(YELLOW.hlt)
      ).color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.reliquary.bullets.blaze_bullet.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.reliquary.bullets.blaze_bullet.tooltip.behaviour1',
        Component.translatable('item.reliquary.bullets.blaze_bullet.tooltip.highlight2').color(YELLOW.hlt)
      ).color(YELLOW.txt))
    }
  })
  event.addAdvanced('reliquary:bullets/ender_bullet', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.reliquary.bullets.ender_bullet.tooltip.summary',
        Component.translatable('item.reliquary.bullets.ender_bullet.tooltip.highlight1').color(PURPLE.hlt),
        Component.translatable('item.reliquary.bullets.ender_bullet.tooltip.highlight2').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.reliquary.bullets.ender_bullet.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.reliquary.bullets.ender_bullet.tooltip.behaviour1',
        Component.translatable('item.reliquary.bullets.ender_bullet.tooltip.highlight3').color(PURPLE.hlt),
        Component.translatable('item.reliquary.bullets.ender_bullet.tooltip.highlight4').color(PURPLE.hlt)
      ).color(PURPLE.txt))
    }
  })
  event.addAdvanced('reliquary:bullets/concussive_bullet', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.reliquary.bullets.concussive_bullet.tooltip.summary').color(GREEN.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.reliquary.bullets.concussive_bullet.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.reliquary.bullets.concussive_bullet.tooltip.behaviour1',
        Component.translatable('item.reliquary.bullets.concussive_bullet.tooltip.highlight1').color(GREEN.hlt)
      ).color(GREEN.txt))
    }
  })
  event.addAdvanced('reliquary:bullets/buster_bullet', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.reliquary.bullets.buster_bullet.tooltip.summary').color(GREEN.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.reliquary.bullets.buster_bullet.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.reliquary.bullets.buster_bullet.tooltip.behaviour1',
        Component.translatable('item.reliquary.bullets.buster_bullet.tooltip.highlight1').color(GREEN.hlt)
      ).color(RED.txt))
    }
  })
  event.addAdvanced('reliquary:bullets/seeker_bullet', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.reliquary.bullets.seeker_bullet.tooltip.summary').color(BLUE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.reliquary.bullets.seeker_bullet.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.reliquary.bullets.seeker_bullet.tooltip.behaviour1',
        Component.translatable('item.reliquary.bullets.seeker_bullet.tooltip.highlight1').color(BLUE.hlt),
        Component.translatable('item.reliquary.bullets.seeker_bullet.tooltip.highlight2').color(BLUE.hlt)
      ).color(BLUE.txt))
    }
  })
  event.addAdvanced('reliquary:bullets/sand_bullet', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftheld))
      text.add(2, '')
      text.add(3, Component.translatable('item.reliquary.bullets.sand_bullet.tooltip.summary',
        Component.translatable('item.reliquary.bullets.sand_bullet.tooltip.highlight1').color(YELLOW.hlt)
      ).color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.reliquary.bullets.sand_bullet.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.reliquary.bullets.sand_bullet.tooltip.behaviour1',
        Component.translatable('item.reliquary.bullets.sand_bullet.tooltip.highlight1').color(YELLOW.hlt)
      ).color(YELLOW.txt))
    }
  })
  event.addAdvanced('reliquary:bullets/storm_bullet', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.reliquary.bullets.storm_bullet.tooltip.summary',
        Component.translatable('item.reliquary.bullets.storm_bullet.tooltip.highlight1').color(BLUE.hlt)
      ).color(BLUE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.reliquary.bullets.storm_bullet.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.reliquary.bullets.storm_bullet.tooltip.behaviour1',
        Component.translatable('item.reliquary.bullets.storm_bullet.tooltip.highlight2').color(BLUE.hlt)
      ).color(BLUE.txt))
    }
  })
})
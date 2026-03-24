// requires: cataclysm

ItemEvents.tooltip(event => {
  event.addAdvanced('cataclysm:infernal_forge', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.infernal_forge.tooltip.summary',
        Component.translatable('item.cataclysm.infernal_forge.tooltip.highlight1').color(YELLOW.hlt)
      ).color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.infernal_forge.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.infernal_forge.tooltip.behaviour1').color(YELLOW.txt))
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
      text.add(9, '')
    }
  })
  event.addAdvanced('cataclysm:monstrous_horn', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.monstrous_horn.tooltip.summary').color(YELLOW.txt))
    }
  })
  event.addAdvanced('cataclysm:monstrous_helm', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.monstrous_helm.tooltip.summary',
        Component.translatable('item.cataclysm.monstrous_helm.tooltip.highlight1').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.monstrous_helm.tooltip.highlight2').color(YELLOW.hlt)
      ).color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.monstrous_helm.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.monstrous_helm.tooltip.behaviour1').color(YELLOW.txt))
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:burning_ashes', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.burning_ashes.tooltip.summary',
        Component.translatable('item.cataclysm.burning_ashes.tooltip.highlight1').color(YELLOW.hlt)
      ).color(YELLOW.txt))
    }
  })
  event.addAdvanced('cataclysm:the_incinerator', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.the_incinerator.tooltip.summary').color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.the_incinerator.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.the_incinerator.tooltip.behaviour1',
        Component.translatable('item.cataclysm.the_incinerator.tooltip.highlight1').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.the_incinerator.tooltip.highlight2').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.the_incinerator.tooltip.highlight3').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.the_incinerator.tooltip.highlight4').color(YELLOW.hlt)
      ).color(YELLOW.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.cataclysm.the_incinerator.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.cataclysm.the_incinerator.tooltip.behaviour2').color(YELLOW.txt))
      text.add(10, '')
      text.add(11, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:bulwark_of_the_flame', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.bulwark_of_the_flame.tooltip.summary').color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.bulwark_of_the_flame.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.bulwark_of_the_flame.tooltip.behaviour1',
        Component.translatable('item.cataclysm.bulwark_of_the_flame.tooltip.highlight1').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.bulwark_of_the_flame.tooltip.highlight2').color(YELLOW.hlt)
      ).color(YELLOW.txt))
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:ignitium_helmet', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.ignitium_helmet.tooltip.summary').color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:ignitium_chestplate', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.ignitium_chestplate.tooltip.summary').color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:ignitium_leggings', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.ignitium_leggings.tooltip.summary',
        Component.translatable('item.cataclysm.ignitium_leggings.tooltip.highlight1').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.ignitium_leggings.tooltip.highlight2').color(YELLOW.hlt)
      ).color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:ignitium_boots', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.ignitium_boots.tooltip.summary').color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:void_scatter_arrow', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.void_scatter_arrow.tooltip.summary',
        Component.translatable('item.cataclysm.void_scatter_arrow.tooltip.highlight1').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.void_scatter_arrow.tooltip.highlight2').color(PURPLE.hlt)
      ).color(PURPLE.txt))
    }
  })
  event.addAdvanced('cataclysm:void_core', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.void_core.tooltip.summary').color(PURPLE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.void_core.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.void_core.tooltip.behaviour1',
        Component.translatable('item.cataclysm.void_core.tooltip.highlight1').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.void_core.tooltip.highlight2').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:gauntlet_of_guard', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.gauntlet_of_guard.tooltip.summary').color(PURPLE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.gauntlet_of_guard.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.gauntlet_of_guard.tooltip.behaviour1',
        Component.translatable('item.cataclysm.gauntlet_of_guard.tooltip.highlight1').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.gauntlet_of_guard.tooltip.highlight2').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:void_forge', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.void_forge.tooltip.summary',
        Component.translatable('item.cataclysm.void_forge.tooltip.highlight1').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.void_forge.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.void_forge.tooltip.behaviour1',
        Component.translatable('item.cataclysm.void_forge.tooltip.highlight2').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.void_forge.tooltip.highlight3').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:gauntlet_of_bulwark', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.gauntlet_of_bulwark.tooltip.summary',
        Component.translatable('item.cataclysm.gauntlet_of_bulwark.tooltip.highlight1').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.gauntlet_of_bulwark.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.gauntlet_of_bulwark.tooltip.behaviour1',
        Component.translatable('item.cataclysm.gauntlet_of_bulwark.tooltip.highlight2').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.gauntlet_of_bulwark.tooltip.highlight3').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.gauntlet_of_bulwark.tooltip.highlight4').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.gauntlet_of_bulwark.tooltip.highlight5').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:abyssal_sacrifice', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.abyssal_sacrifice.tooltip.summary',
        Component.translatable('item.cataclysm.abyssal_sacrifice.tooltip.highlight1').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.abyssal_sacrifice.tooltip.highlight2').color(PURPLE.hlt)
      ).color(PURPLE.txt))
    }
  })
  event.addAdvanced('cataclysm:tidal_claws', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.tidal_claws.tooltip.summary',
        Component.translatable('item.cataclysm.tidal_claws.tooltip.highlight1').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.tidal_claws.tooltip.highlight2').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.tidal_claws.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.tidal_claws.tooltip.behaviour1',
        Component.translatable('item.cataclysm.tidal_claws.tooltip.highlight3').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.tidal_claws.tooltip.highlight4').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.cataclysm.tidal_claws.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.cataclysm.tidal_claws.tooltip.behaviour2',
        Component.translatable('item.cataclysm.tidal_claws.tooltip.highlight5').color(PURPLE.hlt)
      ).color(PURPLE.txt))
    }
  })
  event.addAdvanced('cataclysm:abyssal_egg', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.cataclysm.abyssal_egg.tooltip.summary',
        Component.translatable('block.cataclysm.abyssal_egg.tooltip.highlight1').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('block.cataclysm.abyssal_egg.tooltip.condition1').gray())
      text.add(6, Component.translatable('block.cataclysm.abyssal_egg.tooltip.behaviour1',
        Component.translatable('block.cataclysm.abyssal_egg.tooltip.highlight2').color(PURPLE.hlt),
        Component.translatable('block.cataclysm.abyssal_egg.tooltip.highlight3').color(PURPLE.hlt),
        Component.translatable('block.cataclysm.abyssal_egg.tooltip.highlight4').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(7, '')
      text.add(8, Component.translatable('block.cataclysm.abyssal_egg.tooltip.condition2').gray())
      text.add(9, Component.translatable('block.cataclysm.abyssal_egg.tooltip.behaviour2',
        Component.translatable('block.cataclysm.abyssal_egg.tooltip.highlight5').color(PURPLE.hlt),
        Component.translatable('block.cataclysm.abyssal_egg.tooltip.highlight6').color(PURPLE.hlt)
      ).color(PURPLE.txt))
    }
  })
  event.addAdvanced('cataclysm:bloom_stone_pauldrons', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.bloom_stone_pauldrons.tooltip.summary').color(GREEN.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.bloom_stone_pauldrons.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.bloom_stone_pauldrons.tooltip.behaviour1',
        Component.translatable('item.cataclysm.bloom_stone_pauldrons.tooltip.highlight1').color(GREEN.hlt)
      ).color(GREEN.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.cataclysm.bloom_stone_pauldrons.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.cataclysm.bloom_stone_pauldrons.tooltip.behaviour2',
        Component.translatable('item.cataclysm.bloom_stone_pauldrons.tooltip.highlight2').color(GREEN.hlt),
        Component.translatable('item.cataclysm.bloom_stone_pauldrons.tooltip.highlight3').color(GREEN.hlt),
        Component.translatable('item.cataclysm.bloom_stone_pauldrons.tooltip.highlight4').color(GREEN.hlt)
      ).color(GREEN.txt))
      text.add(10, '')
      text.add(11, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:blessed_amethyst_crab_meat', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.blessed_amethyst_crab_meat.tooltip.summary',
        Component.translatable('item.cataclysm.blessed_amethyst_crab_meat.tooltip.highlight1').color(GREEN.hlt),
        Component.translatable('item.cataclysm.blessed_amethyst_crab_meat.tooltip.highlight2').color(GREEN.hlt),
        Component.translatable('item.cataclysm.blessed_amethyst_crab_meat.tooltip.highlight3').color(GREEN.hlt),
        Component.translatable('item.cataclysm.blessed_amethyst_crab_meat.tooltip.highlight4').color(GREEN.hlt),
        Component.translatable('item.cataclysm.blessed_amethyst_crab_meat.tooltip.highlight5').color(GREEN.hlt)
      ).color(GREEN.txt))
      text.add(4, '')
      text.add(5, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:abyss_eye', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.abyss_eye.tooltip.summary',
        Component.translatable('item.cataclysm.abyss_eye.tooltip.highlight1').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.abyss_eye.tooltip.highlight2').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.abyss_eye.tooltip.highlight3').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.abyss_eye.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.abyss_eye.tooltip.behaviour1',
        Component.translatable('item.cataclysm.abyss_eye.tooltip.highlight4').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.abyss_eye.tooltip.highlight5').color(PURPLE.hlt)
      ).color(PURPLE.txt))
    }
  })
  event.addAdvanced('cataclysm:cursed_eye', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.cursed_eye.tooltip.summary',
        Component.translatable('item.cataclysm.cursed_eye.tooltip.highlight1').aqua(),
        Component.translatable('item.cataclysm.cursed_eye.tooltip.highlight2').aqua(),
        Component.translatable('item.cataclysm.cursed_eye.tooltip.highlight3').aqua()
      ).darkAqua())
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.cursed_eye.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.cursed_eye.tooltip.behaviour1',
        Component.translatable('item.cataclysm.cursed_eye.tooltip.highlight4').aqua(),
        Component.translatable('item.cataclysm.cursed_eye.tooltip.highlight5').aqua()
      ).darkAqua())
    }
  })
  event.addAdvanced('cataclysm:desert_eye', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.desert_eye.tooltip.summary',
        Component.translatable('item.cataclysm.desert_eye.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.cataclysm.desert_eye.tooltip.highlight2').color(STANDARD.hlt),
        Component.translatable('item.cataclysm.desert_eye.tooltip.highlight3').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.desert_eye.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.desert_eye.tooltip.behaviour1',
        Component.translatable('item.cataclysm.desert_eye.tooltip.highlight4').color(STANDARD.hlt),
        Component.translatable('item.cataclysm.desert_eye.tooltip.highlight5').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('cataclysm:flame_eye', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.flame_eye.tooltip.summary',
        Component.translatable('item.cataclysm.flame_eye.tooltip.highlight1').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.flame_eye.tooltip.highlight2').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.flame_eye.tooltip.highlight3').color(YELLOW.hlt)
      ).color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.flame_eye.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.flame_eye.tooltip.behaviour1',
        Component.translatable('item.cataclysm.flame_eye.tooltip.highlight4').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.flame_eye.tooltip.highlight5').color(YELLOW.hlt)
      ).color(YELLOW.txt))
    }
  })
  event.addAdvanced('cataclysm:mech_eye', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.mech_eye.tooltip.summary',
        Component.translatable('item.cataclysm.mech_eye.tooltip.highlight1').color(RED.hlt),
        Component.translatable('item.cataclysm.mech_eye.tooltip.highlight2').color(RED.hlt),
        Component.translatable('item.cataclysm.mech_eye.tooltip.highlight3').color(RED.hlt)
      ).color(RED.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.mech_eye.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.mech_eye.tooltip.behaviour1',
        Component.translatable('item.cataclysm.mech_eye.tooltip.highlight4').color(RED.hlt),
        Component.translatable('item.cataclysm.mech_eye.tooltip.highlight5').color(RED.hlt)
      ).color(RED.txt))
    }
  })
  event.addAdvanced('cataclysm:monstrous_eye', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.monstrous_eye.tooltip.summary',
        Component.translatable('item.cataclysm.monstrous_eye.tooltip.highlight1').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.monstrous_eye.tooltip.highlight2').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.monstrous_eye.tooltip.highlight3').color(YELLOW.hlt)
      ).color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.monstrous_eye.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.monstrous_eye.tooltip.behaviour1',
        Component.translatable('item.cataclysm.monstrous_eye.tooltip.highlight4').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.monstrous_eye.tooltip.highlight5').color(YELLOW.hlt)
      ).color(YELLOW.txt))
    }
  })
  event.addAdvanced('cataclysm:storm_eye', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.storm_eye.tooltip.summary',
        Component.translatable('item.cataclysm.storm_eye.tooltip.highlight1').color(BLUE.hlt),
        Component.translatable('item.cataclysm.storm_eye.tooltip.highlight2').color(BLUE.hlt),
        Component.translatable('item.cataclysm.storm_eye.tooltip.highlight3').color(BLUE.hlt)
      ).color(BLUE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.storm_eye.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.storm_eye.tooltip.behaviour1',
        Component.translatable('item.cataclysm.storm_eye.tooltip.highlight4').color(BLUE.hlt),
        Component.translatable('item.cataclysm.storm_eye.tooltip.highlight5').color(BLUE.hlt)
      ).color(BLUE.txt))
    }
  })
  event.addAdvanced('cataclysm:void_eye', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.void_eye.tooltip.summary',
        Component.translatable('item.cataclysm.void_eye.tooltip.highlight1').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.void_eye.tooltip.highlight2').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.void_eye.tooltip.highlight3').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.void_eye.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.void_eye.tooltip.behaviour1',
        Component.translatable('item.cataclysm.void_eye.tooltip.highlight4').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.void_eye.tooltip.highlight5').color(PURPLE.hlt)
      ).color(PURPLE.txt))
    }
  })
  // WITHERITE
  event.addAdvanced('cataclysm:witherite_block', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.cataclysm.witherite_block.tooltip.summary',
        Component.translatable('block.cataclysm.witherite_block.tooltip.highlight1').color(RED.hlt)
      ).color(RED.txt))
    }
  })
  event.addAdvanced('cataclysm:witherite_ingot', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.witherite_ingot.tooltip.summary',
        Component.translatable('item.cataclysm.witherite_ingot.tooltip.highlight1').color(RED.hlt)
      ).color(RED.txt))
    }
  })
  event.addAdvanced('cataclysm:mechanical_fusion_anvil', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.cataclysm.mechanical_fusion_anvil.tooltip.summary',
        Component.translatable('block.cataclysm.mechanical_fusion_anvil.tooltip.highlight1').color(RED.hlt),
        Component.translatable('block.cataclysm.mechanical_fusion_anvil.tooltip.highlight2').color(RED.hlt)
      ).color(RED.txt))
    }
  })
  event.addAdvanced('cataclysm:wither_assault_shoulder_weapon', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.summary',
        Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.highlight1').color(RED.hlt),
        Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.highlight2').color(RED.hlt)
      ).color(RED.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.behaviour1',
        Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.highlight3').color(RED.hlt),
        Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.highlight4').color(RED.hlt),
        Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.highlight5').color(RED.hlt),
        Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.highlight6').color(RED.hlt),
        Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.highlight7')
      ).color(RED.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.behaviour2',
        Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.highlight8').color(RED.hlt),
        Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.highlight9').color(RED.hlt),
        Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.highlight10').color(RED.hlt),
        Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.highlight11').color(RED.hlt),
        Component.translatable('item.cataclysm.wither_assault_shoulder_weapon.tooltip.highlight12').color(RED.hlt)
      ).color(RED.txt))
      text.add(10, '')
      text.add(11, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:meat_shredder', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.meat_shredder.tooltip.summary',
        Component.translatable('item.cataclysm.meat_shredder.tooltip.highlight1').color(RED.hlt)
      ).color(RED.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.meat_shredder.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.meat_shredder.tooltip.behaviour1',
        Component.translatable('item.cataclysm.meat_shredder.tooltip.highlight2').color(RED.hlt)
      ).color(RED.txt))
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:laser_gatling', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.laser_gatling.tooltip.summary',
        Component.translatable('item.cataclysm.laser_gatling.tooltip.highlight1').color(RED.hlt),
        Component.translatable('item.cataclysm.laser_gatling.tooltip.highlight2').color(RED.hlt)
      ).color(RED.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.laser_gatling.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.laser_gatling.tooltip.behaviour1',
        Component.translatable('item.cataclysm.laser_gatling.tooltip.highlight3').color(RED.hlt)
      ).color(RED.txt))
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:void_assault_shoulder_weapon', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.void_assault_shoulder_weapon.tooltip.summary',
        Component.translatable('item.cataclysm.void_assault_shoulder_weapon.tooltip.highlight1').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.void_assault_shoulder_weapon.tooltip.highlight2').color(RED.hlt)
      ).color(PURPLE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.void_assault_shoulder_weapon.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.void_assault_shoulder_weapon.tooltip.behaviour1',
        Component.translatable('item.cataclysm.void_assault_shoulder_weapon.tooltip.highlight3').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.void_assault_shoulder_weapon.tooltip.highlight4').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  // ANCIENT / DESERT
  event.addAdvanced('cataclysm:sandstorm_in_a_bottle', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.sandstorm_in_a_bottle.tooltip.summary',
        Component.translatable('item.cataclysm.sandstorm_in_a_bottle.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:remnant_skull', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.remnant_skull.tooltip.summary',
        Component.translatable('item.cataclysm.remnant_skull.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.cataclysm.remnant_skull.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:necklace_of_the_desert', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.necklace_of_the_desert.tooltip.summary',
        Component.translatable('item.cataclysm.necklace_of_the_desert.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  // New Cataclysm items.
  event.addAdvanced('cataclysm:gauntlet_of_maelstrom', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.gauntlet_of_maelstrom.tooltip.summary',
        Component.translatable('item.cataclysm.gauntlet_of_maelstrom.tooltip.highlight1').color(STANDARD.txt),
        Component.translatable('item.cataclysm.gauntlet_of_maelstrom.tooltip.highlight2').color(PURPLE.hlt),
        Component.translatable('item.cataclysm.gauntlet_of_maelstrom.tooltip.highlight3').color(STANDARD.hlt)
      ).color(PURPLE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.gauntlet_of_maelstrom.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.gauntlet_of_maelstrom.tooltip.behaviour1',
        Component.translatable('item.cataclysm.gauntlet_of_maelstrom.tooltip.highlight4').color(PURPLE.hlt)
      ).color(PURPLE.txt))
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:blazing_grips', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.blazing_grips.tooltip.summary',
        Component.translatable('item.cataclysm.blazing_grips.tooltip.highlight1').color(YELLOW.hlt)
      ).color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.blazing_grips.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.blazing_grips.tooltip.behaviour1',
        Component.translatable('item.cataclysm.blazing_grips.tooltip.highlight2').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.blazing_grips.tooltip.highlight3').color(YELLOW.hlt)
      ).color(YELLOW.txt))
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:cursed_bow', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.cursed_bow.tooltip.summary',
        Component.translatable('item.cataclysm.cursed_bow.tooltip.highlight1').aqua(),
        Component.translatable('item.cataclysm.cursed_bow.tooltip.highlight2').aqua()
      ).darkAqua())
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.cursed_bow.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.cursed_bow.tooltip.behaviour1').darkAqua())
      text.add(7, '')
      text.add(8, Component.translatable('item.cataclysm.cursed_bow.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.cataclysm.cursed_bow.tooltip.behaviour2').darkAqua())
      text.add(10, '')
      text.add(11, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:wrath_of_the_desert', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.wrath_of_the_desert.tooltip.summary',
        Component.translatable('item.cataclysm.wrath_of_the_desert.tooltip.highlight1').aqua(),
        Component.translatable('item.cataclysm.wrath_of_the_desert.tooltip.highlight2').darkAqua(),
        Component.translatable('item.cataclysm.wrath_of_the_desert.tooltip.highlight3').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.wrath_of_the_desert.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.wrath_of_the_desert.tooltip.behaviour1',
        Component.translatable('item.cataclysm.wrath_of_the_desert.tooltip.highlight4').aqua()
      ).color(STANDARD.txt))
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:strange_key', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.strange_key.tooltip.summary',
        Component.translatable('item.cataclysm.strange_key.tooltip.highlight1').aqua()
      ).darkAqua())
      text.add(4, '')
      text.add(5, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:soul_render', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.soul_render.tooltip.summary',
        Component.translatable('item.cataclysm.soul_render.tooltip.highlight1').aqua()
      ).darkAqua())
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.soul_render.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.soul_render.tooltip.behaviour1',
        Component.translatable('item.cataclysm.soul_render.tooltip.highlight2').aqua()
      ).darkAqua())
      text.add(7, '')
      text.add(8, Component.translatable('item.cataclysm.soul_render.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.cataclysm.soul_render.tooltip.behaviour2',
        Component.translatable('item.cataclysm.soul_render.tooltip.highlight3').aqua(),
        Component.translatable('item.cataclysm.soul_render.tooltip.highlight4').aqua()
      ).darkAqua())
      text.add(10, '')
      text.add(11, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:the_annihilator', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.the_annihilator.tooltip.summary',
        Component.translatable('item.cataclysm.the_annihilator.tooltip.highlight1').aqua()
      ).darkAqua())
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.the_annihilator.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.the_annihilator.tooltip.behaviour1',
        Component.translatable('item.cataclysm.the_annihilator.tooltip.highlight2').aqua()
      ).darkAqua())
      text.add(7, '')
      text.add(8, Component.translatable('item.cataclysm.the_annihilator.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.cataclysm.the_annihilator.tooltip.behaviour2',
        Component.translatable('item.cataclysm.the_annihilator.tooltip.highlight3').aqua()
      ).darkAqua())
      text.add(10, '')
      text.add(11, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:the_immolator', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.the_immolator.tooltip.summary',
        Component.translatable('item.cataclysm.the_immolator.tooltip.highlight1').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.the_immolator.tooltip.highlight2').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.the_immolator.tooltip.highlight3').aqua()
      ).color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.the_immolator.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.the_immolator.tooltip.behaviour1').color(YELLOW.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.cataclysm.the_immolator.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.cataclysm.the_immolator.tooltip.behaviour2').color(YELLOW.txt))
      text.add(10, '')
      text.add(11, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:astrape', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.astrape.tooltip.summary',
        Component.translatable('item.cataclysm.astrape.tooltip.highlight1').color(BLUE.hlt)
      ).color(BLUE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.astrape.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.astrape.tooltip.behaviour1',
        Component.translatable('item.cataclysm.astrape.tooltip.highlight2').color(BLUE.hlt),
        Component.translatable('item.cataclysm.astrape.tooltip.highlight3').color(BLUE.hlt),
        Component.translatable('item.cataclysm.astrape.tooltip.highlight4').color(BLUE.hlt)
      ).color(BLUE.txt))
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:ceraunus', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.ceraunus.tooltip.summary',
        Component.translatable('item.cataclysm.ceraunus.tooltip.highlight1').color(BLUE.hlt)
      ).color(BLUE.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.ceraunus.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.ceraunus.tooltip.behaviour1',
        Component.translatable('item.cataclysm.ceraunus.tooltip.highlight2').color(BLUE.hlt),
        Component.translatable('item.cataclysm.ceraunus.tooltip.highlight3').color(BLUE.hlt),
        Component.translatable('item.cataclysm.ceraunus.tooltip.highlight4').color(BLUE.hlt)
      ).color(BLUE.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.cataclysm.ceraunus.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.cataclysm.ceraunus.tooltip.behaviour2').color(BLUE.txt))
      text.add(10, '')
      text.add(11, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:ancient_spear', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.ancient_spear.tooltip.summary').color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.ancient_spear.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.ancient_spear.tooltip.behaviour1',
        Component.translatable('item.cataclysm.ancient_spear.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.cataclysm.ancient_spear.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.cataclysm.ancient_spear.tooltip.behaviour2',
        Component.translatable('item.cataclysm.ancient_spear.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(10, '')
      text.add(11, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:sticky_gloves', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.sticky_gloves.tooltip.summary').color(GREEN.txt))
      text.add(4, '')
      text.add(5, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:netherite_effigy', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.netherite_effigy.tooltip.summary').color(YELLOW.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.netherite_effigy.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.netherite_effigy.tooltip.behaviour1',
        Component.translatable('item.cataclysm.netherite_effigy.tooltip.highlight1').color(YELLOW.hlt),
        Component.translatable('item.cataclysm.netherite_effigy.tooltip.highlight2').color(YELLOW.hlt)
      ).color(YELLOW.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.cataclysm.netherite_effigy.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.cataclysm.netherite_effigy.tooltip.behaviour2',
        Component.translatable('item.cataclysm.netherite_effigy.tooltip.highlight3').color(YELLOW.hlt)
      ).color(YELLOW.txt))
      text.add(10, '')
      text.add(11, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:lava_power_cell', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.lava_power_cell.tooltip.summary',
        Component.translatable('item.cataclysm.lava_power_cell.tooltip.highlight1').color(YELLOW.hlt)
      ).color(YELLOW.txt))
    }
  })
  event.addAdvanced('cataclysm:cursium_helmet', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.cursium_helmet.tooltip.summary').darkAqua())
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.cursium_helmet.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.cursium_helmet.tooltip.behaviour1').darkAqua())
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:cursium_chestplate', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.cursium_chestplate.tooltip.summary').darkAqua())
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.cursium_chestplate.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.cursium_chestplate.tooltip.behaviour1').darkAqua())
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:cursium_leggings', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.cursium_leggings.tooltip.summary').darkAqua())
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.cursium_leggings.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.cursium_leggings.tooltip.behaviour1',
        Component.translatable('item.cataclysm.cursium_leggings.tooltip.highlight1').aqua(),
        Component.translatable('item.cataclysm.cursium_leggings.tooltip.highlight2').aqua(),
        Component.translatable('item.cataclysm.cursium_leggings.tooltip.highlight3').aqua()
      ).darkAqua())
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
  event.addAdvanced('cataclysm:cursium_boots', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
      text.remove(2)
      text.remove(2)
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.cataclysm.cursium_boots.tooltip.summary').darkAqua())
      text.add(4, '')
      text.add(5, Component.translatable('item.cataclysm.cursium_boots.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.cataclysm.cursium_boots.tooltip.behaviour1').darkAqua())
      text.add(7, '')
      text.add(8, Component.translatable('kubejs.cataclysm.original_tooltip_text').darkPurple())
    }
  })
})

/*
    event.addAdvanced('cataclysm:infernal_forge', (item, advanced, text) => {
      text.set(1, Text.of('§6Right click on a block to cause AoE damage around yourself, it sends mobs flying.')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
      text.set(2, Text.of('§6Also important to note, this is actually a pickaxe.'))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:monstrous_helm', (item, advanced, text) => {
      text.add(1, Text.of('§6Falling below half of your HP will push away entities and grant buffs.'))
      text.add(2, Text.of('§6You are given additional Defense, Knockback Resistance and Regeneration.'))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:the_incinerator', (item, advanced, text) => {
      text.add(1, Text.of('§6Hold right click for 3 seconds until you hear a sound.'))
      text.add(2, Text.of('§6After hearing the roar of the flames, let go to unleash devastation in a straight line.'))
      text.add(3, Text.of('§6WARNING: Dropped items in the line of fire will be destroyed!'))
      text.add(4, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:bulwark_of_the_flame', (item, advanced, text) => {
      text.add(1, Text.of('§6Functions regularly like a shield, but with a charge ability.'))
      text.add(2, Text.of('§6While sneaking and blocking, let go of the right mouse button to charge forward.'))
      text.add(3, Text.of('§6Entities that collide with a wall are stunned from the impact and take additional damage.'))
      text.add(4, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:void_scatter_arrow', (item, advanced, text) => {
      text.add(1, Text.of('§6This arrow explodes on impact, creating many fragments in the process.'))
    })
    event.addAdvanced('cataclysm:void_core', (item, advanced, text) => {
      text.add(1, Text.of('§6Right click on the ground to cause Void Rune spikes to erupt in a straight line in front of you.'))
      text.add(2, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:gauntlet_of_guard', (item, advanced, text) => {
      text.add(1, Text.of('§6When held in your main hand, you can pull entities towards you by holding right click.'))
      text.add(2, Text.of('§6Be sure to give them a golden punch afterwards!'))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    // Ignitium Armor corrections
    event.addAdvanced('cataclysm:ignitium_helmet', (item, advanced, text) => {
      text.add(1, Text.of('§6Provides Lava Vision.'))
      text.add(2, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:ignitium_chestplate', (item, advanced, text) => {
      text.add(1, Text.of('§6You can combine an Elytra with this in the Smithing Table.'))
      text.add(2, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:ignitium_leggings', (item, advanced, text) => {
      text.add(1, Text.of('§6The developer, L_Ender says "Flame Reflex" ...but the item fails to give any form of Fire Resistance.'))
      text.add(2, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:ignitium_boots', (item, advanced, text) => {
      text.add(1, Text.of('§6Lava Walker, allows you to walk on lava.'))
      text.add(2, Text.of("§6DOES NOT provide Fire Resistance, even with the full set!"))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    // cataclysm 1192 items
    event.addAdvanced('cataclysm:wither_assault_shoulder_weapon', (item, advanced, text) => {
      text.add(1, Text.of('§6Hold and release right click to fire a Wither Missile that travels in a straight line and explodes'))
      text.add(2, Text.of('§6Hold Shift to use the alt fire which fires a Wither Howitzer projectile that follows an arced path.'))
      text.add(3, Text.of('§6Upon contact, the Howitzer projectile leaves a lingering smoke that applies the Wither effect.'))
      text.add(4, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:void_forge', (item, advanced, text) => {
      text.add(1, Text.of('§6Now creates a fan of void spikes when you right click a block, in addition to sending mobs flying.'))
      text.add(2, Text.of('§6Yes, this is still a pickaxe.'))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:gauntlet_of_bulwark', (item, advanced, text) => {
      text.add(1, Text.of('§6Hold right click to push nearby entities and give them the Blazing Brand debuff.'))
      text.add(2, Text.of('§6Releasing right click will make you charge forward and apply damage to the entities hit by you.'))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:void_assault_shoulder_weapon', (item, advanced, text) => {
      text.add(1, Text.of('§6The upgraded version of the Wither Assault Shoulder Weapon.'))
      text.add(2, Text.of('§6You can now shoot Void Howitzer projectiles which now create a tsunami of void spikes on impact.'))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:tidal_claws', (item, advanced, text) => {
      text.add(1, Text.of('§6Left click to attack multiple entities with a single tentacle.'))
      text.add(2, Text.of('§6Right click to use as a grappling hook.'))
      text.add(3, Text.of('§5Original tooltip text below for translation purposes. - CelestialAbyss'))
    })
    event.addAdvanced('cataclysm:abyssal_egg', (item, advanced, text) => {
      text.add(1, Text.of('§6You emerge as victor, but now you have an egg in your possession.'))
      text.add(2, Text.of('§6Probably best to make sure you have some tropical fish to feed your adorable Leviathan once it hatches.'))
    })
*/
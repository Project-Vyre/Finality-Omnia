// ignored: false
// requires: create

ItemEvents.tooltip(event => {
  // event.add('minecraft:campfire', Component.translatable('kubejs.minecraft.campfire.tooltip').gold())
  // event.add('minecraft:soul_campfire', Component.translatable('kubejs.minecraft.soul_campfire.tooltip').aqua())
  event.addAdvanced('minecraft:beacon', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('block.minecraft.beacon.tooltip.summary',
          Component.translate('block.minecraft.beacon.tooltip.highlight1').color(STANDARD.hlt)
        ).color(STANDARD.txt)
      )
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.beacon.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('block.minecraft.beacon.tooltip.behaviour1',
          Component.translatable('block.minecraft.beacon.tooltip.highlight2').white(),
          Component.translatable('block.minecraft.beacon.tooltip.highlight3').yellow(),
          Component.translatable('block.minecraft.beacon.tooltip.highlight4').aqua(),
          Component.translatable('block.minecraft.beacon.tooltip.highlight5').green(),
          Component.translatable('block.minecraft.beacon.tooltip.highlight6').color(0x443A3B)
        ).color(STANDARD.txt)
      )
    }
  })
  if (Platform.isLoaded('pickletweaks')) {
    event.addAdvanced('minecraft:wooden_pickaxe', (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, Component.translatable(kjsHoldShift))
      } else {
        text.add(1, Component.translatable(kjsHoldShiftHeld))
        text.add(2, '')
        text.add(3,
          Component.translatable('item.minecraft.wooden_pickaxe.tooltip.summary',
            Component.translatable('item.minecraft.wooden_pickaxe.tooltip.highlight1').green()
          ).color(STANDARD.txt)
        )
        text.add(4, '')
        text.add(5, Component.translatable('item.minecraft.wooden_pickaxe.tooltip.condition1').gray())
        text.add(6,
          Component.translatable('item.minecraft.wooden_pickaxe.tooltip.behaviour1',
            Component.translatable('item.minecraft.wooden_pickaxe.tooltip.highlight2').aqua(),
            Component.translatable('item.minecraft.wooden_pickaxe.tooltip.highlight3').darkGray()
          ).color(STANDARD.txt)
        )
      }
    })
    event.addAdvanced('minecraft:stone_pickaxe', (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, Component.translatable(kjsHoldShift))
      } else {
        text.add(1, Component.translatable(kjsHoldShiftHeld))
        text.add(2, '')
        text.add(3,
          Component.translatable('item.minecraft.stone_pickaxe.tooltip.summary',
            Component.translatable('item.minecraft.stone_pickaxe.tooltip.highlight1').green()
          ).color(STANDARD.txt)
        )
        text.add(4, '')
        text.add(5, Component.translatable('item.minecraft.stone_pickaxe.tooltip.condition1').gray())
        text.add(6,
          Component.translatable('item.minecraft.stone_pickaxe.tooltip.behaviour1',
            Component.translatable('item.minecraft.stone_pickaxe.tooltip.highlight2').aqua(),
            Component.translatable('item.minecraft.stone_pickaxe.tooltip.highlight3').darkGray()
          ).color(STANDARD.txt)
        )
      }
    })
    event.addAdvanced('minecraft:iron_pickaxe', (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, Component.translatable(kjsHoldShift))
      } else {
        text.add(1, Component.translatable(kjsHoldShiftHeld))
        text.add(2, '')
        text.add(3,
          Component.translatable('item.minecraft.iron_pickaxe.tooltip.summary',
            Component.translatable('item.minecraft.iron_pickaxe.tooltip.highlight1').green()
          ).color(STANDARD.txt)
        )
        text.add(4, '')
        text.add(5, Component.translatable('item.minecraft.iron_pickaxe.tooltip.condition1').gray())
        text.add(6,
          Component.translatable('item.minecraft.iron_pickaxe.tooltip.behaviour1',
            Component.translatable('item.minecraft.iron_pickaxe.tooltip.highlight2').aqua(),
            Component.translatable('item.minecraft.iron_pickaxe.tooltip.highlight3').darkGray()
          ).color(STANDARD.txt)
        )
      }
    })
  }
  /*
  You can now repair tools with the material that they were made with in your crafting grid.

  Additional Info
  This also applies to Diamond, Netherite and other tools as well, wherever applicable.
        text.add(1, [
          Text.of('You can now ').white(),
          Text.of('repair ').green().bold(true),
          Text.of('tools with the material they are made of in your ').white(),
          Text.of('crafting grid').gold(),
          Text.of('.').white()
        ])
        text.add(2, [
          Text.of('If you are wondering.. yes, this also applies to ').white(),
          Text.of('Diamond ').aqua(),
          Text.of('and ').white(),
          Text.of('Netherite ').darkGray(),
          Text.of('and other tools as well.').white()
        ])
        text.add(3, [
          'This hint will only show up on wooden, stone and iron pickaxes, so try to remember this!'
        ])
  */
  event.addAdvanced('minecraft:obsidian', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.minecraft.obsidian.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.obsidian.tooltip.condition1'))
      text.add(6, Component.translatable('block.minecraft.obsidian.tooltip.behaviour1'))
      text.add(7, '')
      text.add(8, Component.translatable('block.minecraft.obsidian.tooltip.condition2'))
      text.add(9, Component.translatable('block.minecraft.obsidian.tooltip.behaviour2'))
      text.add(10, '')
      text.add(11, Component.translatable('block.minecraft.obsidian.tooltip.condition3'))
      text.add(12, Component.translatable('block.minecraft.obsidian.tooltip.behaviour3'))
    }
  })
  event.addAdvanced('minecraft:clock', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('item.minecraft.clock.tooltip.summary',
          Component.translatable('item.minecraft.clock.tooltip.highlight1').color(STANDARD.hlt)
        ).color(STANDARD.txt)
      )
    }
  })
  // STONE BLOCKS
  event.addAdvanced('minecraft:andesite', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('block.minecraft.andesite.tooltip.summary',
          Component.translatable('block.minecraft.andesite.tooltip.highlight1').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.andesite.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('block.minecraft.andesite.tooltip.behaviour1',
          Component.translatable('block.minecraft.andesite.tooltip.highlight2').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
      text.add(7, '')
      text.add(8, Component.translatable('block.minecraft.andesite.tooltip.condition2').gray())
      text.add(9,
        Component.translatable('block.minecraft.andesite.tooltip.behaviour2',
          Component.translatable('block.minecraft.andesite.tooltip.highlight3').color(GRAY.hlt),
          Component.translatable('block.minecraft.andesite.tooltip.highlight4').color(GRAY.hlt),
          Component.translatable('block.minecraft.andesite.tooltip.highlight5').color(GRAY.hlt),
          Component.translatable('block.minecraft.andesite.tooltip.highlight6').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
      text.add(10, '')
      text.add(11, Component.translatable('block.minecraft.andesite.tooltip.condition3').gray())
      text.add(12,
        Component.translatable('block.minecraft.andesite.tooltip.behaviour3',
          Component.translatable('block.minecraft.andesite.tooltip.highlight7').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
    }
  })
  event.addAdvanced('minecraft:diorite', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('block.minecraft.diorite.tooltip.summary',
          Component.translatable('block.minecraft.diorite.tooltip.highlight1').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.diorite.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('block.minecraft.diorite.tooltip.behaviour1',
          Component.translatable('block.minecraft.diorite.tooltip.highlight2').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
      text.add(7, '')
      text.add(8, Component.translatable('block.minecraft.diorite.tooltip.condition2').gray())
      text.add(9,
        Component.translatable('block.minecraft.diorite.tooltip.behaviour2',
          Component.translatable('block.minecraft.diorite.tooltip.highlight3').color(GRAY.hlt),
          Component.translatable('block.minecraft.diorite.tooltip.highlight4').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
    }
  })
  event.addAdvanced('minecraft:granite', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('block.minecraft.granite.tooltip.summary',
          Component.translatable('block.minecraft.granite.tooltip.highlight1').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.granite.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('block.minecraft.granite.tooltip.behaviour1',
          Component.translatable('block.minecraft.granite.tooltip.highlight2').color(GRAY.hlt),
          Component.translatable('block.minecraft.granite.tooltip.highlight3').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
    }
  })
  event.addAdvanced('minecraft:cobblestone', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('block.minecraft.cobblestone.tooltip.summary',
          Component.translatable('block.minecraft.cobblestone.tooltip.highlight1').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.cobblestone.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('block.minecraft.cobblestone.tooltip.behaviour1',
          Component.translatable('block.minecraft.cobblestone.tooltip.highlight2').color(GRAY.hlt),
          Component.translatable('block.minecraft.cobblestone.tooltip.highlight3').color(GRAY.hlt),
          Component.translatable('block.minecraft.cobblestone.tooltip.highlight4').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
      text.add(7, '')
      text.add(8, Component.translatable('block.minecraft.cobblestone.tooltip.condition2').gray())
      text.add(9,
        Component.translatable('block.minecraft.cobblestone.tooltip.behaviour2',
          Component.translatable('block.minecraft.cobblestone.tooltip.highlight5').color(GRAY.hlt),
          Component.translatable('block.minecraft.cobblestone.tooltip.highlight6').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
    }
  })
  event.addAdvanced('minecraft:dirt', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('block.minecraft.dirt.tooltip.summary',
          Component.translatable('block.minecraft.dirt.tooltip.highlight1').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.dirt.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('block.minecraft.dirt.tooltip.behaviour1',
          Component.translatable('block.minecraft.dirt.tooltip.highlight2').color(GRAY.hlt),
          Component.translatable('block.minecraft.dirt.tooltip.highlight3').color(GRAY.hlt),
          Component.translatable('block.minecraft.dirt.tooltip.highlight4').color(GRAY.hlt),
          Component.translatable('block.minecraft.dirt.tooltip.highlight5').color(GRAY.hlt),
        ).color(GRAY.txt)
      )
    }
  })
  event.addAdvanced('minecraft:gravel', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('block.minecraft.gravel.tooltip.summary',
          Component.translatable('block.minecraft.gravel.tooltip.highlight1').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.gravel.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('block.minecraft.gravel.tooltip.behaviour1',
          Component.translatable('block.minecraft.gravel.tooltip.highlight2').color(GRAY.hlt),
          Component.translatable('block.minecraft.gravel.tooltip.highlight3').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
    }
  })
  event.addAdvanced('minecraft:tuff', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('block.minecraft.tuff.tooltip.summary',
          Component.translatable('block.minecraft.tuff.tooltip.highlight1').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.tuff.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('block.minecraft.tuff.tooltip.behaviour1',
          Component.translatable('block.minecraft.tuff.tooltip.highlight2').color(GRAY.hlt)
        ).color(GRAY.txt)
      )
      text.add(7, '')
      text.add(8, Component.translatable('block.minecraft.tuff.tooltip.condition2').gray())
      text.add(9,
        Component.translatable('block.minecraft.tuff.tooltip.behaviour2',
          Component.translatable('block.minecraft.tuff.tooltip.highlight3').color(GRAY.hlt),
          Component.translatable('block.minecraft.tuff.tooltip.highlight4').aqua()
        ).color(GRAY.txt)
      )
      text.add(10, '')
      text.add(11, Component.translatable('block.minecraft.tuff.tooltip.condition3',).gray())
      text.add(12,
        Component.translatable('block.minecraft.tuff.tooltip.behaviour3',
          Component.translatable('block.minecraft.tuff.tooltip.highlight5').color(GRAY.hlt),
          Component.translatable('block.minecraft.tuff.tooltip.highlight6').gold()
        ).color(GRAY.txt)
      )
    }
  })
  event.addAdvanced('minecraft:dried_kelp_block', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('block.minecraft.dried_kelp_block.tooltip.summary',
          Component.translatable('block.minecraft.dried_kelp_block.tooltip.highlight1').color(STANDARD.hlt)
        ).color(STANDARD.txt)
      )
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.dried_kelp_block.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('block.minecraft.dried_kelp_block.tooltip.behaviour1',
          Component.translatable('block.minecraft.dried_kelp_block.tooltip.highlight2').color(STANDARD.hlt),
          Component.translatable('block.minecraft.dried_kelp_block.tooltip.highlight3').gold()
        ).color(STANDARD.txt)
      )
    }
  })
  event.addAdvanced('minecraft:netherrack', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('block.minecraft.netherrack.tooltip.summary',
          Component.translatable('block.minecraft.netherrack.tooltip.highlight1').color(RED.hlt),
          Component.translatable('block.minecraft.netherrack.tooltip.highlight2').color(RED.hlt)
        ).color(RED.txt)
      )
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.netherrack.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('block.minecraft.netherrack.tooltip.behaviour1',
          Component.translatable('block.minecraft.netherrack.tooltip.highlight3').color(RED.hlt),
          Component.translatable('block.minecraft.netherrack.tooltip.highlight4').color(RED.hlt),
          Component.translatable('block.minecraft.netherrack.tooltip.highlight5').color(RED.hlt),
          Component.translatable('block.minecraft.netherrack.tooltip.highlight6').color(RED.hlt),
          Component.translatable('block.minecraft.netherrack.tooltip.highlight7').color(0x443A3B)
        ).color(RED.txt)
      )
      text.add(7, '')
      text.add(8, Component.translatable('block.minecraft.netherrack.tooltip.condition2').gray())
      text.add(9,
        Component.translatable('block.minecraft.netherrack.tooltip.behaviour2',
          Component.translatable('block.minecraft.netherrack.tooltip.highlight8').color(RED.hlt),
          Component.translatable('block.minecraft.netherrack.tooltip.highlight9').color(RED.hlt)
        ).color(RED.txt)
      )
    }
  })
  event.addAdvanced('minecraft:coal', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('item.minecraft.coal.tooltip.summary',
          Component.translatable('item.minecraft.coal.tooltip.highlight1').color(STANDARD.hlt)
        ).color(STANDARD.txt)
      )
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.coal.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('item.minecraft.coal.tooltip.behaviour1',
          Component.translatable('item.minecraft.coal.tooltip.highlight2').color(STANDARD.hlt)
        ).color(STANDARD.txt)
      )
      text.add(7, '')
      text.add(8, Component.translatable('item.minecraft.coal.tooltip.condition2').gray())
      text.add(9,
        Component.translatable('item.minecraft.coal.tooltip.behaviour2',
          Component.translatable('item.minecraft.coal.tooltip.highlight3').color(STANDARD.hlt),
          Component.translatable('item.minecraft.coal.tooltip.highlight4').gold()
        ).color(STANDARD.txt)
      )
    }
  })
  event.addAdvanced('minecraft:coal_block', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.minecraft.coal_block.tooltip.summary',
        Component.translatable('block.minecraft.coal_block.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.coal_block.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('block.minecraft.coal_block.tooltip.behaviour1',
          Component.translatable('block.minecraft.coal_block.tooltip.highlight2').aqua(),
          Component.translatable('block.minecraft.coal_block.tooltip.highlight3').aqua()
        ).color(STANDARD.txt)
      )
      text.add(7, '')
      text.add(8, Component.translatable('block.minecraft.coal_block.tooltip.condition2').gray())
      text.add(9,
        Component.translatable('block.minecraft.coal_block.tooltip.behaviour2',
          Component.translatable('block.minecraft.coal_block.tooltip.highlight4').color(STANDARD.hlt),
          Component.translatable('block.minecraft.coal_block.tooltip.highlight5').gold()
        ).color(STANDARD.txt)
      )
    }
  })
  event.addAdvanced('minecraft:diamond', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('item.minecraft.diamond.tooltip.summary',
          Component.translatable('item.minecraft.diamond.tooltip.highlight1').color(STANDARD.hlt)
        ).color(STANDARD.txt)
      )
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.diamond.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('item.minecraft.diamond.tooltip.behaviour1',
          Component.translatable('item.minecraft.diamond.tooltip.highlight2').color(STANDARD.hlt),
          Component.translatable('item.minecraft.diamond.tooltip.highlight3').aqua()
        ).color(STANDARD.txt)
      )
    }
  })
  event.addAdvanced('minecraft:diamond_block', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('block.minecraft.diamond_block.tooltip.summary',
          Component.translatable('block.minecraft.diamond_block.tooltip.highlight1').color(STANDARD.hlt)
        ).color(STANDARD.txt)
      )
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.diamond_block.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('block.minecraft.diamond_block.tooltip.behaviour1',
          Component.translatable('block.minecraft.diamond_block.tooltip.highlight2').color(STANDARD.hlt),
          Component.translatable('block.minecraft.diamond_block.tooltip.highlight3').aqua()
        ).color(STANDARD.txt)
      )
    }
  })
  event.addAdvanced('minecraft:glass_bottle', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3,
        Component.translatable('item.minecraft.glass_bottle.tooltip.summary',
          Component.translatable('item.minecraft.glass_bottle.tooltip.highlight1').color(STANDARD.hlt)
        ).color(STANDARD.txt)
      )
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.glass_bottle.tooltip.condition1').gray())
      text.add(6,
        Component.translatable('item.minecraft.glass_bottle.tooltip.behaviour1').color(STANDARD.txt)
      )
    }
  })
  event.addAdvanced('minecraft:lapis_lazuli', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.minecraft.lapis_lazuli.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.lapis_lazuli.tooltip.condition1'))
      text.add(6, Component.translatable('item.minecraft.lapis_lazuli.tooltip.behaviour1'))
      text.add(7, '')
      text.add(8, Component.translatable('item.minecraft.lapis_lazuli.tooltip.condition2'))
      text.add(9, Component.translatable('item.minecraft.lapis_lazuli.tooltip.behaviour2'))
    }
  })
  event.addAdvanced('minecraft:pointed_dripstone', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.minecraft.pointed_dripstone.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.pointed_dripstone.tooltip.condition1'))
      text.add(6, Component.translatable('block.minecraft.pointed_dripstone.tooltip.behaviour1'))
    }
  })
  event.addAdvanced('minecraft:cobbled_deepslate', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.minecraft.cobbled_deepslate.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.cobbled_deepslate.tooltip.condition1'))
      text.add(6, Component.translatable('block.minecraft.cobbled_deepslate.tooltip.behaviour1'))
    }
  })
  event.addAdvanced('minecraft:campfire', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.minecraft.campfire.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.campfire.tooltip.condition1'))
      text.add(6, Component.translatable('block.minecraft.campfire.tooltip.behaviour1'))
      text.add(7, '')
      text.add(8, Component.translatable('block.minecraft.campfire.tooltip.condition2'))
      text.add(9, Component.translatable('block.minecraft.campfire.tooltip.behaviour2'))
    }
  })
  event.addAdvanced('minecraft:soul_campfire', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.minecraft.soul_campfire.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.soul_campfire.tooltip.condition1'))
      text.add(6, Component.translatable('block.minecraft.soul_campfire.tooltip.behaviour1'))
      text.add(7, '')
      text.add(8, Component.translatable('block.minecraft.soul_campfire.tooltip.condition2'))
      text.add(9, Component.translatable('block.minecraft.soul_campfire.tooltip.behaviour2'))
    }
  })
  event.addAdvanced('minecraft:rotten_flesh', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.minecraft.rotten_flesh.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.rotten_flesh.tooltip.condition1'))
      text.add(6, Component.translatable('item.minecraft.rotten_flesh.tooltip.behaviour1'))
      text.add(7, '')
      text.add(8, Component.translatable('item.minecraft.rotten_flesh.tooltip.condition2'))
      text.add(9, Component.translatable('item.minecraft.rotten_flesh.tooltip.behaviour2'))
    }
  })
  event.addAdvanced('minecraft:nether_star', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.minecraft.nether_star.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.nether_star.tooltip.condition1'))
      text.add(6, Component.translatable('item.minecraft.nether_star.tooltip.behaviour1'))
    }
  })
  /*
      "block.minecraft.dragon_egg.tooltip": "DRAGON EGG",
      "block.minecraft.dragon_egg.tooltip.summary": "Now has an _actual_ use.",
      "block.minecraft.dragon_egg.tooltip.condition1": "Usage",
      "block.minecraft.dragon_egg.tooltip.behaviour1": "Used in making _Dragon Breath_.",
  */
  event.addAdvanced('minecraft:dragon_egg', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.minecraft.dragon_egg.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.dragon_egg.tooltip.condition1'))
      text.add(6, Component.translatable('item.minecraft.dragon_egg.tooltip.behaviour1'))
    }
  })
  event.addAdvanced('minecraft:structure_void', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.minecraft.structure_void.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.structure_void.tooltip.condition1'))
      text.add(6, Component.translatable('block.minecraft.structure_void.tooltip.behaviour1'))
    }
  })
  event.addAdvanced('minecraft:raw_iron', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.minecraft.raw_iron.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.raw_iron.tooltip.condition1'))
      text.add(6, Component.translatable('item.minecraft.raw_iron.tooltip.behaviour1'))
    }
  })
  event.addAdvanced('minecraft:iron_ingot', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.minecraft.iron_ingot.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.iron_ingot.tooltip.condition1'))
      text.add(6, Component.translatable('item.minecraft.iron_ingot.tooltip.behaviour1'))
      text.add(7, '')
      text.add(8, Component.translatable('item.minecraft.iron_ingot.tooltip.condition2'))
      text.add(9, Component.translatable('item.minecraft.iron_ingot.tooltip.behaviour2'))
    }
  })
  event.addAdvanced('minecraft:raw_copper', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.minecraft.raw_copper.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.raw_copper.tooltip.condition1'))
      text.add(6, Component.translatable('item.minecraft.raw_copper.tooltip.behaviour1'))
    }
  })
  event.addAdvanced('minecraft:copper_ingot', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.minecraft.copper_ingot.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.copper_ingot.tooltip.condition1'))
      text.add(6, Component.translatable('item.minecraft.copper_ingot.tooltip.behaviour1'))
      text.add(7, '')
      text.add(8, Component.translatable('item.minecraft.copper_ingot.tooltip.condition2'))
      text.add(9, Component.translatable('item.minecraft.copper_ingot.tooltip.behaviour2'))
      text.add(10, '')
      text.add(11, Component.translatable('item.minecraft.copper_ingot.tooltip.condition3'))
      text.add(12, Component.translatable('item.minecraft.copper_ingot.tooltip.behaviour3'))
    }
  })
  event.addAdvanced('minecraft:raw_gold', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.minecraft.raw_gold.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.raw_gold.tooltip.condition1'))
      text.add(6, Component.translatable('item.minecraft.raw_gold.tooltip.behaviour1'))
    }
  })
  event.addAdvanced('minecraft:gold_ingot', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.minecraft.gold_ingot.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.gold_ingot.tooltip.condition1'))
      text.add(6, Component.translatable('item.minecraft.gold_ingot.tooltip.behaviour1'))
    }
  })
  event.addAdvanced('minecraft:composter', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.minecraft.composter.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('block.minecraft.composter.tooltip.condition1'))
      text.add(6, Component.translatable('block.minecraft.composter.tooltip.behaviour1'))
    }
  })
  event.addAdvanced('minecraft:glowstone_dust', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.minecraft.glowstone_dust.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.glowstone_dust.tooltip.condition1'))
      text.add(6, Component.translatable('item.minecraft.glowstone_dust.tooltip.behaviour1'))
      text.add(7, '')
      text.add(8, Component.translatable('item.minecraft.glowstone_dust.tooltip.condition2'))
      text.add(9, Component.translatable('item.minecraft.glowstone_dust.tooltip.behaviour2'))
    }
  })
  event.addAdvanced('minecraft:gunpowder', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.minecraft.gunpowder.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.gunpowder.tooltip.condition1'))
      text.add(6, Component.translatable('item.minecraft.gunpowder.tooltip.behaviour1'))
      text.add(7, '')
      if (Platform.isLoaded('salt')) {
        text.add(8, Component.translatable('item.minecraft.gunpowder.tooltip.condition2'))
        text.add(9, Component.translatable('item.minecraft.gunpowder.tooltip.behaviour2'))
      }
    }
  })
  event.addAdvanced('minecraft:redstone', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.minecraft.redstone.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('item.minecraft.redstone.tooltip.condition1'))
      text.add(6, Component.translatable('item.minecraft.redstone.tooltip.behaviour1'))
      text.add(7, '')
      text.add(8, Component.translatable('item.minecraft.redstone.tooltip.condition2'))
      text.add(9, Component.translatable('item.minecraft.redstone.tooltip.behaviour2'))
    }
  })
})
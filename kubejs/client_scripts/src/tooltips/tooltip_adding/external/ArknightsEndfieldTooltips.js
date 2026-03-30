// requires: arknights_endfield

ItemEvents.tooltip(event => {
  event.addAdvanced('arknights_endfield:portable_originium_rig', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.arknights_endfield.portable_originium_rig.tooltip.summary',
        Component.translatable('block.arknights_endfield.portable_originium_rig.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('block.arknights_endfield.portable_originium_rig.tooltip.condition1').gray())
      text.add(6, Component.translatable('block.arknights_endfield.portable_originium_rig.tooltip.behaviour1').color(STANDARD.txt))
    }
  })
  event.addAdvanced('arknights_endfield:electric_mining_rig', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.arknights_endfield.electric_mining_rig.tooltip.summary',
        Component.translatable('block.arknights_endfield.electric_mining_rig.tooltip.highlight1').blue()
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('block.arknights_endfield.electric_mining_rig.tooltip.condition1').gray())
      text.add(6, Component.translatable('block.arknights_endfield.electric_mining_rig.tooltip.behaviour1',
        Component.translatable('block.arknights_endfield.electric_mining_rig.tooltip.highlight2').color(0x61ACEA)
      ).color(STANDARD.txt))
    }
  })
  event.addAdvanced('arknights_endfield:electric_mining_rig_mk_ii', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.arknights_endfield.electric_mining_rig_mk_ii.tooltip.summary',
        Component.translatable('block.arknights_endfield.electric_mining_rig_mk_ii.tooltip.highlight1').blue()
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('block.arknights_endfield.electric_mining_rig_mk_ii.tooltip.condition1').gray())
      text.add(6, Component.translatable('block.arknights_endfield.electric_mining_rig_mk_ii.tooltip.behaviour1',
        Component.translatable('block.arknights_endfield.electric_mining_rig_mk_ii.tooltip.highlight2').color(0xD57E6F)
      ).color(STANDARD.txt))
    }
  })
})
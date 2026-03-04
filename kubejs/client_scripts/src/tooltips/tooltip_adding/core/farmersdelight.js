// requires: farmersdelight

ItemEvents.tooltip(event => {
  event.addAdvanced('farmersdelight:skillet', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('block.farmersdelight.skillet.tooltip.summary'))
      text.add(4, '')
      text.add(5, Component.translatable('block.farmersdelight.skillet.tooltip.condition1'))
      text.add(6, Component.translatable('block.farmersdelight.skillet.tooltip.behaviour1'))
      text.add(7, '')
      text.add(8, Component.translatable('block.farmersdelight.skillet.tooltip.condition2'))
      text.add(9, Component.translatable('block.farmersdelight.skillet.tooltip.behaviour2'))
      text.add(10, '')
      text.add(11, Component.translatable('block.farmersdelight.skillet.tooltip.condition3'))
      text.add(12, Component.translatable('block.farmersdelight.skillet.tooltip.behaviour3'))
    }
  })
})
// requires: beyonddimensions

ItemEvents.tooltip(event => {
  event.addAdvanced('beyonddimensions:shattered_space_time_crystallization', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.beyonddimensions.shattered_space_time_crystallization.tooltip.summary').color(BLUE.txt))
    }
  })
})
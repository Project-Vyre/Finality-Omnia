// requires: hostilenetworks

ItemEvents.tooltip(event => {
  event.addAdvanced('hostilenetworks:prediction_matrix', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.hostilenetworks.prediction_matrix.tooltip.summary',
        Component.translatable('item.hostilenetworks.prediction_matrix.tooltip.highlight1').color(GRAY.hlt)
      ).color(GRAY.txt))
    }
  })
})
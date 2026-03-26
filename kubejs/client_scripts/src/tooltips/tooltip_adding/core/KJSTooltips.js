// ignored: false

ItemEvents.tooltip(event => {
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
})
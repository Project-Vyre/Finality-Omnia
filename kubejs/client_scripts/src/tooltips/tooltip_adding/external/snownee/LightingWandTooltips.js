// requires: lightingwand
// ignored: false

ItemEvents.tooltip(event => {
  event.addAdvanced('lightingwand:wand', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.lightingwand.wand.tooltip.summary',
        Component.translatable('item.lightingwand.wand.tooltip.highlight1').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(4, '')
      text.add(5, Component.translatable('item.lightingwand.wand.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.lightingwand.wand.tooltip.behaviour1').color(STANDARD.txt))
      text.add(7, '')
      text.add(8, Component.translatable('item.lightingwand.wand.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.lightingwand.wand.tooltip.behaviour2',
        Component.translatable('item.lightingwand.wand.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
  })
})
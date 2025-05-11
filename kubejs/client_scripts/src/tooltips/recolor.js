ItemEvents.tooltip(event => {
  event.addAdvanced('kubejs:bloodfire_bars', (item, advanced, text) => {
    text.add(0, [Component.translatable('item.kubejs.bloodfire_bars').color(0xFF0000)])
    text.remove(1)
  })
})
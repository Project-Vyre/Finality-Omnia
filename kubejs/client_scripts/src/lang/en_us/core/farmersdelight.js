// requires: farmersdelight

ClientEvents.lang('en_us', event => {
  event.addAll('farmersdelight',
    createTooltip('farmersdelight:skillet')
      .addSummary('The skillet can be used to _cook_ food over an open flame or a stove. It can also be occasionally used as a weapon should the need ever arise.')
      .addBehaviour([
        'When held over an open flame or stove',
        'Cooks one food item at a time at a faster speed than a campfire.'
      ])
      .addBehaviour([
        'On holding right click while holding ingredients in off-hand',
        'Cooks ingredients over an open flame or a stove.'
      ])
      .addBehaviour([
        'On L-Click in main hand',
        'Can be utilized as a weapon.'
      ])
      .build()
  )
})

/*
event.addAdvanced('farmersdelight:skillet', (item, advanced, text) => {
  if (!event.isShift()) {
    text.add(1, Component.translatable(kjsHoldShift))
  } else {
    text.add(1, Component.translatable(kjsHoldShiftHeld))
    text.add(2, '')
    text.add(3, [
      Text.of('The skillet can be used to cook ').gold(),
      Text.of('over an open flame ').yellow(),
      Text.of('or a ').gold(),
      Text.of('stove').yellow(),
      Text.of('.').gold(),
    ])
    text.add(4, [
      Text.of('It can also be occasionally used as a ').gold(),
      Text.of('weapon ').red(),
      Text.of('should the need ever arise.').gold()
    ])
    text.add(5, [
      Text.of('The alternative use is not recommended for the sake of the ').gold(),
      Text.of('durability ').yellow(),
      Text.of('of your skillet.').gold()
    ])
  }
})
*/
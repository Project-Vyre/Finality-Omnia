// requires: ftbquests
// ignored: false

ItemEvents.tooltip(event => {
  event.addAdvanced('ftbquests:book', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.ftbquests.book.tooltip.summary',
        Component.translatable('item.ftbquests.book.tooltip.highlight1').color(STANDARD.hlt),
        Component.translatable('item.ftbquests.book.tooltip.highlight2').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(5, '')
      text.add(6, Component.translatable('item.ftbquests.book.tooltip.condition1').gray())
      text.add(7, Component.translatable('item.ftbquests.book.tooltip.behaviour1',
        Component.translatable('item.ftbquests.book.tooltip.highlight3').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(8, '')
      text.add(9, Component.translatable('item.ftbquests.book.tooltip.condition2').gray())
      text.add(10, Component.translatable('item.ftbquests.book.tooltip.behaviour2',
        Component.translatable('item.ftbquests.book.tooltip.highlight4').color(STANDARD.hlt),
        Component.translatable('item.ftbquests.book.tooltip.highlight5').color(STANDARD.hlt),
        Component.translatable('item.ftbquests.book.tooltip.highlight6').color(STANDARD.hlt),
        Component.translatable('item.ftbquests.book.tooltip.highlight7').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(11, '')
      text.add(12, Component.translatable('item.ftbquests.book.tooltip.condition3').gray())
      text.add(13, Component.translatable('item.ftbquests.book.tooltip.behaviour3',
        Component.translatable('item.ftbquests.book.tooltip.highlight8').color(STANDARD.hlt),
        Component.translatable('item.ftbquests.book.tooltip.highlight9').color(STANDARD.hlt),
        Component.translatable('item.ftbquests.book.tooltip.highlight10').color(STANDARD.hlt),
        Component.translatable('item.ftbquests.book.tooltip.highlight11').color(STANDARD.hlt)
      ).color(STANDARD.txt))
    }
    if (!event.isCtrl()) {
      text.add(2, Component.translatable(kjsHoldCtrl))
    } else {
      text.add(2, Component.translatable(kjsHoldCtrlHeld))
      text.add(3, '')
      text.add(4, Component.translatable('item.ftbquests.book.tooltip.control1').gray())
      text.add(5, Component.translatable('item.ftbquests.book.tooltip.action1',
        Component.translatable('item.ftbquests.book.tooltip.highlight12').color(STANDARD.hlt),
        Component.translatable('item.ftbquests.book.tooltip.highlight13').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(6, '')
      text.add(7, Component.translatable('item.ftbquests.book.tooltip.control2').gray())
      text.add(8, Component.translatable('item.ftbquests.book.tooltip.action2',
        Component.translatable('item.ftbquests.book.tooltip.highlight14').color(STANDARD.hlt),
        Component.translatable('item.ftbquests.book.tooltip.highlight15').color(STANDARD.hlt),
        Component.translatable('item.ftbquests.book.tooltip.highlight16').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(9, '')
      text.add(10, Component.translatable('item.ftbquests.book.tooltip.control3').gray())
      text.add(11, Component.translatable('item.ftbquests.book.tooltip.action3',
        Component.translatable('item.ftbquests.book.tooltip.highlight17').color(STANDARD.hlt),
        Component.translatable('item.ftbquests.book.tooltip.highlight18').color(STANDARD.hlt),
        Component.translatable('item.ftbquests.book.tooltip.highlight19').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      text.add(12, '')
      text.add(13, Component.translatable('item.ftbquests.book.tooltip.control4').gray())
      text.add(14, Component.translatable('item.ftbquests.book.tooltip.action4',
        Component.translatable('item.ftbquests.book.tooltip.highlight20').color(STANDARD.hlt),
        Component.translatable('item.ftbquests.book.tooltip.highlight21').color(STANDARD.hlt)
      ).color(STANDARD.txt))
      if (Platform.isLoaded('realcamera')) {
        text.add(15, '')
        text.add(16, Component.translatable('item.ftbquests.book.tooltip.control5').gray())
        text.add(17, Component.translatable('item.ftbquests.book.tooltip.action5',
          Component.translatable('item.ftbquests.book.tooltip.highlight22').color(STANDARD.hlt),
          Component.translatable('item.ftbquests.book.tooltip.highlight23').color(STANDARD.hlt)
        ).color(STANDARD.txt))
      }
    }
  })
})
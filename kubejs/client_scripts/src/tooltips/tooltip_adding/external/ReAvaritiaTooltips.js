// requires: avaritia

ItemEvents.tooltip(event => {
  event.addAdvanced('avaritia:infinity_bow', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.avaritia.infinity_bow.tooltip.summary').darkGray())
      text.add(4, '')
      text.add(5, Component.translatable('item.avaritia.infinity_bow.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.avaritia.infinity_bow.tooltip.behaviour1',
        Component.translatable('item.avaritia.infinity_bow.tooltip.highlight1').aqua().bold()
      ).darkGray())
    }
  })
  event.addAdvanced('avaritia:infinity_umbrella', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('item.avaritia.infinity_umbrella.tooltip.summary').darkGray())
      text.add(4, '')
      text.add(5, Component.translatable('item.avaritia.infinity_umbrella.tooltip.condition1').gray())
      text.add(6, Component.translatable('item.avaritia.infinity_umbrella.tooltip.behaviour1',
        Component.translatable('item.avaritia.infinity_umbrella.tooltip.highlight1').aqua().bold()
      ).darkGray())
      text.add(7, '')
      text.add(8, Component.translatable('item.avaritia.infinity_umbrella.tooltip.condition2').gray())
      text.add(9, Component.translatable('item.avaritia.infinity_umbrella.tooltip.behaviour2',
        Component.translatable('item.avaritia.infinity_umbrella.tooltip.highlight2').yellow().bold()
      ).darkGray())
      text.add(10, '')
      text.add(11, Component.translatable('item.avaritia.infinity_umbrella.tooltip.condition3').gray())
      text.add(12, Component.translatable('item.avaritia.infinity_umbrella.tooltip.behaviour3',
        Component.translatable('item.avaritia.infinity_umbrella.tooltip.highlight3').blue().bold()
      ).darkGray())
      text.add(13, '')
      text.add(14, Component.translatable('item.avaritia.infinity_umbrella.tooltip.condition4').gray())
      text.add(15, Component.translatable('item.avaritia.infinity_umbrella.tooltip.behaviour4',
        Component.translatable('item.avaritia.infinity_umbrella.tooltip.highlight4').gray().bold()
      ).darkGray())
    }
  })
})
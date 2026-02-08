// requries: create

ItemEvents.tooltip(event => {
  event.add('create:chromatic_compound', '<rainb>Either throw into the void or into a beacon or an intense light source like glowstone.</rainb>')
  event.add('create:refined_radiance', Text.white('Used for decoration purposes.'))
  event.add('create:shadow_steel', Text.darkGray('Used for decoration purposes.'))
  event.add('create:refined_radiance_casing', Text.white('Used for decoration purposes.'))
  event.add('create:shadow_steel_casing', Text.darkGray('Used for decoration purposes.'))
  //event.addAdvanced('create:hose_pulley', (item, advanced, text) => {
  //  if (!event.isShift()) {
  //    text.add(1, Component.translatable(kjsHoldShift))
  //  } else {
  //    text.add(1, Component.translatable(kjsHoldShiftHeld))
  //    text.add(2, '')
  //    text.add(3, Component.translatable('kubejs.minecraft.beacon.tooltip1').green().bold())
  //    text.add(4, '')
  //    text.add(5, Component.translatable('kubejs.minecraft.beacon.tooltip2').red())
  //    text.add(6, '')
  //    text.add(7, Component.translatable('kubejs.minecraft.beacon.tooltip3'))
  //  }
  //})
})
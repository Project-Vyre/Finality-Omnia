// requires: universalbonemeal

/**
 * 
 * @param {Internal.ItemTooltipEventJS} event 
 */
function kjsBoneMealTooltip(event) {
  event.addAdvanced('minecraft:bone_meal', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable('kubejs.bone_meal.tooltip.summary').gray())
      text.add(4, '')
      text.add(5, Component.translatable('kubejs.bone_meal.tooltip.condition1').gray())
      text.add(6, Component.translatable('kubejs.bone_meal.tooltip.behaviour1').darkGreen())
      text.add(7, Component.translatable('kubejs.bone_meal.tooltip.condition2').gray())
      text.add(8, Component.translatable('kubejs.bone_meal.tooltip.behaviour2').darkGreen())
      text.add(9, Component.translatable('kubejs.bone_meal.tooltip.condition3').gray())
      text.add(10, Component.translatable('kubejs.bone_meal.tooltip.behaviour3').darkGreen())
    }
  })
}
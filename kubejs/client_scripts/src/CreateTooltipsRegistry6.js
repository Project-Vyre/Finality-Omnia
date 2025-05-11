// requires: create
// ignored: true

const $ItemDescription = Java.loadClass('com.simibubi.create.foundation.item.ItemDescription$Modifier')
const $TooltipModifier = Java.loadClass('com.simibubi.create.foundation.item.TooltipModifier')
// const $Palette = Java.loadClass('com.simibubi.create.foundation.item.TooltipHelper$Palette') No longer exists

function STANDARD_PALETTE (itemID) {
  $TooltipModifier.REGISTRY.register(itemID, new $ItemDescription(itemID, $Palette.STANDARD_CREATE))
}

ClientEvents.lang('en_us', event => {
  STANDARD_PALETTE('minecraft:bone_meal')
  event.addAll('universalbonemeal', {
    "item.minecraft.bone_meal.tooltip": "BONE MEAL",
    "item.minecraft.bone_meal.tooltip.summary": "Used for _accelerating_ the _growth_ of plants. However, it can now _universally_ bone meal _a lot more things_ compared to before!",
    "item.minecraft.bone_meal.tooltip.condition1": "On right click on plants or crops:",
    "item.minecraft.bone_meal.tooltip.behaviour1": "_Accelerates_ growth, self explanatory.",
    "item.minecraft.bone_meal.tooltip.condition2": "On right click on grass blocks:",
    "item.minecraft.bone_meal.tooltip.behaviour2": "Generates flowers and grass.",
    "item.minecraft.bone_meal.tooltip.condition3": "On right click on Sea Pickles on living coral blocks:",
    "item.minecraft.bone_meal.tooltip.behaviour3": "_Grows additional_ Sea Pickles."
  })
})
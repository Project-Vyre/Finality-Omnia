// requires: salt
// ignored: false

/**
 * 
 * @param {Internal.ItemTooltipEventJS} event 
 */
function kjsSaltTooltip(event) {
  event.addAdvanced('salt:salt', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
      text.add(2, '')
      text.add(3, Component.translatable(''))
      text.add(4, [
        Text.of('To use simply ').gold(),
        Text.of('combine ').green(),
        Text.of('with *any food item in a crafting grid.').gold()
      ])
      text.add(5, [
        Text.of('*Please note that food items need the ').gold(),
        Text.of('#salt:can_be_salted ').green(),
        Text.of('tag. ').gold()
      ])
    }
  })
}
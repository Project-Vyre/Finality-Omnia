// requires: kubejs_create
// ignored: true

ServerEvents.recipes(event => {
  /**
   * @summary Heated 1x ingot melting
   * @param {Internal.OutputFluid} outputFluid 
   * @param {Internal.InputItem} inputIngot 
   */
  let sheetMeltingHeated = (outputFluid, inputIngot) => {
    event.recipes.create.mixing(
      Fluid.of(`kubejs:molten_${outputFluid}`, 90),
      inputIngot
    ).heated().id(`kubejs:basin/${outputFluid}_sheet_melting`)
  }
  let sheet_melting_eligible = {
    copper: 'create:copper_sheet',
    iron: 'create:iron_sheet',
    gold: 'create:golden_sheet',
    zinc: 'kubejs:zinc_sheet',
    brass: 'create:brass_sheet'
  }
  for (let [type, sheet] of Object.entries(sheet_melting_eligible)) {
    sheetMeltingHeated(type, sheet)
  }
  event.recipes.create.mixing(
    Fluid.of('kubejs:molten_netherite', 90),
    'kubejs:netherite_sheet'
  ).superheated().id('kubejs:mixing/netherite_sheet_melting')
})
// requires: ae2
// requires: kubejs_create

let presses = [
  'engineering_processor',
  'calculation_processor',
  'logic_processor',
  'silicon'
]

ServerEvents.recipes(event => {
  for (let i = 0; i < presses.length; i++) {
    let element = presses[i];
    event.recipes.create.deploying('2x ae2:' + element + '_press', [
      'ae2:' + element + '_press',
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/ae2/' + element + '_duplication')
    event.recipes.create.deploying('4x ae2:' + element + '_press', [
      'ae2:' + element + '_press',
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/ae2/' + element + '_quad_duplication')
    event.recipes.create.deploying('64x ae2:' + element + '_press', [
      'ae2:' + element + '_press',
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/ae2/' + element + '_stack_duplication')
  }
})
// requires: dimdoors
// requires: kubejs_create

let dim_dupe = [
  'world_thread',
  'solid_static',
  'infrangible_fiber'
]

ServerEvents.recipes(event => {
  for (let i = 0; i < dim_dupe.length; i++) {
    let element = dim_dupe[i];
    event.recipes.create.deploying('2x dimdoors:' + element, [
      'dimdoors:' + element,
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + element + '_duplication')
  }
})
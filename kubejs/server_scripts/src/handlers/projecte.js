// requires: projecte
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove([
    { id: 'projecte:watch_of_flowing_time' }
  ])
  event.recipes.kubejs.shaped('projecte:watch_of_flowing_time', [
    'DGD',
    'ECE',
    'DGD'
  ], {
    C: 'minecraft:clock',
    D: 'projecte:dark_matter',
    G: 'minecraft:glowstone',
    E: 'kubejs:end_crystal_singularity'
  }).id('kubejs:projecte/time_controller')
})
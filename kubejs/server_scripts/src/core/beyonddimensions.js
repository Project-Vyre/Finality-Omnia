// requires: beyonddimensions
// requires: kubejs_create
// requires: sophisticatedstorage

ServerEvents.recipes(event => {
  event.remove([
    { id: 'beyonddimensions:unstable_space_time_fragment' },
    { id: 'beyonddimensions:net_creater' }
  ])
  event.recipes.create.mechanical_crafting('beyonddimensions:unstable_space_time_fragment', [
    'DTD',
    'TST',
    'DTD'
  ], {
    D: 'kubejs:diamond_singularity',
    T: 'kubejs:tnt_singularity',
    S: 'kubejs:chromatic_concrete_singularity'
  }).id('kubejs:beyonddimensions/mechanical_crafting/unstable_space_time_fragment')
  event.recipes.create.mechanical_crafting('beyonddimensions:net_creater', [
    '  B  ',
    ' HCH ',
    'BCFCB',
    ' HCH ',
    '  B  '
  ], {
    C: 'kubejs:command_block',
    F: 'beyonddimensions:stable_space_time_fragment',
    H: 'sophisticatedstorage:netherite_chest',
    B: 'sophisticatedstorage:netherite_barrel'
  }).id('kubejs:beyonddimensions/mechanical_crafting/net_creater')
})
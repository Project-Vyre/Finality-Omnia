// requires: hostilenetworks
// requires: ae2
// requires: create

ServerEvents.recipes(event => {
  event.remove([
    { id: 'hostilenetworks:sim_chamber' },
    { id: 'hostilenetworks:loot_fabricator' },
    { id: 'hostilenetworks:prediction_matrix' },
    { id: 'hostilenetworks:deep_learner' }
  ])
  event.recipes.create.mechanical_crafting('hostilenetworks:sim_chamber', [
    'CGGGC',
    'CEAEC',
    'CLFLC',
    'COUOC',
    'CCCCC'
  ], {
    C: 'create:shadow_steel_casing',
    G: '#forge:glass_panes',
    E: 'kubejs:ender_pearl_singularity',
    L: 'kubejs:lapis_singularity',
    A: 'ae2:annihilation_core',
    F: 'ae2:formation_core',
    U: 'ae2:engineering_processor',
    O: 'ae2:logic_processor'
  }).id('kubejs:hostilenetworks/mechanical_crafting/sim_chamber')
  event.recipes.create.mechanical_crafting('hostilenetworks:loot_fabricator', [
    'CNENC',
    'CDLDC',
    'CMFMC',
    'COPOC',
    'CCCCC'
  ], {
    C: 'create:shadow_steel_casing',
    N: 'kubejs:netherite_sheet',
    E: 'minecraft:end_crystal',
    F: 'ae2:formation_core',
    L: 'ae2:molecular_assembler',
    M: 'kubejs:precision_mechanism_singularity',
    D: 'kubejs:diamond_singularity',
    O: 'ae2:logic_processor',
    P: 'ae2:calculation_processor'
  }).id('kubejs:hostilenetworks/mechanical_crafting/loot_fabricator')
  event.recipes.minecraft.crafting_shaped('hostilenetworks:deep_learner', [
    'SRS',
    'RGR',
    'SCS'
  ], {
    S: 'create:sturdy_sheet',
    R: 'minecraft:repeater',
    G: 'kubejs:framed_glass_singularity',
    C: 'ae2:calculation_processor'
  }).id('kubejs:hostilenetworks/deep_learner')
  event.recipes.minecraft.crafting_shaped('64x hostilenetworks:prediction_matrix', [
    ' G ',
    'GCG',
    ' G '
  ], {
    G: 'kubejs:framed_glass_singularity',
    C: 'kubejs:genesis_mechanism'
  }).id('kubejs:hostilenetworks/prediction_matrix')
})
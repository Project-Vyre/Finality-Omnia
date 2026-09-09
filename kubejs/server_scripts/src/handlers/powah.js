// requires: powah
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove([
    { id: 'powah:crafting/dielectric_casing' },
    { id: 'powah:crafting/capacitor_basic' },
    { id: 'powah:crafting/energy_cell_starter' },
    { id: 'powah:energizing/nitro_crystal' }
  ])
  event.recipes.create.mixing('24x powah:dielectric_paste', [
    '3x minecraft:coal',
    '2x minecraft:clay_ball',
    Fluid.of('minecraft:lava')
  ]).id('kubejs:powah/mixing/dielectric_paste_with_coal')
  event.recipes.create.mixing('24x powah:dielectric_paste', [
    '3x minecraft:charcoal',
    '2x minecraft:clay_ball',
    Fluid.of('minecraft:lava')
  ]).id('kubejs:powah/mixing/dielectric_paste_with_charcoal')
  event.shaped('powah:dielectric_casing', [
    'SHS',
    'V V',
    'SHS'
  ], {
    S: 'create:shadow_steel',
    H: 'powah:dielectric_rod_horizontal',
    V: 'powah:dielectric_rod'
  }).id('kubejs:powah/crafting/dielectric_casing')
  event.shaped('4x powah:capacitor_basic', [
    ' SP',
    'SRS',
    'PS '
  ], {
    S: 'create:shadow_steel',
    P: 'powah:dielectric_paste',
    R: 'minecraft:redstone_block'
  }).id('kubejs:powah/crafting/capacitor_basic')
  event.shaped('powah:energy_cell_starter', [
    'SCS',
    'CAC',
    'SCS'
  ], {
    S: 'create:shadow_steel',
    C: 'powah:capacitor_basic_tiny',
    A: 'powah:dielectric_casing'
  }).id('kubejs:powah/crafting/energy_cell_starter')
  if (Platform.isLoaded('arknights_endfield')) {
    event.shapeless('powah:battery_basic', [
      'arknights_endfield:lc_battery',
      'powah:dielectric_paste',
      'powah:dielectric_paste',
      'powah:dielectric_paste',
      'powah:dielectric_paste'
    ]).id('kubejs:endfield/powah_battery_basic')
    event.shapeless('powah:battery_hardened', [
      'arknights_endfield:sc_battery',
      'powah:dielectric_paste',
      'powah:dielectric_paste',
      'powah:dielectric_paste',
      'powah:dielectric_paste'
    ]).id('kubejs:endfield/powah_battery_hardened')
    event.shapeless('powah:battery_blazing', [
      'arknights_endfield:hc_battery',
      'powah:dielectric_paste',
      'powah:dielectric_paste',
      'powah:dielectric_paste',
      'powah:dielectric_paste'
    ]).id('kubejs:endfield/powah_battery_blazing')
    event.custom({
      "type": "arknights_endfield:ore_rig",
      "input": {
        "item": "powah:uraninite_block"
      },
      "output": {
        "count": 1,
        "item": "powah:uraninite_raw"
      },
      "tier": 3
    }).id('kubejs:endfield/powah/rig/raw_uraninite')
  }
  // NITRO
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
      { "item": "kubejs:rose_quartz_singularity" },
      { "item": "powah:blazing_crystal_block" }
    ],
    "energy": 20000000,
    "result": {
      "item": "powah:crystal_nitro",
      "count": 64
    }
  }).id('kubejs:powah/energizing/nitro_crystal')
})
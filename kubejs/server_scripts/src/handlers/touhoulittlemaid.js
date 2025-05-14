// requires: touhou_little_maid
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting('touhou_little_maid:substitute_jizo', [
    '  AAAA   ',
    ' AGGGGA  ',
    ' AGGGAAAA',
    ' AAAAAYYA',
    ' ARRRRYYA',
    'ARRRRAYYA',
    'ARRAAAYY ',
    ' AAAAAY  ',
    '  AAAA   '
  ], {
    A: 'create:andesite_alloy_block',
    G: 'kubejs:color_green',
    R: 'kubejs:color_red',
    Y: 'kubejs:color_yellow'
  }).id('kubejs:touhou_little_maid/mechanical_crafting/substitute_jizo')
})
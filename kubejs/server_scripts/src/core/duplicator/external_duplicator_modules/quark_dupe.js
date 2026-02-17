// requires: quark
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove({ id: 'quark:tools/crafting/rune_duplication' })
  event.recipes.create.deploying('2x quark:smithing_template_rune', [
    'quark:smithing_template_rune',
    'kubejs:duplicator'
  ]).keepHeldItem().id('kubejs:deploying/smithing_template_rune_duplication')
})
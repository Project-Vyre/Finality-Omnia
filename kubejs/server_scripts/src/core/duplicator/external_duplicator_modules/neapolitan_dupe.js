/**
 * @file Server handler for Neapolitan from TeamAbnormals.
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: neapolitan
// requires: kubejs_create

let neapolitan_sherds = [
  'reflection',
  'scream',
  'snack',
  'spider'
]

ServerEvents.recipes(event => {
  event.remove({ id: 'neapolitan:banana/primal_armor_trim_smithing_template' })
  event.recipes.create.deploying('2x neapolitan:primal_armor_trim_smithing_template', [
    'neapolitan:primal_armor_trim_smithing_template',
    'kubejs:duplicator'
  ]).keepHeldItem().id('finality:neapolitan/deploying/primal_armor_trim_smithing_template')
  for (let i = 0; i < neapolitan_sherds.length; i++) {
    let element = neapolitan_sherds[i];
    event.recipes.create.deploying([
      '2x neapolitan:' + element + '_pottery_sherd'
    ], [
      'neapolitan:' + element + '_pottery_sherd',
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:neapolitan/deploying/' + element + '_pottery_sherd_duplication')
  }
})
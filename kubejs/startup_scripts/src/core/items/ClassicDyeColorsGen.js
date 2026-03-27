/**
 * @file Generation of classic color palette dyes.
 * @version 1201-OMNIA
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

StartupEvents.registry('item', event => {
  for (let i = 0; i < CLASSIC_COLORS.length; i++) {
    let c = CLASSIC_COLORS[i];
    event.create('minecraft:classic_' + c + '_dye')
      .texture('minecraft:item/classic_' + c + '_dye')
  }
})
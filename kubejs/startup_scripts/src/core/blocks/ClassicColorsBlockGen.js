/**
 * @file Generation of classic color palette blocks.
 * @version 1201-OMNIA
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

StartupEvents.registry('block', event => {
  for (let i = 0; i < CLASSIC_COLORS.length; i++) {
    let c = CLASSIC_COLORS[i];
    event.create('minecraft:classic_' + c + '_wool')
      .textureAll('minecraft:block/classic_' + c + '_wool')
      .soundType('wool')
      .tagBlock('minecraft:wool')
      .tagBlock('minecraft:dampens_vibrations')
      .tagBlock('minecraft:occludes_vibration_signals')
      .tagBlock('forge:mineable/shears')
      .tagItem('minecraft:wool')
      .tagItem('minecraft:dampens_vibrations')
    event.create('minecraft:classic_' + c + '_carpet', 'carpet')
      .textureAll('minecraft:block/classic_' + c + '_wool')
      .soundType('wool')
      // Carpets are already tagged.
  }
})
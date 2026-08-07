/**
 * @file Tooltip lang generation specific to Re:Avaritia
 * @version 1201-OMNIA
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: avaritia
// requires: textanimator

ClientEvents.lang('en_us', event => {
  event.addAll('kubejs',
    createTooltip('avaritia:infinity_umbrella')
      .addSummary('<glitch>Unfortunately does not control the weather, but throws projectiles that are representative of the weather. Does nothing in Base Mode.</glitch>')
      .addBehaviour([
        'On Sneak + R-Click',
        '<glitch>Changes the</glitch> %s <glitch>of the umbrella.</glitch>'
      ])
      .addBehaviour([
        'On R-Click - Clear Mode',
        '<glitch>On</glitch> %s <glitch>it summons Lava on projectile contact.</glitch>'
      ])
      .addBehaviour([
        'On R-Click - Rain Mode',
        '<glitch>On</glitch> %s <glitch>it summons Water on projectile contact.</glitch>'
      ])
      .addBehaviour([
        'On R-Click - Storm Mode',
        '<glitch>On</glitch> %s <glitch>it summons Lightning on projectile contact.</glitch>'
      ])
      .addHighlight([
        '<glitch>mode</glitch>',
        '<glitch>Clear Mode</glitch>',
        '<glitch>Rain Mode</glitch>',
        '<glitch>Storm Mode</glitch>'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('avaritia:infinity_bow')
      .addSummary('<glitch>For when you want to delete something from existence with an arrow.</glitch>')
      .addBehaviour([
        'On Sneak + R-Click',
        '<glitch>Changes the</glitch> %s <glitch>of the bow.</glitch>'
      ])
      .addHighlight(['<glitch>mode</glitch>'])
      .build()
  )
})
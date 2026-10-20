/**
 * @file Checks for player contact with certain blocks.
 * @version 1211-O
 * @author CelestialAbyss <https:github.com/CelestialAbyss> Modpack lead
 * @author ChiefArug <https://github.com/ChiefArug>
 */

// ignored: true

PlayerEvents.tick(event => {
    if (event.entity.getBlock().down.id == 'kubejs:bloodfire_bars') {
        event.player.igniteForSeconds(20)
    }
})
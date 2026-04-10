/**
 * @file Script for handling Chronokinesis interactions. Work in progress.
 */

/*
TO-DO List
- Crop acceleration to instant finished growth AKA 1 click bone meal with infinite uses.
- Give slowness / speed to entities within a certain radius after casting click combinations.
- 1.21.1 feature: Change tick rate (increase/decrease)
- 
*/
ItemEvents.firstRightClicked('kubejs:chronokinesis', event => {
  const { item, level, player, entity } = event
  let chronokinesis_range_slow = AABB.of(
    player.position().x() - 20,
    player.position().y() - 5,
    player.position().z() - 20,
    player.position().x() + 20,
    player.position().y() + 10,
    player.position().z() + 20
  )
  if (player.shiftKeyDown) {
    return
  } else {
    level.getEntitiesWithin(chronokinesis_range_slow).forEach(entity => {
      switch (entity.getType()) {
        case null: return
        case 'minecraft:item': return
        case 'minecraft:lightning_bolt': return
        case 'minecraft:end_crystal': return
        case 'minecraft:area_effect_cloud': return
        case 'minecraft:falling_block': return
        case 'minecraft:evoker_fangs': return
        case 'minecraft:item_frame': return
        case 'minecraft:glow_item_frame': return
        default:
          if (!entity.isPlayer()) {
            if (entity.potionEffects == null) { return }
            entity.potionEffects.add('minecraft:slowness', 200, 255, false, false)
          }
          break;
      }
    })
  }
})
ItemEvents.firstLeftClicked('kubejs:chronokinesis', event => {
  const { item, level, player, entity } = event
  let chronokinesis_range_speed = AABB.of(
    player.position().x() - 20,
    player.position().y() - 5,
    player.position().z() - 20,
    player.position().x() + 20,
    player.position().y() + 10,
    player.position().z() + 20
  )
  if (player.shiftKeyDown) {
    Utils.server.runCommandSilent('time add 10s')
  } else {
    level.getEntitiesWithin(chronokinesis_range_speed).forEach(entity => {
      switch (entity.getType()) {
        case null: return
        case 'minecraft:item': return
        case 'minecraft:lightning_bolt': return
        case 'minecraft:end_crystal': return
        case 'minecraft:area_effect_cloud': return
        case 'minecraft:falling_block': return
        case 'minecraft:evoker_fangs': return
        case 'minecraft:item_frame': return
        case 'minecraft:glow_item_frame': return
        default:
          if (!entity.isPlayer()) {
            if (entity.potionEffects == null) { return }
            entity.potionEffects.add('minecraft:speed', 200, 255, false, false)
          }
          if (entity.isPlayer()) {
            if (entity.potionEffects == null) { return }
            entity.potionEffects.add('minecraft:speed', 200, 255, false, false)
          }
          break;
      }
    })
  }
})
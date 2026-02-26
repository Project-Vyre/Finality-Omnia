// requires: cardiac
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.recipes.minecraft.crafting_shapeless('cardiac:life_bottle', [
    Item.of('minecraft:potion', '{Potion:"minecraft:healing"}').weakNBT(),
    'create:experience_nugget'
  ]).id('kubejs:cardiac/life_bottle_renew')
})
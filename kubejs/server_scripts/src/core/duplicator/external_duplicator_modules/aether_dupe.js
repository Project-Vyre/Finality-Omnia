// requires: aether
// requires: kubejs_create

let dungeon_loot_duplication = {
  valkyrie_lance: 'aether:valkyrie_lance',
  valkyrie_shovel: 'aether:valkyrie_shovel',
  valkyrie_pickaxe: 'aether:valkyrie_pickaxe',
  valkyrie_axe: 'aether:valkyrie_axe',
  valkyrie_hoe: 'aether:valkyrie_hoe',
  candy_cane_sword: 'aether:candy_cane_sword',
  holy_sword: 'aether:holy_sword',
  vampire_blade: 'aether:vampire_blade',
  lightning_sword: 'aether:lightning_sword',
  lightning_knife: 'aether:lightning_knife',
  flaming_sword: 'aether:flaming_sword',
  phoenix_bow: 'aether:phoenix_bow',
  pig_slayer: 'aether:pig_slayer',
  hammer_of_kingbdogz: 'aether:hammer_of_kingbdogz',
  cloud_staff: 'aether:cloud_staff'
}

ServerEvents.recipes(event => {
  for (let [recipeId, itemId] of Object.entries(dungeon_loot_duplication)) {
    event.recipes.create.deploying(Item.of(itemId, 2), [
      itemId,
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/aether/' + recipeId + '_duplication')
  }
})
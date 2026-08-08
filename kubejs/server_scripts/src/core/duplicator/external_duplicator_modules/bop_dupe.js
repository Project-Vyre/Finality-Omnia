// requires: biomesoplenty
// requires: kubejs_create

let bop_duplication = {
  black_sand: 'biomesoplenty:black_sand',
  orange_sand: 'biomesoplenty:orange_sand',
  white_sand: 'biomesoplenty:white_sand',
  brimstone: 'biomesoplenty:brimstone',
  enderphyte: 'biomesoplenty:enderphyte',
  anomaly: 'biomesoplenty:anomaly',
  origin_grass_block: 'biomesoplenty:origin_grass_block'
}

ServerEvents.recipes(event => {
  for (let [recipeId, itemId] of Object.entries(bop_duplication)) {
    event.recipes.create.deploying(Item.of(itemId, 2), [
      itemId,
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:biomesoplenty/deploying/' + recipeId + '_duplication')
    event.recipes.create.deploying(Item.of(itemId, 4), [
      itemId,
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:biomesoplenty/deploying/' + recipeId + '_quad_duplication')
    event.recipes.create.deploying(Item.of(itemId, 64), [
      itemId,
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:biomesoplenty/deploying/' + recipeId + '_stack_duplication')
  }
})
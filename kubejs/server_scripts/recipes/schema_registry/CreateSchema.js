/**
 * @file Recipe schema registry for Create.
 * @version 1.21.1-O
 * @see https://discord.com/channels/303440391124942858/1352936321307639920/1353904976161804390
 */

// ignored: true
// requires: create

ServerEvents.recipeSchemaRegistry(event => {
    event.register('create:crushing', {
      
    })
    event.register('create:cutting')
    event.register('create:deploying')
    event.register('create:emptying')
    event.register('create:filling')
    event.register('create:haunting')
    event.register('create:item_application')
    event.register('create:mechanical_crafting')
    event.register('create:milling')
    event.register('create:mixing')
    event.register('create:pressing')
    event.register('create:sandpaper_polishing')
    event.register('create:sequenced_assembly')
    event.register('create:splashing')
})

/*
const $RecipeSchema = Java.loadClass("dev.latvian.mods.kubejs.recipe.schema.RecipeSchema")
const $StringComponent = Java.loadClass("dev.latvian.mods.kubejs.recipe.component.StringComponent")
// @type {$NumberComponent}
const $NumberComponent = Java.loadClass("dev.latvian.mods.kubejs.recipe.component.NumberComponent")
const $BuilderFunction = Java.loadClass("dev.latvian.mods.kubejs.recipe.component.RecipeComponent").builder
const $IngredientComponent = Java.loadClass("dev.latvian.mods.kubejs.recipe.component.IngredientComponent")

ServerEvents.recipeSchemaRegistry((event) => {
  let matterValueComponent = $BuilderFunction(
    ["type", $StringComponent.ID, false, false],
    ["amount", $NumberComponent.DOUBLE, false, false]
  )
  let matterValueKey = matterValueComponent.asList().outputKey("matter")
  
  let ingredientKey = $IngredientComponent.INGREDIENT.inputKey("input")

  let schema = new $RecipeSchema["(dev.latvian.mods.kubejs.recipe.RecipeKey[])"](ingredientKey, matterValueKey)
  event.register("replication:matter_value", schema)
})
  new $RecipeSchema['']()
  */

/**
 * Java code for reference:
 * Root
 * java
 * RecordCodecBuilder.mapCodec(in -> in.group(
     Ingredient.CODEC.fieldOf("input").forGetter(...),
     MatterValue.CODEC.listOf().fieldOf("matter").forGetter(...)
   );
 * 
 * MatterValue Record 
 * java
 * RecordCodecBuilder.create(instance ->
     instance.group(
       ResourceLocation.CODEC.fieldOf("type").forGetter(...),
       Codec.DOUBLE.fieldOf("amount").forGetter(...)
   );
 * 
 */
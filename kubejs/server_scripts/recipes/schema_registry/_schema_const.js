/**
 * @file Constants for use in recipe schema registration only.
 * @version 1.21.1-O
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// priority: 800
// ignored: true

const $JsonObject = Java.loadClass('com.google.gson.JsonObject')
const $RecipeSchema = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.RecipeSchema')
const $StringComponent = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.StringComponent')
const $NumberComponent = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.NumberComponent')
const $BuilderFunction = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.RecipeComponent').builder()
const $IngredientComponent = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.Ingredientcomponent')
const $RecipeComponentBuilder = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.RecipeComponentBuilder')

/*
const $MapRecipeComponent = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.MapRecipeComponent')
const $RecipeComponentBuilderMap = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.RecipeComponentBuilderMap')
*/
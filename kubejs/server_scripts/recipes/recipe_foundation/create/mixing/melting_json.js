/**
 * @file Sheet to molten conversion.
 * @version 1211-OMNIA
 */

// requires: create
// ignored: true

ServerEvents.recipes(event => {
  event.custom({
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "create:copper_sheet"
      }
    ],
    "results": [
      {
        "amount": 90,
        "id": "kubejs:molten_copper"
      }
    ]
  }).id('kubejs:mixing/copper_sheet_melting')
  event.custom({
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "create:iron_sheet"
      }
    ],
    "results": [
      {
        "amount": 90,
        "id": "kubejs:molten_iron"
      }
    ]
  }).id('kubejs:mixing/iron_sheet_melting')
  event.custom({
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "create:golden_sheet"
      }
    ],
    "results": [
      {
        "amount": 90,
        "id": "kubejs:molten_gold"
      }
    ]
  }).id('kubejs:mixing/golden_sheet_melting')
  event.custom({
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "kubejs:zinc_sheet"
      }
    ],
    "results": [
      {
        "amount": 90,
        "id": "kubejs:molten_zinc"
      }
    ]
  }).id('kubejs:mixing/zinc_sheet_melting')
  event.custom({
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "create:brass_sheet"
      }
    ],
    "results": [
      {
        "amount": 90,
        "id": "kubejs:molten_brass"
      }
    ]
  }).id('kubejs:mixing/brass_sheet_melting')
  event.custom({
    "type": "create:mixing",
    "heat_requirement": "superheated",
    "ingredients": [
      {
        "item": "kubejs:netherite_sheet"
      }
    ],
    "results": [
      {
        "amount": 90,
        "id": "kubejs:molten_netherite"
      }
    ]
  }).id('kubejs:mixing/netherite_sheet_melting')
})
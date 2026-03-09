// priority: 100
// ignored: false

/**
 * @file Responsible for generating tooltip lang.
 * @version 1.20.1-OMNIA
 * @author pietro-lopes <https://github.com/pietro-lopes> Author of the createTooltip prototype class
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/**
 * 
 * @param {string} itemId 
 * @returns 
 */

function createTooltip(/** @type {Special.Item} */ itemId) {
  return new CreateTooltipBuilder(itemId)
}

function CreateTooltipBuilder(itemId) {
  this.itemId = Item.of(itemId).idLocation
  this.descriptionId = Item.of(itemId).descriptionId
  this.summary = ""
  this.conditions = []
  this.behaviours = []
  this.controls = []
  this.actions = []
  this.highlights = []
}
CreateTooltipBuilder.prototype = {
  addSummary: function (/** @type {string} */ summary) {
    this.summary = summary
    return this
  },
  addBehaviour: function (/** @type {string[]} */ conditionAndBehaviour
  ) {
    this.conditions.push(conditionAndBehaviour[0])
    this.behaviours.push(conditionAndBehaviour[1])
    return this
  },
  addAction: function (/** @type {string[]} */ controlsAndActions) {
    this.controls.push(controlsAndActions[0])
    this.actions.push(controlsAndActions[1])
    return this
  },
  addHighlight: function (/** @type {string} */ highlighted) {
    this.highlights = (highlighted)
    return this
  },
  build: function () {
    let map = Utils.newMap()
    if (this.summary != "") {
      map.putIfAbsent(this.descriptionId + ".tooltip.summary", this.summary)
    }
    for (let index = 0; index < this.conditions.length; index++) {
      map.putIfAbsent(this.descriptionId + ".tooltip.condition" + (index + 1), this.conditions[index])
    }
    for (let index = 0; index < this.behaviours.length; index++) {
      map.putIfAbsent(this.descriptionId + ".tooltip.behaviour" + (index + 1), this.behaviours[index])
    }
    for (let index = 0; index < this.controls.length; index++) {
      map.putIfAbsent(this.descriptionId + ".tooltip.control" + (index + 1), this.controls[index])
    }
    for (let index = 0; index < this.actions.length; index++) {
      map.putIfAbsent(this.descriptionId + ".tooltip.action" + (index + 1), this.actions[index])
    }
    for (let index = 0; index < this.highlights.length; index++) {
      map.putIfAbsent(this.descriptionId + ".tooltip.highlight" + (index + 1), this.highlights[index])
    }
    return map
  }
}
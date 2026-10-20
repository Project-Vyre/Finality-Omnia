/**
 * Core fluid registration.
 */

// ignored: false

StartupEvents.registry("fluid", (event) => {
  /**
   *
   * @param {*} event
   * @param {string} fluidId
   * @param {string} displayName
   * @param {HEX} color
   */
  let MOLTEN_METAL = (fluidId, displayName, color) => {
    event
      .create("kubejs:" + fluidId, "thick")
      .displayName(displayName)
      .tint(color)
      .tag("minecraft:lava")
  }
  MOLTEN_METAL("molten_iron", "§cMolten Iron", 0xff8423)
  MOLTEN_METAL("molten_gold", "§eMolten Gold", 0xfdf55f)
  MOLTEN_METAL("molten_copper", "§6Molten Copper", 0xfbaa68)
  MOLTEN_METAL("molten_zinc", "§3Molten Zinc", 0xd3e8d6)
  MOLTEN_METAL("molten_brass", "§eMolten Brass", 0xfdd686)
  MOLTEN_METAL("molten_netherite", "§8Molten Netherite", 0x7e6059)
  event
    .create("kubejs:dragon_breath", "thick")
    .tint(0xb600ff)
    .noBlock()
    .noBucket()
    .displayName("Dragon's Breath")
  // work in progress .stillTexture('finality:block/still_entropy').flowingTexture('finality:block/flowing_entropy')
  event
    .create("kubejs:condensed_universal_entropy", "thick")
    .tag("minecraft:water")
    .tint(0x7800ff)
  // .luminosity(15)
  event
    .create("kubejs:condensed_universal_order", "thick")
    .tag("minecraft:water")
    .tint(0x77d8ff)
  // .luminosity(15)
  let shimmer = event
    .create("kubejs:shimmer")
    .flowingTexture("kubejs:block/fluids/shimmer_flow")
    .stillTexture("kubejs:block/fluids/shimmer_still")
  shimmer.bucketItem.texture("kubejs:item/shimmer_bucket")
  shimmer.bucketItem.glow(true)
  // Food related fluids
  event.create("kubejs:mushroom_stew", "thin").tint(0xca9777)

  if (Platform.isLoaded("caupona")) {
    event.create("kubejs:walnut_oil", "thin").tint(0x98630b)
    event.create("kubejs:fig_vinegar", "thin").tint(0x2f0700)
  }

  if (Platform.isLoaded("grimoireofgaia")) {
    event.create("kubejs:nether_wart_jam", "thin").tint(0x5c151a)
  }
})
/*
    event.create('kubejs:slime', 'thin')
        .thinTexture(0x8CD782)
        .bucketColor(0x8CD782)
    event.create('kubejs:shimmer', 'thin')
        .thinTexture(0xD6CCFF)
        .bucketColor(0xD6CCFF)
*/

// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll('minecraft',
    createTooltip('minecraft:clock')
      .addSummary('You feel that this clock has the ability to control %s to some degree... How curious.')
      .addHighlight(['time'])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:andesite')
      .addSummary('Now has %s in recipes.')
      .addBehaviour([
        'Usage',
        'Used in making %s.'
      ])
      .addBehaviour([
        'Renewal',
        'Can be %s by %s some Gravel, Flint and Lava in a %s. Cobblestone and Diorite can also be %s together in a shapeless recipe.'
      ])
      .addBehaviour([
        'When haunted',
        'Turns into %s.'
      ])
      .addHighlight([
        'additional uses',
        'Andesite Alloy',
        'renewed',
        'compacting',
        'Basin',
        'mixed',
        'Deepslate'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:diorite')
      .addSummary("Now has %s due to Create's presence.")
      .addBehaviour([
        'Primary Use',
        'An easy method of acquiring %s for those moments where you can\'t find any.'
      ])
      .addBehaviour([
        'Renewal',
        'Combine 2x Quartz and 2x Cobblestone either with a %s or in a 2x2 %s.'
      ])
      .addHighlight([
        'additional usefulness',
        'Andesite',
        'Mechanical Mixer',
        'crafting grid'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:granite')
      .addSummary('Now has %s due to Create\'s presence.')
      .addBehaviour([
        'When milled or crushed',
        'Turns %s which can be %s washed to procure useful materials such as nuggets of gold.'
      ])
      .addHighlight([
        'additional usefulness',
        'Red Sand',
        'washed'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:cobblestone')
      .addSummary('Now has %s in recipes.')
      .addBehaviour([
        'Usage',
        'Can be used in making %s which can then be used to make %s for easy creation of %s.'
      ])
      .addBehaviour([
        'When milled or crushed',
        'Turns into %s which can be %s for more useful materials.'
      ])
      .addHighlight([
        'additional uses',
        'Diorite',
        'Andesite',
        'Andesite Alloy',
        'Gravel',
        'washed'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:dirt')
      .addSummary('The %s of many agricultural farms.')
      .addBehaviour([
        'Renewal',
        'Can be renewed by mixing %s with some %s in a %s paired with a %s.'
      ])
      .addHighlight([
        'foundation',
        'Gravel',
        'organic matter',
        'Basin',
        'Mechanical Mixer'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:gravel')
      .addSummary('Now has %s in recipes.')
      .addBehaviour([
        'When washed',
        'Has a chance of revealing %s and %s.'
      ])
      .addHighlight([
        'additional uses',
        'Iron Nuggets',
        'Flint'
      ])
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:tuff')
      .addSummary('Now has %s in recipes.')
      .addBehaviour([
        'When crushed',
        'Can randomly provide Flint or %s of gold, copper, zinc or iron.'
      ])
      .addBehaviour([
        'Renewal Method 1',
        'Can be made by %s some Gravel and Lava in a %s Basin.'
      ])
      .addBehaviour([
        'Renewal Method 2',
        'Can also be made by %s some Deepslate and Lava in a %s Basin.'
      ])
      .addHighlight([
        'additional uses',
        'nuggets',
        'compacting',
        'superheated',
        'compacting',
        'heated'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:dried_kelp_block')
      .addSummary('Now has %s in recipes.')
      .addBehaviour([
        'When compacted',
        'Turns into %s in a %s Basin.'
      ])
      .addHighlight([
        'additional uses',
        'coal',
        'heated'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:netherrack')
      .addSummary('Now has %s in recipes and can be %s renewed.')
      .addBehaviour([
        'Usage',
        'Used for making %s or %s when crushed into %s. Can also %s yield %s when crushed.'
      ])
      .addBehaviour([
        'Renewal',
        'Can be %s with %s potions which can be fully automated with quite a few Mechanical Mixers equipped with Basins and Blaze Burners.'
      ])
      .addHighlight([
        'additional recipes',
        'infinitely',
        'Blaze Cakes',
        'redstone',
        'Cinder Flour',
        'rarely',
        'Netherite Scrap',
        'renewed',
        'Instant Health II'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:coal')
      .addSummary('Now has %s uses in recipes.')
      .addBehaviour([
        'When milled',
        'Produces black dye with a %s of gray dye.'
      ])
      .addBehaviour([
        'Renewal',
        'Can be infinitely renewed from %s dried kelp blocks in a %s Basin.'
      ])
      .addHighlight([
        'additional uses',
        'chance',
        'compacting',
        'heated'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:coal_block')
      .addSummary('Now has %s in recipes.')
      .addBehaviour([
        'When compacted',
        'Now turns into %s when compacted in a %s Basin.'
      ])
      .addBehaviour([
        'Renewal',
        'Can be infinitely renewed from %s dried kelp blocks in a %s basin.'
      ])
      .addHighlight([
        'additional uses',
        'diamonds',
        'superheated',
        'compacting',
        'heated'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:diamond')
      .addSummary('Formerly the strongest material. Now has %s in recipes.')
      .addBehaviour([
        'Renewal',
        'Can be infinitely renewed from %s coal blocks in a %s basin.'
      ])
      .addHighlight([
        'additional uses',
        'compacting',
        'superheated'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:diamond_block')
      .addSummary('Now has %s in recipes.')
      .addBehaviour([
        'Renewal',
        'Can be infinitely renewed from %s coal blocks in a %s basin.'
      ])
      .addHighlight([
        'additional uses',
        'compacting',
        'superheated'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:beacon')
      .addSummary('Gives %s to players in a certain radius.')
      .addBehaviour([
        'Prerequisites',
        'Requires a square base built out of precious metals or gems to function! %s, %s, %s, %s and %s are valid materials. Additional materials may be usable if shown through the recipe viewer.'
      ])
      .addHighlight([
        'positive effects',
        'Iron',
        'Gold',
        'Diamond',
        'Emerald',
        'Netherite'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:glass_bottle')
      .addSummary('Now has %s in this modpack.')
      .addBehaviour([
        'When combined with a Dragon Egg in a crafting grid',
        'Extracts Dragon Breath.'
      ])
      .addHighlight([
        'additional uses'
      ])
      .build()
  )
  // Glass Bottle below.
  // event.addAll('minecraft', {
  //   "block.minecraft.beacon.tooltip.summary": "Gives positive effects to players in a certain radius.",
  //   "block.minecraft.beacon.tooltip.condition1": "Prerequisites",
  //   "block.minecraft.beacon.tooltip.behaviour1": "Requires a base built out of precious metals or gems to function! Iron, Gold, Diamond, Emerald and Netherite are valid materials.",
  //   "item.minecraft.glass_bottle.tooltip": "GLASS BOTTLE",
  //   "item.minecraft.glass_bottle.tooltip.summary": "Now has _additional uses_ in this modpack.",
  //   "item.minecraft.glass_bottle.tooltip.condition1": "When combined with a Dragon Egg in a crafting grid",
  //   "item.minecraft.glass_bottle.tooltip.behaviour1": "Extracts Dragon Breath.",
  //   "item.minecraft.lapis_lazuli.tooltip": "LAPIS LAZULI",
  //   "item.minecraft.lapis_lazuli.tooltip.summary": "Now has _additional uses_ in recipes.",
  //   "item.minecraft.lapis_lazuli.tooltip.condition1": "Usage",
  //   "item.minecraft.lapis_lazuli.tooltip.behaviour1": "Other than _enchanting_ purposes, you can _haunt_ it to get _prismarine_ shards and crystals.",
  //   "item.minecraft.lapis_lazuli.tooltip.condition2": "Renewal",
  //   "item.minecraft.lapis_lazuli.tooltip.behaviour2": "Other than _clerics_, lapis lazuli can now be acquired from _witches_.",
  //   "block.minecraft.pointed_dripstone.tooltip": "POINTED DRIPSTONE",
  //   "block.minecraft.pointed_dripstone.tooltip.summary": "Now has _additional uses_ in recipes.",
  //   "block.minecraft.pointed_dripstone.tooltip.condition1": "Usage",
  //   "block.minecraft.pointed_dripstone.tooltip.behaviour1": "Can now be used in making _Tridents_.",
  //   "block.minecraft.cobbled_deepslate.tooltip": "COBBLED DEEPSLATE",
  //   "block.minecraft.cobbled_deepslate.tooltip.summary": "Now has _additional uses_ in recipes.",
  //   "block.minecraft.cobbled_deepslate.tooltip.condition1": "When crushed",
  //   "block.minecraft.cobbled_deepslate.tooltip.behaviour1": "Produces _Deepslate Shards_ which can be _haunted_ to be transformed into different items.",
  //   "block.minecraft.campfire.tooltip": "CAMPFIRE",
  //   "block.minecraft.campfire.tooltip.summary": "Useful for _cooking_ food and other functionalities. See below!",
  //   "block.minecraft.campfire.tooltip.condition1": "When nearby:",
  //   "block.minecraft.campfire.tooltip.behaviour1": "Campfires can now _regenerate_ your health. _<wave>Cozy!</wave>_",
  //   "block.minecraft.campfire.tooltip.condition2": "When placed in front of a powered Encased Fan:",
  //   "block.minecraft.campfire.tooltip.behaviour2": "Permits _Bulk Smoking_ for food items.",
  //   "block.minecraft.soul_campfire.tooltip": "SOUL CAMPFIRE",
  //   "block.minecraft.soul_campfire.tooltip.summary": "_Repels_ piglins in addition to cooking food and other functionalities. See below!",
  //   "block.minecraft.soul_campfire.tooltip.condition1": "When nearby:",
  //   "block.minecraft.soul_campfire.tooltip.behaviour1": "Campfires can now _regenerate_ your health. _<wave>Cozy!</wave>_",
  //   "block.minecraft.soul_campfire.tooltip.condition2": "When placed in front of a powered Encased Fan:",
  //   "block.minecraft.soul_campfire.tooltip.behaviour2": "Permits _Bulk Haunting_ for items.",
  //   "item.minecraft.rotten_flesh.tooltip": "ROTTEN FLESH",
  //   "item.minecraft.rotten_flesh.tooltip.summary": "Now has _additional uses_ in multiple recipes.",
  //   "item.minecraft.rotten_flesh.tooltip.condition1": "In crafting recipes",
  //   "item.minecraft.rotten_flesh.tooltip.behaviour1": "Is the basis of creating _enriched_ soil for _higher_ crop yields.",
  //   "item.minecraft.rotten_flesh.tooltip.condition2": "When haunted",
  //   "item.minecraft.rotten_flesh.tooltip.behaviour2": "Turns into _Phantom Membrane_.",
  //   "item.minecraft.nether_star.tooltip": "NETHER STAR",
  //   "item.minecraft.nether_star.tooltip.summary": "Now has _additional uses_.",
  //   "item.minecraft.nether_star.tooltip.condition1": "Usage",
  //   "item.minecraft.nether_star.tooltip.behaviour1": "If Cataclysm is loaded, it is used in waking up _The Harbinger_ in the _Ancient Factory_ located deep underground in the _Overworld_.",
  //   "block.minecraft.dragon_egg.tooltip": "DRAGON EGG",
  //   "block.minecraft.dragon_egg.tooltip.summary": "Now has an _actual_ use.",
  //   "block.minecraft.dragon_egg.tooltip.condition1": "Usage",
  //   "block.minecraft.dragon_egg.tooltip.behaviour1": "Used in making _Dragon Breath_.",
  //   "block.minecraft.structure_void.tooltip": "STRUCTURE VOID",
  //   "block.minecraft.structure_void.tooltip.summary": "Primarily used for _crafting_ spawners.",
  //   "block.minecraft.structure_void.tooltip.condition1": "Acquisition",
  //   "block.minecraft.structure_void.tooltip.behaviour1": "Can be aquired by breaking _existing_ Spawners or by using a _crafted Command Block_ and then _striking it_ with a _Deployer_ using a _certain_ scythe.",
  //   "item.minecraft.raw_iron.tooltip": "RAW IRON",
  //   "item.minecraft.raw_iron.tooltip.summary": "Unrefined, but an _important_ ingredient in everything Create related.",
  //   "item.minecraft.raw_iron.tooltip.condition1": "Renewal",
  //   "item.minecraft.raw_iron.tooltip.behaviour1": "Can be _renewed_ from _washing_ Gravel in the form of nuggets in addition to existing methods.",
  //   "item.minecraft.iron_ingot.tooltip": "IRON INGOT",
  //   "item.minecraft.iron_ingot.tooltip.summary": "Now in its _refined_ form, it is now _useful_ to you.",
  //   "item.minecraft.iron_ingot.tooltip.condition1": "When mixed with Andesite in nugget form",
  //   "item.minecraft.iron_ingot.tooltip.behaviour1": "Creates _Andesite Alloy_ ingots.",
  //   "item.minecraft.iron_ingot.tooltip.condition2": "When pressed",
  //   "item.minecraft.iron_ingot.tooltip.behaviour2": "Turns into an _Iron Sheet_ which has additional uses.",
  //   "item.minecraft.raw_copper.tooltip": "RAW COPPER",
  //   "item.minecraft.raw_copper.tooltip.summary": "Unrefined, but an _important_ ingredient in everything related to Create _fluid_ manipulation.",
  //   "item.minecraft.raw_copper.tooltip.condition1": "Renewal",
  //   "item.minecraft.raw_copper.tooltip.behaviour1": "Can be _renewed_ from _Drowned_ in ingot form as a loot drop or from _Tuff_ in nugget form.",
  //   "item.minecraft.copper_ingot.tooltip": "COPPER INGOT",
  //   "item.minecraft.copper_ingot.tooltip.summary": "Now in its _refined_ form, it is now _useful_ to you.",
  //   "item.minecraft.copper_ingot.tooltip.condition1": "When combined with a Zinc Ingot",
  //   "item.minecraft.copper_ingot.tooltip.behaviour1": "Creates _two_ Brass Ingots.",
  //   "item.minecraft.copper_ingot.tooltip.condition2": "When pressed",
  //   "item.minecraft.copper_ingot.tooltip.behaviour2": "Turns into a _Copper Sheet_ which has additional uses, primarily focused on fluid manipulation.",
  //   "item.minecraft.copper_ingot.tooltip.condition3": "Renewal",
  //   "item.minecraft.copper_ingot.tooltip.behaviour3": "Can be _renewed_ from _Drowned_ as a loot drop or from _Tuff_ in nugget form.",
  //   "item.minecraft.raw_gold.tooltip": "RAW GOLD",
  //   "item.minecraft.raw_gold.tooltip.summary": "Unrefined, but an _important_ ingredient in Create components.",
  //   "item.minecraft.raw_gold.tooltip.condition1": "Renewal",
  //   "item.minecraft.raw_gold.tooltip.behaviour1": "Can be _renewed_ from _washing_ Red Sand or Soul Sand in nugget form. However, washing Soul Sand has _lower_ yields compared to washing Red Sand.",
  //   "item.minecraft.gold_ingot.tooltip": "GOLD INGOT",
  //   "item.minecraft.gold_ingot.tooltip.summary": "Now in its _refined_ form, it is now _useful_ to you.",
  //   "item.minecraft.gold_ingot.tooltip.condition1": "When pressed",
  //   "item.minecraft.gold_ingot.tooltip.behaviour1": "Turns into a _Gold Sheet_ which has additional uses."
  // })
  event.addAll(
    'minecraft',
    createTooltip('minecraft:composter')
      .addSummary('Primarily used for making _Bone Meal_. Both _Deployers_ and _Mechanical Arms_ are able to directly deposit items that can be composted into _Bone Meal_.')
      .addBehaviour([
        'Automated bone meal extraction',
        'Unfortunately, _chutes_ and _funnels_ are not able to extract the finished Bone Meal, so you will have to use _hoppers_ instead.'
      ])
      .addHighlight([
        'Bone Meal',
        'Deployers',
        'Mechanical Arms',
        'Bone Meal',
        'chutes',
        'funnels',
        'hoppers'
      ])
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:glowstone_dust')
      .addSummary('The dust form of Glowstone. An essential ingredient in crafting blocks that emit light as well as _potion brewing_.')
      .addBehaviour([
        'Renewal',
        'Can be obtained from defeating _witches_ or applying a _Night Vision Potion_ to some _Cinder Flour_.'
      ])
      .addBehaviour([
        'Uses in Potion Brewing',
        'Increases the _intensity_ of a potion. Also used in brewing a _Thick Potion_.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('minecraft:gunpowder')
      .addSummary('An essential ingredient in both the creation of _explosives_ and _splash potions_.')
      .addBehaviour([
        'Renewal',
        'Can be obtained from defeating _Creepers_ or washing _Crushed Raw Zinc_.'
      ])
      .build()
  )
  if (Platform.isLoaded('salt')) {
    event.addAll('kubejs', {
      "item.minecraft.gunpowder.tooltip.condition2": "Renewal with Salt",
      "item.minecraft.gunpowder.tooltip.behaviour2": "Can be mixed with _Salt_ and _Coal_ or _Charcoal_."
    })
  }
  event.addAll(
    'kubejs',
    createTooltip('minecraft:redstone')
      .addSummary('An embodiment of _game logic_ and can be used in many logic related components.')
      .addBehaviour([
        'Renewal',
        'Can be obtained from defeating _witches_ or applying a _Strength Potion_ to some _Cinder Flour_.'
      ])
      .addBehaviour([
        'Uses in Potion Brewing',
        'Increases the _duration_ of a potion. Also used in brewing a _Mundane Potion_.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('minecraft:echo_shard')
      .addSummary('Now has additional uses.')
      .addBehaviour([
        'On R-Click on Warped Roots',
        'Converts the roots into a _Sculk Sensor_.'
      ])
      .addBehaviour([
        'On R-Click on Sculk Shrieker',
        'Summons a Warden and _consumes_ the Echo Shard in the process.'
      ])
      .build()
  )
})
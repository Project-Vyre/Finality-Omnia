// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll('minecraft',
    createTooltip('minecraft:obsidian')
      .addSummary('%s renewable but takes forever to break automatically.')
      .addBehaviour([
        'Method 1 - Drills',
        'You can have a %s place lava with a Lava Bucket next to a waterlogged block or drill. This does take a while, however.'
      ])
      .addBehaviour([
        'Method 2 - Contraption Parking',
        'You can have a %s or %s park blocks into place to break the obsidian instantly.'
      ])
      .addBehaviour([
        'Method 3 - Cursed Recipes',
        'You can %s Water and Lava in a Basin because of Create\'s cursed recipe magic or other methods shown by the recipe viewer.'
      ])
      .addHighlight(['Infinitely', 'Deployer', 'Mechanical Bearing', 'Mechanical Piston', 'compact'])
      .build()
  )
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
  event.addAll('minecraft',
    createTooltip('minecraft:lapis_lazuli')
      .addSummary('Now has %s in recipes.')
      .addBehaviour([
        'Usage',
        'Typically used for %s items.'
      ])
      .addBehaviour([
        'When haunted',
        'Turns into %s and %s.'
      ])
      .addBehaviour([
        'Renewal',
        'Other than trading with %s, it can be dropped by %s.'
      ])
      .addHighlight([
        'additional uses',
        'enchanting',
        'Prismarine Shards',
        'Prismarine Crystals',
        'clerics',
        'witches'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:pointed_dripstone')
      .addSummary('Now has %s in recipes.')
      .addBehaviour([
        'Usage',
        'Can now be used in making %s.'
      ])
      .addHighlight([
        'additional uses',
        'Tridents'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:cobbled_deepslate')
      .addSummary('Now has %s in recipes.')
      .addBehaviour([
        'When crushed',
        'Produces %s which can be %s to turn into %s.'
      ])
      .addHighlight([
        'additional uses',
        'Deepslate Shards',
        'haunted',
        'Echo Shards'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:campfire')
      .addSummary('Useful for %s food and other functionalities. See below!')
      .addBehaviour([
        'When nearby',
        'Campfires can now %s your health. <wave>Cozy!</wave>'
      ])
      .addBehaviour([
        'When placed in front of a powered Encased fan',
        'Permits %s for bulk cooking of food items.'
      ])
      .addHighlight([
        'cooking',
        'regenerate',
        'Bulk Smoking'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:soul_campfire')
      .addSummary('%s piglins in addition to cooking food and other functionalities. See below!')
      .addBehaviour([
        'When nearby',
        'Campfires can now %s your health. <wave>Cozy!</wave>'
      ])
      .addBehaviour([
        'When placed in front of a powered Encased fan',
        'Permits %s for items.'
      ])
      .addHighlight([
        'Repels',
        'regenerate',
        'Bulk Haunting'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:rotten_flesh')
      .addSummary('Not suited for consumption. Now has %s.')
      .addBehaviour([
        'When combined with Dirt',
        'Creates the basis of %s for %s crop yields.'
      ])
      .addBehaviour([
        'When haunted',
        'Turns into %s.'
      ])
      .addHighlight([
        'additional uses',
        'Enriched Soil',
        'higher',
        'Phantom Membrane'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:nether_star')
      .addSummary('Now has %s.')
      .addBehaviour([
        'Usage if Cataclysm is loaded',
        'Used in waking up %s in the %s Ancient Factory located deep underground in the %s.'
      ])
      .addHighlight([
        'additional uses',
        'The Harbinger',
        'Ancient Factory',
        'Overworld'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:dragon_egg')
      .addSummary('Now has an %s use.')
      .addBehaviour([
        'Usage',
        'Used in making %s.'
      ])
      .addHighlight([
        'actual',
        'Dragon Breath'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:structure_void')
      .addSummary('Used to indicate empty space in structures.')
      .addBehaviour([
        'Primary Usage',
        'Used for %s spawners.'
      ])
      .addBehaviour([
        'Acquisition',
        'Can be acquired by breaking %s spawners.'
      ])
      .addBehaviour([
        'Renewal',
        'Can be renewed by using a crafted %s and then %s with a %s using a %s scythe.'
      ])
      .addHighlight([
        'crafting',
        'existing',
        'Command Block',
        'striking it',
        'Deployer',
        'certain'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:raw_iron')
      .addSummary('Unrefined, but an %s ingredient in everything Create related.')
      .addBehaviour([
        'Renewal',
        'Iron can be renewed from %s Gravel in the form of nuggets in addition to existing methods.'
      ])
      .addHighlight([
        'important',
        'washing'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:iron_ingot')
      .addSummary('Now in its %s form, it is now %s to you.')
      .addBehaviour([
        'When mixed with Andesite in nugget form',
        'Creates %s ingots.'
      ])
      .addBehaviour([
        'When pressed',
        'Turns into an %s which has additional uses.'
      ])
      .addHighlight(['refined', 'useful', 'Andesite Alloy', 'Iron Sheet'])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:raw_copper')
      .addSummary('Unrefined, but an %s ingredient in everything related to Create %s manipulation.')
      .addBehaviour([
        'Renewal',
        'Can be renewed from %s in ingot form as a loot drop or from %s in nugget form.'
      ])
      .addHighlight([
        'important',
        'fluid',
        'Drowned',
        'Tuff'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:copper_ingot')
      .addSummary('Now in its %s form, it is now %s to you.')
      .addBehaviour([
        'When combined with a Zinc Ingot',
        'Creates %s Brass Ingots.'
      ])
      .addBehaviour([
        'When pressed',
        'Turns into a %s which has additional uses. Resulting products are primarily focused on fluid manipulation and automation.'
      ])
      .addBehaviour([
        'Renewal',
        'Can be %s from %s as a loot drop or from %s in nugget form.'
      ])
      .addHighlight(['refined', 'useful', 'two', 'Copper Sheet', 'renewed', 'Drowned', 'Tuff'])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:raw_gold')
      .addSummary('Unrefined but an %s ingredient in Create components.')
      .addBehaviour([
        'Renewal',
        'Can be %s from %s Red Sand or Soul Sand in nugget form. However, washing Soul Sand has %s yields compared to washing Red Sand.'
      ])
      .addHighlight(['important', 'renewed', 'washing', 'lower'])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:gold_ingot')
      .addSummary('Now in its %s form, it is now %s to you.')
      .addBehaviour([
        'When pressed',
        'Turns into a %s which has additional uses.'
      ])
      .addHighlight(['refined', 'useful', 'Gold Sheet'])
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:composter')
      .addSummary('Primarily used for making %s. Both %s and %s are able to directly deposit items that can be composted into %s.')
      .addBehaviour([
        'Automated bone meal extraction',
        'Unfortunately, %s and %s are not able to extract the finished Bone Meal, so you will have to use %s instead.'
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
      .addSummary('The dust form of Glowstone. An essential ingredient in crafting blocks that emit light as well as %s.')
      .addBehaviour([
        'Renewal',
        'Can be obtained from defeating %s or applying a %s to some %s.'
      ])
      .addBehaviour([
        'Uses in Potion Brewing',
        'Increases the %s of a potion. Also used in brewing a %s.'
      ])
      .addHighlight([
        'potion brewing',
        'witches',
        'Night Vision Potion',
        'Cinder Flour',
        'intensity',
        'Thick Potion'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('minecraft:gunpowder')
      .addSummary('An essential ingredient in both the creation of %s and %s.')
      .addBehaviour([
        'Renewal',
        'Can be obtained from defeating %s or washing %s.'
      ])
      // Salt mod is no longer maintained after 1.20.1. Substitute with self-made salt.
      .addBehaviour([
        'Renewal with Salt',
        'Can be mixed with %s and %s or %s.'
      ])
      .addHighlight([
        'explosives',
        'splash potions',
        'Creepers',
        'Crushed Raw Zinc',
        'Salt',
        'Coal',
        'Charcoal'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('minecraft:redstone')
      .addSummary('An embodiment of %s and can be used in many logic related components.')
      .addBehaviour([
        'Renewal',
        'Can be obtained from defeating %s or applying a %s to some %s.'
      ])
      .addBehaviour([
        'Uses in Potion Brewing',
        'Increases the %s of a potion. Also used in brewing a %s.'
      ])
      .addHighlight([
        'game logic',
        'witches',
        'Strength Potion',
        'Cinder Flour',
        'duration',
        'Mundane Potion'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('minecraft:echo_shard')
      .addSummary('Now has additional uses.')
      .addBehaviour([
        'On R-Click on Warped Roots',
        'Converts the roots into a %s.'
      ])
      .addBehaviour([
        'On R-Click on Sculk Shrieker',
        'Summons a Warden and %s the Echo Shard in the process.'
      ])
      .addHighlight([
        'Sculk Sensor',
        'consumes'
      ])
      .build()
  )
})
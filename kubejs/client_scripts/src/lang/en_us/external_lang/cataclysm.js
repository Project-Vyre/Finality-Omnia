// requires: cataclysm

ClientEvents.lang('en_us', event => {
  event.add('cataclysm', 'kubejs.cataclysm.original_tooltip_text', 'Original tooltip text below for translation purposes. - CelestialAbyss')
  // NETHER
  event.addAll('cataclysm',
    createTooltip('cataclysm:infernal_forge')
      .addSummary('A %s hammer. Also important to note, this is actually a pickaxe.')
      .addBehaviour([
        'On R-click while looking at a block',
        'Causes AoE damage around yourself and sends mobs flying.'
      ])
      .addHighlight([
        'devestating'
      ])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:monstrous_horn')
      .addSummary('Used to craft the %s.')
      .addHighlight(['Monstrous Helm'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:monstrous_helm')
      .addSummary('Falling below %s of your HP will push away entities and %s buffs.')
      .addBehaviour([
        'Additional Information',
        'You are given additional Defense, Knockback Resistance and Regeneration.'
      ])
      .addHighlight([
        'half',
        'grant'
      ])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:burning_ashes')
      .addSummary('Used in %s Ignis.')
      .addHighlight(['summoning'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:the_incinerator')
      .addSummary('A very large sword.')
      .addBehaviour([
        'Usage',
        'Hold %s for 3 seconds until you hear a sound. After %s the roar of the flames, let go to unleash %s in a %s.'
      ])
      .addBehaviour([
        'Warning!',
        'Dropped items in the line of fire will be destroyed!'
      ])
      .addHighlight([
        'right click',
        'hearing',
        'devastation',
        'straight line'
      ])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:bulwark_of_the_flame')
      .addSummary('Functions regularly like a shield, but with a charge ability.')
      .addBehaviour([
        'Usage',
        'While %s and %s, let go of right click to charge forward. Entities that collide with a wall are stunned from the impact and take additional damage.'
      ])
      .addHighlight(['sneaking', 'blocking'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:ignitium_helmet')
      .addSummary('Formerly provided Lava Vision?')
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:ignitium_chestplate')
      .addSummary('You can combine an Elytra with this in the Smithing Table.')
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:ignitium_leggings')
      .addSummary('The developer, %s says "Flame Reflex" which implies Fire Resistance. If the armor set %s to provide Fire Resistance, then it is not my fault.')
      .addHighlight(['L_Ender', 'fails'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:ignitium_boots')
      .addSummary('Lava Walker, allows you to walk on lava. DOES NOT provide Fire Resistance, even with the full set!')
      .build()
  )
  // VOID
  event.addAll('cataclysm',
    createTooltip('cataclysm:void_scatter_arrow')
      .addSummary('This arrow %s on impact, creating many %s in the process.')
      .addHighlight(['explodes', 'fragments'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:void_core')
      .addSummary('A special object that can be used as a weapon.')
      .addBehaviour([
        'Usage',
        'Right click on the ground to cause Void Rune %s to %s in a straight line in front of you.'
      ])
      .addHighlight(['spikes', 'erupt'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:gauntlet_of_guard')
      .addSummary('A very hard punching glove with special abilities.')
      .addBehaviour([
        'On R-Click',
        'When held in your main hand, you can %s entities %s you by holding right click. Be sure to give them a golden punch afterwards!'
      ])
      .addHighlight(['pull', 'towards'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:void_forge')
      .addSummary('The power of a supernova is contained within. Yes, this is %s.')
      .addBehaviour([
        'On R-Click on a block',
        'Now creates a %s when you %s a block, in addition to sending mobs flying.'
      ])
      .addHighlight(['still a pickaxe', 'fan of void spikes', 'right click'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:gauntlet_of_bulwark')
      .addSummary('A fist with the %s power of planets colliding.')
      .addBehaviour([
        'Usage',
        'Hold right click to %s nearby entities and give them the %s debuff. %s right click will make you %s forward and deal damage to the entities hit by you. Entities that hit the wall take a lot of damage.'
      ])
      .addHighlight(['punching', 'push', 'Blazing Brand', 'Releasing', 'charge'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:void_assault_shoulder_weapon')
      .addSummary('The %s version of the %s. The power of supernovae contained within each projectile.')
      .addBehaviour([
        'Usage',
        'You can now %s Void Howitzer projectiles which now %s a tsunami of Void Spikes on impact.'
      ])
      .addHighlight(['upgraded', 'Wither Assault Shoulder Weapon', 'shoot', 'create'])
      .build()
  )
  // WITHERITE
  event.addAll('cataclysm',
    createTooltip('cataclysm:witherite_block')
      .addSummary('Compacted Witherite. Used for making weapons from the Witherite arsenal and creating the %s.')
      .addHighlight(['Mechanical Fusion Anvil'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:witherite_ingot')
      .addSummary('Used for making weapons from the Witherite Arsenal and creating the %s.')
      .addHighlight(['Mechanical Fusion Anvil'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:mechanical_fusion_anvil')
      .addSummary('Used to %s the traits of %s weapons together.')
      .addHighlight(['fuse', 'two'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:wither_assault_shoulder_weapon')
      .addSummary('A rocket launcher that %s projectiles laced with the %s effect.')
      .addBehaviour([
        'On R-Click',
        '%s and %s right click to %s a %s that travels in a %s and explodes on contact.'
      ])
      .addBehaviour([
        'On Sneak + R-Click',
        'Uses the %s which fires a %s projectile that follows an %s. Upon contact, it leaves behind %s that applies the %s effect.'
      ])
      .addHighlight([
        'shoots',
        'wither',
        'Hold',
        'release',
        'fire',
        'Wither Missile',
        'straight line',
        'alt fire',
        'Wither Howitzer',
        'arced path',
        'lingering smoke',
        'wither'
      ])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:meat_shredder')
      .addSummary('It does what it says it does, it %s your enemies.')
      .addBehaviour([
        'On R-Click',
        'Damages entities in front of you while %s.'
      ])
      .addHighlight(['shreds', 'ignoring invulnerability frames'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:laser_gatling')
      .addSummary('A %s laser gatling weapon. Also sets things %s!')
      .addBehaviour([
        'To reload',
        'Use %s in your inventory.'
      ])
      .addHighlight(['rapid fire', 'on fire', 'redstone'])
      .build()
  )
  // ABYSS
  event.addAll('cataclysm',
    createTooltip('cataclysm:abyssal_sacrifice')
      .addSummary('Used in %s the %s.')
      .addHighlight([
        'summoning',
        'Leviathan'
      ])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:tidal_claws')
      .addSummary('%s and %s. Also serves as a grappling hook.')
      .addBehaviour([
        'On L-click',
        'Left click to attack %s entities with a single tentacle. Applies a %s debuff.'
      ])
      .addBehaviour([
        'On R-click',
        'Right click to use as a grappling hook. Remember that it has %s range!'
      ])
      .addHighlight([
        'Long ranged',
        'deadly',
        'multiple',
        'stacking',
        'limited'
      ])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:abyssal_egg')
      .addSummary('You emerge as victor, but now you have an %s in your possession.')
      .addBehaviour([
        'How to Hatch',
        'Simply %s the egg down to %s the hatching process. Also, no... there is no way to accelerate the hatching process. It must %s in order to hatch.'
      ])
      .addBehaviour([
        'Additional Info',
        'Probably best to make sure you have some %s to %s your adorable Leviathan once it hatches.'
      ])
      .addHighlight(['egg', 'place', 'start', 'remain placed', 'tropical fish', 'feed'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:bloom_stone_pauldrons')
      .addSummary('A special chestplate.')
      .addBehaviour([
        'On Sneak while equipped',
        'Lets you %s in the ground.'
      ])
      .addBehaviour([
        'Upon releasing the Sneak key',
        'Releases amethyst clusters %s you. Clusters that %s with entities %s to them.'
      ])
      .addHighlight(['hide', 'around', 'collide', 'cause damage'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:blessed_amethyst_crab_meat')
      .addSummary('Grants the special %s effect which makes you %s, %s and %s while fighting the %s.')
      .addHighlight(['blessing', 'immune to darkness', 'abyssal fear', 'abyssal burn', 'Leviathan'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:sandstorm_in_a_bottle')
      .addSummary('A sandstorm rages within.')
      .addBehaviour([
        'On R-Click',
        'Summons two Sandstorms that %s around you.'
      ])
      .addHighlight(['orbit'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:remnant_skull')
      .addSummary('Summons the Modern Remnant. Can be %s through using the %s on it.')
      .addHighlight(['tamed', 'Brush/Sniffer Egg'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:necklace_of_the_desert')
      .addSummary('It looks like you can %s...')
      .addHighlight(['wake something up'])
      .build()
  )
  // EYES
  event.addAll('cataclysm',
    createTooltip('cataclysm:abyss_eye')
      .addSummary('Guides you to the nearest %s where the %s resides. Only usable in the %s. Unusable in other dimensions.')
      .addBehaviour([
        'On R-Click',
        'Throws the %s into the air. %s it.'
      ])
      .addHighlight(['Sunken City', 'Leviathan', 'Overworld', 'Abyss Eye', 'Follow'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:cursed_eye')
      .addSummary('Guides you to the nearest %s where %s resides. Only usable in the %s. Unusable in other dimensions.')
      .addBehaviour([
        'On R-Click',
        'Throws the %s into the air. %s it.'
      ])
      .addHighlight(['Frosted Prison', 'Maledictus', 'Overworld', 'Cursed Eye', 'Follow'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:desert_eye')
      .addSummary('Guides you to the closest %s where the %s resides. Only usable in the %s. Unusable in other dimensions.')
      .addBehaviour([
        'On R-Click',
        'Throws the %s into the air. %s it.'
      ])
      .addHighlight(['Cursed Pyramid', 'Ancient Remnant', 'Overworld', 'Desert Eye', 'Follow'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:flame_eye')
      .addSummary('Guides you to the closest %s where %s resides. Only usable in the %s. Unusable in other dimensions.')
      .addBehaviour([
        'On R-Click',
        'Throws the %s into the air. %s it.'
      ])
      .addHighlight(['Burning Arena', 'Ignis', 'Nether', 'Flame Eye', 'Follow'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:mech_eye')
      .addSummary('Guides you to the closest %s where the %s resides. Only usable in the %s. Unusable in other dimensions.')
      .addBehaviour([
        'On R-Click',
        'Throws the %s into the air. %s it.'
      ])
      .addHighlight(['Ancient Factory', 'Harbinger', 'Overworld', 'Mech Eye', 'Follow'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:monstrous_eye')
      .addSummary('Guides you to the closest %s where the %s resides. Only usable in the %s. Unusable in other dimensions.')
      .addBehaviour([
        'On R-Click',
        'Throws the %s into the air. %s it.'
      ])
      .addHighlight(['Soul Forge', 'Netherite Monstrosity', 'Nether', 'Monstrous Eye', 'Follow'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:storm_eye')
      .addSummary('Guides you to the closest %s where %s resides. Only usable in the %s. Unusable in other dimensions.')
      .addBehaviour([
        'On R-Click',
        'Throws the %s into the air. %s it.'
      ])
      .addHighlight(['Acropolis', 'Scylla', 'Overworld', 'Storm Eye', 'Follow'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:void_eye')
      .addSummary('Guides you to the closest %s where the %s resides. Only usable in %s. Unusable in other dimensions.')
      .addBehaviour([
        'On R-Click',
        'Throws the %s into the air. %s it.'
      ])
      .addHighlight(['Ruined Citadel', 'Ender Guardian', 'The End', 'Void Eye', 'Follow'])
      .build()
  )
  // New Cataclysm items.
  event.addAll('cataclysm',
    createTooltip('cataclysm:gauntlet_of_maelstrom')
      .addSummary('The %s of the %s and %s.')
      .addBehaviour([
        'On held R-Click then releasing',
        'Creates a %s at the location you are looking at.'
      ])
      .addHighlight(['fusion', 'Gauntlet of Guard', 'Sandstorm in a Bottle', 'Void Vortex'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:blazing_grips')
      .addSummary('On hit, there is a chance to apply %s to the target.')
      .addBehaviour([
        'Blazing Brand',
        'A %s that reduces Armor and Armor Toughness for %s applied.'
      ])
      .addHighlight([
        'Blazing Brand',
        'debuff',
        'each stack'
      ])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:cursed_bow')
      .addSummary('A special bow that shoots %s at once. However, it %s depending on what arrow you shoot it with.')
      .addBehaviour([
        'On R-Click usage with normal arrows',
        'Shoots 3 Phantom Arrows.'
      ])
      .addBehaviour([
        'On R-Click usage with tipped / special arrows',
        'Shoots 2 Phantom Arrows with the effects of the arrow used.'
      ])
      .addHighlight(['multiple arrows', 'changes'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:wrath_of_the_desert')
      .addSummary('The %s of the %s and %s.')
      .addBehaviour([
        'On R-Click',
        'Releases three Cursed Sandstorms that %s enemies.'
      ])
      .addHighlight(['fusion', 'Cursed Bow', 'Sandstorm in a Bottle', 'track'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:strange_key')
      .addSummary('Used to open the Door of Seal that serves as the prison of Maledictus. Be prepared.')
      .addHighlight(['prepared'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:soul_render')
      .addSummary('A halberd with %s properties.')
      .addBehaviour([
        'On R-Click',
        'Hold then release to %s in the direction you are looking.'
      ])
      .addBehaviour([
        'On R-Click while sneaking',
        'Summons %s that %s from the ground around you in a spiral pattern.'
      ])
      .addHighlight(['spectral', 'charge forward', 'Phantom Halberds', 'rise'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:the_annihilator')
      .addSummary('A mace with %s properties.')
      .addBehaviour([
        'When dual wielding',
        'Allows charging with R-Click for 2 seconds then releasing to unleash a %s around you that deals AoE damage.'
      ])
      .addBehaviour([
        'Additional Info',
        'Deals %s Critical Damage.'
      ])
      .addHighlight([
        'spectral',
        'shockwave',
        'higher'
      ])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:the_immolator')
      .addSummary('The %s of %s and %s.')
      .addBehaviour([
        'When dual wielding',
        'Allows charging with R-Click for 2 seconds then releasing to unleash a Flame Strike around you that deals AoE fire damage.'
      ])
      .addBehaviour([
        'Additional Info',
        'Deals higher Critical Damage. Entities with Blazing Brand automatically recieve critical damage.'
      ])
      .addHighlight([
        'fusion',
        'Ignitium',
        'The Annihilator'
      ])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:astrape')
      .addSummary('A spear with a %s aura.')
      .addBehaviour([
        'On R-Click',
        'Shoots out a %s projectile that travels in a straight line. Upon hitting an entity or block, the spear will %s the area with lightning and leave a %s lightning AoE.'
      ])
      .addHighlight([
        'thunderous',
        'Lightning Spear',
        'strike',
        'lingering'
      ])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:ceraunus')
      .addSummary('An anchor with an %s to it, yet it can be wielded with ease.')
      .addBehaviour([
        'On R-Click',
        'Hold then release to %s the anchor in the direction you are looking. Entities hit by the anchor will suffer %s. After impact, the anchor will be %s to you by its chain.'
      ])
      .addBehaviour([
        'On R-Click while sneaking',
        'Summons Waves in a fan pattern in front of you that deal damage and push back enemies on hit.'
      ])
      .addHighlight([
        'immense weight',
        'throw',
        'heavy damage',
        'reeled back'
      ])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:ancient_spear')
      .addSummary('A spear made from very ancient metal.')
      .addBehaviour([
        'On L-Click',
        'Shoots out a Sandstorm in a straight line in the direction you are looking. The Sandstorm damages entities that are hit and applies %s to them.'
      ])
      .addBehaviour([
        'Curse of the Desert',
        'A debuff that %s movement controls. Does not inflict blindness!'
      ])
      .addHighlight([
        'Curse of the Desert',
        'reverses'
      ])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:sticky_gloves')
      .addSummary('Prevents Koboletons from stealing from you.')
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:netherite_effigy')
      .addSummary('A small effigy made of Netherite. Has a resemblance to the Netherite Monstrosity you have slain.')
      .addBehaviour([
        'On R-Click',
        'Summons the Netherite Ministrosity. Can be %s through feeding it %s.'
      ])
      .addBehaviour([
        'Acquisition of Lava Power Cells',
        'Obtained from %s the Netherite Monstrosity.'
      ])
      .addHighlight(['tamed', 'Lava Power Cells', 'slaying'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:lava_power_cell')
      .addSummary('Used for taming the Netherite Ministrosity.')
      .addHighlight(['taming'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:cursium_helmet')
      .addSummary('A helmet that has spectral properties.')
      .addBehaviour([
        'Ghost Vision',
        'Applies a glow effect to living entities behind walls in the vicinity. May require configuring in your keybinds to activate its buff as it is unbound by default to prevent keybind conflicts.'
      ])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:cursium_chestplate')
      .addSummary('A chestplate that has spectral properties.')
      .addBehaviour([
        'Undead Revive',
        'Upon death, you will be revived with 5 HP and granted invincibility for 5 seconds. After the invincibility period ends, Undead Revive will be on cooldown for 6 minutes for the wearer as indicated by a debuff effect.'
      ])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:cursium_leggings')
      .addSummary('Leggings that have spectral properties.')
      .addBehaviour([
        'Ghost Dodge',
        'Has a low chance to %s taken by the wearer. The probability of ignoring an attack %s when the attack is a %s. (Chance is not explicitly stated by the developer, so good luck with that.)'
      ])
      .addHighlight(['ignore attacks', 'increases', 'ranged projectile'])
      .build()
  )
  event.addAll('cataclysm',
    createTooltip('cataclysm:cursium_boots')
      .addSummary('Boots that have spectral properties.')
      .addBehaviour([
        'Ghostly Weightlessness',
        'Reduces fall damage. Also has an ability to... "back step" upon pressing a keybind that may need to be configured.'
      ])
      .build()
  )
})
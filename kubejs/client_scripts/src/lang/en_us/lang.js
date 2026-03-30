// priority: 100
// requires: create
// ignored: false

/**
 * @file Everything lang file related.
 * @author LatvianModder <https://github.com/LatvianModder> Helped with setting this up and object entry iteration for easier lang input
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

let INTEGERS = {
  zero: 'Zero',
  one: 'One',
  two: 'Two',
  three: 'Three',
  four: 'Four',
  five: 'Five',
  six: 'Six',
  seven: 'Seven',
  eight: 'Eight',
  nine: 'Nine'
}
let LETTERS = {
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D',
  e: 'E',
  f: 'F',
  g: 'G',
  h: 'H',
  i: 'I',
  j: 'J',
  k: 'K',
  l: 'L',
  m: 'M',
  n: 'N',
  o: 'O',
  p: 'P',
  q: 'Q',
  r: 'R',
  s: 'S',
  t: 'T',
  u: 'U',
  v: 'V',
  w: 'W',
  x: 'X',
  y: 'Y',
  z: 'Z'
}
let SPECIAL_CHARACTERS = {
  octothorpe: 'Hashtag',
  slash: '/ (Slash)',
  at_sign: '@ (At) Sign',
  left_parentheses: '(',
  right_parentheses: ')',
  left_bracket: '[',
  right_bracket: ']',
  left_brace: '{',
  right_brace: '}',
  left_chevron: '<',
  right_chevron: '>',
  exclamation_mark: '!',
  ampersand: '&',
  full_point: '.',
  comma: ',',
  equality_sign: '=',
  plus_sign: '+',
  minus_sign: '-'
}

let CMD = {
  command_block: 'Command Block',
  chain_command_block: 'Chain Command Block',
  repeating_command_block: 'Repeating Command Block'
}

let seqDYE = {
  black: 'Black',
  gray: 'Gray',
  light_gray: 'Light Gray',
  white: 'White',
  pink: 'Pink',
  light_blue: 'Light Blue',
  brown: 'Brown',
  red: 'Red',
  orange: 'Orange',
  yellow: 'Yellow',
  lime: 'Lime',
  green: 'Green',
  cyan: 'Cyan',
  blue: 'Blue',
  purple: 'Purple',
  magenta: 'Magenta'
}

let NATR = {
  blue_ice: 'Blue Ice',
  sand: 'Sand',
  red_sand: 'Red Sand',
  coarse_dirt: 'Coarse Dirt',
  cobblestone: 'Cobblestone',
  tinted_glass: 'Tinted Glass',
  soul_sand: 'Soul Sand',
  soul_soil: 'Soul Soil',
  end_crystal: 'End Crystal'
}

let CMAT = {
  andesite_alloy: 'Andesite Alloy',
  zinc: 'Zinc',
  copper: 'Copper',
  brass: 'Brass',
  rose_quartz: 'Rose Quartz',
  framed_glass: 'Framed Glass',
  precision_mechanism: 'Precision Mechanism',
  sturdy_sheet: 'Sturdy Sheet',
  track: 'Track',
  chocolate: 'Chocolate',
  builders_tea: "Builder's Tea"
}

let PRIMORDIAL_MECHANISMS = {
  terra_mechanism: 'Terra Mechanism',
  gluttony_mechanism: 'Gluttony Mechanism',
  metallurgy_mechanism: 'Metallurgy Mechanism',
  lattice_mechanism: 'Lattice Mechanism',
  umbral_mechanism: 'Umbral Mechanism',
  genesis_mechanism: 'Genesis Mechanism',
  ascendant_mechanism: 'Ascendant Mechanism',
  entropy_mechanism: 'Entropy Mechanism'
}

let compressedBlocks = {
  cobblestone: 'Cobblestone',
  cobbled_deepslate: 'Cobbled Deepslate',
  gravel: 'Gravel',
  sand: 'Sand',
  red_sand: 'Red Sand',
  netherrack: 'Netherrack'
}

ClientEvents.lang('en_us', event => {
  event.addAll('kubejs', {
    "kubejs.tooltip.hold_control": "§8Hold [§r§7Ctrl§r§8]§r §8for Controls§r",
    "kubejs.tooltip.hold_shift": "§8Hold [§r§7Shift§r§8]§r §8for Summary§r",
    "kubejs.tooltip.hold_control.held": "§8Hold [§r§fCtrl§r§8]§r §8for Controls§r",
    "kubejs.tooltip.hold_shift.held": "§8Hold [§r§fShift§r§8]§r §8for Summary§r"
  })
  event.addAll('create', {
    "block.create.hose_pulley.tooltip.summary": "By default, any volume of fluid will be considered bottomless at _*10,000 fluid source blocks_ which would normally require a hole that is _25x25x16_ in volume. That is _Length_ * _Width_ * _Height_ for those who don't know how to calculate volume. Please _DO NOT_ issue a bug report if you have not read the additional text below.",
    "block.create.hose_pulley.tooltip.condition1": "Additional Info",
    "block.create.hose_pulley.tooltip.behaviour1": "*Sometimes some fluids may require _more than 10,000_ fluid source blocks due to Create's Hose Pulley being weird. A hole that is _25x25x17_ in volume fixes this issue. _However_, Hose Pulleys are _unable_ to output _more than 10,050_ fluid source blocks due to a weird bug in Create itself.",
    "item.create.chromatic_compound.tooltip": "CHROMATIC COMPOUND",
    "item.create.chromatic_compound.tooltip.summary": "It seems to have some subtle _hue shifting_... Perhaps it can be changed?",
    "item.create.chromatic_compound.tooltip.condition1": "Uses",
    "item.create.chromatic_compound.tooltip.behaviour1": "Can be thrown into the _light_ or into the _void_ to be transformed into a different material.",
    "item.create.refined_radiance.tooltip": "REFINED RADIANCE",
    "item.create.refined_radiance.tooltip.summary": "After being exposed to _bright light_, it is now in your hands.",
    "block.create.refined_radiance_casing.summary": "Mostly for decorative purposes.",
    "item.create.shadow_steel.tooltip": "SHADOW STEEL",
    "item.create.shadow_steel.tooltip.summary": "No light seems to come from this.",
    "block.create.shadow_steel_casing.summary": "Mostly for decorative purposes.",
    "item.create.raw_zinc.tooltip.summary": "Unrefined, but an _important_ ingredient in everything Create related.",
    "item.create.raw_zinc.tooltip.condition1": "Renewal",
    "item.create.raw_zinc.tooltip.behaviour1": "Has a _chance_ of dropping from _Creepers_ in nugget form.",
    "item.create.zinc_ingot.tooltip.summary": "Now in its _refined_ form, it is now _useful_ to you.",
    "item.create.zinc_ingot.tooltip.condition1": "When combined with a Copper Ingot",
    "item.create.zinc_ingot.tooltip.behaviour1": "Creates _two_ Brass Ingots.",
    "item.create.zinc_ingot.tooltip.condition2": "Renewal",
    "item.create.zinc_ingot.tooltip.behaviour2": "Has a _chance_ of dropping from _Creepers_ in nugget form.",
    "item.create.zinc_nugget.tooltip.summary": "Now _renewable_ from Creepers as a potential loot drop.",
    "block.create.item_vault.tooltip.summary": "In addition to being a large, shared inventory, the Item Vault can't be destroyed by _any_ kind of explosion. Your valueables are _guaranteed_ to be safe."
  })
  if (Platform.isLoaded('universalbonemeal')) {
    event.addAll('kubejs', {
      "kubejs.bone_meal.tooltip.summary": "Used for accelerating the growth of plants. However, it can now universally bone meal a lot more things compared to before!",
      "kubejs.bone_meal.tooltip.condition1": "On right click on plants or crops:",
      "kubejs.bone_meal.tooltip.behaviour1": "Accelerates growth, self explanatory.",
      "kubejs.bone_meal.tooltip.condition2": "On right click on grass blocks:",
      "kubejs.bone_meal.tooltip.behaviour2": "Generates flowers and grass.",
      "kubejs.bone_meal.tooltip.condition3": "On right click on Sea Pickles on living coral blocks:",
      "kubejs.bone_meal.tooltip.behaviour3": "Grows additional Sea Pickles."
    })
  }
  if (Platform.isLoaded('salt')) {
    event.addAll('kubejs', {
      "kubejs.salt.tooltip.summary": "Food can now be salted to improve the _taste_ and add _nutrition_.",
      "kubejs.salt.tooltip.condition1": "Usage",
      "kubejs.salt.tooltip.behaviour1": "Combine with food in the crafting grid tagged with the _'salt:can be salted'_ tag. Multiple mods, including _Farmer's Delight_ are _natively supported_.",
      "kubejs.salt.tooltip.condition2": "Acquisition",
      "kubejs.salt.tooltip.behaviour2": "Rock salt can generate underground in _dripstone caves_, the _ocean_ and _beach biomes_. When harvested, _Rock Salt Ore_ will drop _Raw Rock Salt_ which is then _crafted_ into _Salt_.",
      "kubejs.salt.tooltip.condition3": "Renewal",
      "kubejs.salt.tooltip.behaviour3": "Salt can be obtained by _growing_ your own Salt Crystals or by the _evaporation_ of water in a cauldron.",
      "kubejs.salt.tooltip.condition4": "Additional Usage",
      "kubejs.salt.tooltip.behaviour4": "Salt blocks will _melt_ adjacent ice and snow blocks. Ice and snow can also be _melted_ by _sprinkling salt_ over them."
    })
  }
  if (!Platform.isLoaded('textanimator')) {
    event.addAll('kubejs', {
      "item.kubejs.dormant_singularity_core": "§dDormant Singularity Core",
      "item.kubejs.awakened_singularity_core": "§dAwakened Singularity Core",
      "item.kubejs.final_sand_paper": "§dFinal Sand Paper",
      "item.kubejs.denied_result": "§dDenied Result",
      "item.kubejs.errored_result": "§4Errored Result",
      "item.kubejs.removed_item": "§4Removed Item",
      "block.kubejs.molten_iron": "§cMolten Iron",
      "block.kubejs.molten_gold": "§eMolten Gold",
      "block.kubejs.molten_copper": "§6Molten Copper",
      "block.kubejs.molten_zinc": "§3Molten Zinc",
      "block.kubejs.molten_brass": "§eMolten Brass",
      "block.kubejs.molten_netherite": "§8Molten Netherite",
      "item.kubejs.final_pickaxe": "Particula Eversorem",
      "item.kubejs.final_axe": "Natura Exitium",
      "item.kubejs.final_shovel": "Terra Confractus",
      "item.kubejs.final_hoe": "Agricola Manus",
      "item.kubejs.final_sword": "Corevis Ultimatum",
      "item.kubejs.final_scythe": "Scythe of Eternal Oblivion",
      "item.kubejs.final_lance": "Tenebris Punctura",
      "item.kubejs.final_katana": "Celeritas Obumbratio",
      "item.kubejs.crystal_lance": "Crystallus Hasta",
      "item.kubejs.final_helmet": "Conscientia Oculi",
      "item.kubejs.final_chestplate": "Vitale Cordis",
      "item.kubejs.final_leggings": "Universum Motus",
      "item.kubejs.final_boots": "Gravitas Anchoram",
      "block.kubejs.command_block": "Command Block",
      "block.kubejs.chain_command_block": "Chain Command Block",
      "block.kubejs.repeating_command_block": "Repeating Command Block",
      "block.kubejs.null_storage_block": "Null Storage Block",
      "kubejs.minecraft.campfire.tooltip": "Campfires can now regenerate your health. Cozy!",
      "kubejs.minecraft.soul_campfire.tooltip": "Soul Campfires can now regenerate your health. Cozy!",
      "kubejs.kubejs.denied_result.tooltip": "This item now has a different method or methods of crafting.",
      "kubejs.kubejs.removed_item.tooltip": "This item has been removed.",
      "string.kubejs.announcer.rainbow_line_start": "-----------------------------------------------------\n",
      "string.kubejs.announcer.rainbow_line_end": "-----------------------------------------------------",
      "string.kubejs.announcer.shake_line_start": "-----------------------------------------------------\n",
      "string.kubejs.announcer.shake_line_end": "-----------------------------------------------------",
      "string.kubejs.announcer.hold_w_to_ponder": "Remember to hold [w] to Ponder!\n",
      "string.kubejs.announcer.campfire_regeneration": "Campfires now regenerate your health when you are close to them. Cozy!"
    })
    for (let [number, name] of Object.entries(INTEGERS)) {
      event.add(
        'kubejs',
        'item.kubejs.' + number,
        'Number ' + name
      )
    }
    for (let [special, name] of Object.entries(SPECIAL_CHARACTERS)) {
      event.add(
        'kubejs',
        'item.kubejs.' + special,
        name
      )
    }
    event.add(
      'kubejs',
      'item.kubejs.octothorpe',
      'Hashtag'
    )
    if (Platform.isLoaded('constructionwand')) {
      event.add(
        'kubejs',
        'item.kubejs.construction_core_diamond',
        '§bActivated Construction Diamond Crystal'
      )
    }
    if (Platform.isLoaded('paxeljs')) {
      event.add(
        'kubejs',
        'item.kubejs.final_paxel',
        'Omni Figura'
      )
    }
    for (let [material, name] of Object.entries(NATR)) {
      event.add(
        'kubejs',
        'item.kubejs.incomplete_' + material + '_singularity',
        '§7Incomplete ' + name + ' Singularity'
      )
    }
    for (let [material, name] of Object.entries(CMAT)) {
      event.add(
        'kubejs',
        'item.kubejs.incomplete_' + material + '_singularity',
        '§7Incomplete ' + name + ' Singularity'
      )
    }
    // replace with Color.DYE.forEach() on 1902+ as the Colors automatically has all 16 MC colors
    for (let [color, name] of Object.entries(seqDYE)) {
      event.add(
        'kubejs',
        'item.kubejs.incomplete_concrete_' + color + '_singularity',
        '§7Incomplete ' + name + ' Concrete Singularity'
      )
    }
  }
  event.addAll('kubejs', {
    "item.kubejs.potion_base_singularity": "Potion Base Singularity",
    "item.kubejs.blaze_cake_singularity": "Blaze Cake Singularity"
  })
  let discLang = {
    'arlecchino_battle_theme': 'Farabi Hasan Music - Arlecchino Battle Theme Phase 1 & 2 (Fan-Made) | Genshin Impact',
    'bad_deeds': 'Cjbeards - Bad Deeds',
    'bad_deeds_inst': 'Cjbeards - Bad Deeds (Instrumental)',
    'black_white_red': 'Cjbeards - Black White Red',
    'black_white_red_inst': 'Cjbeards - Black White Red (Instrumental)',
    'boo_hoo': 'Cjbeards - Boo Hoo',
    'columbina_battle_theme': 'Farabi Hasan Music - Columbina Battle Phase 1 & 2 (Fan-Made) | Genshin Impact',
    'from_the_shadows': 'Cjbeards - From the Shadows',
    'get_away': 'Cjbeards - Get Away',
    'get_away_inst': 'Cjbeards - Get Away (Instrumental)',
    'heart_of_the_wicked': 'Cjbeards - Heart of the Wicked',
    'mirror_mirror': 'Cjbeards - Mirror Mirror',
    'mirror_mirror_inst': 'Cjbeards - Mirror Mirror (Instrumental)',
    'open_up': 'Cjbeards - Open Up',
    'open_up_inst': 'Cjbeards - Open Up (Instrumental)',
    'pantalone_battle_theme': 'Farabi Hasan Music - Pantalone Double Phase Battle Theme (Fan-Made) | Genshin Impact',
    'pulcinella_battle_theme': 'Farabi Hasan Music - Pulcinella Double Phase Boss Theme (Fan-Made) | Genshin Impact',
    'sandrone_battle_theme': 'Farabi Hasan Music - Sandrone Marionette Double Phase Battle Theme (Fan-Made) | Genshin Impact',
    'silent_night': 'Cjbeards - Silent Night',
    'worst_nightmare': 'Cjbeards - Worst Nightmare',
    'worst_nightmare_inst': 'Cjbeards - Worst Nightmare (Instrumental)'
  }
  for (let [id, txt] of Object.entries(discLang)) {
    event.add('kubejs', `item.kubejs.music_disc_${id}`, 'Music Disc')
    event.add('kubejs', `item.kubejs.music_disc_${id}.desc`, txt)
  }
  /* Not yet implemented.
  event.add('block.kubejs.la_lettre_a_focalors', 'La Lettre a Focalors')
  event.add('block.kubejs.pour_la_justice', 'Pour la Justice')
  */
  // Only generate text below when Text Animator is present.
  if (Platform.isLoaded('textanimator')) {
    event.addAll('kubejs', {
      "item.kubejs.dormant_singularity_core": "§d<shake>Dormant Singularity Core</shake>",
      "item.kubejs.awakened_singularity_core": "§d<shake><rainb>Awakened Singularity Core</rainb></shake>",
      "item.kubejs.final_sand_paper": "§d<rainb>Final Sand Paper</rainb>",
      "item.kubejs.denied_result": "§d<shake>Denied Result</shake>",
      "item.kubejs.errored_result": "§4<shake>Errored Result</shake>",
      "item.kubejs.removed_item": "§4<shake>Removed Item</shake>",
      "item.kubejs.qubit": "<rainb>Qubit</rainb>",
      "block.kubejs.condensed_universal_entropy": "<rainb>Condensed Universal Entropy</rainb>",
      "fluid.kubejs.condensed_universal_entropy": "<rainb>Condensed Universal Entropy</rainb>",
      "item.kubejs.condensed_universal_entropy_bucket": "<rainb>Condensed Universal Entropy Bucket</rainb>",
      "block.kubejs.condensed_universal_order": "<rainb>Condensed Universal Order</rainb>",
      "fluid.kubejs.condensed_universal_order": "<rainb>Condensed Universal Order</rainb>",
      "item.kubejs.condensed_universal_order_bucket": "<rainb>Condensed Universal Order Bucket</rainb>",
      "block.kubejs.shimmer": "<rainb>Shimmer</rainb>",
      "fluid.kubejs.shimmer": "<rainb>Shimmer</rainb>",
      "item.kubejs.shimmer_bucket": "<rainb>Shimmer Bucket</rainb>",
      "item.kubejs.unstable_entropy_particles": "<rainb>Unstable Entropy Particles</rainb>",
      "item.kubejs.stable_entropy_particles": "<rainb>Stable Entropy Particles</rainb>",
      "block.kubejs.molten_iron": "§cMolten Iron",
      "block.kubejs.molten_gold": "§eMolten Gold",
      "block.kubejs.molten_copper": "§6Molten Copper",
      "block.kubejs.molten_zinc": "§3Molten Zinc",
      "block.kubejs.molten_brass": "§eMolten Brass",
      "block.kubejs.molten_netherite": "§8Molten Netherite",
      "item.kubejs.high_entropy_alloy": "<rainb>High Entropy Alloy</rainb>",
      "block.kubejs.high_entropy_alloy_block": "<rainb>Block of High Entropy Alloy</rainb>",
      "item.kubejs.high_entropy_alloy_nugget": "<rainb>High Entropy Alloy Nugget</rainb>",
      "item.kubejs.high_entropy_alloy_sheet": "<rainb>High Entropy Alloy Sheet</rainb>",
      "item.kubejs.high_entropy_alloy_rod": "<rainb>High Entropy Alloy Rod</rainb>",
      "item.kubejs.final_pickaxe": "<rainb>Particula Eversorem</rainb>",
      "item.kubejs.final_axe": "<rainb>Natura Exitium</rainb>",
      "item.kubejs.final_shovel": "<rainb>Terra Confractus</rainb>",
      "item.kubejs.final_hoe": "<rainb>Agricola Manus</rainb>",
      "item.kubejs.final_sword": "<rainb>Corevis Ultimatum</rainb>",
      "item.kubejs.final_scythe": "<rainb>Scythe of Eternal Oblivion<rainb>",
      "item.kubejs.final_lance": "<rainb>Tenebris Punctura</rainb>",
      "item.kubejs.final_katana": "<rainb>Celeritas Obumbratio</rainb>",
      "item.kubejs.crystal_lance": "<rainb>Crystallus Hasta</rainb>",
      "item.kubejs.final_helmet": "<rainb>Conscientia Oculi</rainb>",
      "item.kubejs.final_chestplate": "<rainb>Vitale Cordis</rainb>",
      "item.kubejs.final_leggings": "<rainb>Universum Motus</rainb>",
      "item.kubejs.final_boots": "<rainb>Gravitas Anchoram</rainb>",
      "block.kubejs.command_block": "<rainb>Command Block</rainb>",
      "block.kubejs.chain_command_block": "<rainb>Chain Command Block",
      "block.kubejs.repeating_command_block": "<rainb>Repeating Command Block",
      "block.kubejs.null_storage_block": "<rainb>Null Storage Block</rainb>",
      "kubejs.minecraft.campfire.tooltip": "Campfires can now regenerate your health. <wave>Cozy!</wave>",
      "kubejs.minecraft.soul_campfire.tooltip": "Soul Campfires can now regenerate your health. <wave>Cozy!</wave>",
      "kubejs.kubejs.denied_result.tooltip": "<shake>This item now has a different method or methods of crafting.</shake>",
      "kubejs.kubejs.removed_item.tooltip": "<shake>This item has been removed.</shake>",
      "string.kubejs.announcer.rainbow_line_start": "<rainb>-----------------------------------------------------</rainb>\n",
      "string.kubejs.announcer.rainbow_line_end": "\n<rainb>-----------------------------------------------------</rainb>",
      "string.kubejs.announcer.shake_line_start": "<shake>-----------------------------------------------------</shake>\n",
      "string.kubejs.announcer.shake_line_end": "\n<shake>-----------------------------------------------------</shake>",
      "string.kubejs.announcer.hold_w_to_ponder": "Remember to hold <rainb>[w]</rainb> to Ponder!\n",
      "string.kubejs.announcer.campfire_regeneration": "Campfires now regenerate your health when you are close to them. <wave>Cozy!</wave>"
    })
    for (let [id, name] of Object.entries(compressedBlocks)) {
      event.add(
        'kubejs',
        'block.kubejs.compressed' + id,
        'Compressed' + name
      )
      event.add(
        'kubejs',
        'block.kubejs.double_compressed_' + id,
        '<shake>Double Compressed</shake> ' + name
      )
      event.add(
        'kubejs',
        'block.kubejs.triple_compressed_' + id,
        '<shake>Triple Compressed</shake> ' + name
      )
    }
    for (let [character, name] of Object.entries(LETTERS)) {
      event.add(
        'kubejs',
        'item.kubejs.letter_' + character,
        '<rainb>Letter ' + name + '</rainb>'
      )
    }
    for (let [number, name] of Object.entries(INTEGERS)) {
      event.add(
        'kubejs',
        'item.kubejs.' + number,
        '<rainb>Number ' + name + '</rainb>'
      )
    }
    for (let [special, name] of Object.entries(SPECIAL_CHARACTERS)) {
      event.add(
        'kubejs',
        'item.kubejs.' + special,
        '<rainb>' + name + '</rainb>'
      )
    }
    if (Platform.isLoaded('paxeljs')) {
      event.add(
        'kubejs',
        'item.kubejs.final_paxel',
        '<rainb>Omni Figura</rainb>'
      )
    }
    if (Platform.isLoaded('constructionwand')) {
      event.add(
        'kubejs',
        'item.kubejs.construction_core_diamond',
        '§bActivated Construction Diamond Crystal'
      )
    }
    for (let [material, name] of Object.entries(NATR)) {
      event.add(
        'kubejs',
        'item.kubejs.incomplete_' + material + '_singularity',
        '§7Incomplete ' + name + ' Singularity'
      )
    }
    for (let [material, name] of Object.entries(CMAT)) {
      event.add(
        'kubejs',
        'item.kubejs.incomplete_' + material + '_singularity',
        '§7Incomplete ' + name + ' Singularity'
      )
    }
    // replace with Color.DYE.forEach() on 1902+ as the Colors automatically has all 16 MC colors
    for (let [color, name] of Object.entries(seqDYE)) {
      event.add(
        'kubejs',
        'item.kubejs.incomplete_concrete_' + color + '_singularity',
        '§7Incomplete ' + name + ' Concrete Singularity'
      )
    }
    for (let [mechanism, name] of Object.entries(PRIMORDIAL_MECHANISMS)) {
      event.add(
        'kubejs',
        'item.kubejs.' + mechanism,
        '<rainb>' + name + '</rainb>'
      )
      event.add(
        'kubejs',
        'item.kubejs.incomplete_' + mechanism,
        '<rainb>Incomplete ' + name + '</rainb>'
      )
    }
    for (let [insert, name] of Object.entries(CMD)) {
      event.add(
        'kubejs',
        'block.kubejs.' + insert,
        '<rainb>' + name + '</rainb>'
      )
    }
  }
  event.addAll('create', {
    // create death messages
    "death.attack.create.crush": "%1$s was processed by Crushing Wheels, an unfortunate accident.",
    "death.attack.create.crush.player": "%1$s was thrown into Crushing Wheels by %2$s. The ultimate betrayal by a fellow engineer!",
    "death.attack.create.fan_fire": "%1$s got smoked by an Encased Fan",
    "death.attack.create.fan_fire.player": "%1$s was thrown into a smoker by %2$s. Does anyone smell bacon?",
    "death.attack.create.fan_lava": "%1$s was incinerated by an Encased Fan",
    "death.attack.create.fan_lava.player": "%1$s was thrown into a smelter by %2$s",
    "death.attack.create.mechanical_drill": "%1$s was impaled by a Mechanical Drill",
    "death.attack.create.mechanical_drill.player": "%1$s was thrown in front of a Drill by %2$s",
    "death.attack.create.mechanical_roller": "%1$s was flattened by a Mechanical Roller",
    "death.attack.create.mechanical_roller.player": "%1$s was thrown in front of a Mechanical Roller by %2$s",
    "death.attack.create.mechanical_saw": "%1$s got cut in half by a Mechanical Saw",
    "death.attack.create.mechanical_saw.player": "%1$s was thrown into a Saw by %2$s",
    "death.attack.create.potato_cannon": "%1$s was shot by %2$s's Potato Cannon",
    "death.attack.create.potato_cannon.item": "%1$s was shot by %2$s using %3$s",
    "death.attack.create.cuckoo_clock_explosion": "%1$s was blown up by tampered cuckoo clock",
    "death.attack.create.cuckoo_clock_explosion.player": "%1$s was blown up by tampered cuckoo clock",
    "death.attack.create.run_over": "%1$s was run over by %2$s"
  })
  if (Platform.isLoaded('alexsmobs')) {
    event.addAll('alexsmobs', {
      "alexsmobs.potion.soulsteal.desc": "Your attacks are granted life-steal.",
      "alexsmobs.potion.bug_pheromones.desc": "Makes hostile arthopods neutral to you.",
      "alexsmobs.potion.poison_resistance.desc": "Grants immunity to poison."
    })
  }
  if (Platform.isLoaded('create_bic_bit')) {
    event.addAll('kubejs', {
      "item.kubejs.speculaas_singularity": "Speculaas Singularity",
      "item.kubejs.stroopwafel_singularity": "Stroopwafel Singularity",
      "item.kubejs.oliebollen_singularity": "Oliebollen Singularity",
      "item.kubejs.kroket_singularity": "Kroket Singularity",
      "item.kubejs.bitterballen_singularity": "Bitterballen Singularity",
      "item.kubejs.frikandel_singularity": "Frikandel Singularity",
      "item.kubejs.fries_singularity": "Fries Singularity",
      "item.kubejs.churros_singularity": "Churros Singularity",
      "item.kubejs.stamppot_singularity": "Stamppot Singularity",
      "item.kubejs.bic_bit_singularity": "Create: Bitterballen Singularity"
    })
  }
  if (Platform.isLoaded('eccentrictome')) {
    event.addAll('eccentrictome', {
      "eccentrictome.convert": "Shift + Right-click",
      "eccentrictome.name": "Eccentric Tome (%s)",
      "item.eccentrictome.tome": "Eccentric Tome"
    })
  }
  if (Platform.isLoaded('carryon')) {
    event.add(
      'kubejs',
      'string.kubejs.announcer.spawner_tip',
      'In this modpack, spawners can be crafted with Structure Void. Is Structure Void renewable as well? Yup! Just need to craft Command Blocks or break other in-world spawners. They can also be picked up with the help of Carry On by sneaking and right clicking while BOTH hands are empty when near it.'
    )
  } else {
    event.add(
      'kubejs',
      'string.kubejs.announcer.spawner_tip',
      'In this modpack, spawners can be crafted with Structure Void. Is Structure Void renewable as well? Yup! Just need to craft Command Blocks or break other in-world spawners.'
    )
  }
  if (Platform.isLoaded('createaddition')) {
    event.addAll('createaddition', {
      "createaddition.ponder.liquid_blaze_burner.header": "DISABLED - Liquid Fuel Burning",
      "createaddition.ponder.liquid_blaze_burner.text_1": "DISABLED - Giving the Blaze Burner a Straw",
      "createaddition.ponder.liquid_blaze_burner.text_2": "This feature is disabled.",
      "createaddition.ponder.liquid_blaze_burner.text_3": "This feature is disabled."
    })
  }
})
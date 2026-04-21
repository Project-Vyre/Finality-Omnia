// ignored: false

ClientEvents.lang('en_us', event => {
  event.addAll('kubejs',
    createTooltip('kubejs:denied_result')
      .addSummary('This item now has a %s method or methods of acquisition.')
      .addBehaviour([
        'Purpose',
        'Output result %s. Please refer to either %s, %s or %s for the %s acquisition methods.'
      ])
      .addHighlight(['different', 'denied', 'JEI', 'REI', 'EMI', 'current'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('kubejs:errored_result')
      .addSummary('It somehow still exists, maybe it is being %s and it can be %s through other means?')
      .addHighlight(['suppressed', 'resolved'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('kubejs:lemon')
      .addSummary('Quite sour, is it not?')
      .addBehaviour([
        'When eaten',
        'The sourness causes the screen to uhhh... %s for a %s amount of time.'
      ])
      .addHighlight(['shrink', 'short'])
      .build()
  )
  /**
   * ENTROPY RELATED
   */
  event.addAll('kubejs',
    createTooltip('kubejs:unstable_entropy_particles')
      .addSummary('It appears that it needs to be %s first by something that is %s cold.')
      .addBehaviour([
        'Acquisition',
        'Can only be created by mixing many different materials together.'
      ])
      .addHighlight(['stabilized', 'very'])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('kubejs:stable_entropy_particles')
      .addSummary('Can now be molded into other forms that may be more useful.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('kubejs:high_entropy_alloy_nugget')
      .addSummary('A nugget of alloy that seems to be constantly changing shape, awaiting your instruction.')
      .addBehaviour([
        'Acquisition',
        'Can only be made from combining many different materials consolidated with %s.'
      ])
      .addHighlight(['Stable Entropy Particles'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('kubejs:high_entropy_alloy')
      .addSummary('Highly sought after... You also notice that the lighting seems to be rather odd on this material.')
      .addBehaviour([
        'Usage',
        'Used in blocks and items that %s.'
      ])
      .addHighlight(['break reality'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('kubejs:deconstructor')
      .addSummary('Think of it as an %s. Please don\'t ask %s this exists.')
      .addBehaviour([
        'On R-Click on a block',
        'Depending on the block, it will essentially %s if applicable.'
      ])
      .addBehaviour([
        'When given to a Deployer',
        'With precision it is now able to %s items and blocks.'
      ])
      .addBehaviour([
        'Additional Info',
        'You may need to %s doors once they have been %s by the %s.'
      ])
      .addHighlight([
        'Undo Button',
        'why',
        '[Ctrl] + [Z]',
        'deconstruct',
        're-place',
        'Ctrl + Z\'d',
        'Deconstructor'
      ])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('kubejs:reconstructor')
      .addSummary('Think of it as a %s. Please don\'t ask %s this exists.')
      .addBehaviour([
        'On R-Click on Deepslate',
        'Converts Deepslate into Bedrock. Utilize the Deconstructor to convert it back.'
      ])
      .addHighlight(['Redo Button', 'why'])
      .build()
  )
  // COMMAND BLOCKS
  event.addAll('kubejs',
    createTooltip('kubejs:command_block')
      .addSummary('Not actually a true command block, but it can still do %s.')
      .addHighlight(['certain things'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('kubejs:chain_command_block')
      .addSummary('Not actually a true command block, but it can still do %s.')
      .addHighlight(['certain things'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('kubejs:repeating_command_block')
      .addSummary('Not actually a true command block, but it can still do %s.')
      .addHighlight(['certain things'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('kubejs:final_pickaxe')
      .addSummary('Its name roughly translates into the %s. Tear through mountains without a care in the world. P.S: Flavor text for later functions... hopefully.')
      .addBehaviour([
        'On R-Click',
        'Summons %s with some velocity.'
      ])
      .addHighlight(['Particle Destroyer', 'lit TNT'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('kubejs:final_axe')
      .addSummary('Its name roughly translates into %s. Deforestation manifested.')
      .addBehaviour([
        'On Sneak + R-Click',
        'Summons %s below entities and applies Slowness.'
      ])
      .addHighlight(['Nature\'s Destruction', 'Evoker Fangs'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('kubejs:final_shovel')
      .addSummary('Terraform with ease.')
      .build()
  )
  event.addAll('kubejs',
    createTooltip('kubejs:final_hoe')
      .addSummary('Its name roughly translates into %s. Life and death in one. Farm for eternity.')
      .addHighlight(['Farmer\'s Hands'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('kubejs:final_sword')
      .addSummary('Its current name roughly translates into %s. Wield the power of the event horizon in your hands.')
      .addBehaviour([
        'On R-Click',
        'Summons a lightning bolt on the foe\'s location.'
      ])
      .addBehaviour([
        'On held R-Click',
        '%s the enemy repeatedly.'
      ])
      .addBehaviour([
        'Caution!',
        'Don\'t %s hit your friends!'
      ])
      .addBehaviour([
        'Additional Info',
        'Strangely, you remember wielding it in a different universe where it went by the name %s instead.'
      ])
      .addHighlight(['Power Ultimatum', 'Detonates', 'accidentally', 'Gran Faust'])
      .build()
  )
})
// requires: pickletweaks

ClientEvents.lang('en_us', event => {
  event.addAll('minecraft',
    createTooltip('minecraft:wooden_pickaxe')
      .addSummary('You can now %s tools with the material that they were made with in your crafting grid.')
      .addBehaviour([
        'Additonal Info',
        'This also applies to %s, %s and other tools as well, wherever applicable.'
      ])
      .addHighlight([
        'repair',
        'Diamond',
        'Netherite'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:stone_pickaxe')
      .addSummary('You can now %s tools with the material that they were made with in your crafting grid.')
      .addBehaviour([
        'Additonal Info',
        'This also applies to %s, %s and other tools as well, wherever applicable.'
      ])
      .addHighlight([
        'repair',
        'Diamond',
        'Netherite'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:iron_pickaxe')
      .addSummary('You can now %s tools with the material that they were made with in your crafting grid.')
      .addBehaviour([
        'Additonal Info',
        'This also applies to %s, %s and other tools as well, wherever applicable.'
      ])
      .addHighlight([
        'repair',
        'Diamond',
        'Netherite'
      ])
      .build()
  )
})
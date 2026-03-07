// requires: pickletweaks

ClientEvents.lang('en_us', event => {
  event.addAll('minecraft',
    createTooltip('minecraft:wooden_pickaxe')
      .addSummary('You can now repair tools with the material that they were made with in your crafting grid.')
      .addBehaviour([
        'Additional Info',
        'This also applies to Diamond, Netherite and other tools as well, wherever applicable.'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:stone_pickaxe')
      .addSummary('You can now repair tools with the material that they were made with in your crafting grid.')
      .addBehaviour([
        'Additional Info',
        'This also applies to Diamond, Netherite and other tools as well, wherever applicable.'
      ])
      .build()
  )
  event.addAll('minecraft',
    createTooltip('minecraft:iron_pickaxe')
      .addSummary('You can now repair tools with the material that they were made with in your crafting grid.')
      .addBehaviour([
        'Additonal Info',
        'This also applies to Diamond, Netherite and other tools as well, wherever applicable.'
      ])
      .build()
  )
})
// requires: arknights_endfield

ClientEvents.lang('en_us', event => {
  event.addAll('kubejs',
    createTooltip('arknights_endfield:portable_originium_rig')
      .addSummary('This portable mining rig can extract Orignium from Originium mineral veins. It is %s by the Originium that it mines.')
      .addBehaviour([
        'Additional Info',
        'Can\'t mine anything harder than Originium.'
      ])
      .addHighlight(['self powered'])
      .build()
  )
  event.addAll('kubejs',
    createTooltip('arknights_endfield:electric_mining_rig')
    .addSummary('This mining rig requires power to extract from mineral veins. It is required to use %s placed nearby.')
    .addBehaviour([
      'Additional Info',
      'Can\'t mine %s.'
    ])
    .addHighlight(['Electric Pylons', 'Ferrium'])
    .build()
  )
  event.addAll('kubejs',
    createTooltip('arknights_endfield:electric_mining_rig_mk_ii')
    .addSummary('This mining rig requires power to extract from mineral veins. It is required to use %s placed nearby.')
    .addBehaviour([
      'Additional Info',
      'Can\'t mine %s.'
    ])
    .addHighlight(['Electric Pylons', 'Cuprium'])
    .build()
  )
})
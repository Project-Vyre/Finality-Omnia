// ignored: false

ClientEvents.lang('en_us', event => {
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
})
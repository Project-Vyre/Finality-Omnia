// requires: lightingwand
// ignored: false

ClientEvents.lang('en_us', event => {
  event.addAll('kubejs',
    createTooltip('lightingwand:wand')
      .addSummary('A wand that places %s light blocks.')
      .addBehaviour([
        'On R-Click',
        'Shoots out a projectile that places invisible light blocks on impact with a block. If directly interacting with a block, it just places the light source.'
      ])
      .addBehaviour([
        'Additional Info - Clearing Light Sources',
        'Hold the wand in your hand and left click to clear light sources. Light sources will be %s through the use of colored particles.'
      ])
      .addHighlight(['invisible', 'revealed'])
      .build()
  )
})
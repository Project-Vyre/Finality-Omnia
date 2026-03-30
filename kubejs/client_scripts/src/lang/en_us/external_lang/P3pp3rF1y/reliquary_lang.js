// requires: reliquary
// ignored: false

ClientEvents.lang('en_us', event => {
  event.addAll(
    'kubejs',
    createTooltip('reliquary:holy_hand_grenade')
      .addSummary('A %s explosive that doesn\'t break blocks or hurt the wielder.')
      .addBehaviour([
        'The Fine Text',
        'Certain mobs don\'t get hurt by this explosive.'
      ])
      .addHighlight(['powerful'])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:shears_of_winter')
      .addSummary('Shears that can harvest with the power of the cold air.')
      .addBehaviour([
        'On L-Click',
        'Harvest %s blocks like usual.'
      ])
      .addBehaviour([
        'On held R-Click',
        'Shears in a large area of effect around the player.'
      ])
      .addHighlight(['individual'])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/exorcism_bullet')
      .addSummary('Highly effective against the %s.')
      .addHighlight(['Undead'])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/blaze_bullet')
      .addSummary('Deals only %s damage.')
      .addBehaviour([
        'Additional Info',
        'Obviously does %s work against Blazes or other mobs made of the fire element.'
      ])
      .addHighlight(['fire', 'not'])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/ender_bullet')
      .addSummary('Pierces %s enemies in addition to %s targets.')
      .addBehaviour([
        'Additional Info',
        '%s projectile speed compared to Seeker Shots and %s tracking.'
      ])
      .addHighlight(['through', 'seeking', 'Faster', 'tighter'])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/concussive_bullet')
      .addSummary('Small AoE damage.')
      .addBehaviour([
        'Additional Info',
        'Also %s blocks upon contact.'
      ])
      .addHighlight(['destroys'])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/buster_bullet')
      .addSummary('Large AoE damage.')
      .addBehaviour([
        'Additional Info',
        'Also %s blocks upon contact.'
      ])
      .addHighlight(['destroys'])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/seeker_bullet')
      .addSummary('Seeks targets.')
      .addBehaviour([
        'Additional Info',
        '%s projectile speed and loose tracking compared to %s.'
      ])
      .addHighlight(['Slow', 'Ender Shots'])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/sand_bullet')
      .addSummary('%s targets.')
      .addBehaviour([
        'Additional Info',
        'Also %s Creepers.'
      ])
      .addHighlight(['Blinds', 'irritates'])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/storm_bullet')
      .addSummary('Stronger during %s.')
      .addBehaviour([
        'Additional Info',
        'Also %s Creepers... I\'ll leave you to deal with that.'
      ])
      .addHighlight('thunder storms', 'charges')
      .build()
  )
})
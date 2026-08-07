// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'create',
    createTooltip('create:empty_blaze_burner')
      .addSummary('Seems like _something_ is missing...')
      .addBehaviour([
        'When lit',
        'Behaves like a _smoking_ catalyst for use with Encased Fans.'
      ])
      .addBehaviour([
        'On R-Click with a Soul item',
        'Changes into soulfire. Behaves like a _haunting_ catalyst for use with Encased Fans.'
      ])
      .build()
  )
  event.addAll(
    'create',
    createTooltip('create:blaze_burner')
      .addSummary('The Blaze is now comfortable in its new home.')
      .addBehaviour([
        'Fan Catalyst - Smoking',
        'When not fed, the Blaze acts as a _smoking_ catalyst for use with Encased Fans.'
      ])
      .addBehaviour([
        'Fan Catalyst - Blasting',
        'When fed, the Blaze acts as a _blasting_ catalyst for use with Encased Fans'
      ])
      .build()
  )
  event.addAll(
    'create',
    createTooltip('create:experience_block')
      .addSummary('Makes netherite, iridium and high entropy alloy tools _unbreakable_ at the cost of resetting back to their default state.')
      .build()
  )
  event.addAll('create', {
    "item.create.wrench.tooltip.condition3": "On R-Click on belt end",
    "item.create.wrench.tooltip.behaviour3": "Safely _shortens_ a Mechanical Belt _without breaking_ its entire length. _DO NOT_ sneak while doing this unless if you intend on picking up the full belt.",
    "item.create.wrench.tooltip.condition4": "On R-Click on extra shafts inside belts",
    "item.create.wrench.tooltip.behaviour4": "Safely _removes_ the extra shaft _without breaking_ the entire belt.",
    "block.create.seat.tooltip": "SEAT",
    "block.create.seat.tooltip.summary": "Sit yourself down and enjoy the ride! Will anchor a player onto a _moving contraption_. Great for static furniture too! Comes in a variety of colours.",
    "block.create.seat.tooltip.condition1": "R-Click on Seat",
    "block.create.seat.tooltip.behaviour1": "Sits the player on the _Seat_. Press _[Shift]_ to leave the _Seat_.",
    "item.create.blaze_cake.tooltip": "BLAZE CAKE",
    "item.create.blaze_cake.tooltip.summary": "A delicious treat for your hard-working _Blaze Burners_. Gets them all fired up!"
  })
  event.addAll(
    'create',
    createTooltip('create:hose_pulley')
      .addSummary('By default, any volume of fluid will be considered bottomless at _*10,000 fluid source blocks_ which would normally require a hole that is _25x25x16_ in volume. That is _Length_ * _Width_ * _Height_ for those who don\'t know how to calculate volume. Please _DO NOT_ issue a bug report if you have not read the additional text below.')
      .addBehaviour([
        'Additional Info',
        '*Sometimes some fluids may require _more than 10,000_ fluid source blocks due to Create\'s Hose Pulley being weird. A hole that is _25x25x17_ in volume fixes this issue. _However_, Hose Pulleys are _unable_ to output _more than 10,050_ fluid source blocks due to a weird bug in Create itself.'
      ])
      .build()
  )
})
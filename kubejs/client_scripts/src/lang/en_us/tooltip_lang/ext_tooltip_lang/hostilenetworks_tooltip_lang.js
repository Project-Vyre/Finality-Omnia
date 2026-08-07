// requires: hostilenetworks

ClientEvents.lang('en_us', event => {
  event.addAll('kubejs',
    createTooltip('hostilenetworks:prediction_matrix')
      .addSummary('Obtained from %s a Quintuple Condensed Prediction Matrix five times.')
      .addHighlight([
        'decompressing'
      ])
      .build()
  )
})
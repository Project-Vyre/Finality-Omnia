// requires: hostilenetworks

StartupEvents.registry('item', event => {
  event.create('hostilenetworks:quintuple_condensed_prediction_matrix')
    .texture('hostilenetworks:item/prediction_matrix')
    .color(0, 0x333333)
  event.create('hostilenetworks:quadruple_condensed_prediction_matrix')
    .texture('hostilenetworks:item/prediction_matrix')
    .color(0, 0x515151)
  event.create('hostilenetworks:triple_condensed_prediction_matrix')
    .texture('hostilenetworks:item/prediction_matrix')
    .color(0, 0x6B6B6B)
  event.create('hostilenetworks:double_condensed_prediction_matrix')
    .texture('hostilenetworks:item/prediction_matrix')
    .color(0, 0x898989)
  event.create('hostilenetworks:condensed_prediction_matrix')
    .texture('hostilenetworks:item/prediction_matrix')
    .color(0, 0xADADAD)
})
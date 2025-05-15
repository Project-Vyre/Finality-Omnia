// requires: sanitydim
// requires: entityjs
// ignored: false

EntityJSEvents.attributes(event => {
  event.modify('sanitydim:rotting_stalker', attribute => {
    attribute.add('minecraft:generic.armor', 100)
  })
  event.modify('sanitydim:sneaking_terror', attribute => {
    attribute.add('minecraft:generic.armor', 1000)
    attribute.add('minecraft:generic.max_health', 1400)
  })
})
// requires: entityjs
// ignored: false

EntityJSEvents.attributes(event => {
  event.modify('minecraft:ender_dragon', attributes => {
    attributes.add('minecraft:generic.max_health', 1024)
  })
})
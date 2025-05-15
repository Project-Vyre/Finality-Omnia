// requires: easy_villagers

ServerEvents.recipes(event => {
  event.remove([
    { output: 'easy_villagers:iron_farm' }
  ])
})
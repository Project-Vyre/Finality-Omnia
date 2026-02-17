// requires: amendments
// requires: create

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', 'amendments:wall_lantern')
})
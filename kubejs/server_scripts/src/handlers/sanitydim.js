// requires: sanitydim

EntityEvents.spawned(event => {
  switch (event.entity.type) {
    case 'sanitydim:rotting_stalker':
      event.entity.setInvulnerable(true)
      break;

    case 'sanitydim:sneaking_terror':
      event.entity.setInvulnerable(true)
      break;

    default:

      break;
  }
})
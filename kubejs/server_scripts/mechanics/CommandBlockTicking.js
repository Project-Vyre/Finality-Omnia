// ignored: true

let CMD = [
    'command_block',
    'chain_command_block',
    'repeating_command_block'
]

BlockEvents.blockEntityTick(event => {
    let entity = event.block.entity;
    if (entity = CMD) {
        if (entity.inventory.insertItem(event.cycle % 2 === 0, ))
    }
})
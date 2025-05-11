// ignored: false

ItemEvents.tooltip(event => {
  if (Platform.isLoaded('pickletweaks')) {
    event.addAdvanced('minecraft:wooden_pickaxe', (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, [
          Text.of('Hold ').gold(),
          Text.of('[Shift] ').yellow(),
          Text.of('to see more info.').gold()
        ])
      } else {
        text.add(1, [
          Text.of('You can now ').white(),
          Text.of('repair ').green().bold(true),
          Text.of('tools with the material they are made of in your ').white(),
          Text.of('crafting grid').gold(),
          Text.of('.').white()
        ])
        text.add(2, [
          Text.of('If you are wondering.. yes, this also applies to ').white(),
          Text.of('Diamond ').aqua(),
          Text.of('and ').white(),
          Text.of('Netherite ').darkGray(),
          Text.of('and other tools as well.').white()
        ])
        text.add(3, [
          'This hint will only show up on wooden, stone and iron pickaxes, so try to remember this!'
        ])
      }
    })
    event.addAdvanced('minecraft:stone_pickaxe', (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, [
          Text.of('Hold ').gold(),
          Text.of('[Shift] ').yellow(),
          Text.of('to see more info.').gold()
        ])
      } else {
        text.add(1, [
          Text.of('You can now ').white(),
          Text.of('repair ').green().bold(true),
          Text.of('tools with the material they are made of in your ').white(),
          Text.of('crafting grid').gold(),
          Text.of('.').white()
        ])
        text.add(2, [
          Text.of('If you are wondering.. yes, this also applies to ').white(),
          Text.of('Diamond ').aqua(),
          Text.of('and ').white(),
          Text.of('Netherite ').darkGray(),
          Text.of('and other tools as well.').white()
        ])
        text.add(3, [
          'This hint will only show up on wooden, stone and iron pickaxes, so try to remember this!'
        ])
      }
    })
    event.addAdvanced('minecraft:iron_pickaxe', (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, [
          Text.of('Hold ').gold(),
          Text.of('[Shift] ').yellow(),
          Text.of('to see more info.').gold()
        ])
      } else {
        text.add(1, [
          Text.of('You can now ').white(),
          Text.of('repair ').green().bold(true),
          Text.of('tools with the material they are made of in your ').white(),
          Text.of('crafting grid').gold(),
          Text.of('.').white()
        ])
        text.add(2, [
          Text.of('If you are wondering.. yes, this also applies to ').white(),
          Text.of('Diamond ').aqua(),
          Text.of('and ').white(),
          Text.of('Netherite ').darkGray(),
          Text.of('and other tools as well.').white()
        ])
        text.add(3, [
          'This hint will only show up on wooden, stone and iron pickaxes, so try to remember this!'
        ])
      }
    })
  }
})
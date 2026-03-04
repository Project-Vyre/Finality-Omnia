// requires: create
// ignored: false

/**
 * @file Adds tooltips without using Create's registry.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ItemEvents.tooltip(event => {
  event.add('kubejs:denied_result', Component.translatable('kubejs.kubejs.denied_result.tooltip').red())
  event.add('kubejs:removed_item', Component.translatable('kubejs.kubejs.removed_item.tooltip').red())
  event.add('minecraft:fletching_table', Text.gold('Now has a purpose and can actually make arrows!'))
  /**
   text.add(1, Component.translatable(kjsHoldShift))
    } else {
      text.add(1, Component.translatable(kjsHoldShiftHeld))
   */
  event.addAdvanced('extendedcrafting:handheld_table', (item, advanced, text) => {
    text.add(1, Text.gray('You never have to use a Crafting Table block again!'))
    text.add(2, Text.gray('It is literally a hand held Crafting Table, what more can you ask for?'))
  })
  if (Platform.isLoaded('universalbonemeal')) {
    kjsBoneMealTooltip(event)
  }
  if (Platform.isLoaded('alexsmobs')) {
    event.add('minecraft:carved_pumpkin', Text.gray('Used to scare away crows from your crops.'))
  }
  if (Platform.isLoaded('cloudstorage')) {
    event.add('cloudstorage:balloon_bit', Text.gray('With the power of the crafting table, you can make a new balloon from these pieces.'))
    event.addAdvanced('cloudstorage:cloud_chest', (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, [
          Text.of('Hold ').darkGray(),
          Text.of('[Shift] ').gray(),
          Text.of('for more info.').darkGray()
        ])
      } else {
        text.add(1, [
          Text.of('Your very own ').gray(),
          Text.of('private ').aqua(),
          Text.of('cloud chest.').gray()
        ])
        text.add(2, [
          Text.of('Right click with a ').gray(),
          Text.of('normal balloon ').red(),
          Text.of('to set the channel that you want to access from the cloud.').gray()
        ])
        text.add(3, [
          Text.of('To change channels, right click with a ').gray(),
          Text.of('normal balloon ').red(),
          Text.of('in hand to safely remove the already connected balloon without it floating away.').gray()
        ])
        text.add(4, [
          Text.of('To ').gray(),
          Text.of('add ').green(),
          Text.of('more storage simply attach a balloon to a regular chest to send it up to the sky, literally.').gray()
        ])
      }
    })
    event.addAdvanced('cloudstorage:static_cloud_chest', (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, [
          Text.of('Hold ').darkGray(),
          Text.of('[Shift] ').gray(),
          Text.of('for more info.').darkGray()
        ])
      } else {
        text.add(1, [
          Text.of('The ').gray(),
          Text.of('publicly accessible ').yellow(),
          Text.of('cloud chest.').gray()
        ])
        text.add(2, [
          Text.of('Right click with a ').gray(),
          Text.of('static charged ').aqua(),
          Text.of('balloon ').red(),
          Text.of('to set the channel that you want to access from the cloud.').gray()
        ])
        text.add(3, [
          Text.of('Right click with a ').gray(),
          Text.of('normal balloon ').red(),
          Text.of('to charge it with static electricity.').gray()
        ])
        text.add(4, [
          Text.of('To change channels, right click with a ').gray(),
          Text.of('normal balloon ').red(),
          Text.of('in hand to safely remove the already connected balloon without it floating away.').gray()
        ])
        text.add(5, [
          Text.of('To ').gray(),
          Text.of('add ').green(),
          Text.of('more storage attach a ').gray(),
          Text.of('static charged balloon ').aqua(),
          Text.of('to regular chests to send up to the sky, literally.').gray()
        ])
      }
    })
  }
  event.addAdvanced('eccentrictome:tome', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').darkPurple(),
        Text.of('[Shift] ').lightPurple(),
        Text.of('to see more info.').darkPurple()
      ])
    } else {
      text.add(1, Text.of('<rainb>Condenses many tools and books into one.</rainb>').bold(true))
      text.add(2, Text.white('Elegantly <rainb>presents</rainb> all the tools and ooks stored within it upon right click.'))
      text.add(3, Text.white('Simply punch the air to <rainb>convert</rainb> the Eccentric Tome back to its normal form.'))
      text.add(4, [
        Text.of('Diamond ').aqua(),
        Text.of('and ').white(),
        Text.of('Netherite ').gray(),
        Text.of('pickaxes, axes, shovels, hoes, shears, ').white(),
        Text.of('Wand of Symmetry ').gold(),
        Text.of('and ').white(),
        Text.of('Wrench ').gold(),
        Text.of('from ').white(),
        Text.of('Create ').yellow(),
        Text.of('are all allowed.').white(),
      ])
      text.add(5, ['To remove items from the reality breaking pocket universe within this book, simply crouch and drop with the item you want to remove.'])
      text.add(6, Text.red('<shake>DO NOT USE AS A CRAFTING INGREDIENT OR YOU WILL LOSE ALL STORED ITEMS!</shake>').bold(true))
    }
  })
  if (Platform.isLoaded('tempad')) {
    event.addAdvanced('tempad:tempad', (item, advanced, text) => {
      text.add(1, [
        Text.of('Has ').darkPurple(),
        Text.of('unlimited uses. ').lightPurple(),
        Text.of('Enjoy!').darkPurple()
      ])
    })
    event.addAdvanced('tempad:he_who_remains_tempad', (item, advanced, text) => {
      text.add(1, [
        Text.of('The property of ').darkPurple(),
        Text.of('"He Who Remains"').lightPurple()
      ])
    })
  }
  if (Platform.isLoaded('quark')) {
    event.add('quark:abacus', Text.gray('A tool used to measure distance. Right click on a block face to use.'))
  }
  if (Platform.isLoaded('autumnity')) {
    event.add('autumnity:sappy_maple_log', Text.gray('Right click with a glass bottle to extract sap.'))
    event.add('autumnity:sappy_maple_wood', Text.gray('Right click with a glass bottle to extract sap.'))
    event.add('autumnity:foul_berries', Text.gray('Can be fed to turkeys.'))
  }
  if (Platform.isLoaded('backpacked')) {
    event.addAdvanced('backpacked:backpack', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gold(),
          Text.of('[Shift] ').yellow(),
          Text.of('to see more info.').gold()
        ])
      } else {
        text.add(1, [
          Text.of('Press ').white(),
          Text.of('[B] ').gold(),
          Text.of('to open when worn.').white()
        ])
        text.add(2, [
          Text.of('Also highly ').white(),
          Text.of('<rainb>customizable</rainb> ').aqua(),
          Text.of('when satisfying the results of certain challenges.').white()
        ])
      }
    })
  }
  if (Platform.isLoaded('chalk')) {
    event.addAdvanced('#chalk:chalks', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').white(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('Click on the ').gold(),
          Text.of('full side ').yellow(),
          Text.of('of a block to draw a mark.').gold()
        ])
        text.add(2, [
          Text.of('The ').gold(),
          Text.of('direction ').red(),
          Text.of('does matter and will point the arrow in that direction.').gold()
        ])
        text.add(3, [
          Text.of('The ').gold(),
          Text.of('Chalk Box ').green(),
          Text.of('is an easy way to store and use your chalks and can be ').gold(),
          Text.of('right clicked ').green(),
          Text.of('to open its inventory.')
        ])
      }
    })
    event.addAdvanced('chalk:chalk_box', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').white(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('Click on the ').gold(),
          Text.of('full side ').yellow(),
          Text.of('of a block to draw a mark.').gold()
        ])
        text.add(2, [
          Text.of('The ').gold(),
          Text.of('direction ').red(),
          Text.of('does matter and will point the arrow in that direction.').gold()
        ])
        text.add(3, [
          Text.of('The ').gold(),
          Text.of('special slot ').green(),
          Text.of('is used for ').gold(),
          Text.of('glow ink sacs ').aqua(),
          Text.of('to make ').gold(),
          Text.of('glowing ').aqua(),
          Text.of('chalk marks.').gold()
        ])
      }
    })
  }
})
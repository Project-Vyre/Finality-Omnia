// requires: patchouli
// ignored: true

ItemEvents.tooltip(event => {
  // Fix provided by Reveter#1305 on latvian.dev
  event.addAdvanced('patchouli:guide_book', ((item, advanced, text) => {
    if (!item.hasNBT()) return;
    if (item.nbt['patchouli:book'] == 'patchouli:tome_of_finality') {
      text.add(Component.lightPurple("Hi! Please use this book, it's important modpack documentation."))
      text.add(Component.lightPurple("The book also serves as progression tracking in the absence of FTB Quests."))
      text.add(Component.lightPurple("Entries in the Genesis category are spoiler free and are targeted at new players!"))
      text.add(Component.lightPurple("- Overseers of Finality"))
    }
  }))
})
// priority: 1000
// ignored: false

/**
 * @file Color palette for tooltips.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/*
  public static final Palette BLUE = ofColors(ChatFormatting.BLUE, ChatFormatting.AQUA);
  public static final Palette GREEN = ofColors(ChatFormatting.DARK_GREEN, ChatFormatting.GREEN);
  public static final Palette YELLOW = ofColors(ChatFormatting.GOLD, ChatFormatting.YELLOW);
  public static final Palette RED = ofColors(ChatFormatting.DARK_RED, ChatFormatting.RED);
  public static final Palette PURPLE = ofColors(ChatFormatting.DARK_PURPLE, ChatFormatting.LIGHT_PURPLE);
  public static final Palette GRAY = ofColors(ChatFormatting.DARK_GRAY, ChatFormatting.GRAY);

  public static final Palette ALL_GRAY = ofColors(ChatFormatting.GRAY, ChatFormatting.GRAY);
  public static final Palette GRAY_AND_BLUE = ofColors(ChatFormatting.GRAY, ChatFormatting.BLUE);
  public static final Palette GRAY_AND_WHITE = ofColors(ChatFormatting.GRAY, ChatFormatting.WHITE);
  public static final Palette GRAY_AND_GOLD = ofColors(ChatFormatting.GRAY, ChatFormatting.GOLD);
  public static final Palette GRAY_AND_RED = ofColors(ChatFormatting.GRAY, ChatFormatting.RED);
*/

const tooltipPalette = {
  STANDARD: { txt: 0xC7954B, hlt: 0xEEDA78 },
  BLUE: { txt: 0x5555FF, hlt: 0x55FFFF },
  GREEN: { txt: 0x00AA00, hlt: 0x55FF55 },
  YELLOW: { txt: 0xFFAA00, hlt: 0xFFFF55 },
  RED: { txt: 0xAA0000, hlt: 0xFF5555 },
  PURPLE: { txt: 0xAA00AA, hlt: 0xFF55FF },
  GRAY: { txt: 0x555555, hlt: 0xAAAAAA },
  ALL_GRAY: { txt: 0xAAAAAA, hlt: 0xC6C6C6 },
  GRAY_AND_BLUE: { txt: 0xAAAAAA, hlt: 0x5555FF },
  GRAY_AND_WHITE: { txt: 0xAAAAAA, hlt: 0xFFFFFF },
  GRAY_AND_GOLD: { txt: 0xAAAAAA, hlt: 0xFFAA00 },
  GRAY_AND_RED: { txt: 0xAAAAAA, hlt: 0xFF5555 },
  ENTROPY: { txt: 0x9083C6, hlt: 0xD6CCFF }
}
/** @info Standard Create text palette. */
const STANDARD = tooltipPalette.STANDARD
const BLUE = tooltipPalette.BLUE
const GREEN = tooltipPalette.GREEN
const YELLOW = tooltipPalette.YELLOW
const RED = tooltipPalette.RED
const PURPLE = tooltipPalette.PURPLE
/** @info Typically used for common items or building materials. */
const GRAY = tooltipPalette.GRAY
const ALL_GRAY = tooltipPalette.ALL_GRAY
const GRAY_AND_BLUE = tooltipPalette.GRAY_AND_BLUE
const GRAY_AND_WHITE = tooltipPalette.GRAY_AND_WHITE
const GRAY_AND_GOLD = tooltipPalette.GRAY_AND_GOLD
const GRAY_AND_RED = tooltipPalette.GRAY_AND_RED
const ENTROPY = tooltipPalette.ENTROPY
import { defaultTheme } from ".";
import { FONT_SIZES, VARIANTS } from "./constants";

export type DefaultTheme = typeof defaultTheme;

export interface IGlobalStyles {
  theme: DefaultTheme;
}

export type FontSizeType = (typeof FONT_SIZES)[number];

export type VariantType = (typeof VARIANTS)[number];

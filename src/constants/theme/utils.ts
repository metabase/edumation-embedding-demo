import { css, FlattenInterpolation, ThemeProps } from "styled-components";
import { generateMedia } from "styled-media-query";
import { BREAKPOINTS } from "./constants";
import { DefaultTheme } from "./types";

export function getColor(
  theme: DefaultTheme,
  color?: string,
  fallbackColor: string = theme.colors.text.primary,
): string {
  if (color && color.length > 0) {
    if (color[0] === "#") {
      return color;
    } else if (theme.colors[color]) {
      return theme.colors[color];
    } else {
      console.warn(`getColor, color not found: ${color}`);
    }
  }

  return fallbackColor;
}

export function ClearFixMixin(): FlattenInterpolation<
  ThemeProps<DefaultTheme>
> {
  return css`
    &::after {
      clear: both;
      content: "";
      display: table;
    }
  `;
}

export function DisabledMixin(
  isDisabled: boolean | undefined,
): FlattenInterpolation<ThemeProps<DefaultTheme>> {
  return css`
    cursor: ${isDisabled ? "default" : "auto"};
    opacity: ${({ theme }) => (isDisabled ? theme.opacity.disabled : 1)};
    pointer-events: ${isDisabled ? "none" : "auto"};
    user-select: ${isDisabled ? "none" : "auto"};
  `;
}

export function WordBreakMixin(
  wordBreak: boolean | undefined,
): FlattenInterpolation<ThemeProps<DefaultTheme>> {
  return css`
    word-break: ${wordBreak ? "break-all" : "normal"};
    word-wrap: ${wordBreak ? "break-word" : "normal"};
  `;
}

const media = generateMedia(BREAKPOINTS);
export const {
  lessThan: mediaMax,
  greaterThan: mediaMin,
  between: mediaBetween,
} = media;

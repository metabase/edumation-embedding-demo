export const BASE_CSS = `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;   // 1rem = 10px
    line-height: 1.45;
    margin: 0;
    min-height: 100%;
    overflow-x: hidden;
    padding: 0;
    position: relative;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    max-width: 100%;
    vertical-align: bottom;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    vertical-align: bottom;

    &:hover {
      text-decoration: underline;
    }
  }

  img,
  svg {
    max-width: 100%;
    vertical-align: bottom;
  }

  button {
    outline: none;

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      cursor: default;
    }
  }

  iframe {
    border: none;
    outline: none;
    vertical-align: bottom;
    width: 100%;
  }

  pre {
    vertical-align: bottom;
  }

  code {
    display: inline-block;
    max-width: 100%;
    overflow-x: auto;
    vertical-align: bottom;
    white-space: pre;
    word-break: break-all;
    width: 100%;
  }

  select {
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }

  input[type=radio],
  input[type=checkbox] {
    cursor: pointer;

    & + label {
      cursor: pointer;
      user-select: none;
    }

    &:disabled {
      cursor: default;

      & + label {
        cursor: default;
      }
    }
  }

  /* Next app */
  #__next {
    margin: 0;
    min-height: 100%;
    padding: 0;
    position: relative;
    width: 100%;
  }
`;

const BREAKPOINT_EXTRA_SMALL = 320;
const BREAKPOINT_SMALL = 576;
const BREAKPOINT_MEDIUM = 768;
const BREAKPOINT_NORMAL = 992;
const BREAKPOINT_LARGE = 1024;
const BREAKPOINT_EXTRA_LARGE = 1336;
export const BREAKPOINTS = {
  xs: `${BREAKPOINT_EXTRA_SMALL}px`,
  sm: `${BREAKPOINT_SMALL}px`,
  md: `${BREAKPOINT_MEDIUM}px`,
  nr: `${BREAKPOINT_NORMAL}px`,
  lg: `${BREAKPOINT_LARGE}px`,
  xl: `${BREAKPOINT_EXTRA_LARGE}px`,
};

export const VARIANT_PRIMARY = "primary";
export const VARIANT_SECONDARY = "secondary";
export const VARIANT_HIGHLIGHT = "highlight";
export const VARIANT_DANGER = "danger";
export const VARIANTS = [
  VARIANT_PRIMARY,
  VARIANT_SECONDARY,
  VARIANT_HIGHLIGHT,
  VARIANT_DANGER,
] as const;

export const FONT_SIZE_XS = "xs";
export const FONT_SIZE_SM = "sm";
export const FONT_SIZE_DEFAULT = "default";
export const FONT_SIZE_MD = "md";
export const FONT_SIZE_LG = "lg";
export const FONT_SIZE_XL = "xl";
export const FONT_SIZES = [
  FONT_SIZE_XS,
  FONT_SIZE_SM,
  FONT_SIZE_DEFAULT,
  FONT_SIZE_MD,
  FONT_SIZE_LG,
  FONT_SIZE_XL,
] as const;

export const DEFAULT_MAX_WIDTH = BREAKPOINT_MEDIUM - 2 * 32;

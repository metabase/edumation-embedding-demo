import { IGlobalStyles } from "./types";
import { createGlobalStyle } from "styled-components";
import {
  BASE_CSS,
  FONT_SIZE_DEFAULT,
  FONT_SIZE_LG,
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  FONT_SIZE_XL,
  FONT_SIZE_XS,
  VARIANT_DANGER,
  VARIANT_HIGHLIGHT,
  VARIANT_PRIMARY,
  VARIANT_SECONDARY,
} from "./constants";
import { DisabledMixin } from "./utils";

export const defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128],
  borders: {
    basic: "1px solid #F0F0F0",
  },
  animation: {
    duration: {
      mouse: "200ms",
      panel: "400ms",
    },
  },
  buttons: {
    [VARIANT_PRIMARY]: {
      color: "white",
      backgroundColor: "#42307D",
      borderColor: "#42307D",
      borderRadius: "6px",
      fontSize: "14px",
      fontWeight: 500,
      padding: "6px 8px",
      "&::before": {
        borderColor: "#42307D",
      },
      "&:hover": {
        backgroundColor: "#6941C6",
        "&::before": {
          borderColor: "#6941C6",
        },
      },
      "&:disabled": {
        backgroundColor: "#6941C6",
        "&::before": {
          borderColor: "#6941C6",
        },
      },
    },
    [VARIANT_SECONDARY]: {
      color: "#6941C6",
      backgroundColor: "transparent",
      borderColor: "#6941C6",
      "&::before": {
        borderColor: "#6941C6",
      },
      "&:hover": {
        color: "white",
        backgroundColor: "#7F56D9",
        "&::before": {
          borderColor: "#7F56D9",
        },
      },
      "&:disabled": {
        backgroundColor: "transparent",
        borderColor: "#6941C6",
        "&::before": {
          borderColor: "#6941C6",
        },
      },
    },
    [VARIANT_DANGER]: {
      color: "white",
      backgroundColor: "#ED6E6E",
      borderColor: "#ED6E6E",
      "&::before": {
        borderColor: "#ED6E6E",
      },
      "&:hover": {
        backgroundColor: "#ec3939",
        "&::before": {
          borderColor: "#ec3939",
        },
      },
      "&:disabled": {
        backgroundColor: "#ED6E6E",
        "&::before": {
          borderColor: "#ED6E6E",
        },
      },
    },
  },
  banners: {
    [VARIANT_PRIMARY]: {
      color: "#6941C6",
      background: "#edf5fc",
    },
    [VARIANT_HIGHLIGHT]: {
      color: "#4c5773",
      background: "#fef9e6",
      border: "none",
      boxShadow: "none",
    },
    [VARIANT_DANGER]: {
      color: "#4c5773",
      background: "#f9d2d2",
      border: "none",
      boxShadow: "none",
    },
  },
  cards: {
    [VARIANT_PRIMARY]: {
      color: "#6941C6",
      background: "#edf5fc",
    },
    [VARIANT_HIGHLIGHT]: {
      color: "#4c5773",
      background: "#fef9e6",
      border: "none",
      boxShadow: "none",
    },
    [VARIANT_DANGER]: {
      color: "#4c5773",
      background: "#f9d2d2",
      border: "none",
      boxShadow: "none",
    },
  },
  colors: {
    transparent: "transparent",
    white: "white",
    panel: "rgba(0, 0, 0, .15)",
    darkPanel: "rgba(0, 0, 0, .30)",
    disabledPanel: "rgba(239, 239, 239, 0.3)",
    grey: "#A9AEBC",
    lightGrey: "rgb(169, 174, 188, .95)",
    mediumGrey: "#667085",
    darkGrey: "#22242B",
    black: "black",
    border: {
      light: "#f0f0f0",
      medium: "#f2f4f7",
    },
    text: {
      primary: "#232C42",
      secondary: "#4C5773",
      medium: "#949AAB",
      light: "#74838f",
    },
    link: {
      light: "#7F56D9",
      dark: "#6941C6",
    },

    brand: "#6941C6",
    disabled: "#C6C9D2",
    brandLight: "#7F56D9",
    brandDark: "#42307D",
    success: "#84BB4C",
    progress: "#F9CF48",
    attention: "#EB8542",
    danger: "#ED6E6E",
    error: "#ec3939",
    background: {
      default: "white",
      light: "#fcfaff",
      brandLight: "#edf5fc",
      brandMedium: "#eef6fd",
      brandDark: "#1c6bb0",
      medium: "#F9FAFB",
      dark: "#90c1ec",
      highlight: "#FEF9E8",
    },
    health: {
      loading: "#F9CF48",
      // subscription
      // trial, active, cancelled
      "cancellation-pending": "#F9CF48",
      "past-due": "#F9CF48",
      unpaid: "#ED6E6E",
      // instance health
      healthy: "#84BB4C",
      unhealthy: "#ED6E6E",
      provisioning: "#F9CF48",
      "waiting for dns": "#F9CF48",
      // instance status
      creating: "#F9CF48",
      suspending: "#F9CF48",
      running: "#84BB4C",
      unknown: "#F9CF48",
      dnsfail: "#ED6E6E",
      "updating-version": "#F9CF48",
      starting: "#F9CF48",
      stopping: "#F9CF48",
      stopped: "#ED6E6E",
      deleting: "#F9CF48",
      deleted: "#74838f",
      cancelled: "#ED6E6E",
      "delete-failed": "#ED6E6E",
      snapshot: "#F9CF48",
      "changing-subscription-plan": "#F9CF48",
      restore: "#F9CF48",
      error: "#ec3939",
      suspended: "#74838f",
      // migration status
      initialized: "#F9CF48",
      "snapshot-uploaded": "#F9CF48",
      migrating: "#F9CF48",
      "migration-failed": "#ED6E6E",
      completed: "#84BB4C",
      // action result code
      ok: "#84BB4C",
      "timed out": "#F9CF48",
      "timed-out": "#F9CF48",
      failed: "#ED6E6E",
      // maintenance
      true: "#84BB4C",
      false: "#ED6E6E",
      // user status
      active: "#84BB4C",
      disabled: "#ED6E6E",
      "gdpr-deleted": "#ED6E6E",
      // quote status
      created: "#74838f",
      accepted: "#F9CF48",
      signed: "#84BB4C",
      rejected: "#ED6E6E",
      // token state
      trial: "#84BB4C",
      valid: "#84BB4C",
      expired: "#ED6E6E",
      "expired-trial": "#ED6E6E",
    },
    invoice: {
      // invoice status
      draft: "#F9CF48",
      open: "#F9CF48",
      paid: "#84BB4C",
      uncollectible: "#ED6E6E",
      void: "#ED6E6E",
    },
  },
  fonts: {
    default: "Inter, Helvetica Neue, Helvetica, sans-serif",
    interactive: "Lato, Helvetica Neue, Helvetica, sans-serif",
    fallback: "Helvetica Neue, Helvetica, sans-serif",
    size: {
      [FONT_SIZE_XS]: "12px",
      [FONT_SIZE_SM]: "14px",
      [FONT_SIZE_DEFAULT]: "16px",
      [FONT_SIZE_MD]: "18px",
      [FONT_SIZE_LG]: "20px",
      [FONT_SIZE_XL]: "24px",
    },
    weight: {
      thin: 400,
      default: 500,
      bold: 700,
      bolder: 900,
    },
  },
  opacity: {
    background: 0.24,
    disabled: 0.6,
  },
  ui: {
    border: {
      radius: {
        small: "1px",
        medium: "2px",
        default: "4px",
        large: "6px",
        xl: "8px",
        max: "99px",
      },
      width: {
        small: "1px",
        medium: "2px",
        default: "4px",
      },
    },
  },
} as const;

export const GlobalStyle = createGlobalStyle<IGlobalStyles>`
  ${BASE_CSS}

  body {
    background-color: ${({ theme }) => theme.colors.background.default};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: ${({ theme }) => theme.fonts.size.default};
    font-weight: ${({ theme }) => theme.fonts.weight.default};
    line-height: 1.5;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.interactive};
    font-size: ${({ theme }) => theme.fonts.size.default};
  }

  a {
    color: ${({ theme }) => theme.colors.brand};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fonts.size.default};
    max-width: ${({ theme }) =>
      parseInt(theme.fonts.size.default.replace("px", "")) * 37}px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.brandDark};
    font-weight: 900;
    letter-spacing: -0.03em;
  }

  p, ul {
    margin: 1em 0 0.5em 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 1em 0 0.5em 0;

    & + ul {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    padding: 0 0 0 20px;
  }

  input[type=text],
  input[type=number],
  input[type=password],
  input[type=email],
  input[type=search],
  .input,
  .StripeElement,
  textarea,
  select {
    border: 1px solid ${({ theme }) => theme.colors.border.medium};
    border-radius: ${({ theme }) => theme.ui.border.radius.default};
    display: block;
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: 1em;
    padding: 12px 16px;
    width: 100%;
  }

  input[type=checkbox],
  input[type=radio] {
    & + label {
      margin: 0;
      padding-left: 8px;
    }
  }

  input + input {
    margin-top: 8px;
  }

  input:focus,
  select:focus,
  .StripeElement.StripeElement--focus,
  textarea:focus {
    border-color: ${({ theme }) => theme.colors.brand};
    box-shadow: 0 0 0 3px rgba(79, 158, 227, 0.22);
    outline: none;
  }

  textarea {
    overflow: auto;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: #c7cfd4;
  }

  select {
    appearance: none;
    background: right 10px center
      url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2IDIuNTQzTDEzLjc1NC4xNTEgOC4wMDEgNS40OCAyLjI4NyAwIDAgMi4zNTJsNy43MDcgNy4zOTEuMjQuMjU3LjIyLS4yMDR6IiBmaWxsPSIjNzQ4MzhGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=")
      no-repeat #fff;
    border: 1px solid #dce1e4;
    border-radius: ${({ theme }) => theme.ui.border.radius.large};
    display: block;
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: 1em;
    padding: 12px 32px 12px 16px;
    text-overflow: ellipsis;
    width: 100%;
  }

  input:focus,
  select:focus,
  .StripeElement.StripeElement--focus,
  textarea:focus,
  select:focus {
    border-color: ${({ theme }) => theme.colors.brand};
    box-shadow: 0 0 0 3px rgba(79, 158, 227, 0.22);
    outline: none;
  }

  input:disabled,
  textarea:disabled,
  select:disabled {
    ${DisabledMixin(true)}
    background-color: ${({ theme }) => theme.colors.disabledPanel};
  }

  code {
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => theme.ui.border.width.small} solid ${({ theme }) =>
  theme.colors.border.medium};
    border-radius: ${({ theme }) => theme.ui.border.radius.large};
    color: ${({ theme }) => theme.buttons.primary.backgroundColor};
    font-size: 0.825em;
    padding: 12px 32px 12px 16px;
  }

  /* Change Autocomplete styles in Chrome */
  input,
  textarea,
  select {
    &:-webkit-autofill {
      -webkit-text-fill-color: fieldtext;
      border: 1px solid ${({ theme }) => theme.colors.border.medium};
      transition: background-color 5000s ease-in-out 0s;

      &:hover,
      &:focus {
        -webkit-text-fill-color: fieldtext;
        border: 1px solid ${({ theme }) => theme.colors.brand};
        transition: background-color 5000s ease-in-out 0s;
      }
    }
  }
`;

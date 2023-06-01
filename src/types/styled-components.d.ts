import { defaultTheme } from "@constants/theme";
import "styled-components";

type CommonDefaultTheme = typeof defaultTheme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CommonDefaultTheme {}
}

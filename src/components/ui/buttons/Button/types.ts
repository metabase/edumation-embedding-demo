import { VariantType } from "@constants/theme/types";
import { SpaceProps, WidthProps } from "styled-system";

export type ButtonProps = SpaceProps &
  WidthProps & {
    disabled?: boolean;
    variant?: VariantType;
  };

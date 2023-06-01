import { ReactElement } from "react";
import Cross from "@components/ui/icons/Cross";
import { ICloseButtonProps } from "./types";
import { CloseButtonWrapper } from "./CloseButton.styled";
import { defaultTheme } from "@constants/theme";

export default function CloseButton({
  iconColor,
  onClick,
  disabled,
}: ICloseButtonProps): ReactElement {
  return (
    <CloseButtonWrapper onClick={onClick} disabled={disabled}>
      <Cross color={iconColor} />
    </CloseButtonWrapper>
  );
}

CloseButton.defaultProps = {
  iconColor: defaultTheme.colors.brand,
  disabled: false,
};

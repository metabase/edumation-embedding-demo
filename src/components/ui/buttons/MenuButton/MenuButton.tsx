import { ReactElement } from "react";
import { IMenuButtonProps } from "./types";
import { MenuButtonWrapper } from "./MenuButton.styled";
import Burger from "@components/ui/icons/Burger";

export default function MenuButton({
  onClick,
}: IMenuButtonProps): ReactElement {
  return (
    <MenuButtonWrapper onClick={onClick}>
      <Burger color="white" />
    </MenuButtonWrapper>
  );
}

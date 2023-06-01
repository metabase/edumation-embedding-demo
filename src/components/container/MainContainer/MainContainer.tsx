import { ReactElement, PropsWithChildren } from "react";
import { MainContainerWrapper } from "./MainContainer.styled";

export default function MainContainer({
  children,
}: PropsWithChildren): ReactElement {
  return <MainContainerWrapper>{children}</MainContainerWrapper>;
}

import { ImgHTMLAttributes, ReactElement } from "react";
import { TheImageWrapper } from "./ImageWrapper.styled";

export default function ImageWrapper({
  src,
  alt,
}: ImgHTMLAttributes<HTMLImageElement>): ReactElement {
  return (
    <TheImageWrapper>
      <img src={src} alt={alt} />
    </TheImageWrapper>
  );
}

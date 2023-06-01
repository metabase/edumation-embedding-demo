import { ReactElement } from "react";
import { IIconProps } from "../types";

export default function Burger({ color, size }: IIconProps): ReactElement {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <g data-name="Layer 2">
        <g data-name="menu">
          <rect
            width="24"
            height="24"
            transform="rotate(180 12 12)"
            opacity="0"
          />
          <rect x="3" y="11" width="18" height="2" rx=".95" ry=".95" />
          <rect x="3" y="16" width="18" height="2" rx=".95" ry=".95" />
          <rect x="3" y="6" width="18" height="2" rx=".95" ry=".95" />
        </g>
      </g>
    </svg>
  );
}

Burger.defaultProps = {
  color: "currentColor",
  size: 24,
};

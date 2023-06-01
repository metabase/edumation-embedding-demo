import { ILogo } from "./types";
import { ReactElement } from "react";
import { LogoWrapper, LogoIcon } from "./Logo.styled";

export default function Logo({ height, width }: ILogo): ReactElement {
  return (
    <LogoWrapper height={height} width={width}>
      <LogoIcon
        height={height}
        width={width}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_506_19708)">
          <g filter="url(#filter1_d_506_19708)">
            <rect x="24" y="21" width="32" height="32" rx="10" fill="#7F56D9" />
          </g>
          <g filter="url(#filter2_i_506_19708)">
            <rect
              x="29.647"
              y="26.647"
              width="20.7059"
              height="20.7059"
              rx="5"
              fill="#6941C6"
            />
          </g>
          <g filter="url(#filter3_i_506_19708)">
            <rect
              x="33.3447"
              y="37"
              width="9.41177"
              height="9.41177"
              rx="2.5"
              transform="rotate(-45 33.3447 37)"
              fill="#53389E"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_506_19708"
            x="0"
            y="0"
            width="80"
            height="80"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="12" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_506_19708"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_506_19708"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_506_19708"
            x="20"
            y="19"
            width="40"
            height="40"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_506_19708"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_506_19708"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_i_506_19708"
            x="29.647"
            y="26.647"
            width="20.7061"
            height="24.7058"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_506_19708"
            />
          </filter>
          <filter
            id="filter3_i_506_19708"
            x="34.3804"
            y="31.3804"
            width="11.2393"
            height="15.2393"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_506_19708"
            />
          </filter>
        </defs>
      </LogoIcon>
    </LogoWrapper>
  );
}

Logo.defaultProps = {
  width: 80,
  height: 80,
};

import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CopyRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4 15.48H21.24V2.76001L8.52001 2.78401V6.60001H10.08V4.24801L19.68 4.22401V14.016H17.4V15.48ZM2.76001 21.24H15.48V8.52001H2.76001V21.24ZM4.32001 19.776V9.98401H13.92V19.776H4.32001Z"
        fill={color}
      />
    </svg>
  );
}

export default CopyRegular;

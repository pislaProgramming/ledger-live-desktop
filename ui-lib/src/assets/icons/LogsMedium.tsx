import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LogsMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.63989 13.5479H21.3599V11.6279H2.63989V13.5479ZM2.63989 19.0679H16.5599V17.1479H2.63989V19.0679ZM2.63989 9.20388L6.07189 7.06788L2.63989 4.93188V9.20388ZM7.91989 8.02788H21.3599V6.10788H7.91989V8.02788Z"
        fill={color}
      />
    </svg>
  );
}

export default LogsMedium;

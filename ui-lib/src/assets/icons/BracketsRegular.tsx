import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function BracketsRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5599 10.2H21.1199V2.88H13.7999V4.44H19.5599V10.2ZM2.87988 21.096H10.1999V19.536H4.43988V13.776H2.87988V21.096ZM2.87988 10.2H4.43988V4.44H10.1999V2.88H2.87988V10.2ZM13.7999 21.12H21.1199V13.8H19.5599V19.56H13.7999V21.12Z"
        fill={color}
      />
    </svg>
  );
}

export default BracketsRegular;

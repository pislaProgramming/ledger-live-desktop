import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function StarSolidMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0002 2.18408L9.62418 9.55208H1.68018L8.06418 14.2561L5.64018 21.8161L12.0002 17.1601L18.3602 21.8161L15.9122 14.2561L22.3202 9.55208H14.3762L12.0002 2.18408Z"
        fill={color}
      />
    </svg>
  );
}

export default StarSolidMedium;

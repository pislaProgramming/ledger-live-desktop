import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TachometerMediumUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.26004 19.584H19.716C20.844 18.048 21.564 16.08 21.564 14.016C21.564 9.33598 18.18 5.44799 13.716 4.63199V5.49599C17.7 6.28798 20.724 9.81598 20.724 14.016C20.724 15.744 20.172 17.376 19.284 18.744H4.69204C3.80404 17.376 3.27604 15.744 3.27604 14.016C3.27604 9.81598 6.27604 6.28798 10.26 5.49599V4.63199C5.82004 5.44799 2.43604 9.33598 2.43604 14.016C2.43604 16.08 3.13204 18.048 4.26004 19.584ZM11.58 14.016C11.58 14.256 11.748 14.424 11.988 14.424C12.228 14.424 12.42 14.256 12.42 14.016V4.41599H11.58V14.016Z"
        fill={color}
      />
    </svg>
  );
}

export default TachometerMediumUltraLight;

import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TachometerMediumThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.3322 19.308H19.6442C20.6522 17.844 21.3002 15.996 21.3002 14.052C21.3002 9.39599 17.8922 5.55599 13.4282 4.85999V5.33999C17.6282 6.03599 20.8202 9.68399 20.8202 14.052C20.8202 15.804 20.2682 17.46 19.3802 18.828H4.5962C3.7082 17.46 3.1802 15.804 3.1802 14.052C3.1802 9.68399 6.3722 6.03599 10.5482 5.33999V4.85999C6.1082 5.55599 2.7002 9.39599 2.7002 14.052C2.7002 15.996 3.3242 17.844 4.3322 19.308ZM11.7482 14.052C11.7482 14.196 11.8442 14.292 11.9882 14.292C12.1322 14.292 12.2282 14.196 12.2282 14.052V4.69199H11.7482V14.052Z"
        fill={color}
      />
    </svg>
  );
}

export default TachometerMediumThin;

import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TransferLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.0159 12.288L21.3599 7.94398L17.0159 3.59998L16.2719 4.36798L17.7359 5.83198C18.2399 6.33598 18.7679 6.86398 19.2959 7.36798H3.59989V8.51998H19.3199C18.7919 9.02398 18.2399 9.55198 17.7359 10.056L16.2719 11.544L17.0159 12.288ZM2.63989 16.056L6.98389 20.4L7.75189 19.632L6.28789 18.168C5.78389 17.664 5.23189 17.136 4.70389 16.632H20.3999V15.48H4.67989C5.23189 14.952 5.75989 14.448 6.28789 13.92L7.75189 12.456L6.98389 11.688L2.63989 16.056Z"
        fill={color}
      />
    </svg>
  );
}

export default TransferLight;

import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ToolboxThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.12012 19.68H20.8801V10.92L18.6001 8.64001H16.8241V6.09601C16.8241 5.08801 16.0561 4.32001 15.0721 4.32001H8.92812C7.94412 4.32001 7.17612 5.08801 7.17612 6.09601V8.64001H5.40012L3.12012 10.92V19.68ZM3.60012 19.2V14.76H8.28012V16.536H8.76012V14.76H15.2401V16.536H15.7201V14.76H20.4001V19.2H3.60012ZM3.60012 14.28V11.112L5.59212 9.12001H18.4081L20.4001 11.112V14.28H15.7201V12.456H15.2401V14.28H8.76012V12.456H8.28012V14.28H3.60012ZM7.65612 8.64001V6.09601C7.65612 5.28001 8.13612 4.80001 8.92812 4.80001H15.0721C15.8641 4.80001 16.3441 5.28001 16.3441 6.09601V8.64001H7.65612Z"
        fill={color}
      />
    </svg>
  );
}

export default ToolboxThin;

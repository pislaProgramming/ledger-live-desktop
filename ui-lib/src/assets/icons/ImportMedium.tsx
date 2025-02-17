import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ImportMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.64014 20.4001H21.3601V13.2001H19.4401V18.4801H4.56014V13.2001H2.64014V20.4001ZM7.63214 12.2161L12.0001 16.5601L16.3441 12.2161L15.1441 11.0401L14.0881 12.0961C13.7041 12.4801 13.2961 12.9121 12.9121 13.3441V3.6001H11.0881V13.3921C10.6801 12.9361 10.2961 12.5041 9.88814 12.0961L8.80814 11.0401L7.63214 12.2161Z"
        fill={color}
      />
    </svg>
  );
}

export default ImportMedium;

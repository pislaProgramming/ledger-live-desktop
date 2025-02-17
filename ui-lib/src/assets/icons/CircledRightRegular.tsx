import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledRightRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9358 16.368L17.2798 12L12.9358 7.65601L11.9758 8.64001L13.1998 9.86401C13.6558 10.32 14.1358 10.8 14.6398 11.256H6.95977V12.744H14.6878C14.1598 13.224 13.6798 13.68 13.1998 14.16L11.9758 15.384L12.9358 16.368ZM2.75977 12C2.75977 17.16 6.83977 21.24 11.9998 21.24C17.1838 21.24 21.2398 17.04 21.2398 12C21.2398 6.84001 17.1598 2.76001 11.9998 2.76001C6.83977 2.76001 2.75977 6.84001 2.75977 12ZM4.31977 12C4.31977 7.68001 7.70377 4.32001 11.9998 4.32001C16.3198 4.32001 19.6798 7.68001 19.6798 12C19.6798 16.176 16.3198 19.68 11.9998 19.68C7.70377 19.68 4.31977 16.296 4.31977 12Z"
        fill={color}
      />
    </svg>
  );
}

export default CircledRightRegular;

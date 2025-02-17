import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ShoppingBasketUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.95996 20.712H20.04V9.43199H16.8V8.03999C16.8 6.91199 16.488 5.95199 15.888 5.18399C15 4.00799 13.536 3.28799 12 3.28799C10.464 3.28799 8.99996 4.00799 8.11196 5.18399C7.51196 5.95199 7.19996 6.91199 7.19996 8.03999V9.43199H3.95996V20.712ZM4.79996 19.896V10.248H7.19996V12.984H8.03996V10.248H15.96V12.984H16.8V10.248H19.2V19.896H4.79996ZM8.03996 9.43199V7.79999C8.03996 5.61599 9.62396 4.12799 11.832 4.12799H12.192C14.376 4.12799 15.96 5.61599 15.96 7.79999V9.43199H8.03996Z"
        fill={color}
      />
    </svg>
  );
}

export default ShoppingBasketUltraLight;

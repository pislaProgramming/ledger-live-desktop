import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FourCircledFinaThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.168 11.664V13.848H7.96798L11.808 8.064H12.168V11.664ZM4.03198 20.88H11.088C16.056 20.88 19.968 16.848 19.968 12C19.968 7.032 16.056 3.12 11.088 3.12H4.03198V3.6H11.088C15.792 3.6 19.488 7.296 19.488 12C19.488 16.584 15.792 20.4 11.088 20.4H4.03198V20.88ZM7.46398 14.328H12.168V16.464H12.648V14.328H14.16V13.848H12.648V7.584H11.568L7.46398 13.752V14.328Z"
        fill={color}
      />
    </svg>
  );
}

export default FourCircledFinaThin;

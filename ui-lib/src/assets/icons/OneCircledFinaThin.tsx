import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function OneCircledFinaThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.688 11.904V16.464H12.168V7.584H10.896L7.63198 10.632V11.28L11.088 8.064H11.688V11.904ZM4.03198 20.88H11.088C16.056 20.88 19.968 16.848 19.968 12C19.968 7.032 16.056 3.12 11.088 3.12H4.03198V3.6H11.088C15.792 3.6 19.488 7.296 19.488 12C19.488 16.584 15.792 20.4 11.088 20.4H4.03198V20.88Z"
        fill={color}
      />
    </svg>
  );
}

export default OneCircledFinaThin;

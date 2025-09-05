import type { ComponentProps, FC } from "react";

export const BrandingSvg: FC<ComponentProps<"svg">> = (props) => {
  return (
    <>
      <svg
        {...props}
        width="42"
        height="41"
        viewBox="0 0 42 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20.9834" cy="20" r="8" fill="#4E93CB" />
        <circle cx="20.9834" cy="20" r="13.5" stroke="#9AC1E1" />
        <circle
          cx="21.0148"
          cy="20.0315"
          r="19.3745"
          transform="rotate(0.0903325 21.0148 20.0315)"
          stroke="#9AC1E1"
          strokeWidth="1.25107"
        />
      </svg>
    </>
  );
};

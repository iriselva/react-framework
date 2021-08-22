import * as React from "react";

function Arrow({ className, props }) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M8.615 15.46a1.5 1.5 0 011.953-.145l.169.146 12.939 12.938 12.94-12.939a1.5 1.5 0 011.952-.145l.169.146a1.5 1.5 0 01.145 1.952l-.145.169-14 14a1.5 1.5 0 01-1.953.145l-.169-.145-14-14a1.5 1.5 0 010-2.122z"
          fill="#404040"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Arrow;

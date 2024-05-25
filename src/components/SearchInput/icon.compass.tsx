import React from "react";

interface IconProps {
    className?: string;
    fill?: string;
}

function CompassIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="si-glyph si-glyph-compass"
      viewBox="0 -0.5 17 17"
      {...props}
    >
      <g fill={props.fill} fillRule="evenodd">
        <path
          d="M8.021.035c-4.411 0-8 3.588-8 8 0 4.413 3.588 8 8 8 4.411 0 8-3.587 8-8 0-4.412-3.589-8-8-8zM8.001 14C4.69 14 2 11.308 2 8c0-3.307 2.692-6 6-6 3.31 0 6 2.693 6 6 0 3.308-2.69 6-6 6z"
          className="si-glyph-fill"
          transform="translate(1)"
        ></path>
        <path
          d="M5.042 6.021l2.021 3L11.98 11 9.001 7.042 5.042 6.021z"
          className="si-glyph-fill"
          transform="translate(1)"
        ></path>
      </g>
    </svg>
  );
}

export default CompassIcon;
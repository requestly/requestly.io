import React from "react";

import { BORDER_RADIUS } from "../styles/constants";

const Button = ({ children, style }) => (
  <button
    className="customButton"
    style={{
      padding: ".5rem 2.5rem",
      fontWeight: 700,
      background: "#FFFF00",
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
      margin: "3rem",
      pointerEvents: "all",
      ...style,
    }}
  >
    {children}
  </button>
);

export default Button;

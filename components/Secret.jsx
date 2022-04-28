import React from "react";

export default function Secret({ text }) {
  return (
    <p className="secret_wrapper">
      <span>🤫</span>
      Secret: {text}
    </p>
  );
}

import React from "react";
import { DisclaimerIcon } from "./Icons";

export default function Disclaimer({ text, protip, secret, disclaimer }) {
  return (
    <p
      className={`disclaimer_wrapper ${secret ? "secret_wrapper" : ""} ${
        protip ? "protip_wrapper" : ""
      } `}
    >
      <span>
        {disclaimer && <DisclaimerIcon />}
        {secret && "🤫"}
        {protip && "✔️"}
      </span>
      {secret && "Secret: "}
      {protip && "ProTip: "}
      {text}
    </p>
  );
}

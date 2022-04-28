import React from "react";

const Stats = ({ title, des }) => {
  return (
    <div className="">
      <h1>{title}</h1>
      <p className="lead text-center">{des}</p>
    </div>
  );
};

export default Stats;

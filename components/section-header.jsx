import React from "react";

const SectionHeader = ({ title, description, avoidMargin }) => (
  <div className={`row justify-content-center ${!avoidMargin && "mb-5"}`}>
    <div className="col-12 text-center mx-3">
      <h2 className="h1 font-weight-bolder mb-4">{title}</h2>
      <p className="lead">{description}</p>
    </div>
  </div>
);

export default SectionHeader;

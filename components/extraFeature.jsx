import React from "react";

const ExtraFeature = ({ title, description, icon }) => {
  return (
    <div className="d-flex fh-400 col-12 col-lg-4 mb-4 justify-content-center align-items-stretch">
      <div className="card bg-white border-light shadow-soft p-4 text-center">
        <div className="d-flex flex-column align-items-center justify-content-center card-body px-0">
          {icon && (
            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
              <i className={icon}></i>
            </div>
          )}
          <h4 className="mb-4">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExtraFeature;

import React from "react";

const DesktopDownloadCard = ({ title, link, icon }) => {
  const iconClass = `fab fa-${icon}`;

  return (
    <div className="col-auto">
      <div className="card card-stats  bg-dark text-white">
        <a href={link} target="_self">
          <div className="card-body d-flex justify-content-center">
            <div className="row justify-content-center">
              <div className="col-auto align-self-center text-center ">
                <h5 className="card-title text-uppercase text-muted mb-1">
                  Download for
                </h5>
                <span className="fa-2x mb-0">
                  <i className={iconClass}></i> &nbsp; <b>{title}</b>
                </span>
              </div>
              <div className="col-auto d-flex flex-column justify-content-center">
                <div className="icon icon-shape  text-white rounded-circle shadow download-icon">
                  <i className="fas fa-download download-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default DesktopDownloadCard;

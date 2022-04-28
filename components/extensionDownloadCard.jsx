import React from "react";

const ExtensionDownloadCard = ({ heading, title, link, icon }) => {
  const iconClass = `fab fa-${icon}`;

  return (
    <div className="col-auto">
      <div className="card card-stats  bg-dark text-white">
        <a href={link} target="_self">
          <div className="card-body d-flex justify-content-center align-items-center">
            <div className="row d-flex justify-content-center">
              <div className="col-auto d-flex flex-column align-self-center justify-content-center text-center align-items-center">
                <div>
                  <h5 className="card-title text-uppercase text-muted mb-0">
                    {heading.length > 0 ? heading : "Download from"}
                  </h5>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-2">
                  <img src={icon} alt={title} width="50px" />
                  <span className="h2 font-weight-bold mb-0">
                    &nbsp; {title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default ExtensionDownloadCard;

import React from "react";

const ContentCard = ({ title, content, src }) => {
  return (
    <div className="col-lg-6 col-12 mb-4 d-flex">
      <div className="card shadow-soft border-light text-center w-100">
        <div className="card-body p-3">
          <div className="d-flex">
            <img
              alt="testimonialsImg"
              className="rounded mr-4"
              style={{ width: "50px", height: "50px" }}
              src={src}
            />
            <h3 className="card-title pt-2">{title}</h3>
            <img
              className="ml-auto h-100 pt-1"
              src="https://img.icons8.com/color/48/000000/twitter--v1.png"
              alt="twitter img"
            />
          </div>
          <p className="mt-3">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;

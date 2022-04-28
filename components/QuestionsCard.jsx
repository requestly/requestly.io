import React, { useEffect, useState } from "react";

const ContentCard = ({ question, link, mounted }) => {
  return (
    <a
      href={link}
      // className={`m-2 ${mounted ? "w-100" : "w-100"}`}
      className="col-sm-12 col-lg-6 p-2"
      target="_blank"
      rel="noreferrer"
    >
      <div className="card shadow-soft border-light text-center rounded-xl w-100 h-100">
        <div className="card-body">
          <div
            className={`d-flex justify-content-center items align-items-center`}
          >
            <h4 className="card-title text-center mt-auto mb-auto">
              {question}
            </h4>
            <img
              className="ml-auto h-100 pt-1"
              src="https://img.icons8.com/color/48/000000/stackoverflow--v1.png"
              alt="stackoverflow"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ContentCard;

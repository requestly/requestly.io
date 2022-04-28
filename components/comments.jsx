import React, { useState } from "react";

const Comments = ({ author, comment, side }) => {
  const [divClass, setDivClass] = useState("col-12 col-lg-6 pt-lg-6");

  React.useEffect(() => {
    if (side === "left") {
      setDivClass("col-12 col-lg-6");
    }
  }, [side]);

  return (
    <div className="row mb-lg-5">
      <div className={divClass}>
        <div className="customer-testimonial d-flex mb-5">
          <img
            src="https://res.cloudinary.com/dbkbsj33k/image/upload/v1615366810/profile-picture-1_pninkw.jpg"
            className="image image-sm mr-3 rounded-circle shadow"
            alt="profile"
          />
          <div className="content bg-soft shadow-soft border border-light rounded position-relative p-4">
            <div className="d-flex mb-4">
              <span className="text-warning mr-2">⭐</span>
              <span className="text-warning mr-2">⭐</span>
              <span className="text-warning mr-2">⭐</span>
              <span className="text-warning mr-2">⭐</span>
              <span className="text-warning mr-2">⭐</span>
            </div>
            <p className="mt-2">{comment}</p>
            <span className="h6">{`- ${author}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;

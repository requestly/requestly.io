import React from "react";

const YCombinatorTag = () => {
  return (
    <div className="row mb-3 mb-lg-5" style={{ color: "#2D2D2D" }}>
      <div className="col-auto py-2 bg-white text-black rounded-right display-5 pl-5">
        Backed By
        <span className="ml-3" style={{ color: "#EF6437" }}>
          <span
            className="mr-1"
            style={{ backgroundColor: "#EF6437", color: "white" }}
          >
            {" "}
            Y{" "}
          </span>
          combinator
        </span>
      </div>
    </div>
  );
};

export default YCombinatorTag;

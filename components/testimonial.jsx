import React from "react";
import TestimonialCard from "./testimonialCard";

const TestimonialSection = ({ reviewList, showOnHomePage }) => {
  return (
    <div className="slider">
      <div className="slide-track">
        {reviewList.map((item, key) => {
          return (
            <React.Fragment key={key}>
              {item.showOnHomePage === showOnHomePage ? (
                <TestimonialCard item={item} />
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;

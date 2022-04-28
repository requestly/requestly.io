import React from "react";
import SectionHeader from "./section-header";
import Feature from "./feature";

const MockServer = ({ pageContent }) => {
  return (
    <>
      <div className="w-50 mx-auto mt-7 text-center">
        <span className="h4 lead">{pageContent.briefContent}</span>
      </div>
      <div className="section">
        <div className="container">
          <SectionHeader
            title="Application and use cases"
            description="These are some of the main features that you will find yourself using."
          />
          <Feature
            side="left"
            imgSrc="/assets/img/illustrations/MockApi/feature-1.png"
            featureName="Mock Backend response"
            featureContent="When the backend isn't ready and you want to mock the API response."
          />
          <Feature
            side="right"
            imgSrc="/assets/img/illustrations/MockApi/feature-2.png"
            featureName="Mock different Formats"
            featureContent="Beside from mocking an API Response, we also allow you to write plain HTML/CSS/JS on our editor and test it out without the hassle of deploying."
          />
          <Feature
            side="left"
            imgSrc="/assets/img/illustrations/MockApi/feature-3.png"
            featureName="Control the Mock"
            featureContent="You can edit or delete the Mock. The mock allows you to edit Content-Type, Status Code and body of the response. Also enables you to Add/Remove Headers"
          />
        </div>
      </div>
    </>
  );
};

export default MockServer;

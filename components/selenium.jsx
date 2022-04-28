import React from "react";
import SectionHeader from "./section-header";
import Feature from "./feature";
import CodeBlockReact from "./codeBlock";

const Selenium = ({ pageContent }) => {
  return (
    <>
      <div className="w-75 mx-auto mt-7 text-center">
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
            imgSrc="/assets/img/illustrations/Selenium/feature-1.png"
            featureName="Throttle Network Request"
            featureContent="Simulate network conditions in selenium with the help of our Delay Network Request."
            link="https://requestly.io/blog/automate-testing-via-selenium/"
            isNpmPackage
          />
          <Feature
            side="right"
            imgSrc="/assets/img/illustrations/Selenium/feature-2.png"
            featureName="Modify Headers"
            featureContent="Bypass authentication, set cookies by modifying header in selenium with the help of our Modify Headers Request."
            isNpmPackage
          />
          <Feature
            side="left"
            imgSrc="/assets/img/illustrations/Selenium/feature-3.png"
            featureName="Insert Scripts"
            featureContent="Inject popular libraries or hosted scripts or execute custom code-snippet before or after page load using our Insert Scripts Rule."
            isNpmPackage
          />
          <Feature
            side="right"
            imgSrc="/assets/img/illustrations/Selenium/feature-4.png"
            featureName="Cancel Requests"
            featureContent="Cancel or block specific network requests in your test environment without affecting the entire network using our Cancel Request Rule."
            isNpmPackage
          />
          <SectionHeader
            title="Use Boilerplate Code (Takes Less than a min)"
            avoidMargin
          />
          <div className="text-center">
            <p className="lead">
              Turn yourself into a Testing Ninja by using our short and concise
              selenium + requestly boilerplate code.
            </p>
            <p className="lead">
              User our web interface or desktop app to create rules(no-coding
              required). Put in your shared list url and you're good to go ⚡!
            </p>
          </div>
          <CodeBlockReact block="selenium" />
        </div>
      </div>
    </>
  );
};

export default Selenium;

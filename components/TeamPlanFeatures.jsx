import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { features } from "../utils/teamPageUtils";
import Accordion from "./Accordion";
import { ChevronRight } from "./Icons";

const TeamPlanFeatures = () => {
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);
  const [windowDimension, setWindowDimension] = useState(0);

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    }

    const handleResize = () => {
      const { width, height } = getWindowDimensions();

      if (height !== windowDimension.heading) return;

      if (width !== windowDimension) {
        if (width <= 768) setActiveFeatureIdx(null);
        else setActiveFeatureIdx(0);
      }
    };
    handleResize();

    const dimension = getWindowDimensions();
    setWindowDimension(dimension);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showAccordion = (idx) => {
    setActiveFeatureIdx(idx);
  };

  const md = useMediaQuery({ minWidth: 768 });

  return !!md ? (
    <section>
      <div className="mt-lg-2 mx-lg-7 mx-5 mb-5 text-center team-features">
        <div className="text-left features-container">
          {features.map(({ heading }, idx) => (
            <div
              key={idx}
              onClick={() => setActiveFeatureIdx(idx)}
              className="team-feature"
              style={{
                background: idx === activeFeatureIdx ? "#0648b3" : "#d9d9d9b3",
              }}
            >
              <h5
                style={{
                  color: idx === activeFeatureIdx ? "#fff" : "#000",
                }}
              >
                {heading}
              </h5>
              <ChevronRight
                style={{
                  height: "1.4rem",
                  marginLeft: ".8rem",
                  background:
                    idx === activeFeatureIdx ? "#0f1283b3" : "#ffffffb3",
                  color: idx === activeFeatureIdx ? "#fff" : "#111",
                  padding: ".3rem",
                  borderRadius: "1000px",
                }}
              />
            </div>
          ))}
        </div>
        <div style={{ textAlign: "left" }}>
          {features[activeFeatureIdx]?.content}
        </div>
      </div>
      )
    </section>
  ) : (
    <section>
      <div className="mt-lg-2 mb-5">
        {features.map(({ heading, content }, idx) => (
          <Accordion
            showShadow={true}
            // showActive={idx === activeFeatureIdx}
            heading={heading}
            content={content}
            key={idx}
            currentIdx={idx}
            activeAccordionIdx={activeFeatureIdx}
            clickAction={() => showAccordion(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamPlanFeatures;

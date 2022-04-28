import React, { useState } from "react";
import { ChevronRight } from "./Icons";

const StepProgress = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const changeActiveStep = (idx) => {
    if (!isNaN(idx)) setActiveStep(idx);
    else setActiveStep((step) => step + 1);
  };

  const incrementActiveStep = () => {
    if (activeStep !== totalSteps - 1) {
      setActiveStep((currentStep) => currentStep + 1);
    }
  };
  const decrementActiveStep = () => {
    if (activeStep !== 0) {
      setActiveStep((step) => step - 1);
    }
  };

  const totalSteps = steps.length;

  return (
    <div className="step-progress_wrapper">
      <div className="step-progress">
        <div
          className="step-progress-bar"
          style={{ width: `${(activeStep / (totalSteps - 1)) * 100}%` }}
        ></div>
        <div className="step-progress-num">
          {steps.map((_, idx) => (
            <li
              key={idx}
              onClick={() => changeActiveStep(idx)}
              className={`step ${idx <= activeStep ? "active" : ""}`}
            >
              {idx + 1}
            </li>
          ))}
        </div>
      </div>
      {steps[activeStep]?.image && (
        <div>
          <img
            src={steps[activeStep].image}
            className="step-progress_image"
            alt="Step Progress"
          />
        </div>
      )}
      <div className="step-progress_text">{steps[activeStep]?.content}</div>
      <div className="step-progress-buttons">
        <button
          disabled={activeStep === 0}
          onClick={decrementActiveStep}
          className="step-progress-button"
        >
          <ChevronRight
            style={{
              width: "1.4em",
              marginRight: ".4rem",
              transform: "rotate(180deg)",
            }}
          />
          Prev Step
        </button>
        <button
          disabled={activeStep === totalSteps - 1}
          onClick={incrementActiveStep}
          className="step-progress-button step-progress-button-active"
        >
          Next Step{" "}
          <ChevronRight style={{ width: "1.4em", marginLeft: ".4rem" }} />
        </button>
      </div>
    </div>
  );
};

export default StepProgress;

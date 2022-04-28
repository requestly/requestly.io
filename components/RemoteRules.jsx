import React from "react";
import StepProgress from "./StepProgress";
import Disclaimer from "./Disclaimer";
import { remoteRuleSteps } from "../utils/remoteRuleSteps";

const RemoteRules = ({ pageContent }) => {
  return (
    <div className="my-7">
      <div className="w-75 mx-auto text-center">
        <span className="h4 lead">{pageContent.briefContent}</span>
      </div>
      <Disclaimer secret={true} text={pageContent.secret} />
      <div className="mt-4 text-center">
        <h5>Setup Remote Rules in just 3 simple steps</h5>
        <StepProgress steps={remoteRuleSteps} />
      </div>
    </div>
  );
};

export default RemoteRules;

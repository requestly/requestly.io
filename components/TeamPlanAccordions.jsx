import React, { useState } from "react";
import Accordion from "./Accordion";
import { faqData } from "../utils/teamPageUtils";

const TeamPlanAccordions = () => {
  const [activeAccordionIdx, setActiveAccordionIdx] = useState(null);

  const showAccordion = (idx) => {
    if (idx === activeAccordionIdx) setActiveAccordionIdx(null);
    else setActiveAccordionIdx(idx);
  };

  return (
    <div>
      {faqData.map(({ heading, content }, idx) => (
        <Accordion
          heading={heading}
          content={content}
          key={idx}
          currentIdx={idx}
          activeAccordionIdx={activeAccordionIdx}
          clickAction={() => showAccordion(idx)}
        />
      ))}
    </div>
  );
};

export default TeamPlanAccordions;

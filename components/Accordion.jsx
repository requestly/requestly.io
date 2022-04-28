import { useRef } from "react";
import { ChevronRight } from "./Icons";

const Accordion = ({
  heading,
  content,
  currentIdx,
  activeAccordionIdx,
  clickAction,
  showShadow,
  showActive,
}) => {
  const contentRef = useRef(null);

  return (
    <div className={`accordion ${showShadow && "accordion-shadow"}`}>
      <div
        onClick={clickAction}
        className="accordion-heading"
        style={{
          background: showActive ? "#0648b3" : "#fff",
          color: showActive ? "#fff" : "#111",
        }}
      >
        <span>
          <ChevronRight
            style={{
              width: "1rem",
              transform:
                currentIdx === activeAccordionIdx ? "rotate(90deg)" : null,
              transition: "all .4s ease",
            }}
          />
        </span>
        {heading}
      </div>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{
          maxHeight:
            currentIdx === activeAccordionIdx
              ? `${contentRef?.current?.scrollHeight}px`
              : null,
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;

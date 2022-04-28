import { useState } from "react";

const TabbedContent = ({ content }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  return (
    <div className="tabbed-content">
      <div className="tabs">
        {content.map(({ heading }, idx) => (
          <div
            className="tab"
            key={idx}
            style={{
              background: activeTabIdx === idx ? "#fff" : "#f5f7f9",
              color: activeTabIdx === idx ? "#111" : "#111111b3",
              borderTopLeftRadius: idx === 0 ? "8px" : "0",
              borderTopRightRadius: idx === content.length - 1 ? "8px" : "0",
            }}
            onClick={() => setActiveTabIdx(idx)}
          >
            {heading}
          </div>
        ))}
      </div>
      <div className="content">{content[activeTabIdx].content}</div>
    </div>
  );
};

export default TabbedContent;

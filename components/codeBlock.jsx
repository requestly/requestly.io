import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import code from "../utils/code/codeSnippets";

export default function CodeBlockReact({ lang = "javascript", block }) {
  const [language, setLanguage] = useState(lang);
  const [codeBlock, setCodeBlock] = useState(code[block]);
  const [showLineNumbers, setShowLineNumbers] = useState(false);

  return (
    <div>
      <CopyBlock
        text={codeBlock}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
        wrapLines
        codeBlock
      />
    </div>
  );
}

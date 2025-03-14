"use client";

import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Prism theme

const CodeSwap = () => {
  const [activeView, setActiveView] = useState("ui");

  const tsxCode = `
import React from 'react';

const HoverButton = () => {
  return (
    <button className="hover-button">Hover me</button>
  );
};

export default HoverButton;
`;

  const jsxCode = `
import React from 'react';

const HoverButton = () => {
  return (
    <button className="hover-button">Hover me</button>
  );
};

export default HoverButton;
`;

  // Highlight code whenever the active view changes
  useEffect(() => {
    Prism.highlightAll();
  }, [activeView]);

  return (
    <div className="code-swap-container">
      {activeView === "ui" && (
        <div className="ui-preview">
          <button className="hover-button">Hover me</button>
        </div>
      )}

      {activeView !== "ui" && (
        <pre className="code-display">
          <code className={`language-${activeView === "tsx" ? "tsx" : "jsx"}`}>
            {activeView === "tsx" ? tsxCode : jsxCode}
          </code>
        </pre>
      )}

      <div className="code-tabs">
        <button
          className={activeView === "ui" ? "active" : ""}
          onClick={() => setActiveView("ui")}
        >
          View UI
        </button>
        <button
          className={activeView === "tsx" ? "active" : ""}
          onClick={() => setActiveView("tsx")}
        >
          View TSX
        </button>
        <button
          className={activeView === "jsx" ? "active" : ""}
          onClick={() => setActiveView("jsx")}
        >
          View JSX
        </button>
      </div>
    </div>
  );
};

export default CodeSwap;

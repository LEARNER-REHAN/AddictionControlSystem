import React, { useState, useEffect } from "react";

function LineByLine({ lines, delay = 500 }) {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, lines[index]]);
      index++;

      if (index === lines.length) clearInterval(interval);
    }, delay);

    return () => clearInterval(interval);
  }, [lines, delay]);

  return (
    <>
      {visibleLines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </>
  );
}

export default LineByLine;
import { useState } from "react";

// Renders a single matched word according to the active filter mode.
export default function FilteredWord({ word, mode, blurIntensity = 6 }) {
  const [hover, setHover] = useState(false);

  if (mode === "hide") {
    // Transparent text — leaves blank space, nothing to see.
    return (
      <span style={{ color: "transparent", userSelect: "none" }}>{word}</span>
    );
  }

  if (mode === "censor") {
    // Solid dark redaction bar sized to the word.
    return (
      <span
        className="inline-block align-middle rounded-[2px]"
        style={{
          background: "#1a1a1a",
          outline: "1px solid rgba(0,0,0,0.25)",
          width: `${Math.max(1, word.length) * 0.62}rem`,
          height: "1.05rem",
          margin: "0 1px",
        }}
      />
    );
  }

  // blur: CSS blur, clears on hover.
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="font-semibold text-[hsl(var(--wsp-accent))] cursor-pointer select-none"
      style={{ filter: hover ? "none" : `blur(${blurIntensity}px)`, transition: "filter 0.3s ease" }}
    >
      {word}
    </span>
  );
}
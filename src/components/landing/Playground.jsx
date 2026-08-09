import { useState } from "react";
import { SectionLabel } from "./HowItWorks";
import ScrollReveal from "./ScrollReveal";
import PopupReplica from "./playground/PopupReplica";
import SampleFeed from "./playground/SampleFeed";

export default function Playground() {
  const [enabled, setEnabled] = useState(true);
  const [mode, setMode] = useState("censor");
  const [words, setWords] = useState(["spam", "scam", "damn"]);
  const [excluded, setExcluded] = useState(false);
  const [blurIntensity, setBlurIntensity] = useState(6);

  const addWord = (w) => setWords((prev) => [...prev, w]);
  const removeWord = (w) => setWords((prev) => prev.filter((x) => x !== w));

  const active = enabled && !excluded;

  return (
    <section id="playground" className="py-24 lg:py-32 bg-[hsl(var(--wsp-navy)/0.02)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionLabel>Try it live</SectionLabel>
          <h2 className="mt-4 font-heading font-bold text-[hsl(var(--wsp-navy))] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Filter the web right here
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--wsp-navy)/0.65)] max-w-2xl">
            Drive the popup on the left — add words, switch modes, flip the per-site switch — and watch the sample page update instantly. This is exactly how Word Shield Pro behaves in your browser.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-start">
          <div className="lg:sticky lg:top-24">
            <PopupReplica
              enabled={enabled}
              setEnabled={setEnabled}
              mode={mode}
              setMode={setMode}
              words={words}
              addWord={addWord}
              removeWord={removeWord}
              excluded={excluded}
              setExcluded={setExcluded}
              blurIntensity={blurIntensity}
              setBlurIntensity={setBlurIntensity}
            />
          </div>

          <SampleFeed
            words={words}
            mode={mode}
            blurIntensity={blurIntensity}
            active={active}
          />
        </div>
      </div>
    </section>
  );
}
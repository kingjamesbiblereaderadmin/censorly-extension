import { EyeOff, Lock, CloudFog } from "lucide-react";
import { SectionLabel } from "./HowItWorks";

// Real extension's filter-word list, shown consistently across all three modes.
const WORDS = ["spam", "scam", "damn"];

function Sentence({ children }) {
  return <p className="text-[15px] leading-loose text-[hsl(var(--wsp-navy)/0.8)]">{children}</p>;
}

// Renders a filtered word per the active mode.
function Filtered({ word, mode }) {
  if (mode === "hide") {
    // Completely invisible — transparent text, leaving blank space behind.
    return <span style={{ color: "transparent", userSelect: "none" }}>{word}</span>;
  }
  if (mode === "censor") {
    // Solid dark redaction bars with a subtle outline, like a blacked-out document.
    return (
      <span
        className="inline-block align-middle rounded-[2px]"
        style={{
          background: "#1a1a1a",
          outline: "1px solid rgba(0,0,0,0.25)",
          width: `${word.length * 0.62}rem`,
          height: "1.05rem",
          margin: "0 1px",
        }}
      />
    );
  }
  // blur: CSS filter blur(5px), pixelated & unreadable until hovered
  return (
    <span className="wsp-blur-text font-semibold text-[hsl(var(--wsp-accent))]">{word}</span>
  );
}

function DemoText({ mode }) {
  return (
    <Sentence>
      Beware of new <Filtered word="spam" mode={mode} /> messages promising easy money —
      many are <Filtered word="scam" mode={mode} /> operations. If you fall for one, you
      might exclaim <Filtered word="damn" mode={mode} /> when you realize what happened.
    </Sentence>
  );
}

const MODES = [
  {
    icon: EyeOff,
    name: "Hide",
    tag: "Completely invisible",
    body: "Words become completely invisible — transparent text leaves blank space behind, nothing to see.",
    mode: "hide",
  },
  {
    icon: Lock,
    name: "Censor",
    tag: "Classic redaction bars",
    body: "Solid dark redaction bars over each letter, like a blacked-out government document.",
    mode: "censor",
  },
  {
    icon: CloudFog,
    name: "Blur",
    tag: "Pixelated · hover to reveal",
    body: "Words are blurred with CSS blur and pixelated — unreadable until you hover to reveal.",
    mode: "blur",
  },
];

export default function FilterModes() {
  return (
    <section id="modes" className="py-24 lg:py-32 bg-[hsl(var(--wsp-navy)/0.02)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center"><SectionLabel>Three filter modes</SectionLabel></div>
          <h2 className="mt-4 font-heading font-bold text-[hsl(var(--wsp-navy))] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Choose how words disappear
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--wsp-navy)/0.65)]">
            One filter list, three distinct looks. Switch modes anytime — every matched word updates instantly.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {MODES.map((m) => (
            <div
              key={m.name}
              className="group rounded-3xl border border-[hsl(var(--wsp-navy)/0.08)] bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-[hsl(var(--wsp-accent)/0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--wsp-accent)/0.08)] flex items-center justify-center text-[hsl(var(--wsp-accent))]">
                  <m.icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[hsl(var(--wsp-navy)/0.4)]">{m.tag}</span>
              </div>
              <h3 className="mt-6 font-heading font-bold text-2xl text-[hsl(var(--wsp-navy))]">{m.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.6)]">{m.body}</p>

              <div className="mt-6 rounded-2xl bg-white border border-[hsl(var(--wsp-navy)/0.06)] p-5">
                <DemoText mode={m.mode} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
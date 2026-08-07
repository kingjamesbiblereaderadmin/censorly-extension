import { EyeOff, Lock, CloudFog } from "lucide-react";
import { Image } from "@/components/ui/image";
import { SectionLabel } from "./HowItWorks";

const MODES_IMG =
  "https://media.base44.com/images/public/6a75b2c0fbf3b5ad5e60f45f/51358f41b_generated_image.png";

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
        {/* Immersive banner */}
        <div className="relative rounded-[2rem] overflow-hidden border border-[hsl(var(--wsp-navy)/0.08)] shadow-xl shadow-[hsl(var(--wsp-accent)/0.1)]">
          <Image
            src={MODES_IMG}
            alt="Three glass panels representing the Hide, Censor, and Blur filter modes"
            fittingType="fill"
            className="w-full h-56 sm:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--wsp-navy)/0.55)] via-[hsl(var(--wsp-navy)/0.2)] to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-14">
            <div className="flex"><SectionLabel>Three filter modes</SectionLabel></div>
            <h2 className="mt-3 font-heading font-bold text-white tracking-tight max-w-lg" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Choose how words disappear
            </h2>
            <p className="mt-3 text-lg text-white/80 max-w-lg">
              One filter list, three distinct looks. Switch modes anytime — every matched word updates instantly.
            </p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {MODES.map((m) => (
            <div
              key={m.name}
              className="group rounded-3xl border border-[hsl(var(--wsp-navy)/0.08)] bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-[hsl(var(--wsp-accent)/0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--wsp-accent)/0.08)] flex items-center justify-center text-[hsl(var(--wsp-accent))] group-hover:bg-[hsl(var(--wsp-accent))] group-hover:text-white transition-colors">
                  <m.icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[hsl(var(--wsp-navy)/0.4)]">{m.tag}</span>
              </div>
              <h3 className="mt-6 font-heading font-bold text-2xl text-[hsl(var(--wsp-navy))]">{m.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.6)]">{m.body}</p>

              <div className="mt-6 rounded-2xl bg-[hsl(var(--wsp-navy)/0.02)] border border-[hsl(var(--wsp-navy)/0.06)] p-5">
                <DemoText mode={m.mode} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
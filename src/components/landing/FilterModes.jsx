import { EyeOff, Lock, CloudFog } from "lucide-react";
import { SectionLabel } from "./HowItWorks";

const MODES = [
  {
    icon: EyeOff,
    name: "Hide",
    tag: "Completely invisible",
    body: "Words become completely invisible — blank space, nothing to see. The cleanest possible read.",
    render: () => (
      <p className="text-[15px] leading-loose text-[hsl(var(--wsp-navy)/0.8)]">
        The feed stayed{" "}
        <span className="inline-block w-12 h-3 align-middle rounded bg-[hsl(var(--wsp-navy)/0.08)]" />{" "}
        all morning, with zero{" "}
        <span className="inline-block w-20 h-3 align-middle rounded bg-[hsl(var(--wsp-navy)/0.08)]" />{" "}
        to distract the reader.
      </p>
    ),
  },
  {
    icon: Lock,
    name: "Censor",
    tag: "Classic redaction bars",
    body: "Classic redaction bars over each letter, like a blacked-out government document.",
    render: () => (
      <p className="text-[15px] leading-loose text-[hsl(var(--wsp-navy)/0.8)]">
        The feed stayed{" "}
        <span className="inline-block h-4 align-middle rounded-[2px] bg-[hsl(var(--wsp-navy))]" style={{ width: "3.2rem" }} />{" "}
        all morning, with zero{" "}
        <span className="inline-block h-4 align-middle rounded-[2px] bg-[hsl(var(--wsp-navy))]" style={{ width: "4.6rem" }} />{" "}
        to distract the reader.
      </p>
    ),
  },
  {
    icon: CloudFog,
    name: "Blur",
    tag: "Pixelated · hover to reveal",
    body: "Words are blurred and pixelated — hover to reveal if you want to. Beautiful bokeh by default.",
    render: () => (
      <p className="text-[15px] leading-loose text-[hsl(var(--wsp-navy)/0.8)]">
        The feed stayed{" "}
        <span className="wsp-blur-text font-semibold text-[hsl(var(--wsp-accent))]">toxic</span>{" "}
        all morning, with zero{" "}
        <span className="wsp-blur-text font-semibold text-[hsl(var(--wsp-accent))]">distraction</span>{" "}
        to distract the reader.
      </p>
    ),
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

              <div className="mt-6 rounded-2xl bg-[hsl(var(--wsp-navy)/0.03)] border border-[hsl(var(--wsp-navy)/0.06)] p-5">
                {m.render()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
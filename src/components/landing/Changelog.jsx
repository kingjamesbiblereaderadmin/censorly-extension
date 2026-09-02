import { Wrench } from "lucide-react";
import { SectionLabel } from "./HowItWorks";
import ScrollReveal from "./ScrollReveal";
import { StaggerGroup, RevealItem } from "./Reveal";

const ENTRIES = [
  {
    version: "v5.10",
    date: "September 2, 2026",
    changes: [
      { icon: Wrench, text: "Firefox: fixed the popup opening with a mis-sized window (visible resize/reposition, leaving unused space beside the content). It now renders fully hidden and reveals only once loaded, so it opens already at its final size." },
    ],
  },
];

export default function Changelog() {
  return (
    <section id="changelog" className="py-24 lg:py-32 bg-[hsl(var(--wsp-bg-accent))]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionLabel>Changelog</SectionLabel>
          <h2 className="mt-4 font-heading font-bold text-[hsl(var(--wsp-navy))] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            What's new
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--wsp-navy)/0.65)]">
            Censorly keeps improving. The latest updates to your local word filter.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-12 flex flex-col gap-6">
          {ENTRIES.map((entry) => (
            <RevealItem key={entry.version}>
              <div className="rounded-3xl border border-[hsl(var(--wsp-accent)/0.25)] bg-white p-7 sm:p-9 shadow-sm">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-heading font-bold text-2xl text-[hsl(var(--wsp-navy))]">
                    {entry.version}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[hsl(var(--wsp-accent))]">
                    {entry.date}
                  </span>
                </div>

                <ul className="mt-6 flex flex-col gap-4">
                  {entry.changes.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-xl bg-[hsl(var(--wsp-accent)/0.08)] text-[hsl(var(--wsp-accent))] flex items-center justify-center">
                        <c.icon className="w-5 h-5" strokeWidth={1.8} />
                      </span>
                      <p className="text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.72)] pt-1.5">
                        {c.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
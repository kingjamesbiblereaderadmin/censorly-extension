import { ListPlus, SlidersHorizontal, Globe } from "lucide-react";
import DesktopOnlyBadge from "./DesktopOnlyBadge";

const STEPS = [
  {
    n: "01",
    icon: ListPlus,
    title: "Add words to your filter list",
    body: "Type any words or phrases you want gone. Manage them anytime from the popup — your list is yours alone.",
  },
  {
    n: "02",
    icon: SlidersHorizontal,
    title: "Choose your mode: Hide, Censor, or Blur",
    body: "Pick how filtered words should appear — invisible, redacted with black bars, or beautifully blurred until you hover.",
  },
  {
    n: "03",
    icon: Globe,
    title: "Browse freely — words are caught automatically",
    body: "Word Shield scans every page as it loads and re-scans dynamic content, so filtered words never reach your eyes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel>How it works</SectionLabel>
        <h2 className="mt-4 font-heading font-bold text-[hsl(var(--wsp-navy))] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Three steps to a cleaner web
        </h2>
        <p className="mt-4 text-lg text-[hsl(var(--wsp-navy)/0.65)] max-w-2xl">
          No account, no setup wizard. Define your words, pick a mode, and the shield does the rest — instantly, on every site.
        </p>
        <div className="mt-5">
          <DesktopOnlyBadge />
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-[hsl(var(--wsp-navy)/0.08)] rounded-3xl overflow-hidden border border-[hsl(var(--wsp-navy)/0.08)]">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-white p-8 lg:p-10 flex flex-col">
              <span className="font-mono text-sm font-semibold text-[hsl(var(--wsp-accent))]">{s.n}</span>
              <div className="mt-5 w-12 h-12 rounded-xl bg-[hsl(var(--wsp-accent)/0.08)] flex items-center justify-center text-[hsl(var(--wsp-accent))]">
                <s.icon className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h3 className="mt-6 font-heading font-semibold text-xl text-[hsl(var(--wsp-navy))]">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.65)]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--wsp-accent))]">
      <span className="w-6 h-px bg-[hsl(var(--wsp-accent))]" />
      {children}
    </span>
  );
}
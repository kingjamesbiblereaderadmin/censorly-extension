import { ListPlus, SlidersHorizontal, Globe } from "lucide-react";
import { Image } from "@/components/ui/image";
import DesktopOnlyBadge from "./DesktopOnlyBadge";
import ScrollReveal from "./ScrollReveal";
import { StaggerGroup, RevealItem } from "./Reveal";

const SCAN_IMG =
  "https://media.base44.com/images/public/6a75b2c0fbf3b5ad5e60f45f/680726614_generated_image.png";

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: sticky visual */}
          <div className="lg:sticky lg:top-24">
            <ScrollReveal>
              <SectionLabel>How it works</SectionLabel>
              <h2 className="mt-4 font-heading font-bold text-[hsl(var(--wsp-navy))] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Three steps to a cleaner web
              </h2>
              <p className="mt-4 text-lg text-[hsl(var(--wsp-navy)/0.65)] max-w-xl">
                No account, no setup wizard. Define your words, pick a mode, and the shield does the rest — instantly, on every site.
              </p>
              <div className="mt-5">
                <DesktopOnlyBadge />
              </div>

              <div className="mt-8 relative rounded-3xl overflow-hidden border border-[hsl(var(--wsp-navy)/0.08)] shadow-xl shadow-[hsl(var(--wsp-accent)/0.1)]">
                <Image
                  src={SCAN_IMG}
                  alt="Illustration of Word Shield Pro scanning a web page and redacting matched words"
                  fittingType="fill"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--wsp-navy)/0.25)] to-transparent" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: steps timeline */}
          <div className="relative">
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-[hsl(var(--wsp-accent)/0.5)] via-[hsl(var(--wsp-navy)/0.1)] to-transparent" />
            <StaggerGroup className="flex flex-col gap-3">
              {STEPS.map((s) => (
                <RevealItem key={s.n} className="relative flex items-start gap-5">
                  <div className="relative shrink-0 w-14 h-14 rounded-2xl bg-[hsl(var(--wsp-navy))] flex items-center justify-center shadow-lg shadow-[hsl(var(--wsp-accent)/0.25)]">
                    <s.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                    <span className="absolute top-1 left-1.5 font-mono text-[9px] font-bold text-[hsl(var(--wsp-accent))]">
                      {s.n}
                    </span>
                  </div>
                  <div className="flex-1 rounded-2xl border border-[hsl(var(--wsp-navy)/0.08)] bg-white p-5 hover:border-[hsl(var(--wsp-accent)/0.35)] hover:shadow-md transition-all">
                    <h3 className="font-heading font-semibold text-xl text-[hsl(var(--wsp-navy))]">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.65)]">{s.body}</p>
                  </div>
                </RevealItem>
              ))}
            </StaggerGroup>
          </div>
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
import { ListPlus, SlidersHorizontal, Globe, Shuffle } from "lucide-react";
import { Image } from "@/components/ui/image";
import IOSAvailabilityBadge from "./IOSAvailabilityBadge";
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
    body: "Censorly scans every page as it loads and re-scans dynamic content, so filtered words never reach your eyes.",
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
                <IOSAvailabilityBadge />
              </div>

              <div className="mt-8 relative rounded-3xl overflow-hidden border border-[hsl(var(--wsp-navy)/0.08)] shadow-xl shadow-[hsl(var(--wsp-accent)/0.1)]">
                <Image
                  src={SCAN_IMG}
                  alt="Illustration of Censorly scanning a web page and redacting matched words"
                  fittingType="fill"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--wsp-navy)/0.25)] to-transparent" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: steps timeline */}
          <div className="relative">
            <div className="absolute left-10 top-2 bottom-2 w-px bg-gradient-to-b from-[hsl(var(--wsp-accent)/0.5)] via-[hsl(var(--wsp-navy)/0.1)] to-transparent" />
            <StaggerGroup className="flex flex-col gap-6">
              {STEPS.map((s) => (
                <RevealItem key={s.n} className="relative flex items-start gap-5">
                  <div className="relative shrink-0 flex h-14 rounded-2xl overflow-hidden shadow-lg shadow-[hsl(var(--wsp-accent)/0.25)]">
                    <div className="w-10 h-full bg-[hsl(var(--wsp-accent))] flex items-center justify-center">
                      <span className="font-mono text-lg font-bold text-white">
                        {s.n}
                      </span>
                    </div>
                    <div className="w-10 h-full bg-[hsl(var(--wsp-navy))] flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl border border-[hsl(var(--wsp-navy)/0.08)] bg-white p-6 hover:border-[hsl(var(--wsp-accent)/0.35)] hover:shadow-md transition-all">
                    <h3 className="font-heading font-semibold text-xl text-[hsl(var(--wsp-navy))]">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.65)]">{s.body}</p>
                  </div>
                </RevealItem>
              ))}
            </StaggerGroup>

            {/* Per-word Exact / Wildcard matching — v5.1 usage instruction */}
            <RevealItem className="relative mt-6">
              <div className="rounded-2xl border border-[hsl(var(--wsp-accent)/0.4)] bg-[hsl(var(--wsp-accent)/0.05)] p-6">
                <div className="flex items-center gap-3">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-[hsl(var(--wsp-accent))] text-white flex items-center justify-center">
                    <Shuffle className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-heading font-semibold text-xl text-[hsl(var(--wsp-navy))]">
                    Choose Exact or Wildcard for each word
                  </h3>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.7)]">
                  New words start in Exact mode. Click the <span className="font-semibold text-[hsl(var(--wsp-navy))]">Exact</span> button beside a word to switch it to <span className="font-semibold text-[hsl(var(--wsp-accent))]">Wildcard</span>; click <span className="font-semibold text-[hsl(var(--wsp-accent))]">Wildcard</span> to switch it back to <span className="font-semibold text-[hsl(var(--wsp-navy))]">Exact</span>. Exact filters only the saved word. Wildcard also filters contiguous word endings — for example, spam also matches spamming, spammer, and spammed. Your choice is saved automatically. Refresh the page after changing it.
                </p>
              </div>
            </RevealItem>
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
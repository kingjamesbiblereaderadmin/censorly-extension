import { Download, Settings, ShieldCheck, Globe } from "lucide-react";
import IOSAvailabilityCard from "./IOSAvailabilityCard";
import { SectionLabel } from "./HowItWorks";
import ScrollReveal from "./ScrollReveal";
import { StaggerGroup, RevealItem } from "./Reveal";

const STEPS = [
  { icon: Download, title: "Install from the App Store", body: "When Censorly goes live, install it like any iPhone or iPad app." },
  { icon: Settings, title: "Enable it in Safari", body: "Open Settings → Safari → Extensions and turn Censorly on." },
  { icon: ShieldCheck, title: "Grant site permission", body: "Safari asks once per website — tap Allow and you're shielded." },
  { icon: Globe, title: "Browse freely", body: "Pages are filtered automatically as they load. No setup wizard." },
];

export default function Installation() {
  return (
    <section id="install" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="max-w-2xl">
            <SectionLabel>Installation</SectionLabel>
            <h2 className="mt-4 font-heading font-bold text-[hsl(var(--wsp-navy))] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Getting Censorly on iPhone &amp; iPad
            </h2>
            <p className="mt-4 text-lg text-[hsl(var(--wsp-navy)/0.65)]">
              Censorly arrives as a Safari Web Extension — a small app you
              install once and enable in Safari's settings.
            </p>
          </div>
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <RevealItem key={s.title}>
              <div className="relative rounded-3xl border border-[hsl(var(--wsp-navy)/0.08)] bg-white p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <span className="absolute top-5 right-5 font-mono text-xs font-semibold text-[hsl(var(--wsp-navy)/0.25)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--wsp-accent)/0.08)] flex items-center justify-center text-[hsl(var(--wsp-accent))]">
                  <s.icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-heading font-semibold text-base text-[hsl(var(--wsp-navy))]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--wsp-navy)/0.6)]">{s.body}</p>
              </div>
            </RevealItem>
          ))}
        </StaggerGroup>

        <ScrollReveal>
          <div className="mt-10 rounded-3xl bg-[hsl(var(--wsp-navy))] p-6 lg:p-8 font-mono text-sm text-white/80 overflow-x-auto shadow-xl">
            <div className="flex items-center gap-2 mb-3 text-white/40 text-xs">
              <span className="w-3 h-3 rounded-full bg-white/15" />
              <span className="w-3 h-3 rounded-full bg-white/15" />
              <span className="w-3 h-3 rounded-full bg-white/15" />
              <span className="ml-2">iPhone · Settings</span>
            </div>
            <code className="block">
              <span className="text-[hsl(var(--wsp-accent))]">→</span> App Store <span className="text-white/40"># install Censorly (coming soon)</span><br />
              <span className="text-[hsl(var(--wsp-accent))]">→</span> Settings <span className="text-white/40"># Apps → Safari → Extensions</span><br />
              <span className="text-[hsl(var(--wsp-accent))]">→</span> Censorly <span className="text-white/40"># turn on</span><br />
              <span className="text-[hsl(var(--wsp-accent))]">→</span> Safari prompt <span className="text-white/40"># tap "Allow" per website</span><br />
              <span className="text-green-400">✓</span> shielded.
            </code>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <IOSAvailabilityCard />
            <span className="inline-flex items-center gap-2 text-center text-sm text-[hsl(var(--wsp-navy)/0.5)] font-mono">
              100% client-side · Safari on iOS, iPadOS &amp; macOS · Coming soon to the App Store
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
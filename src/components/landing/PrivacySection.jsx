import { ShieldOff, WifiOff, BarChart3, CloudOff } from "lucide-react";
import { Image } from "@/components/ui/image";
import ExtensionIcon from "./ExtensionIcon";
import ScrollReveal from "./ScrollReveal";
import { StaggerGroup, RevealItem } from "./Reveal";

const VAULT_IMG =
  "https://media.base44.com/images/public/6a75b2c0fbf3b5ad5e60f45f/824abf313_generated_image.png";

const PILLARS = [
  { icon: WifiOff, label: "Zero network requests", body: "The extension literally cannot reach the internet." },
  { icon: CloudOff, label: "No cloud, no sync server", body: "Your word list lives on your device only." },
  { icon: BarChart3, label: "No analytics or telemetry", body: "The extension ships no trackers, counters, or reporting — ever." },
  { icon: ShieldOff, label: "No tracking of any kind", body: "Nothing about you or your reading leaves the browser via the extension." },
];

export default function PrivacySection() {
  return (
    <section id="privacy" className="relative bg-[hsl(var(--wsp-navy))] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(hsl(var(--wsp-accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--wsp-accent)) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-[hsl(var(--wsp-accent)/0.18)] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: copy + pillars */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-[hsl(var(--wsp-accent))]">
                <span className="wsp-live-dot w-1.5 h-1.5 rounded-full bg-[hsl(var(--wsp-accent))]" />
                The Privacy Vault
              </span>

              <h2 className="mt-8 font-heading font-extrabold tracking-tight leading-[1.05]" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
                Your words never
                <br />
                leave your browser.
              </h2>

              <p className="mt-7 text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed">
                The Censorly extension is a local-only fortress. It stores everything on
                your device, makes zero network requests, and runs no analytics, tracking, or
                telemetry — it <span className="text-white font-medium">literally cannot send your data anywhere</span>.
                This marketing site is hosted on the Base44 platform, which logs basic, aggregate
                visit analytics; the extension itself collects nothing.
              </p>
            </ScrollReveal>

            <StaggerGroup className="mt-12 grid sm:grid-cols-2 gap-5">
              {PILLARS.map((p) => (
                <RevealItem key={p.label}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-sm hover:border-[hsl(var(--wsp-accent)/0.4)] transition-colors">
                    <p.icon className="w-6 h-6 text-[hsl(var(--wsp-accent))]" strokeWidth={1.8} />
                    <h3 className="mt-4 font-heading font-semibold text-base">{p.label}</h3>
                    <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.body}</p>
                  </div>
                </RevealItem>
              ))}
            </StaggerGroup>

            <ScrollReveal>
              <div className="mt-12 inline-flex items-center gap-3 text-white/60 text-sm font-mono">
                <ExtensionIcon className="w-5 h-5" />
                100% client-side · source available · auditable
              </div>
            </ScrollReveal>
          </div>

          {/* Right: vault visual */}
          <div className="relative">
            <ScrollReveal>
              <div className="absolute -inset-8 bg-[hsl(var(--wsp-accent)/0.25)] rounded-full blur-3xl pointer-events-none" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-[hsl(var(--wsp-accent)/0.3)]">
                <Image
                  src={VAULT_IMG}
                  alt="Illustration of a glass privacy vault protecting your word list"
                  fittingType="fill"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
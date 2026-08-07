import { Shield as ShieldIcon, Download } from "lucide-react";
import ShieldLogo from "./ShieldIcon";

const BADGES = ["100% Local", "Zero API Calls", "No Tracking"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden wsp-grid-lines">
      <div className="absolute -top-24 right-0 w-[40rem] h-[40rem] bg-[hsl(var(--wsp-accent)/0.10)] rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: copy */}
          <div className="wsp-reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--wsp-accent)/0.25)] bg-[hsl(var(--wsp-accent)/0.06)] px-3 py-1 text-xs font-mono font-medium text-[hsl(var(--wsp-accent))]">
              <span className="wsp-live-dot inline-block w-1.5 h-1.5 rounded-full bg-[hsl(var(--wsp-accent))]" />
              Chrome Extension · v2.4.0
            </span>

            <h1 className="mt-6 font-heading font-extrabold tracking-tight text-[hsl(var(--wsp-navy))] leading-[1.02]" style={{ fontSize: "clamp(2.75rem, 6vw, 4.75rem)" }}>
              Shield your eyes
              <br />
              from words you
              <br />
              <span className="relative inline-block">
                <span className="text-[hsl(var(--wsp-accent))]">don't want to see</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 7 Q 150 1 298 6" stroke="hsl(var(--wsp-accent))" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>
            </h1>

            <p className="mt-7 text-lg text-[hsl(var(--wsp-navy)/0.7)] max-w-xl leading-relaxed">
              Word Shield Pro filters, hides, censors, or blurs unwanted words on any
              web page. Everything runs locally in your browser — zero network requests,
              total privacy.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#install"
                className="wsp-glow inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[hsl(var(--wsp-accent))] px-7 py-4 text-base font-semibold text-white transition-shadow"
              >
                <ShieldIcon className="w-5 h-5" />
                Add to Chrome — Free
              </a>
              <a
                href="#modes"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[hsl(var(--wsp-navy)/0.15)] bg-white px-7 py-4 text-base font-semibold text-[hsl(var(--wsp-navy))] hover:border-[hsl(var(--wsp-accent))] transition-colors"
              >
                <Download className="w-4 h-4" />
                See the demo
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {BADGES.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--wsp-navy)/0.04)] px-3 py-1.5 text-xs font-medium text-[hsl(var(--wsp-navy)/0.7)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--wsp-accent))]" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right: live demo card */}
          <DemoCard />
        </div>
      </div>
    </section>
  );
}

function DemoCard() {
  return (
    <div className="wsp-reveal relative" style={{ animationDelay: "0.15s" }}>
      <div className="absolute inset-0 bg-[hsl(var(--wsp-accent)/0.18)] blur-2xl rounded-3xl" />
      <div className="relative rounded-3xl border border-[hsl(var(--wsp-navy)/0.08)] bg-white shadow-2xl shadow-[hsl(var(--wsp-accent)/0.15)] overflow-hidden">
        {/* browser chrome */}
        <div className="flex items-center gap-2 px-4 h-10 border-b border-[hsl(var(--wsp-navy)/0.06)] bg-[hsl(var(--wsp-navy)/0.02)]">
          <span className="w-3 h-3 rounded-full bg-[hsl(var(--wsp-navy)/0.15)]" />
          <span className="w-3 h-3 rounded-full bg-[hsl(var(--wsp-navy)/0.15)]" />
          <span className="w-3 h-3 rounded-full bg-[hsl(var(--wsp-navy)/0.15)]" />
          <div className="ml-3 flex-1 h-6 rounded-md bg-white border border-[hsl(var(--wsp-navy)/0.08)] flex items-center px-2.5 text-[11px] font-mono text-[hsl(var(--wsp-navy)/0.45)]">
            https://example.com/feed
          </div>
          <span className="text-[hsl(var(--wsp-accent))]">
            <ShieldLogo className="w-4 h-4" />
          </span>
        </div>

        {/* page content */}
        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-8 rounded-full bg-[hsl(var(--wsp-accent)/0.15)]" />
            <div>
              <div className="h-2.5 w-24 rounded bg-[hsl(var(--wsp-navy)/0.12)]" />
              <div className="h-2 w-16 rounded bg-[hsl(var(--wsp-navy)/0.08)] mt-1.5" />
            </div>
          </div>

          <p className="text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.8)]">
            The latest <span className="font-semibold underline decoration-[hsl(var(--wsp-accent))] decoration-2 underline-offset-2">toxic</span> trends online are
            becoming a real <span className="font-semibold underline decoration-[hsl(var(--wsp-accent))] decoration-2 underline-offset-2">distraction</span> for many
            readers who just want a cleaner, calmer feed free of <span className="font-semibold underline decoration-[hsl(var(--wsp-accent))] decoration-2 underline-offset-2">clutter</span>.
          </p>

          <div className="my-5 rounded-xl border border-[hsl(var(--wsp-accent)/0.2)] bg-[hsl(var(--wsp-accent)/0.05)] p-4">
            <div className="flex items-center gap-2 mb-2">
              <ShieldLogo className="w-4 h-4 text-[hsl(var(--wsp-accent))]" />
              <span className="text-xs font-mono font-semibold text-[hsl(var(--wsp-accent))]">WORD SHIELD · ACTIVE</span>
            </div>
            <p className="text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.8)]">
              The latest{" "}
              <span className="inline-block w-14 h-3 align-middle rounded bg-[hsl(var(--wsp-navy)/0.08)]" />{" "}
              trends online are becoming a real{" "}
              <span className="inline-block w-20 h-3 align-middle rounded bg-[hsl(var(--wsp-navy)/0.08)]" />{" "}
              for many readers who just want a cleaner, calmer feed free of{" "}
              <span className="inline-block w-16 h-3 align-middle rounded bg-[hsl(var(--wsp-navy)/0.08)]" />.
            </p>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-[hsl(var(--wsp-navy)/0.45)]">
            <span>3 words filtered</span>
            <span>mode: hide · local only</span>
          </div>
        </div>
      </div>
    </div>
  );
}
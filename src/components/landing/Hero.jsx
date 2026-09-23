import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";

import ExtensionIcon from "./ExtensionIcon";
import IOSAvailabilityBadge from "./IOSAvailabilityBadge";
import IOSAvailabilityCard from "./IOSAvailabilityCard";
import PopupMockup from "./PopupMockup";

const HERO_AMBIENT =
  "https://media.base44.com/images/public/6a75b2c0fbf3b5ad5e60f45f/d166ec2eb_generated_image.png";
const BADGES = ["100% Local", "Zero API Calls", "No Tracking"];

// Words filtered in the demo article (matching the real extension's word list)
const FILTERED = ["spam", "scam", "damn"];

function Article({ filtered }) {
  const CENSOR = { bg: "#1a1a1a", outline: "rgba(255,255,255,0.08)" };
  const render = (w) => {
    if (!filtered) {
      return <span className="font-semibold text-[hsl(var(--wsp-navy))]">{w}</span>;
    }
    // Censor mode: solid dark redaction bar over the word
    return (
      <span
        className="inline-block align-middle rounded-[2px]"
        style={{
          background: CENSOR.bg,
          outline: `1px solid ${CENSOR.outline}`,
          width: `${w.length * 0.62}rem`,
          height: "1.05rem",
          margin: "0 1px",
        }}
      />
    );
  };
  return (
    <p className="text-[14.5px] leading-[1.85] text-[hsl(var(--wsp-navy)/0.78)]">
      Beware of new{" "}
      {render("spam")}{" "}
      messages promising easy money — many are{" "}
      {render("scam")}{" "}
      operations designed to steal your data. If you fall for one, you might exclaim{" "}
      {render("damn")}{" "}
      when you realize what happened. Stay alert and verify every link.
    </p>
  );
}

function BeforeAfter() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-[hsl(var(--wsp-navy)/0.08)] bg-white overflow-hidden shadow-sm">
        <div className="px-4 h-9 border-b border-[hsl(var(--wsp-navy)/0.06)] flex items-center justify-between">
          <span className="text-[11px] font-mono font-semibold text-[hsl(var(--wsp-navy)/0.5)]">BEFORE</span>
          <span className="w-2 h-2 rounded-full bg-[hsl(var(--wsp-navy)/0.2)]" />
        </div>
        <div className="p-5">
          <Article filtered={false} />
        </div>
      </div>

      <div className="rounded-2xl border border-[hsl(var(--wsp-accent)/0.35)] bg-[hsl(var(--wsp-accent)/0.04)] overflow-hidden shadow-sm">
        <div className="px-4 h-9 border-b border-[hsl(var(--wsp-accent)/0.2)] flex items-center justify-between">
          <span className="text-[11px] font-mono font-semibold text-[hsl(var(--wsp-accent))]">AFTER · CENSOR</span>
          <span className="w-2 h-2 rounded-full bg-[hsl(var(--wsp-accent))]" />
        </div>
        <div className="p-5">
          <Article filtered={true} />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden wsp-grid-lines">
      {/* Ambient generated artwork, faint behind everything */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={HERO_AMBIENT}
          alt=""
          fittingType="fill"
          className="w-full h-full opacity-20 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/40 via-[hsl(var(--background))]/70 to-[hsl(var(--background))]" />
      </div>
      <div className="absolute -top-24 right-0 w-[40rem] h-[40rem] rounded-full blur-3xl pointer-events-none opacity-20" style={{ background: "linear-gradient(to bottom right, #0d9488, #115e59)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Left: copy */}
          <div className="wsp-reveal relative z-10">
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
              Censorly filters, hides, censors, or blurs unwanted words on any
              web page. Everything runs locally in your browser — zero network requests,
              total privacy.
            </p>

            <div className="mt-5">
              <IOSAvailabilityBadge />
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <IOSAvailabilityCard />
              <a
                href="#modes"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-[hsl(var(--wsp-navy)/0.15)] bg-white/70 backdrop-blur px-7 py-4 text-base font-semibold text-[hsl(var(--wsp-navy))] hover:border-[hsl(var(--wsp-accent))] transition-colors"
              >
                <ExtensionIcon className="w-4 h-4" />
                See the demo
                <ArrowRight className="w-4 h-4 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
            </div>

            <p className="mt-3 text-xs font-mono text-[hsl(var(--wsp-navy)/0.5)]">
              Coming soon to iPhone, iPad &amp; Mac · Safari on iOS, iPadOS &amp; macOS
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {BADGES.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--wsp-navy)/0.04)] px-3 py-1.5 text-xs font-medium text-[hsl(var(--wsp-navy)/0.7)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--wsp-accent))]" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right: real popup mockup + before/after demo */}
          <div className="wsp-reveal relative" style={{ animationDelay: "0.15s" }}>
            {/* soft platform under the popup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--wsp-accent)/0.15)] to-transparent rounded-[2rem] blur-2xl pointer-events-none" />
            <div className="relative flex flex-col items-center gap-8">
              <div className="flex justify-center scale-[0.92] sm:scale-100 origin-top">
                <PopupMockup />
              </div>
              <div className="w-full">
                <div className="text-center text-xs font-mono uppercase tracking-[0.18em] text-[hsl(var(--wsp-navy)/0.45)] mb-4">
                  Censor mode · before / after
                </div>
                <BeforeAfter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Languages, Minus, Ban, Search, RefreshCw, SunMoon, Globe2, Database } from "lucide-react";
import { SectionLabel } from "./HowItWorks";

const FEATURES = [
  { icon: Languages, title: "Accent-insensitive matching", body: "Catches \"café\" even if you only filter \"cafe\". Diacritics never slip through." },
  { icon: Minus, title: "Hyphen & underscore matching", body: "\"holy-mole\" matches \"holy mole\". Punctuation variants are treated as one." },
  { icon: Ban, title: "Per-site exclusion", body: "Turn off filtering on specific websites with a single click in the popup." },
  { icon: Search, title: "Search bar & text box censoring", body: "Filtered words are caught in inputs and search boxes too, not just page text." },
  { icon: RefreshCw, title: "Auto re-filtering on dynamic pages", body: "SPAs, infinite scroll, and lazy-loaded content are re-scanned automatically." },
  { icon: SunMoon, title: "Light & dark mode support", body: "Censor bars and blur adapt to the site's theme for seamless reading." },
  { icon: Globe2, title: "Works on every website", body: "From news sites to forums — if it renders text, Word Shield can filter it." },
  { icon: Database, title: "No account, no signup, no cloud", body: "Everything is stored locally. No login, no sync server, nothing to leak." },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Key features</SectionLabel>
          <h2 className="mt-4 font-heading font-bold text-[hsl(var(--wsp-navy))] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Built to catch every word, miss nothing
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--wsp-navy)/0.65)]">
            Obsessive about the details that make filtering feel invisible and reliable.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-[hsl(var(--wsp-navy)/0.08)] bg-white p-6 hover:border-[hsl(var(--wsp-accent)/0.4)] transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-[hsl(var(--wsp-accent)/0.08)] flex items-center justify-center text-[hsl(var(--wsp-accent))] group-hover:bg-[hsl(var(--wsp-accent))] group-hover:text-white transition-colors">
                <f.icon className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 font-heading font-semibold text-base text-[hsl(var(--wsp-navy))]">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--wsp-navy)/0.6)]">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
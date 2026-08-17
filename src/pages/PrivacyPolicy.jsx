import { Link } from "react-router-dom";
import { Shield as ShieldIcon, ArrowLeft } from "lucide-react";
import ExtensionIcon from "@/components/landing/ExtensionIcon";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const SECTIONS = [
  {
    n: "1",
    title: "Overview",
    body: (
      <p>
        Censorly is a browser extension that filters, hides, censors, or blurs
        unwanted words on web pages. Privacy is its core principle — all
        processing happens entirely on your device.
      </p>
    ),
  },
  {
    n: "2",
    title: "100% Local Processing",
    body: (
      <p>All filtering happens entirely in your browser. No data is sent to any server.</p>
    ),
  },
  {
    n: "3",
    title: "No Data Collection",
    body: (
      <p>
        Censorly does NOT collect, store, or transmit any personal data,
        browsing history, filtered words, or usage statistics.
      </p>
    ),
  },
  {
    n: "4",
    title: "No Analytics or Telemetry",
    body: (
      <p>There are no tracking pixels, analytics scripts, or telemetry of any kind.</p>
    ),
  },
  {
    n: "5",
    title: "No API Calls",
    body: (
      <p>The extension makes zero network requests. It works completely offline.</p>
    ),
  },
  {
    n: "6",
    title: "Storage",
    body: (
      <p>
        Your filter word list and settings are stored locally in your browser's
        sync storage (
        <code className="px-1.5 py-0.5 rounded-md bg-[hsl(var(--wsp-accent)/0.1)] text-[hsl(var(--wsp-accent))] font-mono text-[0.92em]">chrome.storage.sync</code>
        ). This syncs across your devices via your browser account but is never
        accessible to us.
      </p>
    ),
  },
  {
    n: "7",
    title: "Permissions Explained",
    body: (
      <ul className="space-y-3 list-none">
        {[
          ["storage", "Saves your filter words locally on your device."],
          ["activeTab", "Filters text on the page you are currently viewing."],
        ].map(([perm, desc]) => (
          <li key={perm} className="flex gap-3 items-start">
            <ShieldIcon className="w-4 h-4 mt-1 text-[hsl(var(--wsp-accent))] shrink-0" strokeWidth={2} />
            <span>
              <code className="px-1.5 py-0.5 rounded-md bg-[hsl(var(--wsp-accent)/0.1)] text-[hsl(var(--wsp-accent))] font-mono text-[0.92em]">{perm}</code>{" "}
              — {desc} No other permissions are needed.
            </span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    n: "8",
    title: "Contact",
    body: (
      <p>
        If you have questions about this policy, contact us at:{" "}
        <a
          href="mailto:censorlyextension@outlook.sg"
          className="text-[hsl(var(--wsp-accent))] font-medium hover:underline"
        >
          censorlyextension@outlook.sg
        </a>
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-12 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--wsp-navy)/0.6)] hover:text-[hsl(var(--wsp-accent))] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2 rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <ExtensionIcon className="w-10 h-10" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[hsl(var(--wsp-accent))]">
              Censorly
            </span>
          </div>
          <h1 className="mt-6 font-heading font-extrabold tracking-tight text-[hsl(var(--wsp-navy))] leading-[1.05]" style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}>
            Censorly Privacy Policy
          </h1>
          <p className="mt-4 text-sm font-mono text-[hsl(var(--wsp-navy)/0.5)]">
            Last updated: August 13, 2026
          </p>
          <p className="mt-6 text-base text-[hsl(var(--wsp-navy)/0.7)] leading-relaxed">
            This policy describes how the Censorly browser extension ("the
            Extension") handles user data. By installing and using the Extension,
            you agree to the practices described below.
          </p>

          <div className="mt-8 rounded-2xl border border-[hsl(var(--wsp-accent)/0.25)] bg-[hsl(var(--wsp-accent)/0.05)] p-6">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm font-semibold text-[hsl(var(--wsp-accent))]">
                AI Disclaimer
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.75)]">
              This privacy policy was generated with the assistance of AI tools and
              reviewed by the developer. The extension itself was also developed
              with the assistance of AI tools for code generation only. The
              extension contains no AI features and does not use any AI at runtime.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {SECTIONS.map((s) => (
              <section key={s.n} id={`section-${s.n}`} className="scroll-mt-24">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-[hsl(var(--wsp-accent))]">
                    {s.n}
                  </span>
                  <h2 className="font-heading font-bold text-xl text-[hsl(var(--wsp-navy))]">
                    {s.title}
                  </h2>
                </div>
                <div className="mt-3 text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.75)] pl-7">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
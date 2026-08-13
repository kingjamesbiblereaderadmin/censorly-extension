import { Shield as ShieldIcon, Mail, Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ExtensionIcon from "@/components/landing/ExtensionIcon";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const CODE = "px-1.5 py-0.5 rounded-md bg-[hsl(var(--wsp-accent)/0.1)] text-[hsl(var(--wsp-accent))] font-mono text-[0.92em]";

const SECTIONS = [
  {
    n: "1",
    title: "Data collection",
    body: (
      <p>
        Censorly does not collect, transmit, sell, or share personally
        identifiable information, health information, financial information,
        authentication information, personal communications, location,
        browsing history, user activity, or website content. Webpage text is
        examined temporarily on the user's device and is not sent to the
        developer or any third party.
      </p>
    ),
  },
  {
    n: "2",
    title: "Local and browser storage",
    body: (
      <p>
        Censorly stores the user's filter words and phrases, Exact/Wildcard
        choices, filtering mode, enabled state, excluded websites, and
        interface preferences using browser extension storage. When browser
        synchronization is enabled, the browser provider may synchronize these
        extension settings through the user's browser account. Censorly's
        developer does not receive or control that synchronization.
      </p>
    ),
  },
  {
    n: "3",
    title: "External services",
    body: (
      <p>
        Censorly makes no external API calls and uses no analytics,
        advertising, tracking, remote executable code, developer-controlled
        cloud processing, or user accounts.
      </p>
    ),
  },
  {
    n: "4",
    title: "Permissions",
    body: (
      <ul className="space-y-3 list-none">
        {[
          ["storage", "Retains extension preferences."],
          ["activeTab", "Used only when the user opens the popup to identify the current site for exclusions, communicate settings to the current tab, and refresh that tab on request."],
          ["host access", "Required to locate and visually filter matching words on webpages. Page content remains on the device."],
        ].map(([perm, desc]) => (
          <li key={perm} className="flex gap-3 items-start">
            <ShieldIcon className="w-4 h-4 mt-1 text-[hsl(var(--wsp-accent))] shrink-0" strokeWidth={2} />
            <span>
              <code className={CODE}>{perm}</code> — {desc}
            </span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    n: "5",
    title: "Data retention and deletion",
    body: (
      <p>
        The developer receives and retains no user data. Users can delete
        saved extension settings by removing them through the interface,
        clearing extension storage, or uninstalling Censorly.
      </p>
    ),
  },
  {
    n: "6",
    title: "Data-use commitments",
    body: (
      <p>
        Censorly does not sell or transfer user data to third parties; does not
        use or transfer data for purposes unrelated to its single purpose; and
        does not use or transfer data to determine creditworthiness or for
        lending.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-12 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <ExtensionIcon className="w-10 h-10" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[hsl(var(--wsp-accent))]">
              Censorly
            </span>
          </div>
          <h1 className="mt-6 font-heading font-extrabold tracking-tight text-[hsl(var(--wsp-navy))] leading-[1.05]" style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}>
            Censorly Privacy Policy
          </h1>
          <p className="mt-4 text-sm font-mono text-[hsl(var(--wsp-navy)/0.5)]">
            Last updated: August 14, 2026
          </p>
          <p className="mt-6 text-base text-[hsl(var(--wsp-navy)/0.7)] leading-relaxed">
            Censorly processes webpage text locally inside the user's browser
            for the sole purpose of visually filtering words and phrases
            selected by the user.
          </p>

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

          <section id="section-contact" className="mt-12 scroll-mt-24">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm font-semibold text-[hsl(var(--wsp-accent))]">
                7
              </span>
              <h2 className="font-heading font-bold text-xl text-[hsl(var(--wsp-navy))]">
                Contact
              </h2>
            </div>
            <div className="mt-3 text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.75)] pl-7 space-y-3">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[hsl(var(--wsp-accent))] shrink-0" />
                <a
                  href="mailto:censorlyextension@outlook.sg"
                  className="text-[hsl(var(--wsp-accent))] font-medium hover:underline"
                >
                  censorlyextension@outlook.sg
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[hsl(var(--wsp-accent))] shrink-0" />
                <a
                  href="https://censorly-extension.base44.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--wsp-accent))] font-medium hover:underline"
                >
                  https://censorly-extension.base44.app
                </a>
              </p>
            </div>
          </section>

          <div className="mt-12 flex flex-wrap items-center gap-5 text-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-[hsl(var(--wsp-navy)/0.7)] hover:text-[hsl(var(--wsp-accent))] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Home
            </Link>
            <Link
              to="/terms"
              className="text-[hsl(var(--wsp-navy)/0.7)] hover:text-[hsl(var(--wsp-accent))] transition-colors"
            >
              Terms
            </Link>
            <a
              href="mailto:censorlyextension@outlook.sg"
              className="text-[hsl(var(--wsp-navy)/0.7)] hover:text-[hsl(var(--wsp-accent))] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
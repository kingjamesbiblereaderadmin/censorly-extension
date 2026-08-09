import { Shield as ShieldIcon } from "lucide-react";
import ExtensionIcon from "@/components/landing/ExtensionIcon";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const SECTIONS = [
  {
    n: "1",
    title: "Overview",
    body: (
      <p>
        Word Shield Pro is a client-side browser extension that filters, hides,
        censors, or blurs unwanted words on web pages. The Extension is designed
        with privacy as its core principle — all processing happens entirely on
        your device. We do not collect, store, or transmit any user data to any
        server.
      </p>
    ),
  },
  {
    n: "2",
    title: "Data We Do NOT Collect",
    body: (
      <>
        <p>The Extension does NOT collect, store, or transmit:</p>
        <ul className="mt-4 space-y-2.5 list-none">
          {[
            "Personally identifiable information (name, email, address, age, ID)",
            "Health information",
            "Financial or payment information",
            "Authentication information (passwords, credentials)",
            'Personal communications (emails, messages, chats)',
            "Location data (GPS, IP address, region)",
            "Web browsing history (visited URLs, page titles, timestamps)",
            "User activity data (clicks, keystrokes, mouse position, scroll behavior)",
          ].map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[hsl(var(--wsp-accent))] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    n: "3",
    title: "Data Stored Locally",
    body: (
      <>
        <p>
          The Extension uses <code className="px-1.5 py-0.5 rounded-md bg-[hsl(var(--wsp-accent)/0.1)] text-[hsl(var(--wsp-accent))] font-mono text-[0.92em]">chrome.storage.sync</code>{" "}
          to store the following settings on your device:
        </p>
        <ul className="mt-4 space-y-2.5 list-none">
          {[
            "Your custom list of filtered words",
            "Your selected filter mode (Hide, Censor, or Blur)",
            "Per-site exclusion preferences (sites where filtering is disabled)",
          ].map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[hsl(var(--wsp-accent))] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          This data is stored locally in your browser and synced across your
          devices via your Google account's Chrome Sync feature. This data is
          never transmitted to us or any third party. You can clear this data at
          any time by uninstalling the Extension or clearing your browser
          storage.
        </p>
      </>
    ),
  },
  {
    n: "4",
    title: "Website Content Access",
    body: (
      <>
        <p>
          The Extension reads the text content of web pages you visit to
          identify and apply visual filtering to words in your custom list. This
          processing happens entirely in your browser's memory — no page content
          is collected, stored, or transmitted externally. The Extension only
          modifies the visual appearance of matching words using CSS-based
          techniques (hiding, censoring, or blurring). The original text remains
          in the DOM and can still be selected and copied.
        </p>
      </>
    ),
  },
  {
    n: "5",
    title: "Permissions Explained",
    body: (
      <ul className="space-y-3 list-none">
        {[
          ["storage", "Saves your filter word list, filter mode, and site exclusions locally on your device."],
          ["activeTab", "Allows the Extension to scan and filter text on the page you are currently viewing."],
          ["Host permission (all URLs)", "Required so the Extension can filter words on any website you visit. No page content is transmitted anywhere."],
        ].map(([perm, desc]) => (
          <li key={perm} className="flex gap-3 items-start">
            <ShieldIcon className="w-4 h-4 mt-1 text-[hsl(var(--wsp-accent))] shrink-0" strokeWidth={2} />
            <span>
              <code className="px-1.5 py-0.5 rounded-md bg-[hsl(var(--wsp-accent)/0.1)] text-[hsl(var(--wsp-accent))] font-mono text-[0.92em]">{perm}</code>{" "}
              — {desc}
            </span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    n: "6",
    title: "No Remote Code",
    body: (
      <p>
        The Extension does not load or execute any remote JavaScript or
        WebAssembly code. All code is packaged within the Extension itself.
      </p>
    ),
  },
  {
    n: "7",
    title: "No Third-Party Services",
    body: (
      <p>
        The Extension does not integrate with, send data to, or communicate
        with any third-party service, API, or analytics platform. There are no
        trackers, no analytics, and no telemetry within the Extension. This
        policy covers the Extension only; this website is hosted on the Base44
        platform, which collects basic, aggregate visit analytics for the site
        itself — separate from the Extension, which collects nothing.
      </p>
    ),
  },
  {
    n: "8",
    title: "Data Security",
    body: (
      <p>
        Since all data is stored locally in your browser and never transmitted,
        there is no server-side data to secure. Your filter settings are
        protected by your browser's built-in storage security.
      </p>
    ),
  },
  {
    n: "9",
    title: "Children's Privacy",
    body: (
      <p>
        The Extension does not knowingly collect any data from anyone,
        including children under 13. No data is collected from any user of any
        age.
      </p>
    ),
  },
  {
    n: "10",
    title: "Changes to This Policy",
    body: (
      <p>
        If we ever change how the Extension handles data, we will update this
        privacy policy. Since the Extension does not collect or transmit data,
        we do not anticipate any material changes.
      </p>
    ),
  },
  {
    n: "11",
    title: "Contact",
    body: (
      <p>
        If you have questions about this policy, contact us at:{" "}
        <a
          href="mailto:wordshieldpro@outlook.sg"
          className="text-[hsl(var(--wsp-accent))] font-medium hover:underline"
        >
          wordshieldpro@outlook.sg
        </a>
      </p>
    ),
  },
  {
    n: "12",
    title: "AI Disclaimer",
    body: (
      <p>
        This extension was built with the assistance of AI development tools. All
        code has been reviewed and tested by the developer. The AI tools were used
        for development purposes only and do not collect, process, or transmit any
        data. The extension itself is 100% client-side and contains no AI
        functionality.
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
          {/* Header */}
          <div className="flex items-center gap-3">
            <ExtensionIcon className="w-10 h-10" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[hsl(var(--wsp-accent))]">
              Word Shield Pro
            </span>
          </div>
          <h1 className="mt-6 font-heading font-extrabold tracking-tight text-[hsl(var(--wsp-navy))] leading-[1.05]" style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}>
            Policy
          </h1>
          <p className="mt-4 text-sm font-mono text-[hsl(var(--wsp-navy)/0.5)]">
            Last updated: August 7, 2026
          </p>
          <p className="mt-6 text-base text-[hsl(var(--wsp-navy)/0.7)] leading-relaxed">
            This policy describes how the Word Shield Pro browser extension ("the
            Extension") handles user data. By installing and using the Extension,
            you agree to the practices described below.
          </p>

          {/* Sections */}
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
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/landing/ScrollReveal";
import { StaggerGroup, RevealItem } from "@/components/landing/Reveal";

const ENTRIES = [
  {
    version: "v5.7",
    date: "August 18, 2026",
    changes: [
      "Import: Upload a .txt or .csv file to bulk-add words (one word per line, or comma/semicolon separated). Duplicates are automatically skipped.",
      "Export: Download your current word list as censorly-words.txt to back up or move to another browser.",
      "Step-by-step instructions shown in the popup for the export → edit → import workflow.",
      "Toast notifications confirm how many words were imported or exported.",
    ],
  },
  {
    version: "v5.6",
    date: "August 17, 2026",
    changes: [
      "Local sensitive-site protection: automatically disables filtering on banking, payment, and login pages.",
      'Terms and Privacy links now point to website pages instead of bundled local files.',
      '"Made with Superagent AI" credit added to website.',
    ],
  },
  {
    version: "v5.5",
    date: "August 15, 2026",
    changes: [
      "Firefox variant restricted to desktop-only (no Android support).",
      "Firefox AMO listing published: https://addons.mozilla.org/en-GB/android/addon/censorly/",
      "All manifests, popup footers, and policy pages updated to v5.5.",
    ],
  },
  {
    version: "v5.4",
    date: "August 14, 2026",
    changes: [
      "Popup border redesign: full popup has a distinct 2px theme-aware teal-gray outer perimeter.",
      "Internal controls use subtle 1px borders for visual hierarchy.",
      "DOM regression tests pass. Firefox web-ext lint: 0 errors, 0 warnings, 0 notices.",
    ],
  },
  {
    version: "v5.3",
    date: "August 14, 2026",
    changes: [
      "Performance overhaul: content scripts now run at document_start.",
      "Single precompiled combined regex replaces per-word regex construction.",
      "MutationObserver processes only changed DOM regions instead of full-page rescans.",
      "Filter mode changes update existing spans instantly without re-scan.",
      "Benchmark: ~430ms for 2,000 initial blocks, ~93ms for 200 dynamic additions.",
    ],
  },
  {
    version: "v5.2",
    date: "August 13, 2026",
    changes: ["Internal stability improvements and minor bug fixes."],
  },
  {
    version: "v5.1",
    date: "August 13, 2026",
    changes: [
      "Per-word Exact/Wildcard control added to the popup.",
      "New and existing words default to Exact match.",
      "Wildcard mode matches the saved root plus contiguous word endings (e.g. spam → spamming, spammer, spammed).",
      "Stored locally in chrome.storage.sync as wildcardWords.",
    ],
  },
  {
    version: "v5.0",
    date: "August 12, 2026",
    changes: [
      "Rebranded from TextVeil to Censorly.",
      "Name verified available across Chrome Web Store, Firefox AMO, Edge Add-ons, and Opera Add-ons.",
      'New icon: document with censor bars + "Censorly" text on teal gradient.',
      "CSS class prefix changed from tv- to cs-.",
      "Contact email updated to censorlyextension@outlook.sg.",
      "Website URL: https://censorly-extension.base44.app",
    ],
  },
  {
    version: "v4.1",
    date: "August 10, 2026",
    changes: ['Refined "censor bar" icon design with teal theme.', "Bug-fixed filtering engine."],
  },
  {
    version: "v4.0",
    date: "August 9, 2026",
    changes: [
      "Rebranded from Word Shield Pro to TextVeil.",
      "New teal/cyan color scheme (#0d9488 primary, #14b8a6 accent, #0f766e dark teal).",
      "New icon: teal gradient with flowing veil/wave motif over text lines.",
      "New contact email: textveil@outlook.sg.",
      "CSS class prefix changed from wf- to tv-.",
      "Website URL: textveil.base44.app.",
    ],
  },
  {
    version: "v3.8.2",
    date: "August 8, 2026",
    changes: ["Website link added to popup footer and manifest.", 'Fixed filtering bypasses in dynamic "related search" elements.'],
  },
  {
    version: "v3.6",
    date: "August 6, 2026",
    changes: ["Shield emoji (🛡️) icon design introduced."],
  },
  {
    version: "v3.5",
    date: "August 5, 2026",
    changes: [
      "Full WCAG AA contrast audit and fix across all popup elements.",
      "Every text color in both dark and light themes now passes 4.5:1 minimum.",
      "All 42 text-on-surface combinations verified compliant.",
    ],
  },
  {
    version: "v3.4",
    date: "August 4, 2026",
    changes: [
      "Fixed low-contrast text in dark mode popup.",
      "Brightened dark-theme text colors (#b4b4cc / #9797b3 / #a3a3bf / #c8c8dc).",
      "All section labels, hint text, and site names now 6:1 to 10:1 contrast ratio.",
    ],
  },
  {
    version: "v3.3",
    date: "August 3, 2026",
    changes: [
      "Renamed extension from WordShield to Word Filter Pro.",
      "Added light/dark theme support using CSS variables with prefers-color-scheme.",
      "Censor mode boxes changed from pure #000 to #1a1a1a with subtle box-shadow.",
    ],
  },
  {
    version: "v3.2",
    date: "August 2, 2026",
    changes: ["Multi-word filter phrases now match hyphens and underscores between words.", "Fixed flexible-space regex bug (was silently a no-op)."],
  },
  {
    version: "v3.1",
    date: "August 1, 2026",
    changes: [
      "Hide and Censor modes now visually distinct (Hide = invisible, Censor = black redaction boxes).",
      "Fixed accent leak with diacritics — added stripDiacritics() normalization.",
      "Fixed invisible enable/disable toggle (CSS class was accidentally deleted).",
      "Added per-site exclusion feature.",
    ],
  },
  {
    version: "v3.0",
    date: "July 31, 2026",
    changes: [
      "Removed all OCR, PDF editor, and PDF scanner features.",
      "Now a clean web page text filter only (hide/censor/blur modes).",
      "Added disclaimer about PDF/Word doc limitations.",
      "Removed tesseract.min.js, ocr-page.js, pdf-editor, pdf-scanner, webRequest permission.",
      "Extension size reduced from 45KB to 12KB.",
    ],
  },
  {
    version: "v2.5",
    date: "July 28, 2026",
    changes: [
      "Full client-side PDF editor with auto-redaction, auto-highlighting, manual redaction/highlighting.",
      "Text annotations, shape drawing, page manipulation (rotation/reordering/deletion/cropping).",
      "Merging, watermarking, and password protection.",
      "Used pdf.js, pdf-lib, and Tesseract.js for OCR.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[hsl(var(--wsp-bg-accent))]">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 wsp-grid-lines opacity-50 pointer-events-none" />
          <div className="absolute -top-32 right-0 w-[28rem] h-[28rem] bg-[hsl(var(--wsp-accent)/0.18)] rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-10 pt-16 pb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--wsp-navy)/0.6)] hover:text-[hsl(var(--wsp-accent))] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2 rounded"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <ScrollReveal>
              <span className="mt-8 inline-block text-[11px] font-mono uppercase tracking-[0.22em] text-[hsl(var(--wsp-accent))]">
                Censorly Changelog
              </span>
              <h1 className="mt-3 font-heading font-bold tracking-tight text-[hsl(var(--wsp-navy))]" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}>
                Version history
              </h1>
              <p className="mt-4 text-lg text-[hsl(var(--wsp-navy)/0.65)] max-w-2xl">
                Every update to Censorly, from the latest v5.7 import/export features back to the original PDF editor days.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 lg:px-10 pb-24">
          <StaggerGroup className="relative flex flex-col gap-6">
            <span className="absolute left-[7px] top-2 bottom-2 w-px bg-[hsl(var(--wsp-accent)/0.2)]" aria-hidden="true" />
            {ENTRIES.map((entry) => (
              <RevealItem key={entry.version}>
                <article className="relative pl-10">
                  <span className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[hsl(var(--wsp-accent))] ring-4 ring-[hsl(var(--wsp-bg-accent))]" aria-hidden="true" />
                  <div className="rounded-3xl border border-[hsl(var(--wsp-accent)/0.18)] bg-white p-7 sm:p-8 shadow-sm">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h2 className="font-heading font-bold text-2xl text-[hsl(var(--wsp-navy))]">
                        {entry.version}
                      </h2>
                      <span className="font-mono text-xs uppercase tracking-[0.16em] text-[hsl(var(--wsp-accent))]">
                        {entry.date}
                      </span>
                    </div>
                    <ul className="mt-5 flex flex-col gap-3">
                      {entry.changes.map((c, i) => (
                        <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.72)]">
                          <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[hsl(var(--wsp-accent)/0.6)]" aria-hidden="true" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </RevealItem>
            ))}
          </StaggerGroup>
        </section>
      </main>
      <Footer />
    </>
  );
}
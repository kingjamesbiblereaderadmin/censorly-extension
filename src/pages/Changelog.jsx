import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Wrench, Gauge, Palette, RefreshCw, FileText, MoreHorizontal } from "lucide-react";
import ScrollReveal from "@/components/landing/ScrollReveal";

// Change categories — each gets a label, icon, and badge color
const TYPES = {
  Rebrand: {
    label: "Rebrand",
    plural: "Rebrand",
    icon: RefreshCw,
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-400",
  },
  Feature: {
    label: "Feature",
    plural: "Features",
    icon: Sparkles,
    badge: "bg-[hsl(var(--wsp-accent)/0.12)] text-[hsl(var(--wsp-accent))] border-[hsl(var(--wsp-accent)/0.25)]",
    dot: "bg-[hsl(var(--wsp-accent))]",
  },
  Improvement: {
    label: "Improvement",
    plural: "Improvements",
    icon: Gauge,
    badge: "bg-blue-50 text-blue-600 border-blue-200",
    dot: "bg-blue-400",
  },
  Fix: {
    label: "Fix",
    plural: "Fixes",
    icon: Wrench,
    badge: "bg-rose-50 text-rose-600 border-rose-200",
    dot: "bg-rose-400",
  },
  Design: {
    label: "Design",
    plural: "Design",
    icon: Palette,
    badge: "bg-purple-50 text-purple-600 border-purple-200",
    dot: "bg-purple-400",
  },
  Docs: {
    label: "Docs",
    plural: "Docs",
    icon: FileText,
    badge: "bg-slate-100 text-slate-600 border-slate-200",
    dot: "bg-slate-400",
  },
  Other: {
    label: "Other",
    plural: "Other",
    icon: MoreHorizontal,
    badge: "bg-slate-100 text-slate-500 border-slate-200",
    dot: "bg-slate-300",
  },
};

const TYPE_ORDER = ["Rebrand", "Feature", "Improvement", "Fix", "Design", "Docs", "Other"];

const ENTRIES = [
  {
    version: "v6.1",
    date: "September 2, 2026",
    changes: [
      { type: "Fix", text: "Firefox: fixed popup opening with a mis-sized window (visible resize/reposition on open, leaving unused space beside the content). Popup now renders fully hidden and reveals only once state has loaded and all sections have finished drawing, so it opens already at its final size." },
    ],
  },
  {
    version: "v5.9",
    date: "August 19, 2026",
    changes: [
      { type: "Feature", text: 'Added "Source Code" link in the extension popup footer, pointing to the GitHub repository at https://github.com/kingjamesbiblereaderadmin/censorly.' },
    ],
  },
  {
    version: "v5.8",
    date: "August 18, 2026",
    changes: [
      { type: "Fix", text: "Fixed CSS bug where the native file input was visible instead of hidden in the import/export row." },
      { type: "Improvement", text: "Import accepts any .txt or .csv filename — no need to match the exported filename." },
      { type: "Improvement", text: "Updated footer links to use remote website URLs for Terms and Privacy." },
    ],
  },
  {
    version: "v5.7",
    date: "August 18, 2026",
    changes: [
      { type: "Feature", text: "Import: Upload a .txt or .csv file to bulk-add words (one word per line, or comma/semicolon separated). Duplicates are automatically skipped." },
      { type: "Feature", text: "Export: Download your current word list as censorly-words.txt to back up or move to another browser." },
      { type: "Improvement", text: "Step-by-step instructions shown in the popup for the export → edit → import workflow." },
      { type: "Improvement", text: "Toast notifications confirm how many words were imported or exported." },
      { type: "Fix", text: "Fixed CSS bug where the native file input was visible instead of hidden." },
    ],
  },
  {
    version: "v5.6",
    date: "August 17, 2026",
    changes: [
      { type: "Feature", text: "Local sensitive-site protection: automatically disables filtering on banking, payment, and login pages." },
      { type: "Improvement", text: "Terms and Privacy links now point to website pages instead of bundled local files." },
      { type: "Docs", text: '"Made with Superagent AI" credit added to website.' },
    ],
  },
  {
    version: "v5.5",
    date: "August 15, 2026",
    changes: [
      { type: "Other", text: "Firefox variant restricted to desktop-only (no Android support)." },
      { type: "Feature", text: "Firefox AMO listing published: https://addons.mozilla.org/en-GB/android/addon/censorly/" },
      { type: "Other", text: "All manifests, popup footers, and policy pages updated to v5.5." },
    ],
  },
  {
    version: "v5.4",
    date: "August 14, 2026",
    changes: [
      { type: "Design", text: "Popup border redesign: full popup has a distinct 2px theme-aware teal-gray outer perimeter." },
      { type: "Design", text: "Internal controls use subtle 1px borders for visual hierarchy." },
      { type: "Other", text: "DOM regression tests pass. Firefox web-ext lint: 0 errors, 0 warnings, 0 notices." },
    ],
  },
  {
    version: "v5.3",
    date: "August 14, 2026",
    changes: [
      { type: "Improvement", text: "Performance overhaul: content scripts now run at document_start." },
      { type: "Improvement", text: "Single precompiled combined regex replaces per-word regex construction." },
      { type: "Improvement", text: "MutationObserver processes only changed DOM regions instead of full-page rescans." },
      { type: "Improvement", text: "Filter mode changes update existing spans instantly without re-scan." },
      { type: "Other", text: "Benchmark: ~430ms for 2,000 initial blocks, ~93ms for 200 dynamic additions." },
    ],
  },
  {
    version: "v5.2",
    date: "August 13, 2026",
    changes: [
      { type: "Improvement", text: "Internal stability improvements and minor bug fixes." },
    ],
  },
  {
    version: "v5.1",
    date: "August 13, 2026",
    changes: [
      { type: "Feature", text: "Per-word Exact/Wildcard control added to the popup." },
      { type: "Improvement", text: "New and existing words default to Exact match." },
      { type: "Improvement", text: "Wildcard mode matches the saved root plus contiguous word endings (e.g. spam → spamming, spammer, spammed)." },
      { type: "Other", text: "Stored locally in chrome.storage.sync as wildcardWords." },
    ],
  },
  {
    version: "v5.0",
    date: "August 12, 2026",
    note:
      "TextVeil was a fine working name, but it was too generic to register as a brand — the .com domain was parked, the social handles were taken, and 'TextVeil'-style names already existed on a few stores. I needed something short, pronounceable, available on every add-on marketplace, and descriptive enough that a new user instantly understands it censors text. 'Censorly' cleared the Chrome Web Store, Firefox AMO, Edge Add-ons, and Opera Add-ons name checks, so I committed to it and refreshed the icon, class prefix, and contact details to match.",
    changes: [
      { type: "Rebrand", text: "Rebranded from TextVeil to Censorly." },
      { type: "Other", text: "Name verified available across Chrome Web Store, Firefox AMO, Edge Add-ons, and Opera Add-ons." },
      { type: "Design", text: 'New icon: document with censor bars + "Censorly" text on teal gradient.' },
      { type: "Other", text: "CSS class prefix changed from tv- to cs-." },
      { type: "Other", text: "Contact email updated to censorlyextension@outlook.sg." },
      { type: "Other", text: "Website URL: https://censorly-extension.base44.app" },
    ],
  },
  {
    version: "v4.1",
    date: "August 10, 2026",
    changes: [
      { type: "Design", text: 'Refined "censor bar" icon design with teal theme.', removedNote: "Replaced in v5.0 (August 12, 2026)." },
      { type: "Fix", text: "Bug-fixed filtering engine." },
    ],
  },
  {
    version: "v4.0",
    date: "August 9, 2026",
    note:
      "Word Shield Pro was the original name, but it read like an antivirus or password-manager product and was already crowded out by unrelated 'Word Shield' listings on the add-on stores — users searching for a text filter couldn't find it, and the 'Pro' suffix felt generic and dated. I wanted a fresh, memorable identity that signalled privacy and concealment rather than security, so I moved to TextVeil with a teal/cyan palette and a veil motif, and took the chance to refresh the icon, class prefix, and contact email at the same time.",
    changes: [
      { type: "Rebrand", text: "Rebranded from Word Shield Pro to TextVeil." },
      { type: "Design", text: "New teal/cyan color scheme (#0d9488 primary, #14b8a6 accent, #0f766e dark teal)." },
      { type: "Design", text: "New icon: teal gradient with flowing veil/wave motif over text lines." },
      { type: "Other", text: "New contact email: textveil@outlook.sg." },
      { type: "Other", text: "CSS class prefix changed from wf- to tv-." },
      { type: "Other", text: "Website URL: textveil.base44.app." },
    ],
  },
  {
    version: "v3.8.2",
    date: "August 8, 2026",
    changes: [
      { type: "Improvement", text: "Website link added to popup footer and manifest." },
      { type: "Fix", text: 'Fixed filtering bypasses in dynamic "related search" elements.' },
    ],
  },
  {
    version: "v3.6",
    date: "August 6, 2026",
    changes: [
      { type: "Design", text: "Shield emoji (🛡️) icon design introduced.", removedNote: "Replaced in v4.0 (August 9, 2026)." },
    ],
  },
  {
    version: "v3.5",
    date: "August 5, 2026",
    changes: [
      { type: "Fix", text: "Full WCAG AA contrast audit and fix across all popup elements." },
      { type: "Improvement", text: "Every text color in both dark and light themes now passes 4.5:1 minimum." },
      { type: "Other", text: "All 42 text-on-surface combinations verified compliant." },
    ],
  },
  {
    version: "v3.4",
    date: "August 4, 2026",
    changes: [
      { type: "Fix", text: "Fixed low-contrast text in dark mode popup." },
      { type: "Fix", text: "Brightened dark-theme text colors to #b4b4cc / #9797b3 / #a3a3bf / #c8c8dc." },
      { type: "Improvement", text: "All section labels, hint text, and site names now 6:1 to 10:1 contrast ratio." },
    ],
  },
  {
    version: "v3.3",
    date: "August 3, 2026",
    changes: [
      { type: "Rebrand", text: "Renamed extension from WordShield to Word Filter Pro." },
      { type: "Feature", text: "Added light/dark theme support using CSS variables with prefers-color-scheme." },
      { type: "Design", text: "Censor mode boxes changed from pure #000 to #1a1a1a with subtle box-shadow." },
    ],
  },
  {
    version: "v3.2",
    date: "August 2, 2026",
    changes: [
      { type: "Improvement", text: "Multi-word filter phrases now match hyphens and underscores between words." },
      { type: "Fix", text: "Fixed flexible-space regex bug (was silently a no-op)." },
    ],
  },
  {
    version: "v3.1",
    date: "August 1, 2026",
    changes: [
      { type: "Improvement", text: "Hide and Censor modes now visually distinct (Hide = invisible, Censor = black redaction boxes)." },
      { type: "Fix", text: "Fixed accent leak with diacritics — added stripDiacritics() normalization." },
      { type: "Fix", text: "Fixed invisible enable/disable toggle (CSS class was accidentally deleted)." },
      { type: "Feature", text: "Added per-site exclusion feature." },
    ],
  },
  {
    version: "v3.0",
    date: "July 31, 2026",
    changes: [
      { type: "Other", text: "Removed all OCR, PDF editor, and PDF scanner features." },
      { type: "Other", text: "Now a clean web page text filter only (hide/censor/blur modes)." },
      { type: "Docs", text: "Added disclaimer about PDF/Word doc limitations." },
      { type: "Other", text: "Removed tesseract.min.js, ocr-page.js, pdf-editor, pdf-scanner, webRequest permission." },
      { type: "Improvement", text: "Extension size reduced from 45KB to 12KB." },
    ],
  },
  {
    version: "v2.5",
    date: "July 28, 2026",
    changes: [
      { type: "Feature", text: "Full client-side PDF editor with auto-redaction, auto-highlighting, manual redaction/highlighting.", removedNote: "Removed in v3.0 (July 31, 2026)." },
      { type: "Feature", text: "Text annotations, shape drawing, page manipulation (rotation/reordering/deletion/cropping).", removedNote: "Removed in v3.0 (July 31, 2026)." },
      { type: "Feature", text: "Merging, watermarking, and password protection.", removedNote: "Removed in v3.0 (July 31, 2026)." },
      { type: "Other", text: "Used pdf.js, pdf-lib, and Tesseract.js for OCR.", removedNote: "Removed in v3.0 (July 31, 2026)." },
    ],
  },
];

// Group a version's changes by type, preserving TYPE_ORDER
function groupByType(changes) {
  const groups = {};
  for (const c of changes) {
    if (!groups[c.type]) groups[c.type] = [];
    groups[c.type].push(c);
  }
  return TYPE_ORDER.filter((t) => groups[t]).map((t) => ({ type: t, items: groups[t] }));
}

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
                Every update to Censorly, from the latest v6.1 Firefox popup fix back to the original PDF editor days. Changes are grouped by type — features, improvements, fixes, design, and rebrands.
              </p>
              <p className="mt-3 text-sm text-[hsl(var(--wsp-navy)/0.5)]">
                This changelog was generated by AI from the project's commit history and release notes.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {TYPE_ORDER.map((t) => {
                  const T = TYPES[t];
                  return (
                    <span key={t} className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${T.badge}`}>
                      <T.icon className="w-3 h-3" strokeWidth={2} />
                      {T.label}
                    </span>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 lg:px-10 pb-24">
          <div className="relative flex flex-col gap-6">
            <span className="absolute left-[7px] top-2 bottom-2 w-px bg-[hsl(var(--wsp-accent)/0.2)]" aria-hidden="true" />
            {ENTRIES.map((entry) => {
              const groups = groupByType(entry.changes);
              return (
                <ScrollReveal key={entry.version}>
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

                      {entry.note && (
                        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 sm:p-5">
                          <div className="flex items-center gap-2 text-amber-700">
                            <RefreshCw className="w-4 h-4" strokeWidth={2} />
                            <span className="text-[11px] font-mono uppercase tracking-[0.16em]">Why the name change</span>
                          </div>
                          <p className="mt-2 text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.78)]">
                            {entry.note}
                          </p>
                        </div>
                      )}

                      <div className="mt-6 flex flex-col gap-6">
                        {groups.map((g) => {
                          const T = TYPES[g.type];
                          return (
                            <div key={g.type}>
                              <div className="flex items-center gap-2 mb-3">
                                <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${T.badge}`}>
                                  <T.icon className="w-3 h-3" strokeWidth={2} />
                                  {T.plural}
                                </span>
                              </div>
                              <ul className="flex flex-col gap-2.5">
                                {g.items.map((c, i) => (
                                  <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.72)]">
                                    <span className={`mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full ${T.dot}`} aria-hidden="true" />
                                    <div className="flex flex-col">
                                      <span>{c.text}</span>
                                      {c.removedNote && (
                                        <span className="mt-1 inline-flex items-center gap-1.5 text-xs italic text-rose-500">
                                          <span className="w-1 h-1 rounded-full bg-rose-400" aria-hidden="true" />
                                          {c.removedNote}
                                        </span>
                                      )}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
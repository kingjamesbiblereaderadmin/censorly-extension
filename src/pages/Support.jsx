import { Mail, LifeBuoy, Puzzle, MonitorSmartphone, RefreshCw, ListPlus } from "lucide-react";
import ExtensionIcon from "@/components/landing/ExtensionIcon";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import DownloadButtons from "@/components/landing/DownloadButtons";

const TOPICS = [
  {
    icon: MonitorSmartphone,
    title: "Supported browsers",
    body: "Censorly runs on desktop Chromium browsers — Chrome, Edge, and Brave — plus Firefox and Opera on Windows, Mac, and Linux. It does not run on mobile browsers.",
  },
  {
    icon: Puzzle,
    title: "Installing the extension",
    body: "Download the zip for your browser, unzip it, then load it unpacked: chrome://extensions (Chrome/Edge/Brave), about:debugging → This Firefox (Firefox), or the extensions page (Opera). Enable developer mode first.",
  },
  {
    icon: RefreshCw,
    title: "Filters not showing up",
    body: "If a page was already open, click “Refresh page to apply” in the popup or reload the tab. New pages are filtered automatically as they load.",
  },
  {
    icon: ListPlus,
    title: "Exact vs Wildcard matching",
    body: "Exact matches only that word. Wildcard also matches endings — filtering “spam” also filters “spamming”, “spammer”, and “spammed”.",
  },
];

export default function Support() {
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
            Support
          </h1>
          <p className="mt-4 text-base text-[hsl(var(--wsp-navy)/0.7)] leading-relaxed">
            Censorly is a free, local-only extension. Here’s how to install it,
            troubleshoot common issues, and reach me — no account required.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {TOPICS.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-[hsl(var(--wsp-navy)/0.08)] bg-white p-6"
              >
                <div className="w-11 h-11 rounded-2xl bg-[hsl(var(--wsp-accent)/0.08)] text-[hsl(var(--wsp-accent))] flex items-center justify-center">
                  <t.icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <h2 className="mt-4 font-heading font-bold text-lg text-[hsl(var(--wsp-navy))]">
                  {t.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--wsp-navy)/0.65)]">
                  {t.body}
                </p>
              </div>
            ))}
          </div>

          <section className="mt-12">
            <div className="rounded-3xl bg-[hsl(var(--wsp-navy))] p-7 sm:p-9 text-white relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[hsl(var(--wsp-accent)/0.3)] rounded-full blur-3xl pointer-events-none" />
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-[hsl(var(--wsp-accent))]">
                    <LifeBuoy className="w-4 h-4" />
                    <span className="text-[11px] font-mono uppercase tracking-[0.16em]">
                      Still need help?
                    </span>
                  </div>
                  <h2 className="mt-3 font-heading font-bold text-2xl">
                    Email the developer
                  </h2>
                  <p className="mt-2 text-white/70 text-sm max-w-md">
                    Questions, bug reports, or feedback — write to me and I’ll
                    get back to you.
                  </p>
                  <a
                    href="mailto:censorlyextension@outlook.sg"
                    className="mt-4 inline-flex items-center gap-2 text-[hsl(var(--wsp-accent))] font-medium hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    censorlyextension@outlook.sg
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <div className="text-center text-xs font-mono uppercase tracking-[0.18em] text-[hsl(var(--wsp-navy)/0.45)] mb-5">
              Get Censorly
            </div>
            <div className="flex justify-center">
              <DownloadButtons />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
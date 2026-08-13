import { Download, FolderArchive, Puzzle, Upload } from "lucide-react";
import ExtensionIcon from "./ExtensionIcon";
import DownloadButtons from "./DownloadButtons";
import { SectionLabel } from "./HowItWorks";
import ScrollReveal from "./ScrollReveal";
import { StaggerGroup, RevealItem } from "./Reveal";

const STEPS = [
  { icon: Download, title: "Download the ZIP", body: "Grab the latest build from the link below." },
  { icon: FolderArchive, title: "Unzip the folder", body: "Extract it anywhere on your computer." },
  { icon: Puzzle, title: "Open chrome://extensions", body: "Enable Developer mode in the top-right corner." },
  { icon: Upload, title: "Click \"Load unpacked\"", body: "Select the unzipped folder. Done — you're shielded." },
];

export default function Installation() {
  return (
    <section id="install" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="max-w-2xl">
            <SectionLabel>Installation</SectionLabel>
            <h2 className="mt-4 font-heading font-bold text-[hsl(var(--wsp-navy))] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Up and running in under a minute
            </h2>
            <p className="mt-4 text-lg text-[hsl(var(--wsp-navy)/0.65)]">
              No Chrome Web Store detour. Load it directly and you're ready.
            </p>
          </div>
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <RevealItem key={s.title}>
              <div className="relative rounded-3xl border border-[hsl(var(--wsp-navy)/0.08)] bg-white p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <span className="absolute top-5 right-5 font-mono text-xs font-semibold text-[hsl(var(--wsp-navy)/0.25)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--wsp-accent)/0.08)] flex items-center justify-center text-[hsl(var(--wsp-accent))]">
                  <s.icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-heading font-semibold text-base text-[hsl(var(--wsp-navy))]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--wsp-navy)/0.6)]">{s.body}</p>
              </div>
            </RevealItem>
          ))}
        </StaggerGroup>

        <ScrollReveal>
          <div className="mt-10 rounded-3xl bg-[hsl(var(--wsp-navy))] p-6 lg:p-8 font-mono text-sm text-white/80 overflow-x-auto shadow-xl">
            <div className="flex items-center gap-2 mb-3 text-white/40 text-xs">
              <span className="w-3 h-3 rounded-full bg-white/15" />
              <span className="w-3 h-3 rounded-full bg-white/15" />
              <span className="w-3 h-3 rounded-full bg-white/15" />
              <span className="ml-2">terminal</span>
            </div>
            <code className="block">
              <span className="text-[hsl(var(--wsp-accent))]">$</span> download censorly.zip<br />
              <span className="text-[hsl(var(--wsp-accent))]">$</span> unzip censorly.zip<br />
              <span className="text-[hsl(var(--wsp-accent))]">$</span> open chrome://extensions <span className="text-white/40"># enable Developer mode</span><br />
              <span className="text-[hsl(var(--wsp-accent))]">$</span> click "Load unpacked" <span className="text-white/40"># select the folder</span><br />
              <span className="text-green-400">✓</span> shielded.
            </code>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <DownloadButtons />
            <span className="inline-flex items-center gap-2 text-sm text-[hsl(var(--wsp-navy)/0.5)] font-mono">
              <ExtensionIcon className="w-4 h-4" />
              v5.1 · ~35KB · open source · Chrome/Edge: chrome://extensions · Firefox: about:debugging · Opera: extensions page
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
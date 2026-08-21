import { Monitor, Smartphone } from "lucide-react";

export default function DesktopOnlyBadge({ className = "" }) {
  return (
    <div
      className={`inline-flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 rounded-3xl sm:rounded-full border border-[hsl(var(--wsp-navy)/0.1)] bg-[hsl(var(--wsp-navy)/0.03)] px-5 py-3 sm:py-2.5 text-xs font-medium text-[hsl(var(--wsp-navy)/0.7)] ${className}`}
    >
      <span className="inline-flex items-center gap-1.5 text-center sm:text-left">
        <Monitor className="w-3.5 h-3.5 shrink-0 text-[hsl(var(--wsp-accent))]" strokeWidth={2} />
        Works on Chrome, Edge, Brave, Firefox &amp; Opera for Windows, Mac &amp; Linux desktop
      </span>
      <span className="w-10 h-px sm:w-px sm:h-3.5 bg-[hsl(var(--wsp-navy)/0.15)]" aria-hidden="true" />
      <span className="inline-flex items-center gap-1.5 text-center sm:text-left">
        <Smartphone className="w-3.5 h-3.5 shrink-0 text-[hsl(var(--wsp-accent))]" strokeWidth={2} />
        Works on Mobile — Titanium, Edge, and Firefox
      </span>
    </div>
  );
}

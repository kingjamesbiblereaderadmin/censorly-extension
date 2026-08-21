import { Monitor, Smartphone } from "lucide-react";

export default function DesktopOnlyBadge({ className = "" }) {
  return (
    <div className={`flex flex-col items-center gap-1.5 ${className}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--wsp-navy)/0.1)] bg-[hsl(var(--wsp-navy)/0.03)] px-3 py-1.5 text-xs font-medium text-[hsl(var(--wsp-navy)/0.7)]">
        <Monitor className="w-3.5 h-3.5 text-[hsl(var(--wsp-accent))]" strokeWidth={2} />
        Works on Chrome, Edge, Brave, Firefox &amp; Opera for Windows, Mac &amp; Linux desktop
      </span>
      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[hsl(var(--wsp-navy)/0.55)]">
        <Smartphone className="w-3 h-3 text-[hsl(var(--wsp-accent))]" strokeWidth={2} />
        Works on Mobile — Titanium, Edge, and Firefox
      </span>
    </div>
  );
}
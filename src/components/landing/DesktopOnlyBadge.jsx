import { Monitor } from "lucide-react";

export default function DesktopOnlyBadge({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-[hsl(var(--wsp-navy)/0.1)] bg-[hsl(var(--wsp-navy)/0.03)] px-3 py-1.5 text-xs font-medium text-[hsl(var(--wsp-navy)/0.7)] ${className}`}
    >
      <Monitor className="w-3.5 h-3.5 text-[hsl(var(--wsp-accent))]" strokeWidth={2} />
      Mobile support is limited — works on Chrome, Edge, Brave, Firefox &amp; Opera for Windows, Mac &amp; Linux desktop
    </span>
  );
}
import { Sparkles } from "lucide-react";

export default function IOSAvailabilityBadge({ className = "" }) {
  return (
    <div
      className={`inline-flex items-center justify-center gap-1.5 rounded-full border border-[hsl(var(--wsp-navy)/0.1)] bg-[hsl(var(--wsp-navy)/0.03)] px-5 py-2.5 text-xs font-medium text-[hsl(var(--wsp-navy)/0.7)] text-center ${className}`}
    >
      <Sparkles className="w-3.5 h-3.5 shrink-0 text-[hsl(var(--wsp-accent))]" strokeWidth={2} />
      Coming soon — iPhone, iPad &amp; macOS · not yet available
    </div>
  );
}

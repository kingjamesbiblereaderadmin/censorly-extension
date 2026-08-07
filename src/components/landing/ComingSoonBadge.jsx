import { Sparkles } from "lucide-react";

export default function ComingSoonBadge({ className = "" }) {
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--wsp-accent)/0.35)] bg-[hsl(var(--wsp-accent)/0.08)] px-2.5 py-1 text-[11px] font-medium text-[hsl(var(--wsp-accent))] " +
        className
      }
    >
      <Sparkles className="w-3 h-3" strokeWidth={2} />
      Coming Soon to Chrome Web Store
    </span>
  );
}
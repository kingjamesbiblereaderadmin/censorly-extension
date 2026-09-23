import { Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

export default function IOSAvailabilityCard({ className = "" }) {
  return (
    <div
      className={`wsp-glow inline-flex flex-col items-center gap-3 rounded-2xl border border-[hsl(var(--wsp-accent)/0.35)] bg-[hsl(var(--wsp-accent)/0.06)] px-6 py-5 text-center max-w-xl ${className}`}
    >
      <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[hsl(var(--wsp-accent))] text-white shrink-0">
        <Smartphone className="w-5 h-5" strokeWidth={2} />
      </span>
      <div>
        <p className="font-heading font-semibold text-base text-[hsl(var(--wsp-navy))]">
          Coming to iPhone and iPad
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-[hsl(var(--wsp-navy)/0.65)]">
          Censorly is being built as a Safari Web Extension for iOS and iPadOS.
          It is not on the App Store yet — the download link will appear here the
          moment it goes live. Follow the{" "}
          <Link
            to="/changelog"
            className="font-medium text-[hsl(var(--wsp-accent))] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2 rounded"
          >
            changelog
          </Link>{" "}
          for progress updates.
        </p>
      </div>
    </div>
  );
}
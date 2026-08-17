import { Globe } from "lucide-react";

const AMO_URL = "https://addons.mozilla.org/en-GB/android/addon/censorly/";

export default function FirefoxPromo({ className = "" }) {
  return (
    <div
      className={`w-full rounded-2xl border border-[hsl(var(--wsp-accent)/0.35)] bg-[hsl(var(--wsp-accent)/0.05)] p-5 sm:p-6 ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-11 h-11 rounded-2xl bg-[hsl(var(--wsp-accent)/0.12)] flex items-center justify-center text-[hsl(var(--wsp-accent))]">
          <Globe className="w-5 h-5" strokeWidth={1.8} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading font-semibold text-[hsl(var(--wsp-navy))] text-base sm:text-lg leading-tight">
            Get Censorly for Firefox
          </h3>
          <p className="mt-1 text-sm text-[hsl(var(--wsp-navy)/0.75)]">
            Install Censorly from Firefox Add-ons.
          </p>
          <a
            href={AMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-[hsl(var(--wsp-primary))] px-5 py-3 text-sm font-semibold text-white hover:bg-[hsl(var(--wsp-primary-hover))] transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2"
          >
            <Globe className="w-4 h-4" strokeWidth={1.8} />
            Get for Firefox
          </a>
        </div>
      </div>
    </div>
  );
}
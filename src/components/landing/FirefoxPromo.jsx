import { Globe, ExternalLink } from "lucide-react";

const AMO_URL = "https://addons.mozilla.org/en-GB/android/addon/censorly/";

export default function FirefoxPromo({ className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-[hsl(var(--wsp-accent)/0.35)] bg-[hsl(var(--wsp-accent)/0.06)] p-5 sm:p-6 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <span
            className="shrink-0 w-11 h-11 rounded-2xl bg-[hsl(var(--wsp-accent)/0.12)] text-[hsl(var(--wsp-accent))] flex items-center justify-center"
            aria-hidden="true"
          >
            <Globe className="w-5 h-5" strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="font-heading font-bold text-base text-[hsl(var(--wsp-navy))]">
              Get Censorly for Firefox
            </h3>
            <p className="mt-0.5 text-sm text-[hsl(var(--wsp-navy)/0.7)] leading-relaxed">
              Install Censorly from Firefox Add-ons.
            </p>
          </div>
        </div>
        <a
          href={AMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto sm:ml-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[hsl(var(--wsp-primary-hover))] px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2"
        >
          Get for Firefox
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
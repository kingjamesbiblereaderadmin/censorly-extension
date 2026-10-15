import { Puzzle } from "lucide-react";
import AMO_BADGE from "@/assets/firefox-amo-badge.svg";
import AppStoreBadge from "./AppStoreBadge";

const CHROME_BADGE =
  "https://developer.chrome.com/static/docs/webstore/branding/image/HRs9MPufa1J1h5glNhut.png";
const EDGE_BADGE =
  "https://learn.microsoft.com/en-us/microsoft-edge/extensions/publish/add-ons-badge-images/microsoft-edge-add-ons-badge.png";

const CHROME_URL =
  "https://chromewebstore.google.com/detail/censorly/ihebeiliagohkojpchkgafjgndaiagaf";
const EDGE_URL =
  "https://microsoftedge.microsoft.com/addons/detail/censorly/hjgcibedhdconlmmmpdfljdlmdiagdmg";
const FIREFOX_URL = "https://addons.mozilla.org/en-US/firefox/addon/censorly/";
const OPERA_URL =
  "https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/513c2d6b2_censorly-v59-opera.zip";
const TITANIUM_URL = "https://github.com/jqssun/android-titanium-browser";

const badgeLinkClass =
  "inline-flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2 min-h-[44px]";
const badgeImgClass = "h-[44px] sm:h-[52px] w-auto rounded-xl";

const sectionLabelClass =
  "text-center text-xs font-mono uppercase tracking-[0.18em] text-neutral-900";

function BadgeWithCaption({ href, ariaLabel, alt, src, caption, className = "" }) {
  return (
    <div className={`flex flex-col items-center gap-1.5 ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={badgeLinkClass}
      >
        <img src={src} alt={alt} className={badgeImgClass} draggable={false} />
      </a>
      <span className="text-[10px] font-mono text-neutral-700">
        {caption}
      </span>
    </div>
  );
}

export default function DownloadButtons({
  className = "",
  mobileBadgeLabel = "Available on Titanium browser (mobile)",
}) {
  return (
    <div
      className={`rounded-3xl border border-[hsl(var(--wsp-navy)/0.1)] bg-white/80 shadow-sm overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-5">
        <div className="text-center text-xs font-mono uppercase tracking-[0.18em] text-[hsl(var(--wsp-accent))] font-semibold">
          Get Censorly
        </div>
        <p className="mt-2 text-center text-sm sm:text-base font-medium text-neutral-900">
          Filter, hide, or blur unwanted words on any website — 100% locally.
        </p>
        <p className="mt-2 text-center text-xs leading-relaxed text-neutral-700">
          Desktop + limited mobile support: Chrome, Edge, Brave, Firefox, and
          Opera on desktop, and{" "}
          <a
            href={TITANIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline decoration-dotted hover:text-[hsl(var(--wsp-accent))] transition-colors"
          >
            {mobileBadgeLabel}
          </a>
        </p>
      </div>

      {/* Browser extensions */}
      <div className="border-t border-[hsl(var(--wsp-navy)/0.1)] px-6 py-6">
        <div className={sectionLabelClass}>Browser Extension</div>
        <div className="mt-4 flex flex-wrap items-start justify-center gap-x-5 gap-y-4">
          <div className="flex flex-col items-center">
            <a
              href={CHROME_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Censorly on the Chrome Web Store"
              className={badgeLinkClass}
            >
              <img
                src={CHROME_BADGE}
                alt="Available in the Chrome Web Store"
                className={badgeImgClass}
                draggable={false}
              />
            </a>
          </div>
          <BadgeWithCaption
            href={EDGE_URL}
            ariaLabel="Get Censorly from Microsoft Edge Add-ons"
            alt="Get it from Microsoft Edge Add-ons"
            src={EDGE_BADGE}
            caption="Works on mobile"
          />
          <BadgeWithCaption
            href={FIREFOX_URL}
            ariaLabel="Get Censorly for Firefox from Firefox Add-ons"
            alt="Get the add-on — Firefox Add-ons"
            src={AMO_BADGE}
            caption="Works on mobile"
          />
        </div>
        <div className="mt-5 flex justify-center">
          <a
            href={OPERA_URL}
            download
            aria-label="Download Censorly for Opera"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 text-sm sm:text-base font-semibold text-white hover:bg-emerald-600 transition-colors h-[44px] sm:h-[52px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2"
          >
            <Puzzle className="w-5 h-5" />
            Get for Opera
          </a>
        </div>
      </div>

      {/* Apple */}
      <div className="border-t border-[hsl(var(--wsp-navy)/0.1)] px-6 py-6">
        <div className={sectionLabelClass}>Apple — iPhone · iPad · Mac</div>
        <div className="mt-4 flex justify-center">
          <AppStoreBadge />
        </div>
      </div>
    </div>
  );
}
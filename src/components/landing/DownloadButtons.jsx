import { Puzzle, Smartphone } from "lucide-react";
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
const APP_STORE_URL =
  "https://apps.apple.com/us/app/censorly/id6814797862?mt=12";
const TITANIUM_URL = "https://github.com/jqssun/android-titanium-browser";

const badgeLinkClass =
  "inline-flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2 min-h-[44px]";
const badgeImgClass = "h-[44px] sm:h-[52px] w-auto rounded-xl";
const textButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-[hsl(var(--wsp-navy)/0.15)] bg-white px-5 text-sm sm:text-base font-semibold text-[hsl(var(--wsp-navy))] hover:border-[hsl(var(--wsp-accent))] hover:text-[hsl(var(--wsp-accent))] transition-colors h-[44px] sm:h-[52px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2";
const bulletClass =
  "flex items-start gap-2.5 text-xs leading-relaxed text-[hsl(var(--wsp-navy)/0.6)]";
const bulletDotClass =
  "mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[hsl(var(--wsp-accent))]";
const groupLabelClass =
  "text-[10px] font-mono uppercase tracking-[0.18em] text-[hsl(var(--wsp-navy)/0.45)] sm:w-20 shrink-0 text-center sm:text-left";

function Group({ label, children }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <span className={groupLabelClass}>{label}</span>
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-3">
        {children}
      </div>
    </div>
  );
}

export default function DownloadButtons({
  className = "",
  mobileBadgeLabel = "Available on Titanium browser (mobile)",
}) {
  return (
    <div
      className={`rounded-3xl border border-[hsl(var(--wsp-navy)/0.1)] bg-white/80 p-6 sm:p-8 shadow-sm ${className}`}
    >
      <div className="text-center text-xs font-mono uppercase tracking-[0.18em] text-[hsl(var(--wsp-navy)/0.45)]">
        Get Censorly
      </div>

      {/* One consolidated compatibility list */}
      <ul className="mt-4 mx-auto max-w-md flex flex-col gap-1.5">
        <li className={bulletClass}>
          <span className={bulletDotClass} aria-hidden="true" />
          <span>Also works on Brave (Chromium)</span>
        </li>
        <li className={bulletClass}>
          <span className={bulletDotClass} aria-hidden="true" />
          <span>Firefox: tested on mobile</span>
        </li>
        <li className={bulletClass}>
          <span className={bulletDotClass} aria-hidden="true" />
          <span>
            Mobile:{" "}
            <a
              href={TITANIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline decoration-dotted hover:text-[hsl(var(--wsp-accent))] transition-colors"
            >
              {mobileBadgeLabel}
            </a>
          </span>
        </li>
      </ul>

      {/* Platform groups */}
      <div className="mt-6 flex flex-col gap-5 border-t border-[hsl(var(--wsp-navy)/0.06)] pt-6">
        <Group label="PC">
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
          <a
            href={EDGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Censorly from Microsoft Edge Add-ons"
            className={badgeLinkClass}
          >
            <img
              src={EDGE_BADGE}
              alt="Get it from Microsoft Edge Add-ons"
              className={badgeImgClass}
              draggable={false}
            />
          </a>
          <a
            href={FIREFOX_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Censorly for Firefox from Firefox Add-ons"
            className={badgeLinkClass}
          >
            <img
              src={AMO_BADGE}
              alt="Get the add-on — Firefox Add-ons"
              className={badgeImgClass}
              draggable={false}
            />
          </a>
          <a href={OPERA_URL} download aria-label="Download Censorly for Opera" className={textButtonClass}>
            <Puzzle className="w-5 h-5" />
            Download for Opera
          </a>
        </Group>

        <Group label="Apple">
          <AppStoreBadge />
        </Group>

        <Group label="Android">
          <a
            href={TITANIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Censorly on the Titanium browser for Android"
            className={textButtonClass}
          >
            <Smartphone className="w-5 h-5" />
            Titanium browser
          </a>
        </Group>
      </div>
    </div>
  );
}
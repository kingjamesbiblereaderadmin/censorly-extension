import { Puzzle, Smartphone, ShieldCheck } from "lucide-react";

const AMO_BADGE =
  "https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg";
const CHROME_BADGE =
  "https://developer.chrome.com/static/docs/webstore/branding/image/HRs9MPufa1J1h5glNhut.png";
const EDGE_BADGE =
  "https://learn.microsoft.com/en-us/microsoft-edge/extensions/publish/add-ons-badge-images/microsoft-edge-add-ons-badge.png";

const DEFAULT_LINKS = [
  {
    key: "chrome",
    label: "Get on Chrome Web Store",
    href: "https://chromewebstore.google.com/detail/censorly/ihebeiliagohkojpchkgafjgndaiagaf",
    primary: false,
    order: 0,
  },
  {
    key: "edge",
    label: "Download for Microsoft Edge",
    href: "https://microsoftedge.microsoft.com/addons/detail/censorly/hjgcibedhdconlmmmpdfljdlmdiagdmg",
    primary: false,
    order: 1,
  },
  {
    key: "firefox",
    label: "Download for Firefox",
    href: "https://addons.mozilla.org/en-US/firefox/addon/censorly/",
    primary: false,
    order: 1,
  },
  {
    key: "opera",
    label: "Download for Opera",
    href:
      "https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/513c2d6b2_censorly-v59-opera.zip",
    primary: false,
    order: 2,
  },
];

export default function DownloadButtons({ className = "" }) {
  const links = DEFAULT_LINKS;

  return (
    <div className={`flex flex-row flex-wrap items-start justify-center gap-3 ${className}`}>
      {links.map((l) => {
        if (l.key === "chrome") {
          return (
            <div key={l.key} className="flex flex-col items-center gap-1">
              <a
                href="https://chromewebstore.google.com/detail/censorly/ihebeiliagohkojpchkgafjgndaiagaf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Censorly on the Chrome Web Store"
                className="inline-flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2 min-h-[44px]"
              >
                <img
                  src={CHROME_BADGE}
                  alt="Available in the Chrome Web Store"
                  className="h-[44px] sm:h-[52px] w-auto max-w-full rounded-xl"
                  draggable={false}
                />
              </a>
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[hsl(var(--wsp-navy)/0.55)]">
                <ShieldCheck className="w-3 h-3 text-[hsl(var(--wsp-accent))]" strokeWidth={2} />
                Also works on Brave
              </span>
            </div>
          );
        }
        if (l.key === "edge") {
          return (
            <div key={l.key} className="flex flex-col items-center gap-1">
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Censorly from Microsoft Edge Add-ons"
                className="inline-flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2 min-h-[44px]"
              >
                <img
                  src={EDGE_BADGE}
                  alt="Get it from Microsoft Edge Add-ons"
                  className="h-[44px] sm:h-[52px] w-auto max-w-full rounded-xl"
                  draggable={false}
                />
              </a>
            </div>
          );
        }
        if (l.key === "firefox") {
          return (
            <div key={l.key} className="flex flex-col items-center gap-1">
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Censorly for Firefox from Firefox Add-ons"
                className="inline-flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2 min-h-[44px]"
              >
                <img
                  src={AMO_BADGE}
                  alt="Get the add-on — Firefox Add-ons"
                  className="h-[44px] sm:h-[52px] w-auto max-w-full rounded-xl"
                  draggable={false}
                />
              </a>
            </div>
          );
        }
        const isExternal = !l.href.includes("base44.app");
        return (
          <a
            key={l.key}
            href={l.href}
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : { download: true })}
            className={
              l.primary
                ? "wsp-glow inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[hsl(var(--wsp-primary))] px-5 py-3 text-sm sm:text-base font-semibold text-white hover:bg-[hsl(var(--wsp-primary-hover))] transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2"
                : "inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[hsl(var(--wsp-navy)/0.15)] bg-white px-5 py-3 text-sm sm:text-base font-semibold text-[hsl(var(--wsp-navy))] hover:border-[hsl(var(--wsp-accent))] hover:text-[hsl(var(--wsp-accent))] transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2"
            }
          >
            <Puzzle className="w-5 h-5" />
            {l.label}
          </a>
        );
      })}
    </div>
  );
}
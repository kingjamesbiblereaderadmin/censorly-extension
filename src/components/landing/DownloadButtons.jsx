import { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { Puzzle, Smartphone, Chrome } from "lucide-react";

const AMO_BADGE =
  "https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg";

const DEFAULT_LINKS = [
  {
    key: "chrome",
    label: "Download for Chrome/Brave",
    href:
      "https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/dd10a1e71_censorly-v55-chrome.zip",
    primary: false,
    order: 0,
  },
  {
    key: "firefox",
    label: "Download for Firefox",
    href: "https://addons.mozilla.org/en-GB/android/addon/censorly/",
    primary: false,
    order: 1,
  },
  {
    key: "opera",
    label: "Download for Opera",
    href:
      "https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/123ce5d3d_censorly-v55-opera.zip",
    primary: false,
    order: 2,
  },
];

export default function DownloadButtons({ className = "" }) {
  const [links, setLinks] = useState(DEFAULT_LINKS);

  useEffect(() => {
    let active = true;
    base44.entities.DownloadLink.list("order", 50)
      .then((rows) => {
        if (!active || !rows || rows.length === 0) return;
        const sorted = [...rows].sort(
          (a, b) => (a.order || 0) - (b.order || 0)
        );
        setLinks(
          sorted.map((r) => ({
            key: r.key,
            label: r.label,
            href: r.href,
            primary: !!r.primary,
            order: r.order || 0,
          }))
        );
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className={`flex flex-row flex-wrap items-center justify-center gap-3 ${className}`}>
      {links.map((l) => {
        if (l.key === "chrome") {
          return (
            <a
              key={l.key}
              href="https://chromewebstore.google.com/detail/censorly/ihebeiliagohkojpchkgafjgndaiagaf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Censorly on the Chrome Web Store"
              className="inline-flex items-center gap-3 rounded-2xl border border-[hsl(var(--wsp-navy)/0.15)] bg-white px-5 py-2.5 min-h-[44px] hover:border-[hsl(var(--wsp-accent))] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2"
            >
              <Chrome className="w-6 h-6 text-[hsl(var(--wsp-navy))]" strokeWidth={2} />
              <span className="flex flex-col leading-tight text-left">
                <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[hsl(var(--wsp-navy)/0.5)]">
                  Available on
                </span>
                <span className="text-sm font-semibold text-[hsl(var(--wsp-navy))]">
                  Chrome Web Store
                </span>
              </span>
            </a>
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
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[hsl(var(--wsp-navy)/0.55)]">
                <Smartphone className="w-3 h-3 text-[hsl(var(--wsp-accent))]" strokeWidth={2} />
                Tested on mobile
              </span>
            </div>
          );
        }
        const isExternal = l.href.includes("addons.mozilla.org");
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
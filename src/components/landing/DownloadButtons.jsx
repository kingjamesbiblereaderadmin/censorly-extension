import { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { Puzzle } from "lucide-react";

const DEFAULT_LINKS = [
  {
    key: "chrome",
    label: "Download for Chrome/Brave",
    href:
      "https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/d45ba027b_censorly-v50-chrome.zip",
    primary: true,
    order: 0,
  },
  {
    key: "firefox",
    label: "Download for Firefox",
    href:
      "https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/9bc9ef609_censorly-v50-firefox.zip",
    primary: false,
    order: 1,
  },
  {
    key: "opera",
    label: "Download for Opera",
    href:
      "https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/0801137e4_censorly-v50-opera.zip",
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
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${className}`}>
      {links.map((l) => (
        <a
          key={l.key}
          href={l.href}
          download
          className={
            l.primary
              ? "wsp-glow inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[hsl(var(--wsp-primary))] px-6 py-3.5 text-base font-semibold text-white hover:bg-[hsl(var(--wsp-primary-hover))] transition-colors w-full sm:w-auto"
              : "inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[hsl(var(--wsp-navy)/0.15)] bg-white px-6 py-3.5 text-base font-semibold text-[hsl(var(--wsp-navy))] hover:border-[hsl(var(--wsp-accent))] hover:text-[hsl(var(--wsp-accent))] transition-colors w-full sm:w-auto"
          }
        >
          <Puzzle className="w-5 h-5" />
          {l.label}
        </a>
      ))}
    </div>
  );
}
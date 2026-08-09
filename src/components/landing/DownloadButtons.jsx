import { Download, Globe } from "lucide-react";

const LINKS = [
  {
    key: "chrome",
    label: "Download for Chrome / Edge",
    href:
      "https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/d7a4c4a59_word-shield-pro-v39.zip",
    primary: true,
    icon: Download,
  },
  {
    key: "firefox",
    label: "Download for Firefox",
    href:
      "https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/8da113403_word-shield-pro-firefox-v39.zip",
    icon: Globe,
  },
  {
    key: "opera",
    label: "Download for Opera",
    href:
      "https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/0e019fdd0_word-shield-pro-opera-v39.zip",
    icon: Globe,
  },
];

export default function DownloadButtons({ className = "" }) {
  return (
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${className}`}>
      {LINKS.map((l) => (
        <a
          key={l.key}
          href={l.href}
          download
          className={
            l.primary
              ? "wsp-glow inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[hsl(var(--wsp-accent))] px-6 py-3.5 text-base font-semibold text-white transition-shadow w-full sm:w-auto"
              : "inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[hsl(var(--wsp-navy)/0.15)] bg-white px-6 py-3.5 text-base font-semibold text-[hsl(var(--wsp-navy))] hover:border-[hsl(var(--wsp-accent))] hover:text-[hsl(var(--wsp-accent))] transition-colors w-full sm:w-auto"
          }
        >
          <l.icon className="w-5 h-5" />
          {l.label}
        </a>
      ))}
    </div>
  );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ExtensionIcon from "./ExtensionIcon";

const LINKS = [
  { href: "#install", label: "Download" },
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#privacy", label: "Privacy" },
  { href: "#faq", label: "FAQ" },
  { href: "changelog", label: "Changelog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const mobileLinks = [
    ...LINKS.map((l) => ({ to: `/${l.href}`, label: l.label })),
    { to: "/privacy", label: "Policy" },
    { to: "/terms", label: "Terms" },
    { to: "/support", label: "Support" },
    { to: "/licence", label: "Licence" },
  ];
  return (
    <header className="sticky top-0 z-50">
      <div className="w-full bg-[hsl(var(--wsp-navy))] text-white/80 text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-8 flex items-center justify-center">
          <div className="inline-flex items-center gap-3">
            <a
              href="https://base44.com/superagents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--wsp-navy))] rounded"
            >
              Made with Superagent AI
            </a>
            <span className="text-white/30">·</span>
            <a
              href="https://base44.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--wsp-navy))] rounded"
            >
              By
              <img
                src="https://base44.com/logo_v2.svg"
                alt="Base44"
                className="h-3 w-auto inline-block"
              />
              Base44
            </a>
          </div>
        </div>
      </div>
      <div className="backdrop-blur-xl bg-[hsl(var(--background))]/75 border-b border-[hsl(var(--wsp-accent)/0.12)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <span className="relative">
              <span className="absolute inset-0 rounded-xl bg-[hsl(var(--wsp-accent)/0.25)] blur-md group-hover:bg-[hsl(var(--wsp-accent)/0.4)] transition-colors" />
              <ExtensionIcon className="relative w-7 h-7" />
            </span>
            <span className="font-heading font-bold text-lg tracking-tight text-[hsl(var(--wsp-navy))]">
              Censorly
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[hsl(var(--wsp-navy)/0.65)]">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                to={`/${l.href}`}
                className="relative hover:text-[hsl(var(--wsp-navy))] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-[hsl(var(--wsp-accent))] after:transition-all"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/privacy"
              className="relative hover:text-[hsl(var(--wsp-navy))] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-[hsl(var(--wsp-accent))] after:transition-all"
            >
              Policy
            </Link>
            <Link
              to="/terms"
              className="relative hover:text-[hsl(var(--wsp-navy))] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-[hsl(var(--wsp-accent))] after:transition-all"
            >
              Terms
            </Link>
            <Link
              to="/support"
              className="relative hover:text-[hsl(var(--wsp-navy))] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-[hsl(var(--wsp-accent))] after:transition-all"
            >
              Support
            </Link>
            <Link
              to="/licence"
              className="relative hover:text-[hsl(var(--wsp-navy))] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-[hsl(var(--wsp-accent))] after:transition-all"
            >
              Licence
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-xl text-[hsl(var(--wsp-navy))] hover:bg-[hsl(var(--wsp-navy)/0.05)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))]"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[hsl(var(--wsp-accent)/0.12)] bg-[hsl(var(--background))]/95 backdrop-blur-xl">
          <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex flex-col">
            {mobileLinks.map((l) => (
              <Link
                key={l.to + l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-[hsl(var(--wsp-navy)/0.8)] hover:text-[hsl(var(--wsp-accent))] transition-colors border-b border-[hsl(var(--wsp-navy)/0.05)] last:border-b-0"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
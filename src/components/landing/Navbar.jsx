import { Shield as ShieldIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ExtensionIcon from "./ExtensionIcon";
import ComingSoonBadge from "./ComingSoonBadge";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#modes", label: "Modes" },
  { href: "#features", label: "Features" },
  { href: "#privacy", label: "Privacy" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-[hsl(var(--background))]/75 border-b border-[hsl(var(--wsp-accent)/0.12)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-2.5 shrink-0 group">
            <span className="relative">
              <span className="absolute inset-0 rounded-xl bg-[hsl(var(--wsp-accent)/0.25)] blur-md group-hover:bg-[hsl(var(--wsp-accent)/0.4)] transition-colors" />
              <ExtensionIcon className="relative w-7 h-7" />
            </span>
            <span className="font-heading font-bold text-lg tracking-tight text-[hsl(var(--wsp-navy))]">
              Word Shield<span className="text-[hsl(var(--wsp-accent))]"> Pro</span>
            </span>
          </a>

          <ComingSoonBadge className="hidden xl:inline-flex" />

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
              to="/privacy-policy"
              className="relative hover:text-[hsl(var(--wsp-navy))] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-[hsl(var(--wsp-accent))] after:transition-all"
            >
              Policy
            </Link>
          </nav>

          <a
            href="#install"
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--wsp-navy))] px-4 py-2 text-sm font-semibold text-white hover:bg-[hsl(var(--wsp-accent))] transition-colors wsp-glow"
          >
            <ShieldIcon className="w-4 h-4" />
            Add to Chrome
          </a>
        </div>
      </div>
    </header>
  );
}
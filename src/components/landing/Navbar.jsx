import { Shield as ShieldIcon } from "lucide-react";
import ExtensionIcon from "./ExtensionIcon";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-[hsl(var(--wsp-accent)/0.08)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <ExtensionIcon className="w-7 h-7" />
          <span className="font-heading font-bold text-lg tracking-tight text-[hsl(var(--wsp-navy))]">
            Word Shield<span className="text-[hsl(var(--wsp-accent))]"> Pro</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[hsl(var(--wsp-navy)/0.7)]">
          <a href="#how" className="hover:text-[hsl(var(--wsp-accent))] transition-colors">How it works</a>
          <a href="#modes" className="hover:text-[hsl(var(--wsp-accent))] transition-colors">Modes</a>
          <a href="#features" className="hover:text-[hsl(var(--wsp-accent))] transition-colors">Features</a>
          <a href="#privacy" className="hover:text-[hsl(var(--wsp-accent))] transition-colors">Privacy</a>
          <a href="#faq" className="hover:text-[hsl(var(--wsp-accent))] transition-colors">FAQ</a>
        </nav>

        <a
          href="#install"
          className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--wsp-accent))] px-4 py-2 text-sm font-semibold text-white wsp-glow transition-shadow"
        >
          <ShieldIcon className="w-4 h-4" />
          Add to Chrome
        </a>
      </div>
    </header>
  );
}
import { Mail, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ExtensionIcon from "./ExtensionIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--wsp-navy)/0.08)] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 flex flex-col items-center gap-7">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          <a href="#top" className="flex items-center gap-2.5 group">
            <ExtensionIcon className="w-6 h-6" />
            <span className="font-heading font-bold text-[hsl(var(--wsp-navy))]">
              Word Shield<span className="text-[hsl(var(--wsp-accent))]"> Pro</span>
            </span>
          </a>

          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[hsl(var(--wsp-navy)/0.4)]">Contact</span>
            <a
              href="mailto:wordshieldpro@outlook.sg"
              className="inline-flex items-center gap-2 text-sm text-[hsl(var(--wsp-navy)/0.6)] hover:text-[hsl(var(--wsp-accent))] transition-colors"
            >
              <Mail className="w-4 h-4" />
              wordshieldpro@outlook.sg
            </a>
          </div>

          <p className="text-sm text-[hsl(var(--wsp-navy)/0.6)] order-last md:order-none">
            Word Shield Pro · Made with <span className="text-[hsl(var(--wsp-accent))]">❤️</span> for a cleaner web
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-[hsl(var(--wsp-navy)/0.5)]">
            <span className="wsp-live-dot w-1.5 h-1.5 rounded-full bg-[hsl(var(--wsp-accent))]" />
            100% client-side · v3.7
          </div>
        </div>

        <div className="w-full border-t border-[hsl(var(--wsp-navy)/0.06)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[hsl(var(--wsp-navy)/0.5)]">
          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="hover:text-[hsl(var(--wsp-accent))] transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="https://base44.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[hsl(var(--wsp-accent))] transition-colors"
            >
              Made with
              <img
                src="https://base44.com/logo_v2.svg"
                alt="Base44"
                className="h-3.5 w-auto inline-block"
              />
              Base44
            </a>
          </div>
          <span className="font-mono">© {new Date().getFullYear()} Word Shield Pro</span>
        </div>

        <a
          href="https://www.reddit.com/r/Base44/comments/1vdkfn8/free_base44_prompt_turn_a_generic_aibuilt_page/"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full mt-2 relative overflow-hidden rounded-2xl border border-[hsl(var(--wsp-accent)/0.25)] bg-gradient-to-br from-[hsl(var(--wsp-accent)/0.06)] to-white p-5 sm:p-6 transition-all hover:border-[hsl(var(--wsp-accent)/0.5)] hover:shadow-lg hover:shadow-[hsl(var(--wsp-accent)/0.15)]"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[hsl(var(--wsp-accent)/0.15)] rounded-full blur-2xl pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <span className="shrink-0 w-12 h-12 rounded-2xl bg-[hsl(var(--wsp-accent))] text-white flex items-center justify-center shadow-md shadow-[hsl(var(--wsp-accent)/0.3)]">
              <Heart className="w-5 h-5" fill="currentColor" />
            </span>
            <div className="flex-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-[hsl(var(--wsp-accent))]">
                <Sparkles className="w-3 h-3" />
                Special Thanks
              </span>
              <p className="mt-2 text-sm sm:text-base text-[hsl(var(--wsp-navy)/0.8)] leading-relaxed">
                A shoutout to{" "}
                <span className="font-heading font-bold text-[hsl(var(--wsp-navy))] underline decoration-[hsl(var(--wsp-accent)/0.4)] decoration-2 underline-offset-2 group-hover:decoration-[hsl(var(--wsp-accent))] transition-colors">
                  Will Kode
                </span>{" "}
                — the free Base44 prompt that helped shape this website is brilliant, and we're grateful.
              </p>
            </div>
          </div>
        </a>
      </div>
    </footer>
  );
}
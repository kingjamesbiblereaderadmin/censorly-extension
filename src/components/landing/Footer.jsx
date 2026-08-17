import { Mail, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ExtensionIcon from "./ExtensionIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--wsp-navy)/0.08)] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 flex flex-col items-center gap-7">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          <Link to="/" className="flex items-center gap-2.5 group">
            <ExtensionIcon className="w-6 h-6" />
            <span className="font-heading font-bold text-[hsl(var(--wsp-navy))]">
              Censorly
            </span>
          </Link>

          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[hsl(var(--wsp-navy)/0.4)]">Contact</span>
            <a
              href="mailto:censorlyextension@outlook.sg"
              className="inline-flex items-center gap-2 text-sm text-[hsl(var(--wsp-navy)/0.6)] hover:text-[hsl(var(--wsp-accent))] transition-colors"
            >
              <Mail className="w-4 h-4" />
              censorlyextension@outlook.sg
            </a>
          </div>

          <p className="text-sm text-[hsl(var(--wsp-navy)/0.6)] order-last md:order-none">
            Censorly · Made with <span className="text-[hsl(var(--wsp-accent))]">❤️</span> for a cleaner web
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-[hsl(var(--wsp-navy)/0.5)]">
            <span className="wsp-live-dot w-1.5 h-1.5 rounded-full bg-[hsl(var(--wsp-accent))]" />
            100% client-side · v5.5
          </div>
        </div>

        <div className="w-full border-t border-[hsl(var(--wsp-navy)/0.06)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[hsl(var(--wsp-navy)/0.5)]">
          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="hover:text-[hsl(var(--wsp-accent))] transition-colors"
            >
              Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[hsl(var(--wsp-accent))] transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/support"
              className="hover:text-[hsl(var(--wsp-accent))] transition-colors"
            >
              Support
            </Link>
            <Link
              to="/licence"
              className="hover:text-[hsl(var(--wsp-accent))] transition-colors"
            >
              Licence
            </Link>
            <a
              href="https://base44.com/superagents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[hsl(var(--wsp-navy)/0.8)] hover:text-[hsl(var(--wsp-accent))] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2 rounded"
            >
              Made with Superagent AI
            </a>
          </div>
          <span className="font-mono">© {new Date().getFullYear()} Censorly</span>
        </div>

        <a
          href="https://www.reddit.com/r/Base44/comments/1vdkfn8/free_base44_prompt_turn_a_generic_aibuilt_page/"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full mt-3 relative overflow-hidden rounded-2xl bg-[hsl(var(--wsp-navy))] px-6 py-5 sm:px-8 sm:py-6 transition-all hover:shadow-xl hover:shadow-[hsl(var(--wsp-accent)/0.2)]"
        >
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(hsl(var(--wsp-accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--wsp-accent)) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-[hsl(var(--wsp-accent)/0.25)] rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex items-center gap-4 sm:gap-5">
            <span className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[hsl(var(--wsp-accent))] text-white flex items-center justify-center shadow-lg shadow-[hsl(var(--wsp-accent)/0.35)]">
              <Heart className="w-5 h-5" fill="currentColor" />
            </span>

            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[hsl(var(--wsp-accent))]">
                Special Thanks
              </span>
              <p className="mt-1 text-sm sm:text-[15px] text-white/85 leading-snug">
                Built with the brilliant free Base44 prompt by{" "}
                <span className="font-heading font-bold text-white group-hover:text-[hsl(var(--wsp-accent))] transition-colors">
                  Will Kode
                </span>
              </p>
            </div>

            <span className="shrink-0 hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 group-hover:border-[hsl(var(--wsp-accent)/0.5)] group-hover:text-white transition-colors">
              View prompt
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
}
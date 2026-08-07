import ShieldLogo from "./ShieldIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--wsp-navy)/0.08)] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="text-[hsl(var(--wsp-accent))]">
            <ShieldLogo className="w-6 h-6" />
          </span>
          <span className="font-heading font-bold text-[hsl(var(--wsp-navy))]">
            Word Shield<span className="text-[hsl(var(--wsp-accent))]"> Pro</span>
          </span>
        </div>

        <p className="text-sm text-[hsl(var(--wsp-navy)/0.6)]">
          Word Shield Pro · Made with <span className="text-[hsl(var(--wsp-accent))]">❤️</span> for a cleaner web
        </p>

        <div className="flex items-center gap-2 text-xs font-mono text-[hsl(var(--wsp-navy)/0.5)]">
          <span className="wsp-live-dot w-1.5 h-1.5 rounded-full bg-[hsl(var(--wsp-accent))]" />
          100% client-side · v2.4.0
        </div>
      </div>
    </footer>
  );
}
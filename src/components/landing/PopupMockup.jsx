import ExtensionIcon from "./ExtensionIcon";

// Simulated TextVeil extension popup — a pure CSS/JSX mockup (not a screenshot),
// dark navy background with teal (#14b8a6) accents: enabled toggle, selected
// mode button, and Add button. Shown on the right side of the hero.
const WORDS = ["spam", "scam", "damn"];
const MODES = ["Hide", "Censor", "Blur"];

export default function PopupMockup() {
  return (
    <div className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-2xl shadow-[hsl(var(--wsp-accent)/0.3)] border border-white/5 bg-[#1a1a2e] text-white">
      {/* Header: wave/veil logo + name + enabled toggle */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <ExtensionIcon className="w-6 h-6" />
          <span className="font-heading font-bold text-[15px] tracking-tight">
            Text<span className="text-[#14b8a6]">Veil</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-white/50">On</span>
          <span className="relative w-9 h-5 rounded-full bg-[#14b8a6]">
            <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-white shadow" />
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-4 space-y-4">
        {/* Add a word */}
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-white/40 mb-2">Add a word</div>
          <div className="flex gap-2">
            <div className="flex-1 rounded-lg bg-white/[0.05] border border-white/10 px-3 py-2 text-[12px] text-white/40">
              Type a word…
            </div>
            <span className="rounded-lg bg-[#14b8a6] px-3 py-2 text-[12px] font-semibold text-white">Add</span>
          </div>
        </div>

        {/* Filter mode */}
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-white/40 mb-2">Filter mode</div>
          <div className="grid grid-cols-3 gap-2">
            {MODES.map((m) => {
              const active = m === "Censor";
              return (
                <div
                  key={m}
                  className={
                    active
                      ? "rounded-xl bg-[#14b8a6] text-white text-xs font-semibold py-2 text-center"
                      : "rounded-xl bg-white/[0.04] text-white/70 text-xs font-medium py-2 text-center border border-white/10"
                  }
                >
                  {m}
                </div>
              );
            })}
          </div>
        </div>

        {/* Filtered words */}
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-white/40 mb-2">Filtered words</div>
          <div className="flex flex-wrap gap-1.5">
            {WORDS.map((w) => (
              <span
                key={w}
                className="inline-flex items-center gap-1 rounded-md bg-white/[0.05] border border-white/10 px-2 py-1 text-[11px] font-mono text-white/75"
              >
                {w}
                <span className="text-white/30">×</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/10 flex items-center justify-between">
        <span className="text-[10px] font-mono text-white/40">TextVeil v4.0</span>
        <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
          100% local
        </span>
      </div>
    </div>
  );
}
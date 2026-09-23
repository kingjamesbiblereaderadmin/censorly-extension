const C = {
  accent: "hsl(var(--wsp-accent))",
  navy: "hsl(var(--wsp-navy))",
};

// Static, code-drawn mockup of the Censorly extension popup for the hero section.
export default function PopupMockup() {
  return (
    <div
      className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-2xl shadow-[hsl(var(--wsp-accent)/0.3)] bg-white"
      style={{ border: `2px solid ${C.navy}1a` }}
      role="img"
      aria-label="Censorly extension popup showing filtering enabled, Hide/Censor/Blur filter modes, add-a-word input, import/export buttons, and the word list"
    >
      {/* Header */}
      <div
        className="px-4 pt-3.5 pb-3 flex items-center justify-between"
        style={{ background: C.navy }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold text-white"
            style={{ background: C.accent }}
          >
            C
          </span>
          <span className="font-heading font-bold text-sm tracking-tight text-white">
            Censorly
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-medium" style={{ color: C.accent }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.accent }} />
          On
        </div>
      </div>

      {/* Status */}
      <div className="px-4 py-3 border-b" style={{ borderColor: `${C.navy}0f` }}>
        <div className="flex items-center justify-between text-[12px] font-medium" style={{ color: `${C.navy}cc` }}>
          <span>Filtering active</span>
          <span className="text-[11px] font-mono" style={{ color: C.accent }}>
            29 words
          </span>
        </div>
      </div>

      {/* Modes */}
      <div className="px-4 py-3 border-b" style={{ borderColor: `${C.navy}0f` }}>
        <p className="text-[10px] font-mono uppercase tracking-[0.14em] mb-2" style={{ color: `${C.navy}73` }}>
          Filter mode
        </p>
        <div className="grid grid-cols-3 gap-1.5">
          {["Hide", "Censor", "Blur"].map((m, i) => (
            <span
              key={m}
              className="rounded-lg py-1.5 text-center text-[11px] font-semibold"
              style={
                i === 1
                  ? { background: C.accent, color: "white" }
                  : { background: `${C.navy}0a`, color: `${C.navy}b3`, border: `1px solid ${C.navy}14` }
              }
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Add word */}
      <div className="px-4 py-3 border-b" style={{ borderColor: `${C.navy}0f` }}>
        <p className="text-[10px] font-mono uppercase tracking-[0.14em] mb-2" style={{ color: `${C.navy}73` }}>
          Add a word
        </p>
        <div className="flex gap-1.5">
          <span
            className="flex-1 rounded-lg px-2.5 py-1.5 text-[11px]"
            style={{ border: `1px solid ${C.navy}14`, color: `${C.navy}59` }}
          >
            Type a word…
          </span>
          <span
            className="rounded-lg px-3 py-1.5 text-[11px] font-bold text-white"
            style={{ background: C.accent }}
          >
            +
          </span>
        </div>
        <div className="flex gap-1.5 mt-2">
          <span className="flex-1 rounded-lg py-1.5 text-center text-[10px] font-medium" style={{ border: `1px solid ${C.navy}14`, color: `${C.navy}99` }}>
            Import
          </span>
          <span className="flex-1 rounded-lg py-1.5 text-center text-[10px] font-medium" style={{ border: `1px solid ${C.navy}14`, color: `${C.navy}99` }}>
            Export
          </span>
        </div>
      </div>

      {/* Excluded site */}
      <div className="px-4 py-3 border-b" style={{ borderColor: `${C.navy}0f` }}>
        <p className="text-[10px] font-mono uppercase tracking-[0.14em] mb-2" style={{ color: `${C.navy}73` }}>
          Excluded sites
        </p>
        <span
          className="inline-block rounded-lg px-2.5 py-1 text-[11px] font-mono"
          style={{ background: `${C.navy}0a`, color: `${C.navy}b3` }}
        >
          banking.example.com ✕
        </span>
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 flex items-center justify-between text-[10px] font-mono" style={{ color: `${C.navy}59` }}>
        <span>v6.2 · local only</span>
        <span className="flex items-center gap-2" style={{ color: C.accent }}>
          <span>Terms</span>
          <span>Privacy</span>
          <span>Source</span>
        </span>
      </div>
    </div>
  );
}
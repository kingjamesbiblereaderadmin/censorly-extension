import { RefreshCw } from "lucide-react";

// Pixel-accurate mockup of the real Censorly v5.2 extension popup (340px wide).
// Static only — no interactivity. Rendered in the hero section.
const WORDS = [
  { word: "spam", mode: "Wildcard" },
  { word: "scam", mode: "Exact" },
  { word: "damn", mode: "Exact" },
];
const MODES = ["Hide", "Censor", "Blur"];

const c = {
  bg: "#0f1c1e",
  input: "#142628",
  section: "#0a1517",
  border: "#387276",
  borderSoft: "#3d7e82",
  text: "#e8f4f4",
  dim: "#b0d4d4",
  muted: "#8aaeae",
  accent: "#14b8a6",
  accentHover: "#0d9488",
  danger: "#f87171",
};

const ICON_URL = "https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/085c83db8_censorly-icon-512.png";

function Logo() {
  return (
    <img
      src={ICON_URL}
      alt="Censorly"
      style={{ width: 28, height: 28, borderRadius: 8 }}
      draggable={false}
    />
  );
}

export default function PopupMockup() {
  return (
    <div className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-2xl shadow-[hsl(var(--wsp-accent)/0.3)] border border-white/5 font-body text-white">
      {/* HEADER — teal gradient, rounded bottom */}
      <div style={{ background: "linear-gradient(135deg, #0d9488, #0f766e)", padding: "18px 20px 22px", borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Logo />
            <h1 className="font-bold text-white" style={{ fontSize: 17 }}>Censorly</h1>
          </div>
          <span className="rounded-full px-2.5 py-1 text-white/80 font-medium" style={{ fontSize: 10, background: "rgba(255,255,255,0.2)" }}>ON</span>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ background: c.bg, padding: "16px 18px" }} className="space-y-3.5">
        {/* Desktop note */}
        <div className="rounded-[10px] flex items-center gap-1.5" style={{ background: "rgba(20,184,166,0.15)", border: `1px solid ${c.borderSoft}`, padding: "8px 12px", fontSize: 11, color: c.dim }}>
          <span className="font-bold" style={{ color: c.accent }}>💻 Desktop only</span>
          <span>— Chrome, Edge &amp; Brave on Windows, Mac &amp; Linux</span>
        </div>

        {/* Toggle row */}
        <div className="flex items-center justify-between rounded-[12px]" style={{ background: c.input, border: `1px solid ${c.border}`, padding: "12px 14px" }}>
          <span className="font-medium" style={{ fontSize: 14, color: c.text }}>Filtering enabled</span>
          <span className="relative rounded-full" style={{ width: 44, height: 24, background: c.accent }}>
            <span className="absolute rounded-full bg-white" style={{ top: 3, right: 3, width: 18, height: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }} />
          </span>
        </div>

        {/* Filter mode title */}
        <div className="font-bold uppercase" style={{ fontSize: 11, color: c.dim, letterSpacing: "0.8px" }}>Filter mode</div>

        {/* Mode buttons */}
        <div className="flex" style={{ gap: 8 }}>
          {MODES.map((m) => {
            const active = m === "Hide";
            return (
              <div
                key={m}
                className="flex-1 text-center rounded-[10px] font-medium"
                style={{
                  padding: "10px 8px",
                  fontSize: 12,
                  background: active ? c.accent : c.input,
                  border: `1px solid ${active ? c.accent : c.border}`,
                  color: active ? "#fff" : c.muted,
                }}
              >
                {m}
              </div>
            );
          })}
        </div>

        {/* Mode hint */}
        <p style={{ fontSize: 10, color: c.muted, lineHeight: 1.4 }}>Words are hidden — invisible but still selectable &amp; copyable.</p>

        {/* Refresh button */}
        <button
          className="w-full rounded-[10px] flex items-center justify-center gap-2 transition-colors"
          style={{ background: c.input, border: `1px solid ${c.border}`, padding: 10, fontSize: 12, color: c.text }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = c.accent; e.currentTarget.style.color = c.accent; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.text; }}
        >
          <RefreshCw className="w-3.5 h-3.5" strokeWidth={2} />
          Refresh page to apply
        </button>

        {/* Add a word title */}
        <div className="font-bold uppercase" style={{ fontSize: 11, color: c.dim, letterSpacing: "0.8px" }}>Add a word to filter</div>

        {/* Input row */}
        <div className="flex" style={{ gap: 8 }}>
          <div className="flex-1 rounded-[10px]" style={{ background: c.input, border: `1px solid ${c.border}`, padding: "10px 14px", fontSize: 14, color: c.muted }}>
            Type a word...
          </div>
          <span className="rounded-[10px] font-bold text-white" style={{ background: c.accent, padding: "10px 18px", fontSize: 14 }}>Add</span>
        </div>

        {/* Word count */}
        <div style={{ fontSize: 12, color: c.dim }}>3 words filtered</div>
        <p style={{ fontSize: 10, color: c.muted, lineHeight: 1.45 }}>
          Exact matches only that word. Wildcard also matches endings, e.g. spam → spamming.
        </p>

        {/* Word list */}
        <div className="space-y-2 overflow-hidden" style={{ maxHeight: 160 }}>
          {WORDS.map((w) => {
            const wild = w.mode === "Wildcard";
            return (
              <div key={w.word} className="flex items-center gap-2 rounded-[10px]" style={{ background: c.input, border: `1px solid ${c.border}`, padding: "9px 14px", fontSize: 14, color: c.text }}>
                <span className="flex-1">{w.word}</span>
                <span
                  className="rounded-[8px] font-semibold"
                  style={{
                    padding: "3px 9px",
                    fontSize: 11,
                    background: wild ? c.accent : "transparent",
                    border: `1px solid ${wild ? c.accent : c.border}`,
                    color: wild ? "#0a1517" : c.muted,
                  }}
                >
                  {w.mode}
                </span>
                <span style={{ color: c.danger, fontSize: 16, lineHeight: 1 }}>×</span>
              </div>
            );
          })}
        </div>

        {/* Site section */}
        <div className="rounded-[12px]" style={{ background: c.section, border: `1px solid ${c.borderSoft}`, padding: 14 }}>
          <div className="font-bold uppercase" style={{ fontSize: 11, color: c.dim, letterSpacing: "0.8px" }}>This site</div>
          <div className="flex items-center justify-between mt-2">
            <span style={{ fontSize: 12, color: c.muted }}>example.com</span>
            <span className="rounded-[10px] text-white font-medium" style={{ background: c.accent, padding: "7px 14px", fontSize: 12 }}>Exclude</span>
          </div>
          <div className="font-bold uppercase mt-2.5" style={{ fontSize: 11, color: c.dim, letterSpacing: "0.8px" }}>Excluded sites</div>
          <div className="flex items-center justify-between rounded-[10px] mt-2" style={{ background: c.input, border: `1px solid ${c.border}`, padding: "9px 14px", fontSize: 13, color: c.text }}>
            <span>reddit.com</span>
            <span style={{ color: c.danger, fontSize: 16, lineHeight: 1 }}>×</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="rounded-[12px]" style={{ background: c.section, border: `1px solid ${c.borderSoft}`, padding: 12 }}>
          <div className="font-bold" style={{ fontSize: 12, color: c.accent }}>📋 Limitations</div>
          <p className="mt-1.5" style={{ fontSize: 11, color: "#9ec0c0", lineHeight: 1.5 }}>
            Censorly filters text on web pages, search bars, and text boxes. It cannot read or filter text inside PDFs, Word documents, or other file downloads.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center" style={{ background: c.bg, padding: "12px 18px", fontSize: 10, color: c.muted, borderTop: `1px solid ${c.borderSoft}` }}>
        Censorly v5.2 · Website · Contact
      </div>
    </div>
  );
}
// Pixel-accurate mockup of the real Word Shield Pro extension popup.
// Exact colors per spec: bg #1a1a2e, card #16213e, section #0f1629,
// accent #9088ff, header gradient #9088ff→#4a47a3, danger #ff5e4e,
// borders #3a3a52, text #eee, labels #b4b4cc. Width 340px.

const ACCENT = "#9088ff";
const BG = "#1a1a2e";
const CARD = "#16213e";
const SECTION = "#0f1629";
const DANGER = "#ff5e4e";
const BORDER = "#3a3a52";
const TEXT = "#eee";
const LABEL = "#b4b4cc";

const WORDS = ["spam", "scam", "damn"];

function SectionTitle({ children }) {
  return (
    <div style={{ color: LABEL, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>
      {children}
    </div>
  );
}

export default function PopupMockup() {
  return (
    <div
      style={{ width: 340, background: BG, color: TEXT, borderRadius: 16, overflow: "hidden", fontFamily: "Inter, system-ui, sans-serif", border: `1px solid ${BORDER}`, boxShadow: "0 30px 80px -20px rgba(74,71,163,0.45)" }}
    >
      {/* Header gradient */}
      <div
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: "linear-gradient(135deg, #9088ff, #4a47a3)" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src="https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/6571bdade_icon128.png"
            alt="Word Shield Pro"
            style={{ width: 22, height: 22, borderRadius: 5, objectFit: "contain" }}
          />
          <span style={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>Word Shield Pro</span>
        </div>
        <span style={{ background: "rgba(255,255,255,0.22)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 999 }}>
          ON
        </span>
      </div>

      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Filtering enabled toggle */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "11px 13px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, fontWeight: 500 }}>Filtering enabled</span>
          {/* toggle ON */}
          <span style={{ width: 38, height: 22, borderRadius: 999, background: ACCENT, position: "relative", display: "inline-block" }}>
            <span style={{ position: "absolute", top: 2, right: 2, width: 18, height: 18, borderRadius: "50%", background: "#fff" }} />
          </span>
        </div>

        {/* Filter mode */}
        <div>
          <SectionTitle>Filter mode</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 8 }}>
            {["Hide", "Censor", "Blur"].map((m, i) => (
              <div
                key={m}
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "9px 0",
                  borderRadius: 9,
                  border: `1px solid ${i === 1 ? ACCENT : BORDER}`,
                  background: i === 1 ? "rgba(144,136,255,0.15)" : SECTION,
                  color: i === 1 ? ACCENT : TEXT,
                }}
              >
                {m}
              </div>
            ))}
          </div>
        </div>

        {/* Add a word */}
        <div>
          <SectionTitle>Add a word to filter</SectionTitle>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <div style={{ flex: 1, background: SECTION, border: `1px solid ${BORDER}`, borderRadius: 9, padding: "9px 11px", fontSize: 13, color: "#8888a8" }}>
              Type a word…
            </div>
            <div style={{ background: ACCENT, color: "#fff", fontSize: 13, fontWeight: 600, borderRadius: 9, padding: "9px 16px" }}>Add</div>
          </div>
        </div>

        {/* Count + word list */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <SectionTitle>Word list</SectionTitle>
            <span style={{ color: LABEL, fontSize: 12 }}>3 words filtered</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 9 }}>
            {WORDS.map((w) => (
              <div key={w} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 9, padding: "9px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 13, fontFamily: "JetBrains Mono, monospace" }}>{w}</span>
                <span style={{ color: DANGER, fontSize: 16, fontWeight: 700, lineHeight: 1, width: 20, height: 20, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 6, background: "rgba(255,94,78,0.12)" }}>×</span>
              </div>
            ))}
          </div>
        </div>

        {/* This site */}
        <div>
          <SectionTitle>This site</SectionTitle>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 9, padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
            <span style={{ fontSize: 13, fontFamily: "JetBrains Mono, monospace" }}>example.com</span>
            <div style={{ background: ACCENT, color: "#fff", fontSize: 12, fontWeight: 600, borderRadius: 7, padding: "6px 13px" }}>Exclude</div>
          </div>
        </div>

        {/* Limitations */}
        <div style={{ background: SECTION, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: ACCENT, fontWeight: 700, fontSize: 12 }}>
            <span>📋</span> Limitations
          </div>
          <p style={{ marginTop: 7, fontSize: 11.5, lineHeight: 1.55, color: "#8a8aa8" }}>
            Text filters apply to web page text only. PDFs, Google Docs (canvas), and images are not supported.
          </p>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", fontSize: 11, color: "#6a6a88", paddingBottom: 2 }}>
          Word Shield Pro v3.6
        </div>
      </div>
    </div>
  );
}
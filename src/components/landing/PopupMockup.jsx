// Pixel-accurate mockup of the Word Shield Pro extension popup.
// Design ref: header gradient #5B51E6→#3C3691, body #1A1C2C,
// accent #7F6AF3, danger #E06C75, on-badge #6B7A99. Width 340px.

const ACCENT = "#7F6AF3";
const BG = "#1A1C2C";
const CARD = "#232640";
const FIELD = "#1F2238";
const DANGER = "#E06C75";
const BORDER = "#2E3152";
const TEXT = "#ffffff";
const LABEL = "#8A8FA8";
const ON_BADGE = "#6B7A99";

const WORDS = ["shit", "fuck", "bitch"];
const MODES = ["Hide", "Censor", "Blur"];
const MODE_HELPER = "Classic redaction — solid black boxes over each letter, like a blacked-out document.";

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
      style={{ width: 340, background: BG, color: TEXT, borderRadius: 16, overflow: "hidden", fontFamily: "Inter, system-ui, sans-serif", border: `1px solid ${BORDER}`, boxShadow: "0 30px 80px -20px rgba(60,54,145,0.5)" }}
    >
      {/* Header gradient */}
      <div
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: "linear-gradient(90deg, #5B51E6, #3C3691)" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src="https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/a6889ee8f_icon128.png"
            alt="Word Shield Pro"
            style={{ width: 22, height: 22, borderRadius: 5, objectFit: "contain" }}
          />
          <span style={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>Word Shield Pro</span>
        </div>
        <span style={{ background: ON_BADGE, color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 999 }}>
          ON
        </span>
      </div>

      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Filtering enabled toggle */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, fontWeight: 500 }}>Filtering enabled</span>
          {/* toggle ON — accent track, white knob */}
          <span style={{ width: 42, height: 24, borderRadius: 999, background: ACCENT, position: "relative", display: "inline-block" }}>
            <span style={{ position: "absolute", top: 2, right: 2, width: 18, height: 18, borderRadius: "50%", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.3)" }} />
          </span>
        </div>

        {/* Filter mode */}
        <div>
          <SectionTitle>Filter mode</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 9 }}>
            {MODES.map((m, i) => (
              <div
                key={m}
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "9px 0",
                  borderRadius: 9,
                  background: i === 1 ? ACCENT : "#2A2D4A",
                  color: i === 1 ? "#fff" : LABEL,
                }}
              >
                {m}
              </div>
            ))}
          </div>
          <p style={{ marginTop: 9, fontSize: 11.5, lineHeight: 1.5, color: LABEL }}>
            {MODE_HELPER}
          </p>
        </div>

        {/* Add a word */}
        <div>
          <SectionTitle>Add a word to filter</SectionTitle>
          <div style={{ display: "flex", gap: 8, marginTop: 9 }}>
            <div style={{ flex: 1, background: FIELD, border: `1px solid ${BORDER}`, borderRadius: 9, padding: "9px 12px", fontSize: 13, color: "#5C6080" }}>
              Type a word…
            </div>
            <div style={{ background: ACCENT, color: "#fff", fontSize: 13, fontWeight: 600, borderRadius: 9, padding: "9px 18px" }}>Add</div>
          </div>
        </div>

        {/* Word list */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>3 words in filter</span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10, maxHeight: 132, overflowY: "auto", paddingRight: 4 }}
          >
            {WORDS.map((w) => (
              <div key={w} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 9, padding: "9px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 13, fontFamily: "JetBrains Mono, monospace" }}>{w}</span>
                <span style={{ color: DANGER, fontSize: 16, fontWeight: 700, lineHeight: 1, width: 20, height: 20, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>×</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", fontSize: 11, color: "#5C6080", paddingBottom: 2 }}>
          Word Shield Pro v3.7
        </div>
      </div>
    </div>
  );
}
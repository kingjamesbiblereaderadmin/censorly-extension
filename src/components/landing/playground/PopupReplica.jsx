import { useState } from "react";
import { X, SlidersHorizontal, Globe } from "lucide-react";

const ACCENT = "#7F6AF3";
const BG = "#1A1C2C";
const CARD = "#232640";
const FIELD = "#1F2238";
const DANGER = "#E06C75";
const BORDER = "#2E3152";
const LABEL = "#8A8FA8";
const ON_BADGE = "#6B7A99";
const OFF_BADGE = "#4A4D6A";

const MODES = ["Hide", "Censor", "Blur"];
const MODE_HELP = {
  Hide: "Words become completely invisible — transparent text leaves blank space behind.",
  Censor: "Classic redaction — solid black bars over each letter, like a blacked-out document.",
  Blur: "Words are blurred and pixelated — unreadable until you hover to reveal.",
};
const SITE = "news.example.com";

function Toggle({ on, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className="relative shrink-0"
      style={{ width: 42, height: 24, borderRadius: 999, background: on ? ACCENT : "#3A3D5C", transition: "background 0.2s" }}
    >
      <span
        className="absolute top-0.5 w-[18px] h-[18px] rounded-full bg-white shadow"
        style={{ left: on ? 22 : 2, transition: "left 0.2s" }}
      />
    </button>
  );
}

export default function PopupReplica({
  enabled, setEnabled,
  mode, setMode,
  words, addWord, removeWord,
  excluded, setExcluded,
  blurIntensity, setBlurIntensity,
}) {
  const [draft, setDraft] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const w = draft.trim().toLowerCase();
    if (w && !words.includes(w)) addWord(w);
    setDraft("");
  };

  return (
    <div
      className="w-full max-w-[340px] mx-auto text-white"
      style={{ background: BG, borderRadius: 16, overflow: "hidden", fontFamily: "Inter, system-ui, sans-serif", border: `1px solid ${BORDER}`, boxShadow: "0 30px 80px -20px rgba(60,54,145,0.5)" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3.5"
        style={{ background: "linear-gradient(90deg, #5B51E6, #3C3691)" }}
      >
        <div className="flex items-center gap-2">
          <img
            src="https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/a6889ee8f_icon128.png"
            alt="Word Shield Pro"
            style={{ width: 22, height: 22, borderRadius: 5, objectFit: "contain" }}
          />
          <span className="font-bold text-[15px]">Word Shield Pro</span>
        </div>
        <span
          className="text-[11px] font-bold px-3 py-0.5 rounded-full"
          style={{ background: enabled ? ON_BADGE : OFF_BADGE, color: "#fff", opacity: enabled ? 1 : 0.7 }}
        >
          {enabled ? "ON" : "OFF"}
        </span>
      </div>

      <div className="p-3.5 flex flex-col gap-4">
        {/* Master toggle */}
        <div
          className="flex items-center justify-between rounded-xl px-3.5 py-3"
          style={{ background: CARD, border: `1px solid ${BORDER}` }}
        >
          <span className="text-[13px] font-medium">Filtering enabled</span>
          <Toggle on={enabled} onClick={() => setEnabled(!enabled)} />
        </div>

        {/* Filter mode */}
        <div>
          <div style={{ color: LABEL, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Filter mode
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2.5">
            {MODES.map((m) => {
              const activeMode = m.toLowerCase() === mode;
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m.toLowerCase())}
                  className="text-center text-[13px] font-semibold py-2.5 rounded-lg transition-colors"
                  style={{ background: activeMode ? ACCENT : "#2A2D4A", color: activeMode ? "#fff" : LABEL }}
                >
                  {m}
                </button>
              );
            })}
          </div>
          <p className="mt-2.5 text-[11.5px] leading-[1.5]" style={{ color: LABEL }}>
            {MODE_HELP[MODES.find((m) => m.toLowerCase() === mode)]}
          </p>
        </div>

        {/* Add a word */}
        <div>
          <div style={{ color: LABEL, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Add a word to filter
          </div>
          <form onSubmit={submit} className="flex gap-2 mt-2.5">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type a word…"
              maxLength={32}
              className="flex-1 rounded-lg outline-none text-[13px] px-3 py-2.5 placeholder:text-[#5C6080] text-white"
              style={{ background: FIELD, border: `1px solid ${BORDER}` }}
            />
            <button
              type="submit"
              className="text-[13px] font-semibold rounded-lg px-4 text-white"
              style={{ background: ACCENT }}
            >
              Add
            </button>
          </form>
        </div>

        {/* Word list */}
        <div>
          <span className="text-white font-bold text-[13px]">
            {words.length} {words.length === 1 ? "word" : "words"} in filter
          </span>
          <div className="flex flex-col gap-2 mt-2.5 max-h-32 overflow-y-auto pr-1">
            {words.length === 0 && (
              <div className="text-[12px] py-3 text-center rounded-lg" style={{ background: CARD, color: LABEL, border: `1px dashed ${BORDER}` }}>
                No words yet — add one above
              </div>
            )}
            {words.map((w) => (
              <div
                key={w}
                className="flex items-center justify-between rounded-lg px-3 py-2.5"
                style={{ background: CARD, border: `1px solid ${BORDER}` }}
              >
                <span className="text-[13px]" style={{ fontFamily: "JetBrains Mono, monospace" }}>{w}</span>
                <button
                  type="button"
                  onClick={() => removeWord(w)}
                  aria-label={`Remove ${w}`}
                  className="leading-none w-5 h-5 flex items-center justify-center"
                  style={{ color: DANGER, fontSize: 16, fontWeight: 700 }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Per-site exclusion */}
        <div
          className="flex items-center justify-between rounded-xl px-3.5 py-3"
          style={{ background: CARD, border: `1px solid ${BORDER}` }}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <Globe className="w-4 h-4 shrink-0" style={{ color: LABEL }} />
            <div className="min-w-0">
              <div className="text-[12.5px] font-medium leading-tight">Disable on this site</div>
              <div className="text-[10.5px] truncate" style={{ color: LABEL }}>{SITE}</div>
            </div>
          </div>
          <Toggle on={excluded} onClick={() => setExcluded(!excluded)} />
        </div>

        {/* Blur intensity */}
        {mode === "blur" && (
          <div
            className="rounded-xl px-3.5 py-3"
            style={{ background: CARD, border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center gap-2 text-[12.5px] font-medium">
              <SlidersHorizontal className="w-4 h-4" style={{ color: LABEL }} />
              Blur intensity
              <span className="ml-auto font-mono text-[11px]" style={{ color: LABEL }}>{blurIntensity}px</span>
            </div>
            <input
              type="range"
              min={2}
              max={12}
              value={blurIntensity}
              onChange={(e) => setBlurIntensity(Number(e.target.value))}
              className="w-full mt-3 accent-[#7F6AF3]"
            />
          </div>
        )}

        <div className="text-center text-[11px] pb-0.5" style={{ color: "#5C6080" }}>
          Word Shield Pro v3.7
        </div>
      </div>
    </div>
  );
}
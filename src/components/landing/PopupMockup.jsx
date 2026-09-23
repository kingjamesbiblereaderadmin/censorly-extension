import popupScreenshot from "@/assets/censorly-popup.webp";

// Real screenshot of the Censorly extension popup, shown in the hero section.
export default function PopupMockup() {
  return (
    <div className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-2xl shadow-[hsl(var(--wsp-accent)/0.3)]">
      <img
        src={popupScreenshot}
        alt="Censorly extension popup showing filtering enabled, Hide/Censor/Blur filter modes, add-a-word input, import/export buttons, and 29 words in filter"
        width={588}
        height={1180}
        className="block w-full h-auto"
        draggable={false}
      />
    </div>
  );
}

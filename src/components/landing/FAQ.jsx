import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionLabel } from "./HowItWorks";

const FAQS = [
  {
    q: "Does it work on PDFs?",
    a: "No — Chrome's built-in PDF viewer is off-limits to extensions. Use a desktop tool for documents.",
  },
  {
    q: "Does it work on Google Docs?",
    a: "Not fully — Google Docs renders text on a canvas, which web extensions can't access.",
  },
  {
    q: "Will it slow down my browsing?",
    a: "No — it runs a lightweight text scan when pages load, with debounced re-scans for dynamic content.",
  },
  {
    q: "Can I exclude specific sites?",
    a: "Yes — one click in the popup to exclude any site.",
  },
  {
    q: "Is it free?",
    a: "Yes — open source, no subscriptions, no premium tier.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24 lg:py-32 bg-[hsl(var(--wsp-navy)/0.02)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center">
          <div className="flex justify-center"><SectionLabel>FAQ</SectionLabel></div>
          <h2 className="mt-4 font-heading font-bold text-[hsl(var(--wsp-navy))] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 divide-y divide-[hsl(var(--wsp-navy)/0.08)] border-y border-[hsl(var(--wsp-navy)/0.08)]">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-heading font-semibold text-lg text-[hsl(var(--wsp-navy))]">{item.q}</span>
                  <span className={`shrink-0 w-7 h-7 rounded-full border border-[hsl(var(--wsp-accent)/0.3)] flex items-center justify-center text-[hsl(var(--wsp-accent))] transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.65)] pr-10">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
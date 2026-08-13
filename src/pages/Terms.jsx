import ExtensionIcon from "@/components/landing/ExtensionIcon";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const SECTIONS = [
  {
    n: "1",
    title: "License & Warranty",
    body: (
      <p>
        Censorly is provided &quot;as is&quot; without warranty of any kind,
        express or implied.
      </p>
    ),
  },
  {
    n: "2",
    title: "Free to Use",
    body: <p>The extension is free to use.</p>,
  },
  {
    n: "3",
    title: "Scope of Filtering",
    body: (
      <p>
        Censorly filters text on standard web pages. It cannot filter text
        inside PDFs, Word documents, images, or downloaded files.
      </p>
    ),
  },
  {
    n: "4",
    title: "Your Responsibility",
    body: (
      <p>Users are responsible for their filter word lists and settings.</p>
    ),
  },
  {
    n: "5",
    title: "Limitation of Liability",
    body: (
      <p>
        The developer is not liable for any content that is or isn&apos;t
        filtered.
      </p>
    ),
  },
  {
    n: "6",
    title: "Contact",
    body: (
      <p>
        If you have questions about these terms, contact us at:{" "}
        <a
          href="mailto:censorlyextension@outlook.sg"
          className="text-[hsl(var(--wsp-accent))] font-medium hover:underline"
        >
          censorlyextension@outlook.sg
        </a>
      </p>
    ),
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-12 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <ExtensionIcon className="w-10 h-10" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[hsl(var(--wsp-accent))]">
              Censorly
            </span>
          </div>
          <h1 className="mt-6 font-heading font-extrabold tracking-tight text-[hsl(var(--wsp-navy))] leading-[1.05]" style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}>
            Censorly Terms of Service
          </h1>
          <p className="mt-4 text-sm font-mono text-[hsl(var(--wsp-navy)/0.5)]">
            Last updated: August 13, 2026
          </p>
          <p className="mt-6 text-base text-[hsl(var(--wsp-navy)/0.7)] leading-relaxed">
            These terms govern your use of the Censorly browser extension ("the
            Extension"). By installing and using the Extension, you agree to the
            terms described below.
          </p>

          <div className="mt-12 space-y-12">
            {SECTIONS.map((s) => (
              <section key={s.n} id={`section-${s.n}`} className="scroll-mt-24">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-[hsl(var(--wsp-accent))]">
                    {s.n}
                  </span>
                  <h2 className="font-heading font-bold text-xl text-[hsl(var(--wsp-navy))]">
                    {s.title}
                  </h2>
                </div>
                <div className="mt-3 text-[15px] leading-relaxed text-[hsl(var(--wsp-navy)/0.75)] pl-7">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
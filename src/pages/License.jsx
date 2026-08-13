import ExtensionIcon from "@/components/landing/ExtensionIcon";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const LICENSE_TEXT = `MIT License

Copyright (c) 2026 Censorly Extension

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

export default function License() {
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
            License
          </h1>
          <p className="mt-4 text-sm font-mono text-[hsl(var(--wsp-navy)/0.5)]">
            MIT License
          </p>

          <div className="mt-10 rounded-2xl border border-[hsl(var(--wsp-navy)/0.08)] bg-white p-6 sm:p-8 overflow-x-auto">
            <pre className="font-mono text-[13px] leading-relaxed text-[hsl(var(--wsp-navy)/0.8)] whitespace-pre-wrap">
{LICENSE_TEXT}
            </pre>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
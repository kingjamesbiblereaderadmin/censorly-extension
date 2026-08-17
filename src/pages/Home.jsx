import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import FilterModes from "@/components/landing/FilterModes";
import KeyFeatures from "@/components/landing/KeyFeatures";
import PrivacySection from "@/components/landing/PrivacySection";
import Installation from "@/components/landing/Installation";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FilterModes />
        <KeyFeatures />
        <PrivacySection />
        <Installation />
        <FAQ />
      </main>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-4">
        <a
          href="https://base44.com/superagents"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[hsl(var(--wsp-navy)/0.75)] hover:text-[hsl(var(--wsp-accent))] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2 rounded"
        >
          Made with Superagent AI
        </a>
      </div>
      <Footer />
    </div>
  );
}
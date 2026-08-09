import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import FilterModes from "@/components/landing/FilterModes";
import Playground from "@/components/landing/Playground";
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
        <Playground />
        <KeyFeatures />
        <PrivacySection />
        <Installation />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
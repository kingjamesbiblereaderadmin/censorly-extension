import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import FilterModes from "@/components/landing/FilterModes";
import KeyFeatures from "@/components/landing/KeyFeatures";
import PrivacySection from "@/components/landing/PrivacySection";
import Installation from "@/components/landing/Installation";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import ScrollReveal from "@/components/landing/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal><HowItWorks /></ScrollReveal>
        <ScrollReveal delay={0.05}><FilterModes /></ScrollReveal>
        <ScrollReveal><KeyFeatures /></ScrollReveal>
        <ScrollReveal delay={0.05}><PrivacySection /></ScrollReveal>
        <ScrollReveal><Installation /></ScrollReveal>
        <ScrollReveal delay={0.05}><FAQ /></ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
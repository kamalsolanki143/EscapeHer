import type { Metadata } from "next";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "EscapeHer — AI-Assisted Women's Safety App",
  description:
    "One tap activates a persistent emergency session — live GPS, Heartbeat Protocol, trusted contact alerts, and an escape assistant. Be protected before you need it.",
};

export default function LandingPage() {
  return (
    <main>
      {/* Landmarks for screen readers */}
      <div id="features" aria-hidden="true" />
      <Hero />
      <Features />
      <div id="how-it-works" aria-hidden="true" />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}

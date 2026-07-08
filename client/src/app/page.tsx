"use client";

import React from "react";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";



export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans text-white antialiased selection:bg-red-500 selection:text-white">
      {/* Header / Navbar placeholder or direct overlay */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-950 bg-black/80 backdrop-blur-md">
        <div className="container max-w-6xl mx-auto h-16 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold">
              <span className="text-sm font-black">E</span>
            </div>
            <span className="font-extrabold text-white text-lg tracking-wider">
              ESCAPE<span className="text-red-500">HER</span>
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="/dashboard" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
              Dashboard
            </a>
            <a
              href="/danger-mode"
              className="text-xs font-bold px-3 py-1.5 rounded-md border border-red-500/30 bg-red-950/20 text-red-400 hover:bg-red-900/30 transition-all uppercase tracking-wider"
            >
              Danger Mode
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

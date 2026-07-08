"use client";

import React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowRight } from "lucide-react";
import Logo from "@/components/common/Logo";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[90dvh] px-6 py-20 text-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, var(--eh-teal-100) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Logo */}
      <div className="relative mb-10">
        <Logo variant="full" size="lg" />
      </div>

      {/* Badge */}
      <div
        className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-xs font-semibold uppercase tracking-wide"
        style={{
          background: "var(--eh-teal-100)",
          color: "var(--eh-teal-700)",
          border: "1px solid var(--eh-teal-100)",
        }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full animate-ping" style={{ background: "var(--eh-teal-500)", opacity: 0.5 }} />
          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--eh-teal-500)" }} />
        </span>
        AI-Powered Women&apos;s Safety
      </div>

      {/* Headline */}
      <h1
        id="hero-heading"
        className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] max-w-2xl"
        style={{ color: "var(--eh-ink-900)", fontFamily: "var(--eh-font-display)" }}
      >
        Your safety,{" "}
        <span style={{ color: "var(--eh-teal-500)" }}>persistent</span>
        <br />
        until you&apos;re home.
      </h1>

      {/* Sub */}
      <p
        className="relative mt-5 text-lg max-w-lg leading-relaxed"
        style={{ color: "var(--eh-ink-600)" }}
      >
        One tap activates a full emergency session — live GPS, trusted contact alerts,
        Heartbeat Protocol, and an escape assistant. No further action needed.
      </p>

      {/* CTAs */}
      <div className="relative mt-10 flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/signup"
          className="flex items-center gap-2 rounded-2xl px-7 py-4 text-base font-bold transition-transform active:scale-[0.98]"
          style={{ background: "var(--eh-teal-500)", color: "var(--eh-surface, #fff)" }}
        >
          Get started — it&apos;s free
          <ArrowRight size={18} />
        </Link>
        <Link
          href="/login"
          className="flex items-center gap-2 rounded-2xl px-7 py-4 text-base font-semibold transition-transform active:scale-[0.98]"
          style={{
            background: "var(--eh-surface, #fff)",
            border: "1px solid var(--eh-mist-200)",
            color: "var(--eh-ink-900)",
          }}
        >
          Sign in
        </Link>
      </div>

      {/* Danger mode teaser button */}
      <div className="relative mt-8">
        <Link
          href="/danger-mode"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform active:scale-[0.98]"
          style={{
            background: "var(--eh-danger-100)",
            color: "var(--eh-danger-600)",
            border: "1px solid rgba(194,59,59,0.25)",
          }}
        >
          <ShieldAlert size={16} />
          Try Danger Mode (demo)
        </Link>
      </div>
    </section>
  );
}

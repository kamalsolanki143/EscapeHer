"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="px-4 py-20 max-w-3xl mx-auto"
      aria-labelledby="cta-heading"
    >
      <div
        className="rounded-3xl px-8 py-14 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--eh-teal-900) 0%, var(--eh-teal-700) 100%)",
        }}
      >
        {/* Background decoration */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
          }}
          aria-hidden="true"
        />

        <Shield size={40} color="rgba(255,255,255,0.3)" className="mx-auto mb-5" />

        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl font-extrabold text-white max-w-lg mx-auto"
          style={{ fontFamily: "var(--eh-font-display)" }}
        >
          Be protected before you need it.
        </h2>
        <p className="mt-4 text-base max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
          Set up EscapeHer in under two minutes. Add your trusted contacts, and you&apos;re protected — 24/7.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/signup"
            className="flex items-center gap-2 rounded-2xl px-7 py-4 text-base font-bold transition-transform active:scale-[0.98]"
            style={{ background: "var(--eh-surface, #fff)", color: "var(--eh-teal-700)" }}
          >
            Create your account
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-2xl px-7 py-4 text-base font-semibold transition-colors active:scale-[0.98]"
            style={{ color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            Already have one? Sign in
          </Link>
        </div>
      </div>
    </section>
  );
}

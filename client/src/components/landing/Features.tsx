"use client";

import React from "react";
import { Heart, MapPin, Mic, Shield, Navigation, Radio } from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    title: "Danger Mode",
    description:
      "One tap launches a full emergency session — no second steps, no menus. Works even when you're shaking.",
    accent: "var(--eh-teal-500)",
    bg: "var(--eh-teal-100)",
  },
  {
    icon: Heart,
    title: "Heartbeat Protocol",
    description:
      "EscapeHer checks in with you periodically. Miss a check-in and it automatically alerts the next contact in your chain.",
    accent: "var(--eh-spark-500)",
    bg: "var(--eh-spark-200)",
  },
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    description:
      "Continuous real-time location sharing — not a single ping. Trusted contacts see your position update every few seconds.",
    accent: "var(--eh-teal-700)",
    bg: "var(--eh-teal-100)",
  },
  {
    icon: Navigation,
    title: "Smart Safe Route",
    description:
      "Routes you to the nearest police station, hospital, or crowded public space — not just the shortest path.",
    accent: "var(--eh-blue-600)",
    bg: "var(--eh-blue-300)",
  },
  {
    icon: Mic,
    title: "Audio Evidence",
    description:
      "Records audio from the moment Danger Mode starts. AI generates a structured evidence summary afterwards.",
    accent: "var(--eh-teal-500)",
    bg: "var(--eh-teal-100)",
  },
  {
    icon: Radio,
    title: "Low-Connectivity Mode",
    description:
      "GPS and audio are cached locally when you lose signal and synced automatically the moment connectivity returns.",
    accent: "var(--eh-safe-600)",
    bg: "var(--eh-safe-100)",
  },
];

export default function Features() {
  return (
    <section
      className="px-4 py-20 max-w-5xl mx-auto"
      aria-labelledby="features-heading"
    >
      <div className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--eh-teal-500)" }}>
          Why EscapeHer
        </p>
        <h2
          id="features-heading"
          className="text-3xl sm:text-4xl font-extrabold"
          style={{ color: "var(--eh-ink-900)", fontFamily: "var(--eh-font-display)" }}
        >
          Built for the moment<br />that matters most
        </h2>
        <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "var(--eh-ink-600)" }}>
          Most safety apps send one SOS and stop. EscapeHer keeps protecting you through a persistent session until you confirm you're safe.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURES.map(({ icon: Icon, title, description, accent, bg }) => (
          <div
            key={title}
            className="rounded-2xl p-5 flex flex-col gap-4 transition-transform hover:scale-[1.01]"
            style={{
              background: "var(--eh-surface, #fff)",
              border: "1px solid var(--eh-mist-200)",
            }}
          >
            <span
              className="flex h-11 w-11 items-center justify-center rounded-full"
              style={{ background: bg }}
            >
              <Icon size={20} color={accent} />
            </span>
            <div>
              <h3
                className="text-base font-bold"
                style={{ color: "var(--eh-ink-900)", fontFamily: "var(--eh-font-display)" }}
              >
                {title}
              </h3>
              <p className="text-sm mt-1.5 leading-relaxed" style={{ color: "var(--eh-ink-600)" }}>
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

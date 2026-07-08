"use client";

import React from "react";

const STEPS = [
  {
    number: "01",
    title: "Sense danger",
    body: "Something feels wrong. You don't have time to figure out the right app menu.",
  },
  {
    number: "02",
    title: "Hold the SOS button",
    body: "One hold. Danger Mode activates. GPS starts, audio records, trusted contacts are alerted — simultaneously.",
  },
  {
    number: "03",
    title: "Session runs in the background",
    body: "EscapeHer keeps watching. The Escape Assistant shows only what you need: fake call, safe route, police, siren, I'm safe.",
  },
  {
    number: "04",
    title: "Heartbeat Protocol runs automatically",
    body: "If you stop responding to check-ins, the alert escalates up your contact chain — Friend → Family → Emergency Contact.",
  },
  {
    number: "05",
    title: "Confirm you're safe",
    body: "When you're home, tap 'I'm Safe'. The session ends, contacts are notified, and an AI evidence report is generated.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="px-4 py-20 max-w-2xl mx-auto"
      aria-labelledby="how-it-works-heading"
    >
      <div className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--eh-teal-500)" }}>
          The Workflow
        </p>
        <h2
          id="how-it-works-heading"
          className="text-3xl sm:text-4xl font-extrabold"
          style={{ color: "var(--eh-ink-900)", fontFamily: "var(--eh-font-display)" }}
        >
          From danger to safe,<br />step by step
        </h2>
      </div>

      {/* Timeline steps */}
      <ol className="relative space-y-0" aria-label="How EscapeHer works">
        {STEPS.map((step, i) => {
          const isLast = i === STEPS.length - 1;
          return (
            <li key={step.number} className="relative flex gap-5 pb-8 last:pb-0">
              {/* Connector line */}
              {!isLast && (
                <span
                  className="absolute left-[19px] top-10 bottom-0 w-px"
                  style={{ background: "var(--eh-mist-200)" }}
                  aria-hidden="true"
                />
              )}

              {/* Step number circle */}
              <span
                className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{
                  background: "var(--eh-teal-100)",
                  color: "var(--eh-teal-700)",
                  fontFamily: "var(--eh-font-display)",
                }}
              >
                {step.number}
              </span>

              <div className="pt-2 pb-4">
                <h3
                  className="text-base font-bold"
                  style={{ color: "var(--eh-ink-900)", fontFamily: "var(--eh-font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm mt-1.5 leading-relaxed" style={{ color: "var(--eh-ink-600)" }}>
                  {step.body}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

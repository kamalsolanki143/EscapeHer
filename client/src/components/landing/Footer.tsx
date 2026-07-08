"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/common/Logo";
import { ExternalLink } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Sign in", href: "/login" },
  { label: "Get started", href: "/signup" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer
      style={{ background: "var(--eh-surface, #fff)", borderTop: "1px solid var(--eh-mist-200)" }}
      aria-label="Site footer"
    >
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Logo variant="full" size="md" />
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "var(--eh-ink-600)" }}>
              AI-Assisted Women&apos;s Emergency Escape &amp; Response System. Protecting you beyond the first alert.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
            {[
              { label: "GitHub", href: "https://github.com/kamalsolanki143/EscapeHer" },
              { label: "Twitter", href: "#" },
              { label: "Instagram", href: "#" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 items-center gap-1.5 rounded-full px-3 transition-colors hover:bg-[var(--eh-mist-50)] active:scale-95 text-xs font-medium"
                style={{ border: "1px solid var(--eh-mist-200)", color: "var(--eh-ink-600)" }}
              >
                <ExternalLink size={12} />
                {label}
              </a>
            ))}
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-12 gap-y-2">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm transition-colors hover:underline"
                style={{ color: "var(--eh-ink-600)" }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid var(--eh-mist-200)" }}
        >
          <p className="text-xs" style={{ color: "var(--eh-ink-600)" }}>
            © {new Date().getFullYear()} EscapeHer. Made with care for every woman&apos;s safety.
          </p>
          <div className="flex items-center gap-4">
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xs transition-colors hover:underline"
                style={{ color: "var(--eh-ink-600)" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

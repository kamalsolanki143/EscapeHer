"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/common/PageHeader";
import {
  Bell, Moon, Wifi, Mic, Shield, ChevronRight, LogOut, Loader2
} from "lucide-react";
import { useAuth } from "@/lib/authStub";
// TODO: replace with Kamal's real useAuth + settings persistence

interface ToggleRowProps {
  icon: React.ElementType;
  label: string;
  description: string;
  value: boolean;
  onChange: (v: boolean) => void;
  id: string;
}

function ToggleRow({ icon: Icon, label, description, value, onChange, id }: ToggleRowProps) {
  return (
    <div
      className="flex items-center gap-3 py-4 [&:not(:last-child)]:border-b"
      style={{ borderColor: "var(--eh-mist-200)" }}
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
        style={{ background: "var(--eh-teal-100)" }}
      >
        <Icon size={16} color="var(--eh-teal-700)" />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold" style={{ color: "var(--eh-ink-900)" }}>{label}</p>
        <p className="text-xs mt-0.5 leading-snug" style={{ color: "var(--eh-ink-600)" }}>{description}</p>
      </div>
      {/* Accessible toggle — uses left: instead of translateX so thumb can never clip outside the pill */}
      <button
        type="button"
        id={id}
        role="switch"
        aria-checked={value}
        aria-label={label}
        onClick={() => onChange(!value)}
        className="relative shrink-0 h-6 w-11 rounded-full transition-colors overflow-hidden"
        style={{
          background: value ? "var(--eh-teal-500)" : "var(--eh-mist-200)",
        }}
      >
        <span
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-[left] duration-200"
          style={{ left: value ? "calc(100% - 22px)" : "2px" }}
        />
      </button>
    </div>
  );
}

interface LinkRowProps {
  icon: React.ElementType;
  label: string;
  description?: string;
  onClick: () => void;
}

function LinkRow({ icon: Icon, label, description, onClick }: LinkRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 py-4 text-left transition-colors hover:bg-[var(--eh-mist-50)] active:scale-[0.98] [&:not(:last-child)]:border-b"
      style={{ borderColor: "var(--eh-mist-200)" }}
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
        style={{ background: "var(--eh-teal-100)" }}
      >
        <Icon size={16} color="var(--eh-teal-700)" />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold" style={{ color: "var(--eh-ink-900)" }}>{label}</p>
        {description && <p className="text-xs mt-0.5" style={{ color: "var(--eh-ink-600)" }}>{description}</p>}
      </div>
      <ChevronRight size={16} color="var(--eh-ink-600)" />
    </button>
  );
}

export default function SettingsPage() {
  const { signOut } = useAuth();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [offlineMode, setOfflineMode] = useState(true);
  const [autoRecord, setAutoRecord] = useState(true);
  const [signingOut, setSigningOut] = useState(false);

  const handleSignOut = async () => {
    setSigningOut(true);
    await signOut();
    // TODO: redirect to /login after Kamal's real signOut clears the session
    setSigningOut(false);
  };

  return (
    <DashboardLayout>
      <div className="px-4 py-6 space-y-6 max-w-2xl mx-auto eh-page">
        <PageHeader title="Settings" subtitle="Manage your app preferences and privacy." />

        {/* Preferences */}
        <section aria-labelledby="prefs-heading">
          <h2
            id="prefs-heading"
            className="text-xs font-semibold uppercase tracking-wide mb-1"
            style={{ color: "var(--eh-ink-600)" }}
          >
            Preferences
          </h2>
          <div
            className="rounded-2xl px-5"
            style={{ background: "var(--eh-surface, #fff)", border: "1px solid var(--eh-mist-200)" }}
          >
            <ToggleRow
              id="setting-notifications"
              icon={Bell}
              label="Push notifications"
              description="Receive alerts for heartbeat check-ins and escalations"
              value={notifications}
              onChange={setNotifications}
            />
            <ToggleRow
              id="setting-dark-mode"
              icon={Moon}
              label="Dark mode"
              description="Switch the app to a dark colour scheme"
              value={darkMode}
              onChange={(v) => {
                setDarkMode(v);
                // TODO: wire to Kamal's ThemeContext/useTheme to toggle data-theme="dark"
                document.documentElement.setAttribute("data-theme", v ? "dark" : "");
              }}
            />
            <ToggleRow
              id="setting-offline"
              icon={Wifi}
              label="Offline mode (low connectivity)"
              description="Cache GPS data and audio locally until sync is possible"
              value={offlineMode}
              onChange={setOfflineMode}
            />
            <ToggleRow
              id="setting-auto-record"
              icon={Mic}
              label="Auto-record on Danger Mode"
              description="Start audio recording automatically when an emergency session begins"
              value={autoRecord}
              onChange={setAutoRecord}
            />
          </div>
        </section>

        {/* Security */}
        <section aria-labelledby="security-heading">
          <h2
            id="security-heading"
            className="text-xs font-semibold uppercase tracking-wide mb-1"
            style={{ color: "var(--eh-ink-600)" }}
          >
            Security
          </h2>
          <div
            className="rounded-2xl px-5"
            style={{ background: "var(--eh-surface, #fff)", border: "1px solid var(--eh-mist-200)" }}
          >
            <LinkRow
              icon={Shield}
              label="Change password"
              description="Update your account password"
              onClick={() => {
                // TODO: trigger Firebase sendPasswordResetEmail (Kamal)
                console.log("[settings] change password");
              }}
            />
            <LinkRow
              icon={Shield}
              label="Emergency PIN"
              description="Set a stealth activation PIN for Danger Mode"
              onClick={() => {
                // TODO: wire to settings/emergency-pin route
                console.log("[settings] emergency pin");
              }}
            />
          </div>
        </section>

        {/* Sign out */}
        <div>
          <button
            type="button"
            onClick={handleSignOut}
            disabled={signingOut}
            className="flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold transition-colors active:scale-[0.98]"
            style={{
              background: "var(--eh-surface, #fff)",
              border: "1px solid var(--eh-mist-200)",
              color: "var(--eh-ink-900)",
            }}
          >
            {signingOut ? (
              <><Loader2 size={16} className="animate-spin" />Signing out…</>
            ) : (
              <><LogOut size={16} />Sign out</>
            )}
          </button>
        </div>

        {/* App info */}
        <p
          className="text-center text-[11px]"
          style={{ color: "var(--eh-ink-600)", fontFamily: "var(--eh-font-mono)" }}
        >
          EscapeHer v1.0.0 · Built with ♥ for safety
        </p>
      </div>
    </DashboardLayout>
  );
}

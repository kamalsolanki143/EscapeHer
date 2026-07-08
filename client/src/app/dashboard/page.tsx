"use client";

import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/common/PageHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import QuickActions from "@/components/dashboard/QuickActions";
import HeartbeatStatus from "@/components/emergency/HeartbeatStatus";
import EmergencyChart from "@/components/charts/EmergencyChart";
import ContactList from "@/components/contacts/ContactList";
import { useAuth } from "@/lib/authStub";
// TODO: replace with Kamal's real useAuth + real data from Krrish's API

// Demo data — replace with API-fetched data via React Query
const DEMO_CHART_DATA = [
  { label: "Mon", resolvedSafely: 2, escalated: 0 },
  { label: "Tue", resolvedSafely: 1, escalated: 1 },
  { label: "Wed", resolvedSafely: 3, escalated: 0 },
  { label: "Thu", resolvedSafely: 0, escalated: 0 },
  { label: "Fri", resolvedSafely: 2, escalated: 1 },
  { label: "Sat", resolvedSafely: 1, escalated: 0 },
  { label: "Sun", resolvedSafely: 1, escalated: 0 },
];

const DEMO_CONTACTS = [
  { id: "1", name: "Aanya Sharma", relation: "Sister", phone: "+91 98765 43210", alertStatus: "notified" as const },
  { id: "2", name: "Priya Verma", relation: "Best friend", phone: "+91 87654 32109", alertStatus: "idle" as const },
  { id: "3", name: "Rohit (Dad)", relation: "Father", phone: "+91 76543 21098", alertStatus: "idle" as const },
];

export default function DashboardPage() {
  const { user } = useAuth();
  const firstName = user?.displayName?.split(" ")[0] ?? "there";
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12 ? "Good morning" : currentHour < 17 ? "Good afternoon" : "Good evening";

  return (
    <DashboardLayout>
      <div className="px-4 py-6 space-y-6 max-w-2xl mx-auto eh-page">
        {/* Greeting header */}
        <PageHeader
          title={`${greeting}, ${firstName} 👋`}
          subtitle="Your safety dashboard — everything in one place."
        />

        {/* Heartbeat status — shows session monitor state */}
        <HeartbeatStatus
          status="monitoring"
          intervalSeconds={30}
        />

        {/* Quick actions */}
        <section aria-labelledby="quick-actions-heading">
          <h2
            id="quick-actions-heading"
            className="text-xs font-semibold uppercase tracking-wide mb-3"
            style={{ color: "var(--eh-ink-600)" }}
          >
            Quick Actions
          </h2>
          <QuickActions />
        </section>

        {/* Stats */}
        <section aria-labelledby="stats-heading">
          <h2
            id="stats-heading"
            className="text-xs font-semibold uppercase tracking-wide mb-3"
            style={{ color: "var(--eh-ink-600)" }}
          >
            Your Safety Stats
          </h2>
          <DashboardStats
            stats={{
              totalIncidents: 10,
              resolvedSafely: 9,
              escalated: 1,
              heartbeatUptime: 98,
            }}
          />
        </section>

        {/* Emergency chart — wrapped from UIKit */}
        <section aria-labelledby="chart-heading">
          <h2
            id="chart-heading"
            className="text-xs font-semibold uppercase tracking-wide mb-3"
            style={{ color: "var(--eh-ink-600)" }}
          >
            7-Day Incident Overview
          </h2>
          <div
            className="rounded-2xl p-4"
            style={{ background: "var(--eh-surface, #fff)", border: "1px solid var(--eh-mist-200)" }}
          >
            <EmergencyChart data={DEMO_CHART_DATA} height={200} />
          </div>
        </section>

        {/* Trusted contacts — wrapped from UIKit */}
        <section aria-labelledby="contacts-heading">
          <h2
            id="contacts-heading"
            className="text-xs font-semibold uppercase tracking-wide mb-3"
            style={{ color: "var(--eh-ink-600)" }}
          >
            Trusted Contacts
          </h2>
          <ContactList
            contacts={DEMO_CONTACTS}
            onCall={(id) => console.log("[dashboard] call contact", id)}
            onMessage={(id) => console.log("[dashboard] message contact", id)}
          />
          {/* TODO: wire to Krrish's GET /api/contacts */}
        </section>
      </div>
    </DashboardLayout>
  );
}

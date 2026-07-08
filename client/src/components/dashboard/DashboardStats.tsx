"use client";

import React from "react";
import { ShieldCheck, History, AlertCircle, Activity } from "lucide-react";

export interface StatsData {
  totalIncidents: number;
  resolvedSafely: number;
  escalated: number;
  heartbeatUptime: number; // percentage
}

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sub?: string;
  accent?: string;
}

function StatCard({ icon: Icon, label, value, sub, accent = "var(--eh-teal-500)" }: StatCardProps) {
  return (
    <div
      className="rounded-2xl p-4 flex flex-col gap-3"
      style={{ background: "var(--eh-surface, #fff)", border: "1px solid var(--eh-mist-200)" }}
    >
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full"
        style={{ background: "var(--eh-teal-100)" }}
      >
        <Icon size={18} color={accent} />
      </span>
      <div>
        <p
          className="text-2xl font-bold"
          style={{ color: "var(--eh-ink-900)", fontFamily: "var(--eh-font-display)" }}
        >
          {value}
        </p>
        <p className="text-xs font-medium mt-0.5" style={{ color: "var(--eh-ink-600)" }}>
          {label}
        </p>
        {sub && (
          <p className="text-[11px] mt-1" style={{ color: "var(--eh-ink-600)", fontFamily: "var(--eh-font-mono)" }}>
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

interface DashboardStatsProps {
  stats?: StatsData;
  className?: string;
}

const DEFAULT_STATS: StatsData = {
  totalIncidents: 0,
  resolvedSafely: 0,
  escalated: 0,
  heartbeatUptime: 100,
};

export default function DashboardStats({
  stats = DEFAULT_STATS,
  className = "",
}: DashboardStatsProps) {
  return (
    <div className={`grid grid-cols-2 gap-3 ${className}`}>
      <StatCard
        icon={Activity}
        label="Total incidents"
        value={stats.totalIncidents}
        accent="var(--eh-teal-500)"
      />
      <StatCard
        icon={ShieldCheck}
        label="Resolved safely"
        value={stats.resolvedSafely}
        accent="var(--eh-safe-600)"
      />
      <StatCard
        icon={AlertCircle}
        label="Escalated"
        value={stats.escalated}
        accent="var(--eh-spark-500)"
      />
      <StatCard
        icon={History}
        label="Heartbeat uptime"
        value={`${stats.heartbeatUptime}%`}
        accent="var(--eh-teal-500)"
      />
    </div>
  );
}

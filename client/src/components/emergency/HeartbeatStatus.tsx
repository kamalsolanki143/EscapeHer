"use client";

import React from "react";
import HeartbeatIndicator, {
  type HeartbeatStatus,
} from "@/components/heartbeat/HeartbeatIndicator";

export interface HeartbeatStatusProps {
  status: HeartbeatStatus;
  lastCheckInSeconds?: number;
  intervalSeconds?: number;
  className?: string;
}

/**
 * HeartbeatStatus — thin wrapper around Kamaljit's HeartbeatIndicator.
 * Adds a contextual banner below the indicator for the dashboard/emergency
 * screens so it can be slotted into different layouts without repetition.
 */
export default function HeartbeatStatus({
  status,
  lastCheckInSeconds,
  intervalSeconds = 30,
  className = "",
}: HeartbeatStatusProps) {
  const isAlert = status === "missed" || status === "escalated";

  return (
    <div
      className={`rounded-2xl p-5 flex flex-col items-center gap-4 ${className}`}
      style={{
        background: isAlert ? "var(--eh-danger-100)" : "var(--eh-surface, #fff)",
        border: `1px solid ${isAlert ? "var(--eh-danger-600)" : "var(--eh-mist-200)"}`,
      }}
    >
      <HeartbeatIndicator
        status={status}
        lastCheckInSeconds={lastCheckInSeconds}
        intervalSeconds={intervalSeconds}
        size="md"
      />
      {isAlert && (
        <p
          className="text-xs text-center font-medium"
          style={{ color: "var(--eh-danger-600)" }}
        >
          Automatic escalation triggered — notifying next contact.
        </p>
      )}
    </div>
  );
}

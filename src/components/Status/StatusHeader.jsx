// StatusHeader.jsx
import React from "react";

const statusColor = (s) =>
  s === "operational" ? "bg-emerald-500" : s === "degraded" ? "bg-amber-400" : s === "down" ? "bg-red-500" : "bg-sky-500";

export default function StatusHeader({ overall, lastUpdated }) {
  // overall: { status: 'operational', uptime24h: 99.9 }
  return (
    <header className="bg-gradient-to-r from-[#01021f] via-indigo-950/50 to-[#01021f] text-white p-8 rounded-2xl border border-white/10 mb-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-4">
            <div className={`w-4 h-4 rounded-full ${statusColor(overall.status)}`} />
            <h1 className="text-2xl font-semibold">Cryptrix Status</h1>
          </div>
          <p className="text-sm text-gray-400 mt-2 max-w-xl">
            {overall.status === "operational"
              ? "All systems operational"
              : overall.status === "degraded"
              ? "Some services are experiencing issues"
              : "Major outage — we're investigating"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-right">
            <div className="text-xs text-gray-500">24h Uptime</div>
            <div className="text-lg font-medium">{overall.uptime24h.toFixed(2)}%</div>
          </div>

          <div className="text-right">
            <div className="text-xs text-gray-500">Last updated</div>
            <div className="text-sm">{new Date(lastUpdated).toLocaleString()}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

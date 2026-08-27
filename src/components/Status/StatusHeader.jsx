// StatusHeader.jsx
import React from "react";

const statusColor = (s) =>
  s === "operational" ? "bg-emerald-500" : s === "degraded" ? "bg-amber-400" : s === "down" ? "bg-red-500" : "bg-sky-500";

export default function StatusHeader({ overall, lastUpdated }) {
  // overall: { status: 'operational', uptime24h: 99.9 }
  return (
    <header className="bg-gradient-to-r from-black via-indigo-950/40 to-black text-white p-8 rounded-2xl shadow-lg mb-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-4">
            <div className={`w-4 h-4 rounded-full ${statusColor(overall.status)}`} />
            <h1 className="text-2xl font-semibold">Cryptrix Status</h1>
          </div>
          <p className="text-sm text-slate-200 mt-2 max-w-xl">
            {overall.status === "operational"
              ? "All systems operational"
              : overall.status === "degraded"
              ? "Some services are experiencing issues"
              : "Major outage — we're investigating"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-right">
            <div className="text-xs text-slate-300">24h Uptime</div>
            <div className="text-lg font-medium">{overall.uptime24h.toFixed(2)}%</div>
          </div>

          <div className="text-right">
            <div className="text-xs text-slate-300">Last updated</div>
            <div className="text-sm">{new Date(lastUpdated).toLocaleString()}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

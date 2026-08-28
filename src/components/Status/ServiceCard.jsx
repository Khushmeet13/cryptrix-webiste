// ServiceCard.jsx
import React from "react";

const statusBadge = (s) =>
  s === "operational"
    ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/25"
    : s === "degraded"
    ? "text-amber-400 bg-amber-500/10 border border-amber-500/25"
    : s === "down"
    ? "text-red-400 bg-red-500/10 border border-red-500/25"
    : "text-sky-400 bg-sky-500/10 border border-sky-500/25";

function Sparkline({ values = [], height = 36 }) {
  if (!values || values.length === 0) return null;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * 100;
      const y = max === min ? 50 : ((1 - (v - min) / (max - min)) * 100);
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-9">
      <polyline fill="none" stroke="currentColor" strokeWidth="2" points={points} style={{ color: "#93C5FD", strokeLinecap: "round" }} />
    </svg>
  );
}

export default function ServiceCard({ service }) {
  const { name, status, latencyMs, errorRate, uptime24h, sparkline, meta } = service;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-white/20 transition-colors p-4 flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${status === "operational" ? "bg-emerald-400" : status === "degraded" ? "bg-amber-400" : status === "down" ? "bg-red-400" : "bg-sky-400"}`} />
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${statusBadge(status)}`}>{status}</span>
          </div>

          <div className="mt-2 text-xs text-gray-500">
            {meta && meta.blockHeight ? (
              <div>Block: <span className="font-medium text-gray-300">{meta.blockHeight}</span></div>
            ) : null}
            <div>Uptime (24h): <span className="font-medium text-gray-300">{uptime24h}%</span></div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xs text-gray-500">Latency</div>
          <div className="text-sm font-medium text-white">{latencyMs ? `${latencyMs} ms` : "—"}</div>

          <div className="text-xs text-gray-500 mt-2">Error rate</div>
          <div className="text-sm font-medium text-white">{(errorRate * 100).toFixed(2)}%</div>
        </div>
      </div>

      <div className="mt-4">
        <Sparkline values={sparkline} />
      </div>
    </div>
  );
}

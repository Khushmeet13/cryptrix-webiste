// ServiceCard.jsx
import React from "react";

const statusBadge = (s) =>
  s === "operational"
    ? "text-emerald-600 bg-emerald-50"
    : s === "degraded"
    ? "text-amber-700 bg-amber-50"
    : s === "down"
    ? "text-red-600 bg-red-50"
    : "text-sky-600 bg-sky-50";

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
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${status === "operational" ? "bg-emerald-500" : status === "degraded" ? "bg-amber-400" : status === "down" ? "bg-red-500" : "bg-sky-500"}`} />
            <h3 className="text-lg font-semibold">{name}</h3>
            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${statusBadge(status)}`}>{status}</span>
          </div>

          <div className="mt-2 text-xs text-slate-500">
            {meta && meta.blockHeight ? (
              <div>Block: <span className="font-medium text-slate-700">{meta.blockHeight}</span></div>
            ) : null}
            <div>Uptime (24h): <span className="font-medium text-slate-700">{uptime24h}%</span></div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xs text-slate-400">Latency</div>
          <div className="text-sm font-medium">{latencyMs ? `${latencyMs} ms` : "—"}</div>

          <div className="text-xs text-slate-400 mt-2">Error rate</div>
          <div className="text-sm font-medium">{(errorRate * 100).toFixed(2)}%</div>
        </div>
      </div>

      <div className="mt-4">
        <Sparkline values={sparkline} />
      </div>
    </div>
  );
}

// IncidentLog.jsx
import React from "react";

const statusColor = (s) =>
  s === "investigating" ? "bg-red-500/10 text-red-400 border border-red-500/25" : s === "identified" ? "bg-amber-500/10 text-amber-400 border border-amber-500/25" : s === "monitoring" ? "bg-sky-500/10 text-sky-400 border border-sky-500/25" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25";

export default function IncidentLog({ incidents }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4">
      <h4 className="text-lg font-semibold text-white mb-4">Incident History</h4>
      <div className="space-y-4">
        {incidents.map((inc) => (
          <div key={inc.id} className="flex gap-4">
            <div className="w-2">
              <div className={`w-2 h-2 rounded-full ${inc.status === "resolved" ? "bg-emerald-400" : inc.status === "monitoring" ? "bg-sky-400" : "bg-amber-400"}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-white">{inc.title}</div>
                  <div className="text-xs text-gray-400 mt-1">{inc.details}</div>
                </div>
                <div className="text-right">
                  <div className={`inline-block px-2 py-0.5 text-xs rounded ${statusColor(inc.status)}`}>{inc.status}</div>
                  <div className="text-xs text-gray-500 mt-1">{new Date(inc.updatedAt).toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

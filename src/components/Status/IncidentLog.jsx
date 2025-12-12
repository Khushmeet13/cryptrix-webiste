// IncidentLog.jsx
import React from "react";

const statusColor = (s) =>
  s === "investigating" ? "bg-red-100 text-red-700" : s === "identified" ? "bg-amber-100 text-amber-700" : s === "monitoring" ? "bg-sky-100 text-sky-700" : "bg-emerald-100 text-emerald-700";

export default function IncidentLog({ incidents }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <h4 className="text-lg font-semibold mb-4">Incident History</h4>
      <div className="space-y-4">
        {incidents.map((inc) => (
          <div key={inc.id} className="flex gap-4">
            <div className="w-2">
              <div className={`w-2 h-2 rounded-full ${inc.status === "resolved" ? "bg-emerald-400" : inc.status === "monitoring" ? "bg-sky-400" : "bg-amber-400"}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-medium">{inc.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{inc.details}</div>
                </div>
                <div className="text-right">
                  <div className={`inline-block px-2 py-0.5 text-xs rounded ${statusColor(inc.status)}`}>{inc.status}</div>
                  <div className="text-xs text-slate-400 mt-1">{new Date(inc.updatedAt).toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

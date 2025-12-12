// Maintenance.jsx
import React from "react";

export default function Maintenance({ list }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <h4 className="text-lg font-semibold mb-4">Upcoming Maintenance</h4>
      <div className="space-y-4">
        {list.map((m) => (
          <div key={m.id} className="flex justify-between items-start gap-4">
            <div>
              <div className="text-sm font-medium">{m.title}</div>
              <div className="text-xs text-slate-500 mt-1">{m.description}</div>
              <div className="text-xs text-slate-400 mt-1">
                <strong>When:</strong> {new Date(m.start).toLocaleString()} — {new Date(m.end).toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                <strong>Services:</strong> {m.servicesAffected.join(", ")}
              </div>
            </div>

            <div className="text-xs text-slate-500">
              <div>{new Date(m.start).toLocaleDateString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

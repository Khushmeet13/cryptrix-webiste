// Maintenance.jsx
import React from "react";

export default function Maintenance({ list }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4">
      <h4 className="text-lg font-semibold text-white mb-4">Upcoming Maintenance</h4>
      <div className="space-y-4">
        {list.map((m) => (
          <div key={m.id} className="flex justify-between items-start gap-4">
            <div>
              <div className="text-sm font-medium text-white">{m.title}</div>
              <div className="text-xs text-gray-400 mt-1">{m.description}</div>
              <div className="text-xs text-gray-500 mt-1">
                <strong className="text-gray-400">When:</strong> {new Date(m.start).toLocaleString()} — {new Date(m.end).toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                <strong className="text-gray-400">Services:</strong> {m.servicesAffected.join(", ")}
              </div>
            </div>

            <div className="text-xs text-gray-500">
              <div>{new Date(m.start).toLocaleDateString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

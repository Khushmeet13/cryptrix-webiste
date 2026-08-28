// UptimeHistory.jsx — 90-day per-service uptime bars, additive to the existing status page
import React from "react";

const DAYS = 90;

// Small deterministic PRNG so the bars stay stable across re-renders
// (the page already re-renders every 8s via the live-jitter simulation).
function seededHistory(seed, dips = []) {
  let x = seed;
  const rand = () => {
    x = (x * 9301 + 49297) % 233280;
    return x / 233280;
  };
  return Array.from({ length: DAYS }, (_, i) => {
    if (dips.includes(i)) return "down";
    const r = rand();
    if (r < 0.015) return "degraded";
    return "operational";
  });
}

const SERVICE_SEEDS = {
  rpc: { seed: 11, dips: [72] },
  explorer: { seed: 23, dips: [] },
  wallet: { seed: 37, dips: [3, 4] },
  mainnet: { seed: 5, dips: [] },
  testnet: { seed: 41, dips: [] },
};

const barColor = (status) =>
  status === "operational"
    ? "bg-emerald-400"
    : status === "degraded"
    ? "bg-amber-400"
    : "bg-red-400";

export default function UptimeHistory({ services }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
      <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
        <h4 className="text-lg font-semibold text-white">90-Day Uptime History</h4>
        <span className="text-xs text-gray-500">
          Each bar is one day — oldest on the left, today on the right
        </span>
      </div>

      <div className="space-y-5">
        {services.map((s) => {
          const cfg = SERVICE_SEEDS[s.id] || { seed: 1, dips: [] };
          const history = seededHistory(cfg.seed, cfg.dips);
          const pct = (
            (history.filter((h) => h === "operational").length / DAYS) *
            100
          ).toFixed(2);

          return (
            <div key={s.id}>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
                <span className="font-medium text-gray-300">{s.name}</span>
                <span>{pct}% uptime</span>
              </div>
              <div className="flex gap-[2px]">
                {history.map((h, i) => (
                  <div
                    key={i}
                    title={`${s.name} — ${DAYS - i} day${
                      DAYS - i === 1 ? "" : "s"
                    } ago: ${h}`}
                    className={`flex-1 h-6 rounded-[2px] ${barColor(h)}`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

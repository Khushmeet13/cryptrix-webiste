import { TrendingUp, Wallet2, Repeat, Droplets, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Total Value Locked", value: "$18.4M", icon: Wallet2, accent: "#60A5FA" },
  { label: "24h Trading Volume", value: "$3.2M", icon: TrendingUp, accent: "#06b6d4" },
  { label: "Total Transactions", value: "147K+", icon: Repeat, accent: "#A78BFA" },
  { label: "Active Liquidity Pools", value: "42", icon: Droplets, accent: "#34D399" },
];

export default function LiveAnalytics() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-[#01021f]">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-400">
              Live Analytics
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Real-Time <span className="text-blue-400">On-Chain</span> Metrics
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            Every number below is verifiable on-chain — no dashboards to trust, just the
            ledger.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group rounded-2xl p-6 border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                style={{ boxShadow: "0 4px 30px -10px rgba(0,0,0,0.4)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: stat.accent + "18", border: `1px solid ${stat.accent}35` }}
                >
                  <Icon size={18} style={{ color: stat.accent }} strokeWidth={1.75} />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white mb-1.5">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Live strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.02] px-6 md:px-8 py-5">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-sm text-gray-400">
              <span className="text-white font-semibold">$2.4B+</span> in swaps processed ·{" "}
              <span className="text-white font-semibold">99.97%</span> uptime
            </span>
          </div>

          <a
            href="#analytics"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            View detailed analytics dashboard
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

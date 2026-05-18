// src/components/SecurityAndTrust.tsx
import { ShieldCheck, Code, Lock, BugPlay } from "lucide-react";

const trustFeatures = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Audited Smart Contracts",
    accent: "emerald",
  },
  {
    num: "02",
    icon: BugPlay,
    title: "Active Bug Bounty Program",
    accent: "amber",
  },
  {
    num: "03",
    icon: Code,
    title: "Open-Source & Verifiable",
    accent: "violet",
  },
  {
    num: "04",
    icon: Lock,
    title: "Fully On-Chain Execution",
    accent: "blue",
  },
];

const accentMap= {
  emerald: {
    num: "text-emerald-500/20",
    icon: "text-emerald-400",
    diagonal: "bg-emerald-500",
    iconBg: "bg-emerald-500/15",
    iconText: "text-emerald-400",
    border: "hover:border-emerald-500/20",
  },
  amber: {
    num: "text-amber-500/20",
    icon: "text-amber-400",
    diagonal: "bg-amber-500",
    iconBg: "bg-amber-500/15",
    iconText: "text-amber-400",
    border: "hover:border-amber-500/20",
  },
  violet: {
    num: "text-violet-500/20",
    icon: "text-violet-400",
    diagonal: "bg-violet-500",
    iconBg: "bg-violet-500/15",
    iconText: "text-violet-400",
    border: "hover:border-violet-500/20",
  },
  blue: {
    num: "text-blue-500/20",
    icon: "text-blue-400",
    diagonal: "bg-blue-500",
    iconBg: "bg-blue-500/15",
    iconText: "text-blue-400",
    border: "hover:border-blue-500/20",
  },
};

export default function SecurityAndTrust() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#01021f] via-[#000239] to-[#01021f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex items-baseline gap-6 mb-10 md:mb-14 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-50 whitespace-nowrap">
            Security &amp; Trust
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/40 to-transparent" />
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto mb-10">
          {trustFeatures.map((feature) => {
            const Icon = feature.icon;
            const colors = accentMap[feature.accent];

            return (
              <div
                key={feature.title}
                className={`relative rounded-2xl p-6 bg-[#000239]/50 border border-white/[0.06] overflow-hidden flex items-center gap-5 transition-colors duration-300 cursor-default ${colors.border}`}
              >
                {/* Diagonal corner accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 ${colors.diagonal} opacity-[0.06]`}
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                />

                {/* Ghost number */}
                <span
                  className={`font-mono text-[2.5rem] font-semibold leading-none select-none shrink-0 ${colors.num}`}
                >
                  {feature.num}
                </span>

                {/* Icon + Title */}
                <div>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${colors.iconBg}`}
                  >
                    <Icon className={`w-4 h-4 ${colors.iconText}`} />
                  </div>
                  <h3 className="text-[0.92rem] font-bold text-slate-200 leading-snug">
                    {feature.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer row */}
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {["Audited", "Non-Custodial", "Transparent"].map((badge) => (
              <span
                key={badge}
                className="px-4 py-1.5 rounded-full text-xs font-semibold font-mono bg-white/[0.04] border border-white/[0.08] text-slate-400"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Live indicator */}
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            All systems live
          </div>
        </div>

      </div>
    </section>
  );
}
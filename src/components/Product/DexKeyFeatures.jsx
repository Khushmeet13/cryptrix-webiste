import React, { useEffect, useRef } from "react";
import { Lock, Zap, Droplets, ShieldCheck, Globe } from "lucide-react";

const features = [
  {
    title: "Non-Custodial Trading",
    desc: "You control your assets at all times.",
    icon: <Lock size={20} />,
    num: "01",
  },
  {
    title: "Fast & Low-Cost Swaps",
    desc: "Optimized contracts for efficient trading.",
    icon: <Zap size={20} />,
    num: "02",
  },
  {
    title: "Deep Liquidity",
    desc: "Strong pools for minimal slippage.",
    icon: <Droplets size={20} />,
    num: "03",
  },
  {
    title: "Audited Smart Contracts",
    desc: "Security-first architecture.",
    icon: <ShieldCheck size={20} />,
    num: "04",
  },
  {
    title: "Multi-Chain Ready",
    desc: "Seamless trading across networks.",
    icon: <Globe size={20} />,
    num: "05",
  },
];

const stats = [
  { value: "$2.4B+", label: "Total Volume" },
  { value: "180ms", label: "Avg Swap Time" },
  { value: "12", label: "Chains Supported" },
  { value: "0.01%", label: "Protocol Fee" },
];

function FeatureCard({ item }) {
  return (
    <div className="feat-card group relative overflow-hidden border-r border-[#1a1a2e] last:border-r-0 px-4 py-7 text-center cursor-default transition-colors duration-200 hover:bg-[#0d0d1a]">
      {/* Scan line */}
      <div className="scan-line pointer-events-none absolute inset-x-0 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Number */}
      <div className="mb-3.5 font-mono text-[10px] font-bold tracking-[.12em] text-[#1e1e35] group-hover:text-[#4a4a7a] transition-colors duration-200">
        {item.num}
      </div>

      {/* Hex icon */}
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-[#0f0f1e] border border-[#1e1e35] text-indigo-500 transition-all duration-250 group-hover:bg-[#1a1a30] group-hover:border-indigo-700 group-hover:text-indigo-300"
        style={{ clipPath: "polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)" }}
      >
        {item.icon}
      </div>

      {/* Text */}
      <p className="mb-1.5 text-[12px] font-semibold leading-snug text-[#c0c0e0] group-hover:text-[#e0e0ff] transition-colors duration-200">
        {item.title}
      </p>
      <p className="text-[11px] leading-relaxed text-[#2e2e4a] group-hover:text-[#4a4a70] transition-colors duration-200">
        {item.desc}
      </p>
    </div>
  );
}

const DexKeyFeatures = () => {
  return (
    <section className="py-24 bg-[#04040a]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-2xl bg-[#08080f] px-7 pt-12 pb-10"
          style={{ border: "0.5px solid #12121f" }}
        >
          {/* Corner brackets */}
          <span className="pointer-events-none absolute top-0 left-0 w-14 h-14 border-t border-l border-[#2a2a4a] opacity-50 rounded-br-xl" />
          <span className="pointer-events-none absolute bottom-0 right-0 w-14 h-14 border-b border-r border-[#2a2a4a] opacity-50 rounded-tl-xl" />

          {/* Badge */}
          <div className="flex justify-center mb-9">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[.07em] text-indigo-400"
              style={{ background: "rgba(99,102,241,0.12)", border: "0.5px solid rgba(99,102,241,0.35)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Key Features
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-[28px] font-bold text-[#f0f0ff] leading-tight mb-2.5">
            Built for Secure &{" "}
            <span className="text-indigo-400">Efficient</span> Trading
          </h2>
          <p className="text-center text-[13px] text-[#3d3d5c] mb-11 max-w-sm mx-auto leading-relaxed">
            Everything you need for a fast, secure, and decentralized trading experience.
          </p>

          {/* Feature grid */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 rounded-2xl overflow-hidden"
            style={{ border: "0.5px solid #1a1a2e" }}
          >
            {features.map((item) => (
              <FeatureCard key={item.num} item={item} />
            ))}
          </div>

          {/* Stats bar */}
          <div
            className="mt-7 pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
            style={{ borderTop: "0.5px solid #0f0f1e" }}
          >
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && (
                  <span className="hidden sm:block h-1 w-1 rounded-full bg-[#1a1a2e]" />
                )}
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400">{s.value}</div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-[.06em] text-[#2a2a42]">
                    {s.label}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Scan line animation — add to your global CSS or a <style> tag */}
      <style>{`
        @keyframes scan {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
        .scan-line {
          background: rgba(99, 102, 241, 0.07);
          animation: scan 2.8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default DexKeyFeatures;
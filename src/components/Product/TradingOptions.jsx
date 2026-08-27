import { useEffect, useRef, useState } from "react";
import { BarChart3, Droplet, Clock, Link as LinkIcon, Shuffle } from "lucide-react";

const options = [
  {
    title: "Spot Trading",
    description: "Instant swaps at current market prices with minimal fees.",
    icon: BarChart3,
    accent: "#60A5FA",
    tag: "Instant",
  },
  {
    title: "Liquidity Pools",
    description: "Provide liquidity and earn trading fees from every swap.",
    icon: Droplet,
    accent: "#06b6d4",
    tag: "Passive yield",
  },
  {
    title: "Limit Orders",
    description: "Set your desired price and let the order execute automatically.",
    icon: Clock,
    accent: "#FB923C",
    tag: "Price control",
  },
  {
    title: "Stable Swaps",
    description: "Optimized swaps between stablecoins with minimal slippage.",
    icon: LinkIcon,
    accent: "#34D399",
    tag: "Low slippage",
  },
  {
    title: "Cross-Chain Swaps",
    description: "Swap tokens across different blockchains seamlessly.",
    icon: Shuffle,
    accent: "#A78BFA",
    tag: "Multi-chain",
  },
];

export default function TradingOptions() {
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-20 md:py-24 overflow-hidden bg-[#01021f]">
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 md:mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Trading Options
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Multiple Ways to <span className="text-blue-400">Trade</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            Choose the execution style that fits your strategy — every order type is
            non-custodial and settled fully on-chain.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-5">
          {options.map((opt, i) => {
            const Icon = opt.icon;
            const isHovered = hovered === opt.title;
            return (
              <div
                key={opt.title}
                onMouseEnter={() => setHovered(opt.title)}
                onMouseLeave={() => setHovered(null)}
                className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] transition-all duration-700"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(28px)",
                  transitionDelay: `${i * 90}ms`,
                }}
              >
                <div
                  className="relative h-full rounded-2xl p-7 overflow-hidden transition-all duration-300"
                  style={{
                    background: isHovered
                      ? "rgba(255,255,255,0.045)"
                      : "rgba(255,255,255,0.02)",
                    border: `1px solid ${isHovered ? opt.accent + "55" : "rgba(255,255,255,0.08)"}`,
                    boxShadow: isHovered ? `0 20px 50px -20px ${opt.accent}33` : "none",
                    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300"
                      style={{
                        background: opt.accent + "1a",
                        border: `1px solid ${opt.accent}40`,
                        transform: isHovered ? "scale(1.08)" : "scale(1)",
                      }}
                    >
                      <Icon size={20} style={{ color: opt.accent }} strokeWidth={1.75} />
                    </div>
                    <span
                      className="text-[10px] font-semibold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full"
                      style={{
                        color: opt.accent,
                        background: opt.accent + "14",
                        border: `1px solid ${opt.accent}30`,
                      }}
                    >
                      {opt.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{opt.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{opt.description}</p>

                  <div
                    className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl transition-all duration-500"
                    style={{
                      width: isHovered ? "100%" : "0%",
                      background: `linear-gradient(90deg, ${opt.accent}, transparent)`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

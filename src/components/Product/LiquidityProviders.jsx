// src/components/LiquidityProviders.tsx
import { useState, useEffect, useRef } from "react";

const GridPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#4fc3f7" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

const GlowOrb = ({ cx, cy, r, color }) => (
  <div
    className="absolute rounded-full blur-[120px] pointer-events-none"
    style={{
      left: cx,
      top: cy,
      width: r,
      height: r,
      background: color,
      transform: "translate(-50%, -50%)",
      opacity: 0.18,
    }}
  />
);

const HexIcon = ({ children, gradient }) => (
  <div className="relative w-20 h-20 flex items-center justify-center mb-8 flex-shrink-0">
    <svg viewBox="0 0 80 80" className="absolute inset-0 w-full h-full" fill="none">
      <defs>
        <linearGradient id={`hg-${gradient}`} x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          {gradient === "cyan" && (
            <>
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </>
          )}
          {gradient === "emerald" && (
            <>
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#0d9488" />
            </>
          )}
          {gradient === "violet" && (
            <>
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6366f1" />
            </>
          )}
        </linearGradient>
      </defs>
      <polygon
        points="40,4 74,22 74,58 40,76 6,58 6,22"
        fill={`url(#hg-${gradient})`}
        fillOpacity="0.12"
        stroke={`url(#hg-${gradient})`}
        strokeWidth="1.2"
      />
    </svg>
    <div className="relative z-10">{children}</div>
  </div>
);

const DropletIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z" />
  </svg>
);

const CoinsIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <circle cx="9" cy="9" r="5" />
    <path d="M14 4.93A7 7 0 1 1 19.07 10" />
    <path d="M4 20h16" />
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const cards = [
  {
    id: "pools",
    gradient: "cyan",
    accentColor: "#06b6d4",
    glowColor: "rgba(6,182,212,0.25)",
    borderColor: "rgba(6,182,212,0.3)",
    Icon: DropletIcon,
    step: "01",
    title: "Provide Liquidity to Pools",
    description:
      "Deposit token pairs into liquidity pools and help enable seamless trading on Cryptix. Your assets work 24/7 generating returns.",
    tag: "Deposit",
  },
  {
    id: "earn",
    gradient: "emerald",
    accentColor: "#10b981",
    glowColor: "rgba(16,185,129,0.25)",
    borderColor: "rgba(16,185,129,0.3)",
    Icon: CoinsIcon,
    step: "02",
    title: "Earn Fees + Rewards",
    description:
      "Receive a share of every trade in your pool plus additional Cryptix token incentives stacked on top of your base yield.",
    tag: "Yield",
  },
  {
    id: "verify",
    gradient: "violet",
    accentColor: "#8b5cf6",
    glowColor: "rgba(139,92,246,0.25)",
    borderColor: "rgba(139,92,246,0.3)",
    Icon: CheckIcon,
    step: "03",
    title: "Transparent Rewards",
    description:
      "All rewards and fees are distributed automatically and verifiable on-chain in real time. No hidden mechanics.",
    tag: "On-Chain",
  },
];

const StatItem = ({
  value,
  label,
  accent,
}) => (
  <div className="flex flex-col items-center gap-1">
    <span
      className="text-3xl  tracking-tight"
      style={{
        background: `linear-gradient(135deg, ${accent}, white)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {value}
    </span>
    <span className="text-xs font-medium tracking-widest uppercase text-white/40">{label}</span>
  </div>
);

export default function LiquidityProviders() {
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
    <section
      ref={ref}
      className="relative py-22 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #01021f 0%, #000239 50%, #01021f 100%)",
      }}
    >
      {/* Background effects */}
      <GridPattern />
      <GlowOrb cx="15%" cy="25%" r="600px" color="#06b6d4" />
      <GlowOrb cx="85%" cy="70%" r="500px" color="#8b5cf6" />
      <GlowOrb cx="50%" cy="50%" r="400px" color="#000e6e" />

      {/* Animated horizontal line */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div
          className="h-full w-1/3"
          style={{
            background: "linear-gradient(90deg, transparent, #06b6d4, transparent)",
            animation: "scanline 4s linear infinite",
          }}
        />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        @keyframes scanline {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .card-fade { opacity: 0; transform: translateY(32px); transition: none; }
        .card-fade.visible { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards; }
        .syne { font-family: 'Syne', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-cyan-400/60" />
            <span
              className="mono text-xs tracking-[0.3em] uppercase font-medium"
              style={{ color: "#06b6d4" }}
            >
              Liquidity Providers
            </span>
            <div className="w-6 h-px bg-cyan-400/60" />
          </div>

          <h2
            className="syne text-5xl font-medium mb-2 leading-[1.05] tracking-tight"
            style={{
              background: "linear-gradient(135deg, #ffffff 30%, rgba(255,255,255,0.5) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Earn with{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Cryptix
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-lg mx-auto">
            Put your assets to work. Every pool. Every trade. Every second.
          </p>
        </div>

        {/* Stats bar */}
        <div
          className={`flex justify-center gap-12 md:gap-20 mb-20 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <StatItem value="$4.2B" label="Total Liquidity" accent="#06b6d4" />
          <div className="w-px bg-white/10 self-stretch" />
          <StatItem value="18.4%" label="Avg APY" accent="#10b981" />
          <div className="w-px bg-white/10 self-stretch" />
          <StatItem value="340K+" label="Providers" accent="#8b5cf6" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {cards.map((card, i) => {
            const isHovered = hovered === card.id;
            return (
              <div
                key={card.id}
                className={`card-fade ${visible ? "visible" : ""}`}
                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="relative rounded-2xl p-8 h-full cursor-default overflow-hidden transition-all duration-500"
                  style={{
                    background: isHovered
                      ? `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,2,57,0.9) 100%)`
                      : "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(0,2,57,0.7) 100%)",
                    border: `1px solid ${isHovered ? card.borderColor : "rgba(255,255,255,0.07)"}`,
                    boxShadow: isHovered
                      ? `0 0 60px -10px ${card.glowColor}, 0 20px 60px -20px rgba(0,0,0,0.6)`
                      : "0 4px 30px -10px rgba(0,0,0,0.4)",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  }}
                >
                  {/* Inner glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse at 30% 20%, ${card.glowColor} 0%, transparent 60%)`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />

                  {/* Step number */}
                  <div
                    className="mono text-xs font-medium tracking-widest mb-6 transition-colors duration-300"
                    style={{ color: isHovered ? card.accentColor : "rgba(255,255,255,0.2)" }}
                  >
                    {card.step} /
                  </div>

                  {/* Icon */}
                  <HexIcon gradient={card.gradient}>
                    <card.Icon
                      className="w-8 h-8 transition-colors duration-300"
                      // @ts-ignore
                      style={{ color: isHovered ? card.accentColor : "rgba(255,255,255,0.5)" }}
                    />
                  </HexIcon>

                  {/* Tag */}
                  <div className="mb-4">
                    <span
                      className="mono text-[10px] tracking-[0.2em] uppercase font-medium px-3 py-1 rounded-full"
                      style={{
                        color: card.accentColor,
                        background: `${card.accentColor}18`,
                        border: `1px solid ${card.accentColor}30`,
                      }}
                    >
                      {card.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="syne text-xl font-bold mb-3 leading-tight transition-colors duration-300"
                    style={{ color: isHovered ? "#ffffff" : "rgba(255,255,255,0.85)" }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/40 mono font-light">
                    {card.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl transition-all duration-500"
                    style={{
                      width: isHovered ? "100%" : "0%",
                      background: `linear-gradient(90deg, ${card.accentColor}, transparent)`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Primary */}
          <a
            href="#add-liquidity"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold syne text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
              boxShadow: "0 0 40px -8px rgba(6,182,212,0.6)",
              color: "#fff",
            }}
          >
            <span className="relative z-10">Add Liquidity</span>
            <ArrowRightIcon className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #0891b2, #2563eb)" }}
            />
          </a>

          {/* Secondary */}
          <a
            href="#pools"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold syne text-sm tracking-wide transition-all duration-300 hover:scale-[1.03]"
            style={{
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget).style.borderColor = "rgba(6,182,212,0.4)";
              (e.currentTarget).style.color = "#06b6d4";
              (e.currentTarget).style.background = "rgba(6,182,212,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget).style.borderColor = "rgba(255,255,255,0.12)";
              (e.currentTarget).style.color = "rgba(255,255,255,0.7)";
              (e.currentTarge).style.background = "rgba(255,255,255,0.04)";
            }}
          >
            View Pools
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #01021f)",
        }}
      />
    </section>
  );
}
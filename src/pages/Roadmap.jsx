import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, Loader2, Circle } from "lucide-react";
import RoadmapParticles from "@/components/Roadmap/RoadmapParticles";
import AllInitiatives from "@/components/Roadmap/AllInitiatives";
import RoadmapCTA from "@/components/Roadmap/RoadmapCTA";
import RoadmapFAQ from "@/components/Roadmap/RoadmapFAQ";
import NewsletterSignup from "@/components/Community/NewsletterSignup";

const phases = [
  {
    period: "2021 – 2022",
    title: "Foundation",
    status: "done",
    items: [
      "Cryptrix founded — research begins",
      "Public testnet launches",
      "Seed funding round closes",
    ],
  },
  {
    period: "2023",
    title: "Mainnet Era",
    status: "done",
    items: [
      "Mainnet launches with staking & governance",
      "First independent security audit",
    ],
  },
  {
    period: "2024",
    title: "Ecosystem Expansion",
    status: "done",
    items: [
      "Cryptrix DEX goes live",
      "Multi-chain wallet suite ships",
      "Network crosses 1M transactions",
    ],
  },
  {
    period: "2025",
    title: "Global Growth",
    status: "done",
    items: [
      "50K+ community across 120+ countries",
      "Validator incentive program launches",
      "$1M+ distributed via ecosystem grants",
    ],
  },
  {
    period: "2026",
    title: "Scaling the Network",
    status: "current",
    items: [
      "Cross-chain interoperability layer",
      "Wallet support expanding to more chains",
      "Second independent security audit",
    ],
  },
  {
    period: "Late 2026 – 2027",
    title: "What's Next",
    status: "upcoming",
    items: [
      "Native mobile wallet app",
      "On-chain governance v2",
      "Institutional custody integrations",
      "Layer 2 scaling exploration",
    ],
  },
];

const statusMeta = {
  done: { label: "Shipped", accent: "#34D399" },
  current: { label: "In Progress", accent: "#60A5FA" },
  upcoming: { label: "Upcoming", accent: "#A78BFA" },
};

const CURRENT_INDEX = phases.findIndex((p) => p.status === "current");

const Roadmap = () => {
  const [active, setActive] = useState(CURRENT_INDEX);
  const wheelLock = useRef(false);

  const goTo = useCallback((i) => {
    setActive(Math.max(0, Math.min(phases.length - 1, i)));
  }, []);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const handleWheel = (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 20 || wheelLock.current) return;
    wheelLock.current = true;
    if (delta > 0) next();
    else prev();
    setTimeout(() => (wheelLock.current = false), 450);
  };

  return (
    <div className="w-full bg-[#01021f] text-white overflow-hidden">
      {/* ───────── Hero ───────── */}
      <section className="relative flex items-center justify-center overflow-hidden px-6 pt-32 pb-8 md:pt-36 md:pb-10">
        <RoadmapParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#01021f]/40 to-[#01021f] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Roadmap
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
            Where Cryptrix is headed
          </h1>
          <p className="mt-6 text-gray-400 text-lg max-w-md mx-auto">
            Drag, scroll, or steer through the timeline below.
          </p>
        </div>
      </section>

      {/* ───────── 3D Coverflow ───────── */}
      <section className="relative pb-28 md:pb-32">
        <div
          className="relative mx-auto max-w-6xl h-[440px] md:h-[500px] select-none"
          style={{ perspective: "1800px" }}
          onWheel={handleWheel}
        >
          {/* Ambient glow behind active card */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none transition-colors duration-500"
            style={{ background: statusMeta[phases[active].status].accent + "22" }}
          />

          {phases.map((phase, i) => {
            const distance = i - active;
            const absDist = Math.abs(distance);
            const sign = Math.sign(distance);
            const meta = statusMeta[phase.status];
            const isActive = distance === 0;

            if (absDist > 2) return null;

            const translateX = distance * 250;
            const translateZ = -absDist * 180;
            const rotateY = -sign * Math.min(absDist * 38, 48);
            const scale = 1 - absDist * 0.16;
            const opacity = absDist === 0 ? 1 : absDist === 1 ? 0.55 : 0.22;
            const blur = absDist === 0 ? 0 : absDist * 2.5;

            return (
              <div
                key={phase.title}
                onClick={() => !isActive && goTo(i)}
                className={`absolute top-1/2 left-1/2 w-[280px] md:w-[320px] transition-all duration-500 ease-out ${
                  isActive ? "cursor-default" : "cursor-pointer"
                }`}
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  filter: `blur(${blur}px)`,
                  zIndex: 20 - absDist,
                }}
              >
                <div
                  className="rounded-2xl border bg-white/[0.03] backdrop-blur-xl p-6 md:p-7"
                  style={{
                    borderColor: isActive ? meta.accent + "55" : "rgba(255,255,255,0.1)",
                    boxShadow: isActive
                      ? `0 25px 70px -20px ${meta.accent}55`
                      : "0 15px 40px -20px rgba(0,0,0,0.6)",
                  }}
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono text-gray-500">{phase.period}</span>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ color: meta.accent, background: meta.accent + "18", border: `1px solid ${meta.accent}35` }}
                    >
                      {meta.label}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>

                  <ul className="space-y-2.5">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed">
                        {phase.status === "done" ? (
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: meta.accent }} />
                        ) : phase.status === "current" ? (
                          <Loader2 size={14} className="mt-0.5 shrink-0 animate-spin" style={{ color: meta.accent }} />
                        ) : (
                          <Circle size={12} className="mt-1 shrink-0" style={{ color: meta.accent }} />
                        )}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* Arrows */}
          <button
            onClick={prev}
            disabled={active === 0}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:scale-110 disabled:opacity-20 disabled:pointer-events-none"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            disabled={active === phases.length - 1}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:scale-110 disabled:opacity-20 disabled:pointer-events-none"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Scrubber */}
        <div className="max-w-2xl mx-auto px-6 mt-8 md:mt-12">
          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 right-0 h-px bg-white/10" />
            {phases.map((phase, i) => {
              const meta = statusMeta[phase.status];
              const isActive = i === active;
              return (
                <button
                  key={phase.title}
                  onClick={() => goTo(i)}
                  className="relative z-10 flex flex-col items-center gap-2 group"
                >
                  <span
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? 12 : 8,
                      height: isActive ? 12 : 8,
                      background: isActive ? meta.accent : "rgba(255,255,255,0.15)",
                      boxShadow: isActive ? `0 0 0 4px ${meta.accent}22` : "none",
                    }}
                  />
                  <span
                    className={`hidden sm:block text-[10px] whitespace-nowrap transition-colors duration-300 ${
                      isActive ? "text-white font-medium" : "text-gray-600 group-hover:text-gray-400"
                    }`}
                  >
                    {phase.period}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <AllInitiatives />
      <RoadmapCTA />
      <RoadmapFAQ />
      <NewsletterSignup />
    </div>
  );
};

export default Roadmap;

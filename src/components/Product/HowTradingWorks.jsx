// src/components/HowTradingWorks.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Wallet, Coins, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Wallet",
    description:
      "Connect MetaMask, WalletConnect or any supported wallet in seconds.",
    icon: Wallet,
    accent: "#5EEAD4", // teal
    glow: "rgba(94, 234, 212, 0.15)",
    tag: "One-click auth",
  },
  {
    number: "02",
    title: "Select Token Pair",
    description: "Choose from thousands of tokens across multiple chains.",
    icon: Coins,
    accent: "#A78BFA", // violet
    glow: "rgba(167, 139, 250, 0.15)",
    tag: "Multi-chain",
  },
  {
    number: "03",
    title: "Set Slippage",
    description: "Fine-tune slippage tolerance for optimal price execution.",
    icon: Settings,
    accent: "#FB923C", // orange
    glow: "rgba(251, 146, 60, 0.15)",
    tag: "Smart routing",
  },
  {
    number: "04",
    title: "Confirm Swap",
    description: "Sign the transaction and receive tokens directly in your wallet.",
    icon: CheckCircle,
    accent: "#34D399", // emerald
    glow: "rgba(52, 211, 153, 0.15)",
    tag: "Non-custodial",
  },
];

export default function HowTradingWorks() {
  const [activeStep, setActiveStep] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-18 md:py-22 bg-[#01021f] overflow-hidden"
    >
      {/* Faint grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(94,234,212,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-block h-px w-10"
              style={{ background: "#60A5FA" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#60A5FA", fontFamily: "'Space Mono', monospace" }}
            >
              How it works
            </span>
          </div>

          <h2
            className="text-5xl font-medium leading-[1.05] tracking-tight text-white max-w-2xl"
            
          >
            Trade in{" "}
            <span
              className="relative inline-block"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px #60A5FA",
              }}
            >
              4 steps
            </span>
            .<br />
            <span className="text-white/40">No friction.</span>
          </h2>
        </motion.div>

        {/* ── Progress line (desktop) ── */}
        <div className="hidden lg:block relative mb-2">
          <div className="absolute top-0 left-[11%] right-[11%] h-px bg-white/8" />
          <motion.div
            className="absolute top-0 left-[11%] h-px"
            style={{
              width: lineWidth,
              background:
                "linear-gradient(90deg, #5EEAD4, #A78BFA, #FB923C, #34D399)",
            }}
          />
        </div>

        {/* ── Steps Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = activeStep === i;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
                className="relative cursor-default"
              >
                <motion.div
                  animate={{
                    backgroundColor: isActive ? step.glow : "rgba(255,255,255,0.02)",
                    borderColor: isActive ? step.accent + "55" : "rgba(255,255,255,0.07)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="h-full rounded-2xl border p-6 lg:p-7 flex flex-col gap-5"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  {/* Top row: number + tag */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-black text-sm tracking-widest"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        color: step.accent,
                      }}
                    >
                      {step.number}
                    </span>
                    <span
                      className="text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                      style={{
                        background: step.accent + "18",
                        color: step.accent,
                        border: `1px solid ${step.accent}33`,
                      }}
                    >
                      {step.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    animate={{ scale: isActive ? 1.08 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      background: step.accent + "18",
                      border: `1px solid ${step.accent}33`,
                    }}
                  >
                    <Icon
                      size={24}
                      style={{ color: step.accent }}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Text */}
                  <div className="flex flex-col gap-2 mt-auto">
                    <h3
                      className="text-lg font-bold text-white leading-tight"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/45 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom accent bar */}
                  <motion.div
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    initial={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-px origin-left rounded-full"
                    style={{ background: step.accent }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/8 px-8 py-6"
          style={{ background: "rgba(255,255,255,0.025)" }}
        >
          <div className="flex items-center gap-4">
            {/* Live dot */}
            <span className="relative flex h-3 w-3">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "#34D399" }}
              />
              <span
                className="relative inline-flex rounded-full h-3 w-3"
                style={{ background: "#34D399" }}
              />
            </span>
            <span
              className="text-sm text-white/60"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              <span className="text-white font-semibold">$2.4B+</span> in swaps
              processed ·{" "}
              <span className="text-white font-semibold">99.97%</span> uptime
            </span>
          </div>

          <button
            className="group flex items-center gap-2.5 text-sm font-semibold text-black rounded-xl px-5 py-2.5 transition-all hover:brightness-110 active:scale-95 bg-blue-400"
           
          >
            Start trading now
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
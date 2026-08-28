import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Fingerprint,
  Scan,
  EyeOff,
  FileCheck,
  Repeat,
  Wallet,
  Gamepad2,
  Image as NFTIcon,
} from "lucide-react";

/* 3D rotating scan core — the hero's biometric-scan visual */
const ScanCore3D = ({ size = 220 }) => (
  <div
    className="relative mx-auto shrink-0"
    style={{ width: size, height: size, perspective: "1000px" }}
  >
    <div className="absolute -inset-8 rounded-full bg-indigo-500/20 blur-3xl animate-pulse-slow" />
    <div className="absolute inset-0 preserve-3d animate-spin-slow">
      {[0, 60, 120].map((deg) => (
        <div
          key={deg}
          className="absolute inset-0 rounded-full border border-blue-400/25"
          style={{ transform: `rotateX(72deg) rotateZ(${deg}deg)` }}
        />
      ))}
    </div>

    <div
      className="absolute rounded-full flex items-center justify-center overflow-hidden"
      style={{
        inset: "26%",
        background:
          "radial-gradient(circle at 35% 30%, rgba(96,165,250,0.4), rgba(6,8,24,0.95) 72%)",
        border: "1px solid rgba(96,165,250,0.45)",
        boxShadow: "0 0 70px -8px rgba(96,165,250,0.6)",
      }}
    >
      <Fingerprint size={34} className="text-blue-300" strokeWidth={1.5} />
      <div
        className="absolute inset-y-0 w-10 animate-shine"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(147,197,253,0.5), transparent)",
        }}
      />
    </div>
  </div>
);

const TYPE_WORDS = ["Gaming.", "Payments.", "NFTs.", "DeFi."];

/* Classic type-then-delete typewriter effect, no extra dependency */
const useTypewriter = (words, { typingSpeed = 90, deletingSpeed = 45, pause = 1400 } = {}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];

    if (!deleting && subIndex === word.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 0);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return words[index].slice(0, subIndex);
};

const pipeline = [
  { icon: Scan, title: "Signal Collection", desc: "Device, wallet history, and behavior are read at the moment of action." },
  { icon: Fingerprint, title: "Risk Scoring", desc: "Signals are scored in real time to flag bots, duplicates, and known-bad actors." },
  { icon: EyeOff, title: "Trust Proof", desc: "A verification result is produced — raw data never has to leave the device." },
  { icon: Repeat, title: "Portable Identity", desc: "The trust proof carries forward, recognized by every app on the network." },
];

const pillars = [
  {
    icon: Scan,
    title: "On-Chain Verification",
    accent: "#60A5FA",
    desc: "Identity and risk checks resolve in milliseconds — fast enough for matchmaking, checkout, and mint launches, not just background review.",
  },
  {
    icon: EyeOff,
    title: "Privacy by Default",
    accent: "#A78BFA",
    desc: "Raw identity data stays encrypted and off-chain. Only the resulting trust proof or risk flag is ever anchored on-chain, and only optionally.",
  },
  {
    icon: FileCheck,
    title: "Compliance-Ready",
    accent: "#34D399",
    desc: "KYC-aware payouts, role-based permissions, and audit-ready flows — built for the moments where a regulator will actually ask questions.",
  },
  {
    icon: Repeat,
    title: "Portable Across Apps",
    accent: "#38BDF8",
    desc: "Verify once, and stay recognized across every game, marketplace, and payment flow built on Cryptrix — no repeated onboarding.",
  },
];

const liveIn = [
  {
    icon: Gamepad2,
    title: "Gaming",
    stat: "~30–40ms",
    desc: "Anti-bot and fair-play checks fast enough for live matchmaking.",
    href: "/solutions/gaming",
  },
  {
    icon: Wallet,
    title: "Payments",
    stat: "~35ms",
    desc: "Fraud risk scoring at the point of transaction, not after the fact.",
    href: "/solutions/payments",
  },
  {
    icon: NFTIcon,
    title: "NFTs",
    stat: "1 verification",
    desc: "One identity check, reused across every supported marketplace.",
    href: "/use-cases/nfts",
  },
];

const PillarWall = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = pillars[activeIdx];
  const CurrentIcon = current.icon;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          const isActive = activeIdx === i;
          return (
            <button
              key={p.title}
              onClick={() => setActiveIdx(i)}
              className="flex flex-col items-center gap-2.5 group"
              style={{ perspective: "600px" }}
            >
              <div
                className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:[transform:rotateX(12deg)_rotateY(-14deg)_translateZ(6px)]"
                style={{
                  clipPath:
                    "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                  background: isActive ? p.accent + "22" : "rgba(255,255,255,0.03)",
                  border: `1.5px solid ${isActive ? p.accent : "rgba(255,255,255,0.12)"}`,
                  transform: isActive
                    ? "rotateX(8deg) rotateY(-10deg) translateZ(4px)"
                    : undefined,
                  boxShadow: isActive ? `0 12px 30px -12px ${p.accent}66` : "none",
                }}
              >
                <Icon
                  size={22}
                  style={{ color: isActive ? p.accent : "#9ca3af" }}
                  strokeWidth={1.75}
                />
              </div>
              <span
                className={`text-[11px] text-center max-w-[6.5rem] leading-snug transition-colors ${
                  isActive ? "text-white font-medium" : "text-gray-500"
                }`}
              >
                {p.title}
              </span>
            </button>
          );
        })}
      </div>

      <div
        className="max-w-2xl mx-auto rounded-2xl border p-6 md:p-8 text-center transition-colors duration-300"
        style={{ borderColor: current.accent + "35", background: current.accent + "0a" }}
      >
        <div
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
          style={{ background: current.accent + "18", border: `1px solid ${current.accent}35` }}
        >
          <CurrentIcon size={18} style={{ color: current.accent }} strokeWidth={1.75} />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{current.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed max-w-lg mx-auto">
          {current.desc}
        </p>
      </div>
    </div>
  );
};

const Identity = () => {
  const typed = useTypewriter(TYPE_WORDS);

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative px-6 sm:px-12 lg:px-24 pt-32 pb-20 border-b border-white/10 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 w-fit mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                Solutions / Identity
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
              One verification.
              <br />
              Verified for{" "}
              <span className="text-blue-400">{typed}</span>
              <span
                className="inline-block w-[3px] h-[0.85em] bg-blue-400 ml-1 align-middle animate-pulse"
                aria-hidden="true"
              />
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl">
              The same decentralized identity layer already scoring risk in
              games, payments, and NFT marketplaces built on Cryptrix —
              checked once, trusted everywhere.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/docs"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
              >
                Read the Docs
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/security"
                className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
              >
                Read the Security Report
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <ScanCore3D />
          </div>
        </div>

        {/* Compact pipeline preview — with a scanning sweep across it */}
        <div className="relative max-w-4xl mx-auto mt-16 hidden md:flex items-center overflow-hidden">
          <div
            className="absolute inset-y-0 w-24 pointer-events-none animate-shine"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(96,165,250,0.15), transparent)",
            }}
          />
          {pipeline.map((step, i) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.title}>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center">
                    <Icon size={15} className="text-blue-400" />
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {step.title}
                  </span>
                </div>
                {i < pipeline.length - 1 && (
                  <span className="flex-1 h-px bg-white/10 mx-3" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* ───────── How verification flows ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                The Flow
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              How verification actually flows
            </h2>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-white/10" />
            {pipeline.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative text-center">
                  <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-[#01021f] border border-white/15 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <p className="text-[11px] font-mono text-gray-600 mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Four pillars — seal wall ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10 px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              What It Guarantees
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Four pillars of identity on Cryptrix
          </h2>
        </div>

        <PillarWall />
      </section>

      {/* ───────── Where it's already live ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-10 text-center">
            Where it's already live
          </h2>

          <div className="grid sm:grid-cols-3 gap-5">
            {liveIn.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.href}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1 flex items-center gap-1.5">
                    {item.title}
                    <ArrowUpRight
                      size={14}
                      className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </h3>
                  <p className="text-xs font-semibold text-blue-400 mb-2">
                    {item.stat}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Closing CTA ───────── */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Building something that needs to know who it's talking to?
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            The same identity layer behind Gaming, Payments, and NFTs is
            available to build with directly.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/docs"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Read the Docs
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/grants"
              className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Apply for a Grant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Identity;

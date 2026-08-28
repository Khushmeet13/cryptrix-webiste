import React, { useEffect, useState } from "react";
import {
  Fuel,
  ShieldCheck,
  Vote,
  Landmark,
  Repeat,
  Wallet,
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Coins,
  Send,
  SplitSquareHorizontal,
} from "lucide-react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/24/outline";
import governanceBg from "../../assets/images/governance-bg.jpg";
import tokenVoting from "../../assets/gif/token-voting.mp4";

const Coin3D = ({ size = 240, spin = true }) => (
  <div
    className="relative mx-auto"
    style={{ width: size, height: size, perspective: "1200px" }}
  >
    <div className="absolute -inset-10 rounded-full bg-indigo-500/25 blur-3xl animate-pulse-slow" />
    <div
      className={`absolute inset-0 preserve-3d ${spin ? "animate-spin-slow" : ""}`}
    >
      {/* Front face */}
      <div
        className="absolute inset-0 rounded-full backface-hidden flex items-center justify-center"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #5b6bff, #12132c 75%)",
          border: "2px solid rgba(255,255,255,0.25)",
          boxShadow:
            "0 0 70px -10px rgba(99,102,241,0.55), inset 0 0 40px rgba(255,255,255,0.08)",
        }}
      >
        <span className="absolute inset-3 rounded-full border border-white/15" />
        <span
          className="font-bold tracking-wide text-white"
          style={{ fontSize: size * 0.2 }}
        >
          CRX
        </span>
      </div>
      {/* Back face */}
      <div
        className="absolute inset-0 rounded-full backface-hidden flex items-center justify-center"
        style={{
          transform: "rotateY(180deg)",
          background:
            "radial-gradient(circle at 65% 30%, #6366f1, #0d0e24 75%)",
          border: "2px solid rgba(255,255,255,0.25)",
        }}
      >
        <div className="w-1/2 h-1/2 rounded-full border-2 border-white/15 flex items-center justify-center">
          <div className="w-1/3 h-1/3 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  </div>
);

const utilities = [
  {
    title: "Network Fees",
    short: "Gas",
    icon: Fuel,
    accent: "#60A5FA",
    desc: "Every transaction on Cryptrix — transfers, swaps, votes — is paid for in CRX. Fees are split transparently on-chain between validators and the treasury.",
    href: "/dex-exchange",
    linkLabel: "See it on the DEX",
  },
  {
    title: "Staking & Security",
    short: "Stake",
    icon: ShieldCheck,
    accent: "#34D399",
    desc: "Delegate CRX to validators to help secure the network under delegated proof-of-stake, and earn a share of the rewards for doing so.",
    href: "/staking",
    linkLabel: "Stake CRX",
    stat: "Up to 9.8% APY",
  },
  {
    title: "Governance & Voting",
    short: "Vote",
    icon: Vote,
    accent: "#818cf8",
    desc: "Holding and staking CRX grants voting power. Use it to vote on active proposals or submit your own — from protocol upgrades to policy changes.",
    href: "/voting",
    linkLabel: "How voting works",
    media: tokenVoting,
  },
  {
    title: "Treasury & Grants",
    short: "Fund",
    icon: Landmark,
    accent: "#38BDF8",
    desc: "A share of every fee flows into the protocol treasury, which funds developer grants, ecosystem initiatives, and community-approved proposals.",
    href: "/grants",
    linkLabel: "Explore grants",
  },
  {
    title: "Trading & Liquidity",
    short: "Trade",
    icon: Repeat,
    accent: "#6366F1",
    desc: "CRX trades natively on the Cryptrix DEX, where anyone can swap or provide liquidity without relying on a centralized intermediary.",
    href: "/dex-exchange",
    linkLabel: "Trade on the DEX",
  },
  {
    title: "Payments & Custody",
    short: "Hold",
    icon: Wallet,
    accent: "#A5B4FC",
    desc: "Hold, send, and receive CRX across the Cryptrix wallet ecosystem — the same token used to pay fees, stake, and vote.",
    href: "/wallets",
    linkLabel: "Get a wallet",
  },
];

const feeSteps = [
  {
    title: "Fee Paid in CRX",
    icon: Send,
    accent: "#60A5FA",
    desc: "Any on-chain action — a transfer, a swap, a vote — is submitted with a network fee paid in CRX.",
  },
  {
    title: "Split Transparently",
    icon: SplitSquareHorizontal,
    accent: "#818cf8",
    desc: "The fee is divided on-chain by protocol rule, not by discretion — every split is publicly verifiable.",
  },
  {
    title: "Validators & Treasury",
    icon: Coins,
    accent: "#34D399",
    desc: "A portion rewards the validator that processed the transaction; the rest funds the protocol treasury.",
  },
];

const exploreTiles = [
  {
    title: "Get a Wallet",
    desc: "Hold and manage CRX securely.",
    icon: Wallet,
    href: "/wallets",
    accent: "#A5B4FC",
  },
  {
    title: "Trade on the DEX",
    desc: "Swap CRX natively, peer to peer.",
    icon: Repeat,
    href: "/dex-exchange",
    accent: "#6366F1",
  },
  {
    title: "Stake & Earn",
    desc: "Delegate to validators for rewards.",
    icon: ShieldCheck,
    href: "/staking",
    accent: "#34D399",
  },
  {
    title: "Vote on Proposals",
    desc: "Put your CRX toward a decision.",
    icon: Vote,
    href: "/voting",
    accent: "#818cf8",
  },
];

const faqs = [
  {
    question: "What network does CRX run on?",
    answer:
      "CRX is the native token of the Cryptrix network itself, secured by its own delegated proof-of-stake validator set — it isn't a token issued on top of another chain.",
  },
  {
    question: "Is there a maximum supply?",
    answer:
      "Yes. Total supply is fixed at 1,000,000,000 CRX, with issuance published on-chain and no discretionary minting outside the protocol's schedule.",
  },
  {
    question: "Do I need CRX to use Cryptrix apps?",
    answer:
      "Yes — network fees for any transaction, including token transfers, DEX swaps, and governance votes, are paid in CRX.",
  },
  {
    question: "Can I lose CRX by staking it?",
    answer:
      "Staked CRX can be slashed if the validator you delegate to acts maliciously or goes offline, so it's worth choosing validators carefully before delegating.",
  },
  {
    question: "Where can I buy or trade CRX?",
    answer:
      "CRX trades natively on the Cryptrix DEX and is supported across the Cryptrix wallet ecosystem.",
  },
];

const RADIUS = 40;
const wheelPositions = utilities.map((_, i) => {
  const deg = i * 60 - 90;
  const rad = (deg * Math.PI) / 180;
  return {
    x: 50 + RADIUS * Math.cos(rad),
    y: 50 + RADIUS * Math.sin(rad),
  };
});

const TokenUtility = () => {
  const [hovered, setHovered] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % feeSteps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const activeUtility = utilities[hovered];

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative min-h-[70vh] flex items-center px-6 sm:px-12 lg:px-24 pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${governanceBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#01021f] via-[#01021f]/95 to-black/95" />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none animate-float-slow" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                CRX Token / Utility
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
              One token. Six ways to put it to work.
            </h1>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl">
              CRX is more than a unit of value — it's the fee currency, stake,
              vote, and treasury of the Cryptrix network, all in one asset.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/wallets"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
              >
                Get CRX
                <ArrowRight size={16} />
              </a>
              <a
                href="/whitepaper"
                className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
              >
                Read the Whitepaper
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-xl pt-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
                <p className="text-2xl font-semibold text-white">1B</p>
                <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                  Total Supply
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
                <p className="text-2xl font-semibold text-white">
                  {utilities.length}
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                  Core Utilities
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
                <p className="text-2xl font-semibold text-white">CRX</p>
                <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                  Native Asset
                </p>
              </div>
            </div>
          </div>

          {/* 3D coin */}
          <div className="hidden lg:flex items-center justify-center">
            <Coin3D size={280} />
          </div>
        </div>
      </section>

      {/* ───────── Utility Wheel + Cards ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                What CRX Does
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
              Every utility, connected to one token
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Fees, staking, governance, treasury, trading, and custody all
              run through the same asset — hover a node to see how.
            </p>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,460px)_1fr] gap-14 items-center">
            {/* Wheel diagram — desktop only */}
            <div className="hidden lg:block relative aspect-square w-full max-w-[460px] mx-auto">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {wheelPositions.map((pos, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={pos.x}
                    y2={pos.y}
                    stroke={hovered === i ? utilities[i].accent : "rgba(255,255,255,0.1)"}
                    strokeWidth={hovered === i ? 0.6 : 0.3}
                    style={{ transition: "all 0.3s ease" }}
                  />
                ))}
              </svg>

              {/* Center hub — tilted 3D disc */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center border preserve-3d"
                style={{
                  borderColor: activeUtility.accent + "50",
                  background: `radial-gradient(circle at 35% 30%, ${activeUtility.accent}33, rgba(255,255,255,0.03) 75%)`,
                  boxShadow: `0 0 60px -10px ${activeUtility.accent}55, inset 0 0 20px rgba(255,255,255,0.06)`,
                  transform: "perspective(600px) rotateX(14deg)",
                  transition: "all 0.4s ease",
                }}
              >
                <span className="text-lg font-bold tracking-wide">CRX</span>
              </div>

              {/* Nodes */}
              {utilities.map((u, i) => {
                const Icon = u.icon;
                const pos = wheelPositions[i];
                const isActive = hovered === i;
                return (
                  <button
                    key={u.title}
                    type="button"
                    onMouseEnter={() => setHovered(i)}
                    onFocus={() => setHovered(i)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 cursor-pointer"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  >
                    <span
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300"
                      style={{
                        background: isActive ? u.accent + "20" : "rgba(255,255,255,0.03)",
                        borderColor: isActive ? u.accent : "rgba(255,255,255,0.12)",
                        color: isActive ? u.accent : "#9ca3af",
                        transform: isActive ? "scale(1.12)" : "scale(1)",
                      }}
                    >
                      <Icon size={22} />
                    </span>
                    <span
                      className="text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap"
                      style={{ color: isActive ? "#ffffff" : "#6b7280" }}
                    >
                      {u.short}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active detail panel */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-7 md:p-8 hidden lg:block">
              {activeUtility.media && (
                <video
                  key={activeUtility.title}
                  src={activeUtility.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full rounded-xl mb-5 border border-white/10"
                />
              )}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: activeUtility.accent + "18",
                  border: `1px solid ${activeUtility.accent}35`,
                  color: activeUtility.accent,
                }}
              >
                <activeUtility.icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {activeUtility.title}
              </h3>
              {activeUtility.stat && (
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-wider mb-3 px-2.5 py-1 rounded-full"
                  style={{
                    color: activeUtility.accent,
                    background: activeUtility.accent + "15",
                    border: `1px solid ${activeUtility.accent}35`,
                  }}
                >
                  {activeUtility.stat}
                </span>
              )}
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {activeUtility.desc}
              </p>
              <a
                href={activeUtility.href}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                {activeUtility.linkLabel}
                <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Full grid — always visible, works on mobile too */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-16">
            {utilities.map((u) => {
              const Icon = u.icon;
              return (
                <a
                  key={u.title}
                  href={u.href}
                  onMouseEnter={() => setHovered(utilities.indexOf(u))}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:[transform:perspective(900px)_rotateX(4deg)_rotateY(-4deg)_translateY(-6px)]"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: u.accent + "18",
                      border: `1px solid ${u.accent}35`,
                      color: u.accent,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    {u.title}
                    <ArrowUpRight
                      size={14}
                      className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </h3>
                  {u.stat && (
                    <span
                      className="inline-block text-[10px] font-semibold uppercase tracking-wider mb-2 px-2 py-0.5 rounded-full"
                      style={{ color: u.accent, background: u.accent + "15" }}
                    >
                      {u.stat}
                    </span>
                  )}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {u.desc}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Fee Flow ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                On-Chain by Default
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
              Where your fee actually goes
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              No hidden cuts — every CRX fee follows the same transparent,
              on-chain path.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-4">
            {feeSteps.map((step, index) => {
              const isActive = index === currentStep;
              const Icon = step.icon;
              return (
                <React.Fragment key={step.title}>
                  <div
                    className="flex-1 rounded-2xl border p-6 transition-all duration-500"
                    style={{
                      borderColor: isActive ? step.accent + "50" : "rgba(255,255,255,0.1)",
                      background: isActive ? step.accent + "0a" : "rgba(255,255,255,0.02)",
                      transform: isActive
                        ? "perspective(800px) rotateX(-6deg) translateY(-4px)"
                        : "perspective(800px) rotateX(0deg) translateY(0)",
                      boxShadow: isActive ? `0 20px 50px -20px ${step.accent}44` : "none",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: step.accent + "18",
                        border: `1px solid ${step.accent}35`,
                        color: step.accent,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {index < feeSteps.length - 1 && (
                    <div className="flex items-center justify-center text-gray-600">
                      <ArrowDown size={18} className="sm:hidden" />
                      <ArrowRight size={18} className="hidden sm:block" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Put CRX to Work ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                  Put It To Work
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                From holding to using CRX
              </h2>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">
              Everything above starts with one of these four places.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {exploreTiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <a
                  key={tile.title}
                  href={tile.href}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:[transform:perspective(900px)_rotateX(4deg)_rotateY(-4deg)_translateY(-6px)]"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: tile.accent + "18",
                      border: `1px solid ${tile.accent}35`,
                      color: tile.accent,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    {tile.title}
                    <ArrowUpRight
                      size={14}
                      className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {tile.desc}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="relative py-20 md:py-24 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                FAQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Token utility questions
            </h2>
          </div>

          <dl className="divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left cursor-pointer">
                    <span className="text-base font-semibold text-white group-data-open:text-blue-400 transition-colors">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-5 text-gray-400 group-data-open:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-5 text-blue-400 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────── Closing CTA ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
              <Wallet size={18} className="text-blue-400" />
            </div>
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
              <ShieldCheck size={18} className="text-emerald-400" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Ready to put CRX to work?
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            Get a wallet, stake for rewards, or cast your first vote — the
            same token carries you through all of it.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="/wallets"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Get a Wallet
              <ArrowUpRight size={16} />
            </a>
            <a
              href="/whitepaper"
              className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Read the Whitepaper
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TokenUtility;

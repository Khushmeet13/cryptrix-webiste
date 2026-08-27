import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import votingGif from "../../assets/gif/voting-bg.gif";
import {
  ShieldCheck,
  Users,
  Lock,
  Wallet,
  Eye,
  Database,
  UserCheck,
  CheckCircle,
  ArrowUpRight,
  Check,
} from "lucide-react";
import token_voting from "../../assets/gif/token-voting.mp4";
import quorum from "../../assets/images/quorum.png";
import NewsletterSignup from "@/components/Community/NewsletterSignup";
import CustomButton from "@/components/Common/CustomButton";

const workCards = [
  {
    title: "Token-Weighted Voting",
    p1: "Voting power is calculated based on the total SPH token balance at the time of the vote snapshot. Holders with larger stakes have greater influence, while quorum rules maintain decentralization.",
    p2: "Token-weighted voting ensures governance decisions reflect economic stake in the network. By tying voting power to ownership, SPH maintains a secure and manipulation-resistant governance model.",
    media: { type: "video", src: token_voting },
  },
  {
    title: "Snapshot / On-Chain Execution",
    p1: "Votes are securely recorded via snapshot mechanisms or executed directly on-chain for full transparency.",
    p2: "Snapshot voting avoids gas costs for casting a vote, while execution-critical proposals settle directly on-chain for maximum enforceability — giving the DAO flexibility without sacrificing security.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80",
    },
  },
  {
    title: "Voting Period & Quorum",
    p1: "Each proposal has a fixed voting window and minimum quorum to ensure legitimate decision-making.",
    p2: "If a proposal fails to reach quorum before its window closes, it's automatically archived without executing — protecting the network from decisions made by an unrepresentative minority.",
    media: { type: "image", src: quorum, contain: true },
  },
];

const steps = [
  {
    title: "Proposal Created",
    desc: "Anyone holding SPH tokens can submit a proposal outlining changes, upgrades, or governance actions.",
    image:
      "https://media.istockphoto.com/id/2157367771/photo/hands-laptop-and-typing-in-office-at-desk-for-crypto-trading-on-stock-market-with-financial.webp?a=1&b=1&s=612x612&w=0&k=20&c=PicQ4Q6NvCJ4-oaJ9csGgtMoRSPTsR8txeNGXo_uWFA=",
  },
  {
    title: "Community Discussion",
    desc: "The community reviews, debates, and refines the proposal before voting begins.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Voting Phase",
    desc: "SPH holders cast votes based on token-weighted governance during the active voting window.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
  },
  {
    title: "Execution",
    desc: "Approved proposals are executed automatically on-chain or via governance-controlled contracts.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
  },
];

const trustSeals = [
  {
    icon: ShieldCheck,
    title: "Immutable Records",
    desc: "All governance votes are permanently stored on the blockchain, making them tamper-proof and fully verifiable.",
    accent: "#34D399",
  },
  {
    icon: Lock,
    title: "Smart-Contract Execution",
    desc: "Approved proposals are executed automatically through audited smart contracts without manual intervention.",
    accent: "#60A5FA",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    desc: "Every proposal, vote count, and execution result is publicly accessible for complete visibility.",
    accent: "#A78BFA",
  },
  {
    icon: Database,
    title: "On-Chain Verification",
    desc: "All governance actions can be independently verified directly on the blockchain by any participant.",
    accent: "#06b6d4",
  },
  {
    icon: UserCheck,
    title: "Sybil-Resistant Voting",
    desc: "Token-weighted governance reduces spam and fake participation, ensuring meaningful voting power.",
    accent: "#FBBF24",
  },
  {
    icon: CheckCircle,
    title: "Audit-Friendly Design",
    desc: "Governance contracts are designed for easy auditing, enabling ongoing security reviews and community trust.",
    accent: "#F472B6",
  },
];

const votingPaths = [
  {
    key: "direct",
    title: "Vote Directly",
    icon: Wallet,
    accent: "#60A5FA",
    tagline: "Full control over every vote you cast.",
    points: [
      "Hold the minimum required SPH balance",
      "Connect a supported wallet — MetaMask or WalletConnect",
      "No identity verification or sign-up required",
    ],
  },
  {
    key: "delegate",
    title: "Delegate Your Vote",
    icon: Users,
    accent: "#A78BFA",
    tagline: "Stay represented without voting on every proposal.",
    points: [
      "Choose a validator or trusted community member",
      "Your SPH voting power transfers to their decisions",
      "Reclaim your delegated power at any time, no lock-up",
    ],
  },
];

const VotingSystem = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative min-h-[55vh] overflow-hidden bg-gradient-to-br from-black via-indigo-950/40 to-black pt-32 pb-16">
        <div
          className="absolute right-0 top-0 h-full w-full lg:w-1/2 opacity-70 pointer-events-none"
          style={{
            backgroundImage: `url(${votingGif})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            backgroundSize: "contain",
            maskImage: "linear-gradient(to left, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 40%, transparent 100%)",
          }}
        />

        <div className="relative z-10 px-6 lg:px-32 max-w-4xl flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Governance
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold text-white leading-tight">
            Decentralized Voting System
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl">
            SPH holders participate directly in network decisions using secure
            on-chain voting. Every vote helps guide upgrades, policies, and
            the future direction of Cryptrix.
          </p>
        </div>
      </section>

      {/* ───────── How Voting Works ───────── */}
      <section className="relative py-20 px-6 lg:px-24 border-t border-white/10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-14">
          How Voting Works
        </h2>

        <div className="space-y-8">
          {workCards.map((card, i) => (
            <div
              key={card.title}
              className={`relative flex flex-col lg:flex-row ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              } items-center justify-between gap-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-10`}
            >
              <div className="flex-1 flex justify-center">
                {card.media.type === "video" ? (
                  <video
                    src={card.media.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-72 sm:w-96 lg:w-[220px] opacity-70 pointer-events-none [mask-image:radial-gradient(circle,black_55%,transparent_85%)] [-webkit-mask-image:radial-gradient(circle,black_55%,transparent_85%)]"
                  />
                ) : (
                  <img
                    src={card.media.src}
                    alt={card.title}
                    className={`pointer-events-none ${
                      card.media.contain
                        ? "w-72 opacity-90 drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                        : "w-82 opacity-70 [mask-image:radial-gradient(circle,black_60%,transparent_80%)] [-webkit-mask-image:radial-gradient(circle,black_60%,transparent_80%)]"
                    }`}
                  />
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 max-w-md mb-3 leading-relaxed">{card.p1}</p>
                <p className="text-gray-400 max-w-md leading-relaxed">{card.p2}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Who Can Vote — two paths ───────── */}
      <section className="relative py-20 px-6 lg:px-24 border-t border-white/10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
          Who Can Vote
        </h2>
        <p className="mb-12 text-gray-400 text-base sm:text-lg max-w-2xl">
          Governance is permissionless — if you hold SPH, you already have a
          voice. Choose how you use it.
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {votingPaths.map((path) => {
            const Icon = path.icon;
            return (
              <div key={path.key} className="relative bg-[#01021f] p-8 md:p-10 overflow-hidden">
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px] pointer-events-none"
                  style={{ background: path.accent + "30" }}
                />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: path.accent + "18", border: `1px solid ${path.accent}35` }}
                  >
                    <Icon size={20} style={{ color: path.accent }} strokeWidth={1.75} />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{path.title}</h3>
                  <p className="text-sm mb-6" style={{ color: path.accent }}>{path.tagline}</p>

                  <ul className="space-y-3">
                    {path.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed">
                        <Check size={14} className="mt-0.5 shrink-0" style={{ color: path.accent }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Voting power example */}
        <div className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="text-center md:text-left flex-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Voting Power, Explained
            </span>
            <p className="mt-2 text-gray-300 text-sm md:text-base leading-relaxed">
              Voting power scales 1:1 with your SPH balance at the snapshot
              block — no bonus multipliers, no hidden weighting.
            </p>
          </div>
          <div className="flex items-center gap-4 md:gap-5 shrink-0">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-white">10,000</div>
              <div className="text-xs text-gray-500 mt-1">SPH Staked</div>
            </div>
            <span className="text-gray-600 text-xl">=</span>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-blue-400">10,000</div>
              <div className="text-xs text-gray-500 mt-1">Votes</div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Voting Lifecycle — wheel ───────── */}
      <section className="relative py-20 px-6 lg:px-24 border-t border-white/10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
          Voting Lifecycle
        </h2>
        <p className="mb-14 text-gray-400 text-base sm:text-lg max-w-2xl">
          A continuous cycle — every executed proposal opens the door to the
          next.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Wheel */}
          <div className="relative mx-auto w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]">
            <svg viewBox="0 0 340 340" className="absolute inset-0 w-full h-full -rotate-90">
              <circle cx="170" cy="170" r="140" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
              <circle
                cx="170"
                cy="170"
                r="140"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 140}
                strokeDashoffset={2 * Math.PI * 140 - ((active + 1) / steps.length) * 2 * Math.PI * 140}
                style={{ transition: "stroke-dashoffset 0.6s cubic-bezier(0.22,1,0.36,1)" }}
              />
            </svg>

            {steps.map((step, i) => {
              const posClass = [
                "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
                "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
              ][i];
              const isActive = active === i;
              return (
                <button
                  key={step.title}
                  onClick={() => setActive(i)}
                  className={`absolute ${posClass} flex flex-col items-center gap-1.5 group`}
                >
                  <span
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-[#01021f] ${
                      isActive
                        ? "border-blue-400 text-blue-400 scale-110"
                        : active > i
                        ? "border-emerald-400/60 text-emerald-400"
                        : "border-white/15 text-gray-500 group-hover:border-white/30"
                    }`}
                  >
                    {active > i ? <Check size={15} /> : i + 1}
                  </span>
                  <span className={`text-[10px] whitespace-nowrap ${isActive ? "text-white font-medium" : "text-gray-500"}`}>
                    {step.title}
                  </span>
                </button>
              );
            })}

            {/* Center */}
            <div className="absolute inset-[64px] sm:inset-[80px] rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl flex flex-col items-center justify-center text-center p-4">
              <span className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                Step {active + 1} of {steps.length}
              </span>
              <h3 className="text-sm font-semibold text-white leading-snug">{steps[active].title}</h3>
            </div>
          </div>

          {/* Detail + image */}
          <div>
            <div className="rounded-2xl overflow-hidden border border-white/10 relative h-56 mb-6">
              <img
                src={steps[active].image}
                alt={steps[active].title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01021f] via-[#01021f]/20 to-transparent" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Step {active + 1}
            </span>
            <h3 className="text-2xl font-semibold text-white mt-2 mb-3">{steps[active].title}</h3>
            <p className="text-gray-400 leading-relaxed">{steps[active].desc}</p>
          </div>
        </div>
      </section>

      {/* ───────── Security & Transparency — seal wall ───────── */}
      <section className="relative py-20 px-6 lg:px-24 border-t border-white/10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-12">
          Security & Transparency
        </h2>

        {/* Live governance stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 pb-14 border-b border-white/10">
          {[
            { value: "2", label: "Active Proposals" },
            { value: "6", label: "Total Submitted" },
            { value: "100%", label: "On-Chain Verifiable" },
            { value: "0", label: "Disputed Results" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-white">{s.value}</div>
              <div className="mt-1 text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        <SecuritySeals seals={trustSeals} />
      </section>

      {/* ───────── CTA ───────── */}
      <section className="relative py-20 px-6 lg:px-24 border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text + CTAs */}
          <div className="text-center md:text-left">
            <button
              onClick={() => navigate("/proposals")}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-400">2 active proposals right now</span>
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Participate in Governance
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-md mt-3 mx-auto md:mx-0">
              Connect your wallet and have your say in key decisions. Stay
              updated with active votes and make your voice count.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <button
                type="button"
                onClick={() => navigate("/proposals")}
                className="relative px-6 py-3 bg-white text-black text-sm font-medium rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:cursor-pointer hover:shadow-indigo-500/30 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-1">
                  View Active Votes
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <CustomButton
                text="Connect Wallet"
                bgColor="border border-white/20 bg-white/[0.03]"
                slideColor="bg-indigo-600"
              />
            </div>
          </div>

          {/* Right: live proposal preview */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 md:p-7">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                Open
              </span>
              <span className="text-xs text-gray-500">Ends in 3 days</span>
            </div>

            <h3 className="text-base font-semibold text-white leading-snug mb-5">
              Introduce new staking rewards for long-term holders
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-emerald-400 font-medium">For</span>
                  <span className="text-gray-500">68%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: "68%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-rose-400 font-medium">Against</span>
                  <span className="text-gray-500">32%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-rose-400 rounded-full" style={{ width: "32%" }} />
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/proposals")}
              className="mt-6 w-full text-center text-xs font-semibold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors"
            >
              View this proposal →
            </button>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

const SecuritySeals = ({ seals }) => {
  const [activeSeal, setActiveSeal] = useState(0);
  const current = seals[activeSeal];
  const CurrentIcon = current.icon;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
        {seals.map((seal, i) => {
          const Icon = seal.icon;
          const isActive = activeSeal === i;
          return (
            <button
              key={seal.title}
              onClick={() => setActiveSeal(i)}
              className="flex flex-col items-center gap-2.5 group"
            >
              <div
                className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                  background: isActive ? seal.accent + "22" : "rgba(255,255,255,0.03)",
                  border: `1.5px solid ${isActive ? seal.accent : "rgba(255,255,255,0.12)"}`,
                }}
              >
                <Icon size={22} style={{ color: isActive ? seal.accent : "#9ca3af" }} strokeWidth={1.75} />
              </div>
              <span
                className={`text-[11px] text-center max-w-[6rem] leading-snug transition-colors ${
                  isActive ? "text-white font-medium" : "text-gray-500"
                }`}
              >
                {seal.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail reveal */}
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
        <p className="text-sm text-gray-400 leading-relaxed max-w-lg mx-auto">{current.desc}</p>
      </div>
    </div>
  );
};

export default VotingSystem;

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  Gem,
  Landmark,
  ShieldCheck,
  Gamepad2,
  Sparkles,
} from "lucide-react";
import governanceBg from "../../assets/images/governance-bg.jpg";

const pillars = [
  {
    icon: Zap,
    accent: "#60A5FA",
    title: "Real-Time, Near-Zero-Fee Transactions",
    desc: "Sub-second finality and negligible fees mean trades, rewards, and item transfers land instantly — nothing to break immersion mid-match.",
    href: "/whitepaper",
    linkLabel: "How the network stays this fast",
  },
  {
    icon: Gem,
    accent: "#A78BFA",
    title: "True Digital Ownership",
    desc: "Mint in-game items as NFTs with low minting fees and high-speed settlement — assets players actually own, not licensed loot tied to a server.",
    href: "/faqs",
    linkLabel: "NFT framework FAQ",
  },
  {
    icon: Landmark,
    accent: "#34D399",
    title: "Funded Game Development",
    desc: "The Grants Program already funds gaming projects alongside DeFi and NFTs — non-dilutive capital for studios building on Cryptrix.",
    href: "/grants",
    linkLabel: "Apply for a grant",
  },
  {
    icon: ShieldCheck,
    accent: "#38BDF8",
    title: "Secured by a Real Validator Set",
    desc: "Every mint, trade, and reward payout settles through the same delegated-PoS network that secures the rest of Cryptrix — not a sidechain shortcut.",
    href: "/security",
    linkLabel: "Read the security report",
  },
];

const useCases = [
  {
    title: "Play-to-earn economies",
    desc: "Reward tokens and item drops settle on-chain instantly, so player earnings are real balances, not internal ledger entries.",
  },
  {
    title: "In-game marketplaces",
    desc: "List, trade, and transfer items peer-to-peer through the native DEX and wallet stack — no separate marketplace backend required.",
  },
  {
    title: "Esports payouts",
    desc: "Tournament prize pools and reward claims settle transparently on-chain, verifiable by anyone without waiting on a payout processor.",
  },
];

const Gaming = () => {
  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative min-h-[60vh] flex items-center px-6 sm:px-12 lg:px-24 pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${governanceBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#01021f] via-indigo-950/70 to-black/90" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Solutions / Gaming
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            Built for games where every asset — and every fee — matters.
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-xl">
            High fees and slow finality break the game economies that need
            speed the most. Cryptrix was built so in-game trades, rewards,
            and ownership settle in real time, at negligible cost.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/grants"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Fund Your Game
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/docs"
              className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Read the Docs
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-xl pt-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
              <p className="text-2xl font-semibold text-white">&lt;1s</p>
              <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                Block Finality
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
              <p className="text-2xl font-semibold text-white">0.01%</p>
              <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                Protocol Fee
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
              <p className="text-2xl font-semibold text-white">$12M+</p>
              <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                Grants Deployed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Core pillars ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                Why Cryptrix
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
              What game economies actually need
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Speed, ownership, funding, and security — on the same chain
              players already trust for DeFi and payments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.title}
                  to={p.href}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-7 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: p.accent + "18",
                      border: `1px solid ${p.accent}35`,
                      color: p.accent,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {p.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                    {p.linkLabel}
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Use cases ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
              <Gamepad2 size={18} className="text-blue-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Where this shows up in practice
            </h2>
          </div>

          <div className="space-y-px bg-white/10 rounded-2xl overflow-hidden">
            {useCases.map((u) => (
              <div key={u.title} className="bg-[#01021f] p-6 md:p-7">
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {u.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {u.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Builders CTA ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6">
            <Sparkles size={20} className="text-blue-400" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Building the next big game economy?
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            SDKs, an NFT-ready contract framework, and non-dilutive grant
            funding are already in place for studios shipping on Cryptrix.
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
              className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Apply for a Grant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gaming;

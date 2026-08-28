import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Repeat,
  ShieldCheck,
  Landmark,
  Coins,
  Fuel,
  Terminal,
} from "lucide-react";
import governanceBg from "../../assets/images/governance-bg.jpg";

const pillars = [
  {
    icon: Repeat,
    accent: "#60A5FA",
    title: "Native DEX",
    desc: "Swap CRX and other assets non-custodially, with deep liquidity and a flat 0.01% protocol fee — no intermediary ever holds your funds.",
    href: "/dex-exchange",
    linkLabel: "Launch the DEX",
  },
  {
    icon: Coins,
    accent: "#34D399",
    title: "Staking & Yield",
    desc: "Delegate CRX to a validator and earn continuous rewards — up to 9.8% APY — funded by fee revenue and protocol issuance, not inflation tricks.",
    href: "/token/staking",
    linkLabel: "Explore staking",
  },
  {
    icon: Landmark,
    accent: "#818cf8",
    title: "Governance-Directed Treasury",
    desc: "A share of every fee funds the protocol treasury, which the community allocates to DeFi builders and ecosystem grants through on-chain proposals.",
    href: "/grants",
    linkLabel: "See the Grants Program",
  },
  {
    icon: Fuel,
    accent: "#38BDF8",
    title: "Transparent Fee Model",
    desc: "Every fee split — validator reward, treasury cut — happens on-chain by protocol rule. Nothing about how CRX moves is discretionary.",
    href: "/token/tokenomics",
    linkLabel: "Read the tokenomics",
  },
];

const trustPoints = [
  {
    title: "Non-custodial by design",
    desc: "The protocol never takes possession of user funds — wallets and the DEX interact directly with audited contracts.",
  },
  {
    title: "Independently audited",
    desc: "Core contracts go through independent security review before mainnet release, with an ongoing public bug bounty.",
  },
  {
    title: "Secured by delegated proof-of-stake",
    desc: "A distributed validator set — not a single operator — finalizes every DeFi transaction on Cryptrix.",
  },
];

const DeFi = () => {
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
              Solutions / DeFi
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            Decentralized finance, native to Cryptrix.
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-xl">
            No wrapped assets, no bridged liquidity as a workaround — trading,
            staking, and treasury-funded growth all run on Cryptrix's own
            Layer-1, secured by its own validators.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/dex-exchange"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Launch the DEX
              <ArrowRight size={16} />
            </a>
            <Link
              to="/whitepaper"
              className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Read the Whitepaper
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-xl pt-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
              <p className="text-2xl font-semibold text-white">0.01%</p>
              <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                Protocol Fee
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
              <p className="text-2xl font-semibold text-white">9.8%</p>
              <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                Top Staking APY
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
                Built In, Not Bolted On
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
              Everything DeFi needs, on one chain
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Every primitive below runs on Cryptrix's own consensus — nothing
              is outsourced to another network.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.title}
                  href={p.href}
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
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Trust / security ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-5">
                <ShieldCheck size={12} className="text-emerald-400" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-400">
                  Trust & Security
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                DeFi only works if the base layer is trustworthy
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                Yield means nothing if the protocol underneath it isn't
                verifiable. Here's what backs every trade and every stake.
              </p>
              <Link
                to="/security"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                Read the full security report
                <ArrowRight size={12} />
              </Link>
            </div>

            <div className="space-y-px bg-white/10 rounded-2xl overflow-hidden">
              {trustPoints.map((t) => (
                <div key={t.title} className="bg-[#01021f] p-6">
                  <h3 className="text-sm font-semibold text-white mb-1.5">
                    {t.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Builders CTA ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6">
            <Terminal size={20} className="text-blue-400" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Building the next DeFi protocol?
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            SDKs, API references, and treasury grants are already in place
            for teams building lending, exchanges, or entirely new DeFi
            primitives on Cryptrix.
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

export default DeFi;

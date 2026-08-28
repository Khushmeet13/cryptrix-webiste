import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import heroBg from "../../assets/images/hero-bg.png";
import governanceBg from "../../assets/images/governance-bg.jpg";
import quorumImg from "../../assets/images/quorum.png";

const TOTAL_SUPPLY = 1_000_000_000;

const identityRows = [
  { field: "Token Name", value: "CRX Coin" },
  { field: "Token Symbol", value: "CRX" },
  { field: "Total Supply", value: "1,000,000,000 CRX — fixed" },
  { field: "Decimals", value: "18" },
  { field: "Network", value: "Cryptrix Mainnet — native Layer-1 asset" },
  { field: "Classification", value: "Utility & governance token" },
  {
    field: "Issuance Model",
    value: "Fixed schedule, published on-chain — no discretionary minting",
  },
];

const allocation = [
  {
    category: "Public Sale",
    percent: 40,
    color: "#60A5FA",
    purpose:
      "Distributed via the public token sale to early network participants.",
  },
  {
    category: "Liquidity Pool",
    percent: 25,
    color: "#818CF8",
    purpose:
      "Seeded into DEX pools to support native CRX trading and price stability.",
  },
  {
    category: "Team & Development",
    percent: 15,
    color: "#38BDF8",
    purpose:
      "Core contributor compensation and ongoing protocol development.",
  },
  {
    category: "Marketing",
    percent: 10,
    color: "#94A3B8",
    purpose:
      "Ecosystem awareness, partnerships, and community growth initiatives.",
  },
  {
    category: "Reserve",
    percent: 10,
    color: "#475569",
    purpose:
      "Held by the protocol treasury for future initiatives and contingencies.",
  },
];

const glossary = [
  {
    term: "Fixed Issuance",
    def: "CRX supply is capped at 1,000,000,000 and published on-chain — there is no discretionary minting outside the protocol's schedule.",
  },
  {
    term: "Staking Rewards",
    def: "Distributed proportionally to validators and their delegators as compensation for securing the network.",
  },
  {
    term: "Fee Split",
    def: "Every transaction fee is divided transparently on-chain between the processing validator and the protocol treasury.",
  },
  {
    term: "Treasury",
    def: "Funded by the Reserve allocation and ongoing fee revenue — allocated through community-approved governance proposals.",
  },
];

const references = [
  { label: "Whitepaper — §05 The CRX Token & Tokenomics", to: "/whitepaper" },
  { label: "Token Utility — where CRX is spent", to: "/token/utility" },
  { label: "Staking & validator rewards", to: "/staking" },
  { label: "Treasury grants program", to: "/grants" },
];

const Corner = ({ className }) => (
  <span
    className={`absolute w-4 h-4 border-white/25 pointer-events-none ${className}`}
  />
);

const fmt = (n) => n.toLocaleString();

const DonutChart = ({ data, size = 220, strokeWidth = 26 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const segments = data.reduce((acc, d) => {
    const runningTotal = acc.length ? acc[acc.length - 1].runningTotal : 0;
    acc.push({ ...d, runningTotal: runningTotal + d.percent, offsetStart: runningTotal });
    return acc;
  }, []);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
        />
        {segments.map((d) => {
          const dash = (d.percent / 100) * circumference;
          const gap = circumference - dash;
          const offset = -((d.offsetStart / 100) * circumference);
          return (
            <circle
              key={d.category}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={offset}
              strokeLinecap="butt"
            />
          );
        })}
      </g>
    </svg>
  );
};

const TokenomicsPage = () => {
  return (
    <div className="relative w-full bg-[#01021f] text-white">
      {/* Persistent atmospheric backdrop */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="relative">
        {/* ───────── Header: report document ───────── */}
        <section className="relative px-6 pt-32 pb-16 md:pt-36">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-8 items-stretch">
            <div className="relative border border-white/15 p-8 md:p-12">
              <Corner className="top-0 left-0 border-t border-l" />
              <Corner className="top-0 right-0 border-t border-r" />
              <Corner className="bottom-0 left-0 border-b border-l" />
              <Corner className="bottom-0 right-0 border-b border-r" />

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-10 pb-6 border-b border-white/10">
                <span>Ref — TOK-2026-01</span>
                <span className="text-blue-400">Classification — Public</span>
                <span>Last Reviewed — Aug 2026</span>
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Tokenomics Report
              </span>
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-white mt-3">
                Token economics &amp; supply
              </h1>
              <p className="mt-5 text-gray-400 leading-relaxed max-w-2xl">
                A transparent record of how CRX is issued, allocated, and
                circulated — the same figures published in the Whitepaper,
                kept current as the protocol evolves.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                <div>
                  <div className="text-2xl font-semibold text-white">1B</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 mt-1">
                    Total Supply
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">5</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 mt-1">
                    Allocation Categories
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">0%</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 mt-1">
                    Inflation Beyond Schedule
                  </div>
                </div>
              </div>
            </div>

            {/* Figure — reserve visual */}
            <div className="relative hidden lg:flex flex-col border border-white/15">
              <div className="relative flex-1 overflow-hidden">
                <img
                  src={quorumImg}
                  alt="CRX reserve held by the protocol treasury"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01021f] via-transparent to-transparent" />
              </div>
              <div className="px-5 py-4 border-t border-white/15 bg-[#01021f]">
                <p className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
                  Fig. 01 — Reserve &amp; Treasury
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  10% of supply held for future initiatives and contingencies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── §1 Identity table ───────── */}
        <section className="relative px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
              §1 — Token Identity
            </h2>

            <div className="border border-white/10 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[520px]">
                <tbody>
                  {identityRows.map((row, i) => (
                    <tr
                      key={row.field}
                      className={`${
                        i % 2 === 1 ? "bg-white/[0.015]" : ""
                      } border-b border-white/5 last:border-0`}
                    >
                      <td className="py-4 px-5 text-[11px] font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap w-56">
                        {row.field}
                      </td>
                      <td className="py-4 px-5 text-sm text-white">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ───────── §2 Allocation ledger ───────── */}
        <section className="relative px-6 pb-16 pt-8 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
              §2 — Allocation Ledger
            </h2>
            <p className="text-sm text-gray-500 mb-8 max-w-lg">
              How the fixed 1,000,000,000 CRX supply is divided at genesis.
            </p>

            <div className="grid md:grid-cols-[240px_1fr] gap-10 items-center mb-8">
              <div className="relative mx-auto" style={{ width: 220, height: 220 }}>
                <DonutChart data={allocation} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-semibold text-white">1B</span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">
                    CRX Supply
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {allocation.map((a) => (
                  <div key={a.category} className="flex items-start gap-3">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0 mt-1"
                      style={{ background: a.color }}
                    />
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-medium text-white">
                          {a.category}
                        </span>
                        <span className="font-mono text-xs text-gray-500">
                          {a.percent}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {fmt((TOTAL_SUPPLY * a.percent) / 100)} CRX
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">
                      Category
                    </th>
                    <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">
                      Allocation
                    </th>
                    <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">
                      Amount (CRX)
                    </th>
                    <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allocation.map((a, i) => (
                    <tr
                      key={a.category}
                      className={`${
                        i % 2 === 1 ? "bg-white/[0.015]" : ""
                      } border-b border-white/5 last:border-0`}
                    >
                      <td className="py-4 px-5 text-sm font-medium text-white whitespace-nowrap">
                        <span className="inline-flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ background: a.color }}
                          />
                          {a.category}
                        </span>
                      </td>
                      <td className="py-4 px-5 font-mono text-sm text-white">
                        {a.percent}%
                      </td>
                      <td className="py-4 px-5 font-mono text-sm text-gray-400 whitespace-nowrap">
                        {fmt((TOTAL_SUPPLY * a.percent) / 100)}
                      </td>
                      <td className="py-4 px-5 text-sm text-gray-400">
                        {a.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ───────── Full-bleed statement band ───────── */}
        <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${governanceBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#01021f]/95 via-[#01021f]/90 to-black/95" />

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Supply Guarantee
            </span>
            <p className="mt-5 text-3xl md:text-5xl font-semibold text-white leading-tight">
              1,000,000,000 CRX.
              <br />
              Fixed at genesis. No discretionary minting. Ever.
            </p>
            <p className="mt-6 text-gray-400 max-w-xl mx-auto">
              Every unit in circulation traces back to the schedule published
              on-chain at launch — verifiable by anyone, changeable by no one.
            </p>
          </div>
        </section>

        {/* ───────── §3 Fee flow — ledger receipt ───────── */}
        <section className="relative px-6 pb-16 pt-16 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
              §3 — Fee Flow
            </h2>
            <p className="text-sm text-gray-500 mb-6 max-w-lg">
              Where a network fee goes once it's paid in CRX — split
              transparently by protocol rule, not by discretion.
            </p>

            <div className="border border-white/10 p-6 md:p-8 font-mono text-sm">
              <div className="flex items-baseline justify-between text-white">
                <span>Transaction fee, paid in CRX</span>
                <span className="flex-1 border-b border-dotted border-white/20 mx-3 translate-y-[-3px]" />
                <span>100%</span>
              </div>
              <div className="mt-4 pl-5 flex items-baseline justify-between text-gray-400">
                <span>↳ Validator reward</span>
                <span className="flex-1 border-b border-dotted border-white/10 mx-3 translate-y-[-3px]" />
                <span className="text-blue-400">on-chain rule</span>
              </div>
              <div className="mt-3 pl-5 flex items-baseline justify-between text-gray-400">
                <span>↳ Protocol treasury</span>
                <span className="flex-1 border-b border-dotted border-white/10 mx-3 translate-y-[-3px]" />
                <span className="text-blue-400">on-chain rule</span>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── §4 Circulation & issuance glossary ───────── */}
        <section className="relative px-6 pb-16 pt-8 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-6">
              §4 — Circulation &amp; Issuance Policy
            </h2>

            <div className="space-y-px bg-white/10">
              {glossary.map((g) => (
                <div
                  key={g.term}
                  className="bg-[#01021f] p-6 md:p-7 grid md:grid-cols-[12rem_1fr] gap-3 md:gap-5"
                >
                  <span className="text-sm font-semibold text-white">
                    {g.term}
                  </span>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {g.def}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── §5 References ───────── */}
        <section className="relative px-6 pb-16 pt-8 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-6">
              §5 — References
            </h2>

            <div className="border border-white/10 divide-y divide-white/10">
              {references.map((ref) => (
                <Link
                  key={ref.label}
                  to={ref.to}
                  className="group flex items-center justify-between gap-4 py-4 px-5 text-sm text-gray-300 hover:bg-white/[0.02] transition-colors"
                >
                  {ref.label}
                  <ArrowUpRight
                    size={14}
                    className="text-gray-600 group-hover:text-white transition-colors shrink-0"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Closing ───────── */}
        <section className="relative px-6 py-16 md:py-20 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="relative border border-white/15 p-8 md:p-10 text-center">
              <Corner className="top-0 left-0 border-t border-l" />
              <Corner className="top-0 right-0 border-t border-r" />
              <Corner className="bottom-0 left-0 border-b border-l" />
              <Corner className="bottom-0 right-0 border-b border-r" />

              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
                Want the full picture?
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-white">
                Read the source documents
              </p>
              <p className="mt-3 text-gray-400 max-w-md mx-auto">
                This report summarizes figures detailed in full in the
                Whitepaper's tokenomics section.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/whitepaper"
                  className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Read the Whitepaper
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/token/utility"
                  className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-white/40"
                >
                  Explore Token Utility
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TokenomicsPage;

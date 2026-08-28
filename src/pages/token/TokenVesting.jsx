import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Landmark,
  ShieldCheck,
  TrendingUp,
  Info,
} from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80";

const bentoTiles = [
  {
    kind: "photo",
    span: "col-span-2 md:col-span-4 row-span-2",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    alt: "Earth at night, city lights connected across the globe",
    label: "2023",
    title: "Where the clock started",
    desc: "Every allocation's vesting timer began at the same moment — Cryptrix's mainnet genesis.",
  },
  {
    kind: "photo",
    span: "col-span-1 md:col-span-2 row-span-1",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
    alt: "Financial chart trending upward on a laptop screen",
    label: "90%",
    title: "On a completed schedule",
    desc: null,
  },
  {
    kind: "stat",
    span: "col-span-1 md:col-span-2 row-span-1",
    value: "$12M+",
    label: "Deployed via the Grants Program",
  },
  {
    kind: "photo",
    span: "col-span-2 md:col-span-3 row-span-1",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1000&q=80",
    alt: "A padlock resting on a keyboard",
    label: "Reserve",
    title: "Governance-gated, no timer",
    desc: null,
  },
  {
    kind: "photo",
    span: "col-span-2 md:col-span-3 row-span-1",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&q=80",
    alt: "A team discussing work around a laptop",
    label: "Team & Development",
    title: "12-month cliff, 24-month vest",
    desc: null,
  },
  {
    kind: "photo",
    span: "col-span-2 md:col-span-6 row-span-1",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&q=80",
    alt: "Builders collaborating on a laptop",
    label: "Funding Builders",
    title: "See what the Reserve has funded",
    desc: null,
    href: "/grants",
  },
];

const TOTAL_SUPPLY = 1_000_000_000;

const schedule = [
  {
    category: "Public Sale",
    amount: 400_000_000,
    tge: "25% at TGE",
    vest: "6-month linear vest",
    status: "complete",
    note: "Fully unlocked since early 2024.",
  },
  {
    category: "Liquidity Pool",
    amount: 250_000_000,
    tge: "100% at TGE",
    vest: "No vesting — seeded immediately",
    status: "complete",
    note: "Released at genesis to back DEX liquidity from day one.",
  },
  {
    category: "Team & Development",
    amount: 150_000_000,
    tge: "0% at TGE",
    vest: "12-month cliff, then 24-month linear vest",
    status: "complete",
    note: "Fully unlocked as of 2026 — three years after mainnet launch.",
  },
  {
    category: "Marketing",
    amount: 100_000_000,
    tge: "10% at TGE",
    vest: "12-month linear vest",
    status: "complete",
    note: "Fully unlocked since 2024.",
  },
  {
    category: "Reserve",
    amount: 100_000_000,
    tge: "0% at TGE",
    vest: "No timer — released only via governance vote",
    status: "ongoing",
    note: "Over $12M deployed so far through the Grants Program.",
  },
];

const scheduledUnlockedPercent = Math.round(
  (schedule
    .filter((s) => s.status === "complete")
    .reduce((sum, s) => sum + s.amount, 0) /
    TOTAL_SUPPLY) *
    100
);

const principles = [
  {
    n: "01",
    icon: ShieldCheck,
    title: "Incentives, aligned",
    desc: "A locked team allocation only pays off if the network succeeds over years, not weeks — vesting ties builders to the long term.",
  },
  {
    n: "02",
    icon: TrendingUp,
    title: "No sudden supply shocks",
    desc: "Releasing allocations gradually, on a public schedule, keeps circulating supply predictable instead of dumping unlocks on the market at once.",
  },
  {
    n: "03",
    icon: Landmark,
    title: "Reserve stays accountable",
    desc: "The one allocation with no fixed timer — Reserve — only moves when the community approves it through a governance proposal.",
  },
];

const faqs = [
  {
    q: "What is TGE?",
    a: "Token Generation Event — the moment CRX was created and the vesting clock for every allocation started, at Cryptrix's 2023 mainnet launch.",
  },
  {
    q: "Why does the Team allocation have a cliff?",
    a: "A 12-month cliff means no team tokens unlock at all for a full year — a standard safeguard so contributors are rewarded for sustained work, not a quick exit.",
  },
  {
    q: "Is the Reserve ever unlocked?",
    a: "Yes, but only in pieces, and only when a governance proposal approves a specific use — grants, incentives, or contingencies. There's no automatic timer.",
  },
  {
    q: "Can vesting terms change after launch?",
    a: "No. Whatever schedule a tranche started with is what it follows — vesting contracts aren't discretionary once deployed.",
  },
  {
    q: "Where can I verify this on-chain?",
    a: "Every allocation's vesting contract is public and auditable — the same transparency principle that governs CRX's fixed total supply.",
  },
];

/* Radial progress gauge — single headline value, not a category breakdown */
const RadialGauge = ({ percent, size = 200, stroke = 14 }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#38BDF8"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </g>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-white">{percent}%</span>
        <span className="text-[10px] uppercase tracking-wider text-gray-500 mt-1 text-center px-6">
          On a completed
          <br />
          unlock schedule
        </span>
      </div>
    </div>
  );
};

const TokenVesting = () => {
  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative px-6 sm:px-12 lg:px-24 pt-32 pb-20 border-b border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#01021f] via-[#01021f]/95 to-[#01021f]" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-sky-500/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">
              Token — Vesting &amp; Unlocks
            </p>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
              Every CRX token,
              <br />
              on a public clock.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl">
              No allocation moves in secret. Each tranche of the 1,000,000,000
              CRX supply follows a schedule published at genesis — here's
              exactly where every token came from, and when it unlocked.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#schedule"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-400 text-black text-sm font-semibold hover:bg-sky-300 hover:scale-105 transition-all duration-300"
              >
                View the Schedule
                <ArrowRight size={16} />
              </a>
              <Link
                to="/token/tokenomics"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white text-sm font-medium hover:border-white/35 hover:scale-105 transition-all duration-300"
              >
                Full Tokenomics
              </Link>
            </div>

            {/* Stat strip */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7">
              {[
                { value: "1B", label: "Total Supply" },
                { value: "5", label: "Allocation Categories" },
                { value: "2023", label: "Mainnet Genesis" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-semibold text-white">
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <RadialGauge percent={scheduledUnlockedPercent} />

            {/* Category status legend */}
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2.5 w-full max-w-xs">
              {schedule.map((s) => {
                const isComplete = s.status === "complete";
                const StatusIcon = isComplete ? CheckCircle2 : Clock;
                return (
                  <div
                    key={s.category}
                    className="flex items-center gap-2 text-xs"
                  >
                    <StatusIcon
                      size={13}
                      className={isComplete ? "text-sky-400" : "text-blue-300"}
                    />
                    <span className="text-gray-400">{s.category}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Unlock timeline ───────── */}
      <section id="schedule" className="relative py-20 md:py-24 border-b border-white/10 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">
            Unlock Timeline
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
            Where every CRX allocation stands
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mb-12">
            Genesis was Cryptrix's 2023 mainnet launch. Every tranche below
            has followed its schedule since — most have already completed.
          </p>

          <div className="rounded-2xl border border-white/10 divide-y divide-white/10 overflow-hidden">
            {schedule.map((s) => {
              const isComplete = s.status === "complete";
              const shareOfSupply = ((s.amount / TOTAL_SUPPLY) * 100).toFixed(0);
              return (
                <div
                  key={s.category}
                  className="p-6 sm:p-7 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {s.category}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-gray-500">
                        {s.amount.toLocaleString()} CRX
                        <span className="text-gray-600">
                          {" "}
                          — {shareOfSupply}% of supply
                        </span>
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isComplete ? "bg-sky-400" : "bg-blue-400 animate-pulse"
                        }`}
                      />
                      <span className={isComplete ? "text-sky-400" : "text-blue-300"}>
                        {isComplete ? "Fully Unlocked" : "Ongoing"}
                      </span>
                    </span>
                  </div>

                  {/* Track */}
                  <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                    {isComplete ? (
                      <div className="h-full w-full bg-sky-400" />
                    ) : (
                      <div
                        className="h-full w-full opacity-70"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(135deg, rgba(96,165,250,0.6) 0 8px, rgba(96,165,250,0.15) 8px 16px)",
                        }}
                      />
                    )}
                  </div>

                  {/* Structured meta */}
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 pt-5 border-t border-white/5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600 mb-1">
                        TGE Release
                      </p>
                      <p className="text-xs text-gray-300">{s.tge}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600 mb-1">
                        Vesting
                      </p>
                      <p className="text-xs text-gray-300">{s.vest}</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600 mb-1">
                        Status
                      </p>
                      <p className="text-xs text-gray-300">{s.note}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <Info size={16} className="text-gray-500 shrink-0 mt-0.5" />
            <p className="text-xs text-gray-500 leading-relaxed">
              "Fully Unlocked" means that tranche's vesting contract has
              finished releasing its full allocation — it does not mean every
              token is necessarily still held by its original recipient.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Why vesting matters ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">
            Why It Matters
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-12 max-w-lg">
            Vesting isn't red tape — it's the incentive structure
          </h2>

          <div className="space-y-10">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.n}
                  className="flex flex-col sm:flex-row gap-5 sm:gap-8 pb-10 border-b border-white/10 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-3 sm:w-40 shrink-0">
                    <span className="text-3xl font-bold text-white/10">
                      {p.n}
                    </span>
                    <Icon size={20} className="text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Vesting in practice — bento ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">
            In Practice
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-12 max-w-lg">
            The schedule, beyond the numbers
          </h2>

          <div
            className="grid grid-cols-2 md:grid-cols-6 auto-rows-[minmax(140px,auto)] gap-4"
            style={{ gridAutoFlow: "dense" }}
          >
            {bentoTiles.map((tile, i) => {
              if (tile.kind === "stat") {
                return (
                  <div
                    key={i}
                    className={`${tile.span} rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 flex flex-col justify-center`}
                  >
                    <div className="text-3xl font-bold text-sky-400">
                      {tile.value}
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      {tile.label}
                    </div>
                  </div>
                );
              }

              const Wrapper = tile.href ? Link : "div";
              const wrapperProps = tile.href ? { to: tile.href } : {};

              return (
                <Wrapper
                  key={i}
                  {...wrapperProps}
                  className={`${tile.span} group relative rounded-2xl overflow-hidden border border-white/10`}
                >
                  <img
                    src={tile.image}
                    alt={tile.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400">
                      {tile.label}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-white flex items-center gap-1.5">
                      {tile.title}
                      {tile.href && (
                        <ArrowUpRight
                          size={14}
                          className="text-gray-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      )}
                    </h3>
                    {tile.desc && (
                      <p className="mt-1 text-xs text-gray-300 leading-relaxed max-w-sm">
                        {tile.desc}
                      </p>
                    )}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="relative py-20 md:py-24 px-6 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4 text-center">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-12">
            Vesting &amp; unlock questions
          </h2>

          <div className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q} className="grid sm:grid-cols-[1fr_1.4fr] gap-2 sm:gap-8">
                <h3 className="text-sm font-semibold text-white">{f.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Closing CTA ───────── */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Want the numbers behind the schedule?
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            See the full allocation breakdown, or explore how the Reserve
            funds real projects through the Grants Program.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/token/tokenomics"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-400 text-black text-sm font-semibold hover:bg-sky-300 hover:scale-105 transition-all duration-300"
            >
              See Full Tokenomics
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/grants"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white text-sm font-medium hover:border-white/35 hover:scale-105 transition-all duration-300"
            >
              Explore Grants
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TokenVesting;

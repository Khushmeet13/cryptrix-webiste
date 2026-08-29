import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Coins,
  Activity as ActivityIcon,
  Vote,
  Image as NFTIcon,
  Wallet,
  ArrowRight,
  ArrowUpRight,
  Gift,
  Info,
} from "lucide-react";

const NAV = [
  { key: "Overview", icon: LayoutDashboard },
  { key: "Assets", icon: Coins },
  { key: "Activity", icon: ActivityIcon },
  { key: "Governance", icon: Vote },
];

const quickLinks = [
  { title: "Get a Wallet", desc: "Hold and manage CRX securely.", href: "/wallets", icon: Wallet },
  { title: "Stake CRX", desc: "Delegate and start earning.", href: "/staking-dashboard", icon: Coins },
  { title: "Mint an NFT", desc: "Create or collect on-chain.", href: "/nft-platform", icon: NFTIcon },
  { title: "Vote on a Proposal", desc: "2 proposals open right now.", href: "/proposals", icon: Vote },
];

// Demo wallet — illustrative sample data, not a real connected account
const demoAssets = [
  { name: "CRX", type: "Liquid balance", amount: 1934, detail: "—" },
  { name: "CRX", type: "Staked", amount: 4250, detail: "Meridian Node · 9.8% APY" },
  { name: "NFTs", type: "Collectibles", amount: 42, detail: "7 items, est. floor value" },
];
const portfolioTotal = demoAssets.reduce((sum, a) => sum + a.amount, 0);

const allocation = [
  { label: "Staked CRX", value: 4250, color: "#60A5FA" },
  { label: "Liquid CRX", value: 1934, color: "#818cf8" },
  { label: "NFTs (est.)", value: 42, color: "#38BDF8" },
];

// 30-day portfolio value trend — illustrative demo series, in CRX
const portfolioTrend = [5410, 5460, 5502, 5488, 5540, 5601, 5588, 5642, 5701, 5688, 5734, 5790, 5812, 5860, 5844, 5901, 5958, 5940, 5988, 6021, 6055, 6040, 6089, 6122, 6098, 6140, 6165, 6151, 6184, 6226];

// Demo personal activity — illustrative sample data
const demoActivity = [
  { action: "staked", detail: "Delegated to Meridian Node", amount: "2,000 CRX", time: "2 days ago" },
  { action: "claimed", detail: "Staking reward payout", amount: "184 CRX", time: "5 days ago" },
  { action: "voted", detail: "Proposal #7 — Quadratic voting", amount: "For", time: "6 days ago" },
  { action: "minted", detail: "Wovenlight #12", amount: "9.5 CRX", time: "9 days ago" },
  { action: "unstaked", detail: "Requested from Northstar Validators", amount: "500 CRX", time: "14 days ago" },
];

// Public, network-wide activity — not a user's personal history
const networkActivity = [
  { address: "0x7a3f...92c1", action: "staked", amount: "5,200 CRX" },
  { address: "0xb14e...d403", action: "claimed", amount: "184 CRX" },
  { address: "0x2c9a...6f18", action: "voted", amount: "Proposal #7" },
  { address: "0xf051...3ab7", action: "unstaked", amount: "900 CRX" },
  { address: "0x91dd...77ea", action: "minted", amount: "Wovenlight #12" },
];

const recentVotes = [
  { title: "Proposal #7 — Introduce quadratic voting mechanism", side: "For", forPct: 68 },
  { title: "Proposal #5 — Upgrade governance contract to v2.1", side: "For", forPct: 74 },
];

// Illustrative demo series for the extra charts below
const weeklyRewards = [12, 15, 9, 18, 22, 19, 26, 24];
const activityVolume = [3, 5, 2, 6, 4, 7, 5];
const activityDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const stakedByValidator = [
  { name: "Meridian Node", amount: 3000, apy: 9.8 },
  { name: "Northstar Validators", amount: 1250, apy: 9.6 },
];
const topValidators = [
  { name: "Meridian Node", apy: 9.8 },
  { name: "Northstar Validators", apy: 9.6 },
  { name: "Apex Chain Ops", apy: 9.5 },
  { name: "Blockwave Infrastructure", apy: 9.3 },
];
const maxValidatorApy = Math.max(...topValidators.map((v) => v.apy));
const participationRate = 86; // voted on 6 of 7 proposals

const actionColor = (a) =>
  a === "staked"
    ? "text-emerald-400"
    : a === "claimed"
    ? "text-emerald-400"
    : a === "unstaked"
    ? "text-rose-400"
    : a === "voted"
    ? "text-indigo-400"
    : "text-blue-400";

const StatCard = ({ icon, label, value, delta }) => {
  const Icon = icon;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5">
      <div className="flex items-center justify-between mb-2">
        <Icon size={14} className="text-gray-500" />
        {delta && (
          <span className="text-[11px] font-medium text-emerald-400">{delta}</span>
        )}
      </div>
      <div className="text-2xl font-semibold text-white font-mono">{value}</div>
      <div className="mt-1 text-xs text-gray-500">{label}</div>
    </div>
  );
};

const DemoBanner = () => (
  <div className="flex items-start gap-2 rounded-xl border border-amber-500/25 bg-amber-500/[0.06] px-4 py-3 mb-8 text-xs text-amber-200/90">
    <Info size={14} className="text-amber-400 shrink-0 mt-0.5" />
    Previewing example wallet data — connect your wallet to see your real
    balances and activity.
  </div>
);

/* Portfolio value trend — filled area chart */
const AreaChart = ({ values, height = 160 }) => {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * 100;
    const y = 100 - ((v - min) / (max - min || 1)) * 100;
    return `${x},${y}`;
  });
  const linePoints = points.join(" ");
  const areaPoints = `0,100 ${linePoints} 100,100`;

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full" style={{ height }}>
      <defs>
        <linearGradient id="portfolioFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill="url(#portfolioFill)" />
      <polyline points={linePoints} fill="none" stroke="#60A5FA" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
};

/* Portfolio composition — segmented allocation bar (Zerion/Zapper-style) */
const AllocationBar = ({ data }) => {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  return (
    <div className="flex w-full h-2.5 rounded-full overflow-hidden">
      {data.map((d) => (
        <div
          key={d.label}
          style={{ width: `${(d.value / total) * 100}%`, background: d.color }}
          title={`${d.label} — ${((d.value / total) * 100).toFixed(0)}%`}
        />
      ))}
    </div>
  );
};

/* Simple vertical bar chart */
const BarChart = ({ values, labels, color = "#60A5FA", height = 120 }) => {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-2" style={{ height }}>
      {values.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
          <div
            className="w-full rounded-t-md transition-all duration-300"
            style={{ height: `${(v / max) * 100}%`, background: color, minHeight: 4 }}
            title={`${labels ? labels[i] : i}: ${v}`}
          />
          {labels && (
            <span className="text-[10px] text-gray-500">{labels[i]}</span>
          )}
        </div>
      ))}
    </div>
  );
};

/* Donut chart — used for the Assets tab breakdown */
const DonutChart = ({ data, size = 140, strokeWidth = 20 }) => {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const segments = data.reduce((acc, d) => {
    const prevTotal = acc.length ? acc[acc.length - 1].cumulative : 0;
    acc.push({ ...d, offsetStart: prevTotal, cumulative: prevTotal + (d.value / total) * 100 });
    return acc;
  }, []);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        {segments.map((d) => {
          const pct = (d.value / total) * 100;
          const dash = (pct / 100) * circumference;
          const gap = circumference - dash;
          const offset = -((d.offsetStart / 100) * circumference);
          return (
            <circle
              key={d.label}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={offset}
            />
          );
        })}
      </g>
    </svg>
  );
};

/* Radial gauge — single-value progress arc */
const RadialGauge = ({ percent, size = 120, stroke = 12, color = "#34D399" }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </g>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-white font-mono">{percent}%</span>
      </div>
    </div>
  );
};

const TIME_RANGES = ["24H", "7D", "30D", "1Y"];

const Dashboard = () => {
  const [section, setSection] = useState("Overview");
  const [range, setRange] = useState("30D");

  return (
    <div className="w-full bg-[#01021f] text-white min-h-screen">
      <div className="max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[220px_1fr] gap-8">
        {/* ───────── Sidebar ───────── */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4 px-2">
            Product / Dashboard
          </p>
          <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {NAV.map((item) => {
              const Icon = item.icon;
              const isActive = section === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => setSection(item.key)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-white/[0.06] text-white border border-white/10"
                      : "text-gray-500 hover:text-gray-300 border border-transparent"
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-blue-400" : ""} />
                  {item.key}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            className="hidden lg:flex mt-6 items-center gap-2 px-4 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-all duration-300 w-full justify-center"
          >
            <Wallet size={15} />
            Connect Wallet
          </button>
        </aside>

        {/* ───────── Main ───────── */}
        <main className="pb-20">
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <h1 className="text-2xl font-semibold">{section}</h1>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-medium"
            >
              <Wallet size={13} />
              Connect
            </button>
          </div>
          <h1 className="hidden lg:block text-2xl font-semibold mb-6">
            {section}
          </h1>

          <DemoBanner />

          {/* ── Overview ── */}
          {section === "Overview" && (
            <div className="space-y-6">
              {/* Hero balance card — the one number that matters, chart-led */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                      Total Balance
                    </p>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-4xl sm:text-5xl font-bold text-white font-mono tracking-tight">
                        6,184
                      </span>
                      <span className="text-lg text-gray-500">CRX</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                        +{(((portfolioTrend.at(-1) - portfolioTrend[0]) / portfolioTrend[0]) * 100).toFixed(1)}% ({range})
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {TIME_RANGES.map((r) => (
                      <button
                        key={r}
                        onClick={() => setRange(r)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          range === r
                            ? "bg-white/10 text-white"
                            : "text-gray-500 hover:text-gray-300"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <AreaChart values={portfolioTrend} height={140} />
                </div>

                <div className="mt-5 pt-5 border-t border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">Composition</span>
                  </div>
                  <AllocationBar data={allocation} />
                  <div className="flex flex-wrap gap-x-6 gap-y-1.5 mt-3">
                    {allocation.map((a) => (
                      <div key={a.label} className="flex items-center gap-1.5 text-xs">
                        <span className="w-2 h-2 rounded-full" style={{ background: a.color }} />
                        <span className="text-gray-400">{a.label}</span>
                        <span className="font-mono text-gray-300">
                          {((a.value / portfolioTotal) * 100).toFixed(0)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Secondary metrics — de-emphasized relative to the hero balance */}
              <div className="grid grid-cols-3 gap-4">
                <StatCard icon={Coins} label="Staked CRX" value="4,250" delta="+2,000 (7d)" />
                <StatCard icon={NFTIcon} label="NFTs Owned" value="7" />
                <StatCard icon={Vote} label="Voting Power" value="4,250" />
              </div>

              <div className="grid lg:grid-cols-2 gap-4">
                {/* Rewards bar chart */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-sm font-semibold text-white">
                      Staking Rewards — 8 Weeks
                    </h3>
                    <span className="text-xs font-mono text-emerald-400">
                      {weeklyRewards.reduce((s, v) => s + v, 0)} CRX total
                    </span>
                  </div>
                  <BarChart values={weeklyRewards} color="#34D399" />
                </div>

                {/* Top validators */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
                  <h3 className="text-sm font-semibold text-white mb-5">
                    Top Validators by APY
                  </h3>
                  <div className="space-y-3">
                    {topValidators.map((v) => (
                      <div key={v.name}>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-300">{v.name}</span>
                          <span className="font-mono text-white">{v.apy}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className="h-full bg-blue-400 rounded-full"
                            style={{ width: `${(v.apy / maxValidatorApy) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-white mb-4">
                  Get started
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {quickLinks.map((l) => {
                    const Icon = l.icon;
                    return (
                      <Link
                        key={l.title}
                        to={l.href}
                        className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center shrink-0">
                          <Icon size={17} className="text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white flex items-center gap-1.5">
                            {l.title}
                            <ArrowUpRight
                              size={13}
                              className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                            />
                          </h3>
                          <p className="text-xs text-gray-400 mt-1">{l.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ── Assets ── */}
          {section === "Assets" && (
            <div className="space-y-6">
              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-4">
                {/* Composition donut */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 flex flex-col items-center">
                  <h3 className="text-sm font-semibold text-white self-start mb-4">
                    Holdings Breakdown
                  </h3>
                  <DonutChart data={allocation} />
                  <div className="w-full mt-4 space-y-2">
                    {allocation.map((a) => (
                      <div key={a.label} className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-2 text-gray-400">
                          <span className="w-2 h-2 rounded-full" style={{ background: a.color }} />
                          {a.label}
                        </span>
                        <span className="font-mono text-gray-300">
                          {((a.value / portfolioTotal) * 100).toFixed(0)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Staked by validator */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
                  <h3 className="text-sm font-semibold text-white mb-5">
                    Staked CRX by Validator
                  </h3>
                  <div className="space-y-4">
                    {stakedByValidator.map((v) => (
                      <div key={v.name}>
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="text-gray-300">{v.name}</span>
                          <span className="font-mono text-white">
                            {v.amount.toLocaleString()} CRX · {v.apy}%
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className="h-full bg-indigo-400 rounded-full"
                            style={{ width: `${(v.amount / 4250) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">
                      Asset
                    </th>
                    <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">
                      Type
                    </th>
                    <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">
                      Detail
                    </th>
                    <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5 text-right">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {demoAssets.map((a, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-4 px-5 text-sm font-medium text-white whitespace-nowrap">
                        {a.name}
                      </td>
                      <td className="py-4 px-5 text-sm text-gray-400 whitespace-nowrap">
                        {a.type}
                      </td>
                      <td className="py-4 px-5 text-xs text-gray-500">
                        {a.detail}
                      </td>
                      <td className="py-4 px-5 text-sm font-mono text-white text-right whitespace-nowrap">
                        {a.name === "NFTs" ? "7 items" : `${a.amount.toLocaleString()} CRX`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          )}

          {/* ── Activity ── */}
          {section === "Activity" && (
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-4">
                <StatCard icon={ActivityIcon} label="Transactions (7d)" value={activityVolume.reduce((s, v) => s + v, 0)} />
                <StatCard icon={Coins} label="Volume Moved (7d)" value="2,584 CRX" />
                <StatCard icon={ActivityIcon} label="Most Active Day" value="Sat" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-5">
                  Activity Volume — Last 7 Days
                </h3>
                <BarChart values={activityVolume} labels={activityDays} color="#818cf8" />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-white mb-4">
                  Your Activity
                </h2>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Type</th>
                        <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Detail</th>
                        <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Amount</th>
                        <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5 text-right">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {demoActivity.map((a, i) => (
                        <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                          <td className={`py-3.5 px-5 text-xs font-semibold uppercase tracking-wide ${actionColor(a.action)}`}>
                            {a.action}
                          </td>
                          <td className="py-3.5 px-5 text-sm text-gray-300">{a.detail}</td>
                          <td className="py-3.5 px-5 text-sm font-mono text-white whitespace-nowrap">{a.amount}</td>
                          <td className="py-3.5 px-5 text-xs text-gray-500 text-right whitespace-nowrap">{a.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-white mb-4">
                  Network Activity
                </h2>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Address</th>
                        <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Action</th>
                        <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {networkActivity.map((a, i) => (
                        <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                          <td className="py-3.5 px-5 font-mono text-xs text-gray-400">{a.address}</td>
                          <td className={`py-3.5 px-5 text-xs font-semibold uppercase tracking-wide ${actionColor(a.action)}`}>
                            {a.action}
                          </td>
                          <td className="py-3.5 px-5 text-sm font-mono text-gray-300 text-right whitespace-nowrap">{a.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── Governance ── */}
          {section === "Governance" && (
            <div className="space-y-8">
              <div className="grid sm:grid-cols-3 gap-4">
                <StatCard icon={Vote} label="My Voting Power" value="4,250" />
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5">
                  <div className="text-2xl font-semibold text-white font-mono">2</div>
                  <div className="mt-1 text-xs text-gray-500">
                    Active Proposals
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5 flex items-center gap-4">
                  <RadialGauge percent={participationRate} size={64} stroke={7} />
                  <div>
                    <div className="text-xs text-gray-300 font-medium">
                      Participation Rate
                    </div>
                    <div className="text-[11px] text-gray-500 mt-0.5">
                      Voted on 6 of 7 proposals
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-white mb-4">
                  Your Recent Votes
                </h2>
                <div className="space-y-3">
                  {recentVotes.map((v) => (
                    <div
                      key={v.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5"
                    >
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="text-sm text-gray-200">{v.title}</span>
                        <span className="text-xs font-semibold text-emerald-400 shrink-0">
                          Voted {v.side}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-emerald-400 rounded-full"
                          style={{ width: `${v.forPct}%` }}
                        />
                      </div>
                      <div className="flex justify-between mt-1.5 text-[11px] text-gray-500">
                        <span>For {v.forPct}%</span>
                        <span>Against {100 - v.forPct}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/proposals"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Gift size={17} className="text-blue-400" />
                  <span className="text-sm text-gray-200">
                    Browse open governance proposals
                  </span>
                </div>
                <ArrowRight
                  size={15}
                  className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all"
                />
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Boxes,
  Hash,
  Wallet,
  FileCheck,
  Users,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Info,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Coins,
  Fuel,
  Globe,
  Layers,
  CheckCircle2,
  SlidersHorizontal,
  Trophy,
  Settings2,
} from "lucide-react";

const EXPLORER_URL = "https://explorer.cryptrixchain.io";

// Illustrative ticker figures — not live market data
const tickerItems = [
  { label: "CRX", value: "$0.934", change: "+2.1%" },
  { label: "MCAP", value: "$837.4M", change: null },
  { label: "24h Vol", value: "$42.6M", change: "-6.3%" },
  { label: "Supply", value: "1.94B", change: null },
  { label: "Staking APY", value: "9.8%", change: null },
  { label: "Block", value: "8,234,211", change: null },
];

// Illustrative 16-day CRX supply composition — staked / liquid / locked in contracts
const supplyDays = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15", "D16"];
const supplyComposition = {
  staked: [58, 59, 60, 59, 61, 62, 63, 64, 63, 65, 66, 67, 68, 69, 70, 71],
  liquid: [30, 30, 29, 30, 28, 27, 27, 26, 27, 25, 24, 24, 23, 22, 21, 21],
  locked: [12, 12, 12, 12, 12, 12, 11, 11, 11, 11, 11, 10, 10, 10, 10, 9],
};
const supplyColors = { staked: "#60A5FA", liquid: "#818cf8", locked: "#38BDF8" };
const supplyLabels = { staked: "Staked CRX", liquid: "Liquid CRX", locked: "Locked in Contracts" };

// Illustrative validator regional distribution — approximate, for visual texture only
const validatorRegions = [
  { region: "North America", count: 41, top: "28%", left: "16%" },
  { region: "South America", count: 9, top: "62%", left: "24%" },
  { region: "Europe", count: 38, top: "20%", left: "48%" },
  { region: "Africa", count: 7, top: "55%", left: "50%" },
  { region: "Middle East", count: 6, top: "38%", left: "58%" },
  { region: "Asia Pacific", count: 27, top: "34%", left: "76%" },
  { region: "Oceania", count: 5, top: "72%", left: "84%" },
];
const nextProposers = ["Northstar Validators", "Apex Chain Ops", "Blockwave Infrastructure"];

// Illustrative top-holder leaderboard — public balances, not personal data
const topWallets = [
  { rank: 1, address: "0x9c1a...4e02", balance: "18.4M CRX" },
  { rank: 2, address: "0x2f5b...7ac1", balance: "12.1M CRX" },
  { rank: 3, address: "0xb84d...c930", balance: "9.7M CRX" },
  { rank: 4, address: "0x60ee...11cd", balance: "6.3M CRX" },
  { rank: 5, address: "0x7a3f...92c1", balance: "5.1M CRX" },
];

const RANGE_OPTIONS = ["24H", "7D", "30D"];

// Staked vs liquid share of circulating supply, for the ratio bar
const stakedLiquidRatio = { staked: 71, liquid: 29 };

const networkStats = [
  { label: "Block Height", value: "8,234,211" },
  { label: "Avg. Block Time", value: "0.92s" },
  { label: "Active Validators", value: "128 / 133" },
  { label: "TPS (live)", value: "~542" },
];

// Illustrative demo series — not live data
const metricTabs = [
  { key: "Block Height", value: "8,234,211", change: "+1.23%", series: [8210, 8213, 8215, 8214, 8218, 8221, 8225, 8224, 8228, 8231, 8230, 8234] },
  { key: "TPS", value: "~542", change: "+4.1%", series: [480, 495, 470, 510, 520, 505, 530, 540, 515, 525, 538, 542] },
  { key: "Validators", value: "128 / 133", change: null, series: [124, 125, 126, 126, 127, 127, 128, 128, 127, 128, 128, 128] },
  { key: "Block Time", value: "0.92s", change: "-2.0%", series: [98, 97, 96, 95, 96, 94, 93, 94, 92, 93, 92, 92] },
];

// Illustrative demo series — CRX staked network-wide, 30d
const stakedTrend = [58, 60, 59, 62, 64, 63, 66, 68, 67, 70, 72, 71, 74, 76, 75, 78];

// Illustrative demo data — not live blocks
const recentBlocks = [
  { height: 8234211, proposer: "Meridian Node", txs: 214, size: "17.4 kB", gas: 68, time: "2s ago" },
  { height: 8234210, proposer: "Northstar Validators", txs: 189, size: "14.1 kB", gas: 54, time: "3s ago" },
  { height: 8234209, proposer: "Apex Chain Ops", txs: 231, size: "21.8 kB", gas: 81, time: "4s ago" },
  { height: 8234208, proposer: "Blockwave Infrastructure", txs: 176, size: "12.9 kB", gas: 47, time: "5s ago" },
  { height: 8234207, proposer: "Meridian Node", txs: 198, size: "16.2 kB", gas: 62, time: "6s ago" },
];

// Illustrative demo data — not live transactions
const recentTx = [
  { hash: "0x8f2a...c91d", action: "transferCRX", from: "0x7a3f...92c1", to: "0xb14e...d403", amount: "5,200 CRX", time: "2s ago", block: 8234211, fee: "0.0027 CRX", status: "Success" },
  { hash: "0x1c7e...44af", action: "stake", from: "0x2c9a...6f18", to: "0xf051...3ab7", amount: "900 CRX", time: "5s ago", block: 8234210, fee: "0.0031 CRX", status: "Success" },
  { hash: "0x9be0...2210", action: "claimReward", from: "0x91dd...77ea", to: "0x33fc...8a02", amount: "184 CRX", time: "8s ago", block: 8234210, fee: "0.0019 CRX", status: "Success" },
  { hash: "0x4ad3...bb17", action: "unstake", from: "0x60ee...11cd", to: "0x7a3f...92c1", amount: "2,000 CRX", time: "11s ago", block: 8234209, fee: "0.0024 CRX", status: "Success" },
];

// Fixed dot-grid layout for the validator distribution panel background — decorative only
const dotGrid = Array.from({ length: 8 }, (_, row) =>
  Array.from({ length: 22 }, (_, col) => {
    const seed = (row * 22 + col) % 7;
    return seed === 0 || seed === 4 ? 0 : 1; // sparse, fixed "landmass-ish" pattern
  })
);

const actionStyle = {
  transferCRX: "text-blue-300 border-blue-500/30 bg-blue-500/10",
  stake: "text-emerald-300 border-emerald-500/30 bg-emerald-500/10",
  claimReward: "text-emerald-300 border-emerald-500/30 bg-emerald-500/10",
  unstake: "text-rose-300 border-rose-500/30 bg-rose-500/10",
};

// Same validator set used on Staking Dashboard — DPoS proposer rotation
const validatorRotation = ["Meridian Node", "Northstar Validators", "Apex Chain Ops", "Blockwave Infrastructure"];

const initials = (name) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();

/* Thin sparkline — normalizes any numeric series to fill its box */
const Sparkline = ({ values, height = 48, stroke = "#60A5FA" }) => {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * 100;
      const y = 100 - ((v - min) / (max - min || 1)) * 100;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full" style={{ height }}>
      <polyline points={points} fill="none" stroke={stroke} strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
};

/* Stacked area chart with hover tooltip — CRX supply composition */
const StackedAreaChart = ({ series, colors, labels, days, height = 180 }) => {
  const [hover, setHover] = useState(null);
  const keys = Object.keys(series);
  const n = series[keys[0]].length;
  const totals = Array.from({ length: n }, (_, i) => keys.reduce((s, k) => s + series[k][i], 0));
  const max = Math.max(...totals);

  // cumulative stacked points per layer
  const layerPoints = keys.map((k, li) => {
    return Array.from({ length: n }, (_, i) => {
      const below = keys.slice(0, li).reduce((s, kk) => s + series[kk][i], 0);
      const top = below + series[k][i];
      const x = (i / (n - 1)) * 100;
      return { x, yTop: 100 - (top / max) * 100, yBottom: 100 - (below / max) * 100 };
    });
  });

  return (
    <div>
      {hover !== null && (
        <div className="mb-3 inline-block rounded-lg border border-white/10 bg-[#050614] px-3 py-2 text-xs">
          <div className="text-gray-500 mb-1">{days[hover]}</div>
          {keys.map((k) => (
            <div key={k} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: colors[k] }} />
              <span className="text-gray-400">{labels[k]}</span>
              <span className="text-white font-mono ml-auto">{series[k][hover]}%</span>
            </div>
          ))}
        </div>
      )}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full cursor-crosshair"
        style={{ height }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const pct = (e.clientX - rect.left) / rect.width;
          setHover(Math.max(0, Math.min(n - 1, Math.round(pct * (n - 1)))));
        }}
        onMouseLeave={() => setHover(null)}
      >
        {layerPoints.map((pts, li) => {
          const top = pts.map((p) => `${p.x},${p.yTop}`).join(" ");
          const bottom = [...pts].reverse().map((p) => `${p.x},${p.yBottom}`).join(" ");
          return (
            <polygon
              key={keys[li]}
              points={`${top} ${bottom}`}
              fill={colors[keys[li]]}
              opacity={0.55 - li * 0.1}
            />
          );
        })}
        {hover !== null && (
          <line x1={(hover / (n - 1)) * 100} y1="0" x2={(hover / (n - 1)) * 100} y2="100" stroke="white" strokeOpacity="0.2" vectorEffect="non-scaling-stroke" />
        )}
      </svg>
    </div>
  );
};

const features = [
  {
    icon: Boxes,
    title: "Blocks & Transactions",
    desc: "Every block, transaction, and its full execution trace, searchable in real time.",
    stat: "8,234,211 blocks indexed",
    href: EXPLORER_URL,
    external: true,
  },
  {
    icon: Wallet,
    title: "Address & Wallet Lookup",
    desc: "Balances, token holdings, and transaction history for any address.",
    stat: "2.1M+ addresses tracked",
    href: "/wallets",
  },
  {
    icon: FileCheck,
    title: "Verified Contracts",
    desc: "Read published source code and confirm it matches what's actually deployed.",
    stat: "1,842 contracts verified",
    href: "/smart-contracts",
  },
  {
    icon: Users,
    title: "Validator & Network Stats",
    desc: "Live validator performance, block times, and network-wide throughput.",
    stat: "133 validators live",
    href: "/staking-dashboard",
  },
];

const Explorer = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [proposerIdx, setProposerIdx] = useState(0);
  const [expandedTx, setExpandedTx] = useState(null);
  const [range, setRange] = useState("7D");

  useEffect(() => {
    const id = setInterval(() => {
      setProposerIdx((i) => (i + 1) % validatorRotation.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const refresh = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 700);
  };

  return (
    <div className="w-full bg-[#01021f] text-white pt-16">
      {/* ───────── Ticker strip ───────── */}
      <div className="w-full border-b border-white/10 bg-white/[0.02] overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center gap-6 text-xs whitespace-nowrap">
          {tickerItems.map((t) => (
            <span key={t.label} className="flex items-center gap-1.5 text-gray-500">
              <span className="text-gray-300 font-medium">{t.label}</span>
              <span className="font-mono text-white">{t.value}</span>
              {t.change && (
                <span className={t.change.startsWith("-") ? "text-rose-400" : "text-emerald-400"}>
                  {t.change}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ───────── Hero ───────── */}
      <section className="relative px-6 sm:px-12 lg:px-24 pt-20 pb-16 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                Product / Explorer
              </span>
            </div>
            <button
              type="button"
              onClick={refresh}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 text-[11px] text-gray-400 hover:text-white hover:border-white/30 transition-colors"
            >
              <RefreshCw size={11} className={spinning ? "animate-spin" : ""} />
              Refresh
            </button>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 text-[11px] text-gray-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Mainnet
              <ChevronDown size={11} />
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            Explore blocks, transactions, and addresses.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
            Every transaction on Cryptrix is public and verifiable — search
            the chain yourself, no permission required.
          </p>

          {/* Search bar */}
          <div className="mt-8 flex items-center gap-2 max-w-2xl mx-auto">
            <button
              type="button"
              className="hidden sm:inline-flex shrink-0 items-center gap-1.5 px-4 py-4 rounded-full border border-white/15 bg-white/[0.04] text-sm text-gray-400 hover:text-white hover:border-white/30 transition-colors"
            >
              <SlidersHorizontal size={14} />
              All Filters
              <ChevronDown size={12} />
            </button>
            <div className="relative flex-1">
              <Search size={17} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search by address, transaction hash, or block"
                className="w-full pl-12 pr-32 py-4 rounded-full border border-white/15 bg-white/[0.04] text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              />
              <span className="hidden sm:flex absolute right-24 top-1/2 -translate-y-1/2 w-6 h-6 rounded-md border border-white/15 items-center justify-center text-[11px] text-gray-500">
                /
              </span>
              <a
                href={EXPLORER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-1.5 top-1.5 bottom-1.5 inline-flex items-center gap-1.5 px-5 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-all duration-300"
              >
                Search
              </a>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-600">
            Opens the live explorer at explorer.cryptrixchain.io
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mt-10">
            {networkStats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
                <p className="text-xl font-semibold text-white font-mono">{s.value}</p>
                <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Live-style dashboard, bento layout ───────── */}
      <section className="relative py-16 md:py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start gap-2 rounded-xl border border-amber-500/25 bg-amber-500/[0.06] px-4 py-3 mb-8 text-xs text-amber-200/90 max-w-2xl">
            <Info size={14} className="text-amber-400 shrink-0 mt-0.5" />
            Preview data shown below for illustration — browse the real,
            live chain at{" "}
            <a href={EXPLORER_URL} target="_blank" rel="noopener noreferrer" className="underline">
              explorer.cryptrixchain.io
            </a>
            .
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
            {/* Primary metric card — tab-switchable, with sparkline */}
            <div className="col-span-2 md:col-span-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
              <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                <div className="flex flex-wrap gap-2">
                  {metricTabs.map((m, i) => (
                    <button
                      key={m.key}
                      onClick={() => setActiveMetric(i)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        activeMetric === i
                          ? "bg-white/10 text-white border border-white/15"
                          : "text-gray-500 hover:text-gray-300 border border-transparent"
                      }`}
                    >
                      {m.key}
                    </button>
                  ))}
                </div>
                <div className="flex gap-1">
                  {RANGE_OPTIONS.map((r) => (
                    <button
                      key={r}
                      onClick={() => setRange(r)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors ${
                        range === r ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-white font-mono tracking-tight">
                  {metricTabs[activeMetric].value}
                </span>
                {metricTabs[activeMetric].change && (
                  <span
                    className={`text-xs font-semibold ${
                      metricTabs[activeMetric].change.startsWith("-") ? "text-rose-400" : "text-emerald-400"
                    }`}
                  >
                    {metricTabs[activeMetric].change}
                  </span>
                )}
              </div>
              <Sparkline values={metricTabs[activeMetric].series} height={90} stroke="#60A5FA" />
            </div>

            {/* Total staked — sparkline + mini stats */}
            <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Coins size={14} className="text-blue-400" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Total Staked
                </h3>
              </div>
              <div className="text-2xl font-bold text-white font-mono mb-3">
                74.2M <span className="text-sm text-gray-500 font-normal">CRX</span>
              </div>
              <Sparkline values={stakedTrend} height={40} stroke="#34D399" />
              <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-3 mb-4">
                <div>
                  <div className="text-sm font-semibold text-white font-mono">133</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Validators</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white font-mono">41.6K</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Delegators</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="flex justify-between text-[11px] text-gray-500 mb-1.5">
                  <span>Staked {stakedLiquidRatio.staked}%</span>
                  <span>Liquid {stakedLiquidRatio.liquid}%</span>
                </div>
                <div className="flex h-2 rounded-full overflow-hidden">
                  <div style={{ width: `${stakedLiquidRatio.staked}%`, background: "#34D399" }} />
                  <div style={{ width: `${stakedLiquidRatio.liquid}%`, background: "#818cf8" }} />
                </div>
              </div>
            </div>

            {/* Recent blocks */}
            <div className="col-span-2 md:col-span-3 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Boxes size={15} className="text-blue-400" />
                  <h3 className="text-sm font-semibold text-white">Recent Blocks</h3>
                </div>
                <div className="flex items-center gap-3">
                  <button type="button" className="text-gray-600 hover:text-gray-300 transition-colors" aria-label="Customize columns">
                    <Settings2 size={13} />
                  </button>
                  <a href={EXPLORER_URL} target="_blank" rel="noopener noreferrer" className="text-[11px] text-gray-500 hover:text-white transition-colors">
                    See all
                  </a>
                </div>
              </div>
              <table className="w-full text-left border-collapse">
                <tbody>
                  {recentBlocks.map((b) => (
                    <tr key={b.height} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-5">
                        <div className="font-mono text-sm text-blue-300 whitespace-nowrap">{b.height.toLocaleString()}</div>
                        <div className="text-[11px] text-gray-500 whitespace-nowrap mt-0.5">{b.proposer}</div>
                      </td>
                      <td className="py-3 px-5 text-right">
                        <div className="text-xs text-gray-400 whitespace-nowrap">{b.txs} txns · {b.size}</div>
                        <div className="flex items-center justify-end gap-1 mt-1">
                          <Fuel size={10} className="text-gray-600" />
                          <span className="text-[11px] text-gray-500">{b.gas}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-5 text-xs text-gray-500 text-right whitespace-nowrap">{b.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Recent transactions */}
            <div className="col-span-2 md:col-span-3 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Hash size={15} className="text-blue-400" />
                  <h3 className="text-sm font-semibold text-white">Recent Transactions</h3>
                </div>
                <div className="flex items-center gap-3">
                  <button type="button" className="text-gray-600 hover:text-gray-300 transition-colors" aria-label="Customize columns">
                    <Settings2 size={13} />
                  </button>
                  <a href={EXPLORER_URL} target="_blank" rel="noopener noreferrer" className="text-[11px] text-gray-500 hover:text-white transition-colors">
                    See all
                  </a>
                </div>
              </div>
              <table className="w-full text-left border-collapse">
                <tbody>
                  {recentTx.map((t) => {
                    const isOpen = expandedTx === t.hash;
                    return (
                      <React.Fragment key={t.hash}>
                        <tr
                          onClick={() => setExpandedTx(isOpen ? null : t.hash)}
                          className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors cursor-pointer"
                        >
                          <td className="py-3 px-5">
                            <div className="font-mono text-xs text-blue-300 whitespace-nowrap mb-1">{t.hash}</div>
                            <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full border ${actionStyle[t.action]}`}>
                              {t.action}
                            </span>
                          </td>
                          <td className="py-3 px-5 text-xs font-mono text-gray-300 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-1.5">
                              {t.amount}
                              {isOpen ? <ChevronUp size={12} className="text-gray-500" /> : <ChevronDown size={12} className="text-gray-500" />}
                            </div>
                            <div className="text-[11px] text-gray-600 font-normal mt-1">{t.time}</div>
                          </td>
                        </tr>
                        {isOpen && (
                          <tr className="border-b border-white/5 last:border-0 bg-white/[0.015]">
                            <td colSpan={2} className="px-5 py-4">
                              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                                <div>
                                  <span className="text-gray-500">From </span>
                                  <span className="font-mono text-gray-300">{t.from}</span>
                                </div>
                                <div>
                                  <span className="text-gray-500">To </span>
                                  <span className="font-mono text-gray-300">{t.to}</span>
                                </div>
                                <div>
                                  <span className="text-gray-500">Block </span>
                                  <span className="font-mono text-gray-300">#{t.block.toLocaleString()}</span>
                                </div>
                                <div>
                                  <span className="text-gray-500">Fee </span>
                                  <span className="font-mono text-gray-300">{t.fee}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <CheckCircle2 size={12} className="text-emerald-400" />
                                  <span className="text-emerald-400 font-medium">{t.status}</span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* CRX supply composition — stacked area, hover tooltip */}
            <div className="col-span-2 md:col-span-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Layers size={15} className="text-blue-400" />
                  <h3 className="text-sm font-semibold text-white">CRX Supply Composition — 16D</h3>
                </div>
                <div className="flex items-center gap-4">
                  {Object.keys(supplyLabels).map((k) => (
                    <span key={k} className="flex items-center gap-1.5 text-[11px] text-gray-500">
                      <span className="w-2 h-2 rounded-full" style={{ background: supplyColors[k] }} />
                      {supplyLabels[k]}
                    </span>
                  ))}
                </div>
              </div>
              <StackedAreaChart series={supplyComposition} colors={supplyColors} labels={supplyLabels} days={supplyDays} height={140} />
            </div>

            {/* Top wallets leaderboard */}
            <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                <Trophy size={15} className="text-blue-400" />
                <h3 className="text-sm font-semibold text-white">Top Wallets</h3>
              </div>
              <table className="w-full text-left border-collapse">
                <tbody>
                  {topWallets.map((w) => (
                    <tr key={w.rank} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="py-2.5 pl-5 pr-2 text-xs font-mono text-gray-600 w-6">#{w.rank}</td>
                      <td className="py-2.5 px-2 font-mono text-xs text-gray-300 whitespace-nowrap">{w.address}</td>
                      <td className="py-2.5 pr-5 pl-2 text-xs font-mono text-white text-right whitespace-nowrap">{w.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Validator distribution */}
            <div className="col-span-2 md:col-span-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 overflow-hidden">
              <div className="grid md:grid-cols-[1fr_1.6fr] gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Globe size={15} className="text-blue-400" />
                    <h3 className="text-sm font-semibold text-white">Validators</h3>
                  </div>
                  <div className="text-3xl font-bold text-emerald-400 font-mono mb-5">133</div>

                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    Current Proposer
                  </p>
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[11px] font-bold">
                      {initials(validatorRotation[proposerIdx])}
                    </span>
                    <span className="text-sm text-white">{validatorRotation[proposerIdx]}</span>
                  </div>

                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    Next Up
                  </p>
                  <div className="flex items-center gap-2">
                    {nextProposers.map((name) => (
                      <span
                        key={name}
                        title={name}
                        className="w-8 h-8 rounded-full bg-indigo-500/15 text-blue-300 flex items-center justify-center text-[11px] font-bold border border-white/10"
                      >
                        {initials(name)}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative dot-grid distribution — illustrative regional spread, not live geolocation */}
                <div className="relative min-h-[220px] rounded-xl bg-black/20 border border-white/5 p-4">
                  <div className="grid gap-2 h-full" style={{ gridTemplateRows: `repeat(${dotGrid.length}, 1fr)` }}>
                    {dotGrid.map((row, ri) => (
                      <div key={ri} className="flex gap-2 items-center">
                        {row.map((on, ci) => (
                          <span
                            key={ci}
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${on ? "bg-white/15" : "bg-transparent"}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                  {validatorRegions.map((r) => (
                    <span
                      key={r.region}
                      title={`${r.region}: ${r.count} validators`}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-500/15 text-emerald-300 text-[10px] font-bold"
                      style={{ top: r.top, left: r.left, width: 22 + r.count / 2, height: 22 + r.count / 2 }}
                    >
                      {r.count}
                    </span>
                  ))}
                  <p className="absolute bottom-2 right-3 text-[10px] text-gray-600">
                    Illustrative regional spread
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Features ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
            <h2 className="text-lg font-semibold text-white">
              What you can explore
            </h2>
            <span className="text-xs text-gray-500">
              All four, live, on the same public chain data
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isSpotlight = i === 0;
              const CardTag = f.external ? "a" : Link;
              const cardProps = f.external
                ? { href: f.href, target: "_blank", rel: "noopener noreferrer" }
                : { to: f.href };
              return (
                <CardTag
                  key={f.title}
                  {...cardProps}
                  className={`group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 ${
                    isSpotlight ? "col-span-2 md:col-span-3" : "col-span-2 md:col-span-1"
                  }`}
                >
                  {isSpotlight ? (
                    <div className="grid md:grid-cols-[1fr_260px] gap-6 items-center">
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
                            <Icon size={20} className="text-blue-400" />
                          </div>
                          <ArrowUpRight
                            size={15}
                            className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all md:hidden"
                          />
                        </div>
                        <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-1.5">
                          {f.title}
                          <ArrowUpRight
                            size={14}
                            className="hidden md:inline text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                          />
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-md">{f.desc}</p>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {f.stat}
                        </span>
                      </div>
                      <div className="hidden md:block">
                        <Sparkline values={metricTabs[0].series} height={70} stroke="#60A5FA" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
                          <Icon size={20} className="text-blue-400" />
                        </div>
                        <ArrowUpRight
                          size={15}
                          className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4">{f.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {f.stat}
                      </span>
                    </>
                  )}
                </CardTag>
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
            See it for yourself
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            The explorer runs on the same public chain data anyone can
            verify — open it directly, or check the RPC docs to query it
            programmatically.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={EXPLORER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Launch Explorer
              <ExternalLink size={15} />
            </a>
            <Link
              to="/docs/api"
              className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Read the API Docs
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explorer;

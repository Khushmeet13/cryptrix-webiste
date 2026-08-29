import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wallet,
  Gift,
  History as HistoryIcon,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  PlusCircle,
  MinusCircle,
  HelpCircle,
  Clock,
  ShieldAlert,
  Zap,
  MoreHorizontal,
  Search,
  X,
  Globe,
  Users,
  Percent,
  LayoutDashboard,
  Coins,
  Vote,
  Calculator,
} from "lucide-react";

const TABS = ["Overview", "Validators", "History"];
const NAV_ICONS = { Overview: LayoutDashboard, Validators: Coins, History: HistoryIcon };

const quickLinks = [
  { title: "Wallet", href: "/wallets", icon: Wallet },
  { title: "Governance", href: "/voting", icon: Vote },
  { title: "Rewards Calculator", href: "/token/staking", icon: Calculator },
];

const validators = [
  { rank: 1, name: "Meridian Node", apy: 9.8, commission: "5%", delegators: 3120, uptime: 99.97, color: "#60A5FA" },
  { rank: 2, name: "Northstar Validators", apy: 9.6, commission: "6%", delegators: 2745, uptime: 99.92, color: "#818cf8" },
  { rank: 3, name: "Apex Chain Ops", apy: 9.5, commission: "6%", delegators: 2018, uptime: 99.89, color: "#38BDF8" },
  { rank: 4, name: "Blockwave Infrastructure", apy: 9.3, commission: "7%", delegators: 1584, uptime: 99.85, color: "#A78BFA" },
];

const initials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

// Real network stats already established on the Status page (mainnet meta)
const networkHealth = [
  { label: "Block Height", value: "8,234,211" },
  { label: "Active Validators", value: "128 / 133" },
  { label: "TPS (live)", value: "~542" },
  { label: "Block Time", value: "0.92s" },
];

const faqs = [
  { q: "Is there a minimum amount to stake?", a: "No protocol-enforced minimum, though very small amounts may not be gas-efficient." },
  { q: "How long is the unstaking cooldown?", a: "CRX enters a 7-day cooldown before it's available in your wallet after you unstake." },
  { q: "Can I lose my stake?", a: "Validators that go offline or act maliciously are slashed — delegators share this risk proportionally." },
  { q: "Where do rewards come from?", a: "A share of network transaction fees, plus CRX's fixed protocol issuance schedule — not from new inflation." },
];

const maxApy = Math.max(...validators.map((v) => v.apy));

// Illustrative public network staking activity — not a user's personal history
const networkStakingActivity = [
  { address: "0x7a3f...92c1", action: "staked", validator: "Meridian Node", amount: "5,200 CRX", time: "2m ago" },
  { address: "0xb14e...d403", action: "claimed", validator: "Northstar Validators", amount: "184 CRX", time: "5m ago" },
  { address: "0x2c9a...6f18", action: "staked", validator: "Apex Chain Ops", amount: "12,000 CRX", time: "9m ago" },
  { address: "0xf051...3ab7", action: "unstaked", validator: "Blockwave Infrastructure", amount: "900 CRX", time: "14m ago" },
  { address: "0x91dd...77ea", action: "staked", validator: "Meridian Node", amount: "3,450 CRX", time: "21m ago" },
];

const activityColor = (a) =>
  a === "staked" ? "text-emerald-400" : a === "claimed" ? "text-blue-400" : "text-rose-400";

// Illustrative 30-day network-wide reward emission — public data, not a user's personal history
const emissionMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const emission = [62, 68, 75, 71, 82, 88, 95, 112, 101, 96, 105, 110];

const formatHMS = (totalSeconds) => {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

/* Interactive bar chart with hover tooltip — Portfolio-Value style */
const RewardBarChart = ({ values, labels }) => {
  const [hover, setHover] = useState(values.length - 1);
  const max = Math.max(...values);

  return (
    <div>
      {hover !== null && (
        <div className="mb-3 inline-block rounded-lg border border-white/10 bg-[#050614] px-3 py-2 text-xs">
          <div className="text-gray-500">{labels[hover]}</div>
          <div className="text-white font-semibold font-mono">{values[hover]} CRX</div>
        </div>
      )}
      <div className="flex items-end gap-2" style={{ height: 140 }} onMouseLeave={() => setHover(values.length - 1)}>
        {values.map((v, i) => (
          <div
            key={i}
            className="flex-1 h-full flex flex-col items-center justify-end gap-2 cursor-pointer group"
            onMouseEnter={() => setHover(i)}
          >
            <div
              className={`w-full rounded-t-md transition-all duration-300 ${
                hover === i ? "bg-blue-400" : "bg-blue-500/30 group-hover:bg-blue-500/50"
              }`}
              style={{ height: `${(v / max) * 100}%`, minHeight: 4 }}
            />
            <span className="text-[10px] text-gray-500">{labels[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* Validator APY comparison — simple vertical bar chart */
const BarChart = ({ items, height = 120 }) => {
  const max = Math.max(...items.map((i) => i.apy));
  return (
    <div className="flex items-end gap-3" style={{ height }}>
      {items.map((v) => (
        <div key={v.name} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
          <span className="text-[11px] font-mono text-gray-400">{v.apy}%</span>
          <div
            className="w-full rounded-t-md bg-gradient-to-t from-blue-500/60 to-blue-400 transition-all duration-500"
            style={{ height: `${(v.apy / max) * 100}%`, minHeight: 4 }}
          />
          <span className="text-[10px] text-gray-500 text-center leading-tight">
            {v.name.split(" ")[0]}
          </span>
        </div>
      ))}
    </div>
  );
};

/* 3D rotating stake orb — decorative header accent */
const StakeOrb = ({ size = 56 }) => (
  <div className="relative shrink-0" style={{ width: size, height: size, perspective: "600px" }}>
    <div className="absolute -inset-4 rounded-full bg-blue-500/25 blur-2xl animate-pulse-slow" />
    <div className="absolute inset-0 preserve-3d animate-spin-slow">
      <div
        className="absolute inset-0 rounded-full backface-hidden flex items-center justify-center"
        style={{
          background: "radial-gradient(circle at 35% 30%, #5b6bff, #12132c 75%)",
          border: "1.5px solid rgba(255,255,255,0.25)",
          boxShadow: "0 0 30px -6px rgba(99,102,241,0.6)",
        }}
      >
        <Zap size={18} className="text-blue-200" />
      </div>
      <div
        className="absolute inset-0 rounded-full backface-hidden flex items-center justify-center"
        style={{
          transform: "rotateY(180deg)",
          background: "radial-gradient(circle at 65% 30%, #6366f1, #0d0e24 75%)",
          border: "1.5px solid rgba(255,255,255,0.2)",
        }}
      />
    </div>
  </div>
);

/* Reward-cycle card — Denji-style ranked/progress/countdown card */
const CycleCard = ({ v, secondsLeft, onSelect, isSelected }) => (
  <button
    type="button"
    onClick={() => onSelect(v)}
    className={`text-left rounded-2xl border p-5 transition-all duration-300 ${
      isSelected ? "border-blue-400/50 bg-blue-500/[0.06]" : "border-white/10 bg-white/[0.02] hover:border-white/20"
    }`}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2.5">
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
          style={{ background: v.color + "33", border: `1px solid ${v.color}55`, color: v.color }}
        >
          {initials(v.name)}
        </span>
        <span className="text-sm font-medium text-white">{v.name}</span>
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded-full">
        Active
      </span>
    </div>

    <div className="mb-3">
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="text-gray-500">Uptime</span>
        <span className="font-mono text-white">{v.uptime}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${v.uptime}%` }} />
      </div>
    </div>

    <div className="flex items-center justify-between text-xs pt-3 border-t border-white/5">
      <span className="text-gray-500">Next reward in</span>
      <span className="font-mono text-blue-300">{formatHMS(secondsLeft)}</span>
    </div>
  </button>
);

const LockedField = ({ label }) => (
  <div className="relative overflow-hidden">
    <div className="blur-sm select-none pointer-events-none text-lg font-semibold text-white">••••••</div>
    <div className="absolute inset-0 flex items-center text-[11px] text-gray-500">Connect wallet</div>
    <div className="text-[11px] text-gray-500 mt-4">{label}</div>
  </div>
);

const StakingDashboard = () => {
  const [tab, setTab] = useState("Overview");
  const [autoCompound, setAutoCompound] = useState(true);
  const [selected, setSelected] = useState(validators[0]);
  const [secondsLeft, setSecondsLeft] = useState(7530);
  const [openMenu, setOpenMenu] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => (s <= 0 ? 7530 : s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const filteredActivity = useMemo(
    () =>
      networkStakingActivity.filter((a) =>
        `${a.address} ${a.validator} ${a.action}`.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  return (
    <div className="w-full bg-[#01021f] text-white min-h-screen">
      {/* ───────── App header ───────── */}
      <section className="relative px-6 sm:px-12 lg:px-24 pt-28 pb-6 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <StakeOrb />
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-2">
                Product / Staking
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold">
                Staking Dashboard
              </h1>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-all duration-300 w-fit"
          >
            <Wallet size={15} />
            Connect Wallet
          </button>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto flex gap-1 mt-8 border-b border-white/10 -mb-px">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                tab === t
                  ? "border-blue-400 text-white"
                  : "border-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* ───────── Tab content ───────── */}
      <AnimatePresence mode="wait">
      {tab === "Overview" && (
        <motion.section
          key="overview"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="px-6 sm:px-12 lg:px-24 py-10"
        >
          <div className="max-w-6xl mx-auto">
            {/* Reward-cycle cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {validators.slice(0, 3).map((v, i) => (
                <motion.div
                  key={v.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                >
                  <CycleCard
                    v={v}
                    secondsLeft={secondsLeft}
                    onSelect={setSelected}
                    isSelected={selected.name === v.name}
                  />
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 mb-6">
              {/* Staking wallet */}
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.08] to-blue-500/[0.04] p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-white">Staking Wallet</h3>
                  <span className="text-xs font-mono text-gray-500">CRX</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <LockedField label="Available Balance" />
                  <LockedField label="Staked" />
                  <LockedField label="Rewards Claimed" />
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-white text-black text-sm font-medium opacity-60 cursor-not-allowed"
                    title="Connect a wallet"
                  >
                    <PlusCircle size={14} />
                    Stake
                  </button>
                  <button
                    type="button"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium opacity-60 cursor-not-allowed"
                    title="Connect a wallet"
                  >
                    <MinusCircle size={14} />
                    Unstake
                  </button>
                </div>
              </div>

              {/* Selected validator details */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-white">Selected Validator</h3>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ color: selected.color, background: selected.color + "18", border: `1px solid ${selected.color}40` }}
                  >
                    {selected.name}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-400"><Percent size={13} /> APY</span>
                    <span className="font-mono text-white">{selected.apy}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-400"><Users size={13} /> Delegators</span>
                    <span className="font-mono text-white">{selected.delegators.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-400"><Globe size={13} /> Commission</span>
                    <span className="font-mono text-white">{selected.commission}</span>
                  </div>
                </div>
                <Link
                  to="/staking"
                  className="mt-5 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-all duration-300"
                >
                  Delegate to {selected.name.split(" ")[0]}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white">
                  Network Reward Emission — Monthly
                </h3>
                <span className="text-xs text-gray-500">CRX, network-wide</span>
              </div>
              <RewardBarChart values={emission} labels={emissionMonths} />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Rewards settings */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-4">
                  Rewards Settings
                </h3>

                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div>
                    <p className="text-sm text-gray-200">Auto-compound</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Re-delegate rewards automatically each epoch
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAutoCompound((v) => !v)}
                    className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
                      autoCompound ? "bg-blue-500" : "bg-white/10"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                        autoCompound ? "translate-x-[22px]" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-gray-500" />
                    <p className="text-sm text-gray-200">Unstaking cooldown</p>
                  </div>
                  <span className="text-sm font-medium text-white">7 days</span>
                </div>
              </div>

              {/* Network health */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <h3 className="text-sm font-semibold text-white">
                    Network Health
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {networkHealth.map((n) => (
                    <div key={n.label}>
                      <div className="text-lg font-semibold text-white">
                        {n.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {n.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* ───────── Validators ───────── */}
      {tab === "Validators" && (
        <motion.section
          key="validators"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="px-6 sm:px-12 lg:px-24 py-10"
        >
          <div className="max-w-6xl mx-auto">
            {/* Staking offerings — card grid */}
            <h3 className="text-sm font-semibold text-white mb-4">Staking Offerings</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {validators.map((v) => (
                <div
                  key={v.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: v.color + "33", border: `1px solid ${v.color}55`, color: v.color }}
                    >
                      {initials(v.name)}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">{v.apy}% APY</span>
                  </div>
                  <h4 className="text-sm font-medium text-white mb-1">{v.name}</h4>
                  <p className="text-xs text-gray-500 mb-4">No minimum stake</p>
                  <Link
                    to="/staking"
                    onClick={() => setSelected(v)}
                    className="block text-center py-2 rounded-full bg-white text-black text-xs font-semibold hover:scale-105 transition-all duration-300"
                  >
                    Delegate
                  </Link>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl mb-6 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white">
                  APY by Validator
                </h3>
                <span className="text-xs text-gray-500">Live rates</span>
              </div>
              <BarChart items={validators} />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-visible">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Rank</th>
                    <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Validator</th>
                    <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5 w-1/4">APY</th>
                    <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Commission</th>
                    <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Delegators</th>
                    <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {validators.map((v, idx) => (
                    <tr key={v.name} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-5 font-mono text-sm text-gray-500">#{v.rank}</td>
                      <td className="py-4 px-5 text-sm font-medium text-white whitespace-nowrap">{v.name}</td>
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm text-white w-12 shrink-0">{v.apy}%</span>
                          <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden max-w-[160px]">
                            <div className="h-full bg-blue-400 rounded-full" style={{ width: `${(v.apy / maxApy) * 100}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-sm text-gray-400">{v.commission}</td>
                      <td className="py-4 px-5 text-sm text-gray-400">{v.delegators.toLocaleString()}</td>
                      <td className="py-4 px-5 text-right relative">
                        <button
                          type="button"
                          onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                          className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <MoreHorizontal size={16} className="text-gray-400" />
                        </button>
                        {openMenu === idx && (
                          <div className="absolute right-5 top-12 z-20 w-44 rounded-xl border border-white/10 bg-[#05060f] shadow-2xl py-1.5 text-left">
                            <Link
                              to="/staking"
                              className="block px-4 py-2 text-xs text-gray-200 hover:bg-white/5"
                              onClick={() => setOpenMenu(null)}
                            >
                              Delegate
                            </Link>
                            <button
                              type="button"
                              onClick={() => {
                                setSelected(v);
                                setOpenMenu(null);
                                setTab("Overview");
                              }}
                              className="w-full text-left px-4 py-2 text-xs text-gray-200 hover:bg-white/5"
                            >
                              View Details
                            </button>
                            <Link
                              to="/status"
                              className="block px-4 py-2 text-xs text-gray-200 hover:bg-white/5"
                              onClick={() => setOpenMenu(null)}
                            >
                              Network Status
                            </Link>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>
      )}

      {/* ───────── History ───────── */}
      {tab === "History" && (
        <motion.section
          key="history"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="px-6 sm:px-12 lg:px-24 py-10"
        >
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Personal history — honest empty state */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-10 text-center">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mx-auto mb-5">
                <HistoryIcon size={20} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                No history to show yet
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm mx-auto">
                Connect your wallet to see your staking, claim, and unstake
                history here.
              </p>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-all duration-300"
              >
                <Wallet size={15} />
                Connect Wallet
              </button>
            </div>

            {/* Cooldown timeline explainer */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <Clock size={16} className="text-blue-400" />
                <h3 className="text-sm font-semibold text-white">
                  How the unstaking cooldown works
                </h3>
              </div>
              <div className="relative flex items-center justify-between">
                <div className="absolute top-3 left-6 right-6 h-px bg-white/10">
                  <motion.div
                    className="h-full bg-blue-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
                {[
                  { label: "Requested", sub: "Day 0" },
                  { label: "Cooling down", sub: "7-day window" },
                  { label: "Available", sub: "In your wallet" },
                ].map((step) => (
                  <div key={step.label} className="relative z-10 flex flex-col items-center gap-2 text-center w-1/3">
                    <span className="w-6 h-6 rounded-full bg-[#01021f] border border-blue-400/60 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                    </span>
                    <span className="text-xs font-medium text-white">{step.label}</span>
                    <span className="text-[11px] text-gray-500">{step.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Public network activity */}
            <div>
              <div className="flex items-center justify-between mb-4 gap-4">
                <h3 className="text-sm font-semibold text-white">
                  Network Staking Activity
                </h3>
                <div className="relative w-56">
                  <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search address or validator"
                    className="w-full pl-8 pr-7 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500/40"
                  />
                  {search && (
                    <button onClick={() => setSearch("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Address</th>
                      <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Action</th>
                      <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Validator</th>
                      <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5 text-right">Amount</th>
                      <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5 text-right">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredActivity.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-sm text-gray-500">
                          No matching activity.
                        </td>
                      </tr>
                    ) : (
                      filteredActivity.map((a, i) => (
                        <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                          <td className="py-3.5 px-5 font-mono text-xs text-gray-400">{a.address}</td>
                          <td className={`py-3.5 px-5 text-xs font-semibold uppercase tracking-wide ${activityColor(a.action)}`}>
                            {a.action}
                          </td>
                          <td className="py-3.5 px-5 text-xs text-gray-400 whitespace-nowrap">{a.validator}</td>
                          <td className="py-3.5 px-5 text-sm font-mono text-white text-right whitespace-nowrap">{a.amount}</td>
                          <td className="py-3.5 px-5 text-xs text-gray-500 text-right whitespace-nowrap">{a.time}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.section>
      )}
      </AnimatePresence>

      {/* ───────── FAQ ───────── */}
      <section className="px-6 sm:px-12 lg:px-24 py-14 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle size={16} className="text-blue-400" />
            <h2 className="text-lg font-semibold text-white">
              Quick answers
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5"
              >
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {f.q}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-start gap-2 text-xs text-gray-500">
            <ShieldAlert size={13} className="text-rose-400 shrink-0 mt-0.5" />
            Staking is a network security role, not a deposit account —
            rewards reflect participation, not a guaranteed return.
          </div>
        </div>
      </section>

      {/* ───────── Footer note ───────── */}
      <section className="px-6 sm:px-12 lg:px-24 py-10 border-t border-white/10 text-center">
        <div className="max-w-md mx-auto flex items-center justify-center gap-2 text-xs text-gray-500">
          <CheckCircle2 size={13} className="text-emerald-400" />
          Non-custodial — CRX never leaves your wallet
        </div>
        <div className="mt-4">
          <Link
            to="/token/staking"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
          >
            Rewards calculator &amp; full staking guide
            <ArrowUpRight size={12} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StakingDashboard;

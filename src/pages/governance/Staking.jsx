import {
  ArrowRight,
  Shield,
  Gift,
  Lock,
  Vote,
  Coins,
  Star,
  TrendingUp,
  TrendingDown,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const governanceData = [
  { title: "Delegate to a Validator", icon: Vote },
  { title: "Secure the Network", icon: Shield },
  { title: "Share in the Rewards", icon: Gift },
];

const validators = [
  { name: "Meridian Node", apy: "9.8%", top: true },
  { name: "Northstar Validators", apy: "9.6%" },
  { name: "Apex Chain Ops", apy: "9.5%" },
  { name: "Blockwave Infrastructure", apy: "9.3%" },
];

const maxApy = Math.max(...validators.map((v) => parseFloat(v.apy)));

const activityMeta = {
  staked: { color: "#34D399", label: "Staked", icon: TrendingUp },
  unstaked: { color: "#F87171", label: "Unstaked", icon: TrendingDown },
  claimed: { color: "#60A5FA", label: "Claimed", icon: Gift },
};

const ACTIONS = ["staked", "unstaked", "claimed"];

const seedActivity = [
  { address: "0x7a3f...92c1", action: "staked", amount: "5,200 CRX", minutesAgo: 2 },
  { address: "0xb14e...d403", action: "claimed", amount: "184 CRX", minutesAgo: 5 },
  { address: "0x2c9a...6f18", action: "staked", amount: "12,000 CRX", minutesAgo: 9 },
  { address: "0xf051...3ab7", action: "unstaked", amount: "900 CRX", minutesAgo: 14 },
];

const randomAddress = () => {
  const hex = () => Math.floor(Math.random() * 16).toString(16);
  const part = (n) => Array.from({ length: n }, hex).join("");
  return `0x${part(4)}...${part(4)}`;
};

const randomActivity = () => {
  const action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
  const base = action === "claimed" ? Math.floor(Math.random() * 400) + 20 : Math.floor(Math.random() * 15000) + 500;
  return {
    id: `live-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    address: randomAddress(),
    action,
    amount: `${base.toLocaleString()} CRX`,
    timestamp: Date.now(),
  };
};

const timeAgo = (ts, now) => {
  const diff = Math.max(0, Math.floor((now - ts) / 1000));
  if (diff < 60) return "just now";
  const mins = Math.floor(diff / 60);
  if (mins < 60) return `${mins}m ago`;
  return `${Math.floor(mins / 60)}h ago`;
};

const stakingFaqs = [
  {
    question: "Is there a minimum to stake?",
    answer: "No strict protocol minimum, though very small stakes may not be gas-efficient.",
    icon: Coins,
    accent: "#60A5FA",
  },
  {
    question: "How long does unstaking take?",
    answer: "CRX enters a 7-day cooldown before it's available in your wallet.",
    icon: Lock,
    accent: "#818cf8",
  },
  {
    question: "Can I lose my stake to slashing?",
    answer: "Validators that go offline or act maliciously are slashed. Delegators share this risk proportionally — choose a reliable validator.",
    icon: Shield,
    accent: "#F87171",
  },
  {
    question: "How often are rewards paid?",
    answer: "Rewards accrue every epoch and can be claimed or auto-compounded anytime.",
    icon: Gift,
    accent: "#34D399",
  },
];

/* ── Reusable tile shell ─────────────────────────────── */
const Tile = ({ span = "col-span-2", className = "", children }) => (
  <div
    className={`relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] ${span} ${className}`}
  >
    {children}
  </div>
);

const StatTile = ({ value, label, accent = "text-white", span }) => (
  <Tile span={span} className="p-5 flex flex-col justify-center">
    <div className={`text-2xl md:text-3xl font-semibold ${accent}`}>{value}</div>
    <div className="mt-1 text-xs text-gray-500">{label}</div>
  </Tile>
);

/* ── Live activity ticker (compact) ──────────────────── */
const LiveActivityTile = () => {
  const [activity, setActivity] = useState(() => {
    const base = Date.now();
    return seedActivity.map((a, i) => ({ ...a, id: `seed-${i}`, timestamp: base - a.minutesAgo * 60000 }));
  });
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const clock = setInterval(() => setNow(Date.now()), 15000);
    return () => clearInterval(clock);
  }, []);

  useEffect(() => {
    const feed = setInterval(() => {
      setActivity((prev) => [randomActivity(), ...prev].slice(0, 5));
    }, 6000);
    return () => clearInterval(feed);
  }, []);

  return (
    <Tile span="col-span-2 sm:col-span-3 md:col-span-3 row-span-2" className="p-5 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
        </span>
        <span className="text-sm font-semibold text-white">Live Activity</span>
      </div>

      <div className="flex-1 space-y-1 overflow-hidden">
        <AnimatePresence initial={false}>
          {activity.map((item) => {
            const meta = activityMeta[item.action];
            const Icon = meta.icon;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-2.5 py-2 border-b border-white/5 last:border-0"
              >
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                  style={{ background: meta.color + "18" }}
                >
                  <Icon size={11} style={{ color: meta.color }} />
                </div>
                <span className="text-xs font-mono text-gray-500 shrink-0">{item.address}</span>
                <span className="text-xs text-white font-medium ml-auto shrink-0">{item.amount}</span>
                <span className="text-[11px] text-gray-600 shrink-0 w-12 text-right">{timeAgo(item.timestamp, now)}</span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </Tile>
  );
};

/* ── Validators (compact) ────────────────────────────── */
const ValidatorsTile = () => (
  <Tile span="col-span-2 sm:col-span-3 md:col-span-3 row-span-2" className="p-5">
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-semibold text-white">Top Validators</span>
      <span className="text-[11px] text-gray-500">by APY</span>
    </div>
    <div className="space-y-3">
      {validators.map((v, i) => {
        const pct = (parseFloat(v.apy) / maxApy) * 100;
        return (
          <div key={v.name} className="flex items-center gap-3">
            <span className="text-xs font-mono text-white/20 w-4 shrink-0">{i + 1}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-300 truncate flex items-center gap-1.5">
                  {v.name}
                  {v.top && <Star size={9} className="text-amber-400 shrink-0" fill="currentColor" />}
                </span>
                <span className="text-xs font-semibold text-blue-400 shrink-0">{v.apy}</span>
              </div>
              <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full bg-blue-400/70" style={{ width: `${pct}%` }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </Tile>
);

/* ── Governance model (compact) ──────────────────────── */
const GovernanceTile = () => (
  <Tile span="col-span-2 sm:col-span-3 md:col-span-3" className="p-5">
    <span className="text-sm font-semibold text-white mb-4 block">Governance Model</span>
    <div className="space-y-3">
      {governanceData.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-blue-500/15 border border-blue-500/30 shrink-0">
              <Icon size={13} className="text-blue-400" />
            </div>
            <span className="text-xs text-gray-300">{item.title}</span>
          </div>
        );
      })}
    </div>
  </Tile>
);

/* ── Calculator (compact) ────────────────────────────── */
const CalculatorTile = () => {
  const [amount, setAmount] = useState("10,000");
  const [term, setTerm] = useState(3);
  const numeric = parseFloat(amount.replace(/,/g, "")) || 0;
  const reward = Math.round(numeric * 0.098 * term);

  return (
    <Tile span="col-span-2 sm:col-span-3 md:col-span-3" className="p-5">
      <span className="text-sm font-semibold text-white mb-4 block">Estimate Rewards</span>

      <div className="flex items-center justify-between border border-white/15 rounded-xl px-4 py-2.5 bg-white/[0.02] mb-3">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="text-sm font-semibold outline-none w-full bg-transparent text-white"
        />
        <span className="text-xs text-gray-500 shrink-0">CRX</span>
      </div>

      <div className="flex gap-1.5 mb-4">
        {[1, 3, 5].map((y) => (
          <button
            key={y}
            onClick={() => setTerm(y)}
            className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              term === y ? "bg-white text-black" : "bg-white/[0.03] text-gray-400 border border-white/10"
            }`}
          >
            {y}Y
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">Est. Rewards</span>
        <span className="text-sm font-semibold text-blue-400">+{reward.toLocaleString()} CRX</span>
      </div>
    </Tile>
  );
};

/* ── My Stake (dashboard preview) ────────────────────── */
const MyStakeTile = () => (
  <Tile span="col-span-2 sm:col-span-3 md:col-span-3 row-span-2" className="p-6 flex flex-col">
    <div className="flex items-center justify-between mb-6">
      <span className="text-sm font-semibold text-white">Your Stake</span>
      <span className="text-[11px] text-gray-500">Wallet not connected</span>
    </div>

    <div className="flex-1 grid grid-cols-2 gap-5 blur-[2px] opacity-40 pointer-events-none select-none">
      <div>
        <div className="text-xl font-semibold text-white">0 CRX</div>
        <div className="text-xs text-gray-500 mt-1">Staked</div>
      </div>
      <div>
        <div className="text-xl font-semibold text-blue-400">0 CRX</div>
        <div className="text-xs text-gray-500 mt-1">Pending Rewards</div>
      </div>
      <div>
        <div className="text-xl font-semibold text-white">9.8%</div>
        <div className="text-xs text-gray-500 mt-1">Your APY</div>
      </div>
      <div>
        <div className="text-xl font-semibold text-white">—</div>
        <div className="text-xs text-gray-500 mt-1">Delegated To</div>
      </div>
    </div>

    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-[#01021f]/50">
      <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-4">
        <Lock size={16} className="text-blue-400" />
      </div>
      <p className="text-sm text-gray-300 mb-5 max-w-[15rem]">Connect your wallet to view your stake</p>
      <button className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transition-all duration-300 hover:scale-105">
        Connect Wallet
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  </Tile>
);

/* ── FAQ (compact accordion) ─────────────────────────── */
const FaqTile = () => {
  const [open, setOpen] = useState(0);

  return (
    <Tile span="col-span-2 sm:col-span-6 md:col-span-6" className="p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-white">Staking Questions</span>
        <a href="/contact/" className="inline-flex items-center gap-1 text-[11px] text-gray-500 hover:text-white transition-colors">
          <HelpCircle size={11} />
          Contact Support
        </a>
      </div>

      <div className="divide-y divide-white/5">
        {stakingFaqs.map((faq, i) => {
          const Icon = faq.icon;
          const isOpen = open === i;
          return (
            <div key={faq.question}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center gap-3 py-3 text-left"
              >
                <Icon size={14} style={{ color: faq.accent }} className="shrink-0" />
                <span className="flex-1 text-xs sm:text-sm text-gray-200">{faq.question}</span>
                <ChevronDown
                  size={14}
                  className="shrink-0 text-gray-600 transition-transform duration-300"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              <div className="grid transition-all duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                <div className="overflow-hidden">
                  <p className="pb-3 pl-[1.65rem] text-xs text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Tile>
  );
};

/* ── Page ─────────────────────────────────────────────── */
const Staking = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="bg-gradient-to-br from-indigo-950 via-indigo-950/40 to-black pt-32 pb-16">
        <div className="px-6 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                Governance
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl text-white font-semibold leading-tight">
              CRX Staking
            </h1>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl">
              Cryptrix uses a delegated proof-of-stake consensus. CRX holders
              can secure the network and shape its governance while earning
              rewards up to{" "}
              <span className="text-white font-medium">9.8% APY</span>.
            </p>

            <button
              type="button"
              className="inline-flex w-fit items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Connect Wallet
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              src="https://media.istockphoto.com/id/2217121589/photo/gen-z-female-investor-working-on-defi-projects-crypto-staking-research-decentralized-finance.webp?a=1&b=1&s=612x612&w=0&k=20&c=ikP47Hz2pAGk7K3XEi5WLeyGYHGTJDVzmo_UwSLUEcs="
              alt="Staking"
              className="w-full max-w-md h-64 sm:h-72 md:h-80 object-cover opacity-80 [mask-image:linear-gradient(to_left,transparent,black_15%,black_75%,transparent)] [-webkit-mask-image:linear-gradient(to_left,transparent,black_15%,black_75%,transparent)]"
            />
          </div>
        </div>
      </section>

      {/* ───────── Bento dashboard ───────── */}
      <section className="relative py-16 border-t border-white/10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div
          className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 auto-rows-[minmax(120px,auto)] gap-4"
          style={{ gridAutoFlow: "dense" }}
        >
          <MyStakeTile />
          <StatTile span="col-span-1 sm:col-span-2 md:col-span-1" value="9.8%" label="Highest APY" accent="text-blue-400" />
          <StatTile span="col-span-1 sm:col-span-2 md:col-span-2" value="182.4M" label="CRX Staked" />
          <StatTile span="col-span-1 sm:col-span-2 md:col-span-1" value="61.5%" label="Staking Rate" />
          <StatTile span="col-span-1 sm:col-span-4 md:col-span-2" value="$420M+" label="Rewards Distributed" accent="text-emerald-400" />

          <LiveActivityTile />
          <ValidatorsTile />

          <GovernanceTile />
          <CalculatorTile />

          <FaqTile />

          {/* CTA strip */}
          <Tile span="col-span-2 sm:col-span-6 md:col-span-6" className="p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <h2 className="text-lg font-semibold text-white">Ready to participate in governance?</h2>
              <p className="text-sm text-gray-400 mt-1">Stake your CRX and help shape Cryptrix's future.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Stake CRX Now
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => navigate("/voting")}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-white/20 text-white text-xs font-semibold rounded-full transition-all duration-300 hover:border-white/40"
              >
                View Governance
              </button>
            </div>
          </Tile>
        </div>
      </section>
    </div>
  );
};

export default Staking;

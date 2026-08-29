import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Terminal,
  ShieldCheck,
  Zap,
  Package,
  FileCode2,
  Cpu,
  GitBranch,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Check,
  Wrench,
  FlaskConical,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "EVM Compatible",
    desc: "Fully EVM compatible — connect with MetaMask and existing Solidity tooling by adding the Cryptrix RPC and chain ID.",
    href: "/docs/contracts",
  },
  {
    icon: Zap,
    title: "Near-Zero Gas",
    desc: "An average transaction costs about $0.0027 — deploy and iterate without gas being the bottleneck.",
    href: "/token/tokenomics",
  },
  {
    icon: ShieldCheck,
    title: "Audited & Open Source",
    desc: "Core contracts go through independent security review before mainnet release, with an ongoing public bug bounty.",
    href: "/security",
  },
  {
    icon: Package,
    title: "SDKs & Tooling",
    desc: "Official Rust and TypeScript SDKs, plus community-maintained tools for testing, deployment, and verification.",
    href: "/docs/sdk",
  },
];

// Illustrative platform stats — aggregate marketing figures, not a single user's data
const platformStats = [
  { label: "Contracts Deployed", value: "128,400+" },
  { label: "Avg. Gas Cost", value: "$0.0027" },
  { label: "Contracts Audited", value: "42" },
  { label: "Avg. Deploy Time", value: "0.9s" },
];

// Avg. cost to deploy + interact with a standard ERC-20-style contract — illustrative comparison
const gasComparison = [
  { chain: "Cryptrix", cost: 0.0027, color: "#60A5FA", highlight: true },
  { chain: "Ethereum L1", cost: 4.85, color: "#818cf8" },
  { chain: "Other L2s", cost: 0.42, color: "#818cf8" },
  { chain: "Legacy L1s", cost: 1.2, color: "#818cf8" },
];
const maxGasCost = Math.max(...gasComparison.map((g) => g.cost));

const compatibleTools = ["MetaMask", "Hardhat", "Foundry", "Remix", "OpenZeppelin", "Ethers.js", "Wagmi", "Viem"];

// Illustrative recent verification feed — public, aggregate activity
const recentlyVerified = [
  { name: "CRXStaking.sol", address: "0x7a3f...92c1", type: "Staking", time: "2m ago" },
  { name: "MeridianVault.sol", address: "0xb14e...d403", type: "DeFi", time: "6m ago" },
  { name: "Wovenlight.sol", address: "0x2c9a...6f18", type: "NFT", time: "11m ago" },
  { name: "GovernorV2.sol", address: "0xf051...3ab7", type: "DAO", time: "18m ago" },
];

const templates = [
  { icon: FileCode2, title: "NFT Contract", desc: "Mint, transfer, and manage on-chain collectibles.", href: "/docs/contracts" },
  { icon: Code2, title: "DeFi Contract", desc: "Swaps, pools, and other DeFi primitives.", href: "/docs/contracts" },
  { icon: GitBranch, title: "DAO Contract", desc: "Governance and treasury logic for on-chain orgs.", href: "/docs/contracts" },
];

const steps = [
  { title: "Write", desc: "Author your contract in Solidity using standard EVM tooling." },
  { title: "Test", desc: "Unit tests, integration tests, and simulation before anything touches mainnet." },
  { title: "Deploy", desc: "Ship to testnet first, then mainnet — confirmed in under a second." },
  { title: "Verify", desc: "Publish source so anyone can confirm what's actually running on-chain." },
];

const codeLines = [
  [{ t: "kw", v: "pragma" }, { t: "d", v: " solidity " }, { t: "s", v: "^0.8.20" }, { t: "d", v: ";" }],
  [],
  [{ t: "kw", v: "contract" }, { t: "d", v: " " }, { t: "ty", v: "CRXToken" }, { t: "d", v: " {" }],
  [{ t: "d", v: "  " }, { t: "kw", v: "mapping" }, { t: "d", v: "(" }, { t: "ty", v: "address" }, { t: "d", v: " => " }, { t: "ty", v: "uint256" }, { t: "d", v: ") " }, { t: "kw", v: "public" }, { t: "d", v: " balanceOf;" }],
  [],
  [{ t: "d", v: "  " }, { t: "kw", v: "function" }, { t: "d", v: " " }, { t: "fn", v: "transfer" }, { t: "d", v: "(" }, { t: "ty", v: "address" }, { t: "d", v: " to, " }, { t: "ty", v: "uint256" }, { t: "d", v: " amount) " }, { t: "kw", v: "external" }, { t: "d", v: " {" }],
  [{ t: "d", v: "    " }, { t: "kw", v: "require" }, { t: "d", v: "(balanceOf[" }, { t: "kw", v: "msg" }, { t: "d", v: ".sender] >= amount, " }, { t: "s", v: '"Insufficient balance"' }, { t: "d", v: ");" }],
  [{ t: "d", v: "    balanceOf[" }, { t: "kw", v: "msg" }, { t: "d", v: ".sender] -= amount;" }],
  [{ t: "d", v: "    balanceOf[to] += amount;" }],
  [{ t: "d", v: "  }" }],
  [{ t: "d", v: "}" }],
];

const tokenColor = {
  kw: "text-purple-400",
  ty: "text-blue-400",
  s: "text-emerald-400",
  fn: "text-amber-300",
  d: "text-gray-300",
};

/* Ambient 3D ring visual — decorative hero accent, orbiting rings around a floating contract icon */
const ContractOrb = () => (
  <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 pointer-events-none" style={{ perspective: "900px" }}>
    <div className="absolute inset-0 rounded-full bg-indigo-500/25 blur-[70px] animate-pulse-slow" />
    <div className="absolute inset-0 preserve-3d animate-spin-3d">
      <div className="absolute inset-6 rounded-full border-2 border-indigo-400/40" style={{ transform: "rotateX(70deg)" }} />
      <div className="absolute inset-12 rounded-full border-2 border-blue-400/30" style={{ transform: "rotateX(70deg) rotateZ(60deg)" }} />
      <div className="absolute inset-[4.5rem] rounded-full border border-white/20" style={{ transform: "rotateX(70deg) rotateZ(120deg)" }} />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-indigo-500/50 animate-float-slow">
        <FileCode2 size={30} className="text-white" />
      </div>
    </div>
  </div>
);

/* Cluster of small isometric cubes, assembled like a crystal — ambient section background */
const cubeClusterLayout = [
  { size: 30, top: "8%", left: "12%", delay: "0s", tone: "from-indigo-400/40 to-blue-500/10" },
  { size: 20, top: "58%", left: "4%", delay: "0.5s", tone: "from-blue-400/30 to-indigo-500/10" },
  { size: 24, top: "2%", left: "68%", delay: "1s", tone: "from-indigo-300/30 to-blue-400/10" },
  { size: 18, top: "70%", left: "82%", delay: "1.4s", tone: "from-blue-300/30 to-indigo-400/10" },
  { size: 36, top: "28%", left: "42%", delay: "0.2s", tone: "from-indigo-400/50 to-blue-500/20" },
  { size: 16, top: "40%", left: "88%", delay: "0.9s", tone: "from-blue-300/25 to-indigo-400/10" },
];

const FloatingCubeCluster = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: "800px" }}>
    {cubeClusterLayout.map((c, i) => (
      <div
        key={i}
        className={`absolute rounded-lg border border-white/15 bg-gradient-to-br ${c.tone} backdrop-blur-sm animate-float-slow`}
        style={{
          width: c.size,
          height: c.size,
          top: c.top,
          left: c.left,
          transform: "rotateX(50deg) rotateZ(45deg)",
          animationDelay: c.delay,
        }}
      />
    ))}
  </div>
);

/* Small spinning 2-face cube — used as a 3D icon badge on template cards */
const MiniCube = ({ icon, size = 40 }) => {
  const Icon = icon;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size, perspective: "300px" }}>
      <div className="absolute inset-0 preserve-3d animate-spin-slow">
        <div className="absolute inset-0 rounded-xl backface-hidden flex items-center justify-center bg-gradient-to-br from-indigo-500/25 to-blue-500/10 border border-indigo-500/30">
          <Icon size={Math.round(size * 0.42)} className="text-blue-400" />
        </div>
        <div
          className="absolute inset-0 rounded-xl backface-hidden bg-gradient-to-br from-blue-500/20 to-indigo-600/10 border border-white/10"
          style={{ transform: "rotateY(180deg)" }}
        />
      </div>
    </div>
  );
};

const SmartContracts = () => {
  const [copied, setCopied] = useState(false);

  const copySnippet = async () => {
    const text = codeLines.map((line) => line.map((t) => t.v).join("")).join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — fail silently
    }
  };

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative px-6 sm:px-12 lg:px-24 pt-32 pb-20 border-b border-white/10 overflow-hidden">
        {/* Full-bleed background visual */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?w=1800&q=70&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#01021f] via-[#01021f]/90 to-[#01021f]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#01021f] via-transparent to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 w-fit mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                Product / Smart Contracts
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
              Build and deploy smart contracts.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-lg">
              Fully EVM compatible, near-zero gas, and independently audited
              — write in Solidity, deploy with the tools you already know.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/docs/contracts"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
              >
                Read the Docs
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/wallets"
                className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
              >
                Get a Wallet
              </Link>
            </div>
          </div>

          {/* Code editor mockup, floating in front of an ambient 3D ring */}
          <div className="relative">
            <div className="absolute -inset-10 flex items-center justify-center -z-10">
              <ContractOrb />
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#05060f] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <span className="text-[11px] font-mono text-gray-500">CRXToken.sol</span>
              <button
                type="button"
                onClick={copySnippet}
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Copy code"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
            <pre className="p-5 overflow-x-auto text-xs sm:text-[13px] leading-relaxed font-mono">
              {codeLines.map((line, i) => (
                <div key={i} className="flex">
                  <span className="select-none text-gray-700 w-6 shrink-0">{i + 1}</span>
                  <span>
                    {line.map((tok, j) => (
                      <span key={j} className={tokenColor[tok.t]}>
                        {tok.v}
                      </span>
                    ))}
                    {line.length === 0 && " "}
                  </span>
                </div>
              ))}
            </pre>
          </div>
          </div>
        </div>

        {/* Platform stats strip */}
        <div className="relative max-w-6xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {platformStats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl px-5 py-4"
            >
              <div className="text-xl sm:text-2xl font-semibold text-white font-mono">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Features + gas comparison ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-14">
          {/* Numbered feature list with learn-more links */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                Why Build Here
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-10">
              What developers actually need
            </h2>

            <div className="space-y-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex gap-5">
                    <div className="shrink-0 flex flex-col items-center">
                      <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
                        <Icon size={19} className="text-blue-400" />
                      </div>
                      {i < features.length - 1 && (
                        <span className="mt-2 flex-1 w-px bg-white/10" />
                      )}
                    </div>
                    <div className="pb-2">
                      <span className="text-[11px] font-mono text-gray-600">
                        0{i + 1}
                      </span>
                      <h3 className="text-base font-semibold text-white mt-1 mb-2">
                        {f.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                        {f.desc}
                      </p>
                      <Link
                        to={f.href}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-white transition-colors"
                      >
                        Learn more
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gas cost comparison panel */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
              <div className="flex items-center gap-2 mb-1">
                <Zap size={15} className="text-blue-400" />
                <h3 className="text-sm font-semibold text-white">
                  Avg. Cost per Transaction
                </h3>
              </div>
              <p className="text-xs text-gray-500 mb-6">
                Illustrative comparison, a standard token transfer
              </p>
              <div className="space-y-5">
                {gasComparison.map((g) => (
                  <div key={g.chain}>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className={g.highlight ? "text-white font-medium" : "text-gray-400"}>
                        {g.chain}
                      </span>
                      <span className={`font-mono ${g.highlight ? "text-blue-300 font-semibold" : "text-gray-400"}`}>
                        ${g.cost.toFixed(4)}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(g.cost / maxGasCost) * 100}%`,
                          background: g.highlight
                            ? "linear-gradient(90deg, #60A5FA, #818cf8)"
                            : g.color,
                          opacity: g.highlight ? 1 : 0.5,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/5 flex items-start gap-2 text-xs text-gray-500">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                Up to ~1,800x cheaper than Ethereum L1 on a like-for-like transfer.
              </div>
            </div>

            {/* Compatible tooling chips */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Wrench size={15} className="text-blue-400" />
                <h3 className="text-sm font-semibold text-white">
                  Works with your existing tools
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {compatibleTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Connected network ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=75&auto=format&fit=crop"
              alt="A visualization of connected blockchain nodes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#01021f]/60 via-transparent to-transparent" />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 w-fit mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                Live Network
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
              Every contract runs on a real, decentralized network.
            </h2>
            <p className="mt-5 text-gray-400 leading-relaxed max-w-md">
              No single point of failure. Deployed code is replicated and
              verified across independent validators worldwide before it's
              ever considered final.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4">
                <div className="text-lg font-semibold text-white font-mono">128 / 133</div>
                <div className="mt-1 text-xs text-gray-500">Active Validators</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4">
                <div className="text-lg font-semibold text-white font-mono">0.92s</div>
                <div className="mt-1 text-xs text-gray-500">Block Time</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4">
                <div className="text-lg font-semibold text-white font-mono">~542</div>
                <div className="mt-1 text-xs text-gray-500">TPS (live)</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4">
                <div className="text-lg font-semibold text-white font-mono">8,234,211</div>
                <div className="mt-1 text-xs text-gray-500">Block Height</div>
              </div>
            </div>

            <Link
              to="/status"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              View live network status
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Recently verified ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-8">
            <FlaskConical size={16} className="text-blue-400" />
            <h2 className="text-lg font-semibold text-white">
              Recently verified contracts
            </h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Contract</th>
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Address</th>
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Type</th>
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5 text-right">Verified</th>
                </tr>
              </thead>
              <tbody>
                {recentlyVerified.map((c) => (
                  <tr key={c.address} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-5 text-sm font-medium text-white font-mono whitespace-nowrap">{c.name}</td>
                    <td className="py-3.5 px-5 text-xs font-mono text-gray-400">{c.address}</td>
                    <td className="py-3.5 px-5 text-xs text-gray-400">{c.type}</td>
                    <td className="py-3.5 px-5 text-xs text-emerald-400 text-right whitespace-nowrap flex items-center justify-end gap-1.5">
                      <CheckCircle2 size={12} />
                      {c.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <Link
              to="/explorer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              View all in Explorer
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Templates ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-64 opacity-70">
          <FloatingCubeCluster />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-lg font-semibold text-white mb-8">
            Start from a template
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {templates.map((t) => (
              <Link
                key={t.title}
                to={t.href}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
              >
                <MiniCube icon={t.icon} size={40} />
                <div>
                  <h3 className="text-sm font-semibold text-white flex items-center gap-1.5">
                    {t.title}
                    <ArrowUpRight
                      size={13}
                      className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Deploy in 4 steps ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-10">
            <Terminal size={16} className="text-blue-400" />
            <h2 className="text-lg font-semibold text-white">
              From code to mainnet in four steps
            </h2>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-white/10" />
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="relative z-10 mx-auto w-12 h-12 mb-4" style={{ perspective: "200px" }}>
                  <div
                    className="absolute inset-1.5 rounded-md bg-gradient-to-br from-indigo-500/25 to-blue-500/10 border border-indigo-500/40 flex items-center justify-center animate-float-slow"
                    style={{ transform: "rotateX(15deg) rotateZ(45deg)", animationDelay: `${i * 0.3}s` }}
                  >
                    <span
                      className="text-xs font-mono text-blue-300"
                      style={{ transform: "rotateZ(-45deg)" }}
                    >
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Closing CTA ───────── */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-6">
            <CheckCircle2 size={13} className="text-emerald-400" />
            Open-source core contracts, independently audited
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Ready to ship your contract?
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            Read the developer docs, or apply for a grant to fund your
            protocol's build.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/docs/contracts"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Read the Docs
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/grants"
              className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Apply for a Grant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartContracts;

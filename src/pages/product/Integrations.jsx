import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wallet,
  Server,
  Wrench,
  Radio,
  Link2,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  Copy,
  Check,
  Plus,
  Download,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const networkConfig = [
  { label: "Network Name", value: "Cryptrix Mainnet" },
  { label: "RPC URL", value: "https://rpc.cryptrix.io" },
  { label: "Chain ID", value: "7777" },
  { label: "Currency Symbol", value: "CRX" },
  { label: "Block Explorer", value: "https://explorer.cryptrix.io" },
];

const categories = [
  {
    icon: Wallet,
    title: "Wallets",
    desc: "Any wallet that supports custom EVM networks connects by adding the Cryptrix RPC — no extension or plugin needed.",
    examples: ["MetaMask", "Trust Wallet", "Coinbase Wallet", "Ledger", "Rabby"],
  },
  {
    icon: Server,
    title: "Node & RPC Infrastructure",
    desc: "Run your own node or point standard JSON-RPC infra at Cryptrix the same way you would any EVM chain.",
    examples: ["Self-hosted node", "Docker image", "JSON-RPC 2.0", "WebSocket streams"],
  },
  {
    icon: Wrench,
    title: "Developer Tooling",
    desc: "Compile, test, and deploy with the Solidity toolchain you already have installed.",
    examples: ["Hardhat", "Foundry", "Remix", "OpenZeppelin", "Ethers.js", "Viem"],
  },
  {
    icon: Radio,
    title: "Oracles & Data Feeds",
    desc: "Bring off-chain price feeds and external data on-chain through standard oracle contract interfaces.",
    examples: ["Price feed contracts", "VRF-style randomness", "Custom data adapters"],
  },
  {
    icon: Link2,
    title: "Bridges & Interoperability",
    desc: "Move assets and messages between Cryptrix and other EVM and non-EVM chains through the native bridge.",
    examples: ["Native token bridge", "Cross-chain messaging", "Wrapped assets"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Explorers",
    desc: "Index chain data with the same tooling used for any EVM chain — blocks, logs, and traces are all standard.",
    examples: ["Cryptrix Explorer API", "Log/event indexing", "Custom dashboards"],
  },
];

const steps = [
  {
    icon: Plus,
    title: "Add the network",
    desc: "Point your wallet, node, or indexer at the Cryptrix RPC endpoint and chain ID below.",
  },
  {
    icon: Download,
    title: "Install the SDK",
    desc: "Pull in the official Rust or TypeScript SDK, or just use your existing Ethers.js / Viem setup.",
  },
  {
    icon: Rocket,
    title: "Go live",
    desc: "Ship to testnet first to confirm everything works, then point the same config at mainnet.",
  },
];

const CopyField = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — fail silently
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 py-3.5 px-5 border-b border-white/5 last:border-0">
      <div>
        <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">
          {label}
        </div>
        <div className="text-sm font-mono text-white break-all">{value}</div>
      </div>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 text-gray-500 hover:text-white transition-colors"
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
      </button>
    </div>
  );
};

const Integrations = () => {
  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative px-6 sm:px-12 lg:px-24 pt-32 pb-20 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 w-fit mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Product / Integrations
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            Connect the tools you already use.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl">
            Cryptrix is fully EVM compatible — wallets, node infrastructure,
            developer tooling, and indexers all connect the same way they
            would to any EVM chain. No custom plugins required.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/docs"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Read the Docs
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/grants"
              className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Apply to Integrate
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Network config ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
              Add Cryptrix in under a minute.
            </h2>
            <p className="mt-5 text-gray-400 leading-relaxed max-w-md">
              Copy the network parameters into your wallet's "Add Network"
              form, or drop them straight into your node config, RPC
              provider, or indexer — same fields, every time.
            </p>
            <div className="mt-8 flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={14} className="text-emerald-400" />
              These are the same public parameters used across the network —
              nothing here requires trusting a third party.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
            {networkConfig.map((f) => (
              <CopyField key={f.label} label={f.label} value={f.value} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Categories ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                Compatible By Default
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Every category, day one
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {c.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.examples.map((ex) => (
                      <span
                        key={ex}
                        className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] text-gray-400"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── How it works ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-lg font-semibold text-white mb-10">
            Three steps, start to finish
          </h2>

          <div className="relative grid sm:grid-cols-3 gap-6">
            <div className="hidden sm:block absolute top-6 left-[16.5%] right-[16.5%] h-px bg-white/10" />
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative text-center">
                  <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-[#01021f] border border-white/15 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-[220px] mx-auto">
                    {step.desc}
                  </p>
                </div>
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
            Building an integration for Cryptrix?
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            Apply for a grant to fund the build, or read the docs to get your
            first request working against testnet today.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/grants"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Apply for a Grant
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;

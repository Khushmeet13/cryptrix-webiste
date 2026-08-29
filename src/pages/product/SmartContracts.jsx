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
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "EVM Compatible",
    desc: "Fully EVM compatible — connect with MetaMask and existing Solidity tooling by adding the Cryptrix RPC and chain ID.",
  },
  {
    icon: Zap,
    title: "Near-Zero Gas",
    desc: "An average transaction costs about $0.0027 — deploy and iterate without gas being the bottleneck.",
  },
  {
    icon: ShieldCheck,
    title: "Audited & Open Source",
    desc: "Core contracts go through independent security review before mainnet release, with an ongoing public bug bounty.",
  },
  {
    icon: Package,
    title: "SDKs & Tooling",
    desc: "Official Rust and TypeScript SDKs, plus community-maintained tools for testing, deployment, and verification.",
  },
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
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

          {/* Code editor mockup */}
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
      </section>

      {/* ───────── Features ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                Why Build Here
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              What developers actually need
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Templates ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-lg font-semibold text-white mb-8">
            Start from a template
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {templates.map((t) => {
              const Icon = t.icon;
              return (
                <Link
                  key={t.title}
                  to={t.href}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-blue-400" />
                  </div>
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
              );
            })}
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
                <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-[#01021f] border border-white/15 flex items-center justify-center mb-4">
                  <span className="text-sm font-mono text-blue-400">{i + 1}</span>
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

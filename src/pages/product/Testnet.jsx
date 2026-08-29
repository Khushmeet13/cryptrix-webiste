import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FlaskConical,
  Wallet,
  Bug,
  Repeat,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Info,
  Check,
  X,
  Droplet,
  ShieldCheck,
  Zap,
  Clock,
  Copy,
  BookOpen,
  Users,
  Compass,
  HelpCircle,
} from "lucide-react";

const TESTNET_URL = "https://testnet.cryptrixchain.io";

const trustBadges = ["No sign-up", "Free, always", "Delivered in ~10s"];

const stats = [
  { label: "Testnet Uptime", value: "99.99%" },
  { label: "Avg. Latency", value: "61ms" },
  { label: "Faucet Amount", value: "100 CRX" },
  { label: "Faucet Cooldown", value: "24h" },
];

const testnetConfig = [
  { label: "Network Name", value: "Cryptrix Testnet" },
  { label: "RPC URL", value: "https://rpc.testnet.cryptrixchain.io" },
  { label: "Chain ID", value: "77771" },
  { label: "Currency Symbol", value: "CRX" },
  { label: "Block Explorer", value: "https://testnet.cryptrixchain.io/explorer" },
];

// Illustrative recent faucet activity — public, aggregate feed, not personal history
const recentClaims = [
  { address: "0x7a3f...92c1", amount: "100 CRX", time: "48s ago" },
  { address: "0xb14e...d403", amount: "100 CRX", time: "3m ago" },
  { address: "0x2c9a...6f18", amount: "100 CRX", time: "6m ago" },
  { address: "0xf051...3ab7", amount: "100 CRX", time: "11m ago" },
];

const howItWorks = [
  { title: "Paste or connect", desc: "Paste your testnet wallet address, or connect your wallet directly." },
  { title: "Request tokens", desc: "One request per wallet, every 24 hours — no sign-up, no captcha maze." },
  { title: "Start building", desc: "Test CRX lands in seconds, ready for contract deploys and transactions." },
];

const features = [
  { icon: Droplet, title: "Free Test Tokens", desc: "Request test CRX from the faucet — no real value, no risk, reset anytime." },
  { icon: Repeat, title: "Deploy Safely", desc: "Ship and iterate on contracts before a single line touches mainnet." },
  { icon: Bug, title: "Debug Before Mainnet", desc: "Simulate transactions and trace execution to catch issues early." },
  { icon: Wallet, title: "Same Wallet Flow", desc: "Connect the same wallet and tooling you already use — just point it at testnet." },
];

const comparison = [
  { feature: "Token value", testnet: "None — for testing only", mainnet: "Real CRX" },
  { feature: "Network", testnet: "testnet.cryptrixchain.io", mainnet: "Native Cryptrix Mainnet" },
  { feature: "State resets", testnet: "Periodically, with notice", mainnet: "Never" },
  { feature: "Faucet access", testnet: true, mainnet: false },
  { feature: "Contract deployment", testnet: true, mainnet: true },
  { feature: "Real transaction cost", testnet: false, mainnet: true },
];

const resourceLinks = [
  { icon: BookOpen, title: "Testnet Docs", desc: "Setup guides and RPC reference.", href: "/docs/testnet" },
  { icon: Compass, title: "Testnet Explorer", desc: "Browse live testnet blocks and txns.", href: "/explorer" },
  { icon: Users, title: "Community", desc: "Ask questions, share what you're building.", href: "/community" },
];

const CopyRow = ({ label, value }) => {
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
        <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">{label}</div>
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

const Testnet = () => {
  const [address, setAddress] = useState("");
  const [requested, setRequested] = useState(false);
  const [connected, setConnected] = useState(false);

  const connectWallet = () => {
    setConnected(true);
    setAddress("0x7a3f...92c1");
  };

  const requestTokens = (e) => {
    e.preventDefault();
    if (!address) return;
    setRequested(true);
  };

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative px-6 sm:px-12 lg:px-24 pt-32 pb-16 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Product / Testnet
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            Test on Cryptrix, without spending real CRX.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
            Same network, same tooling, zero risk — deploy, break things, and
            fix them before mainnet.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={TESTNET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Launch Testnet
              <ExternalLink size={15} />
            </a>
            <Link
              to="/docs/testnet"
              className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Read the Docs
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {trustBadges.map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs text-gray-500">
                <Check size={13} className="text-emerald-400" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Bento layout ───────── */}
      <section className="relative py-16 md:py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
            {/* Faucet — large primary tile */}
            <div className="col-span-2 md:col-span-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Droplet size={16} className="text-blue-400" />
                  <h2 className="text-sm font-semibold text-white">Testnet Faucet</h2>
                </div>
                <span className="flex items-center gap-1 text-[11px] font-medium text-gray-500">
                  <Clock size={12} />
                  100 CRX / 24h
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-5">
                Connect a wallet, or paste an address — one request per
                wallet every 24 hours.
              </p>

              {!connected ? (
                <button
                  type="button"
                  onClick={connectWallet}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-white/15 text-white text-sm font-medium hover:border-white/30 hover:bg-white/[0.03] transition-all duration-300 mb-3"
                >
                  <Wallet size={15} />
                  Connect Wallet
                </button>
              ) : (
                <div className="flex items-center gap-2 mb-3 px-4 py-3 rounded-full border border-emerald-500/30 bg-emerald-500/[0.06] text-xs text-emerald-300">
                  <Check size={14} />
                  Wallet connected — {address}
                </div>
              )}

              <div className="flex items-center gap-3 mb-3 text-[11px] text-gray-600">
                <span className="flex-1 h-px bg-white/10" />
                or paste an address
                <span className="flex-1 h-px bg-white/10" />
              </div>

              <form onSubmit={requestTokens} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your testnet wallet address (0x...)"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setConnected(false);
                  }}
                  className="flex-1 px-4 py-3 rounded-full border border-white/15 bg-white/[0.03] text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-all duration-300 shrink-0"
                >
                  Request Tokens
                </button>
              </form>

              {requested && (
                <p className="mt-3 text-xs text-emerald-400">
                  Request queued — this is a UI preview, not a live faucet.
                </p>
              )}

              <div className="mt-5 flex items-start gap-2 text-xs text-gray-500">
                <ShieldCheck size={13} className="text-blue-400 shrink-0 mt-0.5" />
                Rate-limited per wallet to keep the faucet available for
                everyone — no CAPTCHA, no social-post requirement.
              </div>
              <div className="mt-2 flex items-start gap-2 text-xs text-gray-500">
                <Info size={13} className="text-amber-400 shrink-0 mt-0.5" />
                This is a UI preview — request real test CRX at{" "}
                <a href={TESTNET_URL} target="_blank" rel="noopener noreferrer" className="underline">
                  testnet.cryptrixchain.io
                </a>
                .
              </div>
            </div>

            {/* Recent claims feed — tall side tile */}
            <div className="col-span-2 md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={14} className="text-blue-400" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Recent Faucet Claims
                </h3>
              </div>
              <div className="space-y-3.5">
                {recentClaims.map((c, i) => (
                  <div key={i} className="flex items-center justify-between text-xs gap-2">
                    <div>
                      <div className="font-mono text-gray-300">{c.address}</div>
                      <div className="text-[10px] text-gray-600 mt-0.5">{c.time}</div>
                    </div>
                    <span className="font-mono text-white shrink-0">{c.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats recap — mini 2x2 */}
            <div className="col-span-2 md:col-span-3 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                At a glance
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-lg font-semibold text-white font-mono">{s.value}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why test — explainer */}
            <div className="col-span-2 md:col-span-3 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <HelpCircle size={15} className="text-blue-400" />
                <h3 className="text-sm font-semibold text-white">
                  Why test before mainnet?
                </h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                A testnet behaves like mainnet — same consensus, same EVM
                execution, same tooling — but its tokens carry no real value
                and its state can reset. It's the safe place to find bugs
                and rehearse a deployment first.
              </p>
            </div>

            {/* How it works — full width */}
            <div className="col-span-2 md:col-span-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 md:p-8">
              <h3 className="text-sm font-semibold text-white mb-8 text-center">
                How the faucet works
              </h3>
              <div className="relative grid sm:grid-cols-3 gap-6">
                <div className="hidden sm:block absolute top-6 left-[16.5%] right-[16.5%] h-px bg-white/10" />
                {howItWorks.map((step, i) => (
                  <div key={step.title} className="relative text-center">
                    <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-[#01021f] border border-white/15 flex items-center justify-center mb-4">
                      <span className="text-sm font-mono text-blue-400">{i + 1}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-[220px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature tiles */}
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="col-span-2 md:col-span-3 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}

            {/* Network config — full width */}
            <div className="col-span-2 md:col-span-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
              <div className="p-6 md:p-8 pb-4 flex items-center gap-2">
                <Compass size={15} className="text-blue-400" />
                <h3 className="text-sm font-semibold text-white">
                  Point your tools at testnet
                </h3>
              </div>
              {testnetConfig.map((f) => (
                <CopyRow key={f.label} label={f.label} value={f.value} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Testnet vs Mainnet ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-8">
            <FlaskConical size={16} className="text-blue-400" />
            <h2 className="text-lg font-semibold text-white">
              Testnet vs. Mainnet
            </h2>
          </div>

          <div className="border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Feature</th>
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Testnet</th>
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Mainnet</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={`${i % 2 === 1 ? "bg-white/[0.015]" : ""} border-b border-white/5 last:border-0`}>
                    <td className="py-4 px-5 text-sm font-medium text-white whitespace-nowrap">{row.feature}</td>
                    <td className="py-4 px-5 text-sm text-gray-400">
                      {typeof row.testnet === "boolean" ? (
                        row.testnet ? <Check size={15} className="text-emerald-400" /> : <X size={15} className="text-rose-400" />
                      ) : (
                        row.testnet
                      )}
                    </td>
                    <td className="py-4 px-5 text-sm text-gray-400">
                      {typeof row.mainnet === "boolean" ? (
                        row.mainnet ? <Check size={15} className="text-emerald-400" /> : <X size={15} className="text-rose-400" />
                      ) : (
                        row.mainnet
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ───────── Resources ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-lg font-semibold text-white mb-8">
            Keep going
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {resourceLinks.map((r) => {
              const Icon = r.icon;
              return (
                <Link
                  key={r.title}
                  to={r.href}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white flex items-center gap-1.5">
                      {r.title}
                      <ArrowUpRight
                        size={13}
                        className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">{r.desc}</p>
                  </div>
                </Link>
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
            Ready to test your build?
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            Connect your wallet to testnet, grab some test CRX, and start
            shipping — mainnet-ready when you are.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={TESTNET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Launch Testnet
              <ExternalLink size={15} />
            </a>
            <Link
              to="/smart-contracts"
              className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Smart Contracts
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testnet;

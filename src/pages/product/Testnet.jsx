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
} from "lucide-react";

const TESTNET_URL = "https://testnet.cryptrixchain.io";

const stats = [
  { label: "Testnet Uptime", value: "99.99%" },
  { label: "Avg. Latency", value: "61ms" },
  { label: "Faucet Amount", value: "100 CRX" },
  { label: "Faucet Cooldown", value: "24h" },
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

const Testnet = () => {
  const [address, setAddress] = useState("");
  const [requested, setRequested] = useState(false);

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

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mt-10">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
                <p className="text-xl font-semibold text-white font-mono">{s.value}</p>
                <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Faucet ───────── */}
      <section className="relative py-16 md:py-20 border-b border-white/10">
        <div className="max-w-xl mx-auto px-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <Droplet size={16} className="text-blue-400" />
              <h2 className="text-sm font-semibold text-white">Testnet Faucet</h2>
            </div>
            <p className="text-xs text-gray-500 mb-5">
              Get 100 test CRX per wallet, once every 24 hours.
            </p>

            <form onSubmit={requestTokens} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                required
                placeholder="Your testnet wallet address (0x...)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
              <Info size={13} className="text-amber-400 shrink-0 mt-0.5" />
              This faucet preview illustrates the flow — request real test
              CRX at{" "}
              <a href={TESTNET_URL} target="_blank" rel="noopener noreferrer" className="underline">
                testnet.cryptrixchain.io
              </a>
              .
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Features ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-lg font-semibold text-white mb-8">
            What you can do on testnet
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
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

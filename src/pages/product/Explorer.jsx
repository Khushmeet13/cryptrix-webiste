import React from "react";
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
} from "lucide-react";

const EXPLORER_URL = "https://explorer.cryptrixchain.io";

const networkStats = [
  { label: "Block Height", value: "8,234,211" },
  { label: "Avg. Block Time", value: "0.92s" },
  { label: "Active Validators", value: "128 / 133" },
  { label: "TPS (live)", value: "~542" },
];

// Illustrative demo data — not live blocks
const recentBlocks = [
  { height: 8234211, proposer: "Meridian Node", txs: 214, time: "2s ago" },
  { height: 8234210, proposer: "Northstar Validators", txs: 189, time: "3s ago" },
  { height: 8234209, proposer: "Apex Chain Ops", txs: 231, time: "4s ago" },
  { height: 8234208, proposer: "Blockwave Infrastructure", txs: 176, time: "5s ago" },
  { height: 8234207, proposer: "Meridian Node", txs: 198, time: "6s ago" },
];

// Illustrative demo data — not live transactions
const recentTx = [
  { hash: "0x8f2a...c91d", from: "0x7a3f...92c1", to: "0xb14e...d403", amount: "5,200 CRX", status: "Success" },
  { hash: "0x1c7e...44af", from: "0x2c9a...6f18", to: "0xf051...3ab7", amount: "900 CRX", status: "Success" },
  { hash: "0x9be0...2210", from: "0x91dd...77ea", to: "0x33fc...8a02", amount: "184 CRX", status: "Success" },
  { hash: "0x4ad3...bb17", from: "0x60ee...11cd", to: "0x7a3f...92c1", amount: "2,000 CRX", status: "Success" },
];

const features = [
  { icon: Boxes, title: "Blocks & Transactions", desc: "Every block, transaction, and its full execution trace, searchable in real time." },
  { icon: Wallet, title: "Address & Wallet Lookup", desc: "Balances, token holdings, and transaction history for any address." },
  { icon: FileCheck, title: "Verified Contracts", desc: "Read published source code and confirm it matches what's actually deployed." },
  { icon: Users, title: "Validator & Network Stats", desc: "Live validator performance, block times, and network-wide throughput." },
];

const Explorer = () => {
  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative px-6 sm:px-12 lg:px-24 pt-32 pb-16 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Product / Explorer
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
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search size={17} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by address, transaction hash, or block"
              className="w-full pl-12 pr-32 py-4 rounded-full border border-white/15 bg-white/[0.04] text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
            <a
              href={EXPLORER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-1.5 top-1.5 bottom-1.5 inline-flex items-center gap-1.5 px-5 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-all duration-300"
            >
              Search
            </a>
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

      {/* ───────── Live-style preview ───────── */}
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

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent blocks */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                <Boxes size={15} className="text-blue-400" />
                <h3 className="text-sm font-semibold text-white">Recent Blocks</h3>
              </div>
              <table className="w-full text-left border-collapse">
                <tbody>
                  {recentBlocks.map((b) => (
                    <tr key={b.height} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-5 font-mono text-sm text-blue-300 whitespace-nowrap">{b.height.toLocaleString()}</td>
                      <td className="py-3 px-5 text-xs text-gray-400 whitespace-nowrap">{b.proposer}</td>
                      <td className="py-3 px-5 text-xs text-gray-500 whitespace-nowrap">{b.txs} txns</td>
                      <td className="py-3 px-5 text-xs text-gray-500 text-right whitespace-nowrap">{b.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Recent transactions */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                <Hash size={15} className="text-blue-400" />
                <h3 className="text-sm font-semibold text-white">Recent Transactions</h3>
              </div>
              <table className="w-full text-left border-collapse">
                <tbody>
                  {recentTx.map((t) => (
                    <tr key={t.hash} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-5 font-mono text-xs text-blue-300 whitespace-nowrap">{t.hash}</td>
                      <td className="py-3 px-5 text-xs text-gray-500 whitespace-nowrap">{t.from} → {t.to}</td>
                      <td className="py-3 px-5 text-xs font-mono text-gray-300 text-right whitespace-nowrap">{t.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Features ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-lg font-semibold text-white mb-8">
            What you can explore
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

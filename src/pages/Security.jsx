import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Copy,
  Check,
  KeyRound,
  ShieldAlert,
  MessageSquareOff,
  FlaskConical,
  Wallet2,
} from "lucide-react";

const verificationRows = [
  { control: "Smart Contract Audits", status: "Verified", detail: "2 independent cycles — 2023 and 2026" },
  { control: "Custody Model", status: "Verified", detail: "Fully non-custodial — funds never leave the user's wallet" },
  { control: "Bug Bounty Program", status: "Active", detail: "Up to $50,000 per critical finding, 24/7 coverage" },
  { control: "Source Code", status: "Public", detail: "100% open-source, verifiable core contracts" },
  { control: "Governance Execution", status: "Verified", detail: "Timelocked delay window before proposals execute" },
  { control: "Validator Distribution", status: "Verified", detail: "Spread across 120+ countries, no single point of control" },
];

const auditEntries = [
  {
    ref: "01",
    status: "Closed",
    title: "First Independent Security Audit",
    period: "2023",
    scope: "Core protocol, staking contracts, and mainnet launch readiness.",
    result: "No critical or high-severity issues found. All low-severity findings resolved before mainnet launch.",
  },
  {
    ref: "02",
    status: "In Progress",
    title: "Second Independent Security Audit Cycle",
    period: "2026",
    scope: "Updated DEX router, staking contracts, and the governance execution module.",
    result: "Low-severity findings around gas efficiency and edge-case validation — resolved before deployment. No critical or high-severity issues identified so far.",
  },
];

const bountySchedule = [
  { level: "Critical", reward: "$50,000", desc: "Direct loss of user funds or protocol insolvency." },
  { level: "High", reward: "$15,000", desc: "Unauthorized fund access under specific conditions." },
  { level: "Medium", reward: "$5,000", desc: "Denial of service or non-critical logic errors." },
  { level: "Low", reward: "$1,000", desc: "Gas inefficiencies or minor informational issues." },
];

const userControls = [
  { text: "Never share your seed phrase — no legitimate app will ever ask for it", icon: KeyRound },
  { text: "Verify contract addresses before approving a transaction", icon: ShieldAlert },
  { text: "Ignore unsolicited airdrop or \"support\" DMs", icon: MessageSquareOff },
  { text: "Keep a separate wallet for testing unaudited contracts", icon: FlaskConical },
  { text: "Send a small test amount before a large transfer to a new address", icon: Wallet2 },
];

const Corner = ({ className }) => (
  <span className={`absolute w-4 h-4 border-white/25 pointer-events-none ${className}`} />
);

const Security = () => {
  const [copied, setCopied] = useState(false);
  const [checked, setChecked] = useState(() => new Set());

  const toggleCheck = (text) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(text) ? next.delete(text) : next.add(text);
      return next;
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("security@cryptrixchain.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — fail silently
    }
  };

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Header: report document ───────── */}
      <section className="relative px-6 pt-32 pb-16 md:pt-36">
        <div className="max-w-4xl mx-auto">
          <div className="relative border border-white/15 p-8 md:p-12">
            <Corner className="top-0 left-0 border-t border-l" />
            <Corner className="top-0 right-0 border-t border-r" />
            <Corner className="bottom-0 left-0 border-b border-l" />
            <Corner className="bottom-0 right-0 border-b border-r" />

            <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-10 pb-6 border-b border-white/10">
              <span>Ref — SEC-2026-002</span>
              <span className="text-emerald-400">Classification — Public</span>
              <span>Last Reviewed — Aug 2026</span>
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Security &amp; Trust Report
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-white mt-3">
              Independent verification summary
            </h1>
            <p className="mt-5 text-gray-400 leading-relaxed max-w-2xl">
              This document summarizes the audits, safeguards, and design
              principles independently verifiable across the Cryptrix
              protocol — updated as new reviews complete.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Verification table ───────── */}
      <section className="relative px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              §1 — Verification Table
            </h2>
          </div>

          <div className="border border-white/10 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Control</th>
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Status</th>
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">Detail</th>
                </tr>
              </thead>
              <tbody>
                {verificationRows.map((row, i) => (
                  <tr
                    key={row.control}
                    className={`${i % 2 === 1 ? "bg-white/[0.015]" : ""} border-b border-white/5 last:border-0`}
                  >
                    <td className="py-4 px-5 text-sm font-medium text-white whitespace-nowrap">{row.control}</td>
                    <td className="py-4 px-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                        <Check size={12} strokeWidth={3} />
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-sm text-gray-400">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ───────── Audit entries ───────── */}
      <section className="relative px-6 pb-16 pt-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-6">
            §2 — Audit History
          </h2>

          <div className="space-y-px bg-white/10">
            {auditEntries.map((entry) => {
              const isDone = entry.status === "Closed";
              return (
                <div key={entry.ref} className="bg-[#01021f] p-6 md:p-7 grid md:grid-cols-[3rem_1fr] gap-5">
                  <span className="font-mono text-sm text-gray-600">{entry.ref}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border ${
                          isDone
                            ? "text-emerald-400 border-emerald-500/30"
                            : "text-blue-400 border-blue-500/30"
                        }`}
                      >
                        {entry.status} · {entry.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed mb-1.5">
                      <span className="text-gray-600">Scope — </span>{entry.scope}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      <span className="text-gray-600">Result — </span>{entry.result}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-5 text-sm text-gray-500">
            <Link to="/blog/second-security-audit-cycle/" className="text-blue-400 hover:underline">
              Read the full report on the latest audit cycle →
            </Link>
          </p>
        </div>
      </section>

      {/* ───────── Bounty schedule ───────── */}
      <section className="relative px-6 pb-16 pt-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
            §3 — Bug Bounty Schedule
          </h2>
          <p className="text-sm text-gray-500 mb-6 max-w-lg">
            Ongoing, in addition to formal audits. Responsible disclosure is
            always rewarded.
          </p>

          <div className="border border-white/10">
            {bountySchedule.map((tier, i) => (
              <div
                key={tier.level}
                className={`flex items-center justify-between gap-4 py-4 px-5 ${
                  i !== bountySchedule.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div>
                  <span className="text-sm font-medium text-white">{tier.level}</span>
                  <p className="text-xs text-gray-500 mt-0.5">{tier.desc}</p>
                </div>
                <span className="font-mono text-sm text-white shrink-0">{tier.reward}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── User controls ───────── */}
      <section className="relative px-6 pb-16 pt-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
            §4 — Recommended Controls for Users
          </h2>
          <p className="text-sm text-gray-500 mb-6 max-w-lg">
            The protocol can be secure — these habits close the remaining gap.
          </p>

          <div className="border border-white/10 divide-y divide-white/10">
            {userControls.map((item) => {
              const Icon = item.icon;
              const isChecked = checked.has(item.text);
              return (
                <button
                  key={item.text}
                  onClick={() => toggleCheck(item.text)}
                  className="w-full flex items-center gap-4 py-4 px-5 text-left transition-colors duration-200 hover:bg-white/[0.02]"
                >
                  <span
                    className={`shrink-0 w-5 h-5 border flex items-center justify-center transition-colors duration-200 ${
                      isChecked ? "bg-emerald-500/20 border-emerald-500/50" : "border-white/20"
                    }`}
                  >
                    {isChecked && <Check size={11} strokeWidth={3} className="text-emerald-400" />}
                  </span>
                  <Icon size={15} className="text-gray-500 shrink-0" />
                  <p className={`text-sm transition-colors ${isChecked ? "text-gray-600 line-through" : "text-gray-300"}`}>
                    {item.text}
                  </p>
                </button>
              );
            })}
          </div>

          <p className="mt-5 text-sm text-gray-500">
            <Link to="/blog/five-security-mistakes-new-users-make/" className="text-blue-400 hover:underline">
              Read the full guide →
            </Link>
          </p>
        </div>
      </section>

      {/* ───────── Disclosure ───────── */}
      <section className="relative px-6 py-16 md:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="relative border border-white/15 p-8 md:p-10 text-center">
            <Corner className="top-0 left-0 border-t border-l" />
            <Corner className="top-0 right-0 border-t border-r" />
            <Corner className="bottom-0 left-0 border-b border-l" />
            <Corner className="bottom-0 right-0 border-b border-r" />

            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
              §5 — Responsible Disclosure
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-white">
              Found a vulnerability?
            </p>
            <p className="mt-3 text-gray-400 max-w-md mx-auto">
              Report it responsibly and we'll respond quickly. Every valid
              disclosure is rewarded under the schedule above.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "security@cryptrixchain.com"}
              </button>
              <Link
                to="/contact/"
                className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-white/40"
              >
                Contact Us
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;

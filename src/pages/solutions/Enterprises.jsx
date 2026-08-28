import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Building2, ShieldCheck } from "lucide-react";

/* 3D orbiting node globe — represents the global infrastructure network */
const OrbitGlobe = ({ size = 240 }) => (
  <div
    className="relative mx-auto"
    style={{ width: size, height: size, perspective: "1000px" }}
  >
    <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow" />
    <div className="absolute inset-0 preserve-3d animate-spin-slow">
      {/* Core */}
      <div
        className="absolute rounded-full"
        style={{
          inset: "18%",
          background:
            "radial-gradient(circle at 35% 30%, rgba(96,165,250,0.35), rgba(6,8,24,0.95) 72%)",
          border: "1px solid rgba(96,165,250,0.35)",
          boxShadow: "0 0 60px -12px rgba(96,165,250,0.5)",
        }}
      />
      {/* Tilted orbit rings */}
      {[0, 60, 120].map((deg) => (
        <div
          key={deg}
          className="absolute inset-0 rounded-full border border-blue-400/25"
          style={{ transform: `rotateX(75deg) rotateZ(${deg}deg)` }}
        />
      ))}
    </div>

    {/* Independently floating node dots */}
    {[
      { top: "12%", left: "22%", delay: "0s" },
      { top: "68%", left: "12%", delay: "0.6s" },
      { top: "20%", left: "78%", delay: "1.2s" },
      { top: "78%", left: "70%", delay: "1.8s" },
      { top: "48%", left: "6%", delay: "2.4s" },
      { top: "45%", left: "90%", delay: "3s" },
    ].map((d, i) => (
      <span
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-blue-400 animate-float-slow"
        style={{ top: d.top, left: d.left, animationDelay: d.delay }}
      />
    ))}
  </div>
);

/* 3D rotating verified seal — front/back faces via preserve-3d */
const VerifiedSeal = ({ size = 84 }) => (
  <div
    className="relative shrink-0"
    style={{ width: size, height: size, perspective: "700px" }}
  >
    <div className="absolute inset-0 preserve-3d animate-spin-slow">
      <div
        className="absolute inset-0 rounded-full backface-hidden flex flex-col items-center justify-center"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(52,211,153,0.28), rgba(6,8,24,0.95) 72%)",
          border: "1.5px solid rgba(52,211,153,0.4)",
        }}
      >
        <ShieldCheck size={26} className="text-emerald-400" />
        <span className="text-[7px] font-semibold uppercase tracking-widest text-emerald-400 mt-1">
          Verified
        </span>
      </div>
      <div
        className="absolute inset-0 rounded-full backface-hidden flex items-center justify-center"
        style={{
          transform: "rotateY(180deg)",
          background:
            "radial-gradient(circle at 65% 30%, rgba(52,211,153,0.2), rgba(6,8,24,0.95) 72%)",
          border: "1.5px solid rgba(52,211,153,0.3)",
        }}
      >
        <Check size={22} className="text-emerald-400" />
      </div>
    </div>
  </div>
);

const infraMetrics = [
  { metric: "Network Uptime", value: "99.99%" },
  { metric: "Global Nodes", value: "320+" },
  { metric: "Regions", value: "42" },
  { metric: "Average Latency", value: "120ms" },
  { metric: "Enterprises Onboard", value: "250+" },
];

const controls = [
  {
    control: "Regulatory Token Extensions",
    status: "Verified",
    detail: "Enterprise-ready compliance tooling built directly into the wallet stack",
  },
  {
    control: "Smart Contract Audits",
    status: "Verified",
    detail: "Independent security review completed before every mainnet release",
  },
  {
    control: "Bug Bounty Program",
    status: "Active",
    detail: "Ongoing public program, up to $50,000 per critical finding",
  },
  {
    control: "Custody Model",
    status: "Verified",
    detail: "Fully non-custodial — the protocol never takes possession of funds",
  },
  {
    control: "Status Transparency",
    status: "Public",
    detail: "Live uptime and performance dashboard — no NDA or support ticket required",
  },
];

const engagementSteps = [
  {
    term: "Initial Review",
    def: "Talk to the team about integration scope, expected volume, and any regulatory constraints specific to your business.",
  },
  {
    term: "Compliance Check",
    def: "Map your requirements against the token extension and compliance tooling already available in the wallet stack.",
  },
  {
    term: "Integration",
    def: "Build against the documented API and SDKs, with the same infrastructure every other Cryptrix application runs on.",
  },
  {
    term: "Live Monitoring",
    def: "Verify network health yourself at any time through the public status dashboard, rather than waiting on a report.",
  },
];

const Corner = ({ className }) => (
  <span
    className={`absolute w-4 h-4 border-white/25 pointer-events-none ${className}`}
  />
);

const Enterprises = () => {
  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Header: report document ───────── */}
      <section className="relative px-6 pt-32 pb-16 md:pt-36 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div className="relative border border-white/15 p-8 md:p-12">
            <Corner className="top-0 left-0 border-t border-l" />
            <Corner className="top-0 right-0 border-t border-r" />
            <Corner className="bottom-0 left-0 border-b border-l" />
            <Corner className="bottom-0 right-0 border-b border-r" />

            <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-10 pb-6 border-b border-white/10">
              <span>Ref — ENT-2026-01</span>
              <span className="text-blue-400">Solutions — Enterprises</span>
              <span>Last Reviewed — Aug 2026</span>
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Enterprise Infrastructure Report
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-white mt-3">
              Built to answer to an SLA, not a whitepaper.
            </h1>
            <p className="mt-5 text-gray-400 leading-relaxed max-w-2xl">
              Global node redundancy, live status transparency, and
              compliance-ready tooling — the parts of a public blockchain
              that actually matter to a business putting its name on it.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Talk to Our Team
                <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/status"
                className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-white/40"
              >
                View Live Status
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <OrbitGlobe />
            <p className="mt-4 text-center text-[11px] font-mono uppercase tracking-[0.2em] text-gray-600">
              320+ Nodes — 42 Regions — Live
            </p>
          </div>
        </div>
      </section>

      {/* ───────── §1 Infrastructure at a glance ───────── */}
      <section className="relative px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
            §1 — Infrastructure at a Glance
          </h2>

          <div className="border border-white/10 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[480px]">
              <tbody>
                {infraMetrics.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={`${
                      i % 2 === 1 ? "bg-white/[0.015]" : ""
                    } border-b border-white/5 last:border-0`}
                  >
                    <td className="py-4 px-5 text-[11px] font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap w-56">
                      {row.metric}
                    </td>
                    <td className="py-4 px-5 font-mono text-sm text-white">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ───────── §2 Compliance & security controls ───────── */}
      <section className="relative px-6 pb-16 pt-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-5 mb-6">
            <VerifiedSeal />
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-1">
                §2 — Compliance &amp; Security Controls
              </h2>
              <p className="text-sm text-gray-500 max-w-sm">
                Every control below is independently verifiable — not a
                self-attested checkbox.
              </p>
            </div>
          </div>

          <div className="border border-white/10 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">
                    Control
                  </th>
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">
                    Status
                  </th>
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {controls.map((row, i) => (
                  <tr
                    key={row.control}
                    className={`${
                      i % 2 === 1 ? "bg-white/[0.015]" : ""
                    } border-b border-white/5 last:border-0`}
                  >
                    <td className="py-4 px-5 text-sm font-medium text-white whitespace-nowrap">
                      {row.control}
                    </td>
                    <td className="py-4 px-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                        <Check size={12} strokeWidth={3} />
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-sm text-gray-400">
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            <Link to="/security" className="text-blue-400 hover:underline">
              Read the full security report →
            </Link>
          </p>
        </div>
      </section>

      {/* ───────── §3 Case reference ───────── */}
      <section className="relative px-6 pb-16 pt-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-6">
            §3 — Case Reference
          </h2>

          <div className="bg-[#01021f] border border-white/10 p-6 md:p-7 grid md:grid-cols-[3rem_1fr] gap-5">
            <span className="flex items-start">
              <Building2 size={20} className="text-blue-400" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold text-white">
                  Enterprise Automation Upgrade
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border text-blue-400 border-blue-500/30">
                  2022
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-gray-600">Result — </span>
                A decentralized automation layer built on Cryptrix has been
                adopted by 250+ enterprises to date, replacing manual,
                single-vendor processes with verifiable on-chain workflows.
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            <Link to="/media" className="text-blue-400 hover:underline">
              See more case studies →
            </Link>
          </p>
        </div>
      </section>

      {/* ───────── §4 Engagement model ───────── */}
      <section className="relative px-6 pb-16 pt-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-6">
            §4 — Engagement Model
          </h2>

          <div className="space-y-px bg-white/10">
            {engagementSteps.map((step, i) => (
              <div
                key={step.term}
                className="bg-[#01021f] p-6 md:p-7 grid md:grid-cols-[3rem_1fr] gap-5"
              >
                <span className="font-mono text-sm text-gray-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">
                    {step.term}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.def}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Closing ───────── */}
      <section className="relative px-6 py-16 md:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="relative border border-white/15 p-8 md:p-10 text-center">
            <Corner className="top-0 left-0 border-t border-l" />
            <Corner className="top-0 right-0 border-t border-r" />
            <Corner className="bottom-0 left-0 border-b border-l" />
            <Corner className="bottom-0 right-0 border-b border-r" />

            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
              Evaluating Cryptrix?
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-white">
              Let's talk about your rollout
            </p>
            <p className="mt-3 text-gray-400 max-w-md mx-auto">
              Compliance requirements, integration support, and what an
              enterprise deployment actually looks like — no sales script.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Talk to Our Team
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
        </div>
      </section>
    </div>
  );
};

export default Enterprises;

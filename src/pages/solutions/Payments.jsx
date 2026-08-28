import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  Repeat,
  ShieldOff,
  Wallet,
} from "lucide-react";

/* 3D pulse ring — represents instant, always-on settlement */
const PulseRing3D = ({ size = 200 }) => (
  <div
    className="relative mx-auto shrink-0"
    style={{ width: size, height: size, perspective: "1000px" }}
  >
    <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-3xl animate-pulse-slow" />
    <div className="absolute inset-0 preserve-3d animate-spin-slow">
      {[0, 45, 90].map((deg) => (
        <div
          key={deg}
          className="absolute inset-0 rounded-full border border-cyan-400/30"
          style={{ transform: `rotateX(78deg) rotateZ(${deg}deg)` }}
        />
      ))}
    </div>

    <div
      className="absolute rounded-full flex items-center justify-center"
      style={{
        inset: "30%",
        background:
          "radial-gradient(circle at 35% 30%, rgba(56,189,248,0.45), rgba(6,8,24,0.95) 72%)",
        border: "1px solid rgba(56,189,248,0.5)",
        boxShadow: "0 0 70px -8px rgba(56,189,248,0.65)",
      }}
    >
      <Zap size={26} className="text-cyan-300 animate-pulse" />
    </div>

    {[0, 1.2, 2.4].map((delay) => (
      <div
        key={delay}
        className="absolute rounded-full border border-cyan-400/40"
        style={{
          inset: "30%",
          animation: "ripple 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          animationDelay: `${delay}s`,
        }}
      />
    ))}
  </div>
);

const Tile = ({ span = "col-span-2", className = "", children }) => (
  <div
    className={`relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] ${span} ${className}`}
  >
    {children}
  </div>
);

const StatTile = ({ value, label, gradient, span }) => (
  <Tile span={span} className="p-6 flex flex-col justify-center">
    <div
      className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent"
      style={{ backgroundImage: gradient }}
    >
      {value}
    </div>
    <div className="mt-1.5 text-xs uppercase tracking-wider text-gray-500">
      {label}
    </div>
  </Tile>
);

const Payments = () => {
  return (
    <div className="w-full bg-[#01021f] text-white overflow-hidden">
      {/* ───────── Hero ───────── */}
      <section className="relative px-6 pt-36 pb-20 text-center overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-600/25 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute top-[5%] left-[10%] w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-[10%] right-[8%] w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan-300">
              Solutions / Payments
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.02] max-w-4xl mx-auto">
            Money that clears
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              before the receipt prints.
            </span>
          </h1>

          <p className="mt-7 text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Sub-second settlement, a fraction of a cent per transaction, and
            zero correspondent banks standing between a wallet and a payout.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/wallets"
              className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black text-sm font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Get a Wallet
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-full border border-white/20 text-white text-sm font-medium hover:border-white/40 hover:scale-105 transition-all duration-300"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Bento grid: everything at a glance ───────── */}
      <section className="relative py-16 md:py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="grid grid-cols-2 md:grid-cols-6 auto-rows-[minmax(140px,auto)] gap-4"
            style={{ gridAutoFlow: "dense" }}
          >
            {/* Feature tile — settlement */}
            <Tile span="col-span-2 md:col-span-4 row-span-2" className="p-7 flex flex-col sm:flex-row items-center gap-6">
              <PulseRing3D />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Settle in under a second
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Block finality is sub-second by default — a payment is
                  either unconfirmed, or it's done. No pending state, no
                  multi-day clearing window.
                </p>
              </div>
            </Tile>

            <StatTile
              span="col-span-1 md:col-span-2 row-span-1"
              value="$0.0027"
              label="Avg. Transaction Cost"
              gradient="linear-gradient(90deg, #60A5FA, #38BDF8)"
            />
            <StatTile
              span="col-span-1 md:col-span-2 row-span-1"
              value="0.01%"
              label="Protocol Fee"
              gradient="linear-gradient(90deg, #38BDF8, #A78BFA)"
            />

            {/* Programmable payments */}
            <Tile span="col-span-2 md:col-span-3 row-span-1" className="p-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center mb-4">
                <Repeat size={18} className="text-purple-300" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1.5">
                Programmable by default
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Recurring subscriptions, compliance rules, and automated
                revenue splits — enforced at the protocol level.
              </p>
            </Tile>

            {/* No intermediaries */}
            <Tile span="col-span-2 md:col-span-3 row-span-1" className="p-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-4">
                <ShieldOff size={18} className="text-cyan-300" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1.5">
                No gatekeeper in the middle
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Funds move wallet to wallet — no correspondent bank chain,
                no one who can freeze or delay settlement.
              </p>
            </Tile>

            <StatTile
              span="col-span-1 md:col-span-3 row-span-1"
              value="$1.82B"
              label="Monthly Payment Volume"
              gradient="linear-gradient(90deg, #A78BFA, #60A5FA)"
            />
            <StatTile
              span="col-span-1 md:col-span-3 row-span-1"
              value="3.8M"
              label="Avg. Daily Transactions"
              gradient="linear-gradient(90deg, #38BDF8, #60A5FA)"
            />

            {/* CTA tile */}
            <Link
              to="/wallets"
              className="group col-span-2 md:col-span-3 row-span-1 relative rounded-2xl overflow-hidden p-6 flex flex-col justify-center transition-all duration-300 hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(56,189,248,0.18), rgba(167,139,250,0.18))",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                <Wallet size={18} className="text-white" />
              </div>
              <h3 className="text-base font-semibold text-white flex items-center gap-1.5">
                Start accepting CRX
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Get a wallet and integrate Cryptrix Pay into checkout.
              </p>
            </Link>

            {/* Proof point */}
            <Tile span="col-span-2 md:col-span-3 row-span-1" className="p-6 flex flex-col justify-center">
              <p className="text-sm text-gray-200 leading-relaxed italic">
                "Pairing instant settlement with real-time identity
                verification cut payment fraud by{" "}
                <span className="text-cyan-300 font-semibold not-italic">
                  70%
                </span>
                ."
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-wider text-gray-500">
                Cryptrix × FinTech Corp, 2024 ·{" "}
                <Link to="/media" className="text-blue-400 hover:underline">
                  more case studies
                </Link>
              </p>
            </Tile>
          </div>
        </div>
      </section>

      {/* ───────── Closing ───────── */}
      <section className="relative py-20 md:py-28 border-t border-white/10 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Start taking instant payments.
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-10">
            Get a wallet, or read the docs to integrate Cryptrix Pay into
            your checkout flow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/wallets"
              className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black text-sm font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Get a Wallet
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-full border border-white/20 text-white text-sm font-medium hover:border-white/40 hover:scale-105 transition-all duration-300"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payments;

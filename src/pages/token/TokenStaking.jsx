import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Fuel,
  Layers,
  Vote,
  Gift,
  Lock,
  AlertTriangle,
  ShieldAlert,
  TrendingDown,
} from "lucide-react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/24/outline";

const validators = [
  { rank: 1, name: "Meridian Node", apy: 9.8 },
  { rank: 2, name: "Northstar Validators", apy: 9.6 },
  { rank: 3, name: "Apex Chain Ops", apy: 9.5 },
  { rank: 4, name: "Blockwave Infrastructure", apy: 9.3 },
];

const maxApy = Math.max(...validators.map((v) => v.apy));

const durations = [
  { label: "30 Days", days: 30 },
  { label: "90 Days", days: 90 },
  { label: "1 Year", days: 365 },
];

const steps = [
  {
    title: "Delegate",
    icon: Vote,
    desc: "Choose a validator and delegate any amount of CRX — no minimum required.",
  },
  {
    title: "Earn Every Epoch",
    icon: Gift,
    desc: "Rewards accrue continuously from fee revenue and protocol issuance.",
  },
  {
    title: "Compound or Claim",
    icon: Gift,
    desc: "Claim rewards anytime, or leave them to compound your position.",
  },
  {
    title: "Unstake Anytime",
    icon: Lock,
    desc: "Request unstaking whenever you want — CRX clears a 7-day cooldown.",
  },
];

const risks = [
  {
    icon: ShieldAlert,
    title: "Slashing risk",
    desc: "Validators that go offline or act maliciously are slashed. Delegators share this risk proportionally — choosing a reliable validator matters.",
  },
  {
    icon: Lock,
    title: "Cooldown on unstaking",
    desc: "CRX isn't liquid the instant you unstake — it clears a 7-day on-chain cooldown before it's available in your wallet.",
  },
  {
    icon: TrendingDown,
    title: "APY isn't fixed",
    desc: "Rates shown reflect current network conditions and validator performance — they move over time and are never guaranteed.",
  },
  {
    icon: AlertTriangle,
    title: "No principal guarantee",
    desc: "Staking is a network security role, not a deposit account — rewards come from participation, not a promise of return.",
  },
];

const faqs = [
  {
    question: "How is my APY actually determined?",
    answer:
      "APY depends on the validator you delegate to — it reflects that validator's uptime, performance, and share of network rewards. The table above shows current live rates.",
  },
  {
    question: "Do rewards compound automatically?",
    answer:
      "No — compounding is a choice, not a default. Claim rewards to your wallet, or leave them unclaimed and re-delegate them yourself to compound your position.",
  },
  {
    question: "What happens during the cooldown period?",
    answer:
      "Once you request to unstake, your CRX stops earning rewards immediately and becomes available in your wallet after a fixed 7-day on-chain cooldown.",
  },
  {
    question: "Is there a minimum amount to stake?",
    answer:
      "No protocol-enforced minimum — though very small amounts may not be gas-efficient to delegate or claim.",
  },
  {
    question: "Can I switch validators later?",
    answer:
      "Yes. You can undelegate from one validator and delegate to another at any time, subject to the same unbonding rules.",
  },
];

/* Minimal label — no pill, no dot, no border. Just a quiet uppercase kicker. */
const Kicker = ({ children, center = false }) => (
  <p
    className={`text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4 ${
      center ? "text-center" : ""
    }`}
  >
    {children}
  </p>
);

const TokenStaking = () => {
  const [amount, setAmount] = useState(10000);
  const [validatorIdx, setValidatorIdx] = useState(0);
  const [durationIdx, setDurationIdx] = useState(2);

  const { reward, total, apy } = useMemo(() => {
    const v = validators[validatorIdx];
    const d = durations[durationIdx];
    const principal = Number(amount) || 0;
    const r = principal * (v.apy / 100) * (d.days / 365);
    return { reward: r, total: principal + r, apy: v.apy };
  }, [amount, validatorIdx, durationIdx]);

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative px-6 pt-36 pb-24 overflow-hidden text-center">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-600/20 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-[5%] right-[10%] w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <Kicker center>Token — Staking &amp; Rewards</Kicker>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            Earn yield by securing
            <br className="hidden sm:block" /> the network you use.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
            Delegate CRX to a validator and earn a share of network rewards —
            no lock-up tiers, no minimums, just continuous rewards for
            participating.
          </p>

          {/* Big gradient APY figure — the focal point */}
          <div className="mt-14">
            <div className="text-7xl sm:text-8xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              9.8%
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
              Top Validator APY — Live
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/staking"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black text-sm font-semibold hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
            >
              Start Staking
              <ArrowRight size={16} />
            </Link>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white text-sm font-medium hover:border-white/35 hover:scale-105 transition-all duration-300"
            >
              Try the Calculator
            </a>
          </div>

          {/* Stat strip — label / value, no boxes */}
          <div className="mt-16 flex flex-wrap justify-center gap-x-14 gap-y-6 border-t border-white/10 pt-8">
            {[
              { value: "182.4M", label: "CRX Staked" },
              { value: "18.2%", label: "Of Supply Staked" },
              { value: "7 Days", label: "Cooldown" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl font-semibold text-white">
                  {s.value}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-gray-500 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Two ways rewards flow ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <Kicker center>Reward Sources</Kicker>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-2">
            Two ways CRX rewards you
          </h2>
          <p className="text-sm sm:text-base text-gray-400 text-center max-w-xl mx-auto mb-12">
            Staking rewards aren't printed from nowhere — they're funded by
            the network's own activity and its published issuance schedule.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 border border-white/10 flex items-center justify-center mb-5">
                <Fuel size={22} className="text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Transaction Fee Share
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Every fee paid in CRX across the network is split
                transparently on-chain — a portion goes directly to the
                validator that processed it, which flows through to their
                delegators.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 border border-white/10 flex items-center justify-center mb-5">
                <Layers size={22} className="text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Protocol Issuance
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                CRX's fixed, on-chain issuance schedule allocates rewards to
                validators and delegators for securing the network — on top
                of fee revenue, with no discretionary minting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Validator APY table ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <Kicker>Live Rates</Kicker>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Reward rates by validator
              </h2>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">
              Rates vary by validator performance and reliability — pick one
              in the calculator below.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">
                    Rank
                  </th>
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5">
                    Validator
                  </th>
                  <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-3 px-5 w-1/2">
                    APY
                  </th>
                </tr>
              </thead>
              <tbody>
                {validators.map((v) => (
                  <tr
                    key={v.name}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 px-5 font-mono text-sm text-gray-500">
                      #{v.rank}
                    </td>
                    <td className="py-4 px-5 text-sm font-medium text-white whitespace-nowrap">
                      {v.name}
                      {v.rank === 1 && (
                        <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-400/10 border border-cyan-400/25 px-1.5 py-0.5 rounded-full">
                          Top
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm text-white w-12 shrink-0">
                          {v.apy}%
                        </span>
                        <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden max-w-[220px]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300"
                            style={{ width: `${(v.apy / maxApy) * 100}%` }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ───────── Calculator ───────── */}
      <section
        id="calculator"
        className="relative py-20 md:py-24 border-t border-white/10 overflow-hidden scroll-mt-24"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <Kicker center>Rewards Calculator</Kicker>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Estimate your rewards
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-10 grid md:grid-cols-2 gap-10">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Amount to stake
                </label>
                <div className="flex items-center gap-2 border border-white/15 rounded-xl px-4 py-3">
                  <input
                    type="number"
                    min="0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-1 bg-transparent text-lg font-semibold text-white outline-none"
                  />
                  <span className="text-sm text-gray-500">CRX</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Validator
                </label>
                <div className="flex flex-wrap gap-2">
                  {validators.map((v, i) => (
                    <button
                      key={v.name}
                      type="button"
                      onClick={() => setValidatorIdx(i)}
                      className={`px-3 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
                        validatorIdx === i
                          ? "bg-gradient-to-r from-blue-500/20 to-cyan-400/10 border-cyan-400/40 text-cyan-300"
                          : "border-white/15 text-gray-400 hover:border-white/30"
                      }`}
                    >
                      {v.name} · {v.apy}%
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Duration
                </label>
                <div className="flex gap-2">
                  {durations.map((d, i) => (
                    <button
                      key={d.label}
                      type="button"
                      onClick={() => setDurationIdx(i)}
                      className={`flex-1 px-3 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
                        durationIdx === i
                          ? "bg-gradient-to-r from-blue-500/20 to-cyan-400/10 border-cyan-400/40 text-cyan-300"
                          : "border-white/15 text-gray-400 hover:border-white/30"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output */}
            <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                Estimated reward
              </p>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                +
                {reward.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}{" "}
                CRX
              </p>
              <p className="text-sm text-gray-500 mt-1">
                at {apy}% APY over {durations[durationIdx].label.toLowerCase()}
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm text-gray-400">Total after period</span>
                <span className="text-lg font-semibold text-white">
                  {total.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}{" "}
                  CRX
                </span>
              </div>

              <p className="mt-4 text-[11px] text-gray-600 leading-relaxed">
                Estimate only — actual rewards vary with network conditions
                and are not guaranteed. CRX remains flexible; nothing here is
                a locked term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── How it works ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <Kicker center>Process</Kicker>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              How staking works
            </h2>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 text-center hover:border-white/20 transition-colors"
                >
                  <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/10 border border-white/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-cyan-300" />
                  </div>
                  <p className="text-[11px] font-mono text-gray-600 mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Risk & considerations ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <Kicker>Risk &amp; Considerations</Kicker>
          <p className="text-sm text-gray-500 mb-8 max-w-lg">
            Staking is not a deposit account. Understand these before you
            delegate.
          </p>

          <div className="rounded-2xl border border-white/10 divide-y divide-white/10 overflow-hidden">
            {risks.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="flex gap-4 p-6">
                  <Icon size={18} className="text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {r.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="relative py-20 md:py-24 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Kicker center>FAQ</Kicker>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Staking &amp; rewards questions
            </h2>
          </div>

          <dl className="divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left cursor-pointer">
                    <span className="text-base font-semibold text-white group-data-open:text-cyan-300 transition-colors">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-5 text-gray-400 group-data-open:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-5 text-cyan-300 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────── Closing CTA ───────── */}
      <section className="relative py-20 md:py-24 overflow-hidden border-t border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Kicker center>Get Started</Kicker>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Ready to start earning?
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            Pick a validator, delegate your CRX, and start earning from the
            next epoch onward.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/staking"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black text-sm font-semibold hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
            >
              Start Staking
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/token/tokenomics"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white text-sm font-medium hover:border-white/35 hover:scale-105 transition-all duration-300"
            >
              See Full Tokenomics
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TokenStaking;

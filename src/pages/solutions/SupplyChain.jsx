import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1600&q=80";

const journey = [
  {
    stage: "Origin",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=900&q=80",
    desc: "Logged on-chain the moment it leaves the port — timestamped, impossible to backdate.",
  },
  {
    stage: "In Transit",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80",
    desc: "Every custody handoff between carriers is a signed, verifiable transaction.",
  },
  {
    stage: "Warehouse",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
    desc: "Storage and inventory checkpoints post to the same ledger every party already trusts.",
  },
  {
    stage: "Retail",
    image:
      "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=900&q=80",
    desc: "Full custody history — origin to shelf — verifiable by anyone, not just the handlers.",
  },
];

const industryProof = [
  {
    stat: "Weeks → 2.2 seconds",
    label: "Food-safety incident response time",
    source: "Walmart, on IBM Food Trust",
  },
  {
    stat: "2,000+ suppliers",
    label: "Components validated against spec in seconds, not days",
    source: "Renault, with IBM",
  },
];

const provides = [
  {
    title: "A record that can't be quietly edited.",
    desc: "Every checkpoint — origin, handoff, delivery — is written once and stays that way. No party can rewrite history after the fact.",
  },
  {
    title: "Cheap enough to log every handoff, not just the big ones.",
    desc: "At an average of $0.0027 per transaction, recording every custody transfer is viable — not just the shipments large enough to justify the overhead.",
  },
  {
    title: "Shared by everyone, owned by no one party.",
    desc: "Manufacturer, carrier, and retailer verify against the same distributed ledger instead of reconciling three separate internal systems after the fact.",
  },
];

const SupplyChain = () => {
  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero — one number, stated plainly ───────── */}
      <section className="relative px-6 sm:px-12 lg:px-24 pt-36 pb-20 border-b border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#01021f] via-[#01021f]/95 to-[#01021f]" />

        <div className="relative max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-6">
            Solutions — Supply Chain
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight max-w-2xl">
            Every custody transfer, provably real.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
            A shared, tamper-proof ledger settles disputes between
            manufacturer, carrier, and retailer before they start — not
            after a shipment has already gone missing.
          </p>

          <div className="mt-10 flex items-end gap-10 flex-wrap">
            <div>
              <div className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
                $0.0027
              </div>
              <p className="mt-2 text-sm text-gray-500 max-w-[16rem]">
                Average cost to record one verified checkpoint on-chain
              </p>
            </div>
            <div className="flex gap-8 pb-1">
              <div>
                <div className="text-2xl font-semibold text-white">&lt;1s</div>
                <p className="text-xs text-gray-500 mt-1">To finality</p>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">100%</div>
                <p className="text-xs text-gray-500 mt-1">Verifiable by anyone</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/docs"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              Read the Docs
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── The journey, in photos ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">
            The Journey
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-12 max-w-lg">
            Four handoffs. One ledger that doesn't lose the thread.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {journey.map((step, i) => (
              <div
                key={step.stage}
                className="group relative h-72 rounded-2xl overflow-hidden border border-white/10"
              >
                <img
                  src={step.image}
                  alt={step.stage}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end p-5">
                  <span className="text-[11px] font-mono text-blue-300 mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-1.5">
                    {step.stage}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Proven at industry scale ───────── */}
      <section className="relative py-20 md:py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">
            Proven at Industry Scale
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3 max-w-lg">
            This isn't a hypothetical use case.
          </h2>
          <p className="text-gray-400 max-w-xl mb-12 leading-relaxed">
            Blockchain-based traceability already has a track record in
            production supply chains, independent of any one network:
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-white/10">
            {industryProof.map((item) => (
              <div key={item.stat} className="bg-[#01021f] p-7">
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  {item.stat}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                  {item.label}
                </p>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  {item.source}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-600">
            Independent results from third-party deployments, cited for
            context — not Cryptrix's own case studies.
          </p>
        </div>
      </section>

      {/* ───────── What Cryptrix provides ───────── */}
      <section className="relative py-20 md:py-28 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">
            What Cryptrix Provides
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-14">
            The same properties, without a permissioned gatekeeper.
          </h2>

          <div className="space-y-14">
            {provides.map((p, i) => (
              <div key={p.title} className="grid sm:grid-cols-[3rem_1fr] gap-4">
                <span className="text-3xl font-bold text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Closing ───────── */}
      <section className="relative py-20 md:py-24 text-center px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Building a track-and-trace system?
        </h2>
        <p className="mt-3 text-gray-400 max-w-md mx-auto">
          Infrastructure and developer tooling grants are open —
          supply-chain projects included.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            to="/docs"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105"
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
      </section>
    </div>
  );
};

export default SupplyChain;

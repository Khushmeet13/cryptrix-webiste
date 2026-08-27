import React from "react";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Foundation Launch",
    points: [
      "SPH Coin deployment",
      "Website & branding launch",
      "Initial community building",
    ],
    status: "Completed",
  },
  {
    phase: "Phase 2",
    title: "Ecosystem Expansion",
    points: [
      "Wallet & explorer integration",
      "Validator onboarding",
      "Liquidity & exchange listings",
    ],
    status: "In Progress",
  },
  {
    phase: "Phase 3",
    title: "Utility & Governance",
    points: ["Staking & rewards", "DAO governance", "Developer SDKs"],
    status: "Upcoming",
  },
  {
    phase: "Phase 4",
    title: "Global Adoption",
    points: [
      "Cross-chain bridges",
      "Enterprise partnerships",
      "Mass adoption initiatives",
    ],
    status: "Planned",
  },
];

const EcosystemGrowth = () => {
  return (
    <div className=" text-white overflow-hidden">
      {/* HERO */}
      <section className="relative py-28 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-indigo-950/50 to-black animate-pulseSlow" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl tracking-tight text-white ">
            Ecosystem Growth
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg">
            Building the future of decentralized infrastructure powered by
            <span className="text-indigo-400 font-medium"> SPH Coin</span>.
          </p>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Network Growth",
              desc: "Rapidly expanding validator and node ecosystem.",
            },
            {
              title: "Developer Adoption",
              desc: "SDKs, APIs & tools for builders on Cryptrix.",
            },
            {
              title: "Real-World Utility",
              desc: "Payments, governance, and cross-chain usage.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-gray-50 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/40"
            >
              <div className="h-1 w-10 bg-indigo-400 mb-6 transition-all duration-500 group-hover:w-16" />
              <h3 className="text-xl text-black font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-16 text-black">
            SPH Coin Roadmap
          </h2>

          <div className="relative border-l border-gray-200 ml-4 space-y-16">
            {roadmap.map((item, index) => (
              <div
                key={index}
                className="relative pl-10 animate-slideUp"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* DOT */}
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.8)] animate-pingSlow" />

                <div className="bg-white/5 border border-gray-200 rounded-xl p-6 hover:border-indigo-400/40 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-indigo-400 font-medium">
                      {item.phase}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-indigo-400/10 text-indigo-600">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-black">{item.title}</h3>
                  <ul className="space-y-2 text-sm text-gray-500">
                    {item.points.map((p, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-indigo-400">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6 bg-white text-black">
        <h2 className="text-3xl font-semibold mb-4">
          Join the Cryptrix Ecosystem
        </h2>
        <p className="text-gray-400 mb-8">
          Build, stake, and grow with the SPH community.
        </p>
        <button className="px-6 py-3 text-white rounded-full bg-indigo-500 hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/30">
          Explore SPH Coin
        </button>
      </section>
    </div>
  );
};

export default EcosystemGrowth;

import React from "react";
import { Globe, ShieldCheck, Blocks } from "lucide-react";

const pillars = [
  {
    title: "Borderless by default",
    desc: "No banks, no gatekeepers, no waiting. Value moves at the speed of the network, everywhere.",
    icon: Globe,
  },
  {
    title: "Security without compromise",
    desc: "Audited contracts and non-custodial design mean your assets are never out of your control.",
    icon: ShieldCheck,
  },
  {
    title: "Built for what's next",
    desc: "A modular foundation designed to scale with the next generation of decentralized applications.",
    icon: Blocks,
  },
];

const MissionStatement = () => {
  return (
    <section className="relative py-28 md:py-36 px-6 overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#01021f] to-[#000018]">
      {/* Atmosphere background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=60"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#01021f] via-[#01021f]/85 to-[#000018]" />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Our Mission
        </span>

        <h2 className="about-serif italic text-3xl md:text-5xl lg:text-6xl text-white mt-6 leading-tight">
          "Trust should come from code you can read —
          <br className="hidden md:block" /> not permission you have to ask
          for."
        </h2>
      </div>

      {/* Pillars */}
      <div className="relative z-10 mt-24 max-w-5xl mx-auto grid md:grid-cols-3 gap-10 md:gap-6 text-left">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="md:border-t md:border-white/10 md:pt-8">
              <Icon size={22} className="text-blue-400 mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MissionStatement;

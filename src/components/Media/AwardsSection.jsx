import React from "react";
import { Medal, Award, Trophy, ShieldCheck, Lock, Users } from "lucide-react";

const awards = [
  {
    icon: <Trophy size={24} />,
    title: "Best Web3 Innovation Award 2024",
    desc: "Recognized globally for technical excellence in decentralized infrastructure.",
  },
  {
    icon: <Award size={24} />,
    title: "Tech Leadership Award",
    desc: "Honored for outstanding contributions to the blockchain ecosystem.",
  },
  {
    icon: <Medal size={24} />,
    title: "Top Security Protocol 2023",
    desc: "Awarded for unmatched digital identity protection standards.",
  },
];

const principles = [
  { icon: ShieldCheck, label: "Independently Audited" },
  { icon: Lock, label: "Non-Custodial" },
  { icon: Users, label: "Community Governed" },
  { icon: Award, label: "Open Source" },
];

const AwardsSection = () => {
  return (
    <>
      <section className="relative w-full bg-[#01021f] py-14 overflow-hidden border-y border-white/10">
        <h2 className="text-center text-gray-500 tracking-[6px] text-xs sm:text-sm mb-10">
          BUILT ON
        </h2>

        <div className="relative w-full overflow-hidden">
          {/* Slider Track */}
          <div className="flex animate-slide whitespace-nowrap">
            {/* Duplicate items for infinite effect */}
            {[...principles, ...principles].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="mx-12 flex-shrink-0 flex items-center gap-2.5 text-gray-400">
                  <Icon size={18} className="text-blue-400" />
                  <span className="text-sm font-medium uppercase tracking-wider">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#01021f] text-white py-20 md:py-24 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Recognition
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Awards</h2>
        </div>

        <div className="relative z-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {awards.map((award, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl text-center transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20"
            >
              <div className="text-blue-400 flex justify-center mb-5">
                {award.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3 text-white">{award.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {award.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AwardsSection;

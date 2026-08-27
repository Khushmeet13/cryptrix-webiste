import React from "react";

const principles = [
  {
    title: "Move faster",
    desc: "Weekly protocol releases and updates, shaped by our community.",
  },
  {
    title: "Community obsessed",
    desc: "You tell us what you want, we build it.",
  },
  {
    title: "Radical transparency",
    desc: "Everything on-chain and verifiable — nothing hidden behind a dashboard.",
  },
  {
    title: "Inclusivity",
    desc: "A network where everyone can participate and build together.",
  },
  {
    title: "Empathy",
    desc: "Always listening, always learning from the people who use what we build.",
  },
];

const Manifesto = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 mb-16 flex-wrap">
          <div>
            <span className="about-serif italic text-3xl text-blue-400">03</span>
            <h2 className="about-serif text-3xl md:text-4xl text-white mt-4">
              The Manifesto
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            Five principles that shape every decision we make.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="group grid md:grid-cols-12 gap-3 md:gap-6 items-start md:items-center py-8 px-4 -mx-4 rounded-xl transition-colors duration-300 hover:bg-white/[0.025]"
            >
              <span className="about-serif md:col-span-1 text-2xl text-white/20 group-hover:text-blue-400 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="md:col-span-3 text-xl font-semibold text-white">
                {p.title}
              </h3>
              <p className="md:col-span-8 text-gray-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

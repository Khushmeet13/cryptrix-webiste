import React from "react";
import { Medal, Award, Trophy } from "lucide-react";

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

const logos = [
  "https://cdn.prod.website-files.com/637359c81e22b715cec245ad/63d035fea32baf3de59a3b6e_Sequoia.svg",
  "https://cdn.prod.website-files.com/637359c81e22b715cec245ad/63d035fd24e3a27775c9ff6d_coinbase.svg",
  "https://cdn.prod.website-files.com/637359c81e22b715cec245ad/63d035fec5cd49d933711bfe_Mcc.svg",
  "https://cdn.prod.website-files.com/637359c81e22b715cec245ad/63d035fe9e8158158a1cf586_Binance.svg",
];

const AwardsSection = () => {
  return (
    <>
     <section className="w-full bg-white py-16 overflow-hidden">
      <h2 className="text-center text-black tracking-[6px] text-xs sm:text-sm mb-10">
        BACKED BY
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Slider Track */}
        <div className="flex animate-slide whitespace-nowrap">
          {/* Duplicate items for infinite effect */}
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="mx-20 flex-shrink-0">
              <img
                src={logo}
                alt="logo"
                className="h-10 md:h-14 brightness-200 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="w-full bg-gradient-to-t  from-gray-100 to-white text-black py-22 px-6">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-14">Awards</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {awards.map((award, i) => (
          <div
            key={i}
            className="p-8 bg-white border border-white/10 rounded-2xl text-center hover:border-purple-400/40 transition"
          >
            <div className="text-indigo-600 flex justify-center mb-5">
              {award.icon}
            </div>

            <h3 className="text-lg font-semibold mb-3">{award.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
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

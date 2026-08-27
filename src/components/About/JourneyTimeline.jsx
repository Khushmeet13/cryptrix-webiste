import React from "react";

const milestones = [
  {
    year: "2021",
    title: "Cryptrix Founded",
    desc: "Research begins on scalable, secure blockchain infrastructure.",
    img: "https://images.unsplash.com/photo-1543242594-c8bae8b9e708?w=300&q=60",
  },
  {
    year: "2022",
    title: "Public Testnet",
    desc: "Thousands of validators join the first public testnet.",
    img: "https://media.istockphoto.com/id/866600030/photo/abstract-cyberspace-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sr0u60I1nxRvq1mZaWAgw2Wf8_YdBOqUWCn6ngQtN_M=",
  },
  {
    year: "2023",
    title: "Mainnet Launch",
    desc: "Cryptrix mainnet goes live with staking and governance enabled.",
    img: "https://media.istockphoto.com/id/1367616995/photo/customer-feedback-experience-review-concept.jpg?s=612x612&w=0&k=20&c=cMJPKIgixe2htRkeOxIJz_m7PCYnpu-pEFaGvph37Wk=",
  },
  {
    year: "2024",
    title: "DEX & Wallet Suite",
    desc: "Cryptrix DEX and multi-chain wallet ship to the public.",
    img: "https://media.istockphoto.com/id/1345144783/photo/freelancers-working-on-new-projects.webp?a=1&b=1&s=612x612&w=0&k=20&c=neQiphtWClLK42L_swtJz5lX2GImunkn8KvIcDg-5sI=",
  },
  {
    year: "2025",
    title: "Global Expansion",
    desc: "Community surpasses 50K members across 120+ countries.",
    img: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=300&q=60",
  },
];

const JourneyTimeline = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <span className="about-serif italic text-3xl text-blue-400">04</span>
          <h2 className="about-serif text-3xl md:text-4xl text-white mt-4">
            The Journey So Far
          </h2>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-14">
            {milestones.map((m, i) => {
              const isRight = i % 2 === 1;
              return (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 ${
                    isRight ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 w-2.5 h-2.5 rounded-full bg-blue-400 ring-4 ring-[#01021f] z-10" />

                  {/* Spacer for mobile line offset */}
                  <div className="w-8 shrink-0 md:hidden" />

                  {/* Year + thumbnail (opposite side on desktop) */}
                  <div className={`hidden md:flex md:w-[calc(50%-2rem)] items-center gap-4 ${isRight ? "justify-start" : "justify-end"}`}>
                    {!isRight && (
                      <>
                        <span className="about-serif text-4xl text-white/15">{m.year}</span>
                        <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0">
                          <img src={m.img} alt="" className="w-full h-full object-cover" />
                        </div>
                      </>
                    )}
                    {isRight && (
                      <>
                        <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0">
                          <img src={m.img} alt="" className="w-full h-full object-cover" />
                        </div>
                        <span className="about-serif text-4xl text-white/15">{m.year}</span>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:w-[calc(50%-2rem)] pl-2 md:pl-0">
                    <div className="flex items-center gap-3 md:hidden mb-1.5">
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 shrink-0">
                        <img src={m.img} alt="" className="w-full h-full object-cover" />
                      </div>
                      <span className="about-serif text-2xl text-white/20">{m.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{m.title}</h3>
                    <p className="text-sm text-gray-400 mt-1.5 leading-relaxed max-w-sm">{m.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;

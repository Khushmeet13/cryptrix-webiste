import React from "react";
import CustomButton from "../Common/CustomButton";

const caseStudies = [
  {
    year: "2024",
    title: "Cryptrix x FinTech Corp",
    desc: "How Cryptrix reduced fraud by 70% with real-time identity layers.",
    img: "https://media.istockphoto.com/id/1345144783/photo/freelancers-working-on-new-projects.webp?a=1&b=1&s=612x612&w=0&k=20&c=neQiphtWClLK42L_swtJz5lX2GImunkn8KvIcDg-5sI=",
  },
  {
    year: "2023",
    title: "Government Blockchain Identity Pilot",
    desc: "Pilot program for digital identity authentication at national scale.",
    img: "https://media.istockphoto.com/id/1345146934/photo/freelancers-working-on-new-projects.webp?a=1&b=1&s=612x612&w=0&k=20&c=BwwGAkz-J_QzGZGG86O0mHzl60ITtss12W6IQ-zbNlE=",
  },
  {
    year: "2022",
    title: "Enterprise Automation Upgrade",
    desc: "Decentralized automation layer adopted by 250+ enterprises.",
    img: "https://media.istockphoto.com/id/635780808/photo/case-study.webp?a=1&b=1&s=612x612&w=0&k=20&c=uyMJ7BEPEvhXDrSxo_sakcRhrFvmt7C0D7yUp_vgI64=",
  },
];

const CaseStudies = () => {
  return (
    <section className="relative w-full bg-[#01021f] text-white py-20 md:py-24 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
            Case Studies
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">In Practice</h2>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto pl-6 border-l border-white/15 space-y-16">
        {caseStudies.map((item, i) => (
          <div
            key={i}
            className="relative flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-6 top-2 w-3 h-3 bg-blue-400 rounded-full" />

            {/* Text Section */}
            <div className="flex-1">
              <p className="text-blue-400 text-sm font-semibold">{item.year}</p>
              <h3 className="text-xl font-semibold mt-1 text-white">{item.title}</h3>
              <p className="text-gray-400 mt-2 leading-relaxed mb-4">{item.desc}</p>

              <CustomButton text="View Case Study" bgColor="bg-indigo-600" slideColor="bg-black" />
            </div>

            {/* Right Side Image */}
            <div className="w-full md:w-84 h-40 rounded-xl overflow-hidden border border-white/10">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;

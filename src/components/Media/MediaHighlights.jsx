import React from "react";

const events = [
  {
    date: "2021",
    title: "Cryptrix Founded",
    desc: "Cryptrix begins as a research project focused on scalable, secure infrastructure.",
    img: "https://images.unsplash.com/photo-1543242594-c8bae8b9e708?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByZXNzfGVufDB8fDB8fHww",
  },
  {
    date: "2022",
    title: "Seed Funding Round",
    desc: "Early backers fund the first testnet deployment and core protocol design.",
    img: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByZXNzfGVufDB8fDB8fHww",
  },
  {
    date: "2022",
    title: "Public Testnet Launched",
    desc: "Thousands of validators join the first public testnet.",
    img: "https://media.istockphoto.com/id/866600030/photo/abstract-cyberspace-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sr0u60I1nxRvq1mZaWAgw2Wf8_YdBOqUWCn6ngQtN_M=",
  },
  {
    date: "2023",
    title: "Security Audit Completed",
    desc: "Independent auditors review and clear the core protocol.",
    img: "https://media.istockphoto.com/id/1367616995/photo/customer-feedback-experience-review-concept.jpg?s=612x612&w=0&k=20&c=cMJPKIgixe2htRkeOxIJz_m7PCYnpu-pEFaGvph37Wk=",
  },
  {
    date: "2023",
    title: "Mainnet Launch",
    desc: "Cryptrix mainnet goes live with staking and governance enabled.",
    img: "https://images.unsplash.com/photo-1543242594-c8bae8b9e708?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByZXNzfGVufDB8fDB8fHww",
  },
  {
    date: "2024",
    title: "DEX & Wallet Suite Released",
    desc: "Cryptrix DEX and multi-chain wallet ship to the public.",
    img: "https://media.istockphoto.com/id/866600030/photo/abstract-cyberspace-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sr0u60I1nxRvq1mZaWAgw2Wf8_YdBOqUWCn6ngQtN_M=",
  },
  {
    date: "2024",
    title: "1M Transactions Milestone",
    desc: "The network processes its one millionth on-chain transaction.",
    img: "https://media.istockphoto.com/id/1367616995/photo/customer-feedback-experience-review-concept.jpg?s=612x612&w=0&k=20&c=cMJPKIgixe2htRkeOxIJz_m7PCYnpu-pEFaGvph37Wk=",
  },
  {
    date: "2025",
    title: "Global Community Expansion",
    desc: "Cryptrix community surpasses 50K members across 120+ countries.",
    img: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByZXNzfGVufDB8fDB8fHww",
  },
];

const MediaHighlights = () => {
  return (
    <div className="w-full py-20 md:py-24 bg-[#01021f] text-white relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10">
        <div className="px-6 sm:px-20 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Timeline
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Media Highlights</h2>
        </div>

        <div className="relative flex overflow-x-auto scrollbar-hide pl-6 sm:pl-20 pb-2">
          {events.map((item, i) => (
            <div key={i} className="relative flex flex-col items-center">
              {i % 2 === 0 ? <DateBox date={item.date} /> : <ContentBox item={item} />}
              {i % 2 === 0 ? <ContentBox item={item} /> : <DateBox date={item.date} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* DATE BOX */
const DateBox = ({ date }) => (
  <div className="w-[320px] h-[190px] border border-white/10 bg-white/[0.02] flex items-center justify-center backdrop-blur-md">
    <div className="text-4xl font-bold text-white/20">{date}</div>
  </div>
);

/* CONTENT BOX */
const ContentBox = ({ item }) => (
  <div className="relative w-[320px] h-[190px] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl">
    {/* BG IMAGE */}
    <img
      src={item.img}
      alt={item.title}
      className="absolute inset-0 w-full h-full object-cover opacity-30"
    />

    <div className="absolute inset-0 bg-[#01021f]/70" />

    <div className="relative p-5 text-white">
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
    </div>
  </div>
);

export default MediaHighlights;

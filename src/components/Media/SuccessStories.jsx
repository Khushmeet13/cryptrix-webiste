import React from "react";
import CustomButton from "../Common/CustomButton";

const stories = [
  {
    title: "How Cryptrix Improved Transaction Security by 92%",
    desc: "A deep dive into how Cryptrix helped enterprises achieve unmatched security with decentralized verification.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Scaling to Millions of Users Seamlessly",
    desc: "See how Cryptrix infrastructure powered massive scale while keeping costs extremely low.",
    img: "https://media.istockphoto.com/id/1147479504/photo/business-is-winning-when-we-stick-together.webp?a=1&b=1&s=612x612&w=0&k=20&c=YbsybTDWhJf0Z_4Scl9JbDTln5lYlmO5tLHqLtr9t5Y=",
  },
  {
    title: "Global Brand Adoption in 12 Months",
    desc: "How Cryptrix enabled brands to expand into new countries using blockchain-based trust.",
    img: "https://media.istockphoto.com/id/1471444483/photo/customer-satisfaction-survey-concept-users-rate-service-experiences-on-online-application.jpg?s=612x612&w=0&k=20&c=HFh1o4JU68KWv7PXgbLdIZT0_qepmgePEkvbsLJr5p0=",
  },
];

const SuccessStories = () => {
  return (
    <section className="relative w-full bg-[#01021f] text-white py-20 md:py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
            Success Stories
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Real impact, real builders
        </h2>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-14">
        {stories.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full max-w-[400px] rounded-2xl overflow-hidden border border-white/10">
              <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{item.desc}</p>

              <CustomButton
                text="Read Full Story"
                bgColor="bg-white/[0.05] border border-white/10"
                slideColor="bg-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;

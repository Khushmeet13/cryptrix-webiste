import React from "react";
import { Cpu, Layers, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "High Throughput",
    desc: "Cryptrix is engineered for ultra-high transaction throughput, enabling thousands of transactions per second with near-instant finality.",
    icon: <Cpu size={28} className="text-blue-500" />,
  },
  {
    title: "Infinite Scalability",
    desc: "Modular architecture and optimized smart contract execution allow Cryptrix to scale seamlessly as users, validators, and applications grow.",
    icon: <Layers size={28} className="text-blue-500" />,
  },
  {
    title: "Always Available",
    desc: "A decentralized validator network ensures maximum uptime, fault tolerance, and continuous access to assets and applications worldwide.",
    icon: <ShieldCheck size={28} className="text-blue-500" />,
  },
];


const Features = () => {
  return (
    <section className="w-full py-22 pb-36 bg-[#01021f] text-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
          Our Features
        </h2>
        <p className="text-gray-400 mt-3">
          Discover what makes a powerful decentralized blockchain network.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="
               border border-gray-100 hover:border-blue-900 rounded-2xl p-8 
              hover:shadow-[0_0_20px_rgba(0,122,255,0.35)] hover:-translate-y-1 transition-all duration-300
              relative text-white
            "
          >
            {/* Icon */}
            <div className="absolute top-6 right-6">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            {/* Line */}
            <div className="w-full h-px bg-gray-200 my-5"></div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

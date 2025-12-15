import React from "react";
import { Cpu, Layers, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "High-throughput",
    desc: "SapherChain offers extremely high TPS performance, making it efficient for daily transactions and scalable as network demand grows.",
    icon: <Cpu size={28} className="text-indigo-500" />,
  },
  {
    title: "High-scalability",
    desc: "Smart contracts and modular chain architecture allow developers to deploy diverse applications, supporting a massive and growing user ecosystem.",
    icon: <Layers size={28} className="text-indigo-500" />,
  },
  {
    title: "High-availability",
    desc: "SapherChain’s decentralized consensus ensures network reliability, user asset security, and uninterrupted operations across the network.",
    icon: <ShieldCheck size={28} className="text-indigo-500" />,
  },
];

const Features = () => {
  return (
    <section className="w-full py-22 pb-36 bg-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
          SapherChain Features
        </h2>
        <p className="text-gray-500 mt-3">
          Discover what makes SapherChain a powerful decentralized blockchain network.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="
              bg-white border border-gray-100 rounded-2xl p-8 shadow-sm 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300
              relative
            "
          >
            {/* Icon */}
            <div className="absolute top-6 right-6">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>

            {/* Line */}
            <div className="w-full h-px bg-gray-200 my-5"></div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

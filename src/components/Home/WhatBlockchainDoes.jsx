import React from "react";
import { Shield, Zap, Globe, Lock, Cpu, BarChart3 } from "lucide-react";

const WhatBlockchainDoes = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Lightning-Fast Transactions",
      desc: "Send transactions and execute smart contracts in milliseconds with Cryptrix’s ultra-optimized network.",
    },
    {
      icon: <Lock size={32} />,
      title: "Military-Grade Security",
      desc: "Advanced cryptography and multi-layered validation ensure zero-compromise security for all users.",
    },
    {
      icon: <Globe size={32} />,
      title: "Global Decentralization",
      desc: "Validators distributed across continents guarantee openness, fairness, and resilience.",
    },
    {
      icon: <Cpu size={32} />,
      title: "AI-Powered Validation",
      desc: "AI-driven consensus logic improves performance, reduces congestion, and maintains stability.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Scalable to Millions",
      desc: "Built to support millions of users and dApps without compromising speed or reliability.",
    },
    {
      icon: <Shield size={32} />,
      title: "Zero Downtime",
      desc: "Self-healing nodes and fault-tolerant architecture ensure 24/7 availability.",
    },
  ];

  return (
   <section className="relative w-full py-20 text-white overflow-hidden 
    bg-gradient-to-br from-[#01021f] via-[#000239] to-[#01021f]">

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-wide">
            What{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-300">
              Cryptrix
            </span>{" "}
            Offers
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            Cryptrix is a next-generation blockchain network designed for speed, security, and decentralized governance at global scale.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl backdrop-blur-md border border-white/10
                         hover:shadow-[0_0_20px_rgba(0,122,255,0.25)]
                         transition-all duration-500 group overflow-hidden"
            >
              {/* Bottom Border Center-to-Edges */}
              <span
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2
                           h-0.5 w-0 bg-blue-500
                           group-hover:w-full transition-all duration-500 origin-center
                           rounded-t shadow-[0_0_4px_rgba(0,122,255,0.5)] blur-sm"
              />

              {/* Icon */}
              <div className="flex justify-center mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-center mb-2 text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatBlockchainDoes;

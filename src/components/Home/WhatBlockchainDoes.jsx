import React from "react";
import { Shield, Zap, Globe, Lock, Cpu, BarChart3 } from "lucide-react";

const WhatBlockchainDoes = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Lightning-Fast Transactions",
      desc: "Execute transfers and smart contracts in milliseconds using our ultra-optimized consensus.",
    },
    {
      icon: <Lock size={32} />,
      title: "Military-Grade Security",
      desc: "Advanced cryptography and multi-layered node validation ensures zero-compromise security.",
    },
    {
      icon: <Globe size={32} />,
      title: "Global Decentralization",
      desc: "Distributed validators across continents, ensuring openness, fairness & resilience.",
    },
    {
      icon: <Cpu size={32} />,
      title: "AI-Powered Validation",
      desc: "AI-optimized node logic improves performance, stability & reduces chain congestion.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Scalable to Millions",
      desc: "Horizontally scalable architecture built to handle millions of users & dApps.",
    },
    {
      icon: <Shield size={32} />,
      title: "Zero Downtime",
      desc: "Self-recovering nodes and fault-tolerant architecture ensure 24/7 uptime.",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gray-100 text-white overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-black">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-700">
              SapherChain
            </span>{" "}
            Does
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            A next-generation blockchain designed to be fast, secure and ready for the AI-powered decentralized future.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-black/10
              hover:border-indigo-400/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.55)]
              transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4 text-indigo-300 group-hover:text-indigo-400 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-center mb-2 text-black" >
                {item.title}
              </h3>

              <p className="text-gray-400 text-center text-sm leading-relaxed">
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

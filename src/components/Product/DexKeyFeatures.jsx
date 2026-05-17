import React from "react";
import {
  Lock,
  Zap,
  Droplets,
  ShieldCheck,
  Globe,
} from "lucide-react";

const features = [
  {
    title: "Non-Custodial Trading",
    desc: "You control your assets at all times.",
    icon: <Lock size={26} />,
  },
  {
    title: "Fast & Low-Cost Swaps",
    desc: "Optimized smart contracts for efficient trading.",
    icon: <Zap size={26} />,
  },
  {
    title: "Deep Liquidity",
    desc: "Strong liquidity pools for minimal slippage.",
    icon: <Droplets size={26} />,
  },
  {
    title: "Audited Smart Contracts",
    desc: "Security-first architecture.",
    icon: <ShieldCheck size={26} />,
  },
  {
    title: "Multi-Chain Ready",
    desc: "Seamless trading across multiple networks.",
    icon: <Globe size={26} />,
  },
];

const DexKeyFeatures = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-3 rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for Secure & Efficient Trading
          </h2>
          <p className="text-gray-600">
            Everything you need for a fast, secure, and decentralized trading experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                group rounded-3xl border border-gray-200
                bg-white p-6 text-center
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              <div
                className="
                  mx-auto mb-5 flex h-14 w-14 items-center justify-center
                  rounded-2xl bg-indigo-50 text-indigo-600
                  transition group-hover:bg-indigo-600 group-hover:text-white
                "
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DexKeyFeatures;

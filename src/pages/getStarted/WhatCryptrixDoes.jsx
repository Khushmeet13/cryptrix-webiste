import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import NewsletterSignup from "@/components/Community/NewsletterSignup";

const features = [
  {
    title: "Fast Speed",
    short: "Sub-second finality with high throughput.",
    long: "Cryptrix processes transactions with extremely low latency, enabling real-time applications such as payments, gaming, and DeFi without congestion.",
    image:
      "https://media.istockphoto.com/id/2219130406/photo/cloud-computing-symbol-connects-to-server-datacenter-network.webp?a=1&b=1&s=612x612&w=0&k=20&c=1XxVguSOsoiD0ND8F1He0rYbYgX_C_xlqnbfbhfVyXU=",
  },
  {
    title: "Low Fees",
    short: "Minimal and predictable transaction costs.",
    long: "CRX coin is optimized for efficiency, ensuring transaction fees remain low and stable even during high network activity.",
    image:
      "https://media.istockphoto.com/id/1617946218/photo/businessman-using-mobile-with-zero-percentage.webp?a=1&b=1&s=612x612&w=0&k=20&c=1Hf01Fuup6ltTNRcQ3hc0BI0dXn6N9WBO4bYJT6WcCM=",
  },
  {
    title: "Smart Contracts",
    short: "Secure, deterministic execution for dApps.",
    long: "Developers can deploy secure smart contracts with deterministic execution, ensuring predictable behavior across the network.",
    image:
      "https://media.istockphoto.com/id/1407136766/photo/digital-signature-is-future-of-technology-document-management-system-and-online-documentation.webp?a=1&b=1&s=612x612&w=0&k=20&c=7sHGofsJy4Qg7HuK-mpuBTEIBCTiFOZ9bRMENJfDbDg=",
  },
  {
    title: "Security",
    short: "Validator staking & network-level protection.",
    long: "Cryptrix uses validator staking, slashing mechanisms, and cryptographic guarantees to protect the network from malicious activity.",
    image:
      "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Scalability",
    short: "Built to scale without congestion.",
    long: "The network is architected to scale horizontally, supporting future growth without sacrificing performance or decentralization.",
    image:
      "https://media.istockphoto.com/id/2184251190/photo/real-time-data-businessman-analyzing-and-monitoring-technological-edge-computing-low-latency.jpg?s=612x612&w=0&k=20&c=S-xFGug_0FDTAcrze__101oXKhEIabnvMcVa_k4V_xc=",
  },
];

const WhatCryptrixDoes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <section className="relative bg-black py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#312e81,_transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block mb-6 px-4 py-1 rounded-full bg-indigo-600/10 text-indigo-400 text-sm">
            Layer-1 Blockchain
          </span>

          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            What Cryptrix Does
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
            Cryptrix is a high-performance blockchain designed for fast
            execution, ultra-low fees, and secure decentralized applications
            powered by the CRX coin.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition">
              Explore Docs
            </button>
            <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
              View Explorer
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold text-black mb-4">
              The Problem With Traditional Blockchains
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>• High transaction fees</li>
              <li>• Slow confirmations</li>
              <li>• Poor scalability</li>
              <li>• Complex developer experience</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Cryptrix Solution
            </h3>
            <p className="text-gray-600">
              Cryptrix introduces an optimized execution layer and efficient
              consensus that enables fast finality, low fees, and secure smart
              contract execution at scale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Core Features
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* LEFT – Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300
                    ${
                      isActive
                        ? "bg-white border-indigo-600 shadow-lg"
                        : "bg-transparent border-gray-200 hover:bg-white"
                    }
                  `}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-black">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {feature.short}
                        </p>
                      </div>

                      <ChevronRight
                        className={`transition-transform duration-300 ${
                          isActive
                            ? "rotate-90 text-indigo-600"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT – Expanded Content */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-10 shadow-xl h-full transition-all duration-500">
                <span className="text-sm uppercase tracking-wide text-indigo-600">
                  {features[activeIndex].title}
                </span>

                <h3 className="text-2xl font-semibold text-black mt-4">
                  Why it matters
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {features[activeIndex].long}
                </p>

                {/* Decorative bar */}
                <div className="mt-8 h-1 w-20 bg-indigo-600 rounded-full" />

                <div className="mt-5 overflow-hidden ">
                  <img
                    src={features[activeIndex].image}
                    alt={features[activeIndex].title}
                    className="w-full h-86 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12">
            What Can You Build on Cryptrix
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "DeFi",
              "Payments",
              "NFTs",
              "Gaming",
              "DAOs",
              "Enterprise Apps",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 p-6 hover:border-indigo-600 transition"
              >
                <h4 className="font-semibold text-black">{item}</h4>
                <p className="text-sm text-gray-500 mt-2">
                  Build scalable decentralized solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-22">
        
        <div className="max-w-7xl mx-auto p-10 text-center border border-indigo-100 rounded-2xl bg-gradient-to-tr from-indigo-300/10 to-purple-300/10 ">
          <h2 className="text-3xl font-semibold mb-2">
            Open, Transparent & Verifiable
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mb-10">
            All transactions and smart contracts on Cryptrix are publicly
            verifiable.
          </p>

          <div className="flex justify-center gap-6">
            <button className="px-6 py-3 rounded-full bg-indigo-600 text-white">
              Explorer
            </button>
            <button className="px-6 py-3 rounded-full border border-gray-300">
              Documentation
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-22 text-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">CRX Coin Utility</h2>
            <p className="text-gray-500">
              CRX is the native coin of Cryptrix, powering the network
              economy.
            </p>
          </div>

          <ul className="space-y-4 text-gray-500">
            <li>• Transaction fees</li>
            <li>• Staking & validator rewards</li>
            <li>• Network security</li>
            <li>• Governance participation</li>
            <li>• Ecosystem incentives</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 pb-22">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12">
            How Cryptrix Works
          </h2>

          <div className="flex flex-col md:flex-row gap-10">
            {[
              "User Transaction",
              "Validator Processing",
              "Block Finality",
              "Rewards",
            ].map((step, i) => (
              <div key={i} className="flex-1">
                <div className="h-1 w-12 bg-indigo-600 mb-4" />
                <h4 className="font-semibold text-black">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-22 text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-2">
            Start Building on Cryptrix
          </h2>
          <p className="text-gray-500 mb-10">
            Stake CRX, explore the network, or build your next dApp today.
          </p>

          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-indigo-600 text-white">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-full border border-gray-300">
              Stake CRX
            </button>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

export default WhatCryptrixDoes;

import { ArrowBigDown, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const faqData = [
  {
    q: "What is Cryptrix?",
    a: "Cryptrix is a high-performance Layer-1 blockchain designed for security-first applications, scalable decentralized infrastructure, and enterprise-level deployments.",
  },
  {
    q: "What makes Cryptrix different from other blockchains?",
    a: `Cryptrix focuses on real-world security and data integrity. It uses a trustless validation layer, modular architecture, and on-chain identity verification to provide a secure blockchain environment for enterprises and developers.`,
  },
  {
    q: "How does staking work on Cryptrix?",
    a: `Cryptrix allows users to stake CRX tokens to help secure the network. Validators receive staking rewards, while delegators earn a percentage of validator rewards. Staked tokens remain non-custodial and can be un-staked anytime after the cooldown period.`,
  },
  {
    q: "What consensus mechanism does Cryptrix use?",
    a: "Cryptrix uses a Delegated Proof-of-Stake (DPoS) + Byzantine Fault Tolerance hybrid mechanism to achieve high throughput, low latency, and strong network resilience.",
  },
  {
    q: "What can developers build on Cryptrix?",
    a: `Developers can build:
• Smart contract applications  
• Secure identity-based dApps  
• Enterprise data solutions  
• DeFi protocols  
• NFT + token ecosystems  
• High-throughput micro-services  
Cryptrix supports EVM compatibility for easy migration.`,
  },
  {
    q: "Is Cryptrix compatible with MetaMask?",
    a: "Yes. Cryptrix is fully EVM compatible. Developers and users can connect through MetaMask by adding the Cryptrix RPC and chain ID.",
  },
  {
    q: "What is the CRX token used for?",
    a: `CRX is used for:
• Gas fees  
• Staking  
• Validator rewards  
• Governance votes  
• Cross-chain fees  
• Access to premium on-chain features`,
  },
  {
    q: "Does Cryptrix support NFTs?",
    a: "Yes. Cryptrix supports an optimized NFT framework with low minting fees and high-speed transactions, making it suitable for gaming and digital asset ecosystems.",
  },
  {
    q: "How fast is Cryptrix?",
    a: "Cryptrix can process up to 10,000+ transactions per second with sub-second finality thanks to its parallel execution engine and optimized consensus mechanism.",
  },
  {
    q: "Does Cryptrix have a native bridge?",
    a: `Yes. Cryptrix includes a trust-minimized cross-chain bridge that supports the transfer of tokens, NFTs, and arbitrary data between major Layer-1 and Layer-2 blockchains.`,
  },
  {
    q: "How secure is Cryptrix?",
    a: `Cryptrix includes:
• Multi-layer consensus  
• Slashing for malicious validators  
• On-chain monitoring  
• Enterprise-grade encryption  
• Automatic rollback protection  
Security is a core part of the protocol design.`,
  },
  {
    q: "What kind of applications benefit the most from Cryptrix?",
    a: `Ideal use cases include:
• Financial platforms  
• Identity-based systems  
• Gaming  
• Supply-chain tracking  
• Healthcare data  
• Enterprise real-time analytics`,
  },
  {
    q: "Does Cryptrix have governance?",
    a: "Yes. CRX token holders can vote on protocol upgrades, economic parameters, validator rules, and ecosystem grants.",
  },
  {
    q: "How do I become a validator on Cryptrix?",
    a: `To become a validator, you need:
• Minimum required CRX stake  
• A node running Cryptrix Validator software  
• Stable uptime and performance  
Validators earn rewards but may face slashing for malicious behavior.`,
  },
  {
    q: "Where can I track Cryptrix transactions?",
    a: "You can track all transactions, smart contracts, and on-chain data through the official Cryptrix Explorer.",
  },
];

const FaqPage = () => {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div>
      {/* Top Section */}
      <section className="relative h-[40vh] bg-gradient-to-br from-[#01021f] via-indigo-950/70 to-black/90 flex flex-col items-center justify-center text-white pt-20">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-6 text-center">
          Frequently Asked Questions
        </h1>

        {/* Search Bar */}
        <div className="w-full max-w-md sm:max-w-xl px-6">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your question..."
              className="w-full px-5 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-xs sm:text-base"
            />
            <svg
              className="w-3 h-3 md:w-5 md:h-5 absolute right-5 top-1/2 -translate-y-1/2 text-white/70"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#01021f] min-h-screen py-2 px-8 md:px-20">
        {faqData
          .filter(
            (item) =>
              item.q.toLowerCase().includes(query.toLowerCase()) ||
              item.a.toLowerCase().includes(query.toLowerCase())
          )
          .map((item, i) => (
            <div key={i} className="py-4">
              {/* Question */}
              <h2 className="text-xl font-semibold text-white mb-3">
                {item.q}
              </h2>

              {/* Answer (expand/collapse) */}
              <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-line border-b border-white/10 pb-2">
                {openIndex === i ? (
                  <>{item.a}</>
                ) : (
                  <>
                    {item.a.length > 240
                      ? item.a.substring(0, 240) + "..."
                      : item.a}
                  </>
                )}

                {/* More / Less Button */}
                {item.a.length > 240 && (
                  <button
                    onClick={() => toggle(i)}
                    className="mt-3 text-sm text-blue-400 flex items-center gap-1 hover:cursor-pointer"
                  >
                    {openIndex === i ? (
                      <span className="flex items-center gap-1 ">
                        pack up <ChevronUp className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        more <ChevronDown className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}

        {/* If No Results */}
        {faqData.filter(
          (item) =>
            item.q.toLowerCase().includes(query.toLowerCase()) ||
            item.a.toLowerCase().includes(query.toLowerCase())
        ).length === 0 && (
          <p className="text-gray-500 text-center py-10">
            No matching questions found.
          </p>
        )}
      </section>
    </div>
  );
};

export default FaqPage;

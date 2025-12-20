import { ArrowBigDown, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const faqData = [
  {
    q: "What is SapherChain?",
    a: "SapherChain is a high-performance Layer-1 blockchain designed for security-first applications, scalable decentralized infrastructure, and enterprise-level deployments.",
  },
  {
    q: "What makes SapherChain different from other blockchains?",
    a: `SapherChain focuses on real-world security and data integrity. It uses a trustless validation layer, modular architecture, and on-chain identity verification to provide a secure blockchain environment for enterprises and developers.`,
  },
  {
    q: "How does staking work on SapherChain?",
    a: `SapherChain allows users to stake SAPHER tokens to help secure the network. Validators receive staking rewards, while delegators earn a percentage of validator rewards. Staked tokens remain non-custodial and can be un-staked anytime after the cooldown period.`,
  },
  {
    q: "What consensus mechanism does SapherChain use?",
    a: "SapherChain uses a Delegated Proof-of-Stake (DPoS) + Byzantine Fault Tolerance hybrid mechanism to achieve high throughput, low latency, and strong network resilience.",
  },
  {
    q: "What can developers build on SapherChain?",
    a: `Developers can build:
• Smart contract applications  
• Secure identity-based dApps  
• Enterprise data solutions  
• DeFi protocols  
• NFT + token ecosystems  
• High-throughput micro-services  
SapherChain supports EVM compatibility for easy migration.`,
  },
  {
    q: "Is SapherChain compatible with MetaMask?",
    a: "Yes. SapherChain is fully EVM compatible. Developers and users can connect through MetaMask by adding the Sapher RPC and chain ID.",
  },
  {
    q: "What is the SAPHER token used for?",
    a: `SAPHEL is used for:  
• Gas fees  
• Staking  
• Validator rewards  
• Governance votes  
• Cross-chain fees  
• Access to premium on-chain features`,
  },
  {
    q: "Does SapherChain support NFTs?",
    a: "Yes. SapherChain supports an optimized NFT framework with low minting fees and high-speed transactions, making it suitable for gaming and digital asset ecosystems.",
  },
  {
    q: "How fast is SapherChain?",
    a: "SapherChain can process up to 10,000+ transactions per second with sub-second finality thanks to its parallel execution engine and optimized consensus mechanism.",
  },
  {
    q: "Does SapherChain have a native bridge?",
    a: `Yes. SapherChain includes a trust-minimized cross-chain bridge that supports the transfer of tokens, NFTs, and arbitrary data between major Layer-1 and Layer-2 blockchains.`,
  },
  {
    q: "How secure is SapherChain?",
    a: `SapherChain includes:
• Multi-layer consensus  
• Slashing for malicious validators  
• On-chain monitoring  
• Enterprise-grade encryption  
• Automatic rollback protection  
Security is a core part of the protocol design.`,
  },
  {
    q: "What kind of applications benefit the most from SapherChain?",
    a: `Ideal use cases include:
• Financial platforms  
• Identity-based systems  
• Gaming  
• Supply-chain tracking  
• Healthcare data  
• Enterprise real-time analytics`,
  },
  {
    q: "Does SapherChain have governance?",
    a: "Yes. SAPHER token holders can vote on protocol upgrades, economic parameters, validator rules, and ecosystem grants.",
  },
  {
    q: "How do I become a validator on SapherChain?",
    a: `To become a validator, you need:
• Minimum required SAPHER stake  
• A node running SapherChain Validator software  
• Stable uptime and performance  
Validators earn rewards but may face slashing for malicious behavior.`,
  },
  {
    q: "Where can I track SapherChain transactions?",
    a: "You can track all transactions, smart contracts, and on-chain data through the official Sapher Explorer.",
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
      <section className="relative h-[40vh] bg-gradient-to-br from-indigo-900 via-indigo-950/40 to-black flex flex-col items-center justify-center text-white pt-20">
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
      <section className="bg-white min-h-screen py-2 px-8 md:px-20">
        {faqData
          .filter(
            (item) =>
              item.q.toLowerCase().includes(query.toLowerCase()) ||
              item.a.toLowerCase().includes(query.toLowerCase())
          )
          .map((item, i) => (
            <div key={i} className="py-4">
              {/* Question */}
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {item.q}
              </h2>

              {/* Answer (expand/collapse) */}
              <div className="text-gray-500 text-sm leading-relaxed whitespace-pre-line border-b border-gray-200 pb-2">
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
                    className="mt-3 text-sm text-red-400 flex items-center gap-1 hover:cursor-pointer"
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

import React from "react";
import { Wallet, Compass, Code2, BarChart3 } from "lucide-react";

const quickLinks = [
  {
    title: "Cryptrix Wallet",
    desc: "A secure and intuitive wallet to store, send, stake, and manage Cryptrix assets with full self-custody.",
    icon: <Wallet size={30} className="text-blue-500" />,
    link: "#",
  },
  {
    title: "Cryptrix Explorer",
    desc: "Explore blocks, transactions, validators, and real-time network activity with complete transparency.",
    icon: <Compass size={30} className="text-blue-500" />,
    link: "#",
  },
  {
    title: "Developer Hub",
    desc: "Build scalable dApps on Cryptrix using smart contracts, SDKs, APIs, and detailed documentation.",
    icon: <Code2 size={30} className="text-blue-500" />,
    link: "#",
  },
  {
    title: "Tokenomics",
    desc: "Understand Cryptrix economics, staking rewards, governance model, and supply mechanics.",
    icon: <BarChart3 size={30} className="text-blue-500" />,
    link: "#",
  },
];

const WalletQuickLinks = () => {
  return (
    <section className="w-full py-20 pb-32 bg-[#01021f] text-white">
      <div className="text-center mb-14">
        <h2 className="text-2xl sm:text-4xl font-semibold">Cryptrix Hub</h2>
        <p className="text-gray-400 mt-3 text-lg">
          Wallet, explorer, developer tools, and everything powering the Cryptrix ecosystem.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {quickLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="
              group relative  p-7 rounded-2xl
              border border-white/10
              hover:-translate-y-1 transition-all duration-300
              flex flex-col gap-4 overflow-hidden
            "
          >
            {/* Bottom Soft Border Animation */}
            <span
              className="
                absolute bottom-0 left-1/2 -translate-x-1/2
                h-[2px] w-0 bg-indigo-900
                group-hover:w-full transition-all duration-500
                origin-center rounded-full
                shadow-[0_0_8px_rgba(99,102,241,0.8)]
              "
            />

            {/* Icon */}
            <div
              className="
               flex items-center justify-start
                 transition-colors duration-300
              "
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* CTA */}
            <span className="text-blue-600 font-medium text-sm mt-auto">
              Open →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WalletQuickLinks;

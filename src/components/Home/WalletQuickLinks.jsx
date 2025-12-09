import React from "react";
import { Wallet, Compass, Code2, BarChart3 } from "lucide-react";

const quickLinks = [
  {
    title: "Sapher Wallet",
    desc: "Securely manage your SPH coins, NFTs, and on-chain assets with our official wallet.",
    icon: <Wallet size={30} className="text-indigo-500" />,
    link: "#",
  },
  {
    title: "Chain Explorer",
    desc: "Track transactions, accounts, blocks, and on-chain activities in real time.",
    icon: <Compass size={30} className="text-indigo-500" />,
    link: "#",
  },
  {
    title: "Developer Docs",
    desc: "Build on SapherChain with APIs, SDKs, and smart contract documentation.",
    icon: <Code2 size={30} className="text-indigo-500" />,
    link: "#",
  },
  {
    title: "Tokenomics",
    desc: "Learn how SPH coin works, distribution model, and economics behind the system.",
    icon: <BarChart3 size={30} className="text-indigo-500" />,
    link: "#",
  },
];

const WalletQuickLinks = () => {
  return (
    <section className="w-full py-22 pb-32 bg-gray-50">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-semibold text-gray-900">SapherChain Hub</h2>
        <p className="text-gray-500 mt-3 text-lg">
          Everything you need — wallet, explorer, developer tools and more.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {quickLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="
              group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300
              flex flex-col gap-4 relative
            "
          >
            {/* Icon */}
            <div
              className="
                w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center 
                group-hover:bg-indigo-100 transition-colors duration-300
              "
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* Button */}
            <span className="text-indigo-600 font-medium text-sm mt-auto group-hover:underline">
              Open →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WalletQuickLinks;

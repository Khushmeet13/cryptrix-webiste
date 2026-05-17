import React, { useState, useMemo } from "react";

const walletFilters = [
  "All Wallets",
  "Hardware",
  "Custodial",
  "Non-Custodial / Self-Custodial",
  "Token Extensions",
  "Blinks and Actions",
  "Solana Pay",
  "Buy Crypto",
  "Sell Crypto",
  "Hold NFTs",
  "MPC",
  "Gas Abstraction",
  "Social Recovery",
  "Staking",
  "Spending Limits",
  "Open Source",
  "Private Key Infrastructure",
];

const wallets = [
  {
    name: "Gem Wallet",
    description:
      "Gem Wallet is an open-source and self-custodial crypto wallet that lets you send, receive, swap, use dApps, buy, and stake cryptocurrencies.",
    icon: "💎",
    link: "#",
    categories: [
      "All Wallets",
      "Non-Custodial / Self-Custodial",
      "Open Source",
      "Hold NFTs",
      "Staking",
    ],
  },
  {
    name: "Backpack",
    description:
      "Backpack offers a robust, user-friendly platform for seamlessly trading, managing, and securing your cryptocurrency assets.",
    icon: "🎒",
    link: "#",
    categories: [
      "All Wallets",
      "Non-Custodial / Self-Custodial",
      "Open Source",
      "Hardware",
    ],
  },
  {
    name: "Decaf",
    description:
      "A Global Bank, Onchain. Instantly transfer money between 184+ countries.",
    icon: "🟣",
    link: "#",
    categories: ["All Wallets", "Custodial", "Buy Crypto", "Sell Crypto"],
  },
  {
    name: "Web3Auth",
    description:
      "An open source, non-custodial key management network. Making Web3 simple, secure, and easy to use.",
    icon: "🅦",
    link: "#",
    categories: [
      "All Wallets",
      "Private Key Infrastructure",
      "Non-Custodial / Self-Custodial",
      "Open Source",
    ],
  },
  {
    name: "Bitget",
    description: "Faster trading, better assets, secure experience.",
    icon: "⚡",
    link: "#",
    categories: ["All Wallets", "Hardware"],
  },
  {
    name: "Dynamic",
    description: "A suite of tools for authentication and user onboarding.",
    icon: "🔷",
    link: "#",
    categories: ["All Wallets", "Custodial", "Buy Crypto", "Sell Crypto"],
  },
  {
    name: "Keystone",
    description: "Seamless hardware wallet experience for Web3.",
    icon: "🧱",
    link: "#",
    categories: ["All Wallets", "Hardware"],
  },
  {
    name: "Crossmint Custodial",
    description: "Enterprise-grade custodial wallet infrastructure.",
    icon: "🍀",
    link: "#",
    categories: ["All Wallets", "Custodial", "Buy Crypto", "Sell Crypto"],
  },
  {
    name: "Phantom",
    description:
      "A friendly and powerful Solana wallet for managing tokens, NFTs, and interacting with Web3 apps.",
    icon: "👻",
    link: "#",
    categories: [
      "All Wallets",
      "Non-Custodial / Self-Custodial",
      "Hold NFTs",
      "Staking",
      "Open Source",
    ],
  },
  {
    name: "Solflare",
    description:
      "Secure and feature-rich Solana wallet supporting staking, NFTs, and Ledger hardware wallets.",
    icon: "🔥",
    link: "#",
    categories: [
      "All Wallets",
      "Non-Custodial / Self-Custodial",
      "Hardware",
      "Staking",
      "Hold NFTs",
    ],
  },
  {
    name: "Backpack",
    description:
      "Next-gen wallet built for xNFTs, trading, and deep Solana ecosystem integrations.",
    icon: "🎒",
    link: "#",
    categories: [
      "All Wallets",
      "Non-Custodial / Self-Custodial",
      "Open Source",
      "Hold NFTs",
    ],
  },
  {
    name: "Glow",
    description: "Simple and intuitive wallet focused on NFTs and Solana DeFi.",
    icon: "✨",
    link: "#",
    categories: ["All Wallets", "Non-Custodial / Self-Custodial", "Hold NFTs"],
  },
  {
    name: "Ledger",
    description:
      "Industry-leading hardware wallet providing maximum security for Solana assets.",
    icon: "🔐",
    link: "#",
    categories: ["All Wallets", "Hardware", "Private Key Infrastructure"],
  },
  {
    name: "Keystone",
    description:
      "Air-gapped hardware wallet for advanced self-custody and security.",
    icon: "🧱",
    link: "#",
    categories: ["All Wallets", "Hardware", "Private Key Infrastructure"],
  },
  {
    name: "Coinbase Wallet",
    description:
      "Self-custodial wallet with easy fiat onramps and Web3 access.",
    icon: "🪙",
    link: "#",
    categories: ["All Wallets", "Custodial", "Buy Crypto", "Sell Crypto"],
  },
  {
    name: "Crossmint Custodial",
    description:
      "Enterprise-grade custodial wallet infrastructure for businesses and platforms.",
    icon: "🌿",
    link: "#",
    categories: ["All Wallets", "Custodial", "Private Key Infrastructure"],
  },
  {
    name: "Magic",
    description:
      "Passwordless authentication and embedded wallets for Web3 apps.",
    icon: "🪄",
    link: "#",
    categories: [
      "All Wallets",
      "MPC",
      "Social Recovery",
      "Private Key Infrastructure",
    ],
  },
  {
    name: "Web3Auth",
    description:
      "Open-source MPC-based key management and authentication layer.",
    icon: "🅦",
    link: "#",
    categories: [
      "All Wallets",
      "MPC",
      "Social Recovery",
      "Open Source",
      "Private Key Infrastructure",
    ],
  },
  {
    name: "Decaf",
    description:
      "On-chain global banking wallet enabling instant international transfers.",
    icon: "🟣",
    link: "#",
    categories: [
      "All Wallets",
      "Custodial",
      "Buy Crypto",
      "Sell Crypto",
      "Solana Pay",
    ],
  },
  {
    name: "Bitget Wallet",
    description:
      "Multi-chain wallet offering DeFi access, swaps, and NFT management.",
    icon: "⚡",
    link: "#",
    categories: [
      "All Wallets",
      "Non-Custodial / Self-Custodial",
      "Hold NFTs",
      "Staking",
    ],
  },
];

const AllWallets = () => {
  const [activeFilter, setActiveFilter] = useState("All Wallets");

  const filteredWallets = useMemo(() => {
    if (activeFilter === "All Wallets") return wallets;

    return wallets.filter((wallet) => wallet.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="w-full">
      <section className="relative h-[55vh] bg-black overflow-hidden">
        {/* LEFT Background Image */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 bg-cover bg-left"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1367477501/photo/web3-technology-concept-hand-using-mobile-phone-to-connect-digital-wallet-smart-e-wallet.webp?a=1&b=1&s=612x612&w=0&k=20&c=2jQVK9S-5IJMCh7kpEvvD8nbANE0HX82OhaJzyJuUXU=')",
          }}
        />

        {/* Gradient Fade (Image → Content) */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/20 via-black/60 to-black" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-end px-20">
          <div className="ml-auto max-w-3xl text-white space-y-6">
            <h3 className="text-indigo-400 text-sm tracking-widest">
              WALLET FINDER
            </h3>

            <h2 className="text-3xl md:text-5xl">
              Find a Wallet That Works for You
            </h2>

            <p className="text-lg text-gray-300 max-w-md">
              Select the features you need to discover a wallet that meets your
              needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {walletFilters.map((item, index) => {
              const isActive = activeFilter === item;

              return (
                <button
                  key={index}
                  onClick={() => setActiveFilter(item)}
                  className={`px-5 py-2 text-xs rounded-full border backdrop-blur-md
              transition-all duration-300 active:scale-95
              ${
                isActive
                  ? "bg-indigo-600 text-white border-indigo-400 shadow-[0_0_25px_-5px_rgba(99,102,241,0.7)]"
                  : "bg-gray-200 text-black border-white/10 hover:bg-indigo-500/20 hover:border-indigo-400/40"
              }
            `}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-black text-3xl font-semibold mb-12">
            Wallets
          </h2>

          {filteredWallets.length === 0 ? (
            <p className="text-gray-400">No wallets found for this category.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredWallets.map((wallet, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl p-8
                    bg-gradient-to-b from-white/5 to-white/0
                    border border-gray-200
                    transition-all duration-300
                    hover:border-indigo-500/40
                    "
                >
                  <div className="mb-6 text-4xl">{wallet.icon}</div>

                  <h3 className="text-black text-xl font-semibold mb-3">
                    {wallet.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {wallet.description}
                  </p>

                  <a
                    href={wallet.link}
                    className="inline-flex items-center gap-2 text-sm text-indigo-400 
                group-hover:text-indigo-300 transition"
                  >
                    View Details →
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllWallets;

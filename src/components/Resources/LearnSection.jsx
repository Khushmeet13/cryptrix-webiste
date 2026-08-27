import { useState } from "react";
import {
  ArrowRight,
  Rocket,
  Wallet,
  LayoutGrid,
  Coins,
  Send,
  Layers,
  Lock,
  Fuel,
  Image,
  ShieldCheck,
} from "lucide-react";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "start", label: "Getting Started", accent: "#60A5FA" },
  { key: "tokens", label: "Tokens & Fees", accent: "#06b6d4" },
  { key: "staking", label: "Staking & Governance", accent: "#A78BFA" },
  { key: "security", label: "Security & NFTs", accent: "#34D399" },
];

const CATEGORY_ACCENT = Object.fromEntries(
  CATEGORIES.filter((c) => c.accent).map((c) => [c.key, c.accent])
);

const cards = [
  {
    part: "01",
    category: "start",
    icon: Rocket,
    title: "What is Cryptrix?",
    description:
      "An introduction to Cryptrix – a lightning-fast, ultra low-cost Layer 1 blockchain built for mass adoption, DeFi, gaming, and real-world applications.",
  },
  {
    part: "02",
    category: "start",
    icon: Wallet,
    title: "What is a Wallet?",
    description:
      "Learn what a Cryptrix wallet is, how it works, and how to set one up safely. Your wallet is the key to interacting with the entire ecosystem.",
  },
  {
    part: "03",
    category: "start",
    icon: LayoutGrid,
    title: "Explore Cryptrix Applications",
    description:
      "A tour of what's already live on Cryptrix — the DEX, wallets, staking, and the dApps building on top of the network today.",
  },
  {
    part: "04",
    category: "tokens",
    icon: Coins,
    title: "Understanding Cryptrix Transaction Fees",
    description:
      "Discover how transaction fees work on Cryptrix, why they stay extremely low, and what this means for payments, DeFi, NFTs, and gaming.",
  },
  {
    part: "05",
    category: "tokens",
    icon: Send,
    title: "Sending and Receiving $YOUR",
    description:
      "Master the basics: learn how to send and receive $YOUR tokens instantly – the fundamental skill for using Cryptrix and its dApps.",
  },
  {
    part: "06",
    category: "tokens",
    icon: Layers,
    title: "Introduction to Cryptrix Tokens",
    description:
      "Explore the different types of tokens on Cryptrix – native SPH, stablecoins, wrapped assets, and project tokens.",
  },
  {
    part: "07",
    category: "staking",
    icon: Lock,
    title: "What is Staking?",
    description:
      "Understand how staking works on Cryptrix, how to earn rewards by securing the network, and key factors when choosing validators.",
  },
  {
    part: "08",
    category: "staking",
    icon: Fuel,
    title: "Introduction to SPH Coin",
    description:
      "Everything about SPH, the native coin powering gas fees, staking rewards, and governance across the Cryptrix network.",
  },
  {
    part: "09",
    category: "security",
    icon: Image,
    title: "What are NFTs",
    description:
      "A beginner's guide to NFTs on Cryptrix – how they're minted, traded, and verified on-chain, and what makes ownership provable.",
  },
  {
    part: "10",
    category: "security",
    icon: ShieldCheck,
    title: "Staying Safe on Cryptrix",
    description:
      "Practical security habits for self-custody: protecting seed phrases, spotting phishing attempts, and verifying contracts before you sign.",
  },
];

export default function LearnSection({ search = "" }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const q = search.trim().toLowerCase();
  const filtered = cards.filter((c) => {
    const matchesCategory = activeCategory === "all" || c.category === activeCategory;
    const matchesSearch =
      !q || c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="learn" className="scroll-mt-24 py-20 md:py-24 px-6 bg-[#01021f]">
      <div className="max-w-7xl mx-auto">
        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {CATEGORIES.map((c) => {
            const isActive = activeCategory === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActiveCategory(c.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "bg-white/[0.02] text-gray-400 border-white/10 hover:border-white/25 hover:text-white"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((card) => {
              const Icon = card.icon;
              const accent = CATEGORY_ACCENT[card.category];
              return (
                <div
                  key={card.title}
                  className="group relative rounded-2xl p-7 border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/20"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: accent + "18", border: `1px solid ${accent}35` }}
                    >
                      <Icon size={19} style={{ color: accent }} strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-mono text-white/20 group-hover:text-white/40 transition-colors">
                      {card.part}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {card.description}
                  </p>

                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white hover:gap-2.5 transition-all duration-300"
                  >
                    Read more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-gray-400">
              No resources match{" "}
              <span className="text-white font-medium">"{search}"</span>. Try
              a different search or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

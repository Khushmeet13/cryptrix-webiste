import { ArrowRight } from "lucide-react";

const LearnCard = ({ part, title, description }) => {
  return (
    <div
      className="group relative rounded-2xl p-8 
      border transition-all duration-500 ease-out
      hover:-translate-y-2 hover:cursor-pointer"
    >
      <div
        className="
        absolute bottom-0 left-0 right-0 h-1 
        bg-gradient-to-r from-transparent via-indigo-500 to-transparent
        opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100
        transition-all duration-500 origin-center
      "
      />

      <span className="text-indigo-600 text-sm font-medium tracking-wider">
        {part}
      </span>

      <h3 className="mt-3 text-2xl font-semibold text-black">{title}</h3>

      <p className="mt-4 text-gray-500 text-base leading-relaxed">
        {description}
      </p>

      <a
        href="#"
        className="mt-10 inline-flex items-center gap-1 text-sm font-medium hover:gap-4 transition-all duration-300"
      >
        READ MORE
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default function LearnSection() {
  const cards = [
    {
      part: "PART 1",
      title: "What is SapherChain?",
      description:
        "An introduction to SapherChain – a lightning-fast, ultra low-cost Layer 1 blockchain built for mass adoption, DeFi, gaming, and real-world applications.",
    },
    {
      part: "PART 2",
      title: "What is a Wallet?",
      description:
        "Learn what a SapherChain wallet is, how it works, and how to set one up safely. Your wallet is the key to interacting with the entire ecosystem.",
    },
    {
      part: "PART 3",
      title: "Understanding SapherChain Transaction Fees",
      description:
        "Discover how transaction fees work on SapherChain, why they stay extremely low, and what this means for payments, DeFi, NFTs, and gaming.",
    },
    {
      part: "PART 4",
      title: "Sending and Receiving $YOUR",
      description:
        "Master the basics: learn how to send and receive $YOUR tokens instantly – the fundamental skill for using SapherChain and its dApps.",
    },
    {
      part: "PART 5",
      title: "What is Staking?",
      description:
        "Understand how staking works on SapherChain, how to earn rewards by securing the network, and key factors when choosing validators.",
    },
    {
      part: "PART 6",
      title: "Introduction to SapherChain Tokens",
      description:
        "Explore the different types of tokens on SapherChain – native $YOUR, stablecoins, wrapped assets, memecoins, and project tokens.",
    },
    {
      part: "PART 7",
      title: "What are NFTs",
      description:
        "Explore the different types of tokens on SapherChain – native $YOUR, stablecoins, wrapped assets, memecoins, and project tokens.",
    },
    {
      part: "PART 8",
      title: "Introduction to SPH coin",
      description:
        "Explore the different types of tokens on SapherChain – native $YOUR, stablecoins, wrapped assets, memecoins, and project tokens.",
    },
    {
      part: "PART 9",
      title: "Explore Sapher Applications",
      description:
        "Explore the different types of tokens on SapherChain – native $YOUR, stablecoins, wrapped assets, memecoins, and project tokens.",
    },
    {
      part: "PART 10",
      title: "Staying safe on SapherChain",
      description:
        "Explore the different types of tokens on SapherChain – native $YOUR, stablecoins, wrapped assets, memecoins, and project tokens.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <LearnCard
              key={index}
              part={card.part}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

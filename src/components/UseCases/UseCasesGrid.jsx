import React from "react";
import { Link } from "react-router-dom";
import { Wallet, Gamepad2, Image as NFTIcon, Landmark, Coins } from "lucide-react";

const cards = [
  {
    title: "Payments",
    icon: Wallet,
    image: "https://plus.unsplash.com/premium_photo-1682104376530-7c733d97802f?w=900&auto=format&fit=crop&q=60",
    link: "/use-cases/payments",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=900&q=80",
    link: "/use-cases/gaming",
  },
  {
    title: "NFTs",
    icon: NFTIcon,
    image: "https://plus.unsplash.com/premium_photo-1666997726532-33f671ca24c8?w=900&auto=format&fit=crop&q=60",
    link: "/use-cases/nfts",
  },
  {
    title: "Govt Solutions",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1667133999049-c3bd03ff57b8?w=900&auto=format&fit=crop&q=60",
    link: "/use-cases/government",
  },
  {
    title: "DeFi",
    icon: Coins,
    image: "https://media.istockphoto.com/id/2055558851/photo/businessman-holding-defi-icon-global-structure-networking-and-data-decentralized-finance.webp?a=1&b=1&s=612x612&w=0&k=20&c=6jwPEIyaMJgLdtcc-SWj8Yu8fiklG-CbLc9dkVBcXpI=",
    link: "/use-cases/defi",
  },
];

const UseCasesGrid = () => {
  return (
    <section className="py-24 px-6 w-full bg-white text-black">

      {/* Heading Section */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Explore Cryptrix Use Cases</h2>
        <p className="text-gray-500 text-xs sm:text-base leading-relaxed">
          Powerful identity, security, and automation layers—built for real industries,
          real users, and real impact.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {cards.map((c, i) => (
          <Link
            key={i}
            to={c.link}
            className="group rounded-2xl overflow-hidden bg-white shadow-md 
                       hover:shadow-xl transition-all duration-300"
          >
            {/* Image Section */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content Box */}
            <div className="p-6">
              <c.icon className="w-8 h-8 text-indigo-600 mb-4" />

              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Explore how Cryptrix transforms the {c.title} industry.
              </p>

              <span className="text-indigo-600 font-medium group-hover:underline">
                Learn More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default UseCasesGrid;

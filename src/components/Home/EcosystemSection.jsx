import React, { useState, useEffect, useRef } from "react";
import {
  Wallet,
  Vault as VaultIcon,
  Aperture,
  Computer,
  Server,
  Layers,
  Shield,
  Activity,
  Database,
  Settings,
} from "lucide-react";

const ecosystemItems = [
  {
    name: "Cryptrix Wallet",
    desc: "The official Cryptrix wallet engineered for speed and security. Manage CRX assets, interact with decentralized applications, and execute instant transactions through a sleek, intuitive interface.",
    color: "bg-indigo-500",
    icon: Wallet,
  },
  {
    name: "Cryptrix Vault",
    desc: "A next-generation digital vault designed for maximum asset protection. Powered by multi-signature authorization, encrypted recovery, and hardened security layers for long-term storage.",
    color: "bg-indigo-500",
    icon: VaultIcon,
  },
  {
    name: "Cryptrix Explorer",
    desc: "A real-time blockchain explorer offering complete transparency across the Cryptrix network. Track transactions, wallets, blocks, and smart contracts with precision and speed.",
    color: "bg-indigo-500",
    icon: Aperture,
  },
  {
    name: "Node Network",
    desc: "A decentralized validator network ensuring fast finality and network integrity. Node operators power Cryptrix with efficient consensus and continuous uptime.",
    color: "bg-indigo-500",
    icon: Computer,
  },
  {
    name: "Smart Contracts",
    desc: "Build and deploy secure smart contracts with deterministic execution. Automate trustless logic and scale decentralized applications on Cryptrix infrastructure.",
    color: "bg-indigo-500",
    icon: Layers,
  },
  {
    name: "Network Security",
    desc: "Advanced security architecture protecting transactions, data, and consensus operations. Designed to resist attacks and maintain chain integrity at all times.",
    color: "bg-indigo-500",
    icon: Shield,
  },
  {
    name: "Analytics",
    desc: "Deep on-chain analytics delivering insights into network performance, transaction throughput, and ecosystem growth for informed decision-making.",
    color: "bg-indigo-500",
    icon: Activity,
  },
  {
    name: "Decentralized Storage",
    desc: "Secure and distributed storage for digital assets and application data. Built for redundancy, availability, and censorship resistance across the Cryptrix network.",
    color: "bg-indigo-500",
    icon: Database,
  },
  {
    name: "Validators",
    desc: "Participate as a validator to secure the Cryptrix network, earn rewards, and support its decentralized consensus mechanism.",
    color: "bg-indigo-500",
    icon: Server,
  },
  {
    name: "Governance",
    desc: "On-chain governance enabling the Cryptrix community to propose upgrades, vote on changes, and guide the network’s evolution transparently.",
    color: "bg-indigo-500",
    icon: Settings,
  },
];


const EcosystemSection = () => {
  const sectionRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    let interval;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Start auto-slide when section is visible
          interval = setInterval(() => {
            setDirection("right");
            setActiveIndex(
              (prevIndex) => (prevIndex + 1) % ecosystemItems.length
            );
          }, 15000);
        } else {
          // Stop auto-slide when section is not visible
          clearInterval(interval);
        }
      },
      { threshold: 0.5 } // 50% of the section visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      clearInterval(interval);
    };
  }, []);

  const handleHover = (index) => {
    setDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
  };

  return (
    <section ref={sectionRef} className="w-full py-20 bg-gradient-to-br from-[#01021f] via-[#000239] to-[#01021f] text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-4xl font-semibold mb-16">
          Ecosystem
        </h2>

        <div className="grid grid-cols-[80px_1fr] lg:grid-cols-1">
          {/* LEFT ICONS – MOBILE & MD */}
          <div className="flex lg:hidden flex-col items-center gap-6 max-h-[370px] overflow-y-auto pr-2">
            {ecosystemItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="p-3 rounded-full transition opacity-60 hover:opacity-100"
              >
                <item.icon
                  size={32}
                  className={
                    index === activeIndex
                      ? "text-indigo-600"
                      : "text-gray-500 hover:text-indigo-600"
                  }
                />
              </button>
            ))}
          </div>
          
          {/* Top Content */}
          <div className="relative w-full h-76 sm:h-72 md:h-74 overflow-hidden">
            {ecosystemItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.name}
                  className={`absolute top-0 left-0 w-full flex flex-col md:flex-row items-center justify-between transition-transform duration-500`}
                  style={{
                    transform: isActive
                      ? "translate(0%,0%)"
                      : index < activeIndex
                      ? window.innerWidth >= 1024
                        ? "translateX(-100%)" // lg+ horizontal
                        : "translateY(-100%)" // md/sm vertical
                      : window.innerWidth >= 1024
                      ? "translateX(100%)"
                      : "translateY(100%)",
                  }}
                >
                  {/* Left Content */}
                  <div className="max-w-2xl p-10 text-center lg:text-left">
                    <h3 className="text-xl md:text-3xl font-semibold">{item.name}</h3>
                    <p className="text-gray-400 mt-4 md:mt-6">{item.desc}</p>
                    <button className="mt-6 px-6 py-2.5 bg-white text-black rounded-full relative overflow-hidden group hover:cursor-pointer hover:text-white hover:bg-transparent hover:border-gray-200 hover:border">
                      <span className="absolute inset-0   scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-full"></span>
                      <span className="relative z-10">Learn more</span>
                    </button>
                  </div>

                  {/* Right Hexagon */}
                  <div className="relative hidden lg:block">
                    <div
                      className={`absolute right-20 -top-16 w-40 h-40 bg-blue-900 rounded-3xl rotate-45 flex items-center justify-center z-10 transition-all duration-500`}
                    >
                      <item.icon size={80} className="-rotate-45 text-white" />
                    </div>
                    <div className="absolute right-4 -top-20 w-28 h-28 bg-gray-200 rounded-3xl opacity-40 rotate-45"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Icons Row */}
      <div className="hidden lg:flex mt-16 border border-gray-200 rounded-md  items-center justify-center flex-wrap gap-10 max-w-5xl mx-auto">
        {ecosystemItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => handleHover(index)}
            className="p-4 rounded-full cursor-pointer transition-all hover:opacity-100 opacity-60"
          >
            <item.icon
              size={30}
              className={`${
                index === activeIndex
                  ? "text-white"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcosystemSection;

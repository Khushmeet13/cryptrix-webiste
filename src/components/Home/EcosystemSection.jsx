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
    name: "SPH Wallet",
    desc: "Your official gateway to the Sapher ecosystem, built for fast and secure digital transactions. Manage tokens, track activity, and interact with dApps — all in one smooth experience. Enjoy instant transfers, cross-chain support, and an intuitive interface designed for both beginners and pros.",
    color: "bg-indigo-500",
    icon: Wallet,
  },
  {
    name: "Vault",
    desc: "A secure smart vault designed for long-term digital asset protection. Features automated recovery, multi-signature security, and enterprise-grade encryption. Perfect for storing high-value assets safely, with easy access controls and detailed audit trails for peace of mind.",
    color: "bg-indigo-500",
    icon: VaultIcon,
  },
  {
    name: "SPH Explorer",
    desc: "A powerful blockchain explorer for searching transactions, wallets, and network activity. Fast, transparent, and optimized to help users track SPH data in real time. Analyze network trends, verify contracts, and gain deep insights into the blockchain ecosystem effortlessly.",
    color: "bg-indigo-500",
    icon: Aperture,
  },
  {
    name: "Nodes Hub",
    desc: "A decentralized hub where validators maintain network security and ultra-fast finality. Built for high performance, low energy consumption, and seamless participation. Monitor node performance, join staking programs, and actively contribute to a robust and scalable network.",
    color: "bg-indigo-500",
    icon: Computer,
  },
  {
    name: "Smart Contracts",
    desc: "Create, deploy, and manage smart contracts seamlessly. Automate workflows, reduce intermediaries, and ensure trustless execution on the blockchain.",
    color: "bg-indigo-500",
    icon: Layers,
  },
  {
    name: "Network Security",
    desc: "Advanced security protocols to safeguard transactions and data. Real-time monitoring and protection against unauthorized access or attacks.",
    color: "bg-indigo-500",
    icon: Shield,
  },
  {
    name: "Analytics",
    desc: "Deep insights into network performance, token activity, and user behavior. Visualize trends and make data-driven decisions.",
    color: "bg-indigo-500",
    icon: Activity,
  },
  {
    name: "Decentralized Storage",
    desc: "Reliable distributed storage for your digital assets and files. Redundant, secure, and always accessible across the network.",
    color: "bg-indigo-500",
    icon: Database,
  },
  {
    name: "Validators",
    desc: "Participate as a network validator to secure the blockchain, earn rewards, and contribute to consensus mechanisms.",
    color: "bg-indigo-500",
    icon: Server,
  },
  {
    name: "Governance",
    desc: "Engage in ecosystem governance. Vote on proposals, shape the network’s future, and participate in decentralized decision-making.",
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
    <section ref={sectionRef} className="w-full py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl font-semibold mb-16">
          SapherChain Ecosystem
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
                    <button className="mt-6 px-6 py-3 bg-black text-white rounded-full relative overflow-hidden group hover:cursor-pointer">
                      <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-700 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-full"></span>
                      <span className="relative z-10">Learn more</span>
                    </button>
                  </div>

                  {/* Right Hexagon */}
                  <div className="relative hidden lg:block">
                    <div
                      className={`absolute right-20 -top-16 w-40 h-40 ${item.color} rounded-3xl rotate-45 flex items-center justify-center z-10 transition-all duration-500`}
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
      <div className="hidden lg:flex mt-20 bg-white p-4 rounded-md  items-center justify-center flex-wrap gap-10 max-w-6xl mx-auto">
        {ecosystemItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => handleHover(index)}
            className="p-4 rounded-full cursor-pointer transition-all hover:opacity-100 opacity-60"
          >
            <item.icon
              size={40}
              className={`${
                index === activeIndex
                  ? "text-indigo-600"
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

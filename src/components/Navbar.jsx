import React, { useState, useEffect } from "react";
import { ChevronDown, Globe, BookOpen, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/sapherchain-logo-white.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: "Get Started", hasDropdown: true },
    { name: "Build", hasDropdown: true },
    { name: "Ecosystem", hasDropdown: true },
    { name: "Governance", hasDropdown: true },
    { name: "More", hasDropdown: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define dropdown items with title + desc
  const dropdownData = {
    "Get Started": [
      {
        title: "What is SPH",
        desc: "Quick overview of blockchain",
        link: "/sph",
      },
      {
        title: "What sapherchain does",
        desc: "Explore the main features and benefits of the SPH blockchain network.",
        link: "/sph",
      },
      {
        title: "Use Cases",
        desc: "Explore real examples and practical applications.",
        ink: "/sph",
      },
      { title: "FAQs", desc: "Get answers to common questions.", link: "/sph" },
      { title: "Get SPH coin", desc: "Wallet details", link: "/sph" },
      {
        title: "Wallet",
        desc: "Manage your SPH coins with ease using wallet tools.",
        link: "/sph",
      },
      {
        title: "Explorer",
        desc: "Track transactions, addresses, and blockchain activity.",
        link: "/sph",
      },
      { title: "How to stake", desc: "Earn rewards by staking", link: "/sph" },
    ],
    Build: [
      { title: "API", desc: "Developer API docs", link: "/sph" },
      { title: "SDK", desc: "Software development kit", link: "/sph" },
      {
        title: "Smart contract guide",
        desc: "Guide for contracts",
        link: "/sph",
      },
      { title: "Node setup", desc: "Run your own node", link: "/sph" },
      { title: "Testnet info", desc: "Information on testnet", link: "/sph" },
      { title: "RPC Endpoints", desc: "Remote procedure calls", link: "/sph" },
      {
        title: "Websocket Endpoints",
        desc: "Realtime connections",
        link: "/sph",
      },
      { title: "SDK Downloads", desc: "Download SDKs", link: "/sph" },
      { title: "Code Playground", desc: "Test your code online", link: "/sph" },
    ],
    Ecosystem: [
      { title: "Fast speed", desc: "High performance", link: "/sph" },
      { title: "Low fee", desc: "Minimal transaction fees", link: "/sph" },
      { title: "Smart contracts", desc: "Automated agreements", link: "/sph" },
      { title: "Security", desc: "Secure & reliable", link: "/sph" },
      { title: "Scalability", desc: "Grow without limits", link: "/sph" },
      { title: "Payments", desc: "Seamless payments", link: "/sph" },
      { title: "Gaming", desc: "Blockchain gaming", link: "/sph" },
      { title: "NFTs", desc: "Digital collectibles", link: "/sph" },
    ],
    Governance: [
      {
        title: "Voting system",
        desc: "Blockchain voting process",
        link: "/sph",
      },
      { title: "Staking", desc: "Earn rewards by locking coins", link: "/sph" },
      {
        title: "Proposals",
        desc: "Learn more about committee proposals",
        link: "/sph",
      },
      {
        title: "Community rules",
        desc: "Guidelines for participation",
        link: "/sph",
      },
    ],
    More: [
      {
        title: "Resources",
        desc: "Guides, tools, references",
        link: "/resources",
      },
      { title: "About", desc: "Mission, vision, purpose", link: "/about" },
      { title: "Legal", desc: "Terms, privacy, policies", link: "/legal" },
      { title: "Media Coverage", desc: "Press and mentions", link: "/sph" },
      { title: "Community", desc: "Chat and connect", link: "/sph" },
      { title: "Meetups", desc: "Events and gatherings", link: "/sph" },
      { title: "Contact", desc: "Support and inquiries", link: "/sph" },
    ],
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* LEFT LOGO */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            <img
              src={logo}
              alt="SapherChain Logo"
              className="h-6 w-auto object-contain"
            />
          </Link>
        </div>

        {/* NAV ITEMS */}
        <ul className="hidden md:flex items-center gap-1 text-white text-md">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button
                className={`
                relative overflow-hidden
                flex items-center gap-1 px-5 py-3 rounded-full
                transition-all duration-300 hover:cursor-pointer
                group
              `}
              >
                <span className="relative z-10 flex items-center gap-1">
                  {item.name}
                </span>
                {item.hasDropdown && (
                  <ChevronDown
                    size={18}
                    className={`transition-all duration-300 ${
                      hoveredItem === item.name
                        ? "opacity-100 z-10"
                        : "opacity-0"
                    }`}
                  />
                )}
                <span
                  className={`
                  absolute inset-0 rounded-full
                  bg-black backdrop-blur-md shadow-lg
                  transition-transform duration-500
                  transform -translate-x-full
                  ${hoveredItem === item.name ? "translate-x-0" : "-translate-x-full"}
                `}
                ></span>
              </button>

              {/* DROPDOWN */}
              {item.hasDropdown && hoveredItem === item.name && (
                <div className="absolute top-full left-0 mt-0.5 w-max min-w-[200px] bg-black backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl p-6">
                  {item.name === "Governance" ? (
                    <div className="flex flex-col gap-4">
                      {dropdownData[item.name].map((dItem, index) => (
                        <DropdownItem
                          key={index}
                          title={dItem.title}
                          desc={dItem.desc}
                        />
                      ))}
                    </div>
                  ) : item.name === "Get Started" ? (
                    <div className="flex flex-row">
                      <div className="pr-6 flex flex-col gap-4 space-y-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="bg-indigo-600 rounded-full p-1.5">
                            <BookOpen color="white" size={14} />
                          </div>
                          <h3 className="text-gray-300 text-sm font-semibold">
                            Learn
                          </h3>
                        </div>
                        {dropdownData[item.name]
                          .slice(0, 4)
                          .map((dItem, index) => (
                            <DropdownItem
                              key={index}
                              title={dItem.title}
                              desc={dItem.desc}
                              isSpecial={index === 1}
                              link={dItem.link}
                            />
                          ))}
                      </div>
                      <div className="w-px bg-white/20 mr-6" />
                      <div className="flex flex-col gap-4 space-y-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="bg-indigo-600 rounded-full p-1.5">
                            <Zap color="white" size={14} />
                          </div>
                          <h3 className="text-gray-300 text-sm font-semibold">
                            Quick Start
                          </h3>
                        </div>
                        {dropdownData[item.name]
                          .slice(4)
                          .map((dItem, index) => (
                            <DropdownItem
                              key={index}
                              title={dItem.title}
                              desc={dItem.desc}
                              link={dItem.link}
                            />
                          ))}
                      </div>
                    </div>
                  ) : (
                    (() => {
                      const items = dropdownData[item.name];
                      const mid = Math.ceil(items.length / 2);
                      const leftItems = items.slice(0, mid);
                      const rightItems = items.slice(mid);
                      return (
                        <div className="flex flex-row">
                          <div className="pr-6 flex flex-col gap-4 space-y-5">
                            {leftItems.map((dItem, index) => (
                              <DropdownItem
                                key={index}
                                title={dItem.title}
                                desc={dItem.desc}
                                link={dItem.link}
                              />
                            ))}
                          </div>
                          <div className="w-px bg-white/20 mr-6" />
                          <div className="flex flex-col gap-4 space-y-5">
                            {rightItems.map((dItem, index) => (
                              <DropdownItem
                                key={`right-${index}`}
                                title={dItem.title}
                                desc={dItem.desc}
                                link={dItem.link}
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })()
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-white cursor-pointer hover:bg-white/10 transition">
          <Globe size={18} /> EN
        </div>
      </div>
    </nav>
  );
};

// Menu Item Component
const DropdownItem = ({ title, desc, link }) => {
  return (
    <Link
      to={link}
      className="group flex items-start justify-between gap-2 px-4 -mx-4 rounded-xl transition-all duration-300 cursor-pointer"
    >
      <div className="max-w-[240px]">
        {" "}
        {/* yahan width limit de di */}
        <h4 className="text-gray-300 font-medium group-hover:text-white transition">
          {title}
        </h4>
        <p className="text-xs text-gray-400 break-words">
          {" "}
          {/* wrap enable */}
          {desc}
        </p>
      </div>
      <ArrowRight
        size={20}
        className="text-gray-500 group-hover:text-indigo-600 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2"
      />
    </Link>
  );
};

export default Navbar;

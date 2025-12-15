import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Globe,
  BookOpen,
  Zap,
  ArrowRight,
  X,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/sapherchain-logo-white.png";

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
      link: "/use-cases",
    },
    {
      title: "FAQs",
      desc: "Get answers to common questions.",
      link: "/faqs",
    },
    { title: "Get SPH coin", desc: "Wallet details", link: "/" },
    {
      title: "Wallet",
      desc: "Manage your SPH coins with ease using wallet tools.",
      link: "/",
    },
    {
      title: "Explorer",
      desc: "Track transactions, addresses, and blockchain activity.",
      link: "/",
    },
    { title: "How to stake", desc: "Earn rewards by staking", link: "/" },
  ],
  Build: [
    { title: "API", desc: "Developer API docs", link: "/" },
    { title: "SDK", desc: "Software development kit", link: "/" },
    {
      title: "Smart contract guide",
      desc: "Guide for contracts",
      link: "/",
    },
    { title: "Node setup", desc: "Run your own node", link: "/" },
    { title: "Testnet info", desc: "Information on testnet", link: "/" },
    { title: "RPC Endpoints", desc: "Remote procedure calls", link: "/" },
    {
      title: "Websocket Endpoints",
      desc: "Realtime connections",
      link: "/",
    },
    { title: "SDK Downloads", desc: "Download SDKs", link: "/" },
  ],
  Ecosystem: [
    { title: "Fast speed", desc: "High performance", link: "/" },
    { title: "Low fee", desc: "Minimal transaction fees", link: "/" },
    { title: "Smart contracts", desc: "Automated agreements", link: "/" },
    { title: "Security", desc: "Secure & reliable", link: "/" },
    { title: "Scalability", desc: "Grow without limits", link: "/" },
    { title: "Payments", desc: "Seamless payments", link: "/" },
    { title: "Gaming", desc: "Blockchain gaming", link: "/" },
    { title: "NFTs", desc: "Digital collectibles", link: "/" },
  ],
  Governance: [
    {
      title: "Voting system",
      desc: "Blockchain voting process",
      link: "/",
    },
    { title: "Staking", desc: "Earn rewards by locking coins", link: "/" },
    {
      title: "Proposals",
      desc: "Learn more about committee proposals",
      link: "/",
    },
    {
      title: "Community rules",
      desc: "Guidelines for participation",
      link: "/",
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
    { title: "Media Coverage", desc: "Press and mentions", link: "/media" },
    { title: "Community", desc: "Chat and connect", link: "/community" },
    { title: "Meetups", desc: "Events and gatherings", link: "/events" },
    { title: "Contact", desc: "Support and inquiries", link: "/contact" },
    { title: "Status", desc: "Live uptime & incidents", link: "/status" },
  ],
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState(null);

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

  const handleNavLinkClick = () => {
    setHoveredItem(null); // desktop dropdown close
    setIsMobileMenuOpen(false); // mobile menu close
    setOpenMobileItem(null); // mobile accordion reset
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-indigo-900 backdrop-blur-md" : "bg-transparent"
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
          <ul className="hidden lg:flex items-center gap-1 text-white text-md">
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
                  ${
                    hoveredItem === item.name
                      ? "translate-x-0"
                      : "-translate-x-full"
                  }
                `}
                  ></span>
                </button>

                {/* DROPDOWN */}
                {item.hasDropdown && hoveredItem === item.name && (
                  <div
                    className={`absolute top-full mt-0.5 w-max min-w-[200px] bg-black backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl p-6 ${
                      item.name === "More" ? "right-0" : "left-0"
                    } `}
                  >
                    {item.name === "Governance" ? (
                      <div className="flex flex-col gap-4">
                        {dropdownData[item.name].map((dItem, index) => (
                          <DropdownItem
                            key={index}
                            title={dItem.title}
                            desc={dItem.desc}
                            onClick={handleNavLinkClick}
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
                                onClick={handleNavLinkClick}
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
                                onClick={handleNavLinkClick}
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
                                  onClick={handleNavLinkClick}
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
                                  onClick={handleNavLinkClick}
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

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-3">
            {/* Desktop Language */}
            <div className="hidden lg:flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-white cursor-pointer hover:bg-white/10 transition">
              <Globe size={18} /> EN
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg width="28" height="28" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M4 7h20M4 14h20M4 21h20" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[999] bg-black text-white transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <img src={logo} className="h-6" />
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="px-6 py-6 space-y-6 overflow-y-auto h-[calc(100vh-64px)]">
          {navItems.map((item) => (
            <div
              key={item.name}
              className={`border-b border-white/10 pb-4 ${
                openMobileItem === item.name
                  ? "text-white font-semibold"
                  : "text-gray-300"
              }`}
            >
              <button
                onClick={() =>
                  setOpenMobileItem(
                    openMobileItem === item.name ? null : item.name
                  )
                }
                className="w-full flex items-center justify-between text-lg"
              >
                {item.name}
                <ChevronDown
                  className={`transition-transform ${
                    openMobileItem === item.name
                      ? "rotate-180 text-white"
                      : "text-gray-400"
                  }`}
                  size={20}
                />
              </button>

              {/* Dropdown */}
              <div
                className={`
                  overflow-hidden transition-[max-height,opacity]
                  duration-500 ease-in-out
                  ${
                    openMobileItem === item.name
                      ? "max-h-[800px] opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                {/* GET STARTED – SPECIAL LAYOUT */}
                {item.name === "Get Started" ? (
                  <div className="space-y-6 pl-2">
                    {/* Learn */}
                    <div>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-5">
                        <div className="bg-indigo-600 rounded-full p-1">
                          <BookOpen color="white" size={6} />
                        </div>
                        Learn
                      </div>
                      <div className="space-y-3">
                        {dropdownData["Get Started"].slice(0, 4).map((d, i) => (
                          <Link
                            key={i}
                            to={d.link}
                            onClick={handleNavLinkClick}
                            className="block text-base text-white font-medium"
                          >
                            {d.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Quick Start */}
                    <div>
                      <div className="flex items-center gap-2 text-xs text-gray-400 font-normal mb-5">
                        <div className="bg-indigo-600 rounded-full p-1">
                          <Zap color="white" size={6} />
                        </div>
                        Quick Start
                      </div>
                      <div className="space-y-3">
                        {dropdownData["Get Started"].slice(4).map((d, i) => (
                          <Link
                            key={i}
                            to={d.link}
                            onClick={handleNavLinkClick}
                            className="block text-base text-white font-normal"
                          >
                            {d.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ALL OTHER MENUS – SAME AS BEFORE */
                  <div className="space-y-3 pl-2">
                    {dropdownData[item.name]?.map((d, i) => (
                      <Link
                        key={i}
                        to={d.link}
                        onClick={handleNavLinkClick}
                        className="block text-sm text-white font-normal"
                      >
                        {d.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Language */}
          <div className="flex items-center justify-between gap-3 pt-2 text-sm">
            <Globe size={28} />
            <span className="flex items-center gap-2 text-gray-400 text-lg">
              English
              <ChevronRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

// Menu Item Component
const DropdownItem = ({ title, desc, link, onClick }) => {
  return (
    <Link
      to={link}
      onClick={onClick}
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

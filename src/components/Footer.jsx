import React from "react";
import {
  Mail,
  MessageCircle,
  Twitter,
  Youtube,
  Github,
  Linkedin,
  Instagram,
  Send,
  MessageSquare,
  Globe,
  Facebook,
  Disc,
  Shell,
  FacebookIcon,
  Factory,
} from "lucide-react";

const Footer = () => {
  const socialIcons = [
    { Icon: Globe, label: "Website" },
    { Icon: Facebook, label: "Facebook" },
    { Icon: MessageSquare, label: "Forum" },
    { Icon: Youtube, label: "YouTube" },
    { Icon: Github, label: "GitHub" },
    { Icon: Linkedin, label: "LinkedIn" },
    { Icon: Instagram, label: "Instagram" },
    { Icon: Send, label: "Telegram" },
    { Icon: MessageCircle, label: "Messenger" },
    { Icon: Disc, label: "Discord" },
    { Icon: Twitter, label: "Twitter" },
  ];

  const socialItems = [
    {
      name: "Telegram",
      icon: Send,
    },
    {
      name: "Facebook",
      icon: Facebook,
    },
    {
      name: "Instagram",
      icon: Instagram,
    },
    {
      name: "Twitter",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
    },
  ];

  const footerLinks = [
    {
      title: "Get Started",
      links: [
        "Learn",
        "What is TRX?",
        "TRON USDT",
        "Whitepaper",
        "FAQs",
        "Quick Start",
        "Get TRX",
        "Select a Wallet",
        "Explorer",
        "Developer Center",
      ],
    },
    {
      title: "Build",
      links: [
        "Developer Docs",
        "Developer Tools",
        "GitHub",
        "Audit Reports",
        "Bug Bounty",
      ],
    },
    {
      title: "Ecosystem",
      links: [
        "Fast speed",
        "Low fee",
        "Smart contracts",
        "Security",
        "Scalability",
        "Payments",
        "Gaming",
        "NFTs",
      ],
    },
    {
      title: "Governance",
      links: [
        "Super Representatives",
        "Parameters & Proposals",
        "Staking",
        "Voting",
      ],
    },
    {
      title: "More",
      links: ["Resources", "About", "Legal", "Media Coverage", "Community", "Meetups", "Contact"],
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-22">
        {/* Top Contact Section */}
        <div className="mb-12 border-b border-gray-800 pb-10">
          <div className="flex justify-between">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-semibold text-white">Contact Us</h2>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <a
                  href="mailto:press@sapher.network"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <Mail className="w-5 h-5 text-indigo-500" />
                  press@sapher.network
                </a>
                <a
                  href="mailto:service@sapher.network"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <Mail className="w-5 h-5 text-indigo-500" />
                  service@sapher.network
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <Shell className="w-5 h-5 text-indigo-500" />
                  Whistleblower Notice
                </a>
              </div>
            </div>

            <div className="text-xl font-semibold tracking-wider text-gray-500">
              SAPHER BLOCKCHAIN
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center justify-between mt-10 w-full">
            {/* LEFT — Social Icons */}
            <div className="flex gap-4">
              {socialIcons.map((item) => {
                const Icon = item.Icon;
                return (
                  <a
                    key={item.label}
                    href="#"
                    aria-label={item.label}
                    className="p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition transform hover:scale-110"
                  >
                    <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
                  </a>
                );
              })}
            </div>

            {/* RIGHT — Social Items */}
            <div className="flex gap-4">
              {socialItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg text-xs font-medium text-gray-400 hover:text-white transition"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-md font-semibold text-white mb-6">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition text-sm lg:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

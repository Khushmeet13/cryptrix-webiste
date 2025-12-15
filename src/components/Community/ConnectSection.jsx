import React from "react";
import { 
  Send, 
  MessageCircle, 
  Twitter, 
  Globe, 
  Youtube, 
  Bot, 
  Gitlab,
  Sprout
} from "lucide-react";

const ConnectSection = () => {
  const communities = [
    {
      icon: <Send className="w-6 h-6 sm:w-8 h-8" />,
      title: "Telegram",
      desc: "The official Telegram group.",
      stats: "563K Members",
      link: "https://t.me/polygoncommunity",
      color: "hover:bg-blue-500/10"
    },
    {
      icon: <MessageCircle className="w-6 h-6 sm:w-8 h-8" />,
      title: "Sapher Discord",
      desc: "Hub to hang, find info on apps and projects, and get support.",
      stats: "180K Members",
      link: "#",
      color: "hover:bg-indigo-500/10"
    },
    {
      icon: <Gitlab className="w-6 h-6 sm:w-8 h-8" />,
      title: "Sapher Labs",
      desc: "Follow for news, updates, and good vibes",
      stats: "2M Followers",
      link: "#",
      color: "hover:bg-sky-500/10"
    },
    {
      icon: <Sprout className="w-6 h-6 sm:w-8 h-8" />,
      title: "Sapher Ecosystem",
      desc: "Supporting projects in the Polygon ecosystem.",
      stats: "183.8K Followers",
      link: "#",
      color: "hover:bg-cyan-500/10"
    },
    {
      icon: <Twitter className="w-6 h-6 sm:w-8 h-8" />,
      title: "Twitter",
      desc: "Follow to get updates on Protocols & Governance.",
      stats: "177.6K Followers",
      link: "#",
      color: "hover:bg-purple-500/10"
    },
    {
      icon: <Bot className="w-6 h-6 sm:w-8 h-8" />,
      title: "Reddit",
      desc: "The biggest Polygon community on Reddit, moderated by ecosystem contributors.",
      stats: "61K Members",
      link: "#",
      color: "hover:bg-orange-500/10"
    },
    {
      icon: <Youtube className="w-6 h-6 sm:w-8 h-8" />,
      title: "Youtube",
      desc: "Bite-sized clips and deep-dives, for the visual learners.",
      stats: "13.4K Subscribers",
      link: "#",
      color: "hover:bg-red-500/10"
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 h-8" />,
      title: "News",
      desc: "Follow for all the onchain chatter",
      stats: "1.1K Followers",
      link: "#",
      color: "hover:bg-purple-600/20"
    },
  ];

  return (
    <section className="w-full py-24 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-start mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-2">
            Connect
          </h2>
          <p className="text-base sm:text-xl text-gray-500 max-w-3xl">
            Find friends, build things, use stuff. Discover your community
          </p>
        </div>

        {/* Grid of Community Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((community, index) => (
            <a
              key={index}
              href={community.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gray-100/50 backdrop-blur-sm border rounded-2xl p-4 transition-all duration-300 hover:border-gray-300 hover:bg-gray-200/50 `}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="mb-2 text-black group-hover:text-black transition-colors">
                  {community.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3">
                  {community.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                  {community.desc}
                </p>

                {/* Stats */}
                <div className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wider">
                  {community.stats}
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
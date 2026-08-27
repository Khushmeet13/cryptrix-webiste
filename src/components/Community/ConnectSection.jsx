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

const communities = [
  {
    icon: <Send className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Telegram",
    desc: "The official Telegram group.",
    stats: "563K Members",
    link: "#",
    accent: "#60A5FA",
  },
  {
    icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Cryptrix Discord",
    desc: "Hub to hang, find info on apps and projects, and get support.",
    stats: "180K Members",
    link: "#",
    accent: "#818cf8",
  },
  {
    icon: <Gitlab className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Cryptrix Labs",
    desc: "Follow for news, updates, and good vibes.",
    stats: "2M Followers",
    link: "#",
    accent: "#06b6d4",
  },
  {
    icon: <Sprout className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Cryptrix Ecosystem",
    desc: "Supporting projects across the Cryptrix ecosystem.",
    stats: "183.8K Followers",
    link: "#",
    accent: "#34D399",
  },
  {
    icon: <Twitter className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Twitter",
    desc: "Follow to get updates on protocols & governance.",
    stats: "177.6K Followers",
    link: "#",
    accent: "#A78BFA",
  },
  {
    icon: <Bot className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Reddit",
    desc: "The biggest Cryptrix community on Reddit, moderated by ecosystem contributors.",
    stats: "61K Members",
    link: "#",
    accent: "#FB923C",
  },
  {
    icon: <Youtube className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Youtube",
    desc: "Bite-sized clips and deep-dives, for the visual learners.",
    stats: "13.4K Subscribers",
    link: "#",
    accent: "#F87171",
  },
  {
    icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "News",
    desc: "Follow for all the onchain chatter.",
    stats: "1.1K Followers",
    link: "#",
    accent: "#A78BFA",
  },
];

const ConnectSection = () => {
  return (
    <section className="relative w-full py-20 md:py-24 px-6 bg-[#01021f] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-start mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Connect
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
            Find your people
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl">
            Find friends, build things, use stuff. Discover your community.
          </p>
        </div>

        {/* Grid of Community Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {communities.map((community, index) => (
            <a
              key={index}
              href={community.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl p-5 border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = community.accent + "55")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div
                  className="mb-3 transition-colors"
                  style={{ color: community.accent }}
                >
                  {community.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
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
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

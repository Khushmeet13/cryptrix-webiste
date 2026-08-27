import React from "react";
import { Search, BookOpen, PlayCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Documentation", to: "/docs", icon: BookOpen },
  { label: "Video Library", to: "#videos", icon: PlayCircle },
  { label: "Community", to: "/community/", icon: Users },
];

const ResourcesFeaturesSection = ({ search, onSearchChange }) => {
  return (
    <div className="max-w-3xl mx-auto px-6 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
          Resources
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight tracking-tight">
        Everything you need
        <br />
        to build with <span className="text-blue-400">Cryptrix</span>
      </h1>

      <p className="text-gray-400 mt-6 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
        Clear, no-code guides, videos, and references — built for beginners,
        developers, and investors alike.
      </p>

      {/* Search */}
      <div className="relative mt-10 max-w-xl mx-auto">
        <Search
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search guides — wallets, staking, fees, NFTs..."
          className="w-full pl-12 pr-5 py-4 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-400/50 focus:bg-white/[0.05] transition-all duration-300"
        />
      </div>

      {/* Quick links */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-8">
        {quickLinks.map((q) => {
          const Icon = q.icon;
          const isHash = q.to.startsWith("#");
          const Tag = isHash ? "a" : Link;
          const linkProps = isHash ? { href: q.to } : { to: q.to };
          return (
            <Tag
              key={q.label}
              {...linkProps}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Icon size={15} className="text-blue-400" />
              {q.label}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export default ResourcesFeaturesSection;

import React from "react";
import { Twitter, Github, Award } from "lucide-react";

const ambassadors = [
  {
    name: "Arjun Mehta",
    country: "🇮🇳 India",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    badges: ["Top Contributor", "Community Star"],
    twitter: "#",
    github: "#",
  },
  {
    name: "Sophia Park",
    country: "🇰🇷 South Korea",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    badges: ["Ambassador Elite"],
    twitter: "#",
    github: "#",
  },
  {
    name: "Liam Carter",
    country: "🇬🇧 UK",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    badges: ["Web3 Educator"],
    twitter: "#",
    github: "#",
  },
];

const AmbassadorShowcase = () => {
  return (
    <section className="relative py-20 md:py-24 bg-[#01021f] overflow-hidden">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Ambassadors
            </span>
          </div>
          <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-2 text-white">
            Ambassador Showcase
          </h2>
          <p className="text-center text-gray-400">
            Meet the leaders empowering the Cryptrix community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ambassadors.map((amb, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04]"
            >
              {/* Avatar */}
              <div className="mx-auto w-24 h-24 rounded-full overflow-hidden relative border border-white/10 group-hover:scale-105 transition">
                <img
                  src={amb.avatar}
                  alt={amb.name}
                  className="w-full h-full object-cover"
                />
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] duration-700" />
              </div>

              <h3 className="text-lg font-semibold text-center mt-5 text-white">
                {amb.name}
              </h3>
              <p className="text-center text-gray-400 text-sm mb-4">
                {amb.country}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {amb.badges.map((b, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-blue-400"
                  >
                    <Award size={12} /> {b}
                  </span>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 mt-6">
                <a
                  href={amb.twitter}
                  className="p-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:-translate-y-1 transition text-gray-300 hover:text-white"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href={amb.github}
                  className="p-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:-translate-y-1 transition text-gray-300 hover:text-white"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbassadorShowcase;

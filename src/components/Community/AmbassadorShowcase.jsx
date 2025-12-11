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
    <section className="py-20 pt-0 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-semibold mb-2 text-black">
          Ambassador Showcase
        </h2>
        <p className="text-center text-gray-500 mb-16">
          Meet the Leaders Empowering the Sapher Community
        </p>

        <div className="grid md:grid-cols-3 gap-0">
          {ambassadors.map((amb, i) => (
            <div
              key={i}
              className="group relative transition-all duration-500 hover:-translate-y-3"
            >
              {/* Card Content */}
              <div className="relative z-10">
                {/* Avatar */}
                <div className="mx-auto w-28 h-28 rounded-full overflow-hidden shadow-lg relative group-hover:scale-105 transition">
                  <img
                    src={amb.avatar}
                    className="w-full h-full object-cover"
                  />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] duration-700"></div>
                </div>

                <h3 className="text-xl font-semibold text-center mt-5 text-gray-900">
                  {amb.name}
                </h3>
                <p className="text-center text-gray-600 text-sm mb-4">
                  {amb.country}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {amb.badges.map((b, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-indigo-600/10 border border-indigo-300 text-indigo-700 shadow-sm"
                    >
                      <Award size={12} /> {b}
                    </span>
                  ))}
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-5 mt-6">
                  <a
                    href={amb.twitter}
                    className="p-3 bg-white shadow-md rounded-full hover:shadow-lg hover:-translate-y-1 transition text-indigo-600"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href={amb.github}
                    className="p-3 bg-white shadow-md rounded-full hover:shadow-lg hover:-translate-y-1 transition text-indigo-600"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbassadorShowcase;

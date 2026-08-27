import React, { useState } from "react";
import {
  Users,
  ShieldCheck,
  Code,
  Bug,
  Pencil,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const roles = [
  {
    title: "Ambassadors",
    desc: "Represent Cryptrix in your region by hosting meetups, engaging with members, and spreading awareness across communities.",
    icon: <Star size={44} />,
    accent: "#FBBF24",
    btn: "Become Ambassador",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Moderators",
    desc: "Help maintain a healthy environment, guide newcomers, manage channels, and become a pillar of our community.",
    icon: <ShieldCheck size={44} />,
    accent: "#60A5FA",
    btn: "Apply as Moderator",
    img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
  },
  {
    title: "Contributors",
    desc: "Share ideas, designs, feedback, testing support, documentation, and help shape Cryptrix's future ecosystem.",
    icon: <Users size={44} />,
    accent: "#A78BFA",
    btn: "Start Contributing",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
  },
  {
    title: "Core Developers",
    desc: "Build core protocols, maintain repositories, develop tooling, and push critical improvements forward.",
    icon: <Code size={44} />,
    accent: "#34D399",
    btn: "Join Dev Team",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Bug Bounty Hunters",
    desc: "Find critical issues, report vulnerabilities, stress test systems, and earn rewards for strengthening security.",
    icon: <Bug size={44} />,
    accent: "#F87171",
    btn: "Start Hunting",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Content Creators",
    desc: "Create videos, blogs, memes, tutorials, and host educational content across platforms to grow outreach.",
    icon: <Pencil size={44} />,
    accent: "#F472B6",
    btn: "Become Creator",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
];

const CommunityPrograms = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === roles.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? roles.length - 1 : prev - 1));

  return (
    <section className="py-20 md:py-24 bg-[#01021f] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Get Involved
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Community Programs
          </h2>
          <p className="text-gray-400 mt-3">
            Join a role that matches your passion and start contributing to Cryptrix.
          </p>
        </div>

        <div className="relative">
          {/* SLIDER WRAPPER */}
          <div className="flex gap-10 overflow-hidden">
            {roles.map((role, i) => {
              const isActive = i === current;

              return (
                <div
                  key={i}
                  className={`min-w-full flex flex-col md:flex-row items-center justify-between
                    transition-all duration-500 px-4 sm:px-6 md:px-10 gap-8
                    ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"}`}
                  style={{
                    transform: `translateX(-${current * 100}%)`,
                  }}
                >
                  {/* LEFT CONTENT */}
                  <div className="flex flex-col max-w-xl text-center md:text-left">
                    <div
                      className="mb-5 flex justify-center md:justify-start"
                      style={{ color: role.accent }}
                    >
                      {role.icon}
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                      {role.title}
                    </h3>

                    <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
                      {role.desc}
                    </p>

                    <button className="mt-6 mx-auto md:mx-0 w-fit px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30">
                      {role.btn}
                    </button>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="w-full md:w-[45%]">
                    <div className="rounded-2xl overflow-hidden border border-white/10">
                      <img
                        src={role.img}
                        alt={role.title}
                        className="object-cover h-56 sm:h-64 md:h-80 w-full"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ARROWS */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 xl:-left-14 top-1/2 -translate-y-1/2 h-11 w-11 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white hover:bg-white/10 hover:scale-110 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-2 xl:-right-14 top-1/2 -translate-y-1/2 h-11 w-11 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white hover:bg-white/10 hover:scale-110 transition"
          >
            <ChevronRight size={20} />
          </button>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-10">
            {roles.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full cursor-pointer transition-all ${
                  current === i ? "w-6 bg-blue-400" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPrograms;

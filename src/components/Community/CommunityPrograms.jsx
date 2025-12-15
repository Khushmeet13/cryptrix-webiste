import React, { useState } from "react";
import {
  Users,
  ShieldCheck,
  Code,
  Bug,
  Pencil,
  Star,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const roles = [
  {
    title: "Ambassadors",
    desc: "Represent Sapher in your region by hosting meetups, engaging with members, and spreading awareness across communities.",
    icon: <Star className="text-yellow-400" size={50} />,
    btn: "Become Ambassador",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Moderators",
    desc: "Help maintain a healthy environment, guide newcomers, manage channels, and become a pillar of our community.",
    icon: <ShieldCheck className="text-blue-500" size={50} />,
    btn: "Apply as Moderator",
    img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
  },
  {
    title: "Contributors",
    desc: "Share ideas, designs, feedback, testing support, documentation, and help shape Sapher’s future ecosystem.",
    icon: <Users className="text-purple-500" size={50} />,
    btn: "Start Contributing",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
  },
  {
    title: "Core Developers",
    desc: "Build core protocols, maintain repositories, develop tooling, and push critical improvements forward.",
    icon: <Code className="text-green-500" size={50} />,
    btn: "Join Dev Team",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Bug Bounty Hunters",
    desc: "Find critical issues, report vulnerabilities, stress test systems, and earn rewards for strengthening security.",
    icon: <Bug className="text-red-500" size={50} />,
    btn: "Start Hunting",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Content Creators",
    desc: "Create videos, blogs, memes, tutorials, and host educational content across platforms to grow outreach.",
    icon: <Pencil className="text-pink-500" size={50} />,
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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800">
          Community Programs
        </h2>
        <p className="text-center text-gray-500 mt-3 mb-16">
          Join a role that matches your passion and start contributing to the
        </p>

        <div className="relative">
          {/* SLIDER WRAPPER */}
          <div className="flex gap-10 overflow-hidden">
            {roles.map((role, i) => {
              const isActive = i === current;
              //const isSide = i !== current;

              return (
                <div
                  key={i}
                  className={`min-w-full flex flex-col md:flex-row items-center justify-between 
                    transition-all duration-500 px-4 sm:px-6 md:px-10 gap-8
                    ${
                      isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
                    }`}
                  style={{
                    transform: `translateX(-${current * 100}%)`,
                  }}
                >
                  {/* LEFT CONTENT */}
                  <div className="flex flex-col max-w-xl text-center md:text-left">
                    <div className="mb-4 flex justify-center md:justify-start">
                      {role.icon}
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                      {role.title}
                    </h3>

                    <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
                      {role.desc}
                    </p>

                    <button className="mt-6 mx-auto md:mx-0 w-fit px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition shadow-md">
                      {role.btn}
                    </button>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="w-full md:w-[45%]">
                    <img
                      src={role.img}
                      alt={role.title}
                      className="rounded-2xl shadow-xl object-cover 
                        h-56 sm:h-64 md:h-80 w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ARROWS */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 xl:-left-20 top-40 h-76 -translate-y-1/2 bg-gray-100/20 hover:bg-gray-50 rounded-full md:p-4 hover:scale-110 transition hover:cursor-pointer"
          >
            <ChevronLeft size={25} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-2 xl:-right-20 top-40 h-76 -translate-y-1/2 bg-gray-100/20 hover:bg-gray-50 shadow-md shadow-gray-50 rounded-full md:p-4 hover:scale-110 transition hover:cursor-pointer"
          >
            <ChevronRight size={25} />
          </button>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-10">
            {roles.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  current === i ? "bg-indigo-600 scale-125" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPrograms;

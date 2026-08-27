import React from "react";
import {
  Calendar,
  Mic,
  Laptop,
  Users,
  Monitor,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const events = [
  {
    title: "Next Community Meetup",
    date: "25 Jan 2025",
    type: "Meetup",
    icon: <Users size={22} />,
    accent: "#60A5FA",
  },
  {
    title: "Twitter Spaces / AMA",
    date: "28 Jan 2025",
    type: "AMA Session",
    icon: <Mic size={22} />,
    accent: "#06b6d4",
  },
  {
    title: "Global Hackathon",
    date: "10 Feb 2025",
    type: "Hackathon",
    icon: <Laptop size={22} />,
    accent: "#A78BFA",
  },
];

const UpcomingEventsSection = () => {
  const navigate = useNavigate();

  const goToEvents = () => {
    navigate("/events");
  };

  return (
    <section className="w-full py-20 md:py-24 bg-[#01021f] relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Events
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Upcoming Events</h2>
          <p className="mt-2 text-gray-400 text-base sm:text-lg">
            Stay connected with our global community activities.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="group rounded-2xl p-6 border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] cursor-pointer"
              onClick={goToEvents}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: event.accent + "18", border: `1px solid ${event.accent}35`, color: event.accent }}
              >
                {event.icon}
              </div>

              <span
                className="text-[10px] font-semibold tracking-[0.14em] uppercase"
                style={{ color: event.accent }}
              >
                {event.type}
              </span>

              <h3 className="text-lg text-white font-semibold mt-2">
                {event.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2">{event.date}</p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={goToEvents}
            className="group relative inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
          >
            View All Events
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;

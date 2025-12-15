import React from "react";
import {
  Calendar,
  Mic,
  Laptop,
  Users,
  Monitor,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const events = [
  {
    title: "Next Community Meetup",
    date: "25 Jan 2025",
    type: "Meetup",
    icon: <Users size={26} />,
  },
  {
    title: "Twitter Spaces / AMA",
    date: "28 Jan 2025",
    type: "AMA Session",
    icon: <Mic size={26} />,
  },
  {
    title: "Global Hackathon",
    date: "10 Feb 2025",
    type: "Hackathon",
    icon: <Laptop size={26} />,
  },
  {
    title: "Web3 Workshop",
    date: "14 Feb 2025",
    type: "Workshop",
    icon: <Monitor size={26} />,
  },
  {
    title: "Virtual Governance Event",
    date: "20 Feb 2025",
    type: "Virtual Event",
    icon: <Calendar size={26} />,
  },
];

const UpcomingEventsSection = () => {
    const navigate = useNavigate(); // <-- Initialize navigation

  // Button handler
  const goToEvents = () => {
    navigate("/events"); // <-- Navigate without reload
  };
  return (
    <section className="w-full py-12 bg-gray-100 text-white relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Events</h2>
          <p className="mt-2 text-gray-500 text-base sm:text-lg">
            Stay connected with our global community activities.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.slice(0, 3).map((event, index) => (
            <div
              key={index}
              className="bg-white/50 border border-white/10 backdrop-blur-xl rounded-2xl p-6 transition hover:scale-[1.03] hover:bg-white/10 shadow-xl cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4 text-indigo-600">
                {event.icon}
                <span className="text-sm font-medium">{event.type}</span>
              </div>

              <h3 className="text-xl text-black font-semibold">
                {event.title}
              </h3>

              <p className="text-gray-500 mt-2">{event.date}</p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={goToEvents} 
            className="relative px-6 py-3 bg-indigo-600 text-white text-sm rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:scale-105 hover:cursor-pointer"
          >
            <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-full" />
            <span className="relative z-10 flex items-center gap-1">
              View All Events{" "}
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;

import React from "react";
import breakpointImage from "../../assets/images/event-1.webp";
import { Facebook, Link, Send } from "lucide-react";
import event_2 from "../../assets/images/event-2.webp";
import event_3 from "../../assets/images/event-3.jpeg";

const events = [
  {
    id: 1,
    title: "Cryptrix Breakpoint",
    date: "Thu, Dec 11 - Sat, Dec 13",
    location: "Etihad Arena - Abu Dhabi",
    image: event_2,
  },
  {
    id: 2,
    title: "Cryptrix Money Summit",
    date: "Fri, Dec 12",
    location: "Abu Dhabi",
    image: event_3,
  },
];

const EventsHeroSection = () => {
  return (
    <section className="relative bg-[#01021f] text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-24">
        {/* Top Heading */}
        <div className="text-start mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Featured
            </span>
          </div>
          <h1 className="text-3xl font-semibold mb-2 text-white">Cryptrix, in real life</h1>
          <p className="text-lg text-gray-400">
            Meet the Cryptrix builders in your community. Come to a meet-up!
          </p>
        </div>

        {/* Main Event Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={breakpointImage}
                alt="Cryptrix Breakpoint 2025"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Right Text */}
          <div className="space-y-2">
            <div className="text-xs text-blue-400 uppercase tracking-wider font-semibold">
              Thu, Dec 11 - Sat, Dec 13
            </div>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Cryptrix Breakpoint
            </h2>

            <p className="text-md text-gray-400 mt-5 max-w-md">
              The flagship Cryptrix gathering — three days of builder talks,
              panels, and after-hours meetups in Abu Dhabi.
            </p>

            {/* Details Button */}
            <button
              onClick={() =>
                window.open("https://support.cryptrixchain.com", "_blank")
              }
              className="relative inline-flex items-center gap-1.5 mt-4 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              DETAILS
              <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
            </button>

            {/* Social Icons */}
            <div className="flex gap-3 pt-6">
              <button className="p-3.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-all hover:scale-105 text-gray-300 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>

              <button className="p-3.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-all hover:scale-105 text-gray-300 hover:text-white">
                <Facebook size={18} />
              </button>

              <button className="p-3.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-all hover:scale-105 text-gray-300 hover:text-white">
                <Send size={18} />
              </button>

              <button className="p-3.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-all hover:scale-105 text-gray-300 hover:text-white">
                <Link size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div id="upcoming-events" className="relative z-10 w-full mx-auto py-20 border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold mb-2 text-white">Upcoming Events</h2>
            <p className="text-lg text-gray-400">
              Join the biggest Cryptrix gatherings in the world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-xl font-bold leading-tight text-white">
                    {event.title}
                  </h3>

                  <div className="space-y-1">
                    <p className="text-sm text-gray-400">{event.date}</p>
                    <p className="text-sm text-gray-500">{event.location}</p>
                  </div>

                  <button
                    onClick={() =>
                      window.open("https://support.cryptrixchain.com", "_blank")
                    }
                    className="relative inline-flex items-center gap-1.5 mt-3 px-5 py-2.5 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40 hover:cursor-pointer"
                  >
                    View Details
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsHeroSection;

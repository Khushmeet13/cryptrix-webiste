import React from "react";
import breakpointImage from "../../assets/images/event-1.webp";
import { Facebook, Link, Send } from "lucide-react";
import event_2 from "../../assets/images/event-2.webp";
import event_3 from "../../assets/images/event-3.jpeg";

const events = [
  {
    id: 1,
    title: "Solana Breakpoint",
    date: "Thu, Dec 11 - Sat, Dec 13",
    location: "Etihad Arena - Abu Dhabi",
    image: event_2,
    gradient: "from-purple-600 to-indigo-700",
  },
  {
    id: 2,
    title: "Solana Money Summit",
    date: "Fri, Dec 12",
    location: "Abu Dhabi",
    image: event_3,
    gradient: "from-purple-700 to-pink-700",
  },
];

const EventsHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white text-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Top Heading */}
        <div className="text-start mb-14">
          <h1 className="text-3xl font-semibold mb-2">Sapher, in real life</h1>
          <p className="text-lg text-gray-500">
            Meet the Solana builders in your community. Come to a meet-up!
          </p>
        </div>

        {/* Main Event Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={breakpointImage}
                alt="Solana Breakpoint 2025"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Right Text */}
          <div className="space-y-2">
            <div className="text-xs text-gray-400 uppercase tracking-wider">
              Thu, Dec 11 - Sat, Dec 13
            </div>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Sapher Breakpoint
            </h2>

            <p className="text-md text-gray-500 mt-5">Sapher Breakpoint</p>

            {/* Details Button */}
            <button
              onClick={() =>
                window.open("https://support.sapherchain.com", "_blank")
              }
              className="relative px-6 py-3 bg-black text-white text-sm rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:scale-105"
            >
              <span className="absolute inset-0 bg-indigo-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-full" />
              <span className="relative z-10 flex items-center gap-1">
                DETAILS{" "}
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </span>
            </button>

            {/* Social Icons */}
            <div className="flex gap-4 pt-6">
              <button className="p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-all hover:scale-105">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>

              <button className="p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-all hover:scale-105">
                <Facebook size={20} />
              </button>

              <button className="p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-all hover:scale-105">
                <Send size={20} />
              </button>

              <button className="p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-all hover:scale-105">
                <Link size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div id="upcoming-events" className="relative z-10 mw-full mx-auto py-20 bg-gray-100/50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold mb-2">Upcoming Events</h2>
            <p className="text-lg text-gray-500">
              Join the biggest Solana gatherings in the world
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {events.map((event) => (
              <div key={event.id} className="group cursor-pointer">
                <div className="relative w-76 h-76 mb-8">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl"
                  />
                </div>

                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-2xl  font-bold leading-tight">
                    {event.title}
                  </h3>

                  <div className="space-y-2">
                    <p className="text-md text-gray-500">{event.date}</p>
                    <p className="text-sm text-gray-400">{event.location}</p>
                  </div>

                  <button
                    onClick={() =>
                      window.open("https://support.sapherchain.com", "_blank")
                    }
                    className="relative px-6 py-3 bg-indigo-600 text-white text-sm rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:scale-105 hover:cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-full" />
                    <span className="relative z-10 flex items-center gap-1">
                      View Details{" "}
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </span>
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

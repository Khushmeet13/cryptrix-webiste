import React from "react";

const events = [
  {
    title: "Traders' Boat: Abu Dhabi",
    date: "Wed, Dec 10",
    location: "Abu Dhabi",
    image:
      "https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=bSNvWwiLdPpa57uxQdncwcpu9Xt-NJSsmIBMxNxLQfw=",
  },
  {
    title: "Cryptrix SyncUp: Abu Dhabi",
    date: "Wed, Dec 10",
    time: "17:00–19:00",
    location: "Abu Dhabi",
    image:
      "https://media.istockphoto.com/id/1488521147/photo/global-network-usa-united-states-of-america-north-america-global-business-flight-routes.webp?a=1&b=1&s=612x612&w=0&k=20&c=pkq0qStfGt-_otOwJgSz6t3Qnhy5r1yPuSDbN5KlgRY=",
  },
  {
    title: "Web3 Marketing Experts in the Arena: Abu Dhabi 2025",
    date: "Wed, Dec 10 - Thu, Dec 11",
    location: "Abu Dhabi",
    image:
      "https://media.istockphoto.com/id/1401433457/photo/rocket-launch-digital-business-startup.webp?a=1&b=1&s=612x612&w=0&k=20&c=mnTLaKcbKFUuBGHZ7GYNwQH9gNPEuTCRIitolfbs81U=",
  },
  {
    title: "KOL Club: Abu Dhabi 2025",
    date: "Wed, Dec 10 - Thu, Dec 11",
    location: "Abu Dhabi",
    image:
      "https://media.istockphoto.com/id/2177132286/photo/innovation-technology-businessman-hands-with-light-bulb-of-inspiration-bright-idea-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=KQ5tYR88uuIPxDoWW39gurucfjcXo8211mDUZmkEVnI=",
  },
  {
    title: "VC Connect: Abu Dhabi 2025",
    date: "Wed, Dec 10 - Thu, Dec 11",
    location: "Abu Dhabi",
    image:
      "https://media.istockphoto.com/id/2164543250/photo/business-graph-and-data-of-transparent-business-growth-accountability-businessman-touch-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=OTwGdV1EhwTQsCk1NTtR-qqnOu0T-AfikiOUyjJtyFQ=",
  },
  {
    title: "TGE Summit: Abu Dhabi 2025",
    date: "Wed, Dec 10 - Thu, Dec 11",
    location: "Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnRzfGVufDB8fDB8fHww",
  },
  {
    title: "The CMO Summit: Abu Dhabi 2025",
    date: "Wed, Dec 10 - Thu, Dec 11",
    location: "Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnRzfGVufDB8fDB8fHww",
  },
  {
    title: "Cryptrix Run Club :: Breakpoint Abu Dhabi",
    date: "Thu, Dec 11",
    location: "Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const CommunityEventsSection = () => {
  return (
    <section className="relative bg-[#01021f] text-white py-20 md:py-24 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Community Events
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">Community events</h2>
          <ul className="space-y-1.5 text-base text-gray-400">
            <li>
              • Meetups, build spaces, and more from the Cryptrix community.
              These events are community-organized, not officially hosted by
              Cryptrix.
            </li>
            <li>
              • Need some help? Check out the{" "}
              <a href="#" className="text-blue-400 hover:underline">
                meetup playbook
              </a>
              .
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#"
            className="px-4 py-2 border border-white/20 text-white text-xs font-semibold rounded-full transition-all duration-300 hover:border-white/40 hover:scale-105 flex items-center gap-1 group"
          >
            SUBMIT EVENT ON CALENDAR
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#"
            className="px-8 py-2 border border-white/20 text-white text-xs font-semibold rounded-full transition-all duration-300 hover:border-white/40 hover:scale-105 flex items-center gap-1 group"
          >
            HOST EVENT
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Events Grid - 2 Columns */}
        <div className="grid md:grid-cols-2 gap-10 border-b border-white/10 pb-10">
          {events.map((event, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="mb-6 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold leading-tight mb-3 text-white">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {event.date} {event.time && `• ${event.time}`}
                </p>
                <p className="text-gray-500 text-sm">{event.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="relative inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30">
            Load More Events
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityEventsSection;

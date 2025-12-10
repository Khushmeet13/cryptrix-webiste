import React from "react";

const CommunityEventsSection = () => {
  const events = [
    {
      title: "Traders’ Boat: Abu Dhabi",
      date: "Wed, Dec 10",
      location: "Abu Dhabi",
      image:
        "https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=bSNvWwiLdPpa57uxQdncwcpu9Xt-NJSsmIBMxNxLQfw=",
    },
    {
      title: "SOL SyncUp: Abu Dhabi",
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
      title: "Solana Run Club :: Breakpoint Abu Dhabi",
      date: "Thu, Dec 11",
      location: "Abu Dhabi",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <section className="relative min-h-screen bg-white text-black py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold mb-2">Community events</h2>
          <ul className="space-y-1 text-lg text-gray-500">
            <li>
              • Meetups, build spaces, and more from the Solana community. These
              events are not hosted by the Solana Foundation.
            </li>
            <li>
              • Need some help? Check out the{" "}
              <a href="#" className="text-indigo-400 hover:underline">
                meetup playbook
              </a>
              .
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-6 mb-16">
          <a
            href="#"
            className="px-4 py-2 bg-white/10 backdrop-blur-md border border-black rounded-full font-semibold hover:bg-white/20 hover:border-indigo-400 hover:text-indigo-500 transition-all duration-300 flex items-center gap-1 group text-xs"
          >
            SUBMIT EVENT ON CALENDAR
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="#"
            className="px-8 py-2 bg-white/10 backdrop-blur-md border border-black rounded-full font-semibold hover:bg-white/20 hover:border-indigo-400 hover:text-indigo-500 transition-all duration-300 flex items-center gap-1 group text-xs"
          >
            HOST EVENT
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Events Grid - 2 Columns */}
        <div className="grid md:grid-cols-2 gap-10 border-b">
          {events.map((event, index) => (
            <div key={index} className="group cursor-pointer mb-10">
              <div className="mb-6 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold leading-tight mb-4">
                  {event.title}
                </h3>
                <p className="text-md text-gray-500">
                  {event.date} {event.time && `• ${event.time}`}
                </p>
                <p className="text-gray-500 text-md">{event.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="relative px-6 py-3 bg-black text-white text-sm rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:scale-105">
            <span className="absolute inset-0 bg-indigo-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-full" />
            <span className="relative z-10 flex items-center gap-1">
              Load More Events{" "}
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

export default CommunityEventsSection;

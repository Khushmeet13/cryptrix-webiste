import React from "react";
import { Play } from "lucide-react";

const featured = {
  title: "The Future of Decentralized Finance",
  duration: "12:40",
  category: "DeFi",
  thumb:
    "https://plus.unsplash.com/premium_photo-1733342554594-102b8e2d0623?w=1200&auto=format&fit=crop&q=80",
};

const videos = [
  {
    title: "Exploring Blockchain Technology",
    duration: "8:15",
    category: "Fundamentals",
    thumb:
      "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=700&auto=format&fit=crop&q=80",
  },
  {
    title: "How On-Chain Verification Works",
    duration: "6:32",
    category: "Security",
    thumb:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=700&auto=format&fit=crop&q=80",
  },
];

export default function VideoSection() {
  return (
    <section id="videos" className="scroll-mt-24 relative w-full py-20 md:py-24 px-6 bg-[#01021f] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Watch
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Video Library</h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            Short, focused walkthroughs to get you up to speed fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured — large */}
          <VideoCard item={featured} large />

          {/* Secondary — stacked */}
          <div className="grid gap-6">
            {videos.map((v) => (
              <VideoCard key={v.title} item={v} />
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button className="inline-flex items-center gap-1.5 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30">
            More Videos on YouTube
          </button>
        </div>
      </div>
    </section>
  );
}

function VideoCard({ item, large = false }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer transition-all duration-300 hover:border-white/25">
      <img
        src={item.thumb}
        alt={item.title}
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
          large ? "h-full min-h-[320px] md:min-h-full" : "h-[220px]"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#01021f] via-[#01021f]/10 to-transparent" />

      {/* Category + duration */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-blue-300 border border-white/10">
          {item.category}
        </span>
      </div>
      <span className="absolute top-4 right-4 text-[11px] font-mono px-2 py-1 rounded-md bg-black/50 backdrop-blur-md text-gray-300 border border-white/10">
        {item.duration}
      </span>

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center scale-100 group-hover:scale-110 transition-all duration-300 shadow-xl">
          <Play size={22} className="text-black ml-0.5" fill="currentColor" />
        </div>
      </div>

      {/* Title */}
      <p className="absolute bottom-4 left-5 right-5 text-sm sm:text-base font-medium text-white">
        {item.title}
      </p>
    </div>
  );
}

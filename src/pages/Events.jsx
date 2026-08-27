import React from "react";
import bgImage from "../assets/images/events-bg.webp"; // ← Apna background image daal yahan
import { ArrowDownFromLine } from "lucide-react";
import EventsHeroSection from "@/components/Events/EventsHeroSection";
import CommunityEventsSection from "@/components/Events/CommunityEventsSection";

const Events = () => {
  return (
    <div className="w-full">
      <section
        className="relative w-full h-[50vh] flex flex-col items-center justify-center bg-cover bg-center bg-fixed overflow-hidden pt-32"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-indigo-950/60 to-black/85" />

        {/* Main Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Events
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-semibold text-white mb-4 tracking-tighter">
            Meet Cryptrix in Real Life
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-lg text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
            Join us at exclusive blockchain events, hackathons, and community
            meetups around the world.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <button
              onClick={() => {
                document.getElementById("upcoming-events")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="px-6 py-3 bg-white text-black text-sm sm:text-base font-medium rounded-full flex items-center gap-3 mx-auto group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30 hover:cursor-pointer"
            >
              View Upcoming Events
            </button>
          </div>

          <div className="mb-2 mt-6 flex flex-col items-center">
            <div className="animate-bounce">
              <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-white/60 rounded-full mt-3 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventsHeroSection />
      <CommunityEventsSection />
    </div>
  );
};

export default Events;

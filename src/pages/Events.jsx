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
        <div className="absolute inset-0 bg-black/60" />

        {/* Main Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          {/* Title */}
          <h1 className="text-5xl font-semibold text-white mb-4 tracking-tighter">
            Events
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
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
              className="px-6 py-3 bg-indigo-600 text-white rounded-full flex items-center gap-3 mx-auto group hover:cursor-pointer"
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

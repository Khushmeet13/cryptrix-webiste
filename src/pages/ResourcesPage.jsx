import FloatingChains from "@/components/FloatingChains";
import ContinueJourney from "@/components/Resources/ContinueJourney";
import LearnSection from "@/components/Resources/LearnSection";
import ResourcesFeaturesSection from "@/components/Resources/ResourcesFeaturesSection";
import VideoSection from "@/components/Resources/VideoSection";
import React from "react";

const ResourcesPage = () => {
  return (
    <div className="w-full bg-indigo-950 text-white">
      <section className="relative h-[50vh] bg-gradient-to-br from-black via-indigo-950/40 to-black flex items-start justify-center pt-32 text-white text-6xl font-bold overflow-hidden">
        <div className="relative z-10 font-semibold text-3xl md:text-5xl">Resources</div>
      </section>

      <section className="bg-white w-full h-[40vh] -mt-20 relative"></section>

      {/* Overlapping White Section */}
      <div className="absolute top-[25vh] left-1/2 -translate-x-1/2 w-full z-30">
        <div className="sm:max-w-7xl mx-auto bg-white p-10">
          <ResourcesFeaturesSection />
        </div>
      </div>

      <LearnSection />
      <VideoSection />
      <ContinueJourney />
    </div>
  );
};

export default ResourcesPage;

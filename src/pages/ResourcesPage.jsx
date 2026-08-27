import { useState } from "react";
import ContinueJourney from "@/components/Resources/ContinueJourney";
import LearnSection from "@/components/Resources/LearnSection";
import ResourcesFeaturesSection from "@/components/Resources/ResourcesFeaturesSection";
import VideoSection from "@/components/Resources/VideoSection";

const ResourcesPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#01021f] pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10">
          <ResourcesFeaturesSection search={search} onSearchChange={setSearch} />
        </div>
      </section>

      <LearnSection search={search} />
      <VideoSection />
      <ContinueJourney />
    </div>
  );
};

export default ResourcesPage;

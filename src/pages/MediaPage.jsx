import AwardsSection from "@/components/Media/AwardsSection";
import BrandSection from "@/components/Media/BrandSection";
import CaseStudies from "@/components/Media/CaseStudies";
import InTheNews from "@/components/Media/InTheNews";
import MediaHighlights from "@/components/Media/MediaHighlights";
import SuccessStories from "@/components/Media/SuccessStories";
import React from "react";

const MediaPage = () => {
  return (
    <>
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background Video - Fullscreen, muted, looping */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://polytech-assets.polygon.technology/videos/about-us/about_blur.mp4%20(720p).mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-indigo-950/50 to-black/80" />

      {/* Content Container */}
      <div className="relative z-10 flex items-center h-[70vh] px-4 md:px-32">
        <div className="text-start max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Media
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl font-medium text-white mb-6 leading-tight">
            Creating a more sovereign,
            <br />
            <span className="block">secure, and open internet</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed max-w-2xl">
            Cryptrix Labs redistributes the power and value of the internet to
            its users, by building a network of open source protocols that
            provide unified liquidity, unlimited scalability and
            interoperability for builders.
          </p>
        </div>
      </div>
    </div>
    <MediaHighlights />
    <InTheNews />
    <BrandSection />
    <SuccessStories />
    <CaseStudies />
    <AwardsSection />
    </>
  );
};

export default MediaPage;

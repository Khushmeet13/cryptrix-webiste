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
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Container - Centered */}
      <div className="relative z-10 flex items-center h-[70vh] px-4 md:px-32">
        <div className="text-start">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl  font-medium text-white mb-6">
            Creating a more sovereign,
            <br />
            <span className="block">secure, and open internet</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-white/90 mb-8 leading-relaxed">
            SapherChain Labs redistributes the power and value of the internet to
            its
            <br />
            users, by building a network of open source protocols that provide
            unified
            <br />
            liquidity, unlimited scalability and interoperability for builders.
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

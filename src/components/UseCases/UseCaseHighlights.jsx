import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Single description field only
const highlights = [
  { 
    industry: "Payments", 
    desc: "Fraud detection, wallet identity, compliant KYC layers. Payments on Cryptrix use decentralized identity scoring, compliant KYC flows, fraud-resistant wallets, and instant risk evaluation."
  },
  { 
    industry: "Gaming", 
    desc: "Bot prevention, identity scoring, fair-player verification. Gaming use cases include anti-bot protection, leaderboard trust scoring, and secure matchmaking."
  },
  { 
    industry: "NFTs", 
    desc: "Creator verification and anti-bot minting protection. NFTs use Cryptrix for creator identity, trust minting, and secure collector onboarding."
  },
  { 
    industry: "Government", 
    desc: "Citizen digital identity and verification layers. Government stack includes citizen ID, secure verification gateways, and digital public service workflows."
  },
  { 
    industry: "DeFi", 
    desc: "Wallet trust scoring and secure access workflows. DeFi apps verify wallet reputation, prevent Sybil attacks, and secure protocol entry."
  },
];

// Smooth infinite scroll CSS
const sliderCSS = `
@keyframes smooth-slider {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

const UseCaseHighlights = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <style>{sliderCSS}</style>

      <section className="py-20 px-6 bg-gray-100 text-black overflow-hidden">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
          Highlights
        </h2>

        <div className="relative overflow-hidden group">

          {/* TRACK */}
          <div
            className="
              flex gap-6 w-max
              animate-[smooth-slider_25s_linear_infinite]
              group-hover:[animation-play-state:paused]
            "
          >
            {[...highlights, ...highlights].map((item, i) => {
              const index = i % highlights.length;
              const isActive = activeIndex === index;

              return (
                <div
                  key={i}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className={`
                    max-w-[250px] md:max-w-[320px] bg-white
                    rounded-2xl p-6 cursor-pointer transition-all duration-500
                     hover:scale-[1.03]
                    ${isActive ? "scale-105 bg-white" : ""}
                  `}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-md md:text-lg font-semibold">{item.industry}</h3>

                    <ChevronDown
                      className={`transition-transform duration-500 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* TRUNCATED DESCRIPTION */}
                  {!isActive && (
                    <p className="text-gray-500 mt-2 line-clamp-1 max-w-sm text-xs sm:text-md">
                      {item.desc}
                    </p>
                  )}

                  {/* FULL DESCRIPTION */}
                  {isActive && (
                    <p className="text-gray-600 mt-4 border-t pt-4 border-gray-300 leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};

export default UseCaseHighlights;

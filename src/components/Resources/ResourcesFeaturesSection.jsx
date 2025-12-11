import React from "react";

const ResourcesFeatureSection = () => {
  const layers = Array.from({ length: 8 });
  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      {/* LEFT TEXT SECTION */}
      <div>
        <h1 className="text-5xl text-black font-bold">
          Learn <br /> about <br /> SapherChain
        </h1>

        <p className="text-gray-500 text-lg mt-6 max-w-lg">
          Explore the essentials of SapherChain with clear, no-code learning
          resources built for beginners, developers, investors, and enthusiasts.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-10">
          <button className="px-6 py-3 text-sm rounded-full bg-indigo-600 text-white font-semibold hover:opacity-80 transition">
            START LEARNING
          </button>

          <button className="px-6 py-3 text-sm rounded-full border border-black text-black font-semibold hover:bg-white hover:text-black transition">
            DEVELOPER DOCS
          </button>
        </div>
      </div>

      {/* RIGHT ANIMATED STACK (SOLANA STYLE) */}
      <div className="flex justify-end">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {layers.map((_, i) => (
            <div
              key={i}
              className={`
              hex-layer
              absolute left-1/2 -translate-x-1/2
              w-[280px] h-[150px]
              opacity-[0.92]
            `}
              style={{
                top: `${i * 35}px`,
                transform: ` rotate(${i * 2.5}deg)`,
                zIndex: 50 - i,
                animationDelay: `${i * 0.15}s`,
              }}
            >
              <div className="hex-shape"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hex-shape {
          width: 100%;
          height: 100%;
          clip-path: polygon(
            25% 0%, 
            75% 0%, 
            100% 50%, 
            75% 100%, 
            25% 100%, 
            0% 50%
          );
          background: linear-gradient(90deg,
            rgba(130,0,255,0.7),
            rgba(0,220,200,0.7),
            rgba(130,0,255,0.7)
          );
          background-size: 200% 200%;
          filter: blur(2px);
          border-radius: 12px;
          animation: glowMove 6s ease-in-out infinite alternate,
                     floatLayer 4s ease-in-out infinite;
        }

        @keyframes glowMove {
          0% {
            background-position: 0% 50%;
            opacity: 0.85;
          }
          100% {
            background-position: 100% 50%;
            opacity: 1;
          }
        }

        @keyframes floatLayer {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
};

export default ResourcesFeatureSection;

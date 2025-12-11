import CompanyValues from "@/components/About/CompanyValues";
import MissionSection from "@/components/About/MissionSection";
import VisionSection from "@/components/About/VisionSection";
import FloatingChains from "@/components/FloatingChains";
import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Top Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-black via-indigo-950/40 to-black flex items-start justify-center pt-32 text-white text-5xl font-semibold">


        <div className="relative z-10">About</div>
      </section>

      <section className="bg-white w-full min-h-screen -mt-20 relative"></section>

      {/* Overlapping White Section */}
      <div className="absolute top-[25vh] left-1/2 -translate-x-1/2 w-full z-30">
        <div className="max-w-7xl mx-auto bg-white p-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Why We Built Sapher Chain
              </h2>

              <p className="text-gray-500 mt-3 text-md max-w-2xl">
                Sapher Chain was created to solve the core limitations of modern
                blockchains— scalability, security, and real-world utility—while
                keeping user experience simple and powerful. In a world where
                digital connections often feel superficial, we saw an
                opportunity to create something more meaningful.
              </p>

              <p className="text-gray-500 mt-5 text-md max-w-2xl">
                The Chain was born from a simple belief: that technology should
                bring us closer together, not drive us apart. We built this
                platform to help individuals and communities forge authentic
                relationships that stand the test of time.
              </p>
            </div>
            {/* Right Side: Pure SVG 3D Polygon Logo (No Image) */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                {/* Connection lines with glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-96 h-80">
                    {/* Horizontal line */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-purple-400 opacity-30 blur-sm"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-purple-300 opacity-50"></div>

                    {/* Diagonal lines */}
                    <div className="absolute top-0 left-10 bottom-0 w-px bg-purple-400 opacity-30 blur-sm rotate-45 origin-center"></div>
                    <div className="absolute top-0 left-10 bottom-0 w-px bg-purple-300 opacity-40 rotate-45 origin-center"></div>

                    <div className="absolute top-0 right-10 bottom-0 w-px bg-purple-400 opacity-30 blur-sm -rotate-45 origin-center"></div>
                    <div className="absolute top-0 right-10 bottom-0 w-px bg-purple-300 opacity-40 -rotate-45 origin-center"></div>
                  </div>
                </div>

                {/* Main Logo - Two connected hexagons */}
                <div className="relative w-64 h-64 transform-gpu hover:scale-110 transition-transform duration-500">
                  {/* Left Hexagon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-[95%] -translate-y-1/2 w-40 h-48">
                    <svg
                      viewBox="0 0 100 120"
                      className="w-full h-full drop-shadow-2xl rotate-25"
                    >
                      <defs>
                        <linearGradient
                          id="grad1"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" className="stop-color-purple-400" />
                          <stop
                            offset="50%"
                            className="stop-color-purple-500"
                          />
                          <stop
                            offset="100%"
                            className="stop-color-purple-700"
                          />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur
                            stdDeviation="4"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Main hexagon body */}
                      <path
                        d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
                        fill="url(#grad1)"
                        stroke="#7656f7ff"
                        strokeWidth="2"
                        filter="url(#glow)"
                        className="opacity-90"
                      />

                      {/* Inner cutout */}
                      <path
                        d="M50 25 L75 40 L75 60 L50 75 L25 60 L25 40 Z"
                        fill="#4c1d95"
                        opacity="0.6"
                      />

                      {/* Top highlight */}
                      <path
                        d="M50 10 L65 18 L65 35 L50 45 Z"
                        fill="#ddd6fe"
                        opacity="0.4"
                      />
                    </svg>
                  </div>

                  {/* Right Hexagon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-40 h-48">
                    <svg
                      viewBox="-15 10 100 120"
                      className="w-full h-full drop-shadow-2xl rotate-45"
                    >
                      <defs>
                        <linearGradient
                          id="grad2"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" className="stop-color-purple-500" />
                          <stop
                            offset="50%"
                            className="stop-color-purple-600"
                          />
                          <stop
                            offset="100%"
                            className="stop-color-indigo-800"
                          />
                        </linearGradient>
                      </defs>

                      {/* Main hexagon body */}
                      <path
                        d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
                        fill="url(#grad2)"
                        stroke="#4c1d95"
                        strokeWidth="2"
                        filter="url(#glow)"
                      />

                      {/* Inner cutout */}
                      <path
                        d="M50 25 L75 40 L75 60 L50 75 L25 60 L25 40 Z"
                        fill="#1e1b4b"
                        opacity="0.7"
                      />

                      {/* Top highlight */}
                      <path
                        d="M50 10 L65 18 L65 35 L50 45 Z"
                        fill="#c4b5fd"
                        opacity="0.5"
                      />
                    </svg>
                  </div>

                  {/* Connection glow between the two */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20">
                    <div className="absolute inset-0 bg-purple-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Feature Reasons */}
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {/* Reason 1 */}
            <div className="p-6 border rounded-md hover:shadow-lg transition-all">
              {/* Heading + Number row */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Real Web3 Utility</h3>
                <span className="text-indigo-600 font-bold text-2xl opacity-80">
                  01
                </span>
              </div>

              <p className="text-gray-500 mt-1 text-sm leading-relaxed">
                Built to connect real businesses, apps, and users directly with
                blockchain power.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="p-6 border rounded-md hover:shadow-lg transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">High Performance</h3>
                <span className="text-indigo-600 font-bold text-2xl opacity-80">
                  02
                </span>
              </div>

              <p className="text-gray-500 mt-1 text-sm leading-relaxed">
                Ultra-fast, low-fee, scalable network designed for millions of
                transactions.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="p-6 border rounded-md hover:shadow-lg transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Secure & Future-Ready</h3>
                <span className="text-indigo-600 font-bold text-2xl opacity-80">
                  03
                </span>
              </div>

              <p className="text-gray-500 mt-1 text-sm leading-relaxed">
                Enterprise-grade security and decentralized governance built for
                the future.
              </p>
            </div>
          </div>
        </div>

        <div>
          <CompanyValues />
        </div>
      </div>

      <MissionSection />
      <VisionSection />
    </div>
  );
};

export default About;

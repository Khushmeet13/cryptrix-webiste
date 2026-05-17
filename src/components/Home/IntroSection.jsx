import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IntroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sph/"); // or change to your real route
  };

  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#01021f] text-white overflow-hidden">
      {/* Animated background grid + subtle noise */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,0,60,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(30,0,60,0.4)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      {/* Big glowing orb gradients */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-60 -right-40 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-10 text-center">
        {/* Floating Cryptrix Token / Logo Orb */}
        <div className="relative inline-block mb-12 md:mb-8 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/40 to-blue-600/40 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border border-blue-500/50 bg-gradient-to-br from-[#1a0033] to-[#0f0026] backdrop-blur-lg flex items-center justify-center ">
            <img
              src="/cryptrix-favicon.png" 
              alt="Cryptrix Logo"
              className="w-20 h-20 md:w-28 md:h-28 object-contain"
            />
          </div>

        </div>

        {/* Main Title - Futuristic font style */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 tracking-tight leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Cryptrix
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-purple-200/80 font-light leading-relaxed mb-12 md:mb-12">
          Powering the future of decentralized networks with blazing-fast transactions, minimal fees, and truly transparent governance.
        </p>


        {/* Feature Cards - Glassmorphism style */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {[
            { title: "Lightning Speed", desc: "Sub-second finality" },
            { title: "Near-Zero Fees", desc: "Best-in-class economics" },
            { title: "On-Chain Governance", desc: "Community-driven evolution" },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative p-2 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-purple-500/20 hover:border-blue-500/50 transition-all duration-400 hover:shadow-[0_0_20px_rgba(0,122,255,0.3)] flex flex-col items-center text-center"
            >
              {/* Gradient hover effect */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-purple-600/30 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

              {/* Icon + Title row */}
              <div className="flex items-center justify-center space-x-2 ">
                <Sparkles className="w-5 h-5 text-blue-600 group-hover:text-purple-300 transition-colors" />
                <h3 className="text-base">{item.title}</h3>
              </div>

            </div>

          ))}
        </div>

        {/* CTA Button - Neon glow effect */}
        <button type="button"
          class="relative px-6 py-3 border border-white/30 font-medium backdrop-blur text-white text-sm rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:cursor-pointer hover:shadow-blue-500/40">
          <span class="absolute inset-0 bg-blue-900 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-full"></span>
          <span class="relative z-10 flex items-center gap-1">View Active Votes
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-700" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default IntroSection;
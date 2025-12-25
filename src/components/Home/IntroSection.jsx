import React from "react";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IntroSection = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/sph/"); 
  };

  return (
    <section
      className="relative w-full py-24 bg-white text-white overflow-hidden pt-60"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,70,255,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.05),transparent)]"></div>

      {/* Animated Neon Orbs */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-6 pt-42 sm:pt-0 text-center">
        {/* Floating SPH Coin */}
        <div className="flex justify-center mb-10">
          <div
            className="w-30 h-30 sm:w-40 sm:h-40 rounded-full border border-indigo-400/40 shadow-[0_0_40px_rgba(168,85,247,0.5)] 
          bg-gradient-to-br from-indigo-700 to-indigo-900/80 flex items-center justify-center 
          "
          >
            <span className="text-2xl sm:text-4xl font-extrabold">SPH</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-6xl font-semibold mb-6 tracking-wide text-black font-['Dancing_Script']">
          Introducing the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 via-indigo-700 to-blue-700">
            SapherChain
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-md md:text-xl text-gray-800 leading-relaxed">
         Sapher chain is a next-generation Layer-1 blockchain built on Governed Proof of Stake (GPoS), combining fast transactions, low fees, and structured on-chain governance that protects the network from chaos while enabling steady evolution.
        </p>

        {/* Features */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            "Ultra-Fast Transactions",
            "Low Gas Fees",
            "Eco-Friendly Protocol",
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 
              hover:border-indigo-400/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.55)]
              transition-all duration-300"
            >
              <Sparkles className="mx-auto mb-3 text-black" />
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={handleClick}
          className="mt-12 px-8 py-4 rounded-full text-lg font-medium 
        bg-gradient-to-r from-indigo-900 to-indigo-700 
        shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:shadow-[0_0_25px_rgba(99,102,241,0.55)]
        transition-all hover:cursor-pointer"
        >
          Learn More About SPH
        </button>
      </div>
    </section>
  );
};

export default IntroSection;

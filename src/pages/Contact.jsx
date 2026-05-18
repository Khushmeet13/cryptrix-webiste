import ContactCommunity from "@/components/Contact/ContactCommunity";
import ContactForm from "@/components/Contact/ContactForm";
import SupportSection from "@/components/Contact/SupportSection";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full">
      {/* EPIC Animated Banner - No Framer Motion */}
      <section className="relative h-[50vh] overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950/60 to-purple-950/40" />

        {/* Animated Floating Orbs (Pure CSS) */}
        <div className="absolute inset-0">
          {/* Orb 1 */}
          <div className="absolute top-10 left-10 w-76 h-76 md:w-[600px] md:h-[600px] bg-cyan-600/40 rounded-full blur-3xl animate-float-slow" />

          {/* Orb 2 */}
          <div className="absolute bottom-20 right-10 w-70 h-70 md:w-[500px] md:h-[500px] bg-indigo-600/30 rounded-full blur-3xl animate-float-reverse" />

          {/* Center Glow Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        {/* Subtle Moving Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent bg-[length:60px_60px] animate-slide-grid" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-semibold tracking-tighter text-white">
            Contact
          </h1>

          {/* Animated Underline */}
          <div className="h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-full mt-4 mx-auto max-w-xs animate-expand-width origin-left" />

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mt-8 font-light tracking-wider opacity-0 animate-fade-in delay-700">
            Let's connect to know more about sapherchain
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-3 animate-bounce" />
          </div>
        </div>
      </section>

      <ContactCommunity />
      {/* <SupportSection /> */}
      <ContactForm />
    </div>
  );
};

export default Contact;

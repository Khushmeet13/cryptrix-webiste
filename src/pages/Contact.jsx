import ContactCommunity from "@/components/Contact/ContactCommunity";
import ContactForm from "@/components/Contact/ContactForm";
import SupportSection from "@/components/Contact/SupportSection";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative overflow-hidden bg-[#01021f] py-28 md:py-32">
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
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[130px] animate-float-slow pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[130px] animate-float-reverse pointer-events-none" />

        {/* Main Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Get in Touch
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight tracking-tight">
            Let's Start a <span className="text-blue-400">Conversation</span>
          </h1>

          <p className="text-lg text-gray-400 mt-6 max-w-xl mx-auto leading-relaxed">
            Questions about Cryptrix, partnership ideas, or press inquiries —
            our team typically replies within 24 hours.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@cryptrixchain.com"
              className="relative inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Email Us
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact-form"
              className="relative inline-flex items-center gap-1.5 px-6 py-3 bg-transparent border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              <MessageCircle className="w-4 h-4" />
              Send a Message
            </a>
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

import React from "react";
import { Lightbulb, MessageCircle, ArrowUpRight } from "lucide-react";

const RoadmapCTA = () => {
  return (
    <section className="relative py-20 md:py-24 px-6 border-t border-white/10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 mb-6">
          <Lightbulb size={20} className="text-blue-400" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Got an idea for Cryptrix?
        </h2>
        <p className="mt-3 text-gray-400 max-w-lg mx-auto">
          This roadmap is shaped by the people who use the network. Suggest
          a feature or weigh in on what ships next.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/community/"
            className="group inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
          >
            Suggest a Feature
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/community/"
            className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
          >
            <MessageCircle size={16} />
            Join the Discussion
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoadmapCTA;

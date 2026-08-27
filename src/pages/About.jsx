import React from "react";
import { ArrowUpRight } from "lucide-react";
import Manifesto from "@/components/About/Manifesto";
import MissionStatement from "@/components/About/MissionStatement";
import JourneyTimeline from "@/components/About/JourneyTimeline";
import BehindTheBuild from "@/components/About/BehindTheBuild";

const stats = [
  { value: "2021", label: "Founded" },
  { value: "$2.4B+", label: "Value Secured" },
  { value: "50K+", label: "Community" },
  { value: "120+", label: "Countries" },
];

const About = () => {
  return (
    <div className="w-full bg-[#01021f]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&display=swap');
        .about-serif { font-family: 'Fraunces', ui-serif, Georgia, serif; }
      `}</style>

      {/* ───────── Hero ───────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-16 py-32">
        {/* Giant ghost watermark */}
        <div
          aria-hidden="true"
          className="about-serif absolute -right-16 md:right-0 top-1/2 -translate-y-1/2 text-[16rem] md:text-[22rem] italic leading-none select-none pointer-events-none text-white/[0.025]"
        >
          01
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        {/* Spine label */}
        <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left items-center gap-3 text-xs tracking-[0.3em] uppercase text-gray-500">
          <span className="w-8 h-px bg-indigo-500" />
          Est. 2021 — Cryptrix Labs
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-14 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <span className="block text-sm uppercase tracking-[0.3em] text-blue-400 mb-6">
              About Cryptrix
            </span>

            <h1 className="about-serif text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.05] text-white">
              We're building the{" "}
              <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                rails
              </em>
              <br />
              for an open economy.
            </h1>

            <p className="mt-8 max-w-xl text-lg text-gray-400 leading-relaxed">
              Cryptrix is infrastructure for a world where value moves as
              freely as information — non-custodial, verifiable, and owned by
              the people who create it.
            </p>

            {/* Stat strip */}
            <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-lg">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="about-serif text-3xl text-white">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-gray-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: framed visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://media.istockphoto.com/id/866600030/photo/abstract-cyberspace-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sr0u60I1nxRvq1mZaWAgw2Wf8_YdBOqUWCn6ngQtN_M="
                alt="Cryptrix network infrastructure"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01021f] via-transparent to-indigo-950/20" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-2.5 rounded-full bg-[#01021f] border border-white/10 px-5 py-3 shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs text-gray-300">
                <span className="text-white font-semibold">Mainnet</span> live since 2023
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Origin ───────── */}
      <section className="relative py-24 md:py-32 px-6 md:px-16 border-t border-white/10 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="about-serif italic text-3xl text-blue-400">02</span>
            <h2 className="about-serif text-3xl md:text-4xl text-white mt-4 leading-tight">
              Why we
              <br />
              exist
            </h2>

            {/* Hexagon mark */}
            <div className="relative mt-16 hidden md:block h-56 opacity-90">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52">
                <div className="absolute top-1/2 left-1/2 -translate-x-[85%] -translate-y-1/2 w-32 h-40">
                  <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-2xl rotate-25">
                    <defs>
                      <linearGradient id="aboutGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="50%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#4338ca" />
                      </linearGradient>
                      <filter id="aboutGlow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
                      fill="url(#aboutGrad1)"
                      stroke="#7656f7"
                      strokeWidth="2"
                      filter="url(#aboutGlow)"
                      className="opacity-90"
                    />
                    <path d="M50 25 L75 40 L75 60 L50 75 L25 60 L25 40 Z" fill="#4c1d95" opacity="0.6" />
                  </svg>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-32 h-40">
                  <svg viewBox="-15 10 100 120" className="w-full h-full drop-shadow-2xl rotate-45">
                    <defs>
                      <linearGradient id="aboutGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="50%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#312e81" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
                      fill="url(#aboutGrad2)"
                      stroke="#4c1d95"
                      strokeWidth="2"
                      filter="url(#aboutGlow)"
                    />
                    <path d="M50 25 L75 40 L75 60 L50 75 L25 60 L25 40 Z" fill="#1e1b4b" opacity="0.7" />
                  </svg>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16">
                  <div className="absolute inset-0 bg-indigo-400 rounded-full blur-3xl opacity-40 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 md:border-l md:border-white/10 md:pl-12">
            <p className="about-serif text-2xl md:text-[1.85rem] text-white/90 leading-snug mb-8">
              <span className="about-serif float-left text-7xl text-blue-400 leading-[0.8] mr-3 mt-1">
                C
              </span>
              ryptrix was created to solve the core limitations of modern
              blockchains — scalability, security, and real-world utility —
              while keeping the experience simple and powerful. In a world
              where digital trust often feels fragile, we saw an opportunity
              to build something more dependable.
            </p>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Cryptrix was born from a simple belief: that value should move
              as freely as information. We built this platform so individuals
              and communities can trade, hold, and govern their assets
              without relying on anyone else — verified by code, not by
              permission.
            </p>

            <a
              href="/dex-exchange/"
              className="group mt-10 inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-blue-400 hover:text-blue-400 transition-colors duration-300"
            >
              See it in action
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      <BehindTheBuild />
      <Manifesto />
      <MissionStatement />
      <JourneyTimeline />

      {/* ───────── Closing CTA ───────── */}
      <section className="relative py-24 md:py-32 px-6 text-center border-t border-white/10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="about-serif text-3xl md:text-5xl text-white leading-tight max-w-2xl mx-auto">
            Come build the rails with us.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/community/"
              className="inline-flex items-center gap-1.5 px-7 py-3.5 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Join the Community
              <ArrowUpRight size={16} />
            </a>
            <a
              href="/contact/"
              className="inline-flex items-center gap-1.5 px-7 py-3.5 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

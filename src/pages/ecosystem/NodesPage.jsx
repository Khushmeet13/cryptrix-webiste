import NewsletterSignup from "@/components/Community/NewsletterSignup";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

/* ---------------- DATA ---------------- */

const heroStats = [
  { label: "Total Nodes", value: "320+" },
  { label: "Regions", value: "42" },
  { label: "Latency", value: "120ms" },
  { label: "Uptime", value: "99.99%" },
];


const NodesPage = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO + GLOBE ================= */}
      <section className="relative h-[70vh] px-6 flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl mb-4">
              Global Node Infrastructure
            </h1>
            <p className="text-gray-400 max-w-xl mb-10">
              A globally distributed node network ensuring speed,
              decentralization, and resilience across regions.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6">
              {heroStats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl
                             border border-white/10
                             shadow-[20px_0_40px_rgba(0,0,0,0.4)]"
                >
                  <p className="text-gray-400 text-sm">{s.label}</p>
                  <p className="text-2xl font-semibold">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT GLOBE */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-[320px] h-[320px] rounded-full 
                            bg-gradient-to-br from-indigo-600/30 to-cyan-400/20
                            animate-spin-slow
                            shadow-[0_0_120px_rgba(99,102,241,0.35)]">

              {/* Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse" />
              <div className="absolute inset-[-20px] rounded-full border border-indigo-500/20 animate-spin-reverse" />

              {/* Nodes */}
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full
                             shadow-[0_0_10px_#22d3ee]"
                  style={{
                    top: `${20 + i * 8}%`,
                    left: `${30 + (i % 3) * 15}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-24 text-center px-6 bg-white text-black">
        <h2 className="text-3xl mb-4">Run a Node</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Join the global infrastructure and strengthen decentralization.
        </p>

        <div className="flex justify-center gap-6">
          <button className="px-8 py-3 text-white rounded-full bg-indigo-600 hover:bg-indigo-500 transition">
            Start Node
          </button>
          <button className="px-8 py-3 rounded-full border border-black/20 hover:border-white transition">
            Documentation
          </button>
        </div>
      </section>

      <NewsletterSignup />

    </div>
  );
};

export default NodesPage;

import React from "react";
import { Download } from "lucide-react";
const logo = "/cryptrix-logo-dark.png";

const brandAssets = [
  {
    title: "Logo Pack",
    desc: "Official Cryptrix logos in PNG, SVG & EPS format.",
    img: "/cryptrix-favicon.png",
  },
  {
    title: "Color Palette",
    desc: "Primary, secondary, and extended brand colors.",
    img: "https://media.istockphoto.com/id/2160100201/photo/blue-shades-color-variations-divided-grid-pixels-mosaic-abstract-pixellate-pattern.webp?a=1&b=1&s=612x612&w=0&k=20&c=5pYsvDZYVCsACxlFCzc7BwtRc7f-t0V9CFUp7XaaU6U=",
  },
  {
    title: "Typography",
    desc: "Brand fonts, usage rules, and guidelines.",
    img: "https://media.istockphoto.com/id/2184251048/photo/identity-creation-businessman-analyzing-and-monitoring-technological-brand-reputation-market.jpg?s=612x612&w=0&k=20&c=-DbJDoppnECVE9kSZnUtCp4nwhnm4ny1-rUWZThdttc=",
  },
  {
    title: "Iconography",
    desc: "Cryptrix icons, shapes, marks & line icons.",
    img: logo,
  },
];

const BrandSection = () => {
  return (
    <section className="relative w-full bg-[#01021f] text-white py-20 md:py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
            Brand Kit
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-white">Cryptrix Brand Kit</h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
          Download official assets, typography, colors, and guidelines to
          represent the Cryptrix identity consistently across all brand
          touchpoints.
        </p>
      </div>

      {/* Asset Cards */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {brandAssets.map((item, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-4 flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition">
                <Download size={16} /> Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="relative z-10 mt-14 flex justify-center">
        <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30">
          <Download size={16} />
          Download Full Brand Kit
        </button>
      </div>
    </section>
  );
};

export default BrandSection;

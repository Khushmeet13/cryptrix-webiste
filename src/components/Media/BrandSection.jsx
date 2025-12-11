import React from "react";
import { Download } from "lucide-react";
import logo from "../../assets/sapherchain-logo-dark.png";

const brandAssets = [
  {
    title: "Logo Pack",
    desc: "Official Sapher logos in PNG, SVG & EPS format.",
    img: "/sapherchain-favicon-light.png",
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
    desc: "Sapher icons, shapes, marks & line icons.",
    img: logo,
  },
];

const BrandSection = () => {
  return (
    <section className="w-full bg-white text-black py-22 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-semibold mb-2">Sapher Brand Kit</h2>
       <p className=" text-md text-gray-500 max-w-xl mx-auto leading-relaxed">
          Download official assets, typography, colors, and guidelines to 
          represent the Sapher identity consistently across all brand touchpoints.
        </p>
      </div>

      {/* Asset Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto hover:cursor-pointer">
        {brandAssets.map((item, i) => (
          <div
            key={i}
            className=" border border-white/10 rounded-2xl shadow-xl overflow-hidden hover:border-indigo-500/30 transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-black leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-4 flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-600 transition">
                <Download size={18} /> Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-16 flex justify-center">
        <button className="px-8 py-3 text-white rounded-full bg-indigo-600 transition text-sm flex items-center gap-2">
          <Download size={16} />
          Download Full Brand Kit
        </button>
      </div>
    </section>
  );
};

export default BrandSection;

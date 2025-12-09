import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    title: "Fast Speed",
    short: "High TPS optimized network.",
    tag: "Performance",
    full: "The network is engineered to achieve extremely high throughput with a low-latency consensus layer.",
  },
  {
    title: "Low Fee",
    short: "Near-zero transaction costs.",
    tag: "Cost",
    full: "Optimized architecture ensures very low fees even during high network activity.",
  },
  {
    title: "Smart Contracts",
    short: "Build automated trustless logic.",
    tag: "Technology",
    full: "Create, deploy, and run decentralized programs using a modern virtual machine.",
  },
  {
    title: "Scalability",
    short: "Horizontally and vertically scalable.",
    tag: "Infrastructure",
    full: "Built to scale with sharding, parallel execution, and high-performance data layers.",
  },
];

const images = [
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600",
  "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600",
  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600",
];

const ResourcesFeatureSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="grid md:grid-cols-2 gap-10 pt-10">

      {/* LEFT — TRON-STYLE LIST WITH EXPAND */}
      <div className="space-y-6">

        {items.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all cursor-pointer 
                ${isOpen ? "border-indigo-500 shadow-lg bg-white/60" : "border-gray-200 bg-white"}`}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              {/* Title Row */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.short}</p>
                </div>

                {/* Tag */}
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                  {item.tag}
                </span>
              </div>

              {/* Dropdown Chevron */}
              <ChevronDown
                className={`w-5 h-5 mt-3 text-gray-500 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />

              {/* EXPANDED CONTENT */}
              {isOpen && (
                <div className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.full}
                </div>
              )}
            </div>
          );
        })}

      </div>

      {/* RIGHT — TRON STYLE IMAGE GRID */}
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, index) => (
          <div key={index} className="w-full h-40 rounded-lg overflow-hidden">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesFeatureSection;

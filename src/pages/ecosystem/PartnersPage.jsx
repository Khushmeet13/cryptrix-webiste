import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import NewsletterSignup from "@/components/Community/NewsletterSignup";

/* ---------------- DATA ---------------- */

const categories = [
  "All",
  "Infrastructure",
  "DeFi",
  "Wallets",
  "Exchanges",
  "Ecosystem",
];

const partners = [
  {
    name: "JustLend",
    logo: "data:image/jpeg;base64,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",
    category: "DeFi",
    desc: "Lending & borrowing protocol powered by CRX",
  },
  {
    name: "SunSwap",
    logo: "https://fleet.ie/wp-content/uploads/2021/10/Sunswap-logo-1-300x169.jpeg",
    category: "DeFi",
    desc: "Decentralized exchange integrated with CRX",
  },
  {
    name: "Bybit",
    logo: "https://fh-static.bycsi.com/images/home/official-image.png",
    category: "Exchanges",
    desc: "Global exchange supporting CRX assets",
  },
  {
    name: "Trust Wallet",
    logo: "https://static.vecteezy.com/system/resources/previews/067/565/496/non_2x/trust-wallet-rounded-logo-design-free-png.png",
    category: "Wallets",
    desc: "Secure wallet with CRX integration",
  },
];

const testimonials = [
  {
    quote:
      "CRX infrastructure allowed us to scale our protocol with confidence and speed.",
    name: "Alex Morgan",
    role: "Core Developer, JustLend",
  },
  {
    quote:
      "The validator and node ecosystem around CRX is one of the most reliable we’ve seen.",
    name: "Sarah Kim",
    role: "Infra Lead, SunSwap",
  },
];


const PartnersPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPartners =
    activeCategory === "All"
      ? partners
      : partners.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-950/50 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-4">
            Powering the CRX Ecosystem
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Trusted by infrastructure providers, DeFi protocols, and global
            partners building on CRX.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Total Partners", value: "80+" },
              { label: "Integrations", value: "25+" },
              { label: "Active Projects", value: "60+" },
              { label: "Regions", value: "30+" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl
                           border border-white/10"
              >
                <p className="text-gray-400 text-sm">{s.label}</p>
                <p className="text-2xl font-semibold">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CATEGORY TABS ================= */}
      <section className="py-6 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex gap-4 flex-wrap justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-6 py-1 rounded-full border transition cursor-pointer
                ${
                  activeCategory === c
                    ? "bg-indigo-600 border-indigo-500"
                    : "border-gray-200 hover:border-gray-300 text-black"
                }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PARTNERS ================= */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-10">Featured Partners</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {partners.slice(0, 2).map((p, i) => (
              <div
                key={i}
                className="rounded-3xl p-8 bg-gray-50 backdrop-blur-xl
                           border border-white/10 hover:scale-105 transition"
              >
                <img src={p.logo} alt={p.name} className="h-42 mb-6 rounded-2xl" />
                <h3 className="text-xl mb-2">{p.name}</h3>
                <p className="text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ALL PARTNERS GRID ================= */}
      <section className="pb-22 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredPartners.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl
                         border border-gray-300 text-center
                         hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-10 mx-auto mb-4"
              />
              <p className="font-medium text-black">{p.name}</p>
              <span className="text-xs text-gray-400">{p.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INTEGRATION FLOW ================= */}
      <section className="py-16 px-6 bg-gray-50 text-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl mb-6">How Partners Integrate with CRX</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {["Partner App", "CRX APIs", "Validators", "Users"].map((step, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-white border border-gray-100"
              >
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 bg-gray-50 border border-gray-100"
            >
              <p className="text-gray-500 mb-6">“{t.quote}”</p>
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className=" text-center px-6 bg-white text-black">
        <h2 className="text-3xl mb-4">Become a Partner</h2>
        <p className="text-gray-400 mb-10">
          Build, integrate, and grow with the CRX ecosystem.
        </p>
        <div className="flex justify-center gap-6">
          <button className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white">
            Apply as Partner
          </button>
          <button className="px-6 py-3 rounded-full border border-black">
            View Docs
          </button>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

export default PartnersPage;

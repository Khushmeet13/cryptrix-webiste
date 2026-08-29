import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  Flame,
  UploadCloud,
  Percent,
  Coins,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const filters = ["All", "Digital Art", "Collectibles", "Music", "Membership Passes"];

const collections = [
  {
    name: "Genesis Fragments",
    image:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=700&q=80",
    floor: "12.4 CRX",
    items: "4,200",
  },
  {
    name: "Wovenlight",
    image:
      "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=700&q=80",
    floor: "8.1 CRX",
    items: "2,900",
  },
  {
    name: "Neutral Density",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=700&q=80",
    floor: "5.7 CRX",
    items: "6,600",
  },
  {
    name: "Prism Runners",
    image:
      "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=700&q=80",
    floor: "3.2 CRX",
    items: "9,100",
  },
];

const gallery = [
  {
    title: "Fragment #0142",
    creator: "@genesis.crx",
    price: "14.2 CRX",
    image:
      "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=700&q=80",
  },
  {
    title: "Wovenlight #08",
    creator: "@wovenlight",
    price: "9.5 CRX",
    image:
      "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=700&q=80",
  },
  {
    title: "Density Study I",
    creator: "@nd.studio",
    price: "6.1 CRX",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=700&q=80",
  },
  {
    title: "Neural Drift",
    creator: "@driftlab",
    price: "18.0 CRX",
    image:
      "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=700&q=80",
  },
  {
    title: "Inkwell #21",
    creator: "@inkwell",
    price: "4.8 CRX",
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=700&q=80",
  },
  {
    title: "Prism Runner #3",
    creator: "@prismrunners",
    price: "3.4 CRX",
    image:
      "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=700&q=80",
  },
  {
    title: "Wave Field 02",
    creator: "@fieldstudio",
    price: "7.9 CRX",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&q=80",
  },
  {
    title: "Fragment #0089",
    creator: "@genesis.crx",
    price: "11.0 CRX",
    image:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=700&q=80",
  },
];

const mintSteps = [
  { icon: UploadCloud, title: "Upload", desc: "Add your artwork and metadata." },
  { icon: Percent, title: "Set Royalties", desc: "Enforced on-chain for every resale." },
  { icon: Coins, title: "Choose Supply", desc: "One-of-one or a full collection." },
  { icon: ShieldCheck, title: "Mint", desc: "Confirmed on-chain in under a second." },
];

const NFTPlatform = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Marketplace header ───────── */}
      <section className="px-6 sm:px-12 lg:px-24 pt-28 pb-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-3">
                Product / NFT Platform
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
                Mint, trade, and own — natively on Cryptrix.
              </h1>
            </div>
            <Link
              to="/wallets"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 shrink-0 w-fit"
            >
              Start Minting
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Search + filters */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search collections, creators, or items"
                className="w-full pl-11 pr-4 py-3 rounded-full border border-white/15 bg-white/[0.03] text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-sm text-gray-300 hover:border-white/30 transition-colors shrink-0"
            >
              <SlidersHorizontal size={15} />
              Filters
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  activeFilter === f
                    ? "bg-indigo-500/15 border-indigo-500/40 text-blue-300"
                    : "border-white/10 text-gray-400 hover:border-white/25"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Trending collections ───────── */}
      <section className="px-6 sm:px-12 lg:px-24 py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Flame size={16} className="text-orange-400" />
            <h2 className="text-lg font-semibold text-white">
              Trending Collections
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {collections.map((c) => (
              <div
                key={c.name}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-colors cursor-pointer"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-white/[0.02]">
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {c.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Floor {c.floor}</span>
                    <span>{c.items} items</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-gray-600">
            Example collections shown for illustration.
          </p>
        </div>
      </section>

      {/* ───────── Gallery grid ───────── */}
      <section className="px-6 sm:px-12 lg:px-24 py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold text-white mb-6">
            Explore the Gallery
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {gallery.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-colors cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-3.5 bg-white/[0.02]">
                  <h3 className="text-sm font-medium text-white truncate">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">
                      {item.creator}
                    </span>
                    <span className="text-xs font-semibold text-blue-300">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── How minting works ───────── */}
      <section className="px-6 sm:px-12 lg:px-24 py-16 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-semibold text-white mb-8">
            How minting works
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mintSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title}>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <p className="text-[11px] font-mono text-gray-600 mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-sm font-semibold text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-xs text-gray-500">
            Minting is a standard transaction on Cryptrix — an average of
            $0.0027 per mint, confirmed in under a second, with royalties
            enforced by the token contract on every resale.
          </p>
        </div>
      </section>

      {/* ───────── Closing CTA ───────── */}
      <section className="px-6 sm:px-12 lg:px-24 py-16 text-center">
        <h2 className="text-2xl font-semibold text-white">
          Ready to mint your first collection?
        </h2>
        <p className="mt-3 text-gray-400 max-w-md mx-auto">
          Get a wallet to start minting, or read how trust and fraud
          protection work across Cryptrix's NFT ecosystem.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/wallets"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            Get a Wallet
            <ArrowUpRight size={16} />
          </Link>
          <Link
            to="/use-cases/nfts"
            className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
          >
            NFT Trust &amp; Fraud Protection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NFTPlatform;

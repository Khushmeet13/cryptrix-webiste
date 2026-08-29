import React, { useMemo, useState } from "react";
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
  Heart,
  Wallet,
  ChevronDown,
  Clock,
  Layers,
} from "lucide-react";

const filters = ["All", "Digital Art", "Collectibles", "Music", "Membership Passes"];
const sortOptions = ["Recently added", "Cheapest", "Highest price", "Most popular"];

const collections = [
  { name: "Genesis Fragments", image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=700&q=80", floor: "12.4 CRX", items: "4,200" },
  { name: "Wovenlight", image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=700&q=80", floor: "8.1 CRX", items: "2,900" },
  { name: "Neutral Density", image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=700&q=80", floor: "5.7 CRX", items: "6,600" },
  { name: "Prism Runners", image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=700&q=80", floor: "3.2 CRX", items: "9,100" },
];

const gallery = [
  { title: "Fragment #0142", creator: "@genesis.crx", price: 14.2, highestBid: 14.2, editionOf: "1 of 1", likes: 92, postedAgo: "6 hours ago", image: "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=900&q=80" },
  { title: "Wovenlight #08", creator: "@wovenlight", price: 9.5, highestBid: 9.8, editionOf: "1 of 56", likes: 56, postedAgo: "8 hours ago", image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=900&q=80" },
  { title: "Density Study I", creator: "@nd.studio", price: 6.1, highestBid: 6.4, editionOf: "1 of 12", likes: 34, postedAgo: "8 hours ago", image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=900&q=80" },
  { title: "Neural Drift", creator: "@driftlab", price: 18.0, highestBid: 18.5, editionOf: "1 of 1", likes: 120, postedAgo: "1 day ago", image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=900&q=80" },
  { title: "Inkwell #21", creator: "@inkwell", price: 4.8, highestBid: 5.0, editionOf: "1 of 30", likes: 18, postedAgo: "1 day ago", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=900&q=80" },
  { title: "Prism Runner #3", creator: "@prismrunners", price: 3.4, highestBid: 3.6, editionOf: "1 of 90", likes: 11, postedAgo: "2 days ago", image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=900&q=80" },
  { title: "Wave Field 02", creator: "@fieldstudio", price: 7.9, highestBid: 8.2, editionOf: "1 of 5", likes: 29, postedAgo: "2 days ago", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80" },
  { title: "Fragment #0089", creator: "@genesis.crx", price: 11.0, highestBid: 11.4, editionOf: "1 of 1", likes: 67, postedAgo: "3 days ago", image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=900&q=80" },
];

const topCreators = Object.values(
  gallery.reduce((acc, item) => {
    acc[item.creator] = acc[item.creator] || { creator: item.creator, volume: 0, items: 0 };
    acc[item.creator].volume += item.price;
    acc[item.creator].items += 1;
    return acc;
  }, {})
).sort((a, b) => b.volume - a.volume);

const mintSteps = [
  { icon: UploadCloud, title: "Upload", desc: "Add your artwork and metadata." },
  { icon: Percent, title: "Set Royalties", desc: "Enforced on-chain for every resale." },
  { icon: Coins, title: "Choose Supply", desc: "One-of-one or a full collection." },
  { icon: ShieldCheck, title: "Mint", desc: "Confirmed on-chain in under a second." },
];

const NFTPlatform = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sort, setSort] = useState("Recently added");
  const [sortOpen, setSortOpen] = useState(false);
  const [featured, setFeatured] = useState(gallery[0]);
  const [liked, setLiked] = useState({});

  const toggleLike = (title) => setLiked((prev) => ({ ...prev, [title]: !prev[title] }));

  const sortedGallery = useMemo(() => {
    const list = [...gallery];
    if (sort === "Cheapest") return list.sort((a, b) => a.price - b.price);
    if (sort === "Highest price") return list.sort((a, b) => b.price - a.price);
    if (sort === "Most popular") return list.sort((a, b) => b.likes - a.likes);
    return list;
  }, [sort]);

  return (
    <div className="w-full bg-[#01021f] text-white pt-16">
      {/* ───────── Marketplace top bar ───────── */}
      <section className="sticky top-16 z-30 px-6 sm:px-12 lg:px-24 py-3 border-b border-white/10 bg-[#01021f]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold text-white">NFT Platform</span>
            <nav className="hidden md:flex items-center gap-5 text-xs text-gray-400">
              <a href="#gallery" className="hover:text-white transition-colors">Explore</a>
              <a href="#collections" className="hover:text-white transition-colors">Collections</a>
              <a href="#mint" className="hover:text-white transition-colors">How It Works</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#mint"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-semibold hover:scale-105 transition-all duration-300"
            >
              Create
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-white text-xs font-medium hover:border-white/30 transition-colors"
            >
              <Wallet size={13} />
              Connect Wallet
            </button>
          </div>
        </div>
      </section>

      {/* ───────── Spotlight hero ───────── */}
      <section className="px-6 sm:px-12 lg:px-24 pt-14 pb-14 border-b border-white/10 overflow-hidden relative">
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-2">
            Product / NFT Platform
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold leading-tight mb-8 max-w-xl">
            Mint, trade, and own — natively on Cryptrix.
          </h1>

          <div className="grid lg:grid-cols-[220px_1fr] gap-6">
            {/* Thumbnail strip */}
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-3 order-2 lg:order-1">
              {gallery.slice(0, 6).map((item) => (
                <button
                  key={item.title}
                  onClick={() => setFeatured(item)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    featured.title === item.title ? "border-violet-400" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={item.image} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Featured item */}
            <div className="grid md:grid-cols-[1fr_320px] gap-0 rounded-2xl border border-white/10 overflow-hidden order-1 lg:order-2">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-6 bg-white/[0.02] flex flex-col">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-lg font-semibold text-white">{featured.title}</h2>
                  <button onClick={() => toggleLike(featured.title)} aria-label="Like">
                    <Heart
                      size={18}
                      className={liked[featured.title] ? "fill-rose-400 text-rose-400" : "text-gray-500"}
                    />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mb-5">by {featured.creator}</p>

                <div className="space-y-2.5 text-xs text-gray-400 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5"><Layers size={12} /> Edition</span>
                    <span className="text-gray-200">{featured.editionOf}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5"><Clock size={12} /> Listed</span>
                    <span className="text-gray-200">{featured.postedAgo}</span>
                  </div>
                </div>

                <div className="mt-auto pt-5 border-t border-white/10">
                  <p className="text-[11px] text-gray-500 mb-1">Highest bid</p>
                  <p className="text-xl font-semibold text-violet-300 mb-4">{featured.highestBid} CRX</p>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:scale-105 transition-all duration-300">
                      Buy Now
                    </button>
                    <button className="flex-1 py-2.5 rounded-full border border-white/20 text-white text-xs font-semibold hover:border-white/40 transition-colors">
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Top creators ───────── */}
      <section className="px-6 sm:px-12 lg:px-24 py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold text-white mb-6">Top Creators This Week</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topCreators.map((c, i) => (
              <div key={c.creator} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <span className="text-xs font-mono text-gray-600 w-4">{String(i + 1).padStart(2, "0")}</span>
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-violet-300 shrink-0"
                  style={{ background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.3)" }}
                >
                  {c.creator[1].toUpperCase()}
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-white truncate">{c.creator}</p>
                  <p className="text-xs text-gray-500">{c.volume.toFixed(1)} CRX · {c.items} items</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Trending collections ───────── */}
      <section id="collections" className="px-6 sm:px-12 lg:px-24 py-14 border-b border-white/10 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Flame size={16} className="text-orange-400" />
            <h2 className="text-lg font-semibold text-white">Trending Collections</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {collections.map((c) => (
              <div key={c.name} className="group rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-colors cursor-pointer">
                <div className="relative h-36 overflow-hidden">
                  <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-4 bg-white/[0.02]">
                  <h3 className="text-sm font-semibold text-white mb-1">{c.name}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Floor {c.floor}</span>
                    <span>{c.items} items</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-gray-600">
            Example collections and listings shown for illustration.
          </p>
        </div>
      </section>

      {/* ───────── Gallery grid ───────── */}
      <section id="gallery" className="px-6 sm:px-12 lg:px-24 py-14 border-b border-white/10 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-lg font-semibold text-white">Explore the Gallery</h2>

            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search items"
                  className="pl-9 pr-3 py-2 rounded-full border border-white/15 bg-white/[0.03] text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-violet-500/40 w-48"
                />
              </div>
              <div className="relative">
                <button
                  onClick={() => setSortOpen((v) => !v)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/15 text-xs text-gray-300 hover:border-white/30 transition-colors"
                >
                  <SlidersHorizontal size={13} />
                  {sort}
                  <ChevronDown size={13} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-11 z-20 w-44 rounded-xl border border-white/10 bg-[#05060f] shadow-2xl py-1.5">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSort(opt);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs transition-colors ${
                          sort === opt ? "text-violet-300" : "text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  activeFilter === f
                    ? "bg-violet-500/15 border-violet-500/40 text-violet-300"
                    : "border-white/10 text-gray-400 hover:border-white/25"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {sortedGallery.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-colors"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img src={item.image} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <button
                    onClick={() => toggleLike(item.title)}
                    className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center"
                    aria-label="Like"
                  >
                    <Heart size={13} className={liked[item.title] ? "fill-rose-400 text-rose-400" : "text-white"} />
                  </button>
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-medium text-white bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    {item.editionOf}
                  </span>
                </div>
                <div className="p-3.5 bg-white/[0.02]">
                  <h3 className="text-sm font-medium text-white truncate">{item.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">{item.creator}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-gray-600">Price</p>
                      <p className="text-xs font-semibold text-violet-300">{item.price} CRX</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-600">Highest bid</p>
                      <p className="text-xs text-gray-300">{item.highestBid} CRX</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-white/5 text-[10px] text-gray-500">
                    <span>{item.postedAgo}</span>
                    <span className="flex items-center gap-1">
                      <Heart size={10} className={liked[item.title] ? "fill-rose-400 text-rose-400" : ""} />
                      {item.likes + (liked[item.title] ? 1 : 0)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── How minting works ───────── */}
      <section id="mint" className="px-6 sm:px-12 lg:px-24 py-16 border-b border-white/10 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-semibold text-white mb-8">
            How minting works
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mintSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title}>
                  <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-violet-300" />
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

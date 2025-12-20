import React from "react";
import { useEffect, useState } from "react";
import { ShieldCheck, Globe, ArrowRight, Eye, Layers } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import NewsletterSignup from "@/components/Community/NewsletterSignup";

const stats = [
  {
    label: "Total Blocks",
    value: 12345678,
    data: [
      11800000, 11020000, 13970000, 12040000, 13290000, 11120000, 12345678,
      11800000, 11020000, 13970000, 12040000, 13290000, 11120000, 12345678,
    ],
  },
  {
    label: "Transactions",
    value: 98765432,
    data: [
      91000000, 80500000, 95800000, 75000000, 97200000, 90500000, 98765432,
      91000000, 80500000, 95800000, 75000000, 97200000, 90500000, 98765432,
    ],
  },
  {
    label: "Active Wallets",
    value: 345210,
    data: [
      200000, 308000, 212000, 330000, 340000, 305000, 345210, 200000, 308000,
      212000, 330000, 340000, 305000, 345210,
    ],
  },
  {
    label: "Validators",
    value: 128,
    data: [
      102, 118, 102, 125, 124, 112, 128, 102, 118, 102, 125, 124, 112, 128,
    ],
  },
  {
    label: "TPS",
    value: 2400,
    data: [
      1800, 2050, 1950, 2200, 2350, 2250, 2400, 1800, 2050, 1950, 2200, 2350,
      2250, 2400,
    ],
  },
];

const featuresTop = [
  {
    title: "Decentralized Governance",
    desc: "USDD is governed by a transparent, community-driven process through decentralized proposals and on-chain voting mechanisms.",
    image:
      "https://media.istockphoto.com/id/2200815745/photo/politics-cryptocurrency-stockmarket-graph.webp?a=1&b=1&s=612x612&w=0&k=20&c=d2C7xYLMbUulpAN6Ag2cmcsHxfRNQfWPMSW1t7u7c44=",
  },
  {
    title: "Collateral-Backed Stability",
    desc: "Fully backed by digital assets, maintaining a stable value.",
    image:
      "https://media.istockphoto.com/id/1592510736/photo/central-bank-digital-currency-financial-economic-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=ngNew94zdQJf8mPPOJ_viFG5SGgOJvNC_4r5r_OhY9c=",
  },
];

const featuresBottom = [
  {
    title: "Security",
    desc: "Ensures asset protection with full collateral and decentralized governance.",
    icon: ShieldCheck,
  },
  {
    title: "Transparency",
    desc: "All transactions and governance processes are fully recorded on-chain.",
    icon: Eye,
  },
  {
    title: "Easy DeFi Integration",
    desc: "Seamless integration with DeFi platforms for lending, borrowing, and trading.",
    icon: Layers,
  },
  {
    title: "Multichain",
    desc: "Supports Ethereum, BNB Chain, Tron, and other major blockchains.",
    icon: Globe,
  },
];

const apps = [
  {
    title: "SPH Stable",
    desc: "Decentralized stable asset backed by on-chain collateral.",
    image:
      "https://media.istockphoto.com/id/2160225701/photo/chain-link-concept-chain-symbol-on-futuristic-background-productivity-evolution-futuristic.webp?a=1&b=1&s=612x612&w=0&k=20&c=xxSvegx_0X3givvIeNfcaTiXPUAIHtXW7Ye-Znu3fvo=",
    cta: "Learn More",
  },
  {
    title: "SPH Bridge",
    desc: "Seamless bridge between SapherChain and other networks.",
    image:
      "https://media.istockphoto.com/id/1254894480/photo/the-modern-creative-communication-and-internet-network-connect-in-smart-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=rtxZndNFOR61C4NY-lbO4Lkib_8qMNqGE1XStygS_V0=",
    cta: "Explore",
  },
  {
    title: "Risk Monitor",
    desc: "Real-time risk alerts & liquidation monitoring.",
    image:
      "https://media.istockphoto.com/id/1045571806/photo/stock-market.jpg?s=612x612&w=0&k=20&c=6OmrmZQRpTdInOyGZvknKR98jczUTeL6RUY0HAB88Wc=",
    cta: "View",
  },
  {
    title: "SPH Markets",
    desc: "Supply & borrow assets with optimized yields.",
    image:
      "https://media.istockphoto.com/id/1834332268/photo/digital-money-evolution-of-bitcoin-dollar-binary-in-financial-industry-and-its-impact-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=W3a---uc3XDAJyFDBtyBCtnoRauTzTfsJ23s8nWwKyQ=",
    cta: "Open Markets",
  },
  {
    title: "Stake SPH",
    desc: "Stake SPH tokens and earn protocol rewards.",
    image:
      "https://media.istockphoto.com/id/2123105830/photo/businessman-pointing-to-blockchain-icon-and-data-for-global-decentralized-network-on-graphic.webp?a=1&b=1&s=612x612&w=0&k=20&c=-mwHbatapwNZvIEv9ESlY_XZkuIYo1l1NLF0kwuquXY=",
    cta: "Stake Now",
  },
];

const updates = [
  {
    date: "November 18, 2025",
    title:
      "Announcement on the Withdrawal of Assets from SUN.io Liquidity Mining Pools",
    image: "https://sun.io/static/media/img_default_1.19869b52.png",
  },
  {
    date: "August 26, 2025",
    title: "Important Notice Regarding USDJ on SUN.io",
    image: "https://sun.io/static/media/img_default_2.7f784928.png",
  },
  {
    date: "July 11, 2025",
    title: "Important Notice Regarding USDDOLD on SUN.io",
    image: "https://sun.io/static/media/img_default_3.513885be.png",
  },
  {
    date: "July 7, 2025",
    title:
      "SunGenX Summer Chill Fest | 16 Days of Meme-Launching Fun & $5,000 Airdrop Begins!",
    image: "https://sun.io/static/media/img_default_4.8ebb5fbe.png",
  },
];

// const markets = [
//   {
//     name: "BYBIT",
//     logo: "https://fh-static.bycsi.com/images/home/official-image.png",
//     badge: "V2.0",
//   },
//   {
//     name: "Gate.io",
//     logo: "https://cryptologos.cc/logos/gatechain-token-gt-logo.png",
//     badge: "V2.0",
//   },
//   {
//     name: "MEXC",
//     logo: "https://cryptologos.cc/logos/mexc-token-mxc-logo.png",
//     badge: "V2.0",
//   },
//   {
//     name: "POLONIEX",
//     logo: "https://cryptologos.cc/logos/poloniex-polk-logo.png",
//     badge: "V2.0",
//   },
//   {
//     name: "JustLend",
//     logo: "https://justlend.org/static/media/logo.8a8f7e6b.svg",
//   },
//   {
//     name: "SunSwap",
//     logo: "https://sun.io/static/media/sunswap-logo.8f8e8f8e.svg",
//   },
//   {
//     name: "Uniswap",
//     logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
//   },
//   {
//     name: "PancakeSwap",
//     logo: "https://cryptologos.cc/logos/pancakeswap-cake-logo.png",
//   },
//   {
//     name: "KUCOIN",
//     logo: "https://cryptologos.cc/logos/kucoin-token-kcs-logo.png",
//   },
// ];

const useCountUp = (end, duration = 1400) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = 16;
    const increment = end / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const StatCard = ({ label, value, data, index }) => {
  const animatedValue = useCountUp(value, 1200 + index * 150);

  const chartData = data.map((v, i) => ({
    step: i,
    value: v,
  }));

  return (
    <div className="relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4">
      {/* gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/5" />

      {/* number */}
      <p className="relative z-10 text-2xl font-medium">
        {animatedValue.toLocaleString()}
      </p>
      <p className="relative z-10 text-gray-400 text-sm mb-3">{label}</p>

      {/* chart */}
      <div className="relative z-10 h-15">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient
                id={`gradient-${index}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={2}
              fill={`url(#gradient-${index})`}
              isAnimationActive={true}
              animationDuration={1200}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const NetworkOverview = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % updates.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [updates.length]);

  return (
    <div className="text-white">
      {/* ---------------- HERO ---------------- */}
      <section className="relative pt-30 pb-10 px-6 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              'url("https://plus.unsplash.com/premium_photo-1714618942735-5f1585da8b88?w=900&auto=format&fit=crop&q=60")',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/70 via-indigo-950/60 to-black/80" />

        {/* Dark Overlay (extra contrast) */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl  mb-6">Network Overview</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Live performance, infrastructure health, and real-time activity of
            the SapherChain blockchain.
          </p>

          {/* Status */}
          <div className="flex justify-center gap-4 mt-8">
            <span className="px-4 py-1 rounded-full bg-green-500/10 text-green-400">
              ● Mainnet Live
            </span>
            <span className="px-4 py-1 rounded-full bg-yellow-500/10 text-yellow-400">
              ● Testnet Live
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16 max-w-7xl mx-auto">
            {stats.map((item, i) => (
              <StatCard
                key={i}
                label={item.label}
                value={item.value}
                data={item.data}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- NETWORK ACTIVITY ---------------- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-center text-black">
            Why Use SPH
          </h2>

          <div className="relative max-w-7xl mx-auto space-y-12">
            {/* TOP LARGE CARDS */}
            <div className="grid md:grid-cols-2 gap-8">
              {featuresTop.map((item, i) => (
                <div
                  key={i}
                  className="group relative rounded-3xl overflow-hidden border border-gray-100/50 bg-white/5 backdrop-blur-xl"
                >
                  {/* image */}
                  <div
                    className="h-52 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />

                  {/* glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 via-black/10 to-transparent" />

                  {/* content */}
                  <div className="relative p-8">
                    <h3 className="text-2xl font-semibold text-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM SMALL CARDS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuresBottom.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="relative rounded-3xl border border-white/10 bg-gray-50 backdrop-blur-xl p-8 text-center"
                  >
                    {/* icon */}
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400">
                      <Icon size={26} />
                    </div>

                    <h4 className="text-lg font-semibold text-black mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-22 px-6 bg-gray-50">
        {/* CENTERED HEADING */}
        <div className="max-w-7xl mx-auto mb-12 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mt-2">
            A Growing Ecosystem
          </h2>

          <p className="text-gray-400 mt-2 max-w-xl">
            A powerful and user-friendly suite of applications built around the
            SPH Coin ecosystem.
          </p>
        </div>

        {/* scrolling row */}
        <div className="relative">
          <div className="scroll-wrapper">
            <div className="scroll-track">
              {[...apps, ...apps].map((item, i) => (
                <div
                  key={i}
                  className="min-w-[340px] mx-6 rounded-3xl border border-white/10 bg-white backdrop-blur-xl p-8"
                >
                  {/* image */}
                  <div className="h-40 mb-6  flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-40 object-cover rounded-xl"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">{item.desc}</p>

                  <button className="text-sm text-indigo-400 hover:text-indigo-600 cursor-pointer">
                    {item.cta} →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className=" bg-white text-white flex flex-col items-center py-22 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl mb-2 text-black font-semibold">
            Update From Sapher
          </h1>
          <p className="text-lg text-gray-500">
            Latest protocol news, releases, and development updates.
          </p>
          {/* <a
            href="#"
            className="inline-block mt-8 text-indigo-400 text-lg hover:text-indigo-600 transition justify-end"
          >
            More →
          </a> */}
        </div>

        {/* Update Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
          {updates.map((update, index) => {
            const isHighlighted = index === highlightedIndex;

            return (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden transition-all duration-1000 ease-in-out ${
                  isHighlighted
                    ? "ring-1 ring-indigo-400 ring-opacity-10   z-10"
                    : "border border-gray-200"
                }`}
              >
                {/* Placeholder for Image */}
                <div className="p-5 flex items-center justify-center">
                  <img
                    src={update.image}
                    alt={update.title}
                    className="h-40 object-cover rounded-xl"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <p className="text-xs text-gray-400 mb-2 text-center">
                    {update.date}
                  </p>
                  <h3 className="text-base font-semibold mb-3 line-clamp-3 text-black">
                    {update.title}
                  </h3>
                  <a
                    href="#"
                    className="text-indigo-400 text-sm hover:text-indigo-300 transition"
                  >
                    Read More →
                  </a>
                </div>

                {/* Glow effect for highlighted card */}
                {isHighlighted && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-transparent rounded-2xl animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* <section className=" bg-gray-50 py-22 px-4 flex flex-col items-center">
        
        <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-16 tracking-wide">
          USDD Markets
        </h2>

        // {/* First Row 
        <div className="overflow-hidden w-full mb-12 max-w-6xl">
          <div className="flex animate-marquee-right gap-8">
            {[...markets.slice(0, 5), ...markets.slice(0, 5)].map(
              (market, index) => (
                <div
                  key={index}
                  className="relative bg-gray-200/60 backdrop-blur-md rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-700/70 transition-all duration-300 hover:scale-105 shadow-xl min-w-[180px]"
                >
                  {market.badge && (
                    <span className="absolute -top-3 -right-3 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      {market.badge}
                    </span>
                  )}
                  <img
                    src={market.logo}
                    alt={`${market.name} logo`}
                    className="max-w-full max-h-20 object-contain mb-4"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Second Row 
        <div className="overflow-hidden w-full max-w-6xl">
          <div className="flex animate-marquee-left gap-8">
            {[...markets.slice(5), ...markets.slice(5)].map((market, index) => (
              <div
                key={index}
                className="bg-gray-200/60 backdrop-blur-md rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-gray-700/70 transition-all duration-300 hover:scale-105 shadow-xl min-w-[180px]"
              >
                <img
                  src={market.logo}
                  alt={`${market.name} logo`}
                  className="max-w-full max-h-20 object-contain mb-4"
                />
               
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="bg-gray-50 py-22 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-black">
          Build on SapherChain
        </h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Start building decentralized applications or participate in securing
          the network.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition">
            Start Building
          </button>
          <button className="text-gray-500 px-6 py-3 rounded-full border border-gray/20 hover:bg-white/10 transition">
            Run a Validator
          </button>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

export default NetworkOverview;

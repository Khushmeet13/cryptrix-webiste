import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import FeaturesSection from "./FeaturesSection";
import NewsletterSignup from "../Community/NewsletterSignup";
import UseCaseFAQ from "./UseCaseFAQ";
import CTASection from "./CTASection";
import StatsTable from "./StatsTable";

const useCases = {
  Payments: {
    dropdownText: "Payments",
    heading: "The payment solution\nfor payment solutions",
    subheading: "Choose faster, lower-cost, next-gen rails with Polygon.",
    bgImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=1200&fit=crop",
    gradient: "from-indigo-900 via-black to-black",
  },
  Gaming: {
    dropdownText: "Gaming",
    heading: "Seamless Gaming\ninfrastructure at scale",
    subheading:
      "Build reliable, compliant, and globally accessible stablecoin solutions.",
    bgImage:
      "https://media.istockphoto.com/id/1276936264/photo/creative-background-online-casino-in-a-mans-hand-a-smartphone-with-playing-cards-roulette-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=fSKtHWeScNlRLBZdIhjWC3Nwf7xlTq9ypvpNWXzHfPE=",
    gradient: "from-blue-900 via-black to-black",
  },
  NFTs: {
    dropdownText: "NFTs",
    heading: "Tokenize real world\nassets effortlessly",
    subheading:
      "Bring traditional assets on-chain with security, compliance, and liquidity.",
    bgImage:
      "https://media.istockphoto.com/id/1309739869/photo/nft-non-fungible-token.webp?a=1&b=1&s=612x612&w=0&k=20&c=OtxDIXpXo0pHuNAmSa2Ii_WCzdftzPaFhSX7V1kcrgs=",
    gradient: "from-indigo-900/50 via-black to-black",
  },
  Govtsolutions: {
    dropdownText: "Govt solutions",
    heading: "Seamless Gaming\ninfrastructure at scale",
    subheading:
      "Build reliable, compliant, and globally accessible stablecoin solutions.",
    bgImage:
      "https://media.istockphoto.com/id/971192548/photo/solutions.webp?a=1&b=1&s=612x612&w=0&k=20&c=CnhIN_C1uyOwNoQwmi3HmitzE705FgakSBHjq7tqnNA=",
    gradient: "from-blue-900 via-black to-black",
  },
  DeFi: {
    dropdownText: "DeFi",
    heading: "Power the future\nof decentralized finance",
    subheading:
      "High-performance DeFi protocols with low fees and instant finality.",
    bgImage:
      "https://media.istockphoto.com/id/2224479864/photo/a-businessman-can-use-a-laptop-and-decentralized-finance-to-engage-in-peer-to-peer-financial.webp?a=1&b=1&s=612x612&w=0&k=20&c=bSXfvMaHC6cHkyiPpr2aHSHC7fBIweD2zyqZK90SSIg=",
    gradient: "from-cyan-600/50 via-black to-black",
  },
};

const SLUG_TO_KEY = {
  payments: "Payments",
  gaming: "Gaming",
  nfts: "NFTs",
  government: "Govtsolutions",
  defi: "DeFi",
};

const KEY_TO_SLUG = {
  Payments: "payments",
  Gaming: "gaming",
  NFTs: "nfts",
  Govtsolutions: "government",
  DeFi: "defi",
};

const UsecaseSinglePage = ({ data }) => {
   const { title, stats, industries, featuresTitle, features, tabelTitle, tableData, faq } = data;
   
  const navigate = useNavigate();
  const { slug } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  //const [selected, setSelected] = useState("Payments");

  const urlKey = SLUG_TO_KEY[slug] || "Payments";
  const [selected, setSelected] = useState(urlKey);

  useEffect(() => {
    setSelected(SLUG_TO_KEY[slug] || "Payments");
  }, [slug]);

  const current = useCases[selected];

  const dropdownItems = Object.keys(useCases).map((key) => ({
    label: useCases[key].dropdownText,
    value: key,
  }));

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
    navigate(`/use-cases/${KEY_TO_SLUG[value]}`);
  };

  return (
    <div>
      <section
        className={`relative h-[70vh] bg-gradient-to-br ${current.gradient} overflow-hidden flex items-center justify-start px-28 transition-all duration-700`}
      >
        {/* Dynamic Background Image */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-40 pointer-events-none">
          <img
            src={current.bgImage}
            alt={`${selected} background`}
            className="h-full w-full object-cover object-right transition-opacity duration-1000"
          />
        </div>

        <div className="relative z-10 max-w-5xl text-white">
          {/* Dropdown */}
          <div className="mb-12">
            <div className="relative inline-block">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-10 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition hover:cursor-pointer"
              >
                {current.dropdownText}
                <div className="bg-white/20 rounded-full p-2">
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <>
                  <div className="absolute top-full mt-1 left-0 w-46 bg-white/10 backdrop-blur-lg rounded-2xl  overflow-hidden shadow-2xl z-50">
                    <div className="">
                      {dropdownItems.map((item) => (
                        <div
                          key={item.value}
                          onClick={() => handleSelect(item.value)}
                          className={`px-6 py-3 text-left text-gray-100/70 hover:bg-white/20 transition cursor-pointer font-medium ${
                            selected === item.value
                              ? "text-white font-extrabold"
                              : ""
                          }`}
                        >
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Click outside to close */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                  />
                </>
              )}
            </div>
          </div>

          {/* Dynamic Main Heading */}
          <h1 className="text-6xl font-medium leading-tight mb-6 whitespace-pre-line transition-all duration-500">
            {current.heading}
          </h1>

          {/* Dynamic Subheading */}
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl transition-all duration-500">
            {current.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center gap-3 px-6 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full font-medium text-lg hover:shadow-xl hover:scale-105 transition hover:cursor-pointer">
              Start Building
              <ArrowRight className="w-5 h-5" />
            </button>

            <button className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full font-medium text-lg hover:bg-white/20 transition hover:cursor-pointer">
              Let's Connect
              <div className="bg-white/10 p-2 rounded-full">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white text-black">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-16">
          By the numbers
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative h-96 rounded-3xl overflow-hidden bg-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl"
              // Normal: rounded rect, Hover: hexagon
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                transition: "clip-path 0.5s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.clipPath =
                  "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.clipPath =
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
              }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-70 blur-xl group-hover:opacity-90 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
                <p className="text-xl text-black mb-4">{stat.label}</p>
                <p className="text-5xl font-bold">{stat.value}</p>
                {stat.unit && (
                  <p className="text-5xl font-bold mt-2">{stat.unit}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <FeaturesSection sections={features} title={featuresTitle}/>

      {/* Supported Integrations */}
      <section className="py-28 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* BLOCK 1 — TEXT LEFT / IMAGE RIGHT */}
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold leading-tight">
              Works With Your Existing {title} Stack
            </h3>
            <p className="text-gray-500 text-lg">
              Sapher integrates seamlessly with every major finance and payment
              rail — from UPI to crypto on-chain settlements. No migration. No
              friction. Full compliance.
            </p>
            <p className="text-gray-500 text-lg">
              Sapher integrates seamlessly with every major finance and payment
              rail — from UPI to crypto on-chain settlements. No migration. No
              friction. Full compliance. Sapher integrates seamlessly with every
              major finance and payment rail — from UPI to crypto on-chain
              settlements. No migration. No friction. Full compliance.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden h-72 w-full">
            <img
              src="https://media.istockphoto.com/id/2210815010/photo/secure-digital-payment-processing-with-hands-and-interactive-interface-for-financial.webp?a=1&b=1&s=612x612&w=0&k=20&c=CZ1yH4XS_7pvebb1htYDHIFcrl7RYUJQlV_KtbgfOX8="
              alt="payment graphic"
              className="w-full h-full object-cover object-center opacity-90"
            />
          </div>

          {/* GRID BLOCK 2 — STAGGERED LIKE POLYGON */}
          <div className="rounded-2xl bg-gradient-to-br from-gray-300/10 via-gray-400/10 to-gray-200 p-10 flex flex-col justify-between">
            <h4 className="text-2xl font-semibold mb-4">Supported Rails</h4>

            <div className="grid grid-cols-2 gap-4 text-gray-300">
              {[
                "UPI",
                "Stripe",
                "Razorpay",
                "PayPal",
                "Stablecoins",
                "On-chain",
                "Banks",
                "Wallet Apps",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/50 hover:bg-white/70 transition text-base font-medium text-black"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* BLOCK 3 — PURE IMAGE (BOTTOM LEFT) */}
          <div className="relative rounded-2xl h-96 overflow-hidden">
            {/* Background Image */}
            <img
              src="https://media.istockphoto.com/id/1334591614/photo/man-using-digital-tablet-online-connect-to-internet-banking-currency-exchange-online-shopping.webp?a=1&b=1&s=612x612&w=0&k=20&c=M3wA4nn2H6U_5J_6ImOnfiqc94nKVvCBUT1zHd6Py9s="
              alt="background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>

            {/* TEXT AT BOTTOM */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h3 className="text-white text-md font-semibold drop-shadow-lg text-end">
                Seamless Online Payments
              </h3>
            </div>
          </div>
        </div>
      </section>


      <StatsTable title={tabelTitle} data={tableData} />

      {/* Industries */}
      <section className="py-22 px-10 bg-white text-black overflow-hidden">
        <h2 className="text-start text-black tracking-[6px] text-sm mb-8 mx-2">
          PERFECT FOR
        </h2>

        <div className="relative w-full overflow-hidden">
       
          <div className="flex animate-slide">
            {[...industries, ...industries].map((item, index) => (
              <div
                key={index}
                className="min-w-[200px] mx-4 flex flex-col items-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-24 w-24 object-cover rounded-xl mb-5"
                />
                <h3 className="text-sm font-semibold text-center">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UseCaseFAQ faqs={faq}/>
      <CTASection />
    </div>
  );
};

export default UsecaseSinglePage;

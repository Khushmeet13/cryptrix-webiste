import NewsletterSignup from "@/components/Community/NewsletterSignup";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* ---------------- MOCK DATA ---------------- */

const stats = [
  { name: "Active Validators", value: 128 },
  { name: "Total Stake (M)", value: "$1.4B" },
  { name: "Avg Uptime (%)", value: "99.8%" },
  { name: "Ecosystem Users", value: "480,201" },
];

const validators = [
  {
    name: "Jonathan",
    image: "https://i.pravatar.cc/150?img=12",
    stake: 120000,
    commission: 5,
    uptime: 99.9,
  },
  {
    name: "Angel",
    image: "https://i.pravatar.cc/150?img=32",
    stake: 98000,
    commission: 7,
    uptime: 99.6,
  },
  {
    name: "Jinnie",
    image: "https://i.pravatar.cc/150?img=45",
    stake: 87000,
    commission: 4,
    uptime: 99.4,
  },
];

const pieData = [
  { name: "Delegated Stake", value: 62 },
  { name: "Self-Bonded Validators", value: 18 },
  { name: "Undelegated Stake", value: 12 },
  { name: "Inactive / Cooling", value: 8 },
];

const COLORS = ["#6366F1", "#22D3EE", "#F59E0B", "#EF4444"];

/* ---------------- PAGE ---------------- */

const ValidatorsPage = () => {
  return (
    <div className="w-full">
      {/* ---------------- HERO ---------------- */}
      <section className="h-[80vh] relative py-28 px-6 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://justlend.org/assets/bannerBg-F87wyDjE.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
          <div className="max-w-2xl">
            {/* TEXT */}
            <h1 className="text-4xl md:text-5xl mb-4 text-white">
              Network Validators
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Validators secure the network, validate transactions, and maintain
              decentralization. DAO is an ever-growing ecosystem enabling
              staking, energy rental, and DeFi participation.
            </p>

            {/* STATS CARDS - LEFT SIDE ONLY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl 
                       border border-white/10 
                       shadow-[0_0_40px_rgba(0,0,0,0.45)]
                       hover:bg-white/10 transition"
                >
                  <p className="text-gray-400 text-sm mb-2">{item.name}</p>
                  <p className="text-2xl md:text-3xl font-medium text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Validators Matter</h2>
          <p className="text-gray-400 leading-relaxed">
            Validators play a crucial role in maintaining decentralization and
            security. They validate transactions, produce blocks, and earn
            rewards for honest participation. Delegating to reliable validators
            helps strengthen the network.
          </p>
        </div>
      </section>

      <section className="px-20 py-20 bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-black">
          Active Validators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {validators.map((v, i) => (
            <div
              key={i}
              className="bg-gray-200/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl 
                   hover:scale-105 transition-transform"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-16 h-16 rounded-full object-cover 
                       border border-white/10"
                />
                <div>
                  <h3 className="text-xl font-semibold text-black">{v.name}</h3>
                  <p className="text-sm text-gray-400">Validator Node</p>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-2 text-gray-500">
                <p>
                  <span className="text-gray-400">Stake:</span>{" "}
                  {v.stake.toLocaleString()} USDD
                </p>
                <p>
                  <span className="text-gray-400">Commission:</span>{" "}
                  {v.commission}%
                </p>
                <p>
                  <span className="text-gray-400">Uptime:</span> {v.uptime}%
                </p>
              </div>

              {/* CTA */}
              <button
                className="mt-6 w-full py-3 rounded-full text-white 
                           bg-indigo-600 hover:bg-indigo-500 transition"
              >
                View Validator
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              label: "Network Status",
              value: "Healthy",
              color: "text-green-400",
            },
            { label: "Block Height", value: "18,492,201" },
            { label: "Avg Block Time", value: "3.1s" },
            { label: "Slashed Validators", value: "2", color: "text-red-400" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-l from-gray-100 to-transparent border-r border-gray/10 p-6 backdrop-blur-xl"
            >
              <p className="text-gray-400 text-sm mb-2">{item.label}</p>
              <p
                className={`text-2xl font-medium ${item.color || "text-black"}`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT STATS */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Delegation Insights</h2>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Total Delegated", value: "$920M" },
                { label: "Avg APY", value: "8.6%" },
                { label: "Min Delegation", value: "10 USDD" },
                { label: "Reward Cycle", value: "Daily" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gray-100">
                  <p className="text-gray-500 text-sm">{item.label}</p>
                  <p className="text-xl font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CHART */}
          <div
            className="
    
  "
          >
            <h3 className="text-lg font-medium text-white mb-6">
              Stake Distribution
            </h3>

            <div className="relative">
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={4}
                    stroke="transparent"
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>

                  <Tooltip
                    contentStyle={{
                      background: "rgba(15,15,15,0.85)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                      color: "#fff",
                    }}
                    itemStyle={{ color: "#fff" }}
                    cursor={{ fill: "transparent" }}
                  />
                </PieChart>
              </ResponsiveContainer>

              {/* Center Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <p className="text-3xl font-semibold text-black">72%</p>
                <p className="text-sm text-gray-400">Delegated</p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <section className="py-22 px-6 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            How Delegation Works
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              "Choose Validator",
              "Delegate Stake",
              "Earn Rewards",
              "Withdraw Anytime",
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 text-white mx-auto rounded-full bg-indigo-600 flex items-center justify-center mb-6 text-xl font-bold">
                  {i + 1}
                </div>
                <p className="font-medium text-black">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-24 text-center px-6 bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Become Part of the Network
        </h2>
        <p className="text-gray-400 mb-10 text-sm  sm:text-base">
          Delegate your stake or run a validator to earn rewards.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition text-white">
            Delegate Stake
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-600 hover:border-white transition">
            Become a Validator
          </button>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

export default ValidatorsPage;

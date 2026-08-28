import React from "react";
import { Zap, Shield, Layers, Users, Lock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Process thousands of transactions per second with near-instant confirmation times.",
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    desc: "Advanced cryptographic protocols ensure your assets are always protected.",
  },
  {
    icon: Layers,
    title: "Scalable Infrastructure",
    desc: "Built to handle massive growth without compromising performance or speed.",
  },
  {
    icon: Users,
    title: "Community Governed",
    desc: "Decentralized governance gives power back to the community members.",
  },
   {
    icon: Lock,
    title: "Privacy First",
    desc: "Optional privacy features protect your transaction data when needed.",
  },
  {
    icon: TrendingUp,
    title: "Staking Rewards",
    desc: "Earn passive income by staking your CRX tokens with competitive APY rates.",
  },
];

function WhyChooseCRX() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Features
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Why Choose{" "} CRX ?
          </h2>
          <p className=" text-gray-500 max-w-3xl mx-auto">
            Built with cutting-edge technology to deliver the best blockchain experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto justify-items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-indigo-300"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-md flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseCRX;
import React from "react";
import { ArrowRightLeft, CircleCheckBig, Coins, Wallet } from "lucide-react";
import { Button } from "../ui/button";

const steps = [
  {
    number: "01",
    title: "Create a Wallet",
    desc: "Download MetaMask or any compatible wallet and set up your account securely.",
    icon: Wallet,
  },
  {
    number: "02",
    title: "Get ETH",
    desc: "Purchase Ethereum from an exchange and transfer it to your wallet.",
    icon: Coins,
  },
  {
    number: "03",
    title: "Swap for SPH",
    desc: "Connect to Uniswap or our official swap and exchange ETH for SPH tokens.",
    icon: ArrowRightLeft,
  },
  {
    number: "04",
    title: "Hold & Earn",
    desc: "Keep your SPH in your wallet or stake them to earn passive rewards.",
    icon: CircleCheckBig,
  },
];

function HowToBuy() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Get Started
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            How to Buy SPH
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Get your SPH tokens in just a few simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto justify-items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-indigo-300"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600  rounded-md flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-white" />
                </div>

                {/* Title + Description */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 ">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Step Number (Right side) */}
              <span className="absolute top-2 right-6 text-4xl font-semibold text-gray-200">
                {step.number}
              </span>
            </div>
          ))}
        </div>

        {/* Final CTA Button */}
        <div className="text-center">
          <Button className="group px-8 py-6 bg-black relative overflow-hidden text-white text-sm rounded-full shadow-2xl hover:cursor-pointer">
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-700 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-full"></span>

            <span className="relative z-10">Buy SPH Now</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;

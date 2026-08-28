import React from "react";

const tokenDetails = [
  { label: "Token Name", value: "CRX Coin" },
  { label: "Token Symbol", value: "CRX" },
  { label: "Total Supply", value: "1,000,000,000" },
  { label: "Network", value: "Ethereum (ERC-20)" },
  { label: "Decimals", value: "18" },
];

const allocations = [
  { name: "Public Sale", percent: 40, color: "from-cyan-400 to-cyan-500" },
  { name: "Liquidity Pool", percent: 25, color: "from-blue-400 to-blue-600" },
  { name: "Team & Development", percent: 15, color: "from-teal-400 to-teal-500" },
  { name: "Marketing", percent: 10, color: "from-indigo-400 to-indigo-500" },
  { name: "Reserve", percent: 10, color: "from-gray-400 to-gray-500" },
];

function Tokenomics() {
  return (
    <section className="py-22 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Tokenomics
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Token{" "} Distribution
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Transparent and fair distribution designed for long-term sustainability
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Token Details */}
          <div className=" rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-medium text-gray-500 mb-5">Token Details</h3>
            <div className="space-y-5">
              {tokenDetails.map((item, i) => (
                <div key={i} className="flex justify-between items-center pb-3 border-b border-gray-300 last:border-0">
                  <span className="text-gray-600 font-medium text-sm">{item.label}</span>
                  <span className="text-sm font-medium text-gray-400">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Allocation with Progress Bars */}
          <div className="bg-gray-100/50 rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-medium text-gray-500 mb-5">Allocation</h3>
            <div className="space-y-4">
              {allocations.map((alloc, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium text-sm">{alloc.name}</span>
                    <span className="text-sm font-medium text-gray-400">{alloc.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden shadow-inner">
                    <div
                      className={`h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${alloc.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
// src/components/TradingOptions.tsx
import { BarChart3, Droplet, Clock, Link as LinkIcon, Shuffle } from "lucide-react";

const options = [
  {
    title: "Spot Trading",
    description: "Instant swaps at current market prices with minimal fees.",
    icon: BarChart3,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Liquidity Pools",
    description: "Provide liquidity and earn trading fees from every swap.",
    icon: Droplet,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Limit Orders",
    description: "Set your desired price and let the order execute automatically.",
    icon: Clock,
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Stable Swaps",
    description: "Optimized swaps between stablecoins with minimal slippage.",
    icon: LinkIcon,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Cross-Chain Swaps",
    description: "Swap tokens across different blockchains seamlessly.",
    icon: Shuffle,
    color: "from-amber-500 to-orange-600",
  },
];

export default function TradingOptions() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Trading Options
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Multiple ways to trade — choose the one that fits your strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {options.map((option, index) => {
            const Icon = option.icon;

            return (
              <div
                key={option.title}
                className="group relative rounded-3xl p-6 md:p-8 bg-gradient-to-br from-background to-muted/50 border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{option.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
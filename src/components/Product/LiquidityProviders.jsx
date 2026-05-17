// src/components/LiquidityProviders.tsx
import { Droplet, Coins, ArrowRight } from "lucide-react";

export default function LiquidityProviders() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Liquidity Providers
          </h2>
          <p className="text-xl text-primary font-medium">Earn with Cryptix</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-background to-muted/50 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Droplet className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Provide Liquidity to Pools</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Deposit token pairs into liquidity pools and help enable seamless trading on Cryptix.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-background to-muted/50 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Coins className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Earn Trading Fees + Cryptix Rewards</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Receive a share of every trade that happens in your pool + additional Cryptix token incentives.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-background to-muted/50 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Transparent Rewards Distribution</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All rewards and fees are distributed automatically and can be verified on-chain in real time.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <a
            href="#add-liquidity"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group"
          >
            Add Liquidity
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#pools"
            className="inline-flex items-center px-8 py-4 bg-background border-2 border-primary/30 text-primary font-semibold rounded-2xl hover:bg-primary/10 transition-colors duration-300"
          >
            View Pools
          </a>
        </div>
      </div>
    </section>
  );
}
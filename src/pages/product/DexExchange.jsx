import Faq from '@/components/Common/Faq'
import DexIntro from '@/components/Product/DexIntro'
import DexKeyFeatures from '@/components/Product/DexKeyFeatures'
import FeesAndEconomics from '@/components/Product/FeesAndEconomics'
import HowTradingWorks from '@/components/Product/HowTradingWorks'
import LiquidityProviders from '@/components/Product/LiquidityProviders'
import LiveAnalytics from '@/components/Product/LiveAnalytics'
import SecurityAndTrust from '@/components/Product/SecurityAndTrust'
import TradingOptions from '@/components/Product/TradingOptions'
import WhyCryptix from '@/components/Product/WhyCryptix'
import React from 'react'

const DexExchange = () => {
    return (
        <div>
            <DexIntro />

            <section className="relative overflow-hidden py-24 bg-[#01021f]">
                {/* Background Glow */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div className="h-[32rem] w-[32rem] rounded-full bg-indigo-500/20 blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6">
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                                    About Cryptix DEX
                                </span>
                            </div>

                            <h1 className="text-2xl md:text-4xl font-semibold text-white leading-tight mb-6">
                                What is <span className="text-blue-400">Cryptix DEX</span>?
                            </h1>

                            <p className="text-lg text-gray-400 max-w-xl">
                                Cryptix DEX is a decentralized exchange that allows users to trade
                                digital assets directly from their wallets without relying on
                                intermediaries. Your funds always remain under your control.
                            </p>
                        </div>

                        {/* Right Card */}
                        <div className="relative">
                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-4">
                                    Why Cryptix DEX?
                                </h3>

                                <ul className="space-y-4 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                                        Non-custodial trading — you own your assets
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                                        No intermediaries or centralized control
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                                        Fast, secure, and transparent transactions
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <DexKeyFeatures />
            <TradingOptions />
            <HowTradingWorks />
            <LiquidityProviders />
            <FeesAndEconomics />
            <WhyCryptix />
            <SecurityAndTrust />
            <LiveAnalytics />
            <Faq />
        </div>
    )
}

export default DexExchange

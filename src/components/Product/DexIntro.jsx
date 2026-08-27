import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

const particles = [...Array(30)].map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 8 + Math.random() * 10,
}));

const stats = [
    { id: 1, name: 'Creators on the platform', value: '8,000+' },
    { id: 2, name: 'Flat platform fee', value: '3%' },
]

const DexIntro = () => {
    const particleData = useMemo(() => particles, []);
    const navigate = useNavigate();

    return (
        <div className="w-full h-[80vh] sm:h-[70vh] lg:h-[80vh] bg-indigo-950 text-white">
            <section className="relative h-[80vh] sm:h-[70vh] lg:h-[80vh] bg-gradient-to-br from-black via-indigo-950/40 to-black overflow-hidden flex flex-col px-30 pt-10">
                {/* Animated Background Particles & Glow */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-60">
                        {particleData.map((p, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-indigo-500 rounded-full animate-float"
                                style={{
                                    left: `${p.left}%`,
                                    top: `${p.top}%`,
                                    animationDelay: `${p.delay}s`,
                                    animationDuration: `${p.duration}s`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Large glowing orbs */}
                    <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-32 left-32 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-600/10 via-transparent to-indigo-600/10 rounded-full blur-3xl" />
                </div>

                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />

                <div className="relative z-10 container mx-auto px-2 sm:px-6 mt-12 sm:mt-22 flex flex-col sm:flex-row items-center justify-between">
                    {/* LEFT SIDE CONTENT */}
                    <div className="max-w-2xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-indigo-900/30 border border-indigo-600/50 backdrop-blur-md mb-2 shadow-lg shadow-indigo-500/20">
                            <Sparkles className="w-2 h-2 sm:w-4 sm:h-4 text-indigo-400" />
                            <span className="text-indigo-300 text-xs">
                                The Future of Digital Finance
                            </span>
                        </div>

                        <h1 className="text-xl sm:text-3xl lg:text-5xl font-medium">Decentralized Trading. Fully On-Chain.</h1>

                        <p className="max-w-5xl lg:max-w-3xl mt-4 text-xs sm:text-lg text-indigo-200/80 mb-2 leading-relaxed font-light">
                            Trade crypto assets securely without intermediaries built for speed, security, and transparency.
                        </p>


                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row justify-start gap-4">
                            <button
                                type="button"
                                className={`relative px-6 py-3 bg-white text-black text-sm rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:cursor-pointer hover:shadow-indigo-500/40 transform hover:scale-105`}
                            >
                                {/* Text + Icon */}
                                <span className="relative z-10 flex items-center gap-1">
                                    Launch DEX
                                    <ArrowUpRight className="w-4 h-4" />
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate("/all-wallets")}
                                className={`relative px-6 py-3 bg-transparent border border-white text-white text-sm rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:cursor-pointer hover:shadow-indigo-500/40 transform hover:scale-105`}
                            >
                                {/* Text + Icon */}
                                <span className="relative z-10 flex items-center gap-1">
                                    View Docs
                                    {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
                                </span>
                            </button>
                        </div>

                        <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                            {stats.map((stat) => (
                                <div key={stat.id} className="flex flex-col gap-y-3 border-l border-blue-400 pl-6">
                                    <dt className="text-sm/6 text-gray-400">{stat.name}</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/*right side */}
                    <div className=" relative flex items-center mt-5 sm:mt-0 justify-start xl:mr-50">
                        <div className="relative">
                            {/* Ripple Circles */}
                            {[0, 1, 2, 3, 4].map((ring) => (
                                <div
                                    key={ring}
                                    className="absolute inset-0 rounded-full border border-indigo-400/30 animate-ripple"
                                    style={{
                                        width: `${300 + ring * 100}px`,
                                        height: `${300 + ring * 100}px`,
                                        animationDelay: `${ring * 0.6}s`,
                                        boxShadow: "0 0 60px rgba(34, 211, 238, 0.3)",
                                    }}
                                />
                            ))}

                            {/* Center Circle with "S" */}
                            <div className="relative w-20 h-20 sm:w-40 sm:h-40 lg:w-64 lg:h-64  border-blue-500/50 bg-gradient-to-br from-[#1a0033] to-[#0f0026] rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/60">
                                <img
                                    src="/cryptrix-favicon.png" 
                                    alt="Cryptrix Logo"
                                    className="w-20 h-20 md:w-38 md:h-38 object-contain"
                                />
                            </div>

                            {/* Small floating dots around */}
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-indigo-400 rounded-full animate-float-slow"
                                    style={{
                                        top: `${40 + Math.sin(i) * 40}%`,
                                        left: `${20 + Math.cos(i) * 40}%`,
                                        animationDelay: `${i * 0.8}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DexIntro;

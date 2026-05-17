// src/components/HowTradingWorks.tsx
import { motion } from "framer-motion";
import { ArrowRight, Wallet, Coins, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Connect Wallet",
    description: "Connect MetaMask, WalletConnect or any supported wallet.",
    icon: Wallet,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    number: 2,
    title: "Select Token Pair",
    description: "Choose the tokens you want to swap instantly.",
    icon: Coins,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    number: 3,
    title: "Set Amount & Slippage",
    description: "Adjust slippage for best price execution.",
    icon: Settings,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    number: 4,
    title: "Confirm Swap",
    description: "Approve and confirm the swap directly from your wallet.",
    icon: CheckCircle,
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function HowTradingWorks() {
  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            How Trading Works on <span className="text-primary">Cryptix</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple, secure 4-step process to trade crypto on Cryptix DEX.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  <div className="group h-full rounded-3xl p-6 md:p-8 bg-background/60 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-background border border-white/20 flex items-center justify-center font-bold shadow">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-8 -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-muted-foreground/40" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://pixelplex.io/wp-content/uploads/2023/10/how-can-you-create-a-DEX-in-11-steps.jpg"
              alt="Cryptix DEX trading flow"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white text-base font-medium">
                Visual overview of the Cryptix DEX trading flow
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

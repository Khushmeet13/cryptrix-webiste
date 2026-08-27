import { Check, X } from "lucide-react";

const comparison = [
  { feature: "Custody", cryptix: "User-owned", cex: "Exchange-owned", cryptixGood: true },
  { feature: "KYC Required", cryptix: "No", cex: "Yes", cryptixGood: true },
  { feature: "Transparency", cryptix: "On-chain", cex: "Limited", cryptixGood: true },
  { feature: "Withdrawal Control", cryptix: "Always available", cex: "Can be restricted", cryptixGood: true },
  { feature: "Censorship Resistance", cryptix: "Yes", cex: "No", cryptixGood: true },
  { feature: "Listing Fees", cryptix: "None", cex: "Often required", cryptixGood: true },
];

export default function WhyCryptix() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-[#01021f]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Why Cryptix
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Cryptix DEX vs. <span className="text-blue-400">Centralized Exchanges</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            No accounts, no gatekeepers, no single point of failure — you stay in control
            of your funds at every step.
          </p>
        </div>

        {/* Comparison card */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl">
          {/* Column headers */}
          <div className="grid grid-cols-3 border-b border-white/10">
            <div className="p-5 md:p-6" />
            <div className="p-5 md:p-6 text-center border-l border-white/10 bg-indigo-500/10">
              <span className="text-sm md:text-base font-bold text-blue-400">Cryptix DEX</span>
            </div>
            <div className="p-5 md:p-6 text-center border-l border-white/10">
              <span className="text-sm md:text-base font-medium text-gray-400">
                Centralized Exchange
              </span>
            </div>
          </div>

          {/* Rows */}
          {comparison.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 transition-colors duration-200 hover:bg-white/[0.03] ${
                i !== comparison.length - 1 ? "border-b border-white/[0.06]" : ""
              }`}
            >
              <div className="p-5 md:p-6 flex items-center">
                <span className="text-sm md:text-[15px] font-medium text-gray-300">
                  {row.feature}
                </span>
              </div>
              <div className="p-5 md:p-6 flex items-center justify-center gap-2 border-l border-white/[0.06] bg-indigo-500/[0.03]">
                <Check size={16} className="text-emerald-400 shrink-0" />
                <span className="text-sm md:text-[15px] font-semibold text-white text-center">
                  {row.cryptix}
                </span>
              </div>
              <div className="p-5 md:p-6 flex items-center justify-center gap-2 border-l border-white/[0.06]">
                <X size={16} className="text-gray-600 shrink-0" />
                <span className="text-sm md:text-[15px] text-gray-500 text-center">
                  {row.cex}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

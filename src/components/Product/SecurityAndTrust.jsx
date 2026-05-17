// src/components/SecurityAndTrust.tsx
import { ShieldCheck, Code, Lock, BugPlay } from "lucide-react";

const trustFeatures = [
  { icon: ShieldCheck, title: "Audited Smart Contracts", color: "from-emerald-500 to-teal-600" },
  { icon: BugPlay, title: "Active Bug Bounty Program", color: "from-amber-500 to-orange-600" },
  { icon: Code, title: "Open-Source & Verifiable", color: "from-violet-500 to-purple-600" },
  { icon: Lock, title: "Fully On-Chain Execution", color: "from-blue-500 to-indigo-600" },
];

export default function SecurityAndTrust() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Security & Trust
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {trustFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="relative rounded-3xl p-8 bg-gradient-to-br from-background to-muted/50 border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl`} />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
            );
          })}
        </div>

        {/* Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {["Audited", "Non-Custodial", "Transparent"].map((badge) => (
            <div
              key={badge}
              className="px-6 py-3 bg-background/70 border border-primary/30 rounded-full text-primary font-medium backdrop-blur-sm shadow-sm"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
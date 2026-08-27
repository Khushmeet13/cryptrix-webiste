import React from "react";
import {
  CheckCircle2,
  Loader2,
  Circle,
  Network,
  ShieldCheck,
  Repeat,
  Wallet,
  Users,
  Coins,
  Smartphone,
  Vote,
  Building2,
  Layers,
} from "lucide-react";

const columns = [
  {
    key: "done",
    label: "Shipped",
    accent: "#34D399",
    Icon: CheckCircle2,
    items: [
      { title: "Cryptrix Founded", period: "2021", icon: Network },
      { title: "Public Testnet", period: "2022", icon: Network },
      { title: "Mainnet Launch", period: "2023", icon: Network },
      { title: "First Security Audit", period: "2023", icon: ShieldCheck },
      { title: "Cryptrix DEX", period: "2024", icon: Repeat },
      { title: "Multi-Chain Wallet Suite", period: "2024", icon: Wallet },
      { title: "1M Transactions Milestone", period: "2024", icon: Coins },
      { title: "Validator Incentive Program", period: "2025", icon: Coins },
      { title: "Ecosystem Grants Program", period: "2025", icon: Users },
    ],
  },
  {
    key: "current",
    label: "In Progress",
    accent: "#60A5FA",
    Icon: Loader2,
    items: [
      { title: "Cross-Chain Interoperability", period: "2026", icon: Network },
      { title: "Extended Wallet Support", period: "2026", icon: Wallet },
      { title: "Second Security Audit Cycle", period: "2026", icon: ShieldCheck },
    ],
  },
  {
    key: "upcoming",
    label: "Upcoming",
    accent: "#A78BFA",
    Icon: Circle,
    items: [
      { title: "Native Mobile Wallet", period: "Late 2026", icon: Smartphone },
      { title: "On-Chain Governance v2", period: "2027", icon: Vote },
      { title: "Institutional Custody", period: "2027", icon: Building2 },
      { title: "Layer 2 Scaling", period: "2027", icon: Layers },
    ],
  },
];

const AllInitiatives = () => {
  return (
    <section className="relative py-20 md:py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Full List
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Every initiative, at a glance
          </h2>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            The complete breakdown behind the timeline above.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((col) => (
            <div key={col.key}>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <col.Icon size={14} style={{ color: col.accent }} className={col.key === "current" ? "animate-spin" : ""} />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  {col.label}
                </span>
                <span
                  className="ml-auto text-[11px] font-mono px-2 py-0.5 rounded-full"
                  style={{ color: col.accent, background: col.accent + "18" }}
                >
                  {col.items.length}
                </span>
              </div>

              <ul className="space-y-0.5">
                {col.items.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <li
                      key={item.title}
                      className="group flex items-center gap-3 py-2.5 px-2 -mx-2 rounded-lg transition-colors duration-200 hover:bg-white/[0.03]"
                    >
                      <ItemIcon size={14} className="text-gray-600 group-hover:text-gray-400 transition-colors shrink-0" />
                      <span className="text-sm text-gray-300 flex-1">{item.title}</span>
                      <span className="text-[11px] font-mono text-gray-600 shrink-0">{item.period}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllInitiatives;

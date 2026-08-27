import { ArrowRight, BookOpen, ScrollText, Compass, Wallet } from "lucide-react";

const resources = [
  {
    title: "Documentation",
    description:
      "Official Cryptrix documentation and API references — everything a developer needs to start building.",
    link: "/docs",
    icon: BookOpen,
    accent: "#60A5FA",
    featured: true,
  },
  {
    title: "Wallets",
    description: "Explore Cryptrix wallets to manage and secure your assets.",
    link: "/wallets",
    icon: Wallet,
    accent: "#06b6d4",
  },
  {
    title: "Use Cases",
    description: "Real-world applications built on Cryptrix, from DeFi to gaming.",
    link: "/use-cases",
    icon: Compass,
    accent: "#A78BFA",
  },
  {
    title: "Community Rules",
    description: "Guidelines for participation across Cryptrix community channels.",
    link: "/rules",
    icon: ScrollText,
    accent: "#34D399",
  },
];

export default function ContinueJourney() {
  const [featured, ...rest] = resources;

  return (
    <section className="relative py-20 md:py-24 px-6 bg-[#01021f] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Keep Going
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Continue Your Journey
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-lg mx-auto">
            Ready to dive deeper? Explore these essential resources for
            Cryptrix developers.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-5 md:h-[380px]">
          {/* Featured tile */}
          <ResourceTile item={featured} className="md:col-span-2 md:row-span-2" large />

          {/* Secondary tiles */}
          <div className="grid gap-5 md:grid-rows-2">
            {rest.slice(0, 2).map((item) => (
              <ResourceTile key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* Third tile — full width row below */}
        <div className="mt-5">
          <ResourceTile item={rest[2]} wide />
        </div>
      </div>
    </section>
  );
}

function ResourceTile({ item, className = "", large = false, wide = false }) {
  const Icon = item.icon;
  return (
    <a
      href={item.link}
      className={`group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-7 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 flex flex-col ${
        wide ? "md:flex-row md:items-center md:justify-between" : "justify-between"
      } ${className}`}
    >
      <div className={wide ? "flex items-center gap-4" : ""}>
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: item.accent + "18", border: `1px solid ${item.accent}35` }}
        >
          <Icon size={20} style={{ color: item.accent }} strokeWidth={1.75} />
        </div>

        <div className={wide ? "" : "mt-5"}>
          <h3 className={`font-bold text-white ${large ? "text-2xl" : "text-lg"}`}>
            {item.title}
          </h3>
          <p className={`text-gray-400 mt-1.5 ${large ? "text-base max-w-md" : "text-sm"}`}>
            {item.description}
          </p>
        </div>
      </div>

      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-300 group-hover:text-white group-hover:gap-2.5 transition-all duration-300 ${wide ? "shrink-0" : "mt-6"}`}>
        View all
        <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </a>
  );
}

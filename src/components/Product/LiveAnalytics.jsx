// src/components/LiveAnalytics.tsx

export default function LiveAnalytics() {
  // In real app → fetch from API / subgraph
  const mockStats = [
    { label: "Total Value Locked (TVL)", value: "$18.4M" },
    { label: "24h Trading Volume", value: "$3.2M" },
    { label: "Total Transactions", value: "147k+" },
    { label: "Active Liquidity Pools", value: "42" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Live Analytics
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real-time metrics — everything is verifiable on-chain
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {mockStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl p-8 bg-gradient-to-br from-background to-muted/60 border border-white/10 backdrop-blur-xl shadow-xl text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-3">{stat.value}</p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#analytics"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            View detailed analytics dashboard →
          </a>
        </div>
      </div>
    </section>
  );
}
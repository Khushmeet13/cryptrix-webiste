// src/components/FeesAndEconomics.tsx

export default function FeesAndEconomics() {
  const feeStructure = [
    { type: "Swap Fee", value: "0.30%", description: "Total fee per trade" },
    { type: "LP Share", value: "0.25%", description: "Goes to liquidity providers" },
    { type: "Protocol Fee", value: "0.05%", description: "Supports protocol development & treasury" },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Fees & Economics
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear, low, and fully transparent — designed to benefit traders and liquidity providers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Simple Table */}
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-background to-muted/30 backdrop-blur-sm">
            <div className="grid grid-cols-3 bg-muted/40 p-6 text-sm font-medium text-muted-foreground">
              <div>Fee Type</div>
              <div>Percentage</div>
              <div>Recipient</div>
            </div>

            {feeStructure.map((item, i) => (
              <div
                key={item.type}
                className={`grid grid-cols-3 p-6 border-t border-white/5 ${
                  i % 2 === 0 ? "bg-black/5" : ""
                }`}
              >
                <div className="font-medium">{item.type}</div>
                <div className="text-primary font-bold text-lg">{item.value}</div>
                <div className="text-muted-foreground">{item.description}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-sm text-muted-foreground">
            All fees are applied transparently on-chain • No hidden charges • No surprises
          </div>
        </div>
      </div>
    </section>
  );
}
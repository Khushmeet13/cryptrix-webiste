// src/components/WhyCryptix.tsx

export default function WhyCryptix() {
  const comparison = [
    { feature: "Custody", cryptix: "User-owned", cex: "Exchange-owned" },
    { feature: "KYC", cryptix: "✗ No", cex: "✓ Yes" },
    { feature: "Transparency", cryptix: "On-chain", cex: "Limited" },
    { feature: "Withdrawal Control", cryptix: "Always", cex: "Restricted" },
    { feature: "Censorship Resistance", cryptix: "Yes", cex: "No" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Why Cryptix DEX?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/40">
                <th className="p-6 text-lg font-semibold">Feature</th>
                <th className="p-6 text-center text-primary text-lg font-bold">Cryptix DEX</th>
                <th className="p-6 text-center text-muted-foreground text-lg">Centralized Exchange</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.feature} className={`${i % 2 === 0 ? "bg-black/3" : ""} border-t border-white/5`}>
                  <td className="p-6 font-medium">{row.feature}</td>
                  <td className="p-6 text-center text-xl font-bold text-primary">{row.cryptix}</td>
                  <td className="p-6 text-center text-xl text-muted-foreground">{row.cex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
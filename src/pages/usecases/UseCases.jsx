import CTASection from "@/components/UseCases/CTASection";
import FlowDiagram from "@/components/UseCases/FlowDiagram";
import UseCaseFAQ from "@/components/UseCases/UseCaseFAQ";
import UseCaseHighlights from "@/components/UseCases/UseCaseHighlights";
import UseCasesGrid from "@/components/UseCases/UseCasesGrid";
import React from "react";

const faqs = [
  {
    q: "Does identity run on-chain or off-chain?",
    a: "Identity itself is privacy-preserving and off-chain, but verification proofs can be anchored on-chain.",
  },
  {
    q: "How fast are checks?",
    a: "Most identity checks finalize under 40ms using Sapher’s decentralized scoring engine.",
  },
  {
    q: "Is user data stored securely?",
    a: "Absolutely. Sapher ensures all user data is encrypted, privacy-preserving, and stored off-chain, minimizing risk.",
  },
  {
    q: "Does Sapher support multi-factor verification?",
    a: "Yes, Sapher supports multiple verification layers, including decentralized credentials, biometrics, and third-party attestations.",
  },
  {
    q: "Can organizations customize verification flows?",
    a: "Yes, organizations can configure workflows, scoring rules, and thresholds to meet their compliance and security requirements.",
  },
  {
    q: "Is Sapher suitable for gaming and payments?",
    a: "Yes, Sapher’s trust flows are optimized for fast, secure, and frictionless identity verification in gaming, payments, and other real-time applications.",
  },
];

const UseCases = () => {
  return (
    <div className="w-full min-h-screen text-white">
      {/* HERO SECTION */}
      <section
        className="relative h-[40vh] flex flex-col items-center justify-center text-center px-6
                          bg-gradient-to-br from-indigo-950 via-indigo-900 to-black"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Trust Infrastructure for Every Industry
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
          Sapher powers identity, security, and automation for ecosystems.
        </p>
      </section>
      <UseCasesGrid />
      <UseCaseHighlights />
      <FlowDiagram />
      <UseCaseFAQ faqs={faqs}/>
      <CTASection />
    </div>
  );
};

export default UseCases;

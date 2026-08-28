import React, { useEffect, useState } from "react";
import {
  SquarePen,
  MessagesSquare,
  Vote,
  X,
  CircleCheckBig,
} from "lucide-react";

const steps = [
  {
    title: "Draft",
    icon: <SquarePen size={20} />,
    accent: "#60A5FA",
    description:
      "Proposals are created and initial drafts are prepared by community members.",
  },
  {
    title: "Discussion",
    icon: <MessagesSquare size={20} />,
    accent: "#34D399",
    description:
      "Open forum discussions where the community provides feedback and suggestions.",
  },
  {
    title: "Voting",
    icon: <Vote size={20} />,
    accent: "#A78BFA",
    description:
      "CRX holders vote using their governance tokens to approve or reject.",
  },
  {
    title: "Accepted",
    icon: <CircleCheckBig size={20} />,
    accent: "#34D399",
    description: "Approved proposals move to the implementation phase.",
  },
  {
    title: "Rejected",
    icon: <X size={20} />,
    accent: "#F87171",
    description: "Rejected proposals can be revised and resubmitted.",
  },
];

const lifecycleStats = [
  { label: "Total Proposals", value: "7" },
  { label: "Passed", value: "3" },
  { label: "Active Now", value: "2" },
];

const ProposalLifecycle = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#01021f] py-20 md:py-24 border-t border-white/10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Lifecycle
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
            Proposal Lifecycle
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Track the journey of every proposal from inception to
            implementation.
          </p>
        </div>

        {/* Step cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            return (
              <div
                key={step.title}
                className="relative rounded-2xl border p-6 transition-all duration-500"
                style={{
                  borderColor: isActive ? step.accent + "50" : "rgba(255,255,255,0.1)",
                  background: isActive ? step.accent + "0a" : "rgba(255,255,255,0.02)",
                  transform: isActive ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isActive ? `0 20px 50px -20px ${step.accent}44` : "none",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: step.accent + "18", border: `1px solid ${step.accent}35`, color: step.accent }}
                >
                  {step.icon}
                </div>

                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{step.description}</p>

                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: isActive ? step.accent : "rgba(255,255,255,0.2)" }}
                  />
                  <span
                    className="text-[11px] font-semibold uppercase tracking-wider"
                    style={{ color: isActive ? step.accent : "#6b7280" }}
                  >
                    {isActive ? "Active" : index < currentStep ? "Completed" : "Pending"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto border-t border-white/10 pt-10">
          {lifecycleStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-white">{stat.value}</div>
              <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProposalLifecycle;

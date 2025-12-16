import React, { useEffect, useState, useRef } from "react";
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
    icon: <SquarePen />,
    color: "from-blue-500 to-blue-600",
    description:
      "Proposals are created and initial drafts are prepared by community members",
  },
  {
    title: "Discussion",
    icon: <MessagesSquare />,
    color: "from-green-500 to-green-600",
    description:
      "Open forum discussions where community provides feedback and suggestions",
  },
  {
    title: "Voting",
    icon: <Vote />,
    color: "from-purple-500 to-purple-600",
    description:
      "Community members vote using their governance tokens to approve or reject",
  },
  {
    title: "Accepted",
    icon: <CircleCheckBig />,
    color: "from-emerald-500 to-emerald-600",
    description: "Approved proposals move to implementation phase",
  },
  {
    title: "Rejected",
    icon: <X />,
    color: "from-red-500 to-red-600",
    description: "Rejected proposals can be revised and resubmitted",
  },
];

const ProposalLifecycle = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const timelineRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate timeline on scroll
          const timeline = timelineRef.current;
          if (timeline) {
            timeline.style.opacity = "1";
            timeline.style.transform = "translateY(0)";
          }
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div>
      {/* proposal lifecyle */}
      <section className="relative bg-white py-22 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
              Proposal Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
              Track the journey of every proposal from inception to
              implementation
            </p>
          </div>

          {/* Timeline Container */}
          <div
            ref={timelineRef}
            className="opacity-0 transform translate-y-20 transition-all duration-1000 ease-out"
          >
            {/* Main Timeline
            <div className="relative flex items-center justify-center mb-16">
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <div className="w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            </div> */}

            <div className="grid lg:grid-cols-5 gap-8 relative">
              {/* Left decorative elements */}
              <div className="hidden lg:block absolute -left-20 top-0 h-full w-16 bg-gradient-to-b from-gray-200/30 to-transparent"></div>
              <div className="hidden lg:block absolute -right-20 top-0 h-full w-16 bg-gradient-to-b from-gray-200/30 to-transparent"></div>

              {/* Step Cards */}
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`
                  relative group transition-all duration-700 ease-out transform hover:scale-105
                  ${
                    index === currentStep
                      ? "scale-105 ring-2 ring-indigo-500/30"
                      : ""
                  }
                `}
                >
                  {/* Card Background */}
                  <div
                    className={`
                  absolute inset-0 rounded-2xl -z-10 blur-xl opacity-30
                  bg-gradient-to-br 
                  transform group-hover:scale-110 transition-transform duration-500
                `}
                  ></div>

                  {/* Card */}
                  <div
                    className={`
                  relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/20
                  shadow-2xl hover:shadow-blue-500/20 transition-all duration-500
                  ${
                    index === currentStep
                      ? "bg-white/20 border-blue-500/30"
                      : ""
                  }
                `}
                  >
                    {/* Icon */}
                    <div
                      className={`
                    w-12 h-12 rounded-full flex items-center justify-center mb-4
                    bg-gradient-to-br shadow-lg
                    transform group-hover:scale-110 transition-transform duration-300
                    ${
                      index === currentStep
                        ? "scale-110 ring-2 ring-white/50"
                        : ""
                    }
                  `}
                    >
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Status Indicator */}
                    <div className="flex items-center gap-2">
                      <div
                        className={`
                      w-2 h-2 rounded-full
                      ${index === currentStep ? `bg-green-600` : "bg-gray-200"}
                      animate-pulse
                    `}
                      ></div>
                      <span
                        className={`
                      text-xs font-medium
                      ${index === currentStep ? "text-black" : "text-gray-400"}
                    `}
                      >
                        {index === currentStep
                          ? "Active"
                          : index < currentStep
                          ? "Completed"
                          : "Pending"}
                      </span>
                    </div>

                    {/* Connection Lines */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-blue-500 to-transparent opacity-50"></div>
                    )}
                  </div>

                  {/* Floating particles */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-float"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-float animation-delay-1000"></div>
                </div>
              ))}
            </div>

            {/* Bottom decorative line */}
            <div className="mt-10 flex justify-center">
              <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500 to-indigo-500"></div>
            </div>

            {/* Stats Section */}
            <div className="my-20 grid md:grid-cols-3 gap-8">
              {[
                { label: "Total Proposals", value: "1,247", icon: "📊" },
                { label: "Success Rate", value: "78%", icon: "✅" },
                { label: "Active Discussions", value: "23", icon: "💬" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-100 rounded-2xl border border-white/10"
                >
                  <div className="text-xl font-medium text-blacks">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%,
            100% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-4px);
            }
          }

          .animate-blob {
            animation: blob 7s infinite;
          }

          .animate-float {
            animation: float 2s ease-in-out infinite;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
        `}</style>
      </section>
    </div>
  );
};

export default ProposalLifecycle;

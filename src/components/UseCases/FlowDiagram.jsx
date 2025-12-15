import React from "react";
import {
  User,
  ShieldCheck,
  CheckCircle,
  XCircle,
  ArrowRight,
  Play,
} from "lucide-react";
import user_access from "../../assets/gif/user-access.gif";
import verification from "../../assets/gif/verification.gif";
import access_granted from "../../assets/gif/access-granted.gif";
import access_denied from "../../assets/gif/access-denied.gif";

const FlowDiagram = () => {
  const steps = [
    {
      title: "User Initiates Request",
      videoUrl: user_access,
      icon: User,
      color: "text-indigo-600",
    },
    {
      title: "Identity Layer Verification",
      videoUrl: verification,
      icon: ShieldCheck,
      color: "text-indigo-600",
    },
    {
      title: "Access Granted",
      videoUrl: access_granted,
      icon: CheckCircle,
      color: "text-indigo-600",
    },
    {
      title: "Access Denied",
      videoUrl: access_denied,
      icon: XCircle,
      color: "text-indigo-600",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-black">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        How Sapher Works in Use Cases
      </h2>
      <p className="text-xs sm:text-base text-center text-gray-600 mb-16 max-w-2xl mx-auto mb-10">
        A simple but powerful trust flow that powers payments, gaming,
        onboarding, and decentralized identity interactions.
      </p>

      <div className="flex items-center justify-center gap-8 flex-wrap">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step Card */}
            <div className="relative group flex flex-col items-center w-64">
              {/* Video Card */}
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 w-full h-56 cursor-pointer">
                {/* Video Element */}
                <img
                  className="w-full h-full object-cover"
                  src={step.videoUrl}
                  alt={step.title}
                />

                {/* Overlay Play Icon (visible on hover only for better UX) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-10 h-10 text-white" fill="white" />
                </div>

                {/* Hover to Play: Pause when not hovering */}
                <div
                  className="absolute inset-0"
                  onMouseEnter={(e) =>
                    e.currentTarget.previousElementSibling.play()
                  }
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.previousElementSibling;
                    video.pause();
                    video.currentTime = 0; // Optional: reset to start
                  }}
                />

                {/* Caption on Hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg font-semibold">{step.title}</p>
                  <p className="text-sm mt-1">
                    {index === 0 &&
                      "User requests access to a protected resource."}
                    {index === 1 &&
                      "Sapher verifies decentralized identity credentials."}
                    {index === 2 &&
                      "User meets requirements → access granted securely."}
                    {index === 3 &&
                      "User doesn't meet criteria → access denied."}
                  </p>
                </div>
              </div>

              {/* Icon below video */}
              <step.icon className={`w-8 h-8 ${step.color} mt-4`} />
              <p className="font-medium mt-2">{step.title}</p>
            </div>

            {/* Arrow (except after last step) */}
            {index < steps.length - 1 && (
              <ArrowRight className="w-8 h-8 text-gray-500 hidden md:block" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default FlowDiagram;

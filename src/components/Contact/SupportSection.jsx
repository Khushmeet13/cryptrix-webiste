import React, { useEffect, useRef } from "react";
import { Briefcase, Shield, Smartphone, Mic, Mail, Ticket } from "lucide-react";

const SupportSection = () => {
  const sectionRef = useRef(null);

  const leftRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!leftRef.current || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      // Section scroll position (0 at start, increases as you scroll inside)
      const insideScroll = Math.max(0, -rect.top);

      // Limit movement within the section (so it doesn't fly away)
      const maxMove = rect.height - window.innerHeight + 120;

      const offset = 80; // Always visible (you can adjust)
      const parallax = Math.min(maxMove, insideScroll * 0.4) + offset;

      leftRef.current.style.transform = `translateY(${parallax}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const supportItems = [
    { icon: Briefcase, label: "Business Enquiries", color: "indigo" },
    { icon: Shield, label: "Solutions & Validator Support", color: "purple" },
    { icon: Smartphone, label: "App Support", color: "blue" },
    { icon: Mic, label: "Media & Press", color: "pink" },
    { icon: Mail, label: "General Communication", color: "cyan" },
    { icon: Briefcase, label: "Partnerships", color: "emerald" },
    { icon: Shield, label: "Security & Bug Bounty", color: "red" },
    { icon: Smartphone, label: "Developer Support", color: "yellow" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gray-100 text-black py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN - Sticky */}
          <div className="lg:sticky relative overflow-visible">
            {/* Inner wrapper getting transform */}
            <div
              ref={leftRef}
              className="space-y-10 will-change-transform transition-transform duration-75"
            >
              <div className="space-y-8">
                <h1 className="text-3xl font-semibold leading-tight">
                  Get support
                </h1>

                <button
                  onClick={() =>
                    window.open("https://support.sapherchain.com", "_blank")
                  }
                  className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-bold text-xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Ticket size={26} />
                  Raise Ticket
                  <span className="ml-2 text-2xl">→</span>
                </button>
              </div>

              {/* Glow */}
              <div className="h-96 w-96 bg-indigo-600/10 rounded-full blur-3xl absolute -top-20 -left-40 -z-10" />
            </div>
          </div>

          {/* RIGHT COLUMN - Scrollable */}
          <div className="space-y-6">
            {supportItems.map((item, index) => (
              <div
                key={index}
                href="#"
                className="group flex items-center gap-3 border-b pb-5"
              >
                {/* Icon */}
                <div className={`p-4 rounded-lg bg-gray-200 `}>
                  <item.icon size={20} className={`text-gray-800`} />
                </div>

                {/* Label */}
                <span className="text-lg font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

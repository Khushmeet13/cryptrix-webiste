import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { ArrowRight, Sparkles } from "lucide-react";

const LegalDocumentPage = ({ title, lastUpdated, sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 320;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full h-[40vh] bg-indigo-950 text-white">
        <section className="relative h-[40vh] min-h-[320px] bg-gradient-to-br from-black via-indigo-950/40 to-black overflow-hidden">
          {/* Background glows */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-32 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          {/* Main Animated Line + Drawing (Left to Right) */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Animated flowing line */}
              <path
                d="M 50 200 Q 450 180, 800 200 T 1210 200"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                className="draw-flow-line"
              />

              {/* Glow under line */}
              <path
                d="M 50 200 Q 450 180, 800 200 T 1210 200"
                fill="none"
                stroke="url(#lineGlow)"
                strokeWidth="10"
                opacity="0.4"
                className="draw-flow-line"
              />

              {/* Symbol on the right */}
              <g className="draw-symbol">
                <circle
                  cx="1100"
                  cy="200"
                  r="100"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="4"
                />

                {/* ✅ GREEN TICK remains unchanged */}
                <path
                  d="M 1075 200 L 1092 217 L 1125 185"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="checkmark"
                />

                {/* Circuit dots in Indigo tones */}
                <circle
                  cx="1050"
                  cy="160"
                  r="8"
                  fill="#6366f1" // indigo-500
                  opacity="0.85"
                  className="pulse-dot"
                />
                <circle
                  cx="1150"
                  cy="240"
                  r="6"
                  fill="#4f46e5" // indigo-600
                  opacity="0.85"
                  className="pulse-dot delay-500"
                />
              </g>

              {/* Gradients */}
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#4c1d95" /> {/* indigo-900 */}
                  <stop offset="50%" stopColor="#6366f1" /> {/* indigo-500 */}
                  <stop offset="100%" stopColor="#3b82f6" />{" "}
                  {/* blue-500 slight mix but indigo family look */}
                </linearGradient>

                <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#6366f1" stopOpacity="0.85" />
                  <stop
                    offset="100%"
                    stopColor="#4338ca"
                    stopOpacity="0.6"
                  />{" "}
                  {/* indigo-700 */}
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Content (Title on Left) */}
          <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-medium text-white mb-3">{title}</h1>
              <p className="text-gray-400">Last updated: {lastUpdated}</p>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-[#01021f]">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-90 flex-shrink-0 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="sticky top-24 space-y-8 p-2">
              <nav className="">
                {sections.map((sec, i) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className={`w-full text-left px-6 py-4 rounded-xl flex items-center gap-2 text-lg transition-all ${
                      activeSection === sec.id
                        ? "bg-white/[0.05] text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`w-8 ${
                        activeSection === sec.id ? "text-blue-400" : "text-gray-500"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-left">{sec.title}</span>
                    {activeSection === sec.id && (
                      <ChevronRight className="w-5 h-5 text-blue-400" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            <div className="space-y-20">
              {sections.map((sec, i) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-32">
                  <div className="border-l border-indigo-500/40 pl-8">
                    <h2 className="text-3xl font-semibold mb-3 text-white">
                      {i + 1}. {sec.title}
                    </h2>

                    <div className="text-md text-gray-400 leading-relaxed space-y-4">
                      {sec.content}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </section>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur border-t border-white/10 p-4 z-50">
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {sections.map((sec, i) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                activeSection === sec.id
                  ? "bg-white text-black font-bold"
                  : "bg-white/10 text-gray-400"
              }`}
            >
              {i + 1}.{" "}
              {sec.title.split(" ").slice(0, 3).join(" ") +
                (sec.title.split(" ").length > 3 ? "..." : "")}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default LegalDocumentPage;

import React from "react";
import { Github, Shield, PenTool, Bug, MessageSquare, Network } from "lucide-react";

const paths = [
  { id: "01", title: "Code Contributions", desc: "Contribute to Cryptrix via GitHub PRs, bug fixes, and new features.", icon: Github, accent: "#60A5FA" },
  { id: "02", title: "Community Moderation", desc: "Help manage Discord, Telegram and maintain a healthy environment.", icon: Shield, accent: "#34D399" },
  { id: "03", title: "Content Creation", desc: "Write blogs, tutorials, videos, artwork and memes.", icon: PenTool, accent: "#F472B6" },
  { id: "04", title: "Testing & QA", desc: "Test features, report bugs, and improve product reliability.", icon: Bug, accent: "#F87171" },
  { id: "05", title: "Early Feedback Loop", desc: "Get access to early builds and share your feedback.", icon: MessageSquare, accent: "#FBBF24" },
  { id: "06", title: "Governance Participation", desc: "Vote on governance proposals and shape Cryptrix's future.", icon: Network, accent: "#A78BFA" },
];

const ContributionPaths = () => {
  return (
    <section className="py-20 md:py-24 bg-[#01021f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
            Contribute
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-white">Contribution Paths</h2>
        <p className="text-gray-400 text-base sm:text-lg">
          Multiple ways to grow, build, and make your mark in the community.
        </p>

        {/* Horizontal Timeline */}
        <div className="flex gap-24 overflow-x-auto scrollbar-hide py-16 relative">
          {paths.map((path, index) => {
            const Icon = path.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative flex flex-col items-center w-[300px] shrink-0">
                {/* ----- Top Date (Alternate) ----- */}
                {isEven && (
                  <div className="mb-8 text-6xl font-bold text-white/[0.06]">
                    {path.id}
                  </div>
                )}

                {/* Content Box */}
                <div className="w-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: path.accent + "18", border: `1px solid ${path.accent}35`, color: path.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-white">{path.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{path.desc}</p>
                </div>

                {/* ----- Bottom Date (Alternate) ----- */}
                {!isEven && (
                  <div className="mt-8 text-6xl font-bold text-white/[0.06]">
                    {path.id}
                  </div>
                )}

                {/* Line to next card */}
                {index < paths.length - 1 && (
                  <div className="absolute top-1/2 right-[-96px] w-24 h-px bg-white/10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContributionPaths;

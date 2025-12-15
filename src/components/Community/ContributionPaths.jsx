import React from "react";
import { Github, Shield, PenTool, Bug, MessageSquare, Network } from "lucide-react";

const paths = [
  { id: "01", title: "Code Contributions", desc: "Contribute to Sapher via GitHub PRs, bug fixes, and new features.", icon: Github },
  { id: "02", title: "Community Moderation", desc: "Help manage Discord, Telegram and maintain a healthy environment.", icon: Shield },
  { id: "03", title: "Content Creation", desc: "Write blogs, tutorials, videos, artwork and memes.", icon: PenTool },
  { id: "04", title: "Testing & QA", desc: "Test features, report bugs, and improve product reliability.", icon: Bug },
  { id: "05", title: "Early Feedback Loop", desc: "Get access to early builds and share your feedback.", icon: MessageSquare },
  { id: "06", title: "Governance Participation", desc: "Vote on governance proposals and shape Sapher's future.", icon: Network },
];

const ContributionPaths = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Contribution Paths</h2>
        <p className="text-gray-500 text-base sm:text-lg">
          Multiple ways to grow, build, and make your mark in the community
        </p>

        {/* Horizontal Timeline */}
        <div className="flex gap-32 overflow-x-auto scrollbar-hide py-20 relative">

          {paths.map((path, index) => {
            const Icon = path.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative flex flex-col items-center w-[320px]">
                
                {/* ----- Top Date (Alternate) ----- */}
                {isEven && (
                  <div className="mb-8 text-6xl font-bold text-gray-200">
                    {path.id}
                  </div>
                )}

                {/* Content Box */}
                <div
                  className="bg-gray-100/70 backdrop-blur-xl w-full
                  rounded-2xl p-8 
                  "
                >
                  <Icon className="w-5 h-5 text-indigo-400 mb-3  opacity-80" />

                  <h3 className="text-lg font-bold mb-3">{path.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{path.desc}</p>
                </div>

                {/* ----- Bottom Date (Alternate) ----- */}
                {!isEven && (
                  <div className="mt-8 text-6xl font-bold text-gray-200">
                    {path.id}
                  </div>
                )}

                {/* Line to next card */}
                {index < paths.length - 1 && (
                  <div className="absolute top-1/2 right-[-130px] w-32 h-[2px] bg-gray-200"></div>
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

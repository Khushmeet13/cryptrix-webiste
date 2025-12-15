import { Sparkles } from "lucide-react";
import React from "react";

const CompanyValues = () => {
  const values = [
    {
      title: "Move faster",
      desc: "Weekly product releases and updates, as requested by our users.",
      color: "bg-blue-600",
    },
    {
      title: "Customer obsessed",
      desc: "You tell us what you want, we build it.",
      color: "bg-orange-500",
    },
    {
      title: "Radical transparency",
      desc: "One place for all of your team and organization’s work.",
      color: "bg-yellow-500",
    },
    {
      title: "Inclusivity",
      desc: "A place where everyone can feel comfortable working together.",
      color: "bg-purple-600",
    },
    {
      title: "Empathy",
      desc: "Always listening, always learning.",
      color: "bg-green-600",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-16 flex items-center justify-center gap-1">
          Our Values
          <Sparkles className="w-5 h-5 text-indigo-700 mb-2" />
        </h2>

        {/* FIRST 3 VALUES — 3 COLUMNS */}
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {values.slice(0, 3).map((value, index) => (
            <ValueCard key={index} value={value} />
          ))}
        </div>

        {/* LAST 2 VALUES — 2 COLUMNS */}
        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto mt-12">
          {values.slice(3).map((value, index) => (
            <ValueCard key={index} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ value }) => (
  <div
    className="group relative flex flex-col items-start space-y-3 
               transition-all duration-500 hover:-translate-y-2"
  >
    {/* Colored bar */}
    <div
      className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 
                 rounded-r-full transition-all duration-500 
                 group-hover:w-1 group-hover:bg-indigo-500 
                 `}
    />

    {/* Content */}
    <div className="pl-6">
      <h3
        className="text-xl font-semibold text-gray-900 
                   group-hover:text-transparent group-hover:bg-clip-text 
                   group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 
                   transition-all duration-500"
      >
        {value.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
    </div>

    {/* Glow */}
    <div
      className={`absolute -inset-4 bg-indigo-600 opacity-0 
                 blur-3xl rounded-3xl transition-opacity duration-500 
                 group-hover:opacity-10 -z-10`}
    />
  </div>
);

export default CompanyValues;

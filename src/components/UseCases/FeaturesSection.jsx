import React from "react";

const FeaturesSection = ({ sections, title }) => {
  return (
    <section className="relative bg-gray-100 text-black py-24">
      <div className="absolute left-0 top-0 -translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT SIDE - ALWAYS VISIBLE STICKY HEADING */}
        <div className="hidden lg:flex sticky top-24 h-fit items-start px-12">
          <h1 className="text-5xl font-semibold leading-tight">{title}</h1>
        </div>

        {/* Mobile heading */}
        <div className="lg:hidden px-8 pb-12">
          <h1 className="text-4xl font-bold leading-tight">
            Empowering Your Payment Experiences
          </h1>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="px-8 lg:px-16 space-y-14">
          {sections.map((section, index) => (
            <div key={index} className="max-w-2xl border-b pb-10">
              <h2 className="text-3xl font-bold mb-6">{section.title}</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

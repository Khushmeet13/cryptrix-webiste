import React from "react";

const insights = [
  {
    title: "Founder Graduates & Forges Ahead",
    date: "Apr 07, 2018",
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Crypto Pioneer Pays $4.57M for Charity Lunch",
    date: "Jun 04, 2019",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Responds to Industry CEO: No Takeover Plans",
    date: "Mar 08, 2020",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
];

const InsightsSection = () => {
  return (
    <section className="w-full py-22 bg-white">
      {/* Heading */}
      <h2 className="text-center text-3xl font-semibold text-gray-900 mb-12">
        Insights
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {insights.map((item, index) => (
          <div
            key={index}
            className="group relative w-full h-[340px] rounded-2xl overflow-hidden shadow-lg cursor-pointer 
              transform transition-all duration-700 hover:-translate-y-2"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 
              group-hover:scale-110 group-hover:brightness-[65%]"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Content */}
            <div
              className="absolute bottom-6 left-6 text-white transition-all duration-500 
              opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0"
            >
              <h3 className="text-lg font-semibold leading-tight w-[85%]">
                {item.title}
              </h3>
              <p className="text-sm opacity-80 mt-2">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-14">
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full relative overflow-hidden group hover:cursor-pointer">
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-700 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-full"></span>
          <span className="relative z-10">Learn more</span>
        </button>
      </div>
    </section>
  );
};

export default InsightsSection;

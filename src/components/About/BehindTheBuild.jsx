import React from "react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    caption: "Shipping the mainnet",
    span: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    caption: "#teambuilding",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    caption: "Building in public",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    caption: "Good food, good vibes",
    span: "md:col-span-2",
  },
];

const BehindTheBuild = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
          <div>
            <span className="about-serif italic text-3xl text-cyan-400">+</span>
            <h2 className="about-serif text-3xl md:text-4xl text-white mt-4">
              Behind the Build
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            A small, distributed team of builders — shipping in the open.
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[560px]">
          {photos.map((p) => (
            <div
              key={p.caption}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 h-64 md:h-auto ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01021f]/90 via-[#01021f]/10 to-transparent" />
              <span className="absolute bottom-4 left-5 text-sm text-white/90 font-medium">
                {p.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindTheBuild;

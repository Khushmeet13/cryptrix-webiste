import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const newsData = [
  {
    img: "https://media.istockphoto.com/id/1312418309/photo/visual-contents-concept-social-networking-service-streaming-video-communication-network-3d.webp?a=1&b=1&s=612x612&w=0&k=20&c=13NK0iE0nryuo0y23_tQLVm_wECWAlIR7z_gJtQLUgg=",
    date: "NOVEMBER 18, 2025",
    tag: "INSTITUTIONAL",
    title: "Cryptrix Expands Institutional Custody Partnerships Across APAC",
  },
  {
    img: "https://media.istockphoto.com/id/1177502670/photo/young-woman-reading-the-news-on-a-modern-tablet-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=s_g_uMl1BWGoK-ES1ybwKrcfVchBkopZrnWdhlQk2mI=",
    date: "NOVEMBER 14, 2025",
    tag: "MILESTONE",
    title: "Cryptrix DEX Surpasses $2B in Cumulative Trading Volume",
  },
  {
    img: "https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=1l_CCCv54Y29Dw1mwpjX2CSAbnzJCwg5JVzVaiK40AM=",
    date: "NOVEMBER 12, 2025",
    tag: "ECOSYSTEM",
    title: "New Validator Incentive Program Goes Live on Cryptrix",
  },
  {
    img: "https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=1l_CCCv54Y29Dw1mwpjX2CSAbnzJCwg5JVzVaiK40AM=",
    date: "NOVEMBER 10, 2025",
    tag: "SECURITY",
    title: "Cryptrix Completes Independent Smart Contract Security Audit",
  },
  {
    img: "https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=1l_CCCv54Y29Dw1mwpjX2CSAbnzJCwg5JVzVaiK40AM=",
    date: "NOVEMBER 8, 2025",
    tag: "PRODUCT",
    title: "Cryptrix Wallet Adds Multi-Chain Support for 12 Networks",
  },
  {
    img: "https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=1l_CCCv54Y29Dw1mwpjX2CSAbnzJCwg5JVzVaiK40AM=",
    date: "NOVEMBER 6, 2025",
    tag: "GRANTS",
    title: "Cryptrix Community Fund Grants $1M to Ecosystem Builders",
  },
];

const InTheNews = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-[#01021f] text-white py-20 md:py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Heading + Arrows */}
      <div className="relative z-10 flex justify-between items-end px-6 sm:px-20 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Press
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">In the news</h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={scrollLeft}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center transition hover:border-white/40 hover:bg-white/5"
          >
            <ArrowLeft className="text-white w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={scrollRight}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center transition hover:border-white/40 hover:bg-white/5"
          >
            <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="relative z-10 flex gap-6 overflow-x-auto px-6 sm:px-20 scrollbar-hide"
      >
        {newsData.map((item, index) => (
          <div
            key={index}
            className="min-w-[320px] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.05]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-44 object-cover"
            />

            <div className="p-5">
              <div className="flex justify-between text-xs mb-3">
                <span className="text-gray-500">{item.date}</span>
                <span className="text-blue-400 font-semibold">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-base font-medium leading-tight text-white">
                {item.title}
              </h3>
            </div>
          </div>
        ))}

        {/* SEE MORE BUTTON */}
        <div className="min-w-[150px] flex items-center justify-center">
          <button className="px-6 py-3 border border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/5 transition">
            See more →
          </button>
        </div>
      </div>
    </section>
  );
};

export default InTheNews;

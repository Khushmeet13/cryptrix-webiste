import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const newsData = [
  {
    img: "https://media.istockphoto.com/id/1312418309/photo/visual-contents-concept-social-networking-service-streaming-video-communication-network-3d.webp?a=1&b=1&s=612x612&w=0&k=20&c=13NK0iE0nryuo0y23_tQLVm_wECWAlIR7z_gJtQLUgg=",
    date: "NOVEMBER 18, 2025",
    tag: "INSTITUTIONAL",
    title:
      "Mastercard Selects Polygon to Power Verified Username Transfers for Self-Custody...",
  },
  {
    img: "https://media.istockphoto.com/id/1177502670/photo/young-woman-reading-the-news-on-a-modern-tablet-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=s_g_uMl1BWGoK-ES1ybwKrcfVchBkopZrnWdhlQk2mI=",
    date: "NOVEMBER 14, 2025",
    tag: "INSTITUTIONAL",
    title:
      "R25 Launches Institutional-Grade RWA Protocol on Polygon, Introducing Yield...",
  },
  {
    img: "https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=1l_CCCv54Y29Dw1mwpjX2CSAbnzJCwg5JVzVaiK40AM=",
    date: "NOVEMBER 12, 2025",
    tag: "INSTITUTIONAL",
    title:
      "Calastone Brings Global Fund Distribution Onchain with Polygon",
  },
  {
    img: "https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=1l_CCCv54Y29Dw1mwpjX2CSAbnzJCwg5JVzVaiK40AM=",
    date: "NOVEMBER 10, 2025",
    tag: "INSTITUTIONAL",
    title:
      "Calastone Brings Global Fund Distribution Onchain with Polygon",
  },
  {
    img: "https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=1l_CCCv54Y29Dw1mwpjX2CSAbnzJCwg5JVzVaiK40AM=",
    date: "NOVEMBER 8, 2025",
    tag: "INSTITUTIONAL",
    title:
      "Calastone Brings Global Fund Distribution Onchain with Polygon",
  },
  {
    img: "https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=1l_CCCv54Y29Dw1mwpjX2CSAbnzJCwg5JVzVaiK40AM=",
    date: "NOVEMBER 6, 2025",
    tag: "INSTITUTIONAL",
    title:
      "Calastone Brings Global Fund Distribution Onchain with Polygon",
  },
  // Add more cards...
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
    <section className="w-full bg-gradient-to-t from-gray-100 to-white text-black py-20">
      {/* Heading + Arrows */}
      <div className="flex justify-between items-center px-20 mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold">In the news</h2>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollLeft}
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-black flex items-center justify-center hover:cursor-pointer hover:bg-white"
          >
            <ArrowLeft className="text-black w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={scrollRight}
            className="w-8 h-8 sm:w-12 sm:h-12  rounded-full bg-white/10 border border-black flex items-center justify-center hover:bg-white hover:cursor-pointer"
          >
            <ArrowRight className="text-black w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-20 scrollbar-hide"
      >
        {newsData.map((item, index) => (
          <div
            key={index}
            className="min-w-[340px] bg-white rounded-2xl overflow-hidden border border-white/10"
          >
            <img
              src={item.img}
              alt="news"
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <div className="flex justify-between text-xs mb-2 opacity-70">
                <span>{item.date}</span>
                <span className="text-purple-400 font-semibold">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-lg font-medium leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}

        {/* SEE MORE BUTTON */}
        <div className="min-w-[150px] flex items-center justify-center">
          <button className="px-6 py-3 border border-gray-500 rounded-full hover:bg-white/10 transition">
            See more →
          </button>
        </div>
      </div>
    </section>
  );
};

export default InTheNews;

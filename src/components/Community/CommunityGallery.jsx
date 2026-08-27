import React from "react";
import { ArrowRight } from "lucide-react";

// Replace these with your actual community event images
const topRowImages = [
 "https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.webp?a=1&b=1&s=612x612&w=0&k=20&c=GANexorEVO7mDrp8JUHZKwoFbER0hfgrhu9pMkGfAq8=",
 "https://media.istockphoto.com/id/1385168396/photo/people-registering-for-the-conference-event.webp?a=1&b=1&s=612x612&w=0&k=20&c=GGTu49ZlC-Kdmoi_E7GNFd_iQkx3RoACg9Wj9RwVPbA=",
 "https://media.istockphoto.com/id/1482843873/photo/close-up-on-hands-of-a-crowd-of-people-clapping-in-dark-conference-hall-during-a-motivational.jpg?s=612x612&w=0&k=20&c=l82b7EN4ml1NOIHsTMrQtEO6FpJbOE5ZbimEG1aeGM0=",
 "https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.jpg?s=612x612&w=0&k=20&c=aWW3omXKHjxBkd58NouVo8GsapvA2KXO9RwuokHhvFk=",
 "https://media.istockphoto.com/id/1348871022/photo/female-business-professional-addressing-a-seminar.jpg?s=612x612&w=0&k=20&c=n1hMH3WHe102cbXlggCICLThJCGClKhN40F1h9xUIJw=",
 "https://media.istockphoto.com/id/894635514/photo/he-makes-success-sound-easy.jpg?s=612x612&w=0&k=20&c=FLE3AvM4FzX2DJ_aYWu9vKe6SgsHXS_PP6AukrrhOpo=",
];

const bottomRowImages = [
 "https://media.istockphoto.com/id/530685797/photo/group-of-business-people-standing-and-talking-in-office.jpg?s=612x612&w=0&k=20&c=MoPVNC0TE1rh7BVEyRROLZclMkGldXKajiLRUOZ8mec=",
 "https://media.istockphoto.com/id/1015264434/photo/pretty-business-lady-talking-to-colleague.jpg?s=612x612&w=0&k=20&c=4nwIcSXgq8kKeUbVQBUOwnI8_Drk-ndKL1OjdzLwPjM=",
 "https://media.istockphoto.com/id/1029403636/photo/businessmen-handshake-at-cafe.jpg?s=612x612&w=0&k=20&c=YQuCtSfv3u1kG5Tk4qSfMI-kKZGEqkB1toyialrk410=",
 "https://media.istockphoto.com/id/1482846285/photo/young-female-sitting-in-a-crowded-audience-at-a-science-conference-delegate-cheering-and.jpg?s=612x612&w=0&k=20&c=kCzxwQqokN1vaxlISKhzdRvY54Pfz7S95qdo-cef3D4=",
 "https://media.istockphoto.com/id/1385170533/photo/business-people-greet-each-other-during-a-coffee-break-at-a-conference.jpg?s=612x612&w=0&k=20&c=7AXeMLvSFnEED1BlQ5PRBHo3YYKRn8G05agTxHS_xcc=",
 "https://media.istockphoto.com/id/2053337498/photo/asian-business-people-team-brainstorm-meeting-in-sustainable-office-at-night-using-computer.jpg?s=612x612&w=0&k=20&c=92199lBFTEtbVNb8AWLjmYPThYII4xMm7aNNtuh4w8o=",

];

const CommunityGallery = () => {
  return (
    <section className="py-20 md:py-24 bg-[#01021f] text-white overflow-hidden">
      <div className="w-full mx-auto">
        {/* Title */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Gallery
            </span>
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-16 text-white">
          Glimpses of our community events
        </h2>

        {/* Top Row - Scrolls Left */}
        <div className="mb-10 overflow-hidden">
          <div className="flex animate-marquee-left gap-8">
            {/* Duplicated for seamless loop */}
            {[...topRowImages, ...topRowImages].map((src, i) => (
              <div
                key={i}
                className="flex-none w-60 h-38 sm:w-80 sm:h-64 md:w-98 md:h-54 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Community event ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolls Right */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-right gap-8">
            {/* Duplicated for seamless loop */}
            {[...bottomRowImages, ...bottomRowImages].map((src, i) => (
              <div
                key={i}
                className="flex-none w-60 h-38 sm:w-80 sm:h-64 md:w-98 md:h-54 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Community event ${i + 9}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Optional CTA */}
        <div className="flex justify-center mt-16">
          <button className="group flex items-center gap-2 text-sm sm:text-base font-medium border border-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40 hover:cursor-pointer">
            Join Our Community
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Tailwind Animation Keyframes */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 40s linear infinite;
        }

        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 45s linear infinite;
        }

        /* Pause on hover */
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CommunityGallery;
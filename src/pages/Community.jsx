import React from "react";
import { MessageCircle, HelpCircle, Send } from "lucide-react";
import ConnectSection from "@/components/Community/ConnectSection";
import UpcomingEventsSection from "@/components/Community/UpcomingEventsSection";
import CommunityPrograms from "@/components/Community/CommunityPrograms";
import AmbassadorShowcase from "@/components/Community/AmbassadorShowcase";
import ContributionPaths from "@/components/Community/ContributionPaths";
import NewsletterSignup from "@/components/Community/NewsletterSignup";
import CommunityGallery from "@/components/Community/CommunityGallery";

const collageImages = [
  "https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.webp?a=1&b=1&s=612x612&w=0&k=20&c=GANexorEVO7mDrp8JUHZKwoFbER0hfgrhu9pMkGfAq8=",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&auto=format&fit=crop&q=60",
  "https://media.istockphoto.com/id/2203423676/photo/multiracial-business-professionals-attending-seminar-at-convention-center.webp?a=1&b=1&s=612x612&w=0&k=20&c=5FJ1LxbLJqaylpmUqSzK2L6XSLAPjTxPe8VIeXpZDbw=",
  "https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=900&auto=format&fit=crop&q=60",
  "https://media.istockphoto.com/id/1385168396/photo/people-registering-for-the-conference-event.webp?a=1&b=1&s=612x612&w=0&k=20&c=GGTu49ZlC-Kdmoi_E7GNFd_iQkx3RoACg9Wj9RwVPbA=",
];

// Duplicate images for seamless infinite loop
const infiniteImages = [...collageImages, ...collageImages, ...collageImages];

const Community = () => {
  return (
    <div className="w-full min-h-screen bg-[#01021f]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#01021f] py-24 md:py-28">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient glow */}
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[130px] animate-float-slow pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[130px] animate-float-reverse pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Text + CTAs */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-7">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                  Community
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight tracking-tight">
                Join the <span className="text-blue-400">Cryptrix Community</span>
              </h1>

              <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-lg">
                Building the future of decentralized governance together — an
                ever-expanding, global network of builders, validators, and
                traders shaping the Cryptrix ecosystem.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
                >
                  <MessageCircle size={18} />
                  Join Discord
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-white/40"
                >
                  <Send size={18} />
                  Join Telegram
                </a>

                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 text-sm font-medium transition-all duration-300 hover:border-white/25 hover:text-white"
                >
                  <HelpCircle size={18} />
                  Get Support
                </a>
              </div>

              {/* Trust stats */}
              <div className="mt-14 grid grid-cols-3 gap-6 max-w-md border-t border-white/10 pt-8">
                <div>
                  <div className="text-2xl font-semibold text-white">50K+</div>
                  <div className="text-xs text-gray-500 mt-1">Members</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">120+</div>
                  <div className="text-xs text-gray-500 mt-1">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">24/7</div>
                  <div className="text-xs text-gray-500 mt-1">Active</div>
                </div>
              </div>
            </div>

            {/* RIGHT: Infinite Sliding Columns */}
            <div className="relative hidden sm:block h-[500px] md:h-[600px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-3">
              <div className="grid grid-cols-3 gap-3 h-full">
                {/* Column 1: Top to Bottom */}
                <div className="flex flex-col gap-3 animate-slide-down">
                  {infiniteImages.map((src, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-xl border border-white/10 group h-56"
                    >
                      <img
                        src={src}
                        alt="community"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ))}
                </div>

                {/* Column 2: Bottom to Top (reverse direction) */}
                <div className="flex flex-col gap-3 animate-slide-up">
                  {infiniteImages.map((src, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-xl border border-white/10 group h-56"
                    >
                      <img
                        src={src}
                        alt="community"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ))}
                </div>

                {/* Column 3: Top to Bottom */}
                <div className="flex flex-col gap-3 animate-slide-down-slow">
                  {infiniteImages.map((src, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-xl border border-white/10 group h-56"
                    >
                      <img
                        src={src}
                        alt="community"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Fade masks */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#01021f] to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#01021f] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <ConnectSection />
      <UpcomingEventsSection />
      <CommunityPrograms />
      <AmbassadorShowcase />
      <ContributionPaths />
      <CommunityGallery />
      <NewsletterSignup />
    </div>
  );
};

export default Community;

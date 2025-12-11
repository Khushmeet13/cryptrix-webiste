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
    <div className="w-full min-h-screen">
      {/* Top Section */}
      <section className="relative h-[50vh] overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950/60 to-purple-950/40" />

        {/* Animated Floating Orbs (Pure CSS) */}
        <div className="absolute inset-0">
          {/* Orb 1 */}
          <div className="absolute top-10 left-10 w-76 h-76 md:w-[600px] md:h-[600px] bg-cyan-600/40 rounded-full blur-3xl animate-float-slow" />

          {/* Orb 2 */}
          <div className="absolute bottom-20 right-10 w-70 h-70 md:w-[500px] md:h-[500px] bg-indigo-600/30 rounded-full blur-3xl animate-float-reverse" />

          {/* Center Glow Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        {/* Subtle Moving Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent bg-[length:60px_60px] animate-slide-grid" />
        </div>

        <div className="relative z-10 text-center px-6 mb-22">
          <h1 className="text-3xl font-semibold text-white">
            Building the Future of Decentralized Governance Together
          </h1>
        </div>
      </section>

      <section className="bg-white w-full h-[60vh] -mt-20 relative"></section>

      {/* Overlapping White Section */}
      <div className="absolute top-[25vh] left-1/2 -translate-x-1/2 w-full z-30">
        <div className="max-w-7xl mx-auto bg-white ">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Text + CTAs */}
            <div className="space-y-12 px-22">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight">
                  Join the{" "}
                  <span className="text-indigo-600">Sapher Community</span>
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                  Joining Sapher means joining an ever-expanding, aggregated
                  network of chains
                </p>
              </div>

              <div className="flex flex-wrap gap-6 justify-center">
                <a
                  href="#"
                  className="flex text-white items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition"
                >
                  <MessageCircle size={20} />
                  Join Discord
                </a>

                <a
                  href="#"
                  className="flex text-white items-center gap-2 px-6 py-3 rounded-full bg-black transition"
                >
                  <Send size={20} />
                  Join Telegram
                </a>

                {/* Third Button Center */}
                <div className="w-full flex justify-center">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-gray-500 rounded-full hover:bg-gray-100/50 transition-all duration-300"
                  >
                    <HelpCircle size={20} />
                    Get Support
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Infinite Sliding Columns */}
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              <div className="grid grid-cols-3 gap-4 h-full">
                {/* Column 1: Top to Bottom */}
                <div className="flex flex-col gap-4 animate-slide-down">
                  {infiniteImages.map((src, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-2xl shadow-xl group h-56"
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
                <div className="flex flex-col gap-4 animate-slide-up">
                  {infiniteImages.map((src, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-2xl shadow-xl group h-56"
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
                <div className="flex flex-col gap-4 animate-slide-down-slow">
                  {infiniteImages.map((src, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-2xl shadow-xl group h-56"
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
            </div>
          </div>
        </div>

        
      </div>

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

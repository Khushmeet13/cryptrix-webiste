import React from "react";
import backgroundImage from "../../assets/community.jpg";

const ContactCommunity = () => {
  return (
    <section className="relative bg-white text-black flex items-center overflow-hidden py-22">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text */}
        <div className="space-y-10 z-10 max-w-3xl">
          {/* Main Heading + Subtext */}
          <div className="space-y-5">
            <h1 className="text-3xl md:text-3xl font-semibold leading-tight bg-black bg-clip-text text-transparent">
              How can we help you?
            </h1>

            <p className="text-md md:text-md text-gray-500 leading-relaxed max-w-2xl">
            Whether you have a question about our products or are interested in a new
            collaborating, get in touch with Polygon's community and team here.
          </p>
          </div>

          {/* Trust Badges / Quick Stats */}
          <div className="grid grid-cols-3 gap-6 py-6 border-y border-black/10 mb-6">
            <div className="text-center">
              <div className="text-3xl font-medium text-black">10K+</div>
              <div className="text-sm text-gray-500">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-black">24/7</div>
              <div className="text-sm text-gray-500">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-black">&lt;3s</div>
              <div className="text-sm text-gray-500">Avg. Response Time</div>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-2">
            <div className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
              <div className="p-3 bg-gray-100 rounded-md group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5 text-black-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-black">Email Us</div>
                <div className="text-sm text-gray-400">
                  hello@sapherchain.com
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
              <div className="p-3 bg-gray-100 rounded-md group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-black">Live Support</div>
                <div className="text-sm text-gray-400">
                  Available in Discord
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Animated Card with Particle Wave */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            {/* Main Card */}
            <div
              className="relative z-20 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl px-5 pt-3 shadow-2xl overflow-hidden"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <div className=" flex flex-col justify-start space-y-42">
                <img
                  src="/sapherchain-favicon-light.png"
                  className="h-28 w-28"
                />

                <div className="pb-12">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Connect with the community
                  </h3>

                  <div className="">
                    <button
                      onClick={() =>
                        window.open(
                          "https://discord.gg/your-invite-link",
                          "_blank"
                        )
                      }
                      className="relative px-3 py-3 bg-indigo-600 text-white text-sm rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:scale-105 hover:cursor-pointer"
                    >
                      {/* Gradient Background that slides in on hover */}
                      <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-full"></span>

                      <span className="relative z-10 flex items-center gap-1">
                        Sapher Discord
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          →
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCommunity;

import React from "react";
import bgImage from "../../assets/images/contact-bg.jpg"; // your local background image
import {
  Mail,
  MessageCircle,
  Send,
  Twitter,
  Github,
  Phone,
  MapPin,
  
} from "lucide-react";

const ContactForm = () => {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Contact Form */}
          <div className="space-y-10">
            <form className="space-y-7 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* First Name & Last Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 transition-all duration-300"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone
                    size={20}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-1234"
                    className="w-full pl-14 pr-6 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Hi team, I would love to discuss a potential collaboration..."
                  className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-5 bg-indigo-600 rounded-full font-medium text-lg text-white flex items-center justify-center gap-3 group hover:cursor-pointer"
              >
                <Send size={22} />
                Send Message
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </button>
            </form>
          </div>

          {/* RIGHT: Get In Touch */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-medium text-white mb-4">
                Get in touch
              </h3>
              <p className="text-md text-gray-400 leading-relaxed">
                Whether it's a question, collaboration, or just a hello — we're
                always excited to hear from you. Every conversation matters to
                us. Your questions, concerns, and ideas help us build a more
                transparent and stronger ecosystem.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-white text-xl font-medium">Contact Info</div>
        
              <div className="flex items-center gap-2 ">
                <div className="p-4 hover:scale-110 transition-transform">
                  <Mail size={28} className="text-white" />
                </div>
                <div>
                  <div className="text-mds font-semibold text-white">Email</div>
                  <a
                    href="mailto:hello@sapherchain.com"
                    className="text-gray-400 hover:underline text-lg"
                  >
                    hello@sapherchain.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-4 hover:scale-110 transition-transform">
                  <Phone size={28} className="text-white" />
                </div>
                <div>
                  <div className="text-md font-semibold text-white">Phone</div>
                  <a
                    href="mailto:hello@sapherchain.com"
                    className="text-gray-400 hover:underline text-lg"
                  >
                    +1 (456)123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 ">
                <div className="p-4 hover:scale-110 transition-transform">
                  <MapPin size={28} className="text-white" />
                </div>
                <div>
                  <div className="text-md font-semibold text-white">Location</div>
                  <a
                    href="mailto:hello@sapherchain.com"
                    className="text-gray-400 text-lg"
                  >
                    New York, USA
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

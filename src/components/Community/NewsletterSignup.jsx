import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-22 overflow-hidden bg-[#01021f]">
      {/* Floating 3D Background Shapes - Pure CSS */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-10 left-10 w-96 h-96 opacity-20">
          <div
            className="floating-shape rotate-12 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl w-full h-full"
            style={{ animationDelay: "0s" }}
          />
        </div>
        <div className="absolute top-32 right-20 w-80 h-80 opacity-30">
          <div
            className="floating-shape -rotate-45 bg-gradient-to-tr from-indigo-600/20 to-purple-700/20 rounded-full blur-2xl w-full h-full"
            style={{ animationDelay: "-5s" }}
          />
        </div>
        <div className="absolute bottom-20 left-32 w-72 h-72 opacity-25">
          <div
            className="floating-shape rotate-90 bg-gradient-to-bl from-purple-500/20 to-pink-600/20 rounded-3xl blur-3xl w-full h-full"
            style={{ animationDelay: "-10s" }}
          />
        </div>
        <div className="absolute -bottom-10 right-10 w-96 h-96 opacity-15">
          <div
            className="floating-shape rotate-45 bg-gradient-to-t from-blue-600/20 to-purple-800/20 rounded-full blur-3xl w-full h-full"
            style={{ animationDelay: "-15s" }}
          />
        </div>
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 max-w-2xl sm:max-w-6xl mx-auto md:px-6">
        <div className="backdrop-blur-xl bg-white/5 border rounded-2xl p-8 sm:p-12 md:p-16 text-center border border-gray-200">
          {/* Small Upper Text */}
          <p className="text-blue-400 font-medium tracking-widest text-xs sm:text-sm uppercase mb-3">
            Stay up to date
          </p>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8 leading-tight">
            Get our newsletter
          </h2>

          {/* Email Input + Button */}
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto items-center justify-center">
            <div className="relative w-full sm:w-auto flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-3 md:px-8 md:py-3  border border-gray-500 rounded-full text-white placeholder-gray-400 
                         focus:outline-none focus:border-blue-400  transition-all duration-300
                         text-xs md:text-base backdrop-blur-md"
              />
            </div>

            <button
              type="submit"
              className="relative px-4 py-2 sm:px-6 sm:py-3 bg-white text-black text-xs sm:text-sm rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:cursor-pointer hover:text-white"
            >
              <span className="absolute inset-0 bg-blue-400  translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-full" />
              <span className="relative z-10 flex items-center gap-1">
                Subscribe
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
        }

        .floating-shape {
          animation: float 20s ease-in-out infinite;
          box-shadow: 0 0 100px rgba(139, 92, 246, 0.4);
        }

        /* Slight delay for each shape */
        .floating-shape:nth-child(2) {
          animation-delay: -5s;
        }
        .floating-shape:nth-child(3) {
          animation-delay: -10s;
        }
        .floating-shape:nth-child(4) {
          animation-delay: -15s;
        }
      `}</style>
    </section>
  );
};

export default NewsletterSignup;

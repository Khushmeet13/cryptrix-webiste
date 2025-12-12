import React from "react";
import { ArrowRight } from "lucide-react";
import NewsletterSignup from "../Community/NewsletterSignup";

const CTASection = () => {
  return (
    <section className="pt-24 px-6 bg-white text-black ">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-semibold mb-6 max-w-2xl text-center">
          Build secure identity workflows for your industry.
        </h2>

        <div className="flex justify-center gap-6 mt-8">
          <button className="px-8 py-3 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition">
            Get Started
          </button>

          <button className="px-8 py-3 border border-gray-500 rounded-full hover:bg-white/10 transition flex items-center gap-2">
            Talk to Team <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <NewsletterSignup />
    </section>
  );
};

export default CTASection;

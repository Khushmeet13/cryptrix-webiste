import React from "react";
import { ArrowRight, FileText, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const legalLinks = [
  { title: "Terms of Use", slug: "terms-of-use", available: true },
  { title: "Privacy Policy", slug: "privacy-policy", available: true },
  { title: "Cookie Policy", slug: "cookie-policy", available: true },
  { title: "Risk Disclosure", slug: "risk-disclosure", available: false },
  { title: "Program Terms and Conditions", slug: "village-voucher", available: false },
  { title: "Terms & Conditions", slug: "grants", available: false },
  { title: "Candidate Privacy Notice", slug: "candidate-privacy", available: false },
];

const LegalPage = () => {
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
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[130px] animate-float-slow pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[130px] animate-float-reverse pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Legal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            Legal Terms
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Policies and agreements governing your use of Cryptrix products
            and services.
          </p>
        </div>
      </section>

      {/* Links List */}
      <section className="relative bg-[#01021f] pb-24 md:pb-28">
        <div className="max-w-3xl mx-auto px-6 space-y-3">
          {legalLinks.map((link) =>
            link.available ? (
              <Link
                key={link.slug}
                to={`/legal/${link.slug}/`}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 px-6 py-6"
              >
                <span className="flex items-center gap-3 text-white text-lg font-medium">
                  <FileText size={18} className="text-blue-400" />
                  {link.title}
                </span>

                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/[0.03] group-hover:bg-white/10 transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 text-gray-300 transform transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ) : (
              <div
                key={link.slug}
                className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.01] px-6 py-6 cursor-not-allowed"
              >
                <span className="flex items-center gap-3 text-gray-500 text-lg font-medium">
                  <Lock size={18} className="text-gray-600" />
                  {link.title}
                </span>

                <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 border border-white/10 rounded-full px-3 py-1">
                  Coming soon
                </span>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default LegalPage;

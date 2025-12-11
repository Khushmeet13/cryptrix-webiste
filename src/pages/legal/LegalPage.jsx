import React from "react";
import FloatingChains from "@/components/FloatingChains";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const legalLinks = [
  { title: "Terms of Use", slug: "terms-of-use" },
  { title: "Privacy Policy", slug: "privacy-policy" },
  { title: "Cookie Policy", slug: "cookie-policy" },
  { title: "Risk Disclosure", slug: "risk-disclosure" },
  { title: "Program Terms and Conditions", slug: "village-voucher" },
  { title: "Terms & Conditions", slug: "grants" },
  { title: "Candidate Privacy Notice", slug: "candidate-privacy" },
];

// const legalHighlights = [
//   "Your privacy matters",
//   "Data protection guaranteed",
//   "User rights are protected",
//   "Secure transactions",
//   "Compliance with global standards",
//   "Transparency in policies",
//   "Stay informed about updates",
// ];

const LegalPage = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Top Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-black via-indigo-950/40 to-black flex items-start justify-center pt-32 text-white text-5xl font-semibold">


        <div className="relative z-10">Legal Terms</div>
      </section>

     <section className="bg-white w-full h-screen sm md:h-[80vh] lg:h-[85vh] -mt-20 relative"></section>


      {/* Overlapping White Section */}
      <div className="absolute top-[25vh] left-1/2 -translate-x-1/2 w-full z-30">
        <div className="max-w-6xl mx-auto bg-white p-10 space-y-4">
          {legalLinks.map((link) => (
            <Link
                key={link.slug}
                to={`/legal/${link.slug}/`}
              className="group flex items-center justify-between bg-gray-100/70 hover:bg-gray-200/80 transition-all duration-300 rounded-lg px-6 py-6 text-black text-lg font-medium"
            >
              <span>{link.title}</span>

              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 group-hover:bg-gray-100 transition-colors duration-300 relative overflow-hidden">
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-gray-600 transform transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default LegalPage;

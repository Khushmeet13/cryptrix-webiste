import NewsletterSignup from "@/components/Community/NewsletterSignup";
import UseCaseFAQ from "@/components/FAQSection";
import { SquareCode } from "lucide-react";
import React from "react";

const faqs = [
  {
    q: "How much funding can I apply for?",
    a: "Grant sizes vary based on project scope and impact. Micro grants typically range from $5,000–$20,000, growth grants from $20,000–$100,000, and strategic grants can exceed $100,000 for high-impact initiatives.",
  },
  {
    q: "What is the application timeline?",
    a: "Applications are reviewed on a rolling basis. Initial reviews usually take 2–3 weeks, followed by technical evaluation and milestone discussions before final approval.",
  },
  {
    q: "Do I need to repay the grant?",
    a: "No. SPH grants are non-dilutive and do not require repayment. However, funded projects are expected to meet agreed milestones and provide progress updates.",
  },
  {
    q: "Can individuals apply for a grant?",
    a: "Yes. Individual developers, teams, startups, and organizations are all eligible to apply as long as the proposal aligns with the SPH ecosystem goals.",
  },
  {
    q: "What types of projects are eligible?",
    a: "Eligible projects include protocol infrastructure, DeFi applications, developer tools, ecosystem tooling, research, and community-driven initiatives.",
  },
  {
    q: "How are grants evaluated?",
    a: "Proposals are evaluated based on technical feasibility, ecosystem impact, team experience, innovation, and long-term sustainability.",
  },
  {
    q: "Are there milestone requirements?",
    a: "Yes. Grants are typically distributed in milestones to ensure accountability and progress toward deliverables.",
  },
  {
    q: "Can I apply more than once?",
    a: "Yes. Previous grantees may apply again, provided earlier milestones were successfully completed.",
  },
];

const heroStats = [
  { label: "Total Grants Funded", value: "$12M+" },
  { label: "Projects Supported", value: "180+" },
  { label: "Avg Grant Size", value: "$65K" },
  { label: "Countries", value: "30+" },
];

const GrantsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* 1. Hero Section - Funding Opportunity */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-indigo-950/50 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl mb-6">
            SPH Grants Program
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Funding builders, startups, and innovators shaping the future of the
            SPH ecosystem.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {heroStats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl
                           border border-white/10"
              >
                <p className="text-gray-400 text-sm">{s.label}</p>
                <p className="text-2xl font-semibold">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 2. Grant Overview - What & Why */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
            Grant Overview
          </h2>
          <p className="text-base text-gray-500 leading-relaxed mb-8">
            Our grant program is designed to fuel innovation across the
            ecosystem by providing financial and technical support to projects
            that align with our vision of a decentralized, open, and user-owned
            internet.
          </p>
          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="bg-gray-50 backdrop-blur rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">
                What We Fund
              </h3>
              <p className="text-gray-500">
                Infrastructure, developer tools, DeFi protocols, NFTs, gaming,
                social apps, privacy solutions, and more.
              </p>
            </div>
            <div className="bg-gray-50 backdrop-blur rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">
                Why Apply
              </h3>
              <p className="text-gray-500">
                Receive funding, mentorship, technical support, marketing
                exposure, and access to our global community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Grant Categories */}
      <section className="py-20 px-6 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-16">
            Grant Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Core Infrastructure",
              "Developer Tools",
              "Applications & dApps",
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-white backdrop-blur rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400 transition"
              >
                <div className=" mb-6">
                    <SquareCode size={28} className="text-indigo-600" />
                    </div>
                <h3 className="text-2xl font-semibold mb-4">{cat}</h3>
                <p className="text-gray-500">
                  {i === 0 && "Protocols, bridges, nodes, scaling solutions"}
                  {i === 1 && "SDKs, APIs, wallets, IDEs, testing tools"}
                  {i === 2 && "DeFi, NFTs, gaming, social, identity, AI"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
     

      {/* 5. Eligibility & Evaluation Criteria */}
      <section className="pb-20 px-6 bg-gray-50 text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-16">
            Eligibility & Evaluation
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">
                Eligibility
              </h3>
              <ul className="space-y-4 text-gray-500">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">✓</span> Open-source or
                  public good focus
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">✓</span> Clear roadmap
                  and milestones
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">✓</span> Active
                  development team
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">
                Evaluation Criteria
              </h3>
              <ul className="space-y-4 text-gray-500">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">★</span> Impact on
                  ecosystem
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">★</span> Technical
                  innovation
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">★</span> Team
                  capability & execution
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories / Use Cases */}
      <section className="py-22 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-16">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-100/50 backdrop-blur rounded-2xl overflow-hidden border border-gray-200"
              >
                <div className="h-48">
                  <img 
                  src="https://media.istockphoto.com/id/1358688859/photo/abstract-blockchain-or-networking-concept-small-blocks-forming-a-bigger-block.jpg?s=612x612&w=0&k=20&c=4N8iX-5h2rqGjMV-uP4RsiO40JPwuS_oC_JCvMuOapg="
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    Project Name {i}
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Brief description of how the grant helped them achieve
                    milestones.
                  </p>
                  <a href="#" className="text-indigo-600 hover:text-indigo-700">
                    Read Full Story →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Apply for Grant (CTA) */}
      <section className="pb-24 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Ready to Build the Future?
          </h2>
          <p className="text-base text-gray-500 mb-10">
            Submit your project and join hundreds of funded teams.
          </p>
          <button className="px-6 py-3 text-base bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition transform hover:scale-110 shadow-2xl">
            Apply for Grant Now
          </button>
        </div>
      </section>

      {/* 9. FAQ */}
      <UseCaseFAQ faqs={faqs} />

      {/* <section className="py-22 px-6 bg-white text-black">
        <div className="max-w-3xl mx-auto text-center border border-gray-300 p-10 max-w-5xl rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Stay Updated</h2>
          <p className="text-sm sm:text-base text-gray-500 mb-10">Get the latest grant announcements, deadlines, and ecosystem news.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full  border border-gray-400 focus:border-purple-500 focus:outline-none"
            />
            <button className="px-6 py-3 bg-black text-white rounded-full">
              Subscribe
            </button>
          </form>
        </div>
      </section> */}

      <NewsletterSignup />
    </div>
  );
};

export default GrantsPage;

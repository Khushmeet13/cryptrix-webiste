import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import governanceBg from "../../assets/images/governance-bg.jpg";
import { FileText, Wrench, Coins, Scale, } from "lucide-react";
import proposals from "../../assets/images/proposals.jpg";
import ProposalLifecycle from "@/components/Governance/ProposalLifecycle";
import CustomButton from "@/components/Common/CustomButton";
import NewsletterSignup from "@/components/Community/NewsletterSignup";

const sections = [
  {
    id: "what-is-proposal",
    title: "What is a Proposal?",
    icon: <FileText size={22} />,
    desc: `A proposal is a formal governance mechanism that allows community members
to suggest changes, improvements, or initiatives within the Sapher ecosystem.
Proposals serve as the foundation of decentralized decision-making and ensure
that all major actions are transparent and community-driven.
Each proposal follows a defined lifecycle, from submission and discussion
to voting and final execution.
By participating in proposals, token holders actively shape the future
direction, priorities, and values of the network.`,
  },
  {
    id: "network-upgrades",
    title: "Network Upgrades",
    icon: <Wrench size={22} />,
    desc: `Network upgrade proposals focus on improving the core protocol,
including performance enhancements, security patches, and new features.
These proposals allow the community to review technical changes
before they are implemented on-chain.
Open discussion ensures risks are evaluated and improvements are aligned
with long-term network stability.
Approved upgrades are executed in a transparent and auditable manner,
maintaining trust across the ecosystem.`,
  },
  {
    id: "funding-requests",
    title: "Funding Requests",
    icon: <Coins size={22} />,
    desc: `Funding proposals enable builders, developers, and contributors
to request resources from the Sapher treasury.
These proposals outline objectives, timelines, and expected outcomes
to ensure responsible allocation of funds.
Community voting ensures treasury capital is used efficiently
and aligned with ecosystem growth.
This process supports sustainable development while maintaining
financial transparency and accountability.`,
  },
  {
    id: "policy-changes",
    title: "Policy Changes",
    icon: <Scale size={22} />,
    desc: `Policy proposals define and evolve the governance rules
that guide how decisions are made within the network.
They may include changes to voting thresholds, proposal requirements,
or participation incentives.
By allowing governance policies to adapt over time,
Sapher remains flexible in a changing ecosystem.
Community consensus ensures governance remains fair,
decentralized, and resilient as the network grows.`,
  },
];

const proposalCards = [
  {
    title: "Core Protocol",
    desc: `Core Protocol proposals govern changes to Sapher’s underlying
    technology. These include network upgrades, performance optimizations,
    security improvements, and feature enhancements that directly impact
    protocol stability and scalability. Such proposals undergo rigorous review
    to ensure long-term network integrity.`,
    bg: "bg-gray-300/50",
    color: "text-black",
    text: "text-gray-800",
    top: "top-20",
  },
  {
    title: "Treasury",
    desc: `Treasury proposals focus on the allocation and management of
    Sapher’s shared resources. They cover funding requests for development,
    research, partnerships, grants, and ecosystem growth initiatives.
    Community approval ensures transparency, accountability, and responsible
    use of funds.`,
    bg: "bg-gray-400",
    color: "text-black",
    text: "text-gray-800",
    top: "top-40",
  },
  {
    title: "Community Initiatives",
    desc: `Community Initiative proposals empower contributors to shape the
    ecosystem beyond core development. These proposals support education,
    marketing, governance tooling, events, and engagement programs that
    strengthen participation and foster a sustainable, decentralized
    community.`,
    bg: "bg-gray-500",
    color: "text-white",
    text: "text-gray-200",
    top: "top-64",
  },
  {
    title: "Governance Process",
    desc: `Governance Process proposals refine how decisions are made within
    Sapher. They may introduce changes to voting mechanisms, quorum thresholds,
    delegation models, or proposal lifecycles to improve fairness, efficiency,
    and long-term decentralization.`,
    bg: "bg-gray-600",
    color: "text-white",
    text: "text-gray-300",
    top: "top-80",
  },
  {
    title: "Ecosystem Expansion",
    desc: `Ecosystem Expansion proposals aim to grow Sapher’s reach and
    adoption. These include strategic partnerships, integrations, incentive
    programs, and cross-chain initiatives designed to attract developers,
    users, and long-term collaborators to the network.`,
    bg: "bg-gray-800",
    color: "text-white",
    text: "text-gray-300",
    top: "top-[26rem]",
  },
];

const activeProposals = [
  {
    id: 1,
    title: "Introduce new staking rewards for long-term holders",
    status: "Open",
    votes: { yes: 68, total: 100 },
  },
  {
    id: 2,
    title: "Upgrade governance contract to v2.1",
    status: "Open",
    votes: { yes: 92, total: 100 },
  },
  {
    id: 3,
    title: "Add support for cross-chain bridging",
    status: "Passed",
    votes: { yes: 87, total: 100 },
  },
];

const pastProposals = [
  {
    id: 101,
    title: "Reduce proposal submission fee from 1000 to 500",
    status: "Passed",
    outcome: "Implemented on January 15, 2025",
  },
  {
    id: 102,
    title: "Introduce quadratic voting mechanism",
    status: "Rejected",
    outcome: "Community feedback led to revision",
  },
  {
    id: 103,
    title: "Burn 10% of unclaimed rewards",
    status: "Passed",
    outcome: "Executed successfully",
  },
  {
    id: 104,
    title: "Add new treasury allocation for marketing",
    status: "Rejected",
    outcome: "Insufficient support",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Open":
      return "bg-blue-100 text-blue-700 border-blue-300";
    case "Passed":
      return "bg-green-100 text-green-700 border-green-300";
    case "Rejected":
      return "bg-red-100 text-red-700 border-red-300";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
};

const Proposals = () => {
  const [activeId, setActiveId] = useState(null);
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(refs.current).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      <section className="relative h-[50vh] flex items-start px-6 sm:px-12 lg:px-24 pt-28 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${governanceBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-950/60 to-black/90" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-white space-y-2">
          {/* Breadcrumb */}
          <p className="text-sm uppercase tracking-widest text-indigo-300">
            Governance / Proposals
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl">Governance Proposals</h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300">
            Create, review, and vote on proposals that shape the future of the
            Sapher ecosystem.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2">
              View Proposals <ArrowRight size={16} />
            </button>

            <button className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-full text-sm font-medium">
              Create Proposal
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-xl">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
              <p className="text-2xl font-semibold">12</p>
              <p className="text-xs uppercase tracking-wide text-gray-300">
                Active Proposals
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
              <p className="text-2xl font-semibold">48.2K</p>
              <p className="text-xs uppercase tracking-wide text-gray-300">
                Total Votes
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
              <p className="text-2xl font-semibold">SPH</p>
              <p className="text-xs uppercase tracking-wide text-gray-300">
                Governance Token
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section
        id="about-proposals"
        className="bg-white py-22 px-6 sm:px-12 lg:px-20"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-14">
          {/* Left – Sticky intro */}
          <div className="lg:sticky lg:top-32 space-y-4 h-fit">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">
              Understanding Proposals
            </h2>
            <p className="text-sm sm:text-base text-gray-500">
              Learn how proposals guide decision-making and shape the future of
              the Sapher ecosystem.
            </p>

            {/* Scroll indicator */}
            <div className="hidden lg:block mt-8 space-y-3">
              {sections.map((s) => (
                <div
                  key={s.id}
                  className={`text-sm cursor-pointer transition ${
                    activeId === s.id
                      ? "text-indigo-600 font-medium"
                      : "text-gray-400"
                  }`}
                  onClick={() =>
                    refs.current[s.id].scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {s.title}
                </div>
              ))}
            </div>
          </div>

          {/* Right – Content */}
          <div className="lg:col-span-2 space-y-20">
            {sections.map((s) => (
              <div
                key={s.id}
                id={s.id}
                ref={(el) => (refs.current[s.id] = el)}
                className={`transition-all duration-500 ${
                  activeId === s.id
                    ? "opacity-100 translate-x-0"
                    : "opacity-50 translate-x-2"
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-4 text-gray-600 max-w-4xl leading-relaxed text-justify">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal types */}
      <section className="bg-gray-50 text-black min-h-screen">
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row items-start justify-center p-8 lg:p-16 gap-16 max-w-7xl mx-auto">
          {/* Left Side - Fixed Text */}
          <div className="lg:w-1/2 lg:sticky lg:top-20">
            <h1 className="text-2xl sm:text-3xl leading-tight mb-2 font-semibold">
              Proposal Types
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mb-10">
              The pillars that drive Sapher’s on-chain governance
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-200 transition mb-5">
              Start Building →
            </button>

            <img src={proposals} className="rounded-2xl" />
          </div>

          {/* Right Side - Stacked Sticky Cards */}
          <div className="lg:w-1/2 space-y-12">
            {proposalCards.map((card, i) => (
              <div
                key={i}
                className={`sticky ${card.top} ${card.bg} p-10 rounded-2xl shadow-2xl`}
              >
                <h2
                  className={`${card.color} text-2xl mb-3 font-normal underline`}
                >
                  {card.title}
                </h2>
                <p className={`${card.text} text-base leading-relaxed`}>
                  {card.desc}
                </p>
              </div>
            ))}

            {/* Spacer for scroll */}
            <div className="h-screen" />
          </div>
        </div>
      </section>

      <ProposalLifecycle />

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
              Governance Proposals
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto">
              View current active proposals and explore the history of past
              decisions
            </p>
          </div>

          {/* Active Proposals */}
          <div className="mb-24">
            <h3 className="text-xl text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
              Active Proposals
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeProposals.map((prop) => {
                const yesPercent = Math.round(
                  (prop.votes.yes / prop.votes.total) * 100
                );
                return (
                  <div
                    key={prop.id}
                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                  >
                    <h4 className="text-lg text-gray-900 mb-4 line-clamp-2">
                      {prop.title}
                    </h4>

                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`inline-block px-4 py-1 rounded-full text-sm font-medium border ${getStatusStyle(
                          prop.status
                        )}`}
                      >
                        {prop.status}
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Votes</span>
                        <span>{yesPercent}% Yes</span>
                      </div>
                      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="absolute h-full bg-indigo-500 transition-all duration-500"
                          style={{ width: `${yesPercent}%` }}
                        ></div>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                      View Details
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Past Proposals */}
          <div>
            <h3 className="text-xl text-gray-900 mb-8">
              Past Proposals in the  Archive
            </h3>

            <div className="space-y-6">
              {pastProposals.map((prop) => (
                <div
                  key={prop.id}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition"
                >
                  <div>
                    <h4 className="text-lg text-gray-900 mb-2">
                      {prop.title}
                    </h4>
                    <div className="flex items-center gap-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full font-medium ${getStatusStyle(
                          prop.status
                        )}`}
                      >
                        {prop.status}
                      </span>
                      <span className="text-gray-600">{prop.outcome}</span>
                    </div>
                  </div>

                  <button className="px-6 py-3 bg-black text-white border border-gray-300 rounded-full hover:bg-gray-100 transition whitespace-nowrap">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       <section className="bg-white py-22">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Ready to take action?
          </h2>

          {/* Sub text */}
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            Start by creating a new proposal or learn more about the guidelines.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
            type="button"
            className={`relative px-6 py-3 bg-indigo-600 text-white text-sm rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:cursor-pointer hover:shadow-indigo-500/40 transform hover:scale-105`}
          >
            {/* Sliding colored layer */}
            {/* <span
              className={`absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-full`}
            /> */}

            {/* Text + Icon */}
            <span className="relative z-10 flex items-center gap-1">
              Create Proposal
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <CustomButton text="View Proposal Guidelines" />
          </div>
        </div>
      </section>

      <NewsletterSignup />

    </div>
  );
};

export default Proposals;

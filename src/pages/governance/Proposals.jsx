import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import governanceBg from "../../assets/images/governance-bg.jpg";
import { FileText, Wrench, Coins, Scale, Users, Globe, Search, Clock, ChevronDown, MessageCircle, Vote } from "lucide-react";
import proposals from "../../assets/images/proposals.jpg";
import ProposalLifecycle from "@/components/Governance/ProposalLifecycle";
import CustomButton from "@/components/Common/CustomButton";

const sections = [
  {
    id: "what-is-proposal",
    title: "What is a Proposal?",
    icon: <FileText size={22} />,
    desc: `A proposal is a formal governance mechanism that allows community members
to suggest changes, improvements, or initiatives within the Cryptrix ecosystem.
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
to request resources from the Cryptrix treasury.
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
Cryptrix remains flexible in a changing ecosystem.
Community consensus ensures governance remains fair,
decentralized, and resilient as the network grows.`,
  },
];

const proposalCategories = [
  {
    title: "Core Protocol",
    desc: "Network upgrades, performance optimizations, and security improvements that directly impact protocol stability.",
    icon: Wrench,
    accent: "#60A5FA",
    bg: "#12132c",
    top: "top-20",
  },
  {
    title: "Treasury",
    desc: "Funding requests for development, research, partnerships, and grants — allocated with full transparency.",
    icon: Coins,
    accent: "#34D399",
    bg: "#0e0f26",
    top: "top-40",
  },
  {
    title: "Community Initiatives",
    desc: "Education, marketing, governance tooling, and events that strengthen participation across the ecosystem.",
    icon: Users,
    accent: "#A78BFA",
    bg: "#0a0b1f",
    top: "top-64",
  },
  {
    title: "Governance Process",
    desc: "Changes to voting mechanisms, quorum thresholds, or delegation models that refine how decisions get made.",
    icon: Scale,
    accent: "#818cf8",
    bg: "#070818",
    top: "top-80",
  },
  {
    title: "Ecosystem Expansion",
    desc: "Strategic partnerships, integrations, and cross-chain initiatives that grow Cryptrix's reach and adoption.",
    bg: "#040512",
    top: "top-[26rem]",
    icon: Globe,
    accent: "#06b6d4",
  },
];

const activeProposals = [
  {
    id: 1,
    title: "Introduce new staking rewards for long-term holders",
    status: "Open",
    votes: { yes: 68, total: 100 },
    proposer: "0x7a3f...92c1",
    endsIn: "3 days",
    quorum: { reached: 42800, required: 50000 },
  },
  {
    id: 2,
    title: "Upgrade governance contract to v2.1",
    status: "Open",
    votes: { yes: 92, total: 100 },
    proposer: "0xb14e...d403",
    endsIn: "16 hours",
    quorum: { reached: 61200, required: 50000 },
  },
];

const pastProposals = [
  {
    id: 101,
    title: "Add support for cross-chain bridging",
    status: "Passed",
    outcome: "Implemented and live on mainnet",
    proposer: "0x2c9a...6f18",
    date: "Nov 2, 2024",
  },
  {
    id: 102,
    title: "Reduce proposal submission fee from 1000 to 500",
    status: "Passed",
    outcome: "Implemented on January 15, 2025",
    proposer: "0xf051...3ab7",
    date: "Jan 15, 2025",
  },
  {
    id: 103,
    title: "Introduce quadratic voting mechanism",
    status: "Rejected",
    outcome: "Community feedback led to revision",
    proposer: "0x88d2...e256",
    date: "Feb 3, 2025",
  },
  {
    id: 104,
    title: "Burn 10% of unclaimed rewards",
    status: "Passed",
    outcome: "Executed successfully",
    proposer: "0x4e7c...19aa",
    date: "Mar 22, 2025",
  },
  {
    id: 105,
    title: "Add new treasury allocation for marketing",
    status: "Rejected",
    outcome: "Insufficient support",
    proposer: "0x9d1f...b872",
    date: "May 9, 2025",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Open":
      return { color: "#60A5FA", bg: "rgba(96,165,250,0.12)", border: "rgba(96,165,250,0.35)" };
    case "Passed":
      return { color: "#34D399", bg: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.35)" };
    case "Rejected":
      return { color: "#F87171", bg: "rgba(248,113,113,0.12)", border: "rgba(248,113,113,0.35)" };
    default:
      return { color: "#9ca3af", bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.15)" };
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

    Object.values(refs.current).forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const [activeCategory, setActiveCategory] = useState(0);
  const categoryRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(categoryRefs.current).forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const [proposalSearch, setProposalSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const q = proposalSearch.trim().toLowerCase();
  const matchesQuery = (title) => !q || title.toLowerCase().includes(q);
  const matchesStatus = (status) => statusFilter === "All" || status === statusFilter;

  const allProposals = [
    ...activeProposals.map((p) => ({ ...p, kind: "active" })),
    ...pastProposals.map((p) => ({ ...p, kind: "past" })),
  ];
  const filteredProposals = allProposals.filter((p) => matchesQuery(p.title) && matchesStatus(p.status));

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative min-h-[60vh] flex items-center px-6 sm:px-12 lg:px-24 pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${governanceBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#01021f] via-indigo-950/70 to-black/90" />

        <div className="relative z-10 max-w-3xl text-white space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Governance / Proposals
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">Governance Proposals</h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-xl">
            Create, review, and vote on proposals that shape the future of the
            Cryptrix ecosystem.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#proposal-list"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              View Proposals
              <ArrowRight size={16} />
            </a>
            <button className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40">
              Create Proposal
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-xl pt-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
              <p className="text-2xl font-semibold text-white">2</p>
              <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">Active Proposals</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
              <p className="text-2xl font-semibold text-white">7</p>
              <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">Total Proposals</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
              <p className="text-2xl font-semibold text-white">CRX</p>
              <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">Governance Token</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Understanding Proposals ───────── */}
      <section id="about-proposals" className="relative py-20 md:py-24 px-6 sm:px-12 lg:px-20 border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-3 gap-14">
          {/* Left – Sticky intro */}
          <div className="lg:sticky lg:top-32 space-y-4 h-fit">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                Basics
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Understanding Proposals
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Learn how proposals guide decision-making and shape the future of
              the Cryptrix ecosystem.
            </p>

            {/* Progress */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono text-blue-400">
                  {String(sections.findIndex((s) => s.id === activeId) + 1 || 1).padStart(2, "0")}
                </span>
                <div className="flex-1 h-px bg-white/10 relative">
                  <div
                    className="absolute top-0 left-0 h-px bg-blue-400 transition-all duration-500"
                    style={{
                      width: `${((sections.findIndex((s) => s.id === activeId) + 1 || 1) / sections.length) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-xs font-mono text-gray-600">{String(sections.length).padStart(2, "0")}</span>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="hidden lg:block space-y-3">
              {sections.map((s, i) => (
                <div
                  key={s.id}
                  className={`flex items-center gap-2.5 text-sm cursor-pointer transition-colors ${
                    activeId === s.id ? "text-blue-400 font-medium" : "text-gray-500 hover:text-gray-300"
                  }`}
                  onClick={() => refs.current[s.id]?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="text-xs font-mono w-4 shrink-0">{i + 1}</span>
                  {s.title}
                </div>
              ))}
            </div>
          </div>

          {/* Right – Content */}
          <div className="relative lg:col-span-2 space-y-16">
            <div className="hidden lg:block absolute top-2 bottom-2 left-5 w-px bg-white/10" />

            {sections.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                ref={(el) => (refs.current[s.id] = el)}
                className={`relative lg:pl-16 transition-all duration-500 ${
                  activeId === s.id ? "opacity-100 translate-x-0" : "opacity-50 translate-x-2"
                }`}
              >
                <span
                  className="hidden lg:block absolute top-0 left-0 font-semibold select-none pointer-events-none"
                  style={{ fontSize: "3.5rem", lineHeight: 1, color: "rgba(255,255,255,0.04)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500"
                    style={{
                      background: activeId === s.id ? "rgba(96,165,250,0.15)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${activeId === s.id ? "rgba(96,165,250,0.35)" : "rgba(255,255,255,0.1)"}`,
                      color: activeId === s.id ? "#60A5FA" : "#6b7280",
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">{s.title}</h3>
                </div>
                <p className="text-gray-400 max-w-4xl leading-relaxed whitespace-pre-line">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Proposal Types (sticky stack) ───────── */}
      <section className="bg-[#01021f] text-white border-t border-white/10 min-h-screen">
        <div className="flex flex-col lg:flex-row items-start justify-center p-8 lg:p-16 gap-16 max-w-7xl mx-auto">
          {/* Left Side - Fixed Text */}
          <div className="lg:w-1/2 lg:sticky lg:top-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                Categories
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl leading-tight mb-2 font-semibold">
              Proposal Types
            </h1>
            <p className="text-sm sm:text-base text-gray-400 mb-10">
              The pillars that drive Cryptrix's on-chain governance
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 mb-6">
              Start Building →
            </button>

            <div className="rounded-2xl overflow-hidden border border-white/10 mb-6">
              <img src={proposals} className="w-full h-48 object-cover" alt="Proposal categories" />
            </div>

            {/* Scroll-tracked indicator */}
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-mono transition-colors duration-300"
                style={{ color: proposalCategories[activeCategory].accent }}
              >
                {String(activeCategory + 1).padStart(2, "0")} / {String(proposalCategories.length).padStart(2, "0")}
              </span>
              <span className="text-sm text-white font-medium transition-all duration-300">
                {proposalCategories[activeCategory].title}
              </span>
              <div className="flex gap-1.5 ml-auto">
                {proposalCategories.map((cat, i) => (
                  <span
                    key={cat.title}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === activeCategory ? 18 : 6,
                      background: i === activeCategory ? cat.accent : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Stacked Sticky Cards */}
          <div className="lg:w-1/2 space-y-12">
            {proposalCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  id={`category-${i}`}
                  data-index={i}
                  ref={(el) => (categoryRefs.current[i] = el)}
                  className={`relative sticky ${cat.top} p-10 rounded-2xl border border-white/10 shadow-2xl overflow-hidden`}
                  style={{ background: cat.bg }}
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: cat.accent }} />

                  {/* Corner glow */}
                  <div
                    className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[70px] pointer-events-none"
                    style={{ background: cat.accent + "30" }}
                  />

                  {/* Ghost number */}
                  <span
                    className="absolute top-6 right-8 font-semibold select-none pointer-events-none"
                    style={{ fontSize: "4.5rem", lineHeight: 1, color: "rgba(255,255,255,0.04)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: cat.accent + "18", border: `1px solid ${cat.accent}35` }}
                      >
                        <Icon size={19} style={{ color: cat.accent }} strokeWidth={1.75} />
                      </div>
                      <h2 className="text-2xl font-medium text-white">{cat.title}</h2>
                    </div>
                    <p className="text-gray-400 text-base leading-relaxed max-w-md">{cat.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* Spacer for scroll */}
            <div className="h-screen" />
          </div>
        </div>
      </section>

      <ProposalLifecycle />

      {/* ───────── Active + Past Proposals ───────── */}
      <section id="proposal-list" className="scroll-mt-24 relative py-20 md:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                Live &amp; Archive
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
              Governance Proposals
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto">
              View current active proposals and explore the history of past
              decisions.
            </p>
          </div>

          {/* Search + filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              <input
                type="text"
                value={proposalSearch}
                onChange={(e) => setProposalSearch(e.target.value)}
                placeholder="Search proposals..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-400/50 focus:bg-white/[0.05] transition-all duration-300"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", "Open", "Passed", "Rejected"].map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ${
                    statusFilter === s
                      ? "bg-white text-black border-white"
                      : "bg-white/[0.02] text-gray-400 border-white/10 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Summary line */}
          <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            <span className="text-white font-medium">{activeProposals.length} active</span>
            <span>·</span>
            <span>{pastProposals.length} archived</span>
            <span>·</span>
            <span>{filteredProposals.length} shown</span>
          </div>

          {/* Unified proposals table */}
          {filteredProposals.length > 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[820px]">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-4 px-6">Proposal</th>
                      <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-4 px-4">Status</th>
                      <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-4 px-4">Proposer</th>
                      <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-4 px-4 w-40">Votes</th>
                      <th className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-4 px-4">When</th>
                      <th className="py-4 px-6" />
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProposals.map((prop, i) => {
                      const style = getStatusStyle(prop.status);
                      const isActive = prop.kind === "active";
                      const yesPercent = isActive ? Math.round((prop.votes.yes / prop.votes.total) * 100) : null;
                      const isExpanded = expandedId === prop.id;

                      return (
                        <React.Fragment key={prop.id}>
                          <tr
                            onClick={() => setExpandedId(isExpanded ? null : prop.id)}
                            className={`cursor-pointer transition-colors duration-200 hover:bg-white/[0.03] ${
                              i % 2 === 1 ? "bg-white/[0.015]" : ""
                            } ${i !== filteredProposals.length - 1 || isExpanded ? "border-b border-white/5" : ""}`}
                          >
                            <td className="py-4 px-6 text-sm font-medium text-white max-w-[280px]">{prop.title}</td>
                            <td className="py-4 px-4">
                              <span
                                className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold border"
                                style={{ color: style.color, background: style.bg, borderColor: style.border }}
                              >
                                {prop.status}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-xs font-mono text-gray-500">{prop.proposer}</td>
                            <td className="py-4 px-4">
                              {isActive ? (
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                                    <div
                                      className="h-full rounded-full bg-blue-400"
                                      style={{ width: `${yesPercent}%` }}
                                    />
                                  </div>
                                  <span className="text-xs text-gray-400 w-9 text-right shrink-0">{yesPercent}%</span>
                                </div>
                              ) : (
                                <span className="text-xs text-gray-600">—</span>
                              )}
                            </td>
                            <td className="py-4 px-4 text-xs text-gray-500 whitespace-nowrap">
                              {isActive ? (
                                <span className="inline-flex items-center gap-1">
                                  <Clock size={11} />
                                  {prop.endsIn}
                                </span>
                              ) : (
                                prop.date
                              )}
                            </td>
                            <td className="py-4 px-6 text-right">
                              <ChevronDown
                                size={16}
                                className="inline-block text-gray-500 transition-transform duration-300"
                                style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                              />
                            </td>
                          </tr>

                          {isExpanded && (
                            <tr className={i !== filteredProposals.length - 1 ? "border-b border-white/5" : ""}>
                              <td colSpan={6} className="px-6 pb-6 pt-1 bg-white/[0.015]">
                                {isActive ? (
                                  <div className="grid sm:grid-cols-3 gap-6 max-w-2xl">
                                    <div>
                                      <div className="text-xs text-gray-500 mb-1.5">Yes / No</div>
                                      <div className="text-sm">
                                        <span className="text-emerald-400 font-medium">{yesPercent}%</span>
                                        <span className="text-gray-600"> / </span>
                                        <span className="text-rose-400 font-medium">{100 - yesPercent}%</span>
                                      </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                      <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                                        <span>Quorum</span>
                                        <span>
                                          {prop.quorum.reached.toLocaleString()} / {prop.quorum.required.toLocaleString()} CRX
                                        </span>
                                      </div>
                                      <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden max-w-xs">
                                        <div
                                          className="absolute h-full bg-indigo-400 rounded-full"
                                          style={{
                                            width: `${Math.min(100, Math.round((prop.quorum.reached / prop.quorum.required) * 100))}%`,
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <p className="text-sm text-gray-400 max-w-xl">
                                    <span className="text-gray-500">Outcome — </span>
                                    {prop.outcome}
                                  </p>
                                )}
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center py-14 rounded-2xl border border-white/10 bg-white/[0.02]">
              <p className="text-gray-500 text-sm">No proposals match your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* ───────── Final CTA ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text + CTAs */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Ready to take action?
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
              Start by creating a new proposal or learn more about the guidelines.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                type="button"
                className="relative px-6 py-3 bg-white text-black text-sm font-medium rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:cursor-pointer hover:shadow-indigo-500/30 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-1">
                  Create Proposal
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <CustomButton
                text="View Proposal Guidelines"
                bgColor="border border-white/20 bg-white/[0.03]"
                slideColor="bg-indigo-600"
              />
            </div>
          </div>

          {/* Right: governance at a glance */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 md:p-7">
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Governance at a Glance
              </span>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <div className="text-2xl font-semibold text-white">7</div>
                <div className="text-xs text-gray-500 mt-1">Total Proposals</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-blue-400">2</div>
                <div className="text-xs text-gray-500 mt-1">Active Now</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-emerald-400">3</div>
                <div className="text-xs text-gray-500 mt-1">Passed</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-rose-400">2</div>
                <div className="text-xs text-gray-500 mt-1">Rejected</div>
              </div>
            </div>

            <a
              href="#proposal-list"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              Browse all proposals
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* ───────── Discuss Before You Propose ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
              <MessageCircle size={18} className="text-blue-400" />
            </div>
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
              <Vote size={18} className="text-emerald-400" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Have an idea before you submit?
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            Most successful proposals start as a conversation. Discuss your
            idea with the community first — it's the fastest way to shape a
            proposal that actually passes.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="/community/"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Join the Discussion
              <ArrowUpRight size={16} />
            </a>
            <a
              href="/voting/"
              className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Learn How Voting Works
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proposals;

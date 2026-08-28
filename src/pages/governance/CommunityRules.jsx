import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  HeartHandshake,
  Network,
  ShieldCheck,
  Users,
  ClipboardCheck,
  Ban,
  MessageCircle,
  HandCoins,
  Target,
  Fingerprint,
  FileCheck,
  Scale,
  BookOpen,
  AlertTriangle,
  MessagesSquare,
  AlertCircle,
  Clock,
  Lock,
  XCircle,
  Gavel,
  FileText,
  ListChecks,
  EyeOff,
  RefreshCw,
  ShieldAlert,
  Vote,
  Coins,
} from "lucide-react";
import governanceBg from "../../assets/images/governance-bg.jpg";

const exploreLinks = [
  {
    title: "Proposals",
    desc: "Browse active and past governance proposals.",
    icon: FileText,
    href: "/proposals",
    accent: "#60A5FA",
  },
  {
    title: "Voting System",
    desc: "See how votes are cast, weighted, and finalized.",
    icon: Vote,
    href: "/voting",
    accent: "#818cf8",
  },
  {
    title: "Staking",
    desc: "Stake CRX to earn rewards and voting power.",
    icon: Coins,
    href: "/staking",
    accent: "#38BDF8",
  },
  {
    title: "Security & Trust",
    desc: "Audits, safeguards, and the network's security posture.",
    icon: ShieldCheck,
    href: "/security",
    accent: "#6366F1",
  },
];

const actionTiles = [
  {
    title: "Revisit the Guidelines",
    desc: "Jump back to any section, from core principles to enforcement.",
    icon: BookOpen,
    href: "#core-principles",
    cta: "Read guidelines",
  },
  {
    title: "Create a Proposal",
    desc: "Draft a governance proposal that follows ethical conduct standards.",
    icon: FileCheck,
    href: "/proposals",
    cta: "Start a proposal",
  },
  {
    title: "Report a Violation",
    desc: "Flag spam, vote manipulation, or abuse for DAO review.",
    icon: ShieldAlert,
    href: "#reporting-violations",
    cta: "Report now",
  },
];

const sections = [
  {
    id: "core-principles",
    title: "Core Principles",
    subtitle:
      "The foundational values that guide behavior, decision-making, and collaboration across the CRX ecosystem.",
    accent: "#60A5FA",
    items: [
      {
        title: "Transparency",
        desc: "All actions, decisions, and discussions are open and verifiable.",
        icon: Eye,
      },
      {
        title: "Respect",
        desc: "Treat every member with courtesy and professionalism.",
        icon: HeartHandshake,
      },
      {
        title: "Decentralization",
        desc: "Community-driven governance with no central authority.",
        icon: Network,
      },
      {
        title: "Security First",
        desc: "Protect users and assets from malicious activity.",
        icon: ShieldCheck,
      },
      {
        title: "Inclusivity",
        desc: "Every voice matters regardless of stake size or role.",
        icon: Users,
      },
      {
        title: "Accountability",
        desc: "Members are responsible for their actions and decisions.",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    id: "participation-rules",
    title: "Participation Rules",
    subtitle:
      "Clear guidelines to ensure healthy discussions, prevent abuse, and protect the integrity of the community.",
    accent: "#818cf8",
    items: [
      {
        title: "No Spam or Scams",
        desc: "No promotional posts, phishing links, or fraud.",
        icon: Ban,
      },
      {
        title: "Respectful Discussions",
        desc: "No harassment, hate speech, or toxic behavior.",
        icon: MessageCircle,
      },
      {
        title: "No Vote Manipulation",
        desc: "Bribing or coercing votes is strictly prohibited.",
        icon: HandCoins,
      },
      {
        title: "Stay On Topic",
        desc: "Keep discussions relevant to governance and proposals.",
        icon: Target,
      },
      {
        title: "One Person, One Voice",
        desc: "Sybil attacks or duplicate accounts are forbidden.",
        icon: Fingerprint,
      },
    ],
  },
  {
    id: "governance-conduct",
    title: "Governance Conduct",
    subtitle:
      "Standards for creating proposals and voting responsibly to maintain fairness and trust.",
    accent: "#34D399",
    items: [
      {
        title: "Ethical Proposal Creation",
        desc: "Proposals must benefit the ecosystem, not individuals.",
        icon: FileCheck,
      },
      {
        title: "Fair Voting",
        desc: "Votes should be based on merit and long-term value.",
        icon: Scale,
      },
      {
        title: "Informed Decisions",
        desc: "Review proposals thoroughly before voting.",
        icon: BookOpen,
      },
      {
        title: "Conflict Disclosure",
        desc: "Declare conflicts of interest transparently.",
        icon: AlertTriangle,
      },
      {
        title: "Community Feedback",
        desc: "Engage with community feedback before final submission.",
        icon: MessagesSquare,
      },
    ],
  },
  {
    id: "enforcement",
    title: "Enforcement",
    subtitle:
      "Actions taken to address violations and maintain a safe ecosystem.",
    accent: "#F87171",
    items: [
      {
        title: "Warnings",
        desc: "Minor violations receive an official warning.",
        icon: AlertCircle,
      },
      {
        title: "Temporary Bans",
        desc: "Repeated violations lead to limited access.",
        icon: Clock,
      },
      {
        title: "Permanent Restrictions",
        desc: "Severe violations result in permanent bans.",
        icon: Lock,
      },
      {
        title: "Proposal Rejection",
        desc: "Malicious proposals are immediately rejected.",
        icon: XCircle,
      },
      {
        title: "DAO Intervention",
        desc: "Critical cases are escalated to DAO voting.",
        icon: Gavel,
      },
    ],
  },
  {
    id: "reporting-violations",
    title: "Reporting Violations",
    subtitle: "Simple and transparent ways to report abuse or misconduct.",
    accent: "#60A5FA",
    items: [
      {
        title: "How to Report",
        desc: "Use Discord or submit a governance ticket.",
        icon: FileText,
      },
      {
        title: "What to Include",
        desc: "Provide evidence, timestamps, and usernames.",
        icon: ListChecks,
      },
      {
        title: "Confidentiality",
        desc: "Reports are handled privately and securely.",
        icon: EyeOff,
      },
      {
        title: "Follow-Up Process",
        desc: "Track report status transparently.",
        icon: RefreshCw,
      },
      {
        title: "False Reports",
        desc: "Misuse of reporting tools may result in penalties.",
        icon: ShieldAlert,
      },
    ],
  },
];

const totalGuidelines = sections.reduce((sum, s) => sum + s.items.length, 0);
const pad = (n) => String(n).padStart(2, "0");

const CommunityRules = () => {
  const [activeId, setActiveId] = useState(sections[0].id);
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
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    Object.values(refs.current).forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative min-h-[55vh] flex items-center px-6 sm:px-12 lg:px-24 pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${governanceBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#01021f] via-indigo-950/70 to-black/90" />

        <div className="relative z-10 max-w-3xl text-white space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Governance / Community Rules
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            Community Guidelines
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-xl">
            Building a respectful, decentralized ecosystem that puts community
            first. Every voice matters, every vote counts, and trust drives
            our growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#core-principles"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Read the Guidelines
              <ArrowRight size={16} />
            </a>
            <a
              href="#reporting-violations"
              className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              Report a Violation
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-xl pt-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
              <p className="text-2xl font-semibold text-white">
                {sections.length}
              </p>
              <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                Sections
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
              <p className="text-2xl font-semibold text-white">
                {totalGuidelines}
              </p>
              <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                Guidelines
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 text-center">
              <p className="text-2xl font-semibold text-white">4</p>
              <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                Enforcement Tiers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Body ───────── */}
      <section className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-[240px_1fr] gap-12">
          {/* Sticky side nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 mb-4 px-4">
                On this page
              </p>
              {sections.map((s, i) => {
                const isActive = activeId === s.id;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-300"
                    style={{
                      background: isActive ? "rgba(255,255,255,0.05)" : "transparent",
                      color: isActive ? "#ffffff" : "#9ca3af",
                      borderLeft: `2px solid ${isActive ? s.accent : "transparent"}`,
                    }}
                  >
                    <span className="text-[10px] tabular-nums text-gray-600">
                      {pad(i + 1)}
                    </span>
                    {s.title}
                  </a>
                );
              })}
            </div>
          </aside>

          {/* Mobile quick nav */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 -mx-6 px-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-gray-300 whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>

          {/* Sections */}
          <div>
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => (refs.current[section.id] = el)}
                className={`scroll-mt-28 pb-20 last:pb-0 ${
                  index > 0 ? "pt-20 border-t border-white/10" : ""
                }`}
              >
                {/* Header */}
                <div className="flex items-start gap-5 mb-10">
                  <span
                    className="text-5xl sm:text-6xl font-bold leading-none select-none"
                    style={{ color: section.accent + "20" }}
                  >
                    {pad(index + 1)}
                  </span>
                  <div>
                    <div
                      className="w-8 h-1 rounded-full mb-3"
                      style={{ background: section.accent }}
                    />
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                      {section.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                {/* Item cards */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20"
                      >
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                          style={{
                            background: section.accent + "18",
                            border: `1px solid ${section.accent}35`,
                            color: section.accent,
                          }}
                        >
                          <Icon size={20} />
                        </div>
                        <h3 className="text-base font-semibold text-white mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Closing CTA: Next Steps ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Next Steps
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            You know the rules. Now put them to work.
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            Whether you're proposing a change, flagging misconduct, or just
            want a refresher — here's where to go next.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-5 text-left">
            {actionTiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <a
                  key={tile.title}
                  href={tile.href}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-4 text-blue-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1.5">
                    {tile.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {tile.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                    {tile.cta}
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Continue Exploring Governance ───────── */}
      <section className="relative py-20 md:py-24 border-t border-white/10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                  Keep Exploring
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                More of Cryptrix governance
              </h2>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">
              These guidelines are just one piece of how the network governs
              itself.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {exploreLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.title}
                  href={link.href}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: link.accent + "18",
                      border: `1px solid ${link.accent}35`,
                      color: link.accent,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    {link.title}
                    <ArrowUpRight
                      size={14}
                      className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {link.desc}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityRules;

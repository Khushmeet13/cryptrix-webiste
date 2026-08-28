import React, { useEffect, useState } from "react";
import {
  Download,
  FileText,
  Boxes,
  Network,
  Coins,
  ShieldCheck,
  Repeat,
  Vote,
  Map,
  Flag,
  BookOpen,
  AlertTriangle,
} from "lucide-react";

const chapters = [
  { id: "abstract", num: "01", title: "Abstract", icon: BookOpen },
  { id: "problem", num: "02", title: "The Problem", icon: AlertTriangle },
  { id: "architecture", num: "03", title: "Architecture", icon: Boxes },
  { id: "consensus", num: "04", title: "Consensus", icon: Network },
  { id: "token", num: "05", title: "Token & Economics", icon: Coins },
  { id: "security", num: "06", title: "Security Model", icon: ShieldCheck },
  { id: "dex", num: "07", title: "The Cryptrix DEX", icon: Repeat },
  { id: "governance", num: "08", title: "Governance", icon: Vote },
  { id: "roadmap", num: "09", title: "Roadmap", icon: Map },
  { id: "conclusion", num: "10", title: "Conclusion", icon: Flag },
];

const stats = [
  { value: "65K+", label: "TPS Capacity" },
  { value: "<1s", label: "Avg. Finality" },
  { value: "$0.001", label: "Avg. Fee" },
  { value: "PoS", label: "Consensus" },
];

const Whitepaper = () => {
  const [active, setActive] = useState(chapters[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (const c of chapters) {
        const el = document.getElementById(c.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActive(c.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#01021f] text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6">
            <FileText size={13} className="text-blue-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              Whitepaper · v1.0
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
            The Cryptrix Whitepaper
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            A technical overview of the architecture, consensus, token
            economics, and security model behind the Cryptrix network.
          </p>

          <p className="mt-4 text-xs uppercase tracking-widest text-gray-500">
            Last updated August 2026
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollTo("abstract")}
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              Read the Whitepaper
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              <Download size={16} />
              Download PDF
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 mt-16 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-white">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-gray-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Sticky chapter nav ───────── */}
      <div className="sticky top-[64px] z-40 bg-[#01021f]/90 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 py-3 min-w-max">
            {chapters.map((c) => (
              <button
                key={c.id}
                onClick={() => scrollTo(c.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  active === c.id
                    ? "bg-white text-black"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {c.num} — {c.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ───────── Content ───────── */}
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-24 space-y-24">
        <Section id="abstract" num="01" title="Abstract">
          <p>
            Cryptrix is a high-performance Layer 1 blockchain designed to
            make decentralized finance practical at everyday scale. This
            paper describes the network's architecture, consensus mechanism,
            native token economics, and the security model that underpins
            every transaction — from a simple transfer to a swap on the
            Cryptrix DEX.
          </p>
          <p>
            Our goal is narrow and specific: give builders and users
            infrastructure that is fast enough to feel instant, cheap enough
            to use casually, and verifiable enough to trust without asking
            permission.
          </p>
        </Section>

        <Section id="problem" num="02" title="The Problem">
          <p>
            Most blockchains force a trade-off between decentralization,
            security, and performance. Networks that prioritize
            decentralization often struggle with throughput and cost;
            networks that optimize for speed frequently compromise on
            validator distribution or introduce trusted intermediaries.
          </p>
          <p>
            This trade-off has kept blockchain infrastructure out of reach
            for the applications that need it most — everyday payments,
            gaming economies, and real-time trading — where high fees and
            slow finality make the experience worse than the centralized
            alternative it's meant to replace.
          </p>
        </Section>

        <Section id="architecture" num="03" title="Architecture">
          <p>
            Cryptrix separates network responsibilities into three
            coordinated layers, each optimized independently without
            compromising the guarantees of the others.
          </p>

          {/* Simple layer diagram */}
          <div className="my-8 space-y-3">
            {[
              { label: "Application Layer", desc: "Wallets, the Cryptrix DEX, and third-party dApps", accent: "#60A5FA" },
              { label: "Consensus Layer", desc: "Validator set, block production, and finality", accent: "#A78BFA" },
              { label: "Network Layer", desc: "Peer discovery, block propagation, and state sync", accent: "#34D399" },
            ].map((layer) => (
              <div
                key={layer.label}
                className="rounded-xl border border-white/10 bg-white/[0.02] px-6 py-4 flex items-center justify-between"
                style={{ borderLeftColor: layer.accent, borderLeftWidth: 3 }}
              >
                <span className="font-semibold text-white text-sm">{layer.label}</span>
                <span className="text-gray-400 text-sm text-right">{layer.desc}</span>
              </div>
            ))}
          </div>

          <p>
            This separation lets each layer scale on its own terms — network
            throughput can improve independently of consensus changes, and
            new application-layer primitives can ship without touching the
            validator set.
          </p>
        </Section>

        <Section id="consensus" num="04" title="Consensus Mechanism">
          <p>
            Cryptrix uses a delegated proof-of-stake (PoS) consensus model.
            Token holders delegate CRX to validators, who are responsible for
            producing and finalizing blocks. Validators that act
            maliciously or go offline are subject to slashing, aligning
            economic incentives with honest participation.
          </p>
          <p>
            Block finality is typically reached in under a second, with the
            validator set rotating regularly to distribute block production
            and reduce the influence of any single participant.
          </p>
        </Section>

        <Section id="token" num="05" title="The CRX Token & Tokenomics">
          <p>
            CRX is the native coin of the Cryptrix network. It's used to pay
            transaction fees, to stake in support of network security, and
            to participate in on-chain governance. Every fee paid in CRX
            is split transparently on-chain — a portion rewards the
            validator that processed the transaction, and a portion funds
            the protocol treasury.
          </p>
          <p>
            Supply issuance is fixed and published on-chain, with staking
            rewards distributed proportionally to validators and their
            delegators. There is no discretionary minting outside the
            protocol's published schedule.
          </p>
        </Section>

        <Section id="security" num="06" title="Security Model">
          <p>
            Every core contract deployed on Cryptrix goes through
            independent security review before mainnet release, and the
            protocol runs an ongoing public bug bounty program to catch
            issues after launch. Core contracts are open-source and
            verifiable by anyone.
          </p>
          <p>
            Cryptrix is non-custodial by design — the protocol never takes
            possession of user funds. Wallets and the DEX interact directly
            with on-chain contracts, so assets remain in a user's control at
            every step of a transaction.
          </p>
        </Section>

        <Section id="dex" num="07" title="The Cryptrix DEX">
          <p>
            The Cryptrix DEX is a decentralized exchange built directly on
            the network's core infrastructure. Trades settle on-chain with a
            flat 0.30% swap fee — 0.25% to liquidity providers and 0.05% to
            the protocol treasury — with no listing fees and no custody of
            user funds at any point.
          </p>
          <p>
            Liquidity providers deposit token pairs into pools and earn a
            proportional share of trading fees, with rewards distributed
            automatically and verifiable on-chain in real time.
          </p>
        </Section>

        <Section id="governance" num="08" title="Governance">
          <p>
            Protocol changes — from parameter adjustments to treasury
            allocations — move through an on-chain proposal and voting
            process. CRX holders and their delegated validators vote
            directly on proposals, and outcomes are enforced automatically
            once a vote concludes.
          </p>
          <p>
            This keeps the roadmap accountable to the people actually using
            the network, rather than a closed group of core contributors.
          </p>
        </Section>

        <Section id="roadmap" num="09" title="Roadmap">
          <p>
            Cryptrix mainnet launched in 2023 with staking and governance
            enabled from day one. The DEX and multi-chain wallet suite
            followed in 2024, alongside the network's first independent
            security audit cycle.
          </p>
          <p>
            Ongoing priorities include expanding validator geographic
            distribution, extending wallet support to additional chains,
            and continuing to fund ecosystem grants for teams building on
            Cryptrix.
          </p>
        </Section>

        <Section id="conclusion" num="10" title="Conclusion">
          <p>
            Cryptrix is built on a simple premise: infrastructure this
            important shouldn't ask for permission. By combining fast,
            low-cost execution with a fully non-custodial, verifiable
            design, Cryptrix aims to make decentralized finance usable at
            the scale it was always meant for.
          </p>
          <p className="text-gray-500 text-sm">
            This document is a living overview of the protocol and will be
            updated as Cryptrix evolves. It does not constitute financial
            advice or a solicitation to purchase any asset.
          </p>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ id, num, title, children }) => (
  <section id={id} className="scroll-mt-40">
    <div className="flex items-baseline gap-4 mb-6">
      <span className="font-mono text-sm text-blue-400">{num}</span>
      <h2 className="text-2xl md:text-3xl font-semibold text-white">{title}</h2>
    </div>
    <div className="prose-invert text-gray-400 leading-relaxed space-y-4 text-[15px] md:text-base">
      {children}
    </div>
  </section>
);

export default Whitepaper;

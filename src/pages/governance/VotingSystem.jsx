import React, { useState } from "react";
import votingGif from "../../assets/gif/voting-bg.gif";
import {
  ShieldCheck,
  Users,
  Clock,
  Lock,
  Vote,
  Wallet,
  Eye,
  Database,
  UserCheck,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import token_voting from "../../assets/gif/token-voting.mp4";
import quorum from "../../assets/images/quorum.png";
import NewsletterSignup from "@/components/Community/NewsletterSignup";
import CustomButton from "@/components/Common/CustomButton";

const steps = [
  {
    title: "Proposal Created",
    desc: "Anyone holding SPH tokens can submit a proposal outlining changes, upgrades, or governance actions.",
    image:
      "https://media.istockphoto.com/id/2157367771/photo/hands-laptop-and-typing-in-office-at-desk-for-crypto-trading-on-stock-market-with-financial.webp?a=1&b=1&s=612x612&w=0&k=20&c=PicQ4Q6NvCJ4-oaJ9csGgtMoRSPTsR8txeNGXo_uWFA=",
  },
  {
    title: "Community Discussion",
    desc: "The community reviews, debates, and refines the proposal before voting begins.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Voting Phase",
    desc: "SPH holders cast votes based on token-weighted governance during the active voting window.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
  },
  {
    title: "Execution",
    desc: "Approved proposals are executed automatically on-chain or via governance-controlled contracts.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
  },
];

const securityFlipCards = [
  {
    icon: <ShieldCheck />,
    title: "Immutable Records",
    desc: "All governance votes are permanently stored on the blockchain, making them tamper-proof and fully verifiable.",
    bgImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
  },
  {
    icon: <Lock />,
    title: "Smart-Contract Execution",
    desc: "Approved proposals are executed automatically through audited smart contracts without manual intervention.",
    bgImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
  },
  {
    icon: <Eye />,
    title: "Full Transparency",
    desc: "Every proposal, vote count, and execution result is publicly accessible for complete visibility.",
    bgImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    icon: <Database />,
    title: "On-Chain Verification",
    desc: "All governance actions can be independently verified directly on the blockchain by any participant.",
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
  },
  {
    icon: <UserCheck />,
    title: "Sybil-Resistant Voting",
    desc: "Token-weighted governance reduces spam and fake participation, ensuring meaningful voting power.",
    bgImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
  },
  {
    icon: <CheckCircle />,
    title: "Audit-Friendly Design",
    desc: "Governance contracts are designed for easy auditing, enabling ongoing security reviews and community trust.",
    bgImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
];

const VotingSystem = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      <section className="relative min-h-[50vh] overflow-hidden bg-gradient-to-br from-black via-indigo-950/40 to-black pt-32 text-white">
        {/* BACKGROUND GIF */}
        <div
          className="absolute right-0 top-0 h-full w-full lg:w-1/2 opacity-70 pointer-events-none"
          style={{
            backgroundImage: `url(${votingGif})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            backgroundSize: "contain",
            maskImage: "linear-gradient(to left, black 40%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 40%, transparent 100%)",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 px-6 lg:px-32 max-w-4xl flex flex-col gap-6">
          <h2 className="text-3xl sm:text-5xl">
            Decentralized Voting System
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            SPH holders participate directly in network decisions using secure
            on-chain voting. Every vote helps guide upgrades, policies, and the
            future direction of SPH.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6 lg:px-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-14">
          How Voting Works
        </h2>

        <div className="space-y-12">
          {/* Card 1 */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-300 p-10">
            {/* Visual */}
            <div className="flex-1 flex justify-center">
              <video
                src={token_voting}
                autoPlay
                loop
                muted
                playsInline
                className="
                    w-72 sm:w-96 lg:w-[220px]
                    opacity-60
                    pointer-events-none
                    [mask-image:radial-gradient(circle,black_55%,transparent_85%)]
                    [-webkit-mask-image:radial-gradient(circle,black_55%,transparent_85%)]
                    "
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Token-weighted Voting
              </h3>
              <p className="text-gray-500 max-w-md mb-2">
                Voting power is calculated based on the total SPH token balance
                at the time of the vote snapshot. Holders with larger stakes
                have greater influence, while quorum rules maintain
                decentralization.
              </p>
              <p className="text-gray-500 max-w-md">
                Token-weighted voting ensures governance decisions reflect
                economic stake in the network. By tying voting power to
                ownership, SPH maintains a secure and manipulation-resistant
                governance model.
              </p>
            </div>
          </div>

          {/* Card 2 (reverse) */}
          <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between gap-10 rounded-2xl bg-gradient-to-br from-gray-300 to-gray-100 p-10">
            <div className="flex-1 flex justify-center">
              <img
                src="https://m.foolcdn.com/media/dubs/original_images/Blockchain_Cryptocurrency_Bitcoin_Ethereum_Litecoin_Ripple_Getty.jpg"
                alt="Blockchain visual"
                className="
                    w-82
                    opacity-80
                    pointer-events-none
                    [mask-image:radial-gradient(circle,black_60%,transparent_80%)]
                    [-webkit-mask-image:radial-gradient(circle,black_60%,transparent_80%)]
                "
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Snapshot / On-chain Execution
              </h3>
              <p className="text-gray-500 max-w-md mb-2">
                Votes are securely recorded via snapshot mechanisms or executed
                directly on-chain for full transparency.
              </p>
              <p className="text-gray-500 max-w-md">
                Token-weighted voting ensures governance decisions reflect
                economic stake in the network. By tying voting power to
                ownership, SPH maintains a secure and manipulation-resistant
                governance model.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-300 p-10 ">
            <div className="flex-1 flex justify-center">
              <img
                src={quorum}
                alt="Quorum visualization"
                className="
                    w-72
                    opacity-85
                    pointer-events-none
                    relative
                    drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]
                "
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Voting Period & Quorum
              </h3>
              <p className="text-gray-500 max-w-md mb-2">
                Each proposal has a fixed voting window and minimum quorum to
                ensure legitimate decision-making.
              </p>
              <p className="text-gray-500 max-w-md">
                Token-weighted voting ensures governance decisions reflect
                economic stake in the network. By tying voting power to
                ownership, SPH maintains a secure and manipulation-resistant
                governance model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Vote */}
      <section className="bg-gray-50 py-20 px-6 lg:px-24 text-black ">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
          Who Can Vote
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <VoteCard
            icon={<ShieldCheck />}
            title="Minimum Token Requirement"
            desc="Only wallets holding the required minimum SPH balance are eligible to participate in governance voting."
          />

          <VoteCard
            icon={<Wallet />}
            title="Wallet Connection"
            desc="Connect using supported wallets such as MetaMask or WalletConnect to securely cast your vote."
          />
        </div>
      </section>

      {/* Voting Lifecycle */}
      <section className="bg-white py-20 px-6 lg:px-24 text-black">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Voting Lifecycle
        </h2>
        <p className="mb-12 text-gray-500 text-base sm:text-lg">
          We’re building a decentralized future with an amazing group of people.
          We can’t wait for you to join us!
        </p>

        <div className="grid lg:grid-cols-2 gap-1 items-stretch">
          {/* LEFT – ACCORDION */}
          <div className="space-y-1">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`cursor-pointer rounded-2xl transition-all duration-300 ${
                  active === index
                    ? "bg-gray-300/60"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center justify-between px-6 py-5 ">
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <span className="text-gray-500">
                    {active === index ? "−" : "+"}
                  </span>
                </div>

                {active === index && (
                  <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT – IMAGE */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={steps[active].image}
              alt={steps[active].title}
              className="
              w-full h-full object-cover
              opacity-90
              [mask-image:radial-gradient(circle,black_60%,transparent_100%)]
              [-webkit-mask-image:radial-gradient(circle,black_60%,transparent_100%)]
            "
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-black/80" />
          </div>
        </div>
      </section>

      {/* Security & Transparency */}
      <section className="bg-gray-50 py-20 px-6 lg:px-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-12">
          Security & Transparency
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {securityFlipCards.map((card, index) => (
            <FlipCard key={index} {...card} />
          ))}
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-white py-12 px-6 sm:px-12 flex flex-col items-center text-center space-y-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-black">
          Participate in Governance
        </h2>

        {/* Subheading */}
        <p className="text-gray-500 text-base sm:text-lg max-w-2xl">
          Connect your wallet and have your say in key decisions. Stay updated
          with active votes and make your voice count.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
              Connect Wallet
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <CustomButton text="View Active Votes" />
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

const FlipCard = ({ icon, title, desc, bgImage }) => {
  return (
    <div className="group perspective-[1200px]">
      <div
        className="
          relative h-64 w-full
          transition-transform duration-700
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        "
      >
        {/* FRONT */}
        <div
          className="
            absolute inset-0
            rounded-2xl
            bg-gradient-to-br bg-white
            p-8
            flex flex-col justify-center
            backface-hidden
          "
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-black">{title}</h3>
        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0
            rounded-3xl
            overflow-hidden
            backface-hidden
            [transform:rotateY(180deg)]
          "
        >
          {/* Background image */}
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full items-center justify-center p-8 text-center">
            <div className="flex items-center justify-center text-indigo-400">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm leading-relaxed text-gray-200">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const VoteCard = ({ icon, title, desc }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)]">
      {/* Animated gradient sweep */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700
        bg-[linear-gradient(120deg,transparent_30%,rgba(99,102,241,0.15)_50%,transparent_70%)]
        translate-x-[-100%] group-hover:translate-x-[100%]"
      />

      {/* Icon */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>

      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>

      {/* Border glow */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10 group-hover:ring-indigo-500/30 transition" />
    </div>
  );
};

export default VotingSystem;

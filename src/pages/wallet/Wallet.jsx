import NewsletterSignup from "@/components/Community/NewsletterSignup";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const featureSections = [
  {
    title: "Compliance In A Box",
    highlight: "token extensions",
    description:
      "Solana's enterprise-ready token extensions make it easy to achieve regulatory compliance and advanced capabilities, no matter where you operate. Turn your wallet into a universal service hub that complies with complex, changing regulations—with all the benefits of blockchain.",
    points: [
      "Transfer Hooks let you enforce custom rules whenever a token moves between wallets.",
      "Confidential Transfers leverage ZK proofs to keep your transaction details private.",
      "Freeze and Seize an account’s token balance for law enforcement actions or token recovery, based on strict pre-programmed logic.",
    ],
    video:
      "https://cdn.builder.io/o/assets%2Fce0c7323a97a4d91bd0baa7490ec9139%2F90e8070ca6994080836ec5abe46a40e1%2Fcompressed?apiKey=ce0c7323a97a4d91bd0baa7490ec9139&token=90e8070ca6994080836ec5abe46a40e1&alt=media&optimized=true",
  },
  {
    title: "One-click Commerce",
    highlight: "Solana Pay, Solana Actions and Blinks ",
    description:
      "Access new forms of commerce, whether you’re most active online or IRL. Solana wallets can enable one-click interactions via QR codes or links, without third-party app involvement.",
    points: [
      "Solana Pay is an open payments framework that offers instant transactions, near-zero fees, and access to millions of merchants and consumers worldwide via Shopify.",
      "Solana Actions and Blinks let you turn any onchain transaction into a link that can be shared anywhere on the internet. ",
    ],
    video:
      "https://cdn.builder.io/o/assets%2Fce0c7323a97a4d91bd0baa7490ec9139%2F84b1a021d5e5400397b3ce5cd551a56c%2Fcompressed?apiKey=ce0c7323a97a4d91bd0baa7490ec9139&token=84b1a021d5e5400397b3ce5cd551a56c&alt=media&optimized=true",
  },
  {
    title: "Programmable Payments",
    highlight: "automation logic",
    description:
      "Move beyond static transfers with programmable payments that adapt to business logic, compliance rules, and user behavior in real time.",
    points: [
      "Recurring subscriptions with conditional execution.",
      "KYC-aware payouts and role-based permissions.",
      "Automated revenue splits and escrow workflows.",
    ],
    video:
      "https://cdn.builder.io/o/assets%2Fce0c7323a97a4d91bd0baa7490ec9139%2F90e8070ca6994080836ec5abe46a40e1%2Fcompressed?apiKey=ce0c7323a97a4d91bd0baa7490ec9139&token=90e8070ca6994080836ec5abe46a40e1&alt=media&optimized=true",
  },
  {
    title: "Feeless Transactions",
    highlight: "Octane",
    description:
      "Solana’s feepayer function lets builders sponsor transaction fees across a wide range of onchain interactions. The result? Easy onboarding and frictionless experiences for new and existing users alike.",
    points: [
      "Octane is a feeless transaction relayer that makes it easy to cover transaction costs on behalf of users, using any SPL token.",
    ],
    video:
      "https://cdn.builder.io/o/assets%2Fce0c7323a97a4d91bd0baa7490ec9139%2F0e2f08aacdc9463585517273101eae3a%2Fcompressed?apiKey=ce0c7323a97a4d91bd0baa7490ec9139&token=0e2f08aacdc9463585517273101eae3a&alt=media&optimized=true",
  },
  {
    title: "Simple, Secure Key Management",
    highlight: "Dynamic  Passkeys ",
    description:
      "Intuitive key management solutions on Solana eliminate the need for seed phrases, email verifications, and passwords. Swap out manual safeguards for more secure, seamless web3 experiences.",
    points: [
      "Exodus Passkeys let you access and transact across multiple web3 platforms via passwordless authentication—all through one secure, user-friendly interface.",
      "Dynamic offers a suite of tools for effortless wallet creation, login, and user ",
      "management. Non-custodial, passwordless, with one-click fiat-to-crypto onramps.",
    ],
    video:
      "https://cdn.builder.io/o/assets%2Fce0c7323a97a4d91bd0baa7490ec9139%2F30042b2227264383a694d37ebbaa0991%2Fcompressed?apiKey=ce0c7323a97a4d91bd0baa7490ec9139&token=30042b2227264383a694d37ebbaa0991&alt=media&optimized=true",
  },
];

const multiSigData = {
  title: "Advanced Multi-Signature Functionalities",
  description:
    "Solana’s multisig wallets give you the control, security, and automation needed to manage digital assets in any online environment.",
  points: [
    "Custom Signatures: Lock down your assets with customizable multisig approvals, so transactions are only executed when the right users sign off.",
    "Self-Executing Payments: Streamline operations by automating recurring payments like payroll, vendor payments, and token vesting schedules.",
    "Transaction Limits: Set daily spend thresholds with different signing requirements, from passkeys for small transfers to secondary sign-offs for larger transactions.",
    "DeFi Integration: Engage in wide-ranging DeFi activities, including swap tokens and yield farming—all within the backdrop of a secure multisig structure.",
  ],
};

const sectionsData = [
  {
    id: "build",
    heading: "Build",
    subheading:
      "Solana provides both new and experienced developers with everything they need to build their own custom wallet.",
    cards: [
      {
        title: "Just Getting Started?",
        description:
          "Solana’s Wallet Builder’s Starter Kit provides the foundational knowledge necessary to create your own Solana wallet.",
        cta: "Learn More",
        link: "#",
      },
      {
        title: "Unpack the Essentials",
        description:
          "The Solana Wallet Guide gives a simple overview of different wallet builds, including advanced features, clients, and development environments.",
        cta: "Learn More",
        link: "#",
      },
      {
        title: "Boost Your Build",
        description:
          "Kickstart your new build by launching through Backpack’s open-source codebase or another stand-alone wallet app.",
        cta: "Learn More",
        link: "#",
      },
    ],
  },

  {
    id: "buy",
    heading: "Buy",
    subheading:
      "Give users a seamless way to purchase digital assets directly within your wallet using trusted onramps.",
    cards: [
      {
        title: "Integrated Onramps",
        description:
          "Enable users to buy crypto directly using cards, bank transfers, or local payment methods.",
        cta: "Learn More",
        link: "#",
      },
      {
        title: "Global Coverage",
        description:
          "Support users across regions with localized fiat options and compliance-ready infrastructure.",
        cta: "Learn More",
        link: "#",
      },
      {
        title: "Optimized UX",
        description:
          "Reduce friction with fast checkout flows and transparent pricing.",
        cta: "Learn More",
        link: "#",
      },
    ],
  },

  {
    id: "develop",
    heading: "Developer Resources",
    subheading:
      "Ready to run your own Solana wallet? Here are a few example implementations to help you get started.",
    cards: [
      {
        title: "Hello World Wallet Guide",
        description:
          "An introduction to create a sapher wallet frontend using Tailwind nd CLI",
        cta: "Learn More",
        link: "#",
      },
      {
        title: "Global Coverage",
        description:
          "Support users across regions with localized fiat options and compliance-ready infrastructure.",
        cta: "Learn More",
        link: "#",
      },
      {
        title: "Optimized UX",
        description:
          "Reduce friction with fast checkout flows and transparent pricing.",
        cta: "Learn More",
        link: "#",
      },
    ],
  },
];

const Wallet = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <section className="relative h-[70vh] bg-gradient-to-br from-indigo-900 via-indigo-950/40 to-black flex items-center justify-center">
        <div className="text-white text-center space-y-6 max-w-3xl px-4">
          <h3 className="text-indigo-400 text-sm tracking-widest">WALLETS</h3>

          <h2 className="text-3xl md:text-6xl font-bold">
            Limitless Customizations, Connections, & Control
          </h2>

          <p className="text-xl text-gray-3400 font-semibold">
            Welcome to a more programmable, powerful way to blockchain.
          </p>

          <p className="text-base text-gray-300">
            Sapher wallets offer more than custody – they’re the gateway to web3
            apps and services. Create a custom solution or amplify your
            offerings with an existing Solana implementation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              className={`relative px-6 py-3 bg-indigo-600 text-white text-sm rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:cursor-pointer hover:shadow-indigo-500/40 transform hover:scale-105`}
            >
              {/* Text + Icon */}
              <span className="relative z-10 flex items-center gap-1">
                Start Building Today
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => navigate("/sapher-wallets")}
              className={`relative px-6 py-3 bg-transparent border border-white text-white text-sm rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:cursor-pointer hover:shadow-indigo-500/40 transform hover:scale-105`}
            >
              {/* Text + Icon */}
              <span className="relative z-10 flex items-center gap-1">
                Choose a Wallet
                {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div
          className="relative max-w-6xl mx-auto  rounded-2xl p-10 md:p-14 
                  border-b-2 border-indigo-500 
                  shadow-[0_20px_40px_-12px_rgba(99,102,241,0.45)]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-start mb-6 text-black pb-3 border-b">
            Unlock Programmable Money
          </h2>

          <p className="text-base md:text-lg text-gray-500 text-start leading-relaxed  mx-auto">
            Wallets built on Solana don’t just safeguard your assets—they
            unleash full programmability. Automate an open-ended array of
            advanced wallet functionalities, including subscription services,
            KYC rules, loyalty programs, and more.
          </p>
        </div>
      </section>

      <section className="bg-white py-22">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {featureSections.slice(0, 4).map((item, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center  ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                    {item.title}
                  </h2>

                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Solana’s enterprise-ready{" "}
                    <span className="text-indigo-600 font-medium">
                      {item.highlight}
                    </span>{" "}
                    {item.description.replace(item.highlight, "")}
                  </p>

                  <ul className="space-y-4">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-gray-400">
                        <span className="mt-2 h-2 w-2 rounded-full bg-indigo-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center">
                  <div
                    className="relative rounded-3xl border border-indigo-500/40 p-2
               shadow-[0_0_60px_-10px_rgba(99,102,241,0.45)]"
                  >
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-2xl w-full max-w-md max-h-[580px] object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div
          className="relative max-w-6xl mx-auto  rounded-2xl p-10 md:p-14 
                  border-b-2 border-indigo-500 
                  shadow-[0_20px_40px_-12px_rgba(99,102,241,0.45)]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-start mb-6 text-black pb-3 border-b">
            Unrivaled Security
          </h2>

          <p className="text-base md:text-lg text-gray-500 text-start leading-relaxed  mx-auto">
            Solutions offered by Sapher wallets offer unrivaled security and
            provide the end user with a seamless, integrated web3 experience.
          </p>
        </div>
      </section>

      <section className="bg-white py-22">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {featureSections.slice(-1).map((item, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center  ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                    {item.title}
                  </h2>

                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Solana’s enterprise-ready{" "}
                    <span className="text-indigo-600 font-medium">
                      {item.highlight}
                    </span>{" "}
                    {item.description.replace(item.highlight, "")}
                  </p>

                  <ul className="space-y-4">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-gray-400">
                        <span className="mt-2 h-2 w-2 rounded-full bg-indigo-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center">
                  <div
                    className="relative rounded-3xl border border-indigo-500/40 p-2
               shadow-[0_0_60px_-10px_rgba(99,102,241,0.45)]"
                  >
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-2xl w-full max-w-md max-h-[580px] object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}

          <div className="max-w-6xl space-y-6 px-18">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              {multiSigData.title}
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed">
              {multiSigData.description}
            </p>

            <ul className="space-y-4 pl-8">
              {multiSigData.points.map((point, index) => (
                <li key={index} className="flex gap-3 text-gray-600">
                  <span className="mt-2 h-2 w-2 rounded-full bg-indigo-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div
          className="relative max-w-6xl mx-auto  rounded-2xl p-10 md:p-14 
                  border-b-2 border-indigo-500 
                  shadow-[0_20px_40px_-12px_rgba(99,102,241,0.45)]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-start mb-6 text-black pb-3 border-b">
            Powered By the Sapher Virtual Machine
          </h2>

          <p className="text-base md:text-lg text-gray-500 text-start leading-relaxed  mx-auto">
            The SPH provides the underlying infrastructure for Sapher's secure,
            high-performance wallets.
          </p>
        </div>

        <div className="flex justify-center pt-12 px-42">
          <ul className="space-y-4 pl-8">
            {multiSigData.points.map((point, index) => (
              <li key={index} className="flex gap-3 text-gray-600">
                <span className="mt-2 h-2 w-2 rounded-full bg-indigo-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-24 space-y-32">
        {sectionsData.slice(0,2).map((section) => (
          <div key={section.id} className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-2">
              {section.heading}
            </h2>

            {/* Subheading */}
            <p className="text-gray-400 max-w-3xl mb-16 text-sm sm:text-base">
              {section.subheading}
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.cards.map((card, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl 
                           p-8
                           border border-white/10 border-b-2 border-b-indigo-500/60
                           shadow-[inset_0_-1px_0_rgba(168,85,247,0.35)]
                           transition-all duration-300
                           hover:shadow-[inset_0_-14px_18px_-6px_rgba(99,102,241,0.45)]
                           "
                >
                  <h3 className="text-2xl font-medium text-black mb-4">
                    {card.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    {card.description}
                  </p>

                  <button
                    className="inline-flex items-center rounded-full
                                   bg-indigo-600 px-6 py-2 text-sm font-medium text-white
                                   transition hover:bg-indigo-500"
                  >
                    {card.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div
          className="relative max-w-6xl mx-auto  rounded-2xl p-10 md:p-14 
                  shadow-md bg-gray-50 flex flex-col items-center justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black">
            Want to explore more options?
          </h2>
          <button className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-2 text-sm font-medium text-white ransition hover:bg-indigo-500">
            Compare Wallets
          </button>
        </div>

        {sectionsData.slice(-1).map((section) => (
          <div key={section.id} className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-2">
              {section.heading}
            </h2>

            {/* Subheading */}
            <p className="text-gray-400 max-w-3xl mb-16 text-sm sm:text-base">
              {section.subheading}
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.cards.map((card, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl 
                           p-8
                           border border-white/10 border-b-2 border-b-indigo-500/60
                           shadow-[inset_0_-1px_0_rgba(168,85,247,0.35)]
                           transition-all duration-300
                           hover:shadow-[inset_0_-14px_18px_-6px_rgba(99,102,241,0.45)]
                           "
                >
                  <h3 className="text-2xl font-medium text-black mb-4">
                    {card.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    {card.description}
                  </p>

                  <button
                    className="inline-flex items-center rounded-full
                                   bg-indigo-600 px-6 py-2 text-sm font-medium text-white
                                   transition hover:bg-indigo-500"
                  >
                    {card.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <NewsletterSignup />
    </div>
  );
};

export default Wallet;

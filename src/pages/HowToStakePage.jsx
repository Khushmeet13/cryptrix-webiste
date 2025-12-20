import React from "react";
import { CheckCircle, Lock, ArrowRight, ShieldCheck, Info } from "lucide-react";
import UseCaseFAQ from "@/components/FAQSection";
import NewsletterSignup from "@/components/Community/NewsletterSignup";

const stakingSteps = [
  {
    title: "Connect Your Wallet",
    desc: "Use a supported wallet like Phantom or Solflare to connect to SapherChain.",
    icon: <Lock size={24} className="text-indigo-600" />,
  },
  {
    title: "Select Amount",
    desc: "Choose the number of SPH coins you want to stake. Minimum staking applies.",
    icon: <CheckCircle size={24} className="text-indigo-600" />,
  },
  {
    title: "Confirm Transaction",
    desc: "Approve the staking transaction and pay the small network fee.",
    icon: <ArrowRight size={24} className="text-indigo-600" />,
  },
  {
    title: "Earn Rewards",
    desc: "Your SPH coins are locked. Monitor your rewards and unstake when eligible.",
    icon: <ShieldCheck size={24} className="text-indigo-600" />,
  },
];

const securityTips = [
  "Never share your wallet private key.",
  "Double-check the URL before connecting your wallet.",
  "Only use official SapherChain apps and dApps.",
  "Monitor your staking rewards regularly.",
];

const faqs = [
  {
    q: "What is the minimum staking amount?",
    a: "The minimum amount is 100 SPH coins. You cannot stake less than this amount.",
  },
  {
    q: "Can I unstake early?",
    a: "You can unstake anytime, but early unstaking may reduce your rewards.",
  },
  {
    q: "How often are staking rewards distributed?",
    a: "Rewards are distributed every 24 hours and can be claimed directly from your wallet.",
  },
  {
    q: "What is the minimum staking amount?",
    a: "The minimum amount is 100 SPH coins. You cannot stake less than this amount.",
  },
  {
    q: "Can I unstake early?",
    a: "You can unstake anytime, but early unstaking may reduce your rewards.",
  },
  {
    q: "How often are staking rewards distributed?",
    a: "Rewards are distributed every 24 hours and can be claimed directly from your wallet.",
  },
];

const HowToStakePage = () => {
  return (
    <div className="w-full">
      {/* Top Section */}
      <section className="relative h-[30vh] bg-gradient-to-br from-black via-indigo-950/40 to-black flex flex-col items-center justify-center pt-12 ">
        <h1 className="text-white text-3xl md:text-5xl font-semibold mb-4">
          How to Stake SPH Coins
        </h1>
        <p className="text-gray-400 text-lg">
          Learn how to stake your SPH coins, earn rewards, and participate in
          network governance.
        </p>
      </section>

      {/* Requirements Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {/* Heading */}
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">
              Staking Requirements
            </h2>
            <p className="text-gray-500 mt-2">
              Make sure you meet the following requirements before staking your
              SPH coins
            </p>
          </div>

          {/* Requirements Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Wallet */}
            <div className="group bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-600/10 text-indigo-600 p-3 rounded-xl">
                  <Lock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Supported Wallet
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    Use trusted wallets like Phantom or Solflare to connect
                    securely.
                  </p>
                </div>
              </div>
            </div>

            {/* Minimum Stake */}
            <div className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/10 text-blue-600 p-3 rounded-xl">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Minimum Stake
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    You must stake at least <strong>100 SPH coins</strong> to
                    participate.
                  </p>
                </div>
              </div>
            </div>

            {/* Internet */}
            <div className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/10 text-blue-600 p-3 rounded-xl">
                  <ArrowRight size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Internet Access
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    A stable internet connection is required to submit
                    transactions.
                  </p>
                </div>
              </div>
            </div>

            {/* KYC */}
            <div className="group bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-600/10 text-indigo-600 p-3 rounded-xl">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Optional KYC
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    Some regions may require identity verification for
                    compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Note */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 text-sm text-indigo-900">
            <strong>Note:</strong> Always ensure you are using the official
            SapherChain staking interface before connecting your wallet.
          </div>
        </div>
      </section>

      {/* Step-by-Step Staking Guide */}
      <section className="bg-gray-50 py-22">
        <div className="relative max-w-7xl mx-auto space-y-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6">
            Step-by-Step Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stakingSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start gap-3 hover:shadow-2xl transition"
              >
                <div className="bg-indigo-100 rounded-full p-3">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Dashboard */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {/* Heading */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">
              Rewards Dashboard
            </h2>
            <p className="text-gray-500 mt-2">
              Track your staked SPH coins, rewards growth, and annual yield
            </p>
          </div>

          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Staked */}
            <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl p-6 shadow-sm">
              <p className="text-gray-500">Total Staked</p>
              <p className="text-3xl font-bold text-indigo-900 mt-2">
                1,500 <span className="text-lg font-medium">SPH</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Locked in network security
              </p>
            </div>

            {/* Rewards */}
            <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100  rounded-2xl p-6 shadow-sm">
              <p className="text-gray-500">Rewards Earned</p>
              <p className="text-3xl font-bold text-indigo-900 mt-2">45 SPH</p>
              <p className="text-sm text-gray-400 mt-1">
                Updated every 24 hours
              </p>
            </div>

            {/* APY */}
            <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100  rounded-2xl p-6 shadow-sm">
              <p className="text-gray-500">Current APY</p>
              <p className="text-3xl font-bold text-indigo-900 mt-2">12%</p>
              <p className="text-sm text-gray-400 mt-1">
                Variable based on network
              </p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Rewards Growth Bar Chart */}
            <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-900 mb-6">
                Rewards Growth (Last 7 Days)
              </h3>

              <div className="flex items-end gap-4 h-40">
                {[10, 18, 25, 30, 36, 40, 45].map((value, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div
                      className="w-4 rounded-sm bg-indigo-600 transition-all"
                      style={{ height: `${value * 2}px` }}
                    />
                    <span className="text-xs text-gray-500">Day {i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* APY Progress Ring */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                APY Utilization
              </h3>

              <div className="relative w-40 h-40 rounded-full bg-indigo-600 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(#6366f1 0% 12%, #e5e7eb 12% 100%)",
                  }}
                />
                <div className="relative bg-white w-28 h-28 rounded-full flex items-center justify-center shadow">
                  <span className="text-2xl font-bold text-indigo-600">
                    12%
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                Current staking yield compared to max APY
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition">
              Manage Staking
            </button>
          </div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">
              Security Best Practices
            </h2>
            <p className="text-gray-600 mt-2">
              Follow these essential guidelines to keep your SPH coins and
              wallet safe while staking.
            </p>
          </div>

          {/* Checklist */}
          <div className="relative border-l-2 border-indigo-200 pl-8 space-y-6">
            {securityTips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white text-sm font-semibold mt-1">
                  {idx + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>

          {/* Warning Box */}
          <div className="mt-12 bg-gray-100 border border-gray-200 rounded-xl p-4">
            <div className="flex items-start gap-2">
              <div className=" text-yellow-700 rounded-lg">
                <Info size={20} />
              </div>
              <p className="text-sm text-yellow-800 leading-relaxed">
                <strong>Important:</strong> SapherChain will never ask for your
                private keys, recovery phrase, or wallet passwords. If anyone
                does, it is a scam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <UseCaseFAQ faqs={faqs} bgColor="bg-white" />
      <NewsletterSignup />
    </div>
  );
};

export default HowToStakePage;

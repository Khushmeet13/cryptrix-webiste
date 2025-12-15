import {
  ArrowRight,
  CheckCircle,
  Shield,
  Gift,
  Lock,
  Vote,
  ArrowUpRight,
  Coins,
} from "lucide-react";
import React from "react";
import CustomButton from "@/components/Common/CustomButton";

const getGovernanceData = [
  {
    title: "Vote in Elections",
    desc: "Token holders can stake assets to participate in on-chain elections and help select network representatives.",
    icon: CheckCircle,
  },
  {
    title: "Secure the Network",
    desc: "Elected validators produce blocks and maintain network security through a transparent DPoS mechanism.",
    icon: Shield,
  },
  {
    title: "Share Block Rewards",
    desc: "Validators earn block rewards which are shared with voters based on participation ratios.",
    icon: Gift,
  },
];

const Staking = () => {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-950/40 to-black pt-20 pb-10">
        <div className="px-6 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl sm:text-5xl text-white">SPH Staking</h2>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl">
              TRON Network adopts the DPoS consensus mechanism. TRX holders can
              contribute to TRON’s governance while earning an APY of up to{" "}
              <span className="text-white font-medium">3.32%</span>.
            </p>

            <button
              type="button"
              className="
                inline-flex w-fit items-center gap-1
                px-6 py-3
                bg-black text-white text-sm
                rounded-full
                transition-all duration-300
                hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30
              "
            >
              Connect Wallet
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="https://media.istockphoto.com/id/2217121589/photo/gen-z-female-investor-working-on-defi-projects-crypto-staking-research-decentralized-finance.webp?a=1&b=1&s=612x612&w=0&k=20&c=ikP47Hz2pAGk7K3XEi5WLeyGYHGTJDVzmo_UwSLUEcs="
              alt="Staking"
              className="
                w-full max-w-md
                h-64 sm:h-72 md:h-80
                object-cover
                opacity-80
                [mask-image:linear-gradient(to_left,transparent,black_15%,black_75%,transparent)]
                [-webkit-mask-image:linear-gradient(to_left,transparent,black_15%,black_75%,transparent)]
                
                "
            />
          </div>
        </div>
      </section>

      <section className="relative w-full flex justify-center">
        <div
          className="bg-gray-100 w-full shadow-xl"
          style={{
            marginTop: window.innerWidth < 504 ? "-6.5rem" : undefined,
          }}
        >
          {/* Stats Grid */}
          <div className="py-0 lg:py-4 lg:px-6 px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
              <StatBox label="SPH Staked" value="349,751,624" />
              <StatBox
                label="SPH Staking Rate"
                value="48.24%"
                isSecond={true}
              />
              <StatBox
                label="Cumulative TRX Block Rewards"
                value="22,956,679,237"
              />
              <StatBox label="Highest APY" value="3.32 %" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://media.istockphoto.com/id/1716489243/photo/business-man-uses-a-computer-and-house-law-icons-on-the-dashboard-screen-to-study-or-search.jpg?s=612x612&w=0&k=20&c=5YZtlTDUigwTExn7FiLDsY-2GpIxrKilzlDBp-Rw4j4="
              alt="Governance Model"
              className="w-full max-w-md object-contain rounded-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-10">
            {/* Heading */}
            <div>
              <h2 className="text-2xl sm:text-3xl text-black font-semibold">
                Governance Model
              </h2>
              <p className="mt-2 text-gray-500 text-sm sm:text-base">
                Open, transparent, and fully on-chain
              </p>
            </div>

            {/* Points */}
            <div className="flex flex-col gap-8">
              {getGovernanceData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <Icon className="w-6 h-6 mt-1 text-indigo-600" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {/* Top Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">
              Contribute to Governance
            </h2>
            <p className="mt-3 text-gray-500 text-sm sm:text-base">
              Get voting rewards and free resources in return
            </p>
          </div>

          {/* Sub heading */}
          <div className="flex items-center gap-3 mb-10">
            <h3 className="text-xl font-semibold text-gray-900">
              A More Flexible and Efficient Staking Mechanism
            </h3>
            <span className="px-2 py-0.5 text-xs font-medium bg-indigo-400 text-white rounded">
              2.0
            </span>
          </div>

          {/* Cards Wrapper */}
          <div className="flex flex-col gap-8">
            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {/* Left Big Card */}
              <div className="bg-white rounded-2xl p-10 shadow-sm">
                {/* Heading */}
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                  Get SPH Power for Governance
                </h4>

                <p className="text-gray-600 max-w-xl mb-12">
                  By staking SPH tokens, users obtain SPH Power which can be
                  used to participate in governance voting and earn protocol
                  rewards.
                </p>

                {/* Flow Chart */}
                <div className="flex flex-col gap-14">
                  {/* Flow 1 */}
                  <div className="flex items-center justify-between">
                    {/* Left */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                        <Lock className="w-6 h-6 text-indigo-600" />
                      </div>
                      <span className="font-medium text-gray-900">
                        Stake SPH
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-sm">Get SPH Power</span>
                      <ArrowRight />
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                        <Vote className="w-6 h-6 text-indigo-600" />
                      </div>
                      <span className="font-medium text-gray-900">
                        SPH Power
                      </span>
                    </div>
                  </div>

                  {/* Flow 2 */}
                  <div className="flex items-center justify-between">
                    {/* Left */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                        <Vote className="w-6 h-6 text-indigo-600" />
                      </div>
                      <span className="font-medium text-gray-900">
                        SPH Power
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-sm">
                        Vote on proposals & validators
                      </span>
                      <ArrowRight />
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                        <Coins className="w-6 h-6 text-indigo-600" />
                      </div>
                      <span className="font-medium text-gray-900">
                        Governance Rewards
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Right Card 1 */}
                <div className="bg-white rounded-2xl p-10 shadow-sm relative">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Get Resources for Free Transactions
                  </h4>
                  <p className="text-gray-600">
                    By staking TRX, you can obtain free resources on the network
                    to cover the fee of transactions. The resources used will
                    dynamically recover after a certain period.
                  </p>

                  <ArrowUpRight className="absolute bottom-6 right-6 text-gray-400" />
                </div>

                {/* Right Card 2 */}
                <div className="bg-white rounded-2xl p-10 shadow-sm relative">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Delegate Idle Resources to Others
                  </h4>
                  <p className="text-gray-600">
                    You may delegate idle resources to others and can reclaim
                    the resources anytime.
                  </p>

                  <ArrowUpRight className="absolute bottom-6 right-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-8xl mx-auto px-6 lg:px-16">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-12">
            Calculate Your Staking Rewards
          </h2>

          {/* Card */}
          <div className="bg-gray-50 rounded-3xl p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Left */}
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-900 mb-4">
                  I want to stake
                </p>

                {/* Input */}
                <div className="flex items-center justify-between border rounded-xl px-6 py-4 max-w-xl">
                  <input
                    type="text"
                    defaultValue="10,000"
                    className="text-2xl font-semibold outline-none w-full"
                  />

                  <div className="flex items-center gap-2 ml-4">
                    <img
                      src="/sapherchain-favicon-light.png"
                      alt="TRX"
                      className="w-6 h-6"
                    />
                    <span className="font-medium">SPH</span>
                  </div>
                </div>

                {/* Rewards */}
                <p className="mt-6 text-gray-700">
                  Est. Rewards{" "}
                  <span className="text-indigo-600 font-semibold">
                    +996.90 SPH
                  </span>
                </p>

                {/* Note */}
                <p className="mt-6 text-sm text-gray-400 max-w-xl">
                  * The estimated TRX rewards here are calculated based on the
                  staking duration selected and the TRX amount entered. The
                  actual APY and TRX rewards may vary.
                </p>
              </div>

              {/* Right */}
              <div className="flex-1 flex flex-col items-start">
                {/* APY */}
                <p className="text-lg text-gray-900 mb-2">Highest APY</p>
                <p className="text-3xl font-semibold text-indigo-600 ">3.32%</p>

                {/* Chart */}
                <div className="w-full max-w-md">
                  <svg viewBox="0 0 400 160" className="w-full">
                    {/* Grey line */}
                    <polyline
                      points="20,120 100,110 180,95 260,75 340,45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />

                    {/* Active line */}
                    <polyline
                      points="20,120 100,110 180,95 260,75"
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="3"
                    />

                    {/* Points */}
                    {[100, 180, 260].map((x, i) => (
                      <g key={i}>
                        <circle
                          cx={x}
                          cy={[110, 95, 75][i]}
                          r="5"
                          fill="#fff"
                          stroke="#4f46e5"
                          strokeWidth="2"
                        />
                        <line
                          x1={x}
                          y1={[110, 95, 75][i]}
                          x2={x}
                          y2="130"
                          stroke="#27227fff"
                          strokeDasharray="4"
                        />
                      </g>
                    ))}
                  </svg>

                  {/* X labels */}
                  <div className="flex justify-between text-sm text-gray-400 px-2 mt-2">
                    <span>1Y</span>
                    <span>2Y</span>
                    <span className="text-indigo-600 font-medium border border-indigo-600 rounded-full px-3">
                      3Y
                    </span>
                    <span>4Y</span>
                    <span>5Y</span>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA */}
            <div className="flex justify-center mt-10">
              <button className="w-64 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-900 transition">
                Stake Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            Ready to Participate in Governance?
          </h2>

          {/* Sub text */}
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            Stake your SPH tokens, earn rewards, and help shape the future of
            the Sapher ecosystem.
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
              Stake SPH Now
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <CustomButton text="View Governance" />
          </div>
        </div>
      </section>
    </div>
  );
};

const StatBox = ({ label, value, isSecond }) => (
  <div
    className={`
    py-4 lg:py-0 px-4 text-center
    border-b border-gray-200
    lg:border-b-0
    last:border-r-0 ${isSecond ? "border-r-0 lg:border-r" : "sm:border-r "}
  `}
  >
    <p className="text-gray-400 mt-2 text-sm">{label}</p>
    <h3 className="text-2xl font-medium text-black">{value}</h3>
  </div>
);

export default Staking;

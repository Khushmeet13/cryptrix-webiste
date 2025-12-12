export const defiUseCase = {
  title: "DeFi",
  stats: [
    {
      label: "Total Value Locked",
      value: "$46.2 Billion",
      unit: "",
      gradient: "from-indigo-200 to-blue-200",
    },
    {
      label: "Verified Wallets",
      value: "9.7 Million",
      unit: "",
      gradient: "from-gray-50 to-gray-100",
    },
    {
      label: "Protocols Supported",
      value: "180+",
      unit: "",
      gradient: "from-indigo-200 to-blue-200",
    },
  ],

  industries: [
    {
      title: "Lending Protocols",
      img: "https://images.unsplash.com/photo-1634228932781-af5c387d73c0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fExlbmRpbmclMjBQcm90b2NvbHN8ZW58MHx8MHx8fDA%3D",
    },
    { title: "DEXs", img: "https://media.istockphoto.com/id/1391259252/photo/dex-decentralized-exchange-peer-to-peer-crypto-transaction-trading.webp?a=1&b=1&s=612x612&w=0&k=20&c=OfNSn6qUMZwAY_G-qMTf2AWvAGc6cfT3aRr28EP97mM=" },
    {
      title: "Yield Aggregators",
      img: "https://media.istockphoto.com/id/2152714955/photo/a-man-touches-a-transparent-screen-on-which-a-world-map-is-displayed-along-which-blue-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=tj2e61WLUlWEVZ_CdgWzD618Z-mbBDmFcxtzRH3Pcc0=",
    },
    {
      title: "Stablecoin Platforms",
      img: "https://media.istockphoto.com/id/2203817186/photo/the-idea-of-using-stablecoins-in-the-financial-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=OXtHi306K6I6gqdl0fsOeHP2RMMWGsGILY4F3ZQ5Ljw=",
    },
  ],

  featuresTitle: "Powering the Future of Open Finance",
  features: [
    {
      title: "Secure Wallet Risk Scoring",
      text: "Sapher analyzes wallet history, on-chain behavior, and identity trust markers to prevent Sybil attacks and malicious activity in DeFi platforms.",
    },
    {
      title: "Rug Pull & Scam Prevention",
      text: "Identify risky project creators and verify teams before they launch new protocols or liquidity pools.",
    },
    {
      title: "Verified Lending & Borrowing",
      text: "Ensure borrowers are verified users, reducing defaults and malicious multi-account attacks on lending protocols.",
    },
    {
      title: "AML Compliance for DeFi",
      text: "Enable privacy-preserving AML checks for high-value transactions, yield platforms, and institutional integrations.",
    },
    {
      title: "Bot-Free Token Launches",
      text: "Sapher reduces sniping, automated bot trading, and multi-wallet farming during token launches or IDOs.",
    },
    {
      title: "Seamless User Onboarding",
      text: "Users verify identity once and interact across multiple DeFi platforms without repeated KYC steps.",
    },
  ],

  // =========================
  // ⭐ DEFI PROTOCOLS (DUMMY DATA)
  // =========================
  tabelTitle: "Top DeFi Protocols Using Sapher",
  tableData: [
    { name: "LendSphere", tvl: 1245.55, holders: 15240 },
    { name: "YieldMatrix", tvl: 987.11, holders: 10980 },
    { name: "LiquidityX", tvl: 843.29, holders: 8720 },
    { name: "StableFlow", tvl: 721.94, holders: 6430 },
    { name: "DefiPrime", tvl: 610.73, holders: 5900 },
    { name: "VaultWave", tvl: 489.28, holders: 4301 },
    { name: "PoolNexus", tvl: 371.88, holders: 3095 },
    { name: "BondChain", tvl: 259.44, holders: 1784 },
    { name: "SwapVerse", tvl: 139.62, holders: 960 },
    { name: "FlowDEX", tvl: 88.71, holders: 578 },
  ],

  // =========================
  // ⭐ DEFI FAQ
  // =========================
  faq: [
    {
      q: "How does Sapher reduce Sybil attacks in DeFi?",
      a: "Sapher verifies users and scores wallet behavior to detect multi-account setups and malicious actors.",
    },
    {
      q: "Does Sapher run verification on-chain?",
      a: "Identity checks run privately off-chain, while risk proofs can be anchored on-chain for transparency.",
    },
    {
      q: "Can Sapher prevent bot attacks during token launches?",
      a: "Yes. Sapher identifies bot-like or automated trading behavior, protecting IDOs and liquidity events.",
    },
    {
      q: "Does Sapher store wallet or transaction data?",
      a: "No. Sapher never stores raw wallet data — only encrypted trust signals.",
    },
    {
      q: "Is Sapher useful for DeFi lending protocols?",
      a: "Yes. Verified borrowers reduce loan defaults and improve protocol security.",
    },
    {
      q: "Does Sapher support AML requirements?",
      a: "Sapher enables privacy-friendly AML checks for institutional DeFi integrations.",
    },
    {
      q: "Can DeFi apps customize verification rules?",
      a: "Absolutely. Protocols can configure trust thresholds, wallet flags, and risk levels.",
    },
    {
      q: "Is Sapher suitable for large DeFi ecosystems?",
      a: "Yes. Sapher scales globally with real-time verification even under high network load.",
    },
  ],
};

export const nftsUseCase = {
  title: "Nfts",
  stats: [
    {
      label: "Minted NFTs",
      value: "420 Million",
      unit: "",
      gradient: "from-indigo-200 to-blue-200",
    },
    {
      label: "Active Creators",
      value: "1.1 Million",
      unit: "",
      gradient: "from-gray-50 to-gray-100",
    },
    {
      label: "Trading Volume",
      value: "$8.4 Billion",
      unit: "",
      gradient: "from-indigo-200 to-blue-200",
    },
  ],

  industries: [
    {
      title: "Digital Art",
      img: "https://media.istockphoto.com/id/1081869356/photo/taking-on-the-late-shift-with-true-dedication.webp?a=1&b=1&s=612x612&w=0&k=20&c=2fB4km8-W3elF6qr9pUhV8nDwARZLLiWorjnjE5oq-Y=",
    },
    {
      title: "Collectibles",
      img: "https://media.istockphoto.com/id/1266858252/photo/anonymous-businesswoman-analyzing-statistical-business-reports-on-her-tablet-pc-at-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=54PpOloycemjbX7LtoSdt2nWeRSDQZZRdGWF7Ksm2eQ=",
    },
    {
      title: "Music NFTs",
      img: "https://images.unsplash.com/photo-1614848788803-295f43145cfd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TXVzaWMlMjBORlRzJTIwZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Membership Passes",
      img: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWVtYmVyc2hpcCUyMFBhc3NlcyUyMGRpZ2l0YWx8ZW58MHx8MHx8fDA%3D",
    },
  ],

  featuresTitle: "Powering the Future of Digital Ownership",
  features: [
    {
      title: "Authentic Creator Verification",
      text: "Verify creators instantly before they mint NFTs. Prevent impersonation, fake drops, and copied collections using Sapher’s decentralized identity layer.",
    },
    {
      title: "Marketplace Fraud Prevention",
      text: "Sapher detects duplicate accounts, fake listings, and suspicious wallet behavior to secure NFT marketplaces from scams and wash trading.",
    },
    {
      title: "Secure Asset Transfers",
      text: "Ensure every NFT transfer is tied to a real verified user to prevent theft, bot purchases, and automated sniping during mint launches.",
    },
    {
      title: "Compliance-Ready KYC for High-Value Trades",
      text: "For premium collections and institutional buyers, Sapher enables fast KYC/AML checks without disrupting the trading experience.",
    },
    {
      title: "Protect Against Botting on Mint Drops",
      text: "Sapher flags bot-driven mint attempts, ensuring fair distribution and reducing gas wars or spam.",
    },
    {
      title: "Frictionless User & Collector Onboarding",
      text: "Collectors verify once and seamlessly access all supported marketplaces and NFT platforms with persistent identity trust.",
    },
  ],

  // =========================
  // ⭐ TOP NFT PLATFORMS (DUMMY DATA)
  // =========================
  tabelTitle: "Top NFT Platforms Using Sapher",
  tableData: [
    { name: "MintSquare", tvl: 624.14, holders: 3210 },
    { name: "ArtFi Market", tvl: 488.22, holders: 2597 },
    { name: "ChainGallery", tvl: 372.81, holders: 1804 },
    { name: "PixelMint", tvl: 291.67, holders: 1470 },
    { name: "MetaCollective", tvl: 219.11, holders: 1185 },
    { name: "CurioHub", tvl: 164.29, holders: 924 },
    { name: "RareVault", tvl: 112.42, holders: 730 },
    { name: "OnChainArts", tvl: 94.58, holders: 508 },
    { name: "PrimeMint", tvl: 71.92, holders: 347 },
    { name: "LoopedNFT", tvl: 53.37, holders: 210 },
  ],

  // =========================
  // ⭐ NFT FAQ
  // =========================
  faq: [
    {
      q: "How does Sapher prevent fake or duplicated NFT collections?",
      a: "Sapher verifies creator identity and analyzes source signals to stop impersonators before minting begins.",
    },
    {
      q: "Is NFT verification done on-chain?",
      a: "Identity checks remain off-chain for privacy, but authenticity proofs can be anchored on-chain for transparency.",
    },
    {
      q: "Can Sapher stop bots from mass minting NFTs?",
      a: "Yes. Sapher detects bot-like behavior and duplicate wallet actors to ensure fair mint participation.",
    },
    {
      q: "Does Sapher store user or wallet data?",
      a: "No. User data is encrypted, privacy-preserving, and stored off-chain, ensuring collector security.",
    },
    {
      q: "Can Sapher protect NFT marketplaces from scams?",
      a: "Yes. Sapher flags fraudulent listings, suspicious buyers, and wallet manipulation attempts.",
    },
    {
      q: "Does Sapher support KYC for high-value NFT purchases?",
      a: "Yes. Premium platforms can enable KYC flows for collectors purchasing valuable or regulated assets.",
    },
    {
      q: "Can NFT platforms customize trust rules?",
      a: "Absolutely. Platforms can tailor creator verification, trade thresholds, and anti-bot filters.",
    },
    {
      q: "Is Sapher suitable for large-scale or Web3 marketplaces?",
      a: "Yes. Sapher supports high-traffic, Web3-native NFT ecosystems with real-time checks.",
    },
  ],
};

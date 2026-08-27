export const gamingUseCase = {
  title: "Gaming",
  stats: [
    { label: "Daily Active Players", value: "12 Million", unit: "", gradient: "from-gray-50 to-gray-100",},
    { label: "Avg Match Time", value: "4.3 Minutes", unit: "", gradient: "from-indigo-200 to-blue-200",},
    { label: "Verified Gamers", value: "8.1 Million", unit: "", gradient: "ffrom-gray-50 to-gray-100",},
  ],

  industries: [
    { title: "P2E Games", img: "https://media.istockphoto.com/id/1472087755/photo/p2p-text-neon-concept-p2p-exchange-concept-peer-to-peer-cryptocurrency-trading-p2p-text.jpg?s=612x612&w=0&k=20&c=5reeRESVjUN3dz-2DQ6lPypbZ5s_QzaRDHlJIeqgq1M=" },
    { title: "Esports Platforms", img: "https://images.unsplash.com/photo-1760037028553-3c5c801f18c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXNwb3J0cyUyMFBsYXRmb3JtcyUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D" },
    { title: "Casino & Betting Apps", img: "https://media.istockphoto.com/id/1193802562/photo/mature-man-using-mobile-app-for-live-betting.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZmmXGHOd4BLAiLrBqOKZGPEYxz8vNbs6gXXLICEDlp0=" },
    { title: "Game Marketplaces", img: "https://media.istockphoto.com/id/1061369956/photo/coin-stacks-and-chart-graphs-on-a-chessboard.webp?a=1&b=1&s=612x612&w=0&k=20&c=172MDPU8W4Y1sbtcUsebwzpZJO7vNNvSwUi51FGJ_aM=" },
  ],

  featuresTitle: "Powering Next-Gen Gaming Experiences",
  features: [
    {
      title: "Instant Player Verification",
      text: "Verify players within milliseconds before they enter matches, tournaments, or marketplaces. Stop fake users, smurf accounts, and exploiters through Cryptrix’s real-time decentralized identity layer.",
    },
    {
      title: "Anti-Cheat & Fraud Detection",
      text: "Cryptrix analyzes device behavior, identity proofs, wallet history, and gameplay patterns to detect suspicious activity — helping gaming platforms eliminate bots and cheaters instantly.",
    },
    {
      title: "In-Game Asset & Marketplace Protection",
      text: "Prevent item theft, duplicate accounts, and fraudulent trades in NFT or token-based marketplaces by validating user authenticity before asset transfers occur.",
    },
    {
      title: "Compliance-Ready KYC for Tournaments & Rewards",
      text: "Esports payouts, reward claims, and high-value trades can require KYC. Cryptrix enables seamless checks without breaking the gaming experience.",
    },
    {
      title: "Secure Web3 Gaming Transactions",
      text: "For blockchain-based games, Cryptrix ensures wallet actions, asset minting, and token transfers are tied to real, verified users — reducing multi-account abuse and botting.",
    },
    {
      title: "Fast & Frictionless Player Onboarding",
      text: "Players verify once and instantly join new games, events, and servers without repeating checks — improving conversions and reducing onboarding friction.",
    },
  ],

  // =========================
  // ⭐ TOP GAMING PROTOCOLS / PROJECTS (DUMMY DATA)
  // =========================
  tabelTitle: "Top Gaming Protocols on Cryptrix",
  tableData: [
    { name: "GameVerseX", tvl: 912.45, holders: 4210 },
    { name: "MetaArena", tvl: 701.32, holders: 3187 },
    { name: "PlayForge", tvl: 563.28, holders: 2675 },
    { name: "ArcadiaQuest", tvl: 387.44, holders: 1980 },
    { name: "ChainBattles", tvl: 244.19, holders: 1547 },
    { name: "PixelKingdom", tvl: 188.62, holders: 1249 },
    { name: "EvoTactics", tvl: 162.85, holders: 621 },
    { name: "LootLabs", tvl: 119.73, holders: 960 },
    { name: "BattleSphere", tvl: 84.57, holders: 478 },
    { name: "MythicLegends", tvl: 52.98, holders: 302 },
  ],

  // =========================
  // ⭐ GAMING FAQ
  // =========================
  faq: [
    {
      q: "How does Cryptrix help prevent cheating and bot accounts?",
      a: "Cryptrix verifies player identity, device signals, and behavior patterns to instantly detect bots, smurf accounts, and exploiters before they affect gameplay.",
    },
    {
      q: "Is player verification done on-chain or off-chain?",
      a: "Identity verification is off-chain for speed and privacy, while trust proofs or risk flags can optionally be anchored on-chain for transparency.",
    },
    {
      q: "How fast are gaming-related checks?",
      a: "Most checks complete in under 30–40ms, making Cryptrix ideal for matchmaking systems, esports events, and real-time in-game transactions.",
    },
    {
      q: "Does Cryptrix store sensitive player information?",
      a: "No. Player data is encrypted, privacy-preserving, and stored off-chain. Cryptrix never stores raw gameplay data or personal files.",
    },
    {
      q: "Can Cryptrix protect NFT and token-based game economies?",
      a: "Yes. Cryptrix verifies identity and intent before trades, reducing scams, duplicate accounts, and asset abuse in Web3 games.",
    },
    {
      q: "Does Cryptrix support KYC for esports rewards?",
      a: "Yes. Tournament payouts, high-value trades, and reward claims can all be KYC-enabled using Cryptrix’s automated verification workflows.",
    },
    {
      q: "Can gaming studios customize verification flows?",
      a: "Absolutely. Studios can configure trust scoring, anti-cheat logic, risk thresholds, and gameplay-specific identity checks.",
    },
    {
      q: "Is Cryptrix suitable for large multiplayer or Web3 games?",
      a: "Yes. Cryptrix is optimized for high-traffic gaming platforms, real-time multiplayer games, and blockchain-based experiences.",
    },
  ],
};

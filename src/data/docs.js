export const sidebarData = [
  {
    title: "Getting Started",
    children: [
      {
        title: "Installation",
        children: [
          "Install Dependencies",
          "Solana CLI Basics",
          "Anchor CLI Basics",
          "Surfpool CLI Basics",
        ],
      },
      {
        title: "Quick Start",
        children: [
          "Reading from Network",
          "Writing to the Network",
          "Deploy a Program",
          "Creating Deterministic Accounts",
          "Composing Multiple Programs",
        ],
      },
    ],
  },
  {
    title: "Core Concepts",
    children: [
      "Accounts",
      "Instructions",
      "Transactions",
      "Transaction Fees",
      "Programs",
      "Program-Derived Address",
      "Cross Program Invocation",
    ],
  },
  {
    title: "Tokens on Solana",
    children: [
      { title: "Basics", children: [] },
      { title: "Extensions", children: [] },
    ],
  },
  {
    title: "Developing Programs",
    children: [
      { title: "Rust Programs", children: ["Program Structure"] },
      { title: "Testing Programs", children: [] },
      "Deploying Programs",
      { title: "Codama", children: [] },
      "Verifying Programs",
      "Program Examples",
      "Limitations",
    ],
  },
  { title: "Frontend", children: [] },
  {
    title: "Solana SDKs",
    children: [
      { title: "Official SDKs", children: ["Rust SDK", "Typescript SDK"] },
      { title: "Community SDKs", children: [] },
    ],
  },
  {
    title: "References",
    children: ["RPC Endpoints", "Staking", "Terminology"],
  },
];

export const apiSidebarData = [
  {
    title: "API Overview",
    children: [
      "Introduction",
      "Authentication",
      "Rate Limits",
      "Errors",
      "Changelog",
    ],
  },
  {
    title: "RPC API",
    children: [
      {
        title: "Accounts",
        children: [
          "getAccountInfo",
          "getMultipleAccounts",
          "getProgramAccounts",
        ],
      },
      {
        title: "Transactions",
        children: [
          "sendTransaction",
          "simulateTransaction",
          "getTransaction",
          "getSignatureStatuses",
        ],
      },
      {
        title: "Blocks",
        children: [
          "getBlock",
          "getBlockHeight",
          "getSlot",
          "getLatestBlockhash",
        ],
      },
    ],
  },
  {
    title: "Token API",
    children: [
      "getTokenSupply",
      "getTokenAccountBalance",
      "getTokenLargestAccounts",
      "getTokenAccountsByOwner",
    ],
  },
  {
    title: "Program API",
    children: [
      "Deploy Program",
      "Upgrade Program",
      "Close Program",
      "Program Logs",
    ],
  },
  {
    title: "Webhooks",
    children: [
      "Webhook Overview",
      "Create Webhook",
      "Update Webhook",
      "Delete Webhook",
      "Webhook Events",
    ],
  },
  {
    title: "SDKs",
    children: [
      {
        title: "JavaScript SDK",
        children: [
          "Installation",
          "Client Setup",
          "Sending Transactions",
          "Reading Accounts",
        ],
      },
      {
        title: "Rust SDK",
        children: [
          "Installation",
          "Client Setup",
          "Signing Transactions",
        ],
      },
    ],
  },
  {
    title: "Utilities",
    children: [
      "Health Check",
      "Network Status",
      "Version Info",
    ],
  },
];

export const sdkSidebarData = [
  {
    title: "Official SDKs",
    children: ["Rust SDK", "Typescript SDK", "Python SDK", "Go SDK"],
  },
  {
    title: "Community SDKs",
    children: ["JS SDK Wrappers", "Rust Utilities", "Other SDKs"],
  },
  {
    title: "SDK Guides",
    children: ["Setup", "Examples", "Advanced Usage"],
  },
];

// Cookbook Sidebar
export const cookbookSidebarData = [
  {
    title: "Recipes",
    children: ["Reading from Network", "Writing Transactions", "Token Transfers"],
  },
  {
    title: "Examples",
    children: ["DeFi", "NFTs", "DAOs", "Oracles"],
  },
  {
    title: "Best Practices",
    children: ["Security", "Performance", "Error Handling"],
  },
];

// Contracts Sidebar
export const contractsSidebarData = [
  {
    title: "Contract Basics",
    children: ["Deploying Contracts", "Upgrading Contracts", "Contract Lifecycle"],
  },
  {
    title: "Contract Examples",
    children: ["NFT Contract", "DeFi Contract", "DAO Contract"],
  },
  {
    title: "Testing Contracts",
    children: ["Unit Tests", "Integration Tests", "Simulation"],
  },
];

// Testnet Sidebar
export const testnetSidebarData = [
  {
    title: "Getting Started",
    children: ["Connect Wallet", "Faucet Tokens", "Deploy to Testnet"],
  },
  {
    title: "Testnet Tools",
    children: ["Network Explorer", "Simulators", "Debugging Tools"],
  },
  {
    title: "Best Practices",
    children: ["Testing Strategies", "Transaction Monitoring", "Error Handling"],
  },
];

// Websocket Sidebar
export const websocketSidebarData = [
  {
    title: "WebSocket Overview",
    children: ["Introduction", "Connecting", "Authentication", "Events"],
  },
  {
    title: "Usage",
    children: ["Subscribe Accounts", "Subscribe Programs", "Receive Updates"],
  },
  {
    title: "Best Practices",
    children: ["Reconnection", "Error Handling", "Security"],
  },
];

// SDK Downloads Sidebar
export const sdkDownloadSidebarData = [
  {
    title: "SDK Packages",
    children: ["Rust SDK", "TypeScript SDK", "Python SDK", "Go SDK"],
  },
  {
    title: "Installation Guides",
    children: ["Windows", "Mac", "Linux"],
  },
  {
    title: "Version History",
    children: ["v1.0", "v1.1", "v2.0", "v2.1"],
  },
];

// Get Support Sidebar
export const supportSidebarData = [
  {
    title: "Help Center",
    children: ["FAQ", "Guides", "Troubleshooting"],
  },
  {
    title: "Community",
    children: ["Forums", "Discord", "Telegram"],
  },
  {
    title: "Contact",
    children: ["Submit Ticket", "Report Issue", "Feature Request"],
  },
];

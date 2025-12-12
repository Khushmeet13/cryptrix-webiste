// statusData.js
export const SERVICES = [
  {
    id: "rpc",
    name: "RPC",
    url: "https://rpc.sapherchain.io",
    status: "operational", // operational | degraded | down | maintenance
    latencyMs: 48,
    errorRate: 0.02,
    uptime24h: 99.98,
    sparkline: [45,48,47,52,49,50,46,48,47,49,48],
  },
  {
    id: "explorer",
    name: "Explorer",
    url: "https://explorer.sapherchain.io",
    status: "operational",
    latencyMs: 140,
    errorRate: 0.01,
    uptime24h: 99.96,
    sparkline: [120,130,125,140,138,135,142,136,140,138],
  },
  {
    id: "wallet",
    name: "Wallet",
    url: "https://wallet.sapherchain.io",
    status: "degraded",
    latencyMs: 210,
    errorRate: 0.28,
    uptime24h: 99.45,
    sparkline: [180,190,200,210,220,205,210,215,208,212],
  },
  {
    id: "mainnet",
    name: "Mainnet",
    url: "https://mainnet.sapherchain.io",
    status: "operational",
    latencyMs: 0,
    errorRate: 0.0,
    uptime24h: 100.0,
    sparkline: [0,0,0,0,0,0,0,0],
    meta: {
      blockHeight: 8234211,
      blockTimeSec: 0.92,
      validatorsActive: 128,
      tps: 542,
    },
  },
  {
    id: "testnet",
    name: "Testnet",
    url: "https://testnet.sapherchain.io",
    status: "operational",
    latencyMs: 61,
    errorRate: 0.01,
    uptime24h: 99.99,
    sparkline: [50,52,60,58,62,61,59,61,60,61],
  },
];

export const INCIDENTS = [
  {
    id: "inc-001",
    serviceId: "wallet",
    title: "Wallet signing delays",
    status: "monitoring", // investigating | identified | monitoring | resolved
    severity: "minor", // minor | major | critical
    createdAt: "2025-12-11T09:32:00Z",
    updatedAt: "2025-12-11T11:00:00Z",
    details:
      "Users may experience intermittent delays when signing transactions in the web wallet. Engineering applied throttling and monitoring.",
  },
  {
    id: "inc-000",
    serviceId: "rpc",
    title: "RPC transient errors (resolved)",
    status: "resolved",
    severity: "major",
    createdAt: "2025-12-09T04:12:00Z",
    updatedAt: "2025-12-09T04:45:00Z",
    details:
      "A subset of RPC nodes experienced elevated error rates due to a rolling deploy. Autoscaling and fallback routing resolved the issue.",
  },
];

export const MAINTENANCE = [
  {
    id: "mt-001",
    start: "2025-12-18T01:00:00Z",
    end: "2025-12-18T03:00:00Z",
    title: "Explorer DB reindexing",
    servicesAffected: ["explorer"],
    description:
      "We will perform a database reindex on the explorer which may cause short indexing delays.",
  },
  {
    id: "mt-002",
    start: "2026-01-05T02:00:00Z",
    end: "2026-01-05T04:00:00Z",
    title: "RPC instance upgrade",
    servicesAffected: ["rpc"],
    description: "Rolling upgrade of RPC instances to v1.8.2 (no expected downtime).",
  },
];

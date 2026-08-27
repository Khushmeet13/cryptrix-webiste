export const categories = ["All", "Product", "Ecosystem", "Security", "Guides", "Governance"];

export const posts = [
  {
    slug: "introducing-cryptrix-dex",
    title: "Introducing Cryptrix DEX: Trade Without Compromise",
    excerpt:
      "Non-custodial swaps, transparent fees, and deep liquidity — a look at why we built the Cryptrix DEX the way we did, and how it works under the hood.",
    category: "Product",
    author: { name: "Maya Chen", role: "Product Lead", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
    date: "2026-08-10",
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=1200&auto=format&fit=crop&q=80",
    featured: true,
    content: [
      { type: "p", text: "Every decentralized exchange makes a set of trade-offs. Some optimize purely for speed and end up leaning on centralized components behind the scenes. Others chase maximal decentralization and end up too slow or expensive for everyday trading. We built Cryptrix DEX to avoid picking a side — because for a trading product, both sides actually matter." },
      { type: "h2", text: "Non-custodial from the first line of code" },
      { type: "p", text: "Cryptrix DEX never takes custody of your funds. Every swap is a direct interaction between your wallet and an on-chain liquidity pool — there's no intermediate account, no withdrawal queue, and no moment where the protocol could freeze or misplace your assets. If you can see it in your wallet, you're the only one who can move it." },
      { type: "h2", text: "A fee structure you can actually verify" },
      { type: "p", text: "Every swap carries a flat 0.30% fee, split transparently on-chain: 0.25% goes directly to the liquidity providers backing that pool, and 0.05% funds the protocol treasury. There are no hidden spreads, no variable \"gas optimization\" markups, and no listing fees for new token pairs." },
      { type: "list", items: [
        "0.25% to liquidity providers, distributed automatically per pool share",
        "0.05% to the protocol treasury, funding audits and ecosystem grants",
        "Zero listing fees — any team can create a pool",
      ] },
      { type: "h2", text: "What's next" },
      { type: "p", text: "We're currently extending cross-chain support and rolling out a second independent security audit cycle. If you want to see what's coming next, the Roadmap page tracks every initiative from idea to shipped." },
    ],
  },
  {
    slug: "understanding-non-custodial-wallets",
    title: "Understanding Non-Custodial Wallets: Why Self-Custody Matters",
    excerpt:
      "\"Not your keys, not your coins\" gets repeated a lot — here's what it actually means in practice, and how to set up a wallet safely for the first time.",
    category: "Guides",
    author: { name: "Daniel Osei", role: "Developer Relations", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
    date: "2026-07-28",
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200&auto=format&fit=crop&q=80",
    content: [
      { type: "p", text: "A custodial account — like a balance held on an exchange — is really just a promise. The exchange keeps a database entry saying you own some amount of an asset, and you trust them to honor it when you want to withdraw. A non-custodial wallet removes that promise entirely: the assets live on-chain, and only the holder of the private key can move them." },
      { type: "h2", text: "What a wallet actually is" },
      { type: "p", text: "A crypto wallet doesn't really \"store\" your coins — it stores the keys that prove ownership of coins recorded on the blockchain. Your seed phrase (usually 12 or 24 words) is the master key that can regenerate your private keys on any compatible wallet software. Anyone with that phrase has full control of your funds — which is exactly why it should never be typed into a website, screenshotted, or stored in a note app." },
      { type: "h2", text: "Setting one up safely" },
      { type: "list", items: [
        "Write your seed phrase on paper — never store it digitally",
        "Never enter your seed phrase into a website, even one that looks official",
        "Double-check contract addresses before approving a transaction",
        "Start with small amounts until the flow feels familiar",
      ] },
      { type: "p", text: "Once your wallet is set up, connecting to Cryptrix DEX or staking is a matter of a single signature — no account creation, no email, no password to lose." },
    ],
  },
  {
    slug: "second-security-audit-cycle",
    title: "Cryptrix Completes Its Second Independent Security Audit",
    excerpt:
      "A rundown of what the latest audit cycle covered, what was found, and what it means for the contracts powering staking, governance, and the DEX.",
    category: "Security",
    author: { name: "Priya Nair", role: "Security Engineering", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
    date: "2026-07-15",
    readTime: "4 min read",
    cover: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&auto=format&fit=crop&q=80",
    content: [
      { type: "p", text: "Security work is never really finished — it's a cycle. As the protocol adds features, the surface area that needs review grows with it. This summer we closed out our second full independent audit, covering the updated DEX router, the staking contracts, and the governance execution module." },
      { type: "h2", text: "Scope of the review" },
      { type: "p", text: "The audit focused on three areas: correctness of the fee-splitting logic introduced with the DEX, slashing conditions in the staking module, and the timelock behavior for governance proposals that pass a vote. All contracts under review are open-source and were already live on testnet for community review before the audit began." },
      { type: "h2", text: "What was found" },
      { type: "p", text: "The review surfaced a handful of low-severity findings — mostly around gas efficiency and edge-case input validation — all of which were resolved before mainnet deployment. No critical or high-severity issues were identified in the core logic." },
      { type: "p", text: "Alongside formal audits, Cryptrix runs an ongoing public bug bounty program. If you find something, responsible disclosure is always rewarded." },
    ],
  },
  {
    slug: "how-on-chain-governance-works",
    title: "How On-Chain Governance Actually Works",
    excerpt:
      "From proposal to execution — a walkthrough of how SPH holders shape the protocol, and why votes enforce themselves without anyone's approval.",
    category: "Governance",
    author: { name: "Jonas Weber", role: "Protocol Governance", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
    date: "2026-06-30",
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&auto=format&fit=crop&q=80",
    content: [
      { type: "p", text: "Governance only means something if the outcome is actually binding. On most platforms, a \"community vote\" is really just a temperature check — a core team still decides what ships. Cryptrix governance works differently: once a proposal passes, execution happens automatically through a timelocked contract call, with no manual step for anyone to override." },
      { type: "h2", text: "The lifecycle of a proposal" },
      { type: "list", items: [
        "Draft — any SPH holder above the proposal threshold can submit one",
        "Discussion — a public comment period before voting opens",
        "Voting — SPH holders and their delegated validators vote on-chain",
        "Timelock — a delay window before a passed proposal executes, giving the network time to react",
        "Execution — the change applies automatically, enforced by the contract itself",
      ] },
      { type: "h2", text: "Why the timelock matters" },
      { type: "p", text: "The delay between a vote passing and it taking effect isn't bureaucracy — it's a safety net. It gives validators and users a window to notice something wrong before a change takes hold, without giving any single party the power to simply veto the outcome." },
    ],
  },
  {
    slug: "scaling-to-1m-transactions",
    title: "Scaling to 1M Transactions: What We Learned",
    excerpt:
      "Crossing a million on-chain transactions surfaced real bottlenecks we hadn't seen in testnet. Here's what actually broke, and how we fixed it.",
    category: "Ecosystem",
    author: { name: "Maya Chen", role: "Product Lead", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
    date: "2026-06-08",
    readTime: "7 min read",
    cover: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1200&auto=format&fit=crop&q=80",
    content: [
      { type: "p", text: "Testnet load is never quite like production load. Real usage is bursty, unpredictable, and full of edge cases nobody thought to simulate. When Cryptrix crossed one million on-chain transactions, a few of those edge cases showed up all at once." },
      { type: "h2", text: "The mempool congestion problem" },
      { type: "p", text: "During a spike in DEX activity, we saw transaction confirmation times climb from under a second to several seconds. The root cause was a naive priority queue in early mempool handling that didn't account for fee-per-byte properly during bursts. We shipped a fix that re-sorts pending transactions dynamically as new ones arrive, rather than only at block-build time." },
      { type: "h2", text: "Validator geographic clustering" },
      { type: "p", text: "We also noticed latency was worse for users in regions farther from where most validators happened to be physically located. Part of our current roadmap — extending validator incentive programs — is directly aimed at improving geographic distribution, which should reduce this gap over time." },
      { type: "p", text: "None of this is unique to Cryptrix — every growing network hits some version of it. The difference is being transparent about what broke and fixing it in public." },
    ],
  },
  {
    slug: "five-security-mistakes-new-users-make",
    title: "5 Common Security Mistakes New Crypto Users Make",
    excerpt:
      "The mistakes that account for most lost funds aren't exotic hacks — they're simple habits. Here's what to avoid from day one.",
    category: "Guides",
    author: { name: "Daniel Osei", role: "Developer Relations", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
    date: "2026-05-22",
    readTime: "4 min read",
    cover: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=1200&auto=format&fit=crop&q=80",
    content: [
      { type: "p", text: "Most crypto losses aren't the result of some sophisticated exploit — they come from a handful of avoidable habits. If you're new to self-custody, these are the mistakes worth ruling out first." },
      { type: "list", items: [
        "Typing a seed phrase into a website — no legitimate wallet or app will ever ask for it",
        "Approving unlimited token spending without checking the requested amount",
        "Clicking links from unsolicited DMs offering airdrops or support",
        "Reusing the same wallet for testing unaudited contracts and holding savings",
        "Skipping a small test transaction before sending a large amount to a new address",
      ] },
      { type: "h2", text: "The pattern behind all five" },
      { type: "p", text: "Every one of these comes down to the same thing: slowing down before you sign. A wallet signature is a real, binding action — treat every prompt with the same care you'd give signing a physical document." },
    ],
  },
  {
    slug: "validator-incentive-program-explained",
    title: "The Cryptrix Validator Incentive Program, Explained",
    excerpt:
      "Why the network pays validators beyond base staking rewards, and how the incentive structure is designed to reward good behavior over raw size.",
    category: "Ecosystem",
    author: { name: "Priya Nair", role: "Security Engineering", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
    date: "2026-05-02",
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&auto=format&fit=crop&q=80",
    content: [
      { type: "p", text: "Base staking rewards keep validators running, but they don't by themselves encourage the behavior a healthy network actually needs — uptime, fast response to upgrades, and geographic diversity. The validator incentive program adds a second, targeted layer on top of base rewards to reward exactly that." },
      { type: "h2", text: "What gets rewarded" },
      { type: "list", items: [
        "Sustained uptime above the network average over a rolling window",
        "Fast adoption of protocol upgrades after a governance vote passes",
        "Operating in underrepresented regions to improve geographic spread",
      ] },
      { type: "p", text: "None of this replaces slashing for bad behavior — it's additive. The goal is a validator set that's not just large, but resilient, responsive, and distributed." },
    ],
  },
  {
    slug: "behind-the-build-protocol-upgrades",
    title: "Behind the Build: How We Approach Protocol Upgrades",
    excerpt:
      "Shipping a change to a live blockchain isn't like shipping a normal app update. Here's the process, from proposal to mainnet.",
    category: "Product",
    author: { name: "Jonas Weber", role: "Protocol Governance", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
    date: "2026-04-18",
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=80",
    content: [
      { type: "p", text: "You can't roll back a mainnet block the way you'd revert a bad deploy. That constraint shapes everything about how protocol changes move from idea to production on Cryptrix." },
      { type: "h2", text: "Testnet first, always" },
      { type: "p", text: "Every change to core contracts spends time on public testnet before it's even proposed for a governance vote. This gives the community — and any independent researchers — a real chance to poke at it before it matters." },
      { type: "h2", text: "Governance, then timelock, then mainnet" },
      { type: "p", text: "Once testnet feedback is incorporated, a change goes through the same governance process as any other proposal: a vote, a timelock window, and only then execution. There's no fast lane for the team that built it — the same rules apply to every proposal." },
      { type: "p", text: "It's slower than a typical software release cycle by design. For infrastructure people are trusting with real value, that trade-off is the right one." },
    ],
  },
];

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);
export const getRelatedPosts = (post, count = 3) =>
  posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, count).length
    ? posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, count)
    : posts.filter((p) => p.slug !== post.slug).slice(0, count);

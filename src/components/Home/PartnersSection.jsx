import React, { useState } from "react";

const partners = [
  {
    name: "MEXC",
    logo: "https://s1.coincarp.com/logo/2/mexc.png?style=200&v=1668751999",
    desc: "MEXC, founded in 2018, has quickly grown into a global cryptocurrency exchange serving millions of users in over 170 countries. It offers a wide range of trending tokens with low trading fees and a user-friendly platform. The exchange provides secure trading, fast transactions, and daily reward events to keep users engaged. MEXC also supports advanced trading features for professional traders. Its innovative approach to digital asset management has made it a trusted choice for beginners and experts alike. The platform prioritizes security with strict protocols and multi-layer protections. Overall, MEXC aims to make crypto trading accessible, safe, and rewarding for everyone.",
  },
  {
    name: "Poloniex",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvaCWR-RmD42kVm-c4FVRhv5TnNHzp1Tgtg&s",
    desc: "Poloniex is a leading global cryptocurrency exchange known for its reliable infrastructure and deep liquidity. It provides access to a wide variety of tokens and markets, supporting both spot and margin trading. The platform emphasizes security, offering advanced verification and protection measures. Poloniex also provides detailed analytics and tools for experienced traders. It aims to bridge the gap between traditional finance and the crypto ecosystem. With its intuitive interface, beginners can start trading quickly, while professionals can leverage advanced trading features. The exchange continues to innovate, supporting blockchain development and DeFi integration worldwide.",
  },
  {
    name: "Samsung",
    logo: "https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo.png",
    desc: "Samsung is a global technology leader actively exploring blockchain and decentralized technologies. The company supports blockchain innovation through secure hardware, smart devices, and enterprise-grade solutions. Samsung integrates blockchain capabilities into its consumer electronics, enabling seamless interactions with digital assets. It invests in secure storage and authentication for crypto applications. Samsung also collaborates with developers to expand blockchain ecosystems. Its commitment to innovation ensures that users can safely leverage blockchain technology on trusted devices. Samsung’s approach combines cutting-edge technology with accessibility, fostering mainstream adoption of decentralized solutions.",
  },
  {
    name: "BitTorrent",
    logo: "https://cryptologos.cc/logos/bittorrent-btt-logo.png",
    desc: "BitTorrent is a decentralized file-sharing platform powering peer-to-peer distribution of digital content. Millions of nodes participate in its network, ensuring reliable and fast data transfer without central servers. It has expanded into blockchain applications, supporting tokenized content and decentralized applications. BitTorrent offers enhanced security and privacy for users sharing files. The platform encourages innovation by integrating blockchain-based rewards for content creators. Its technology allows for scalable and efficient distributed networks. BitTorrent remains a cornerstone in decentralized content distribution, bridging Web2 and Web3 ecosystems.",
  },
  {
    name: "Opera",
    logo: "https://1000logos.net/wp-content/uploads/2020/08/Opera-Logo.png",
    desc: "Opera is a forward-thinking browser designed for the Web3 era, with native crypto wallet support and blockchain integration. It allows users to access decentralized applications directly from the browser. Opera focuses on privacy, security, and seamless user experience. Its Web3-ready tools make it easy to manage digital assets and interact with dApps. Opera supports multiple blockchain networks and tokens. The browser continually innovates to provide fast, secure, and user-friendly solutions for blockchain users. Opera empowers users to explore the decentralized internet with confidence and efficiency.",
  },
  {
    name: "MetaMask",
    logo: "https://www.pngall.com/wp-content/uploads/17/Metamask-Wallet-Logo-Design-PNG.png",
    desc: "MetaMask is a popular cryptocurrency wallet and gateway to decentralized applications. It allows users to securely manage Ethereum and other blockchain assets. MetaMask supports token storage, secure transactions, and connection to dApps. The wallet is available as a browser extension and mobile app, making blockchain accessible anywhere. MetaMask emphasizes user security with private key management and encryption. It has become essential for interacting with DeFi platforms, NFTs, and other Web3 services. With a large user base, MetaMask drives mainstream adoption of decentralized technologies.",
  },
  {
    name: "Coinbase",
    logo: "https://img.icons8.com/color/1200/coinbase.jpg",
    desc: "Coinbase is a trusted global cryptocurrency exchange providing secure and compliant access to digital assets. The platform enables buying, selling, and managing cryptocurrencies easily. It offers robust security measures, including insurance coverage and advanced verification. Coinbase supports a wide range of tokens and provides educational resources for beginners. Advanced trading tools cater to professional users. Its user-friendly interface, reliability, and regulatory compliance have made it a preferred platform worldwide. Coinbase continues to expand blockchain adoption by offering innovative financial services. Overall, it bridges traditional finance with the crypto ecosystem seamlessly.",
  },
  {
    name: "Ledger",
    logo: "https://images.seeklogo.com/logo-png/32/1/ledger-wallet-logo-png_seeklogo-321133.png",
    desc: "Ledger is a leading provider of hardware wallets, enabling secure offline storage of cryptocurrencies. Its devices protect private keys with enterprise-grade security and encryption. Ledger supports multiple blockchain networks and thousands of tokens. It combines portability with robust protection, ensuring users’ assets remain safe. Ledger’s software ecosystem integrates with popular wallets and exchanges for seamless management. Regular firmware updates enhance security and add new features. By offering secure hardware solutions, Ledger helps users confidently participate in the blockchain ecosystem while mitigating online threats.",
  },
  {
    name: "Trust Wallet",
    logo: "https://logowik.com/content/uploads/images/trust-wallet-shield4830.logowik.com.webp",
    desc: "Trust Wallet is a versatile mobile cryptocurrency wallet supporting multiple blockchains and decentralized applications. It enables users to store, send, and receive digital assets securely. Trust Wallet provides easy access to DeFi, staking, and NFT platforms. Its intuitive interface simplifies blockchain management for both beginners and experienced users. Security is prioritized with encrypted keys stored locally on the device. Trust Wallet continues to expand support for new networks and tokens. The app empowers users to explore the decentralized economy safely and efficiently.",
  },
  {
    name: "Kraken",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Kraken-Logo.png",
    desc: "Kraken is a globally recognized cryptocurrency exchange offering a wide variety of tokens and trading pairs. It provides advanced trading tools, robust security measures, and regulatory compliance. Kraken caters to both novice and professional traders. Users can access spot, futures, and margin trading with ease. The platform prioritizes transparency, reliability, and customer support. Kraken also supports staking, allowing users to earn rewards on their crypto holdings. Overall, it serves as a secure gateway into the crypto market with a focus on long-term growth and adoption.",
  },
];

const PartnersSection = () => {
  const [active, setActive] = useState(partners[0]);

  return (
    <section className="w-full bg-white pt-10">
      <h2 className="text-3xl font-semibold text-center text-gray-900 pb-4 lg:pb-0">
        Core Partners
      </h2>

      {/* Top Section: Logo + Description */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:mt-16 px-6 py-6 border-t border-gray-100">
        {/* Big Logo */}
        <div className="flex justify-center">
          <img
            src={active.logo}
            alt={active.name}
            className="w-30 h-30 lg:w-40 lg:h-40 object-contain transition-all duration-300"
          />
        </div>

        {/* Description */}
        <div className="max-w-xl text-center lg:text-left">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            {active.name}
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">{active.desc}</p>
        </div>
      </div>

      {/* Bottom Icon Row */}
      <div className="mt-20 bg-gray-100/50 py-10">
        <div className="flex justify-start lg:justify-center gap-14 px-6 py-10 overflow-x-scroll flex-nowrap scrollbar-hide snap-x snap-mandatory">
          {partners.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(p)}
              className={` snap-center
                flex flex-col items-center cursor-pointer
                transition-all duration-300
                 ${
                    active.name === p.name
                      ? " scale-105 -translate-y-7"
                      : "hover:scale-105 hover:-translate-y-2"
                  }
              `}
            >
              <div
                className={`
                  w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center
                  transition-all duration-300
                 
                `}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className="mt-3 text-gray-800 font-medium text-sm">{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

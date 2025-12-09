import React from "react";
import HeroSection from "../components/Home/HeroSection";
import IntroSection from "../components/Home/IntroSection";
import WhatBlockchainDoes from "../components/Home/WhatBlockchainDoes";
import MarketPerformance from "../components/Home/MarketPerformance";
import EcosystemSection from "../components/Home/EcosystemSection";
import Features from "../components/Home/Features";
import WalletQuickLinks from "../components/Home/WalletQuickLinks";
import PartnersSection from "../components/Home/PartnersSection";
import InsightsSection from "../components/Home/InsightsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <WhatBlockchainDoes />
      <MarketPerformance />
      <EcosystemSection />
      <Features />
      <PartnersSection />
      <WalletQuickLinks />
      <InsightsSection />
    </>
  );
};

export default Home;

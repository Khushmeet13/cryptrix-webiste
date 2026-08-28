import React from "react";
import MarketPerformance from "@/components/Home/MarketPerformance";
import WhyChooseCRX from "@/components/IntroPageComponents/WhyChooseCRX";
import Tokenomics from "@/components/IntroPageComponents/Tokenomics";
import HowToBuy from "@/components/IntroPageComponents/HowToBuy";

const IntroPage = () => {
  return (
    <>
      <MarketPerformance />
      <WhyChooseCRX />
      <Tokenomics />
      <HowToBuy />
    </>
  );
};

export default IntroPage;

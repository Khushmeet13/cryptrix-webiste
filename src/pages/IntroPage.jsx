import React from "react";
import WhatIsSPH from "@/components/IntroPageComponents/WhatIsSPH";
import MarketPerformance from "@/components/Home/MarketPerformance";
import WhyChooseSPH from "@/components/IntroPageComponents/WhyChooseSPH";
import Tokenomics from "@/components/IntroPageComponents/Tokenomics";
import HowToBuy from "@/components/IntroPageComponents/HowToBuy";

const IntroPage = () => {
  return (
    <>
      <WhatIsSPH />
      <MarketPerformance />
      <WhyChooseSPH />
      <Tokenomics />
      <HowToBuy />
    </>
  );
};

export default IntroPage;

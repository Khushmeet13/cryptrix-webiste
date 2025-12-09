// src/components/FloatingChains.jsx
import React from "react";

const CHAIN_SRC =
  "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f517.svg";

const FloatingChains = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Chain 1 */}
      <div className="absolute top-8 left-12 w-28 h-28 opacity-40 animate-float">
        <img src={CHAIN_SRC} alt="chain" />
      </div>

      <div className="absolute top-28 left-92 w-12 h-12 opacity-40 animate-float">
        <img src={CHAIN_SRC} alt="chain" />
      </div>

      {/* Chain 2 */}
      <div className="absolute top-4 right-16 w-16 h-16 opacity-50 animate-float-delay1">
        <img src={CHAIN_SRC} alt="chain" />
      </div>

      {/* Chain 3 */}
      <div className="absolute bottom-24 left-20 w-32 h-32 opacity-45 animate-float-delay2">
        <img src={CHAIN_SRC} alt="chain" />
      </div>

      {/* Chain 4 */}
      <div className="absolute top-1/3 right-32 w-40 h-40 opacity-35 animate-float-delay3">
        <img src={CHAIN_SRC} alt="chain" />
      </div>

      <div className="absolute top-20 right-82 w-14 h-14 opacity-35 animate-float-delay3">
        <img src={CHAIN_SRC} alt="chain" />
      </div>

      {/* Chain 5 - Center Big */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 opacity-30 animate-float-slow">
        <img src={CHAIN_SRC} alt="chain" />
      </div>

      {/* Extra Chains */}
      <div className="absolute bottom-10 right-1/4 w-24 h-24 opacity-40 animate-float-delay4">
        <img src={CHAIN_SRC} alt="chain" />
      </div>
    </div>
  );
};

export default FloatingChains;

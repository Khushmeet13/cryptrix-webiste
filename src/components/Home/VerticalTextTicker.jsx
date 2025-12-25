import { useEffect, useState } from "react";

const messages = [
  "~$0.0027 avg. transaction",
  "$1.82 billion monthly payments vol.",
  "~$1.14 billion in tokenized real-world assets",
  "3.8 million avg. daily transactions",
  "3.6 billion stablecoin supply",
];

export default function VerticalTextTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      {/* 🔥 Capsule */}
      <div className="relative px-6 py-2 rounded-full border border-white/20 backdrop-blur-md  shadow-[0_0_30px_rgba(255,255,255,0.05)]">
        {/* Mask */}
        <div className="h-[18px] overflow-hidden">
          <div
            className="flex flex-col transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateY(-${index * 18}px)`,
            }}
          >
            {messages.map((text, i) => (
              <div
                key={i}
                className="h-[18px] text-[11px] sm:text-xs tracking-wide text-gray-200 uppercase whitespace-nowrap text-center"
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* ✨ Glow ring */}
        <div className="absolute inset-0 rounded-full ring-1 ring-white/10 pointer-events-none" />
      </div>
    </div>
  );
}

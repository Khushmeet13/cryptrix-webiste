import { useEffect, useState } from "react";

const words = ["CRYPTRIX", "TRUST", "WEB3", "DECENTRALIZED"];

const TypewriterText = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout;

    if (!isDeleting) {
      // Typing
      timeout = setTimeout(() => {
        setDisplay(currentWord.substring(0, display.length + 1));

        if (display === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      }, 200);
    } else {
      // Deleting
      timeout = setTimeout(() => {
        setDisplay(currentWord.substring(0, display.length - 1));

        if (display.length === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setDisplay(""); // 👈 IMPORTANT FIX (no blink)
        }
      }, 120);
    }

    return () => clearTimeout(timeout);
  }, [display, isDeleting, wordIndex]);

  return (
    <h2
      className="
        sm:text-3xl lg:text-6xl mt-4
       italic font-bold tracking-[0.10em]
        bg-gradient-to-r from-blue-600 via-indigo-500 to-fuchsia-500
        bg-clip-text text-transparent
        drop-shadow-[0_0_30px_rgba(99,102,241,0.6)]
      "
    >
      {display}
      <span className="ml-1 animate-pulse opacity-80">|</span>
    </h2>
  );
};

export default TypewriterText;

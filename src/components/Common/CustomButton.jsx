import React from "react";
import { ArrowRight } from "lucide-react";

const CustomButton = ({
  text = "Click Me",
  bgColor = "bg-black",       // Outer background
  slideColor = "bg-indigo-600", // Sliding hover background
  onClick = () => {},
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-6 py-3 ${bgColor} text-white text-sm rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:cursor-pointer hover:shadow-indigo-500/40 transform hover:scale-105`}
    >
      {/* Sliding colored layer */}
      <span
        className={`absolute inset-0 ${slideColor} translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-full`}
      />

      {/* Text + Icon */}
      <span className="relative z-10 flex items-center gap-1">
        {text}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  );
};

export default CustomButton;

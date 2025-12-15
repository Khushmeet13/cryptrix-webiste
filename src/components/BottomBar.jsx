import React from "react";
import { Globe } from "lucide-react";

export default function BottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 -z-50 h-[15vh]">
      <div className="bg-indigo-950 border-t border-indigo-950">
        <div className="md:max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">

          {/* Left Section */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-bold tracking-tighter">
              SAPHER
            </span>

            <span className="text-xs sm:text-sm opacity-90 leading-relaxed">
              Copyright © 2017–2025 SAPHER Tech Limited. | All rights reserved.{" "}
              <a href="#" className="underline hover:no-underline">
                Privacy Policy
              </a>
            </span>
          </div>

          {/* Language Button */}
          <div className="hidden md:flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-white cursor-pointer hover:bg-white/10 transition">
            <Globe size={18} /> EN
          </div>
        </div>
      </div>
    </div>
  );
}

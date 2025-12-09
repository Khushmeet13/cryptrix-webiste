import React from "react";
import { Globe } from "lucide-react";

export default function BottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 -z-50 h-[15vh]">
      <div className="bg-indigo-950 border-t border-indigo-950">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          
          {/* Left Section */}
          <div className="flex items-center gap-6">
            <span className="text-3xl font-bold tracking-tighter">SAPHER</span>
            <span className="text-sm opacity-90">
              Copyright © 2017-2025 SAPHER Tech Limited. | All rights reserved.{" "}
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

"use client";

import Image from "next/image";
import { Plus, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 flex justify-center pt-5 backdrop-blur-lg">
      <div
        className="
          w-max md:w-[95%] max-w-[1400px]
          bg-white/20 
          backdrop-blur-xl 
          border border-white/25
          rounded-[50px]
          px-10 py-3
          flex items-center justify-between
          gap-10
          whitespace-nowrap
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/images/Prelease-Grid logo.png"
            alt="logo"
            width={45}
            height={45}
          />
          <div className="leading-tight">
            <p className="text-[22px] font-medium text-[#1A1A1A] tracking-tight">
              prelease
            </p>
            <p className="text-[22px] font-medium text-[#1A1A1A] -mt-1 tracking-tight">
              grid
            </p>
          </div>
        </div>

        {/* CENTER NAV */}
        <nav className="flex gap-16 text-[16px] font-semibold text-gray-800 flex-shrink-0">
          <a href="#" className="hover:text-red-600 transition">Explore Properties</a>
          <a href="#" className="hover:text-red-600 transition">Calculators</a>
          <a href="#" className="hover:text-red-600 transition">Explore Brokers</a>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <button className="text-[16px] font-semibold text-gray-800 hover:text-red-600">
            Sign In
          </button>

          <button
            className="
              flex items-center gap-2
              border border-black
              rounded-full 
              px-5 py-2
              text-[16px] font-semibold
              flex-shrink-0
            "
          >
            <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center">
              <Plus size={16} />
            </span>
            List Property
          </button>

          <button className="bg-red-100 p-3 rounded-full md:hidden flex-shrink-0">
            <Menu size={22} className="text-red-600" />
          </button>
        </div>
      </div>
    </header>
  );
}

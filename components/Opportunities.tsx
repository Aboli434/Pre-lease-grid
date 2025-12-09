"use client";

import { useState } from "react";
import {
  Building2,
  Percent,
  Home,
  Wallet,
  Users2,
  Clock,
} from "lucide-react";

const tabs = [
  { id: 1, label: "Cities", icon: Building2 },
  { id: 2, label: "Annual Returns", icon: Percent },
  { id: 3, label: "Property Type", icon: Home },
  { id: 4, label: "Budget", icon: Wallet },
  { id: 5, label: "Tenant Type", icon: Users2 },
  { id: 6, label: "Tenure Left", icon: Clock },
];

export default function TopFilterTabs() {
  const [active, setActive] = useState(1);

  return (
    <div
      className="
        w-full flex flex-col items-center 
        mt-24 mb-12 px-4
        bg-transparent 
        backdrop-blur-0
      "
    >
      <h2 className="text-[48px] font-light text-gray-900 mb-14 text-center">
        Discover Opportunities Built for You
      </h2>

      <div className="flex gap-8 flex-wrap justify-center">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          const Icon = tab.icon;
          const words = tab.label.split(" ");

          return (
            <div key={tab.id} className="flex flex-col items-center">

              {/* Curve top */}
              <div
                className={`
                  w-[150px] h-[12px]
                  rounded-t-[30px]
                  transition-all duration-200
                  ${isActive ? "bg-[#E60000]" : "bg-[#D3D3D3]"}
                `}
              />

              {/* TRUE GLASS CARD */}
              <button
                onClick={() => setActive(tab.id)}
                className={`
                  w-[150px] h-[130px]
                  rounded-b-[22px]
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/30
                  shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                  flex flex-col items-center justify-center
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-white/20 border-white/50 shadow-[0_8px_40px_rgba(230,0,0,0.35)]"
                      : ""
                  }
                `}
              >
                <Icon
                  className={`w-9 h-9 mb-2 ${
                    isActive ? "text-[#E60000]" : "text-gray-800"
                  }`}
                />

                <div
                  className={`
                    text-[18px] leading-[20px] font-medium text-center
                    ${isActive ? "text-[#E60000]" : "text-gray-800"}
                  `}
                >
                  {words.map((word, i) => (
                    <div key={i}>{word}</div>
                  ))}
                </div>
              </button>

              {/* Bottom bar */}
              <div
                className={`
                  h-[6px] w-[150px] mt-4
                  rounded-full
                  ${isActive ? "bg-[#E60000]" : "bg-[#D3D3D3]"}
                `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

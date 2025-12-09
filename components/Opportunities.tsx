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
    <div className="w-full flex flex-col items-center mt-24 mb-12 px-4">
      <h2 className="text-[48px] font-light text-gray-900 mb-14 text-center">
        Discover Opportunities Built for You
      </h2>

      {/* Tabs Container */}
      <div className="flex gap-6 flex-wrap justify-center">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          const Icon = tab.icon;
          const words = tab.label.split(" ");

          return (
            <div key={tab.id} className="flex flex-col items-center">

              {/* Top rounded highlight */}
              <div
                className={`
                  w-[150px] h-[10px]
                  rounded-t-[26px]
                  transition-all duration-200
                  ${isActive ? "bg-[#E60000]" : "bg-[#e5e5e5]"}
                `}
              />

              {/* Card */}
              <button
                onClick={() => setActive(tab.id)}
                className={`
                  w-[150px] h-[130px]
                  flex flex-col items-center justify-center
                  rounded-b-[26px]
                  border
                  transition-all duration-300
                  bg-white/70
                  ${isActive
                    ? "border-[#E60000] shadow-[0_8px_25px_rgba(230,0,0,0.25)]"
                    : "border-[#dcdcdc]"
                  }
                `}
              >
                <Icon
                  className={`w-8 h-8 mb-2 ${
                    isActive ? "text-[#E60000]" : "text-gray-700"
                  }`}
                />

                <div
                  className={`text-[18px] font-medium leading-[20px] text-center ${
                    isActive ? "text-[#E60000]" : "text-gray-700"
                  }`}
                >
                  {words.map((w, i) => (
                    <div key={i}>{w}</div>
                  ))}
                </div>
              </button>

              {/* Bottom line */}
              <div
                className={`
                  w-[150px] h-[4px] mt-3 rounded-full
                  ${isActive ? "bg-[#E60000]" : "bg-[#e5e5e5]"}
                `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

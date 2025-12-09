"use client";
import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const cities = [
  "Pune",
  "Mumbai",
  "New Delhi",
  "Gurgaon",
  "Mumbai",
  "New Delhi",
];

export default function CityPreferenceSection() {
  const [selected, setSelected] = useState("Pune");

  return (
    <section className="w-full flex justify-center mt-18 mb-16">
      <div className="w-full max-w-4xl">

        {/* Glass card */}
        <div
          className="
            w-full max-w-5xl mx-auto p-14 rounded-3xl
            bg-white/50
            backdrop-blur-4xl
            border border-white/30
            shadow-[0_8px_32px_rgba(31,38,135,0.1)]
          "
        >

          {/* TOP BAR */}
          <div className="flex justify-between items-center mb-10">
            <span className="px-5 py-2 rounded-full bg-yellow-100/50 text-gray-800 font-medium text-base">
              Step 1 of 6
            </span>

            <span className="px-5 py-2 rounded-full bg-yellow-100/50 text-gray-800 font-medium text-base">
              18%
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-normal text-center text-gray-900">
            What’s your City Preference?
          </h2>

          <p className="text-center text-black-500 mt-3 mb-12 text-base">
            Select your City Preference.
          </p>

          {/* CITY CARDS */}
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-3 gap-6 max-w-[680px]">
              {cities.map((city, index) => {
                const isActive = selected === city;

                return (
                  <button
                    key={index}
                    onClick={() => setSelected(city)}
                    className={`
                      w-40 h-36
                      rounded-2xl
                      bg-white/20 backdrop-blur-md
                      shadow-md border border-white/40
                      flex items-center justify-center
                      text-xl font-semibold transition
                      ${
                        isActive
                          ? "text-red-600 shadow-[0_4px_12px_rgba(255,0,0,0.3)] border-white/60"
                          : "text-gray-600 border-white/20"
                      }
                    `}
                  >
                    {city}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* BUTTONS SECTION */}
        <div className="w-full flex justify-center mt-12">
          <div className="flex gap-5">

            {/* Skip */}
            <Button
              variant="outline"
              className="
                h-14 w-36
                rounded-lg
                text-gray-700
                text-lg
                font-semibold
                border-gray-300
                hover:bg-gray-50
                hover:border-gray-400
              "
            >
              Skip
            </Button>

            {/* Show Properties */}
            <Button
              className="
                h-14 w-56
                rounded-lg
                bg-red-600
                text-white
                text-lg
                font-semibold
                hover:bg-red-700
                shadow-lg
                shadow-red-500/40
              "
            >
              Show Properties
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}

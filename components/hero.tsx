"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-36 pb-20 px-4 ">
      {/* <div className="absolute inset-0 z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div> */}
      {/* Headings */}
      <h1 className="text-4xl md:text-6xl font-normal text-gray-900 z-10">
        Earn Effortlessly With
      </h1>

      <h1 className="text-5xl md:text-7xl font-bold text-red-600 mt-4 z-10">
        PreleaseGrid
      </h1>

      {/* Description */}
      <p className="max-w-3xl mt-6 text-gray-700 text-lg md:text-xl leading-relaxed z-10">
        PreleaseGrid offers carefully curated pre-leased properties designed to <br />
        deliver steady, reliable income — with verified assets, trusted tenants, and <br />
        zero management hassle.
      </p>

      {/* CTA Button (updated) */}
      <div className="mt-9 z-10">
        <Button
          className="
            bg-red-600 hover:bg-red-700 
            rounded-full 
            px-4 py-7 md:px-6 md:py-7
            shadow-[0_4px_16px_rgba(222,66,66,0.18)]
            text-white text-lg font-normal
            flex items-center gap-3
          "
        >
          Get Started

          {/* Icon bubble */}
          <span
            className="
              flex items-center justify-center 
              w-10 h-10
              bg-white rounded-full border-2 border-red-600
            "
          >
            <ArrowUpRight className="w-5 h-5 text-red-600" />
          </span>
        </Button>
      </div>
    </section>
  );
}

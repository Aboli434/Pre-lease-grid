"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  title: string;
  img: string;
  count: number;
}

const categories: CategoryCardProps[] = [
  { title: "Residential", img: "/images/residentail.jpeg", count: 26 },
  { title: "Industrial", img: "/images/industrial.jpeg", count: 26 },
  { title: "Commercial", img: "/images/commercial.jpeg", count: 26 },
  { title: "Others", img: "/images/others.jpeg", count: 26 },
];

export default function CategoryCards() {
  return (
    <section className="w-full flex flex-col items-center mt-32">
      <h2 className="text-4xl font-normal text-gray-900 mb-12">
        Explore all Categories
      </h2>

      {/* Reduced gap between cards */}
      <div className="flex gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="
              w-[300px]             
              bg-white
              rounded-xl
              overflow-hidden
              border border-gray-200
              shadow-[0_12px_25px_-10px_rgba(0,0,0,0.15)]
              min-h-[280px]
            "
          >
            {/* IMAGE */}
            <div className="relative h-[200px] w-full">
              <Image src={cat.img} alt={cat.title} fill className="object-cover" />
              <p className="absolute top-4 left-4 text-white text-2xl font-semibold drop-shadow-lg">
                {cat.title}
              </p>
            </div>

            {/* BOTTOM ROW */}
            <div className="flex items-center justify-between px-6 py-4">
              {/* Badge */}
              <div
                className="
                  bg-[#F7F1D8]
                  text-gray-800
                  text-xs
                  px-4 py-1.5
                  rounded-full
                  border border-[#E5D9A8]
                "
              >
                {cat.count} Properties Listed
              </div>

              <Button
                className="
                  rounded-md
                  bg-red-600 hover:bg-red-700 
                  text-white
                  px-5 py-2
                  text-md
                  shadow-none
                "
              >
                Explore
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

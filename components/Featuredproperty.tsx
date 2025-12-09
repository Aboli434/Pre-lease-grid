"use client";

import Image from "next/image";
import { MapPin, Heart, Send, Plus } from "lucide-react";

export default function PropertyGrid() {
  const baseProperties = [
    {
      title: "Commercial Space",
      location: "Mumbai, Mundhwa",
      cost: "₹36.8 Crore",
      rent: "₹22.87 Lakhs",
      roi: "90.21%",
      tenure: "10 Yrs",
      tag: "MNC Client",
      verified: false,
      img: "/images/Home.png",
    },
    {
      title: "Residential Space",
      location: "Pune, Mundhwa",
      cost: "₹36.8 Crore",
      rent: "₹22.87 Lakhs",
      roi: "90.21%",
      tenure: "10 Yrs",
      tag: "MNC Client",
      verified: true,
      img: "/images/Home.png",
    },
    {
      title: "Industrial Space",
      location: "Pune, Mundhwa",
      cost: "₹36.8 Crore",
      rent: "₹22.87 Lakhs",
      roi: "90.21%",
      tenure: "10 Yrs",
      tag: "MNC Client",
      verified: false,
      img: "/images/Home.png",
    },
  ];

  const properties = [...baseProperties, ...baseProperties];

  return (
    <div className="w-full px-6 md:px-16 py-16 flex flex-col gap-14 bg-gray-100">
      <h2 className="text-[39px] font-normal text-center">Featured Properties</h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {properties.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-[0_4px_18px_rgba(0,0,0,0.10)]
            overflow-hidden border border-gray-200 
            w-[97%] mx-auto pb-3"
          >
            {/* HEADER */}
            <div className="flex justify-between items-start px-6 pt-6 pb-3">
              <div>
                <h2 className="text-[26px] font-normal text-gray-900">{p.title}</h2>
                <div className="flex items-center gap-2 text-gray-600 text-[16px] mt-1">
                  <MapPin size={18} className="text-red-600" />
                  {p.location}
                </div>
              </div>

              {p.verified && (
                <div className="bg-[#c10f0f] text-white text-[12px] px-4 py-[6px] rounded-full font-medium shadow-[0_3px_8px_rgba(255,90,90,0.4)]">
                  Verified
                </div>
              )}
            </div>

            {/* IMAGE + ICONS */}
            <div className="relative">
              <Image
                src={p.img}
                width={700}
                height={500}
                alt={p.title}
                className="w-full h-[270px] object-cover"
              />

              <button className="absolute top-4 right-4 bg-gray-500 backdrop-blur-md p-3 rounded-full shadow-md">
                <Send size={17} className="text-white" />
              </button>

              <button className="absolute top-[60px] right-4 bg-gray-500 backdrop-blur-md p-3 rounded-full shadow-md">
                <Heart size={17} className="text-white" />
              </button>

              {/* DOTS */}
              <div className="absolute bottom-[90px] w-full flex justify-center gap-2 z-20">
                <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              </div>

              {/* GLASS BAR */}
              <div
                className="
                absolute bottom-0 left-0 w-full
                border-t border-white  bg-white/20  backdrop-blur-4xl
                flex justify-between items-center
                px-6 py-3
                z-10
                shadow-[inset_0_8px_20px_rgba(255,255,255,0.18)]
              "
              >
                <span className="bg-yellow-200 px-5 py-[4px] text-[14px] font-normal text-gray-700 border border-yellow-200/40 rounded-full">
                  {p.tag}
                </span>

                <button className="text-red-600 flex items-center gap-1 border px-4 py-[6px] text-[14px] bg-white backdrop-blur-md font-medium rounded-md">
                  <Plus size={15} /> Compare
                </button>
              </div>
            </div>

            {/* COST + ROI */}
            <div className="flex justify-between px-6 py-6 items-start">
              <div className="text-[18px] leading-9 text-gray-700">
                <p>
                  Cost: <span className="font-bold text-gray-900">{p.cost}</span>
                </p>
                <p>
                  Annual Rent:
                  <span className="font-bold text-gray-900"> {p.rent}</span>
                </p>
                <p>
                  Tenure Left:
                  <span className="font-bold text-gray-900"> {p.tenure}</span>
                </p>
              </div>

              <div className="bg-white shadow-[0_3px_12px_rgba(0,0,0,0.12)] px-3 py-2 rounded-xl text-center">
                <p className="text-[20px] font-bold text-gray-700">ROI</p>
                <p className="text-[24px] font-bold text-red-600 mt-1">{p.roi}</p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="px-6 pb-3 flex justify-center gap-4">
              <button className="px-5 py-2 rounded-lg border-2 border-gray-400 text-gray-800 shadow-sm text-[16px] hover:bg-gray-100">
                View
              </button>
              <button className="px-7 py-2 rounded-lg bg-red-600 text-white shadow-md text-[16px] hover:bg-red-700">
                Enquire
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-red-600 text-white px-10 py-3 rounded-md text-lg shadow hover:bg-red-700">
          Explore Properties
        </button>
      </div>
    </div>
  );
}

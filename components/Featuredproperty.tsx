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
      img: "/property.jpg",
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
      img: "/property.jpg",
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
      img: "/property.jpg",
    },
  ];

 
  const properties = [...baseProperties, ...baseProperties];

  return (
    <div className="w-full px-4 md:px-10 py-12 flex flex-col gap-10 bg-gray-100">

      {/* Heading */}
      <h2 className="text-4xl font-normal text-center mt-12">Featured Properties</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.map((p, i) => (
          <PropertyCard key={i} data={p} />
        ))}
      </div>

      {/* Explore Button */}
      <div className="flex justify-center pt-4">
        <button className="bg-red-600 text-white px-10 py-3 rounded-xl text-lg shadow hover:bg-red-600 transition">
          Explore Properties
        </button>
      </div>

    </div>
  );
}

function PropertyCard({ data }: { data: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_18px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-200 w-full">

      {/* Header */}
      <div className="flex justify-between items-center px-5 pt-4 pb-2">
        <div>
          <h2 className="text-xl font-normal">{data.title}</h2>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MapPin size={16} /> {data.location}
          </div>
        </div>

        {data.verified && (
          <div className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
            Verified
          </div>
        )}
      </div>

      {/* Image */}
      <div className="relative mt-2">
        <Image
          src={data.img}
          alt={data.title}
          width={600}
          height={400}
          className="w-full h-[220px] object-cover"
        />

        {/* Icons */}
        <button className="absolute top-4 right-4 bg-gray-700 p-2 rounded-full shadow">
          <Send size={17} className="text-white" />
        </button>

        <button className="absolute top-[58px] right-4 bg-gray-700 p-2 rounded-full shadow">
          <Heart size={17} className="text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* Tag + Compare */}
      <div className="flex justify-between items-center px-5 py-2 border-b">
        <span className="bg-yellow-100 text-gray-800 px-4 py-1 rounded-full text-xs font-medium">
          {data.tag}
        </span>

        <button className="text-red-600 flex items-center gap-1 border border-red-600 px-3 py-1 rounded-lg text-sm">
          <Plus size={14} /> Compare
        </button>
      </div>

      {/* Cost, Rent, Tenure + ROI */}
      <div className="flex px-5 py-4 justify-between items-start">

        {/* Left stacked info */}
        <div className="flex flex-col text-sm leading-6">
          <p className="text-gray-600">
            Cost: <span className="font-semibold text-gray-900">{data.cost}</span>
          </p>

          <p className="text-gray-600 mt-1">
            Annual Rent:{" "}
            <span className="font-semibold text-gray-900">{data.rent}</span>
          </p>

          <p className="text-gray-600 mt-1">
            Tenure Left:{" "}
            <span className="font-semibold text-gray-900">{data.tenure}</span>
          </p>
        </div>

        {/* ROI Box */}
        <div className="bg-white shadow-[0_3px_12px_rgba(0,0,0,0.12)] px-6 py-4 rounded-2xl text-center">
          <p className="text-base font-semibold text-gray-700">ROI</p>
          <p className="text-xl font-bold text-red-600 mt-1">{data.roi}</p>
        </div>

      </div>

      {/* Buttons */}
      <div className="px-5 pb-4 flex justify-center gap-3">
        <button className="px-7 py-2 rounded-lg border text-gray-800 shadow-sm text-sm">
          View
        </button>

        <button className="px-7 py-2 rounded-lg bg-red-600 text-white shadow text-sm">
          Enquire
        </button>
      </div>

    </div>
  );
}

"use client";

import Image from "next/image";
import { ShieldCheck, LineChart, Wallet, Handshake } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Platform Verified Every property authenticated",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    icon: LineChart,
    title: "12-18% Returns Guaranteed rental income",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    icon: Wallet,
    title: "Pre-Leased Only Immediate cash flow",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    icon: Handshake,
    title: "Premium Tenants Corporate & MNC leases",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
];

export default function WhyChoose() {
  return (
    <section className="w-full mt-40 mb-20">

      {/* HEADING */}
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-5xl font-normal text-gray-900 mb-6">
          Why choose PreLeaseGrid
        </h2>
        <p className="text-gray-600 text-xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="mt-20 flex justify-center items-start gap-32 px-4">

        {/* LEFT IMAGE (shifted more LEFT) */}
        <div className="relative w-[560px] h-[620px] -ml-24">
          <Image
            src="/images/whychoose.png"
            alt="Why Choose Illustration"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT FEATURES */}
        <div className="flex flex-col gap-14 w-[600px]">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex items-start gap-6">

                {/* ICON BOX */}
                <div className="w-14 h-14 bg-red-600 rounded-md flex items-center justify-center flex-shrink-0">
                  <Icon className="text-white w-7 h-7" />
                </div>

                {/* TEXT BLOCK */}
                <div className="flex-1 pr-6">
                  <h3 className="text-2xl font-semibold text-gray-900 leading-snug whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed mt-3">
                    {item.desc}
                  </p>

                  {/* DIVIDER */}
                  {index < features.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-300 mt-6" />
                  )}
                </div>
              </div>
            );
          })}

          {/* BUTTON */}
          <div className="pt-4">
            <button className="bg-red-600 text-white text-lg font-semibold px-10 py-3 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:bg-red-700 transition">
              Explore more
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

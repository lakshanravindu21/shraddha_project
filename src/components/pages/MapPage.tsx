"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Reusable components
import BlackHeader from "../BlackHeader";
import PureMap from "../PureMap";
import Footer from "../Footer";
import SearchBox from "../SearchBox"; 

// Banner image
import mapBanner from "../asserts/images/contact banner.jpg";

// Dynamically import Map to avoid SSR issues
import dynamic from "next/dynamic";

// Import Map from the same components directory
const Map = dynamic(() => import("../Map"), { ssr: false });

// Temple images (replace with your actual paths)
import temple1 from "../asserts/images/temple1.jpg";
import temple2 from "../asserts/images/temple2.jpg";
import temple3 from "../asserts/images/temple3.jpg";
import temple4 from "../asserts/images/temple4.jpg";

const temples = [
  {
    id: 1,
    title: "FEEL THE RHYTHM OF THE CITY",
    desc: "One of the best ways to feel the rhythm of the city is through its temples. Each one tells a story.",
    img: temple1,
  },
  {
    id: 2,
    title: "SUITES THAT ALLOW YOU TO LIVE YOUR DREAMS",
    desc: "If you’re looking for peace, temples allow you to reflect and recharge your spirit.",
    img: temple2,
  },
  {
    id: 3,
    title: "5 STYLING TIPS TO HELP YOU SELL YOUR HOME",
    desc: "Temples bring serenity, a timeless reminder of spiritual heritage.",
    img: temple3,
  },
  {
    id: 4,
    title: "5 STYLING TIPS TO HELP YOU SELL YOUR HOME",
    desc: "Sacred spaces create balance and connection with culture and history.",
    img: temple4,
  },
  {
    id: 5,
    title: "FEEL THE RHYTHM OF THE CITY",
    desc: "One of the best ways to feel the rhythm of the city is through its temples. Each one tells a story.",
    img: temple1,
  },
  {
    id: 6,
    title: "SUITES THAT ALLOW YOU TO LIVE YOUR DREAMS",
    desc: "If you’re looking for peace, temples allow you to reflect and recharge your spirit.",
    img: temple2,
  },
  {
    id: 7,
    title: "5 STYLING TIPS TO HELP YOU SELL YOUR HOME",
    desc: "Temples bring serenity, a timeless reminder of spiritual heritage.",
    img: temple3,
  },
  {
    id: 8,
    title: "5 STYLING TIPS TO HELP YOU SELL YOUR HOME",
    desc: "Sacred spaces create balance and connection with culture and history.",
    img: temple4,
  },
];

const MapPage = () => {
  // Example callback when SearchBox runs a search
  const handleSearch = (searchData: { name: string; state: string; location: string }) => {
    console.log("Search Data:", searchData);
    // Later: filter temples or call API with this searchData
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <BlackHeader />

      {/* Banner */}
      <div className="relative w-full h-[300px] md:h-[550px]">
        <Image
          src={mapBanner}
          alt="Map Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold"></h1>
        </div>
      </div>
      
      {/* 🔍 Search Section (new) */}
      <div className="flex justify-center px-6 md:px-12 mt-8">
        <SearchBox onSearch={handleSearch} />
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 px-6 md:px-12">
        <nav className="text-gray-600 text-sm">
          <Link href="/" className="hover:text-orange-500">
            HOME
          </Link>{" "}
          <span className="mx-2">&gt;</span>
          <span className="text-orange-500 font-semibold">MAP</span>
        </nav>
      </div>
 
      {/* Map Section */}
      <div className="flex-1 p-4">
        <Map />
      </div>

      {/* Temples Section */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <h2 className="text-center text-3xl font-bold mb-10">Temples</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {temples.map((temple) => (
            <div
              key={temple.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-80">
                <Image
                  src={temple.img}
                  alt={temple.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-2">{temple.title}</h3>
                <p className="text-sm text-gray-600 mb-3 flex-grow">
                  {temple.desc}
                </p>
                <div className="mt-auto">
                  <Link
                    href="#"
                    className="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More button */}
        <div className="text-center mt-12">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-300">
            SEE MORE
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MapPage;

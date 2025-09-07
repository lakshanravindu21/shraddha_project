"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import About from "../About";
import Blog from "../Blog";
import ContactUs from "../ContactUs";
import Feedback from "../Feedback";
import Footer from "../Footer";
import MostPopularTeamples from "../MostPopularTeamples";

// ✅ Dynamically import Map to fix "window is not defined"
const Map = dynamic(() => import("../Map"), { ssr: false });

// ✅ Dynamically import Hero to avoid hydration mismatch
const Hero = dynamic(() => import("../Hero"), { ssr: false });

// Search data interface
interface SearchData {
  name: string;
  state: string;
  location: string;
}

export default function Home() {
  const [searchData, setSearchData] = useState<SearchData | null>(null);

  // Handle search from Hero component
  const handleSearch = (data: SearchData) => {
    setSearchData(data);
    console.log("Search applied:", data);
  };

  return (
    <div className="bg-white m-0 p-0 text-black">
      <Hero onSearch={handleSearch} />
      <About />
      <MostPopularTeamples />
      {/* ✅ Map now loads client-side only */}
      <Map searchFilters={searchData} />
      <Blog />
      <Feedback />
      <ContactUs />
      <Footer />
    </div>
  );
}

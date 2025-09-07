"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image"; // ✅ Next.js image handling
import heroImg from "../components/asserts/images/heroImg.jpg";
import Header from "./Header";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

// Temple data for search functionality
const templeData = {
  states: [
    "Alabama", "Alaska", "Arizona", "California", "Colorado", "Connecticut", "Florida",
    "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Louisiana", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Missouri", "Montana", "Nebraska",
    "Nevada", "New Mexico", "New York", "North Carolina", "Ohio", "Oklahoma",
    "Oregon", "Pennsylvania", "South Carolina", "Tennessee", "Texas", "Utah",
    "Virginia", "Washington", "West Virginia", "Wyoming"
  ],
  templeNames: [
    "Salt Lake Temple", "Los Angeles California Temple", "Mesa Arizona Temple",
    "Idaho Falls Idaho Temple", "Laie Hawaii Temple", "Logan Utah Temple",
    "Manti Utah Temple", "St. George Utah Temple", "Oakland California Temple",
    "Seattle Washington Temple", "Las Vegas Nevada Temple", "Denver Colorado Temple",
    "Atlanta Georgia Temple", "Washington D.C. Temple", "Chicago Illinois Temple",
    "Dallas Texas Temple", "Houston Texas Temple", "Portland Oregon Temple",
    "San Diego California Temple", "Boston Massachusetts Temple"
  ],
  locations: [
    "Salt Lake City", "Los Angeles", "Mesa", "Idaho Falls", "Laie", "Logan",
    "Manti", "St. George", "Oakland", "Seattle", "Las Vegas", "Denver",
    "Atlanta", "Kensington", "Glenview", "Dallas", "Houston", "Lake Oswego",
    "San Diego", "Belmont"
  ]
};

interface HeroProps {
  onSearch?: (searchData: {
    name: string;
    state: string;
    location: string;
  }) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [selectedName, setSelectedName] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [nameSuggestions, setNameSuggestions] = useState<string[]>([]);
  const [stateSuggestions, setStateSuggestions] = useState<string[]>([]);
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);

  // ✅ Suggestions logic
  useEffect(() => {
    setNameSuggestions(
      selectedName
        ? templeData.templeNames
            .filter((n) => n.toLowerCase().includes(selectedName.toLowerCase()))
            .slice(0, 5)
        : []
    );
  }, [selectedName]);

  useEffect(() => {
    setStateSuggestions(
      selectedState
        ? templeData.states
            .filter((s) => s.toLowerCase().includes(selectedState.toLowerCase()))
            .slice(0, 5)
        : []
    );
  }, [selectedState]);

  useEffect(() => {
    setLocationSuggestions(
      selectedLocation
        ? templeData.locations
            .filter((l) => l.toLowerCase().includes(selectedLocation.toLowerCase()))
            .slice(0, 5)
        : []
    );
  }, [selectedLocation]);

  const handleSearch = () => {
    const searchData = {
      name: selectedName,
      state: selectedState,
      location: selectedLocation,
    };

    if (onSearch) {
      onSearch(searchData);
    }

    const mapSection = document.getElementById("map");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const clearSearch = () => {
    setSelectedName("");
    setSelectedState("");
    setSelectedLocation("");
  };

  const handleExploreMap = () => {
    const mapSection = document.getElementById("map");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${heroImg.src})`, // ✅ correct usage
        minHeight: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="relative text-white pt-[12px] sm:pt-[34px] px-[15px] sm:px-[45px] min-h-screen pb-[120px] sm:pb-[160px] lg:pb-[180px]"
    >
      <Header />

      {/* Hero Title + Button */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ms-0 md:ms-9 items-center h-full mb-6 sm:mb-0 sm:mt-28">
        <div>
          <h6 className="font-bold text-[32px] sm:text-[48px] lg:text-[64px] leading-tight">
            Explore Latter-day Saint Temples Across the United States
          </h6>
          <p className="text-[16px] sm:text-[18px] lg:text-[22px] mt-3">
            Lorem ipsum dolor sit amet consectetur. Amet risus rhoncus sodales
            vulputate arcu. Erat mi dolor vitae in. Consequat pellentesque sed
            vitae purus erat id in pretium. Sed cras fringilla lacinia tortor
            diam pretium. Ipsum amet faucibus tortor vulputate elementum tortor e
          </p>
          <button
            onClick={handleExploreMap}
            className="bg-[#191D23] text-[14px] sm:text-[16px] px-6 sm:px-9.5 mt-7 py-2.5 sm:py-3.5 rounded-[25px] hover:bg-[#2A2F35] transition-colors duration-200"
          >
            Explore the Map
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white rounded-xl shadow-lg px-4 sm:px-8 py-4 sm:py-6 flex flex-col gap-4 items-center w-full sm:w-auto max-w-6xl z-20 sm:absolute sm:left-1/2 sm:bottom-0 sm:translate-x-[-50%] sm:translate-y-[50%]">
        {/* Search Header */}
        <div className="w-full flex justify-between items-center text-black">
          <h3 className="text-lg font-semibold">Find Your Temple</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={clearSearch}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
            >
              {showAdvanced ? "Simple" : "Advanced"}
            </button>
          </div>
        </div>

        {/* Search Inputs */}
        <div className="flex flex-col sm:flex-row items-center text-black gap-2 sm:gap-4 w-full">
          {/* Temple Name */}
          <div className="relative w-full sm:w-[200px] md:w-[250px] lg:w-[314px]">
            <select
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
              className="w-full rounded-[6px] p-2 text-[16px] bg-[#F6F6F6] border-2 border-transparent focus:border-blue-400 focus:bg-white transition-all mb-2 sm:mb-0"
            >
              <option value="">Temple Name</option>
              {templeData.templeNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {/* State */}
          <div className="relative w-full sm:w-[200px] md:w-[250px] lg:w-[314px]">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full rounded-[6px] p-2 text-[16px] bg-[#F6F6F6] border-2 border-transparent focus:border-blue-400 focus:bg-white transition-all mb-2 sm:mb-0"
            >
              <option value="">State</option>
              {templeData.states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div className="relative w-full sm:w-[200px] md:w-[250px] lg:w-[314px]">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full rounded-[6px] p-2 text-[16px] bg-[#F6F6F6] border-2 border-transparent focus:border-blue-400 focus:bg-white transition-all mb-2 sm:mb-0"
            >
              <option value="">Location</option>
              {templeData.locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Advanced Toggle */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`p-2 rounded-[6px] transition-colors mb-2 sm:mb-0 ${
              showAdvanced
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <HiOutlineAdjustmentsHorizontal size={22} />
          </button>

          {/* Search Btn */}
          <button
            onClick={handleSearch}
            className="flex items-center bg-[#191D23] hover:bg-[#2A2F35] text-white p-2 rounded-[6px] w-full sm:w-auto transition-colors duration-200 px-4"
          >
            <IoIosSearch className="me-1" size={22} />
            Search
          </button>
        </div>

        {/* Advanced Filters */}
        {showAdvanced && (
          <div className="w-full border-t pt-4 text-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Temple Status
                </label>
                <select className="w-full rounded-[6px] p-2 text-[14px] bg-[#F6F6F6]">
                  <option value="">Any Status</option>
                  <option value="operating">Operating</option>
                  <option value="construction">Under Construction</option>
                  <option value="announced">Announced</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dedication Year
                </label>
                <select className="w-full rounded-[6px] p-2 text-[14px] bg-[#F6F6F6]">
                  <option value="">Any Year</option>
                  <option value="1800s">1800s</option>
                  <option value="1900-1950">1900-1950</option>
                  <option value="1950-2000">1950-2000</option>
                  <option value="2000+">2000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Distance
                </label>
                <select className="w-full rounded-[6px] p-2 text-[14px] bg-[#F6F6F6]">
                  <option value="">Any Distance</option>
                  <option value="25">Within 25 miles</option>
                  <option value="50">Within 50 miles</option>
                  <option value="100">Within 100 miles</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Preview Criteria */}
        {(selectedName || selectedState || selectedLocation) && (
          <div className="w-full bg-blue-50 border border-blue-200 rounded-lg p-3 text-black">
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span className="font-medium">Search criteria:</span>
                {selectedName && (
                  <span className="ml-1 bg-blue-100 px-2 py-1 rounded text-xs">
                    {selectedName}
                  </span>
                )}
                {selectedState && (
                  <span className="ml-1 bg-green-100 px-2 py-1 rounded text-xs">
                    {selectedState}
                  </span>
                )}
                {selectedLocation && (
                  <span className="ml-1 bg-purple-100 px-2 py-1 rounded text-xs">
                    {selectedLocation}
                  </span>
                )}
              </div>
              <button
                onClick={handleSearch}
                className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

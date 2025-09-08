"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

// Temple data (you can move this to a separate file if needed)
const templeData = {
  states: ["Alabama", "Alaska", "Arizona", "California", "Colorado", "Connecticut", "Florida"],
  templeNames: ["Salt Lake Temple", "Los Angeles California Temple", "Mesa Arizona Temple"],
  locations: ["Salt Lake City", "Los Angeles", "Mesa"],
};

interface SearchBoxProps {
  onSearch?: (searchData: { name: string; state: string; location: string }) => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [selectedName, setSelectedName] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSearch = () => {
    const searchData = { name: selectedName, state: selectedState, location: selectedLocation };
    if (onSearch) onSearch(searchData);
  };

  const clearSearch = () => {
    setSelectedName("");
    setSelectedState("");
    setSelectedLocation("");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg px-4 sm:px-8 py-4 sm:py-6 flex flex-col gap-4 items-center w-full sm:w-auto max-w-6xl">
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
        <select
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
          className="w-full sm:w-[200px] md:w-[250px] lg:w-[314px] rounded-[6px] p-2 text-[16px] bg-[#F6F6F6]"
        >
          <option value="">Temple Name</option>
          {templeData.templeNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>

        {/* State */}
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="w-full sm:w-[200px] md:w-[250px] lg:w-[314px] rounded-[6px] p-2 text-[16px] bg-[#F6F6F6]"
        >
          <option value="">State</option>
          {templeData.states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        {/* Location */}
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full sm:w-[200px] md:w-[250px] lg:w-[314px] rounded-[6px] p-2 text-[16px] bg-[#F6F6F6]"
        >
          <option value="">Location</option>
          {templeData.locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        {/* Advanced Toggle */}
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className={`p-2 rounded-[6px] transition-colors ${
            showAdvanced ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:text-gray-800"
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Temple Status</label>
              <select className="w-full rounded-[6px] p-2 text-[14px] bg-[#F6F6F6]">
                <option value="">Any Status</option>
                <option value="operating">Operating</option>
                <option value="construction">Under Construction</option>
                <option value="announced">Announced</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dedication Year</label>
              <select className="w-full rounded-[6px] p-2 text-[14px] bg-[#F6F6F6]">
                <option value="">Any Year</option>
                <option value="1800s">1800s</option>
                <option value="1900-1950">1900-1950</option>
                <option value="1950-2000">1950-2000</option>
                <option value="2000+">2000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Distance</label>
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
    </div>
  );
}

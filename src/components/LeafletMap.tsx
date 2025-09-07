"use client";

import { useEffect } from "react";

const LeafletMap = () => {
  useEffect(() => {
    // Import Leaflet and omnivore only in browser
    const L = require("leaflet");
    const omnivore = require("leaflet-omnivore");
    require("leaflet/dist/leaflet.css");

    // Create map
    const map = L.map("leaflet-map").setView([37.8, -96], 4);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Add KML layer
    omnivore.kml("/kml/cb_2024_us_state_500k.kml").addTo(map);

    // Cleanup on unmount
    return () => map.remove();
  }, []);

  return <div id="leaflet-map" className="w-full h-[600px] rounded-xl shadow-lg" />;
};

export default LeafletMap;

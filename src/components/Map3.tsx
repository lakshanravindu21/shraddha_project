"use client";

import React, { useState, useMemo, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import omnivore from "leaflet-omnivore";
import { motion, AnimatePresence } from "framer-motion";
import "leaflet/dist/leaflet.css";

interface SearchFilters {
  name: string;
  state: string;
  location: string;
}

interface Temple {
  id: number;
  name: string;
  city: string;
  description: string;
  history?: string;
  image: string;
  coordinates: [number, number];
}

interface MapProps {
  searchFilters?: SearchFilters | null;
}

const templeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2331/2331945.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Map: React.FC<MapProps & { width?: number; height?: number }> = ({ searchFilters = null, width = 400, height = 300 }) => {
  const [selectedTemple, setSelectedTemple] = useState<Temple | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loadingKML, setLoadingKML] = useState(true);
  const [kmlError, setKmlError] = useState<string | null>(null);

  const statesWithTemples: Record<string, { temples: Temple[] }> = {
    Washington: {
      temples: [
        {
          id: 1,
          name: "Seattle Buddhist Temple",
          city: "Seattle",
          description:
            "A historic Jodo Shinshu temple established in 1901, serving the Seattle community.",
          history:
            "One of the earliest Buddhist temples in the Pacific Northwest, playing a key role in Japanese-American history.",
          image: "/temple-images/seattle-buddhist.jpg",
          coordinates: [47.61, -122.33],
        },
        {
          id: 3,
          name: "Tibetan Buddhist Center",
          city: "Seattle",
          description: "Tibetan meditation and community center.",
          image: "/temple-images/seattle-tibetan.jpg",
          coordinates: [47.62, -122.35],
        },
      ],
    },
    California: {
      temples: [
        {
          id: 2,
          name: "San Francisco Buddhist Church",
          city: "San Francisco",
          description:
            "Established in 1898, this temple is central to Japanese-American Buddhist history.",
          history:
            "The temple supported the Japanese-American community during WWII and continues to serve diverse followers today.",
          image: "/temple-images/sf-buddhist.jpg",
          coordinates: [37.77, -122.42],
        },
        {
          id: 4,
          name: "Hsi Lai Temple",
          city: "Hacienda Heights",
          description:
            "Largest Buddhist temple in North America, dedicated to Fo Guang Shan Buddhism.",
          image: "/temple-images/hsi-lai.jpg",
          coordinates: [34.03, -118.06],
        },
        {
          id: 5,
          name: "San Jose Buddhist Church Betsuin",
          city: "San Jose",
          description:
            "Community-focused Jodo Shinshu temple established in 1901.",
          image: "/temple-images/sj-buddhist.jpg",
          coordinates: [37.33, -121.89],
        },
      ],
    },
    NewYork: {
      temples: [
        {
          id: 6,
          name: "Chuang Yen Monastery",
          city: "Carmel",
          description:
            "A serene Buddhist monastery with the largest indoor Buddha statue in the Western Hemisphere.",
          image: "/temple-images/chuang-yen.jpg",
          coordinates: [41.46, -73.7],
        },
      ],
    },
    Illinois: {
      temples: [
        {
          id: 7,
          name: "Dai Bai Zan Cho Bo Zen Ji",
          city: "Chicago",
          description:
            "Zen Buddhist temple offering meditation and cultural events.",
          image: "/temple-images/chicago-zen.jpg",
          coordinates: [41.88, -87.63],
        },
      ],
    },
  };

  const filteredStates = useMemo(() => {
    return Object.keys(statesWithTemples).filter((state) =>
      statesWithTemples[state].temples.some((temple) => {
        const nameMatch = searchFilters?.name
          ? temple.name.toLowerCase().includes(searchFilters.name.toLowerCase())
          : true;
        const stateMatch = searchFilters?.state
          ? state.toLowerCase().includes(searchFilters.state.toLowerCase())
          : true;
        const locationMatch = searchFilters?.location
          ? temple.city.toLowerCase().includes(searchFilters.location.toLowerCase())
          : true;
        return nameMatch && stateMatch && locationMatch;
      })
    );
  }, [searchFilters]);

  const handleTempleClick = (temple: Temple) => {
    setSelectedTemple(temple);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTemple(null);
  };

  const FlyToTemple: React.FC<{ coordinates: [number, number] }> = ({ coordinates }) => {
    const map = useMap();
    useEffect(() => {
      if (coordinates && coordinates.length === 2) {
        map.flyTo(coordinates, 10, { duration: 1.2 });
      }
    }, [coordinates, map]);
    return null;
  };

  const KMLLayer: React.FC = () => {
    const map = useMap();

    useEffect(() => {
      let kmlLayer: L.Layer | null = null;

      setLoadingKML(true);
      setKmlError(null);

      try {
        kmlLayer = omnivore.kml("/cb_2024_us_state_500k.kml")
          .on("ready", function () {
            setLoadingKML(false);
            if (kmlLayer) {
              map.fitBounds((kmlLayer as any).getBounds(), {
                padding: [20, 20],
                maxZoom: 5,
              });
            }
          })
          .on("error", function () {
            setLoadingKML(false);
            setKmlError("Failed to load KML boundaries.");
          });

        (kmlLayer as any).setStyle({
          color: "#1d4ed8",
          weight: 2,
          fillColor: "#3b82f6",
          fillOpacity: 0.15,
        });

        kmlLayer.addTo(map);
      } catch (err) {
        console.error("KML Layer Error:", err);
        setLoadingKML(false);
        setKmlError("Error loading KML file.");
      }

      return () => {
        if (kmlLayer && map.hasLayer(kmlLayer)) {
          map.removeLayer(kmlLayer);
        }
      };
    }, [map]);

    return null;
  };

  const usaBounds: L.LatLngBoundsExpression = [
    [25, -124],
    [49, -67],
  ];

  return (
    <section id="map">
      {!showModal && (
        <div style={{ width, height }}>
          <MapContainer
            bounds={usaBounds}
            scrollWheelZoom
            style={{ width: "100%", height: "100%" }}
            className="leaflet-container"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <KMLLayer />
            {filteredStates.map((state) =>
              statesWithTemples[state].temples.map((temple) => (
                <Marker
                  key={temple.id}
                  position={temple.coordinates}
                  icon={templeIcon}
                  eventHandlers={{
                    click: () => handleTempleClick(temple),
                  }}
                />
              ))
            )}
            {selectedTemple && <FlyToTemple coordinates={selectedTemple.coordinates} />}
          </MapContainer>
        </div>
      )}
      <AnimatePresence>
        {showModal && selectedTemple && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] border border-gray-100"
              initial={{ scale: 0.8 }}
              animate={{
                scale: 1,
                transition: { type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.5 },
              }}
              exit={{
                scale: 0.8,
                transition: { type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.4 },
              }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl transition-colors duration-200 z-10"
                aria-label="Close modal"
              >
                ✕
              </button>
              <img
                src={selectedTemple.image || "https://via.placeholder.com/800x400"}
                alt={selectedTemple.name}
                className="w-full h-72 sm:h-96 object-cover rounded-lg mb-6 shadow-lg hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/800x400?text=Temple+Image";
                }}
              />
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-3 text-gray-900">
                {selectedTemple.name}
              </h3>
              <p className="text-gray-700 font-semibold mb-2">{selectedTemple.city}</p>
              <p className="text-gray-600 mb-3 text-lg">{selectedTemple.description}</p>
              {selectedTemple.history && (
                <p className="text-gray-500 text-sm italic">{selectedTemple.history}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Map;

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import * as omnivore from "leaflet-omnivore";

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

interface PureMapProps {
  searchFilters?: SearchFilters | null;
  onTempleClick?: (temple: Temple) => void; // callback for click
}

const templeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2331/2331945.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const statesWithTemples: Record<string, { temples: Temple[] }> = {
  Washington: {
    temples: [
      {
        id: 1,
        name: "Seattle Buddhist Temple",
        city: "Seattle",
        description: "A historic Jodo Shinshu temple established in 1901.",
        history:
          "One of the earliest Buddhist temples in the Pacific Northwest.",
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
          "The temple supported the Japanese-American community during WWII.",
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
    ],
  },
};

const FlyToTemple: React.FC<{ coordinates: [number, number] }> = ({
  coordinates,
}) => {
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

    try {
      kmlLayer = omnivore.kml("/cb_2024_us_state_500k.kml").on(
        "ready",
        function () {
          if (kmlLayer) {
            map.fitBounds((kmlLayer as any).getBounds(), {
              padding: [20, 20],
              maxZoom: 5,
            });
          }
        }
      );

      (kmlLayer as any).setStyle({
        color: "#1d4ed8",
        weight: 2,
        fillColor: "#3b82f6",
        fillOpacity: 0.15,
      });

      kmlLayer.addTo(map);
    } catch (err) {
      console.error("KML Layer Error:", err);
    }

    return () => {
      if (kmlLayer && map.hasLayer(kmlLayer)) {
        map.removeLayer(kmlLayer);
      }
    };
  }, [map]);

  return null;
};

const PureMap: React.FC<PureMapProps> = ({ searchFilters = null, onTempleClick }) => {
  const [selectedTemple, setSelectedTemple] = useState<Temple | null>(null);

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

  const usaBounds: L.LatLngBoundsExpression = [
    [25, -124],
    [49, -67],
  ];

  return (
    <MapContainer
      bounds={usaBounds}
      scrollWheelZoom
      className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg"
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
              click: () => {
                setSelectedTemple(temple);
                onTempleClick?.(temple);
              },
            }}
          />
        ))
      )}
      {selectedTemple && <FlyToTemple coordinates={selectedTemple.coordinates} />}
    </MapContainer>
  );
};

export default PureMap;

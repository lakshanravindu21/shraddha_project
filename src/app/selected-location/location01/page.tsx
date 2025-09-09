"use client";


import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import React, { useState } from "react";
import Map3 from "../../../components/Map3";

export default function Page() {
  const [showPhotosModal, setShowPhotosModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const galleryImages = [
    "/mostPopularImg-2.jpg",
    "/temple-images/seattle-buddhist.jpg",
    "/temple-images/chuang-yen.jpg",
    "/temple-images/hsi-lai.jpg",
    "/temple-images/sf-buddhist.jpg",
    "/temple-images/sj-buddhist.jpg",
  ];

  return (
    <div className="bg-[#111] text-white min-h-screen font-sans p-6">
      <Header />
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-[2] bg-[#181818] rounded-2xl p-6 min-w-[600px] max-lg:min-w-0">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <button className="bg-[#ffe066] text-[#222] rounded-lg px-4 py-2 font-bold">
              &larr; Back
            </button>
            <h1 className="text-2xl font-semibold text-[#ffe066]">
              BAPS Swaminarayan Akshardham USA
            </h1>
            <span className="ml-auto bg-green-500 text-white rounded-md px-3 py-1 text-sm">
              Open
            </span>
          </div>

          {/* Main Image */}
          <div className="mb-6">
            <Image
              src="/temple.jpg"
              alt="Temple"
              width={1155}
              height={738}
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Info Row */}
          <div className="flex gap-12 mb-6 flex-col md:flex-row">
            <div className="flex-1">
              <h3 className="text-[#ffe066] text-lg mb-2">Address</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>📍 112 N Main St</li>
                <li>Windsor, NJ 08561</li>
                <li>United States</li>
                <li>📞 (+1) 402-453-3406</li>
                <li>
                  <a href="#" className="text-[#ffe066] underline">
                    Street Map
                  </a>{" "}
                  -{" "}
                  <a href="#" className="text-[#ffe066] underline">
                    Nearby Hotels
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="text-[#ffe066] text-lg mb-2">Expertise</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>✔ Visitors’ center open to the public</li>
                <li>✔ Parking</li>
                <li>✔ Wi-Fi</li>
                <li>✖ NO patron housing available</li>
                <li>✖ NO arrival center available</li>
              </ul>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <a href="#" className="text-[#ffe066]">
              Description
            </a>
            <p className="text-gray-300 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec
              aliquet interdum. Massa bibendum tellus sed ultricies. Fermentum
              pharetra in lorem eget. Et imperdiet sed ultrices pulvinar
              ultrices enim. Duis fames neque pulvinar in feugiat gravida in.
              Diam adipiscing sed viverra mauris in lacus. Turpis dignissim
              tincidunt dui urna suspendisse elit consequat purus enim. Morbi
              mauris nunc sit aliquet. Nec aliquam consequat nulla accumsan enim
              ac ullamcorper. Ut pellentesque lectus auctor aenean urna...
            </p>
          </div>

          {/* Story */}
          <div>
            <a href="#" className="text-[#ffe066]">
              Story
            </a>
            <p className="text-gray-300 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec
              aliquet interdum. Massa bibendum tellus sed ultricies. Fermentum
              pharetra in lorem eget. Et imperdiet sed ultrices pulvinar
              ultrices enim. Duis fames neque pulvinar in feugiat gravida in.
              Diam adipiscing sed viverra mauris in lacus. Turpis dignissim
              tincidunt dui urna suspendisse elit consequat purus enim. Morbi
              mauris nunc sit aliquet. Nec aliquam consequat nulla accumsan enim
              ac ullamcorper...
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex-1 flex flex-col gap-6 min-w-[320px] max-lg:min-w-0">
          {/* Gallery */}
          <div className="bg-[#181818] rounded-2xl p-4">
            <Image
              src="/mostPopularImg-2.jpg"
              alt="Gallery Image"
              width={400}
              height={300}
              className="rounded-xl mb-2"
            />
            <button
              className="text-[#ffe066] text-sm underline cursor-pointer"
              onClick={() => setShowPhotosModal(true)}
            >
              Show all photos
            </button>
            {showPhotosModal && (
              <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl p-6 max-w-2xl w-full relative shadow-2xl flex flex-col gap-4">
                  <button
                    className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                    onClick={() => {
                      setShowPhotosModal(false);
                      setSelectedPhoto(null);
                    }}
                    aria-label="Close photos modal"
                  >
                    ✕
                  </button>
                  {selectedPhoto ? (
                    <div className="flex flex-col items-center gap-4">
                      <Image
                        src={selectedPhoto}
                        alt="Selected Photo"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover mb-2"
                      />
                      <button
                        className="text-blue-600 underline text-sm"
                        onClick={() => setSelectedPhoto(null)}
                      >
                        Back to gallery
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {galleryImages.map((img, i) => (
                        <button
                          key={i}
                          className="focus:outline-none"
                          onClick={() => setSelectedPhoto(img)}
                        >
                          <Image
                            src={img}
                            alt={`Gallery ${i+1}`}
                            width={300}
                            height={200}
                            className="rounded-lg object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Map */}
          {!showPhotosModal && (
            <div className="bg-[#181818] rounded-2xl p-4" style={{ width: 400, height: 300 }}>
              <Map3 width={400} height={300} />
            </div>
          )}

          {/* Nearby Temples */}
          <div className="bg-[#181818] rounded-2xl p-4">
            <h3 className="text-[#ffe066] text-lg mb-3">Nearby Temples</h3>
            <ul className="space-y-3">
              {[
                "/Division Road house 01.jpg",
                "/Division Road house 02.jpg",
                "/Division Road house 3.jpg",
                "/Division house 4.jpg",
              ].map((src, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-[#222] rounded-lg p-2 cursor-pointer"
                  onClick={() => window.location.href = "/map"}
                >
                  <Image
                    src={src.startsWith('/') ? src : `/${src}`}
                    alt="Nearby Temple"
                    width={48}
                    height={48}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <strong>Division Road house</strong>
                    <br />
                    <span className="text-sm text-gray">
                      Division Road, Windsor, NJ
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-[#181818] rounded-2xl p-4">
            <h3 className="text-[#ffe066] text-lg mb-3">Contact agent</h3>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/agent.jpg"
                alt="Agent"
                width={48}
                height={48}
                className="rounded-full object-cover bg-[#333]"
              />
              <div>
                <strong>Bhatu Black</strong>
                <br />
                (+57) 402-453-3406
                <br />
                <span className="text-sm">agent@templeinfo.net</span>
              </div>
            </div>

            <form className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Your name"
                required
                className="bg-[#222] rounded-md px-3 py-2 text-sm outline-none"
              />
              <input
                type="email"
                placeholder="Your mail"
                required
                className="bg-[#222] rounded-md px-3 py-2 text-sm outline-none"
              />
              <input
                type="tel"
                placeholder="Your phone"
                className="bg-[#222] rounded-md px-3 py-2 text-sm outline-none"
              />
              <textarea
                rows={3}
                placeholder="Your message"
                required
                className="bg-[#222] rounded-md px-3 py-2 text-sm outline-none"
              />
              <button
                type="submit"
                className="bg-[#298cff] rounded-lg py-2 font-bold"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

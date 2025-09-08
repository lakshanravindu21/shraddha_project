"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Already created components
import BlackHeader from "../BlackHeader";
import Footer from "../Footer";
import ContactUs from "../ContactUs";

// Banner image
import contactBanner from "../asserts/images/contact banner.jpg";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <BlackHeader />

      {/* Banner */}
      <div className="relative w-full h-[300px] md:h-[550px]">
        <Image
          src={contactBanner}
          alt="Contact Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 px-6 md:px-12">
        <nav className="text-gray-600 text-sm">
          <Link href="/" className="hover:text-orange-500">
            HOME
          </Link>{" "}
          <span className="mx-2">&gt;</span>
          <span className="text-orange-500 font-semibold">CONTACT US</span>
        </nav>
      </div>

      {/* Contact Section */}
      <main className="flex-grow">
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
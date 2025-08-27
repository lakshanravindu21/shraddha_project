

import React from 'react';
import image5 from '../components/asserts/images/blogImages/image (5).jpg';
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="text-white pt-10 pb-4 px-4 md:px-12" style={{ background: 'linear-gradient(90deg, #232526 0%, #414345 100%)' }}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
                    {/* Logo & Hours */}
                    <div className="md:w-1/5 flex flex-col items-start">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={image5.src} alt="Logo" className="w-12 h-12 rounded-full object-cover" />
                            <span className="text-2xl font-bold">Logo</span>
                        </div>
                        <div className="text-sm text-gray-300">
                            <div>Mon-Fri 08:00AM - 08:00PM</div>
                            <div className="mt-2">Sat-Sun 08:00AM - 08:00PM</div>
                        </div>
                    </div>
                    {/* Find Us */}
                    <div className="md:w-1/5">
                        <h4 className="font-semibold mb-3">Find Us</h4>
                        <div className="text-sm text-gray-300">
                            <div>8911 Tanglewood Ave.<br />Capitol Heights, MD 20743</div>
                            <div className="mt-2">(566) 237-4687</div>
                            <div className="mt-2">moinefou@hotmail.com</div>
                        </div>
                    </div>
                    {/* Property */}
                    <div className="md:w-1/5">
                        <h4 className="font-semibold mb-3">Property</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                            <li>Apartments</li>
                            <li>Villa's</li>
                            <li>Houses</li>
                            <li>Commercial</li>
                        </ul>
                    </div>
                    {/* Links */}
                    <div className="md:w-1/5">
                        <h4 className="font-semibold mb-3">Links</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                            <li>Home</li>
                            <li>About</li>
                            <li>Map</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div className="w-full md:w-1/3 lg:w-1/4 px-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Newsletter</h4>
                        <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter</p>

                        <form className="flex flex-col sm:flex-row items-center bg-gray-800 border border-gray-700 rounded-box overflow-hidden shadow-md">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="flex-grow w-full px-5 py-3 text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-6 py-3 text-white font-semibold bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>
                {/* Divider */}
                <hr className="mt-6 border-gray-600" />
                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 pt-0">
                    {/* <h6 className='my-2'>©Copyright Saddha Org 2025. Design by <span className="text-pink-400">Hansara Hettiarachchi</span></h6> */}
                    <h6 className='my-2'>©Copyright Saddha Org 2025. Design by <span className="text-pink-400">Fuchsius</span></h6>
                    <div className="flex gap-4 mt-3 md:mt-0">
                        {/* Social Icons with React Icons */}
                        <a href="#" className="hover:text-white"><FaFacebookF size={20} /></a>
                        <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
                        <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
                        <a href="#" className="hover:text-white"><FaTelegramPlane size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

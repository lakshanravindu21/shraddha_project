
import React from "react";

const ContactUs = () => {
    return (
        <section id="contact-us" className="bg-[#f7f7f7] rounded-2xl border border-[#FFD700] p-8 md:p-12 mx-auto my-8 max-w-[1641px] w-full shadow-sm">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side: Contact Info */}
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-400 mb-8">We are committed to processing the information in order to contact you and talk about your project. in order to contact you and talk about your project.</p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="text-orange-500">
                                {/* Email Icon */}
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
                            </span>
                            <span className="text-base text-gray-700">example@teamwebflow.com</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 mt-1">
                                {/* Location Icon */}
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.418 0-8-4.03-8-9a8 8 0 1 1 16 0c0 4.97-3.582 9-8 9z"/><circle cx="12" cy="12" r="3"/></svg>
                            </span>
                            <span className="text-base text-gray-700">4074 Ebert Summit Suite 375<br/>Lake Leonardchester</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-orange-500">
                                {/* Phone Icon */}
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.24.72 3.32a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.08.35 2.19.59 3.32.72A2 2 0 0 1 22 16.92z"/></svg>
                            </span>
                            <span className="text-base text-gray-700">+44 123 654 7890</span>
                        </div>
                    </div>
                </div>
                {/* Right Side: Contact Form */}
                <div className="md:w-1/2 flex items-center">
                    <form className="w-full space-y-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <input type="text" required placeholder="First Name *" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white" />
                            </div>
                            <div className="w-1/2">
                                <input type="text" required placeholder="Last Name *" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white" />
                            </div>
                        </div>
                        <input type="email" required placeholder="Email *" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white" />
                        <input type="text" required placeholder="Number *" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white" />
                        <textarea rows={4} placeholder="Message" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white resize-none" />
                        <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-black font-medium shadow hover:from-orange-400 hover:to-orange-700 transition">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;

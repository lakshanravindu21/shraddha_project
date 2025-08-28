import React from 'react'
import heroImg from "../components/asserts/images/heroImg.jpg";
import Header from './Header'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import { IoIosSearch } from 'react-icons/io';

export default function Hero() {
    return (
        <>

            <div style={{ backgroundImage: `url(${heroImg.src})`, minHeight: "100vh", backgroundPosition: 'center', backgroundSize: 'cover' }}
                className='relative text-white pt-[12px] sm:pt-[34px] px-[15px] sm:px-[45px] min-h-screen pb-[120px] sm:pb-[160px] lg:pb-[180px]'>
                <Header />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ms-0 md:ms-9 items-center h-full mb-6 sm:mb-0 sm:mt-28">
                    <div>
                        <h6 className='font-bold text-[32px] sm:text-[48px] lg:text-[64px] leading-tight'>
                            Explore Latter-day Saint Temples Across the United States
                        </h6>
                        <p className='text-[16px] sm:text-[18px] lg:text-[22px] mt-3'>
                            Lorem ipsum dolor sit amet consectetur. Amet risus rhoncus sodales vulputate arcu. Erat mi dolor vitae in.
                            Consequat pellentesque sed vitae purus erat id in pretium. Sed cras fringilla lacinia tortor diam pretium.
                            Ipsum amet faucibus tortor vulputate elementum tortor e
                        </p>
                        <button className='bg-[#191D23] text-[14px] sm:text-[16px] px-6 sm:px-9.5 mt-7 py-2.5 sm:py-3.5 rounded-[25px]'>Explore the Map</button>
                    </div>
                </div>
                {/* Overlayed input div at the end of hero image section */}
                <div
                    className="bg-white rounded-xl shadow-lg px-4 sm:px-8 py-4 sm:py-6 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center w-full sm:w-auto max-w-5xl z-20 sm:absolute sm:left-1/2 sm:bottom-0 sm:translate-x-[-50%] sm:translate-y-[50%]"
                >
                    <div className='flex flex-col sm:flex-row items-center text-black gap-1.5 w-full'>
                        <select className='rounded-[6px] p-2 text-[16px] w-full sm:w-[150px] md:w-[200px] lg:w-[314px] bg-[#F6F6F6] mb-2 sm:mb-0'>
                            <option value="0">Name</option>
                        </select>
                        <select className='rounded-[6px] p-2 text-[16px] w-full sm:w-[150px] md:w-[200px] lg:w-[314px] bg-[#F6F6F6] mb-2 sm:mb-0'>
                            <option value="0">State</option>
                        </select>
                        <select className='rounded-[6px] p-2 text-[16px] w-full sm:w-[150px] md:w-[200px] lg:w-[314px] bg-[#F6F6F6] mb-2 sm:mb-0'>
                            <option value="0">Location</option>
                        </select>
                        <HiOutlineAdjustmentsHorizontal size={22} className='mb-2 sm:mb-0' />
                        <button className='flex items-center bg-[#191D23] text-white p-2 rounded-[6px] w-full sm:w-auto'>
                            <IoIosSearch className='me-1' size={22} /> Search
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

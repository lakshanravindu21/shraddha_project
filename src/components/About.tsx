import heroImg from "../components/asserts/images/about.png";
import React from 'react';

export default function About() {
    return (
        <>
            <div id="about" className="lg:grid grid-cols-2 flex-row py-6 sm:mt-16 ">
                <div>
                    <div className="w-full flex mt-6">
                        {/* Left line and arrowhead (points left) */}
                        <div className="flex items-center justify-start ">
                            <div className="h-0.5 bg-[#FFC600] w-[34px] md:w-[36px] lg:w-[200px]" />
                            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-r-[15px] border-t-transparent border-b-transparent border-r-yellow-400" />
                        </div>
                        <h2 className="mx-8 text-4xl font-extrabold text-blue-900 ">About Us</h2>
                        {/* Right line and arrowhead (points right) */}
                        <div className="flex-1 flex items-center justify-start">
                            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[15px] border-t-transparent border-b-transparent border-l-yellow-400 -ml-2" />
                            <div className="h-0.5 bg-[#FFC600] w-full" />
                        </div>
                    </div>

                    <div className="ml-8.5 me-5 lg:ml-[200px] mt-8 leading-7 text-[16px]">
                        <p className="mb-2">Lorem ipsum dolor sit amet consectetur. Amet risus rhoncus sodales vulputate arcu. Erat mi dolor vitae in</p>
                        <p className="">
                            Consequat pellentesque sed vitae purus erat id in pretium. Sed cras fringilla lacinia tortor diam pretium. Ipsum amet faucibus tortor vulputate elementum tortor et dis pharetra. Rutrum amet diam pretium imperdiet elit sit.Lorem ipsum dolor sit amet consectetur. Amet risus rhoncus sodales vulputate arcu. Erat mi dolor vitae in. Consequat pellentesque sed vitae purus erat id in pretium. Sed cras fringilla lacinia tortor diam pretium. Ipsum amet faucibus tortor vulputate elementum tortor et dis pharetra. Rutrum amet diam pretium imperdiet elit sit.Lorem ipsum dolor sit amet consectetur.
                            Ipsum amet faucibus tortor vulputate elementum tortor et dis pharetra. Rutrum amet diam pretium imperdiet elit sit.Lorem ipsum dolor sit amet consectetur. </p>

                        <button className="border-2 mt-5 border-[#FFC600] p-3.5 font-bold bg-white text-blue-900 hover:bg-[#FFC600] transition">
                            Know More
                        </button>
                    </div>

                </div>
                <div className="w-fit lg:mr-[200px] mt-6 lg:mt-0">
                    <img src={heroImg.src} alt="" className=" " />
                </div>
                {/* <div className="">

                </div> */}
            </div>

        </>
    );
}

import React from 'react'
import image1 from '../components/asserts/images/blogImages/image (1).jpg'
import image2 from '../components/asserts/images/blogImages/image (2).jpg'
import image3 from '../components/asserts/images/blogImages/image (3).jpg'
import image4 from '../components/asserts/images/blogImages/image (4).jpg'
import image5 from '../components/asserts/images/blogImages/image (5).jpg'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { ImQuotesLeft } from 'react-icons/im'

export default function Feedback() {
    const feedbacks = [
        {
            name: "John Clark",
            text: "There are many different animals in the zoo, but I liked the giraffe the most. He is very kind and sociable. I will come to the giraffe every week.",
            img: image2,
        },
        {
            name: "John Clark",
            text: "There are many different animals in the zoo, but I liked the giraffe the most. He is very kind and sociable. I will come to the giraffe every week.",
            img: image3,
        },
        {
            name: "John Clark",
            text: "There are many different animals in the zoo, but I liked the giraffe the most. He is very kind and sociable. I will come to the giraffe every week.",
            img: image1,
        },
    ];

    return (
        <section className="p-4 sm:p-6 lg:p-8 my-8">
            <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 underline underline-offset-[10px] decoration-[#FFC600] decoration-3">What our Users say about us</h2>

            <div className="relative flex items-center justify-center  lg:mt-10">
                {/* Left Arrow */}
                <IoIosArrowBack size={40} className='me-6' />
                {/* Cards */}
                <div className="flex flex-col sm:flex-row gap-8 w-full max-w-6xl justify-center">
                    {feedbacks.map((fb, idx) => (
                        <div key={idx} className="bg-[#F8F8F8] rounded-[24px] shadow-sm p-6 flex flex-col sm:flex-row items-center sm:items-start w-full sm:w-[350px] lg:w-[400px] min-h-[260px]">
                            <div className="flex-1 w-full">
                                <div className=" text-gray-700 mb-2"><ImQuotesLeft size={30} /></div>
                                <div className="text-lg text-gray-800 mb-1">{fb.name}</div>
                                <div className="text-gray-700 text-sm mb-2">{fb.text}</div>
                            </div>
                            <img src={fb.img.src} alt={fb.name} className="w-20 h-20 rounded-full object-cover my-auto sm:ml-4 border-4 border-white shadow" />
                        </div>
                    ))}
                </div>
                {/* Right Arrow */}
                <IoIosArrowForward size={40} className='ms-6' />

            </div>
        </section>
    )
}

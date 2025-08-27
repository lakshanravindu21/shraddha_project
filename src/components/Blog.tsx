import React from 'react'
import image1 from '../components/asserts/images/blogImages/image (1).jpg'
import image2 from '../components/asserts/images/blogImages/image (2).jpg'
import image3 from '../components/asserts/images/blogImages/image (3).jpg'
import image4 from '../components/asserts/images/blogImages/image (4).jpg'
import image5 from '../components/asserts/images/blogImages/image (5).jpg'

const initailData = [
    {
        img: image1,
        titlte: "Blox reality startup Lorem ipsum od dillogi bell in the city ...",
        subTitle: "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. "
    },
    {
        img: image2,
        titlte: "Blox reality startup Lorem ipsum od dillogi bell in the city ...",
        subTitle: "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. "
    },
    {
        img: image3,
        titlte: "Blox reality startup Lorem ipsum od dillogi bell in the city ...",
        subTitle: "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. "
    }
];

const initailData1 = [
    {
        img: image1,
        titlte: "Blox reality startup Lorem ipsum od dillogi bell in the city ...",
        subTitle: "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska."
    },
    {
        img: image5,
        titlte: "Blox reality startup Lorem ipsum od dillogi bell in the city ...",
        subTitle: "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska."
    },
    {
        img: image4,
        titlte: "Blox reality startup Lorem ipsum od dillogi bell in the city ...",
        subTitle: "Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska."
    }
];

export default function Blog() {
    return (
        <section className="p-4 sm:p-6 lg:p-8 my-8">
            <h2 className="text-center text-3xl sm:text-4xl font-bold mb-6 sm:mb-10">Blogs</h2>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-[1641px] mx-auto w-full">
                {/* Main Blogs */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-[2] w-full">
                    {initailData.map((item, index) => (
                        <div key={index} className="sm:p-0 flex flex-col items-start rounded-lg w-full max-w-full sm:max-w-[366px]">
                            <img src={item.img.src} alt="" className="w-full h-[180px] sm:h-[200px] object-cover rounded-md mb-3" />
                            <h3 className="font-semibold text-base sm:text-lg mb-2 text-start">{item.titlte}</h3>
                            <p className="text-gray-600 text-xs sm:text-sm mb-4 text-start">{item.subTitle}</p>
                            <button className=" border border-yellow-400 text-yellow-500 px-4 sm:px-6 py-2 rounded hover:bg-yellow-400 hover:text-white transition font-medium text-xs sm:text-base">Read more</button>
                        </div>
                    ))}
                </div>
                {/* Sidebar Blogs */}
                <div className="flex flex-col gap-3 sm:gap-4 flex-1 w-full">
                    {initailData1.map((item, index) => (
                        <div key={index} className="flex flex-row gap-2 sm:gap-3 shadow-sm w-full">
                            <img src={item.img.src} alt="" className="w-[154px] h-[154px] sm:w-[154px] sm:h-[154px] object-cover rounded-md" />
                            <div className="flex flex-col flex-1 pt-1">
                                <h4 className="font-semibold text-sm sm:text-base mb-1">{item.titlte}</h4>
                                <p className="text-gray-600 text-xs mb-2">{item.subTitle}</p>
                                <button className="self-start border border-yellow-400 text-yellow-500 px-3 sm:px-4 py-1 rounded hover:bg-yellow-400 hover:text-white transition font-medium text-xs sm:text-sm">Read more</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import Buddha from "../asserts/images/aboutusImages/buddha.jpg";
import Monk from "../asserts/images/aboutusImages/monk.jpg";
import Picture1 from "../asserts/images/aboutusImages/picture1.jpg";
import Picture3 from "../asserts/images/aboutusImages/picture3.jpg";
import newyork1 from "../asserts/images/aboutusImages/newyork1.jpg";
import newyork2 from "../asserts/images/aboutusImages/newyork2.jpg";
import newyork4 from "../asserts/images/aboutusImages/newyork4.jpg";
import boston1 from "../asserts/images/aboutusImages/boston1.jpg";
import boston2 from "../asserts/images/aboutusImages/boston2.jpg";
import chicago from "../asserts/images/aboutusImages/chicago.jpg";
import Image1 from "../asserts/images/aboutusImages/image1.jpg";
import Image2 from "../asserts/images/aboutusImages/image2.jpg";
import Image3 from "../asserts/images/aboutusImages/image3.jpg";

import Header from "../BlackHeader";
import Footer from "../Footer";
import Link from "next/link";



export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="about" className=" min-h-screen bg-white text-gray-900">

        <div className="relative w-full h-76 mb-12">
          <img
            src={Buddha.src}
            alt="Golden Buddha statues in temple"
            className="w-full h-full object-cover"
          />

          {/* Breadcrumb */}
          <div className="bg-gray-100 py-4 px-6 md:px-12">
            <nav className="text-gray-600 text-sm">
              <Link href="/" className="hover:text-orange-500">
                HOME
              </Link>{" "}
              <span className="mx-2">&gt;</span>
              <span className="text-orange-500 font-semibold">ABOUT US</span>
            </nav>
          </div>
        </div>

        <section className="w-full max-w-[1200px] min-h-[700px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-8 relative">

          <div className="w-full md:w-1/2 h-[300px] md:h-[700px]">
            <img
              src={Monk.src}
              alt="Buddhist monk in meditation"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>


          <div className="w-full md:w-1/2 pt-4 flex flex-col justify-start">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-snug md:leading-tight underline decoration-[#FFC600] underline-offset-4">
              Lorem ipsum dolor sit amet <br /> dolor sit amet
            </h1>

            <p className="text-base md:text-lg font-semibold text-gray-700 mb-6">
              Welcome to <span className="text-black-600">[website name]</span>,
              your one-stop destination for all things home improvement,
            </p>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base opacity-100">
              from remodeling and new home construction to home studios and shed
              structures. We are passionate about helping homeowners create the
              spaces they've always dreamed of, and we have the expertise and
              resources to make it happen helping homeowners create the spaces
              they've always dreamed of, and we have the expertise and resources
              to make it happen dreamed of, and we have the expertise and
              resources to make it happen helping homeowners create the spaces
              they've always dreamed of, and we have the expertise and resources
              to make it happen and we have the expertise and resources to make it
              happen helping homeowners create the spaces they've always dreamed
              of, and we have the expertise and resources to make it happen and we
              have the expertise and resources to make it happen we have the
              expertise and resources to make it happen and we have the expertise
              and resources to make it happen
            </p>
          </div>
        </section>


        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-[#FDD754] to-[#F6F8DC] rounded-2xl p-12 text-center shadow-lg">
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <svg
                  className="w-8 h-8 text-blue-800 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-1">+10 Years</h2>
              <p className="text-gray-700 text-sm">of Spiritual Service</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <svg
                  className="w-8 h-8 text-blue-800 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-1">
                +30 Programs
              </h2>
              <p className="text-gray-700 text-sm">Conducted Yearly</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <svg
                  className="w-8 h-8 text-blue-800 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-1">+20 Staff</h2>
              <p className="text-gray-700 text-sm">Serving with Devotion</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <svg
                  className="w-8 h-8 text-blue-800 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-1">24/7</h2>
              <p className="text-gray-700 text-sm">
                Temple Services and Guidance
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col md:flex-row gap-12 items-center relative">

          <div className="flex flex-col md:flex-row gap-6 w-full md:w-1/2">
            <div className="relative w-full md:w-1/2">

              <img
                src={Picture1.src}
                alt="Monk sitting"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />

            </div>


            <div className="flex items-end w-full md:w-1/2">

              <img
                src={Picture3.src}
                alt="Monk portrait"
                className="rounded-lg shadow-lg w-full h-80 object-cover mt-30"

              />

              <span className="hidden md:block absolute top-[15%] left-[25%] w-[290px] h-[2px] bg-yellow-500">
                <span className="absolute right-0 top-[-6.5px] w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-yellow-500"></span>
              </span>

            </div>
          </div>

          {/* Right side content */}
          <div className="w-full md:w-1/2">


            <h3 className="text-sm-3xl font-bold text-gray-800 mb-15">Who We Are</h3>



            <h2 className="text-4xl font-semibold mb-5">
              Information about the devotees, volunteers, and cultural groups


              <span className="hidden md:block absolute right-0 top-[220px] w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-yellow-500">
                <span className="absolute top-[60%] left-[30%] w-[140px] h-[2px] bg-yellow-500"></span>
              </span>

            </h2>


            <p className="text-gray-700 mb-4">
              <span className="font-semibold">
                Welcome to <span className="text-yellow-600">[website name]</span>, your
                one-stop destination for all things home improvement,
              </span>
            </p>
            <p className="text-gray-600 leading-relaxed">
              from remodeling and new home construction to home studios and shed
              structures. We are passionate about helping homeowners create the spaces
              they&apos;ve always dreamed of, and we have the expertise and resources to
              make it happen. From remodeling and new home construction to home studios
              and shed structures, we are passionate about helping homeowners create the
              spaces they’ve always dreamed of.
            </p>
          </div>
        </section>


        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-2 underline decoration-[#FFC600] underline-offset-4">
              Recently Posted Temples Photographs
            </h2>
            <p className="text-gray-600 text-sm">
              Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus. Porttitor fermentum eu urna eget
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={newyork1.src}
                alt="New York Temple"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black bg-opacity-40 px-2 py-1 rounded">
                New York <br /> 28 Temples
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={boston1.src}
                alt="Boston Temple"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black bg-opacity-40 px-2 py-1 rounded">
                Boston <br /> 12 Temples
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg lg:row-span-2">
              <img
                src={chicago.src}
                alt="Chicago Temple"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black bg-opacity-40 px-2 py-1 rounded">
                Chicago <br /> 32 Temples
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={newyork2.src}
                alt="New York Temple"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black bg-opacity-40 px-2 py-1 rounded">
                New York <br /> 28 Temples
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={boston2.src}
                alt="Boston Temple"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black bg-opacity-40 px-2 py-1 rounded">
                Boston <br /> 28 Temples
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={newyork4.src}
                alt="New York Temple"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black bg-opacity-40 px-2 py-1 rounded">
                New York <br /> 28 Temples
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={newyork1.src}
                alt="New York Temple"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black bg-opacity-40 px-2 py-1 rounded">
                New York <br /> 28 Temples
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={newyork4.src}
                alt="New York Temple"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black bg-opacity-40 px-2 py-1 rounded">
                New York <br /> 28 Temples
              </div>
            </div>
          </div>
        </section>


        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-2 underline decoration-[#FFC600] underline-offset-4">
              Temple Community News
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="relative rounded-lg overflow-hidden shadow-lg md:row-span-2">
              <img
                src={Image1.src}
                alt="Large Buddha Statue"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur.</h3>
                <p className="text-sm opacity-80">
                  Facilisi quisque magna praesent quisque arcu felis ornare in.
                  <span className="absolute bottom-4 right-4 flex items-center justify-center w-8 h-8 bg-white/20 rounded-[18.47px]">
                    ➜
                  </span>
                </p>
              </div>
            </div>

            {/* Top right image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={Image2.src}
                alt="Golden Buddha"
                className="w-full h-64  object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
                <h3 className="text-sm font-semibold">Lorem ipsum dolor sit amet</h3>
                <p className="text-xs opacity-80">Facilisi quisque magna praesent.
                  <span className="absolute bottom-4 right-4 flex items-center justify-center w-8 h-8 bg-white/20 rounded-[18.47px]">
                    ➜
                  </span>
                </p>
              </div>
            </div>

            {/* Bottom right image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={Image3.src}
                alt="Buddha Meditation"
                className="w-full h-64  object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
                <h3 className="text-sm font-semibold">Lorem ipsum dolor sit amet</h3>
                <p className="text-xs opacity-80">Facilisi quisque magna praesent.

                  <span className="absolute bottom-4 right-4 flex items-center justify-center w-8 h-8 bg-white/20 rounded-[18.47px]">
                    ➜
                  </span>
                  </p>

              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}

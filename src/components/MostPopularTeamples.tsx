import React from 'react'
import image from '../components/asserts/images/mostPopularImg.jpg'
import image2 from '../components/asserts/images/mostPopularImg-2.jpg'

export default function MostPopularTeamples() {
    return (
        <>
            <div className='p-4 sm:p-6 lg:p-8 my-8'>
                <h4
                    className="text-4xl md:text-6xl font-[700] text-center underline underline-offset-[10px] decoration-yellow-400 decoration-4"
                >
                    Most Popular Temples<br />Your need to Visit in U.S
                </h4>

                <div className="lg:grid grid-cols-2 gap-[100px] md:gap-[150px] mt-15 ">
                    <div
                        className="aspect-square bg-center bg-cover"
                        style={{ backgroundImage: `url(${image.src})` }}
                    />
                    <div className="m-[40px] sm:mx-[0] md:mt-8 lg:mt-0">
                        <h5 className='text-4xl mb-5'>Welcome to [website name], your one-stop destination for all things home  </h5>
                        <p className='text-[22px] leading-10'>
                            from remodeling and new home construction to home studios and shed structures.
                            We are passionate about helping homeowners create the spaces they've always dreamed of,
                            and we have the expertise and resources to make it happenfrom remodeling and new home construction to
                            home studios and shed structures. We are passionate about helping homeowners create the spaces they've always dreamed of,
                            and we have the expertise and resources to make it happenfrom remodeling and new home construction to home studios and
                            shed structures. We are passionate about helping homeowners
                        </p>
                    </div>
                </div>

                <div className="lg:grid grid-cols-2 gap-[100px] md:gap-[150px] mt-15 ">
                    <div className="m-[40px] sm:mx-[0] md:mt-8 lg:mt-0">
                        <h5 className='text-4xl mb-5'>Welcome to [website name], your one-stop destination for all things home  </h5>
                        <p className='text-[22px] leading-10'>
                            from remodeling and new home construction to home studios and shed structures.
                            We are passionate about helping homeowners create the spaces they've always dreamed of,
                            and we have the expertise and resources to make it happenfrom remodeling and new home construction to
                            home studios and shed structures. We are passionate about helping homeowners create the spaces they've always dreamed of,
                            and we have the expertise and resources to make it happenfrom remodeling and new home construction to home studios and
                            shed structures. We are passionate about helping homeowners
                        </p>
                    </div>
                    <div
                        className="aspect-square bg-center bg-cover"
                        style={{ backgroundImage: `url(${image2.src})` }}
                    />
                </div>
            </div>
        </>
    )
}


import React from 'react'
import { LuTelescope } from 'react-icons/lu'

const Navbar = () => {
    return (
        <div>
            <div className=' bg-black'>
                <header className=' flex items-center justify-center p-2 text-white font-bold'>YOUR GATEWAY TO GHANA'S CULTURE: FOOD, STAYS, AND SCENIC WONDERS</header>
            </div>
           <div className='bg-[#FFF8E7]'>
           <nav className="flex justify-between items-center p-4 ">
                <ul className="flex space-x-4  text-xl">
                    <li><a href="#intro" className="hover:underline">DESTINATIONS</a></li>
                    <li><a href="#scan" className="hover:underline">RESTAURANTS</a></li>
                    <li><a href="#usecases" className="hover:underline">STAYS</a></li>
                    <li><a href="#contact" className="hover:underline">ABOUT</a></li>
                </ul>
                <h1 className="absolute left-1/2 transform -translate-x-1/2 font-bold text-lg flex items-center space-x-2 ">
                    <LuTelescope className=" text-[#FF4500] text-5xl" />
                    <span className='text-2xl'>EXPLOREIT</span>
                </h1>
                <button className="border-2 border-[#FF4500] text-[#FF4500] px-4 py-2 rounded hover:bg-[#FF4500] hover:text-white transition duration-200 font-bold">
                    +233 (123) 456789
                </button>
            </nav>

            <div>
                <h1 className='flex items-center justify-center mt-20 font-bold text-3xl'>RESTAURANTS, ACCOMMODATION AND TOURIST ATTRACTIONS</h1>
                <hr className="border-[#FF4500] mx-16 mt-16" />
            </div>

            <div>
                <h1 className='flex items-center justify-center mt-10 font-bold text-2xl'>Your Cultural Compass Awaits!</h1>
                <h1 className='flex items-center justify-center mt-4 font-bold text-2xl'> Discover local cuisines, unique stays, and top attractions in 3D. Plan your cultural adventure effortlessly!</h1>
                <hr className="border-[#FF4500] mx-16 mt-16 mb-2" />
            </div>
           </div>

        </div>
    )
}

export default Navbar
import React from 'react';
import video1 from '../assets/videos/vr1.mp4';
import video2 from '../assets/videos/vr2.mp4';
import video3 from '../assets/videos/vr3.mp4';

import { IoPlaySharp } from 'react-icons/io5';

const Hero = () => {
    const videos = [
        { id: 1, src: video1, title: 'Restaurants and bars' },
        { id: 2, src: video2, title: 'Accommodation' },
    ];

    const video = [
        { id: 1, src: video3, title: 'Tourist Attractions' },
    ];

    return (
        <div className='bg-[#FFF8E7]'>
          
            <div className="gap-4 p-4 mt-8">
                {videos.map((video) => (
                    <div key={video.id} className="relative mx-11 mb-10">
                       
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-opacity-70 text-white px-4 py-1 rounded z-10 font-bold text-2xl">
                            {video.title}
                        </div>
                       
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                            <button className="text-black bg-white p-4 rounded-full shadow-lg hover:bg-opacity-80 focus:outline-none">
                            <IoPlaySharp className='text-3xl'/>
                            </button>
                        </div>
                       
                        <video
                            src={video.src}
                            controls
                            className="w-[90vw] h-[500px] rounded shadow-lg"
                        />
                    </div>
                ))}
            </div>
            <hr className="border-[#FF4500] mx-16 mt-10 mb-2" />
            
           
            <div className="gap-4 p-4 mt-8">
                {video.map((video) => (
                    <div key={video.id} className="relative mx-11 mb-6">
                     
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-opacity-70 text-white px-4 py-1 rounded z-10 font-bold text-2xl">
                            {video.title}
                        </div>
                       
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                            <button className="text-black bg-white p-4 rounded-full shadow-lg hover:bg-opacity-80 focus:outline-none">
                            <IoPlaySharp className='text-3xl'/>
                            </button>
                        </div>
                      
                        <video
                            src={video.src}
                            controls
                            className="w-[90vw] h-[500px] rounded shadow-lg"
                        />
                    </div>
                ))}
                <hr className="border-[#FF4500] mx-16 mt-10 mb-2" />
            </div>
        </div>
    );
};

export default Hero;

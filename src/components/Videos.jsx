import React from 'react';
import video1 from '../assets/videos/vr1.mp4';
import video2 from '../assets/videos/vr2.mp4';
import video3 from '../assets/videos/vr3.mp4';
import { IoPlaySharp } from 'react-icons/io5';

const Videos = () => {
    const videos = [
        { id: 1, src: video1, title: "Explore Cultural Sites: Ghana" },
        { id: 2, src: video2, title: "Experience Local Cuisine" },
        { id: 3, src: video3, title: "Uncover Hidden Gems" },
        { id: 4, src: video3, title: "Uncover Hidden Gems" },
        { id: 5, src: video3, title: "Uncover Hidden Gems" },
        { id: 6, src: video3, title: "Uncover Hidden Gems" },
        { id: 7, src: video3, title: "Uncover Hidden Gems" },
        { id: 8, src: video3, title: "Uncover Hidden Gems" },
        { id: 9, src: video3, title: "Uncover Hidden Gems" },
        { id: 10, src: video3, title: "Uncover Hidden Gems" },
        { id: 11, src: video3, title: "Uncover Hidden Gems" },
        { id: 12, src: video3, title: "Uncover Hidden Gems" },
        { id: 13, src: video3, title: "Uncover Hidden Gems" },
        { id: 14, src: video3, title: "Uncover Hidden Gems" },
        { id: 15, src: video3, title: "Uncover Hidden Gems" },
        { id: 16, src: video3, title: "Uncover Hidden Gems" },
        { id: 17, src: video3, title: "Uncover Hidden Gems" },
        { id: 18, src: video3, title: "Uncover Hidden Gems" },
        { id: 19, src: video3, title: "Uncover Hidden Gems" },
        { id: 20, src: video3, title: "Uncover Hidden Gems" },
        { id: 21, src: video3, title: "Uncover Hidden Gems" },
        { id: 22, src: video3, title: "Uncover Hidden Gems" },
        { id: 23, src: video3, title: "Uncover Hidden Gems" },
        { id: 24, src: video3, title: "Uncover Hidden Gems" },
        { id: 25, src: video3, title: "Uncover Hidden Gems" },
        { id: 26, src: video3, title: "Uncover Hidden Gems" },
        { id: 27, src: video3, title: "Uncover Hidden Gems" },
        { id: 28, src: video3, title: "Uncover Hidden Gems" },
        { id: 29, src: video3, title: "Uncover Hidden Gems" },
        { id: 30, src: video3, title: "Uncover Hidden Gems" },
        { id: 31, src: video3, title: "Uncover Hidden Gems" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
            {videos.map((video) => (
                <div key={video.id} className="relative">
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <button className="text-[#FF4500] bg-[#FFF8E7] p-4 rounded shadow-lg hover:bg-opacity-80 focus:outline-none">
                            <IoPlaySharp className='text-4xl' />
                        </button>
                    </div>
                    <video
                        src={video.src}
                        controls
                        className="w-full h-auto rounded shadow-lg"
                    />
                </div>
            ))}
        </div>
    );
};

export default Videos;

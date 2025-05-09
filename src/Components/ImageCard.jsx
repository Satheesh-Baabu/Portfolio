import React, { useState } from 'react';


function ImageCard(data) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className=''>
            <div
                className={`bg-transparent shadow-md rounded-lg overflow-hidden relative border border-gray-800 ${isHovered ? 'scale-105 ease-in-out duration-100' : ''
                    }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className={`${isHovered ? 'opacity-20' : ''}`}>
                    <img src={data.image} alt="Image" className="object-contain lg:h-full h-60 w-full" />
                </div>
                <div className={`absolute bottom-0 left-0 pt-10 lg:pt-7 xl:pt-28 w-full h-full p-4 bg-gradient-to-t from-cyan-500 to-transparent text-white ${isHovered ? 'animate-bottom opacity-100 ease-in-out duration-1000' : 'opacity-0'}`}>

                    <p className="md:text-md lg:text-xl text-md">{data.description}</p>
                    <div className="flex my-5">
                        <a href={data.demoLink} target='_blank' className="text-lg text-cyan-100 mr-4 hover:underline"><i className="fa-solid fa-link"></i> Demo Link </a>
                        <a href={data.githubLink} target='_blank'  className="text-lg text-cyan-100 mr-4 hover:underline"><i className="fa-brands fa-github"></i> Github</a>
                    </div>
                    {/* <h2 className="md:text-4xl xl:text-5xl text-2xl sm:text-3xl font-bold">{data.title}</h2> */}
                </div>
            </div>
            <div>
                {/* <div className={`${isHovered ? 'hidden' : 'text-3xl font-bold text-white mt-2 "'}`}>{data.title}</div> */}
                <div className={'text-3xl font-bold text-white mt-2'}>{data.title}</div>

                <div className="flex flex-wrap gap-2 mt-4">
                    {data.tech.map((tag, index) => (
                    <span key={index} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">{tag}</span>))
                    }
                </div> 
            </div>
        </div>
    );
}

export default ImageCard;
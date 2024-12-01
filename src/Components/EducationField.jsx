import React from "react";

const EducationField = () => {
    return (
        <>
            <div className="w-full md:flex border-l-2 border-cyan-500 md:border-0 relative">
            <div className="absolute border-t-2 w-10 left-0 top-[25%] border-cyan-500 md:hidden" />


                {/* Timeline Line */}
                <div className="px-5 flex-1 relative">
                <div className="absolute left-[-0.50rem] top-0 w-3.5 h-3.5 bg-cyan-500 rounded-full drop-shadow-md shadow-cyan-400 md:hidden" />


                    <div className="absolute border-t-2 w-10 right-0 top-[50%] border-cyan-500 md:block hidden" />
                    <div className="flex justify-center align-center  h-full hover:scale-105 ease-out duration-500">
                        <img
                            src="/Secondary.svg" // replace with your image path
                            alt="ProCodrr"
                            className="rounded-lg " width={500}
                        />
                    </div>
                </div>
                <div className="md:border-l-2 border-cyan-500 relative flex-1  flex" >
                    <div className="pl-10  relative">
                        <div className="absolute left-[-0.50rem] top-0 w-3.5 h-3.5 bg-cyan-500 rounded-full drop-shadow-md shadow-cyan-400 hidden md:block" />

                        <div className="flex items-center gap-10 h-full">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-cyan-500">Secondary School</h2>
                                <p className="text-gray-400">2010-2020</p>
                                <p className="text-gray-300 mb-4">
                                    S.H.N.V. Matriculation Higher Secondary School, Sivakasi.
                                </p>
                                <p className="text-gray-100 mb-4">
                                    Completed my Secondary School with 85%.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row-reverse border-l-2 border-cyan-500 md:border-0">
            <div className="md:border-l-2 border-cyan-500 relative flex-1 flex md:pb-10">
                    <div className="pl-10  relative ">
                        <div className="absolute left-[-0.50rem] top-[0rem] w-3.5 h-3.5 bg-cyan-500 rounded-full" />
                        <div className="absolute border-t-2 w-10 left-0 top-[50%] border-cyan-500 " />
                        <div className="flex h-full align-center justify-center w-full h-full hover:scale-105 ease-out duration-500">
                            <img
                                src="/highereducation.svg"
                                alt="Noimage"
                                className="rounded-lg " width={500}
                            />
                        </div>

                    </div>
                </div>
                <div className="flex items-center gap-10 flex-1 pl-10 ">
                    <div className="flex-1 ">
                        <h2 className="text-2xl font-bold text-cyan-500 ">Higher Seconday Education</h2>
                        <p className="text-gray-400 ">2020-2022</p>
                        <p className="text-gray-300 mb-4">
                            S.H.N.V. Matriculation Higher Secondary School, Sivakasi.
                        </p>
                        <p className="text-gray-100 mb-4">
                            Completed my High Secondary School with Major in Computer Science, Maths, Physics and Chemistry.
                        </p>

                    </div>

                </div>

                
            </div>
            <div className="w-full md:flex border-l-2 border-cyan-500 md:border-0 relative">
            <div className="absolute border-t-2 w-10 left-0 top-[25%] border-cyan-500 md:hidden" />


                {/* Timeline Line */}
                <div className="px-5 flex-1 relative">
                <div className="absolute left-[-0.50rem] top-0 w-3.5 h-3.5 bg-cyan-500 rounded-full drop-shadow-md shadow-cyan-400 md:hidden" />


                    <div className="absolute border-t-2 w-10 right-0 top-[50%] border-cyan-500 md:block hidden" />
                    <div className="flex justify-center align-center  h-full hover:scale-105 ease-out duration-500">
                        <img
                            src="/collegeq.svg" // replace with your image path
                            alt="Noimage"
                            className="rounded-lg" width={500}
                        />
                    </div>
                </div>
                <div className="md:border-l-2 border-cyan-500 relative flex-1  flex" >
                    <div className="pl-10  relative">
                        <div className="absolute left-[-0.50rem] top-0 w-3.5 h-3.5 bg-cyan-500 rounded-full drop-shadow-md shadow-cyan-400 hidden md:block" />

                        <div className="flex items-center gap-10 h-full">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-cyan-500">B.Sc (Computer Science)</h2>
                                <p className="text-gray-400">2022-2025</p>
                                <p className="text-gray-300 mb-4">
                                Ayya Nadar Janaki Ammal College, Sivakasi.
                                </p>
                                <p className="text-gray-100 mb-4">
                                Pursuing a Bachelor’s degree in Computer Science, specializing in software engineering and development.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="w-full md:flex ">

                <div className="px-5 flex-1 relative ">

                    <div className="absolute border-t-2 w-10 right-0 top-[50%] border-cyan-500" />
                    <div className="flex justify-center align-center  h-full">
                        <img
                            src="/collegeq.svg" // replace with your image path
                            alt="ProCodrr"
                            className="rounded-lg" width={500}
                        />
                    </div>
                </div>
                <div className="border-l-2 border-cyan-500 relative flex-1  flex " >
                    <div className="pl-10  relative">
                        <div className="absolute left-[-0.50rem] top-0 w-3.5 h-3.5 bg-cyan-500 rounded-full drop-shadow-md shadow-cyan-400" />

                        <div className="flex items-center gap-10 h-full">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-cyan-500">B.Sc (Computer Science)</h2>
                                <p className="text-gray-400">2022-2025</p>
                                <p className="text-gray-300 mb-4">
                                    Ayya Nadar Janaki Ammal College, Sivakasi.
                                </p>
                                <p className="text-gray-100 mb-4">
                                    Pursuing a Bachelor’s degree in Computer Science, specializing in software engineering and development.                        </p>
                                 <div className="flex flex-wrap gap-2">
                                    {[
                                        "react.js",
                                        "express.js",
                                        "node.js",
                                        "swiper.js",
                                        "mongoDB",
                                        "mongoose",
                                        "css",
                                        "javascript",
                                        "figma",
                                    ].map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div> 
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}

        </>
    );
};

export default EducationField;

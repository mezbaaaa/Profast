import React from 'react';
import { Search } from 'lucide-react';

const Coverage = () => {
    return (
        <div className="px-10 py-16 text-[#00332D]">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h1 className="text-6xl font-extrabold">
                    We are available in 64 districts
                </h1>

                {/* Search Box */}
                <div className="flex justify-start my-10">
                    <div className="flex w-full max-w-md rounded-full border border-none overflow-hidden bg-[#CBD5E130]">
                        <div className="flex items-center px-4">
                            <Search className=" w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search here"
                            className="flex-grow px-2 py-2 focus:outline-none"
                        />
                        <button className="bg-[#CAEB66] cursor-pointer text-[#00332D] rounded-4xl font-semibold px-6 py-2">
                            Search
                        </button>
                    </div>
                </div>

                <hr className="border-gray-200" />

                {/* Subheading */}
                <h2 className="text-3xl font-extrabold my-6">
                    We deliver almost all over Bangladesh
                </h2>

                {/* Maps Section */}
                <div className="rounded-xl overflow-hidden shadow-md">
                    <iframe
                        title="bangladesh-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.6612884373205!2d90.4004828753056!3d23.761226588472914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85a6c74c17b%3A0x3b28262c45c46d1a!2sDhaka!5e0!3m2!1sen!2sbd!4v1623259654947!5m2!1sen!2sbd"
                        className="w-full h-[400px] md:h-[500px] border-0"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div >
    );
};

export default Coverage;
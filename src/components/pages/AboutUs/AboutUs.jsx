import React from 'react';
import '../../../index.css'
import { NavLink } from 'react-router';
const AboutUs = () => {
    return (
        <div className='shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-3xl my-12 py-20 px-28'>
            <div className='w-[600px] space-y-4'>
                <h1 className='font-extrabold text-5xl text-[#03373D] '>About Us</h1>
                <p className='text-[#606060]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <hr className='border-gray-300 mt-6' />
            <div className='flex items-center gap-10 font-semibold text-xl text-gray-700 my-4'>
                <NavLink>Story</NavLink>
                <NavLink>Mission</NavLink>
                <NavLink>Success</NavLink>
                <NavLink>Team & Others</NavLink>
            </div>
            <div className='text-lg text-[#606060] space-y-3'>
                <p>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
                <p>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
                <p>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
            </div>
        </div>
    );
};

export default AboutUs;
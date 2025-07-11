import React from 'react';
import image1 from '../../assets/location-merchant.png'
import image2 from '../../assets/be-a-merchant-bg.png'


const Priority = () => {
    return (
        <div className='relative'>
            <div className='absolute'>
                <img src={image2} alt="" />
            </div>
            <div className='p-20 my-24 rounded-4xl bg-[#03373D] flex items-center justify-between'>
            <div>
                <h1 className='font-extrabold  text-5xl text-white '>Merchant and Customer Satisfaction <br /> is Our First Priority</h1>
                <p className='text-[#DADADA] text-lg mt-4' >We offer the lowest delivery charge with  the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.</p>
                <div className='mt-6 flex gap-4'>
                    <button className='text-black bg-[#CAEB66] text-xl font-bold px-8 py-4 rounded-4xl cursor-pointer '>Become a Merchant</button>
                    <button className='border border-[#CAEB66] px-8 py-4 rounded-4xl cursor-pointer text-[#CAEB66] text-xl font-bold'>Earn with Profast Courier</button>
                </div>
            </div>
            <div>
                <img src={image1}  alt="" />
            </div>
        </div>
        </div>
    );
};

export default Priority;
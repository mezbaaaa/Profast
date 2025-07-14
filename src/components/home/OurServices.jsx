import React from 'react';
import Rocket from '../../assets/services-icon/Rocket.webp'
import Globe2 from '../../assets/services-icon/Globe2.webp'
import Boxes from '../../assets/services-icon/Boxes.webp'
import Wallet from '../../assets/services-icon/Wallet.webp'
import Building2 from '../../assets/services-icon/Building2.webp'
import Undo2 from '../../assets/services-icon/Undo2.webp'

const services = [
  {
    title: "Express & Standard Delivery",
    description: "We deliver parcels within 24–72 hours in major cities. Fast-track option in Dhaka: 4–6 hours pick-up to drop-off.",
    icon: Rocket
  },
  {
    title: "Nationwide Delivery",
    description: "Doorstep delivery across Bangladesh within 48–72 hours — every district covered.",
    icon: Globe2
  },
  {
    title: "Fulfillment Solution",
    description: "End-to-end inventory, order processing, packaging, and post-sale support for your business.",
    icon: Boxes
  },
  {
    title: "Cash on Home Delivery",
    description: "100% cash on delivery anywhere in Bangladesh — safe and secure payment on arrival.",
    icon: Wallet
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description: "Custom logistics contracts with warehouse & inventory support for businesses of all sizes.",
    icon: Building2
  },
  {
    title: "Parcel Return",
    description: "Easy return and exchange support through our reverse logistics service for online buyers.",
    icon: Undo2
  }
];


const OurServices = () => {
    return (
        <div className='px-28 py-24 bg-[#03373D] rounded-3xl mt-28'>
            <div className='space-y-4 text-center' >
                <h1 className='font-extrabold text-4xl text-white '>Our Services</h1>
                <p className='font-medium text-[#DADADA] ' >Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-8'>
                {
                  services.map((service ,index)=><div key={index}  className='text-center border px-6 py-8 rounded-2xl space-y-4 bg-white/95 hover:bg-[#CAEB66] transition-all duration-300'> 
                    <div className='w-max mx-auto'><img className='w-20 h-20 p-4 bg-linear-to-b from-[#EEEDFC] to-[#EEEDFC10] rounded-full' src={service.icon} alt={service.title} /></div>
                    <h2 className='font-bold text-[#03373D] text-2xl '>{service.title} </h2>
                    <p className='font-bold text-[#606060]' >{service.description} </p>
                  </div> )
                }
            </div>
        </div>
    );
};

export default OurServices;
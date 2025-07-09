import { Building2, MapPin, Truck, Wallet } from 'lucide-react';
import React from 'react';

const services = [
  {
    title: "Booking Pick & Drop",
    description: "Fast and hassle-free pickup and drop for all your parcels — anywhere, anytime.",
    icon: Truck
  },
  {
    title: "Cash On Delivery",
    description: "Convenient cash collection on delivery — making transactions smoother for everyone.",
    icon: Wallet
  },
  {
    title: "Delivery Hub",
    description: "A reliable hub for organizing and managing all your deliveries efficiently.",
    icon: MapPin
  },
  {
    title: "Booking SME & Corporate",
    description: "Tailored delivery solutions for small businesses and corporate logistics needs.",
    icon: Building2
  }
];

const HowItsWork = () => {
    return (
        <div className='w-[1282px] mx-auto mt-10 '>
            <div>
                <p className='font-extrabold text-3xl text-[#03373D] '>How it work</p>
            </div>
            <div className='flex items-center gap-4 my-8 justify-between'>
                {
                    services.map((service)=>{
                        const Icon = service.icon;
                    return (
                        <div key={service.title} className='p-6 border border-[#60606080] rounded-xl bg-white/70 shadow-md' >
                            <Icon className='w-9 h-9' />
                            <h2 className='my-4 font-bold text-xl text-[#03373D] '>{service.title} </h2>
                            <p className='font-medium text-[#606060] '>{service.description} </p>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    );
};

export default HowItsWork;
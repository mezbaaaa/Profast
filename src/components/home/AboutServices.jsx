import React from 'react';
import image1 from '../../assets/live-tracking.png'
import image2 from '../../assets/safe-delivery.png'
import image3 from '../../assets/big-deliveryman.png'

const aboutServices = [
    {
        title: "Live Parcel Tracking",
        description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        image: image1
    },
    {
        title: "24/7 Call Center Support",
        description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        image: image2
    },
    {
        title: "100% Safe Delivery",
        description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        image: image3
    }
]

const AboutServices = () => {
    return (
        <div className='space-y-8'>
            {
                aboutServices.map((service,index)=><div key={index} className='flex items-center gap-12 shadow-[0_0_20px_rgba(0,0,0,0.1)] p-8 rounded-2xl'>
                    <div>
                        <img src={service.image} alt={service.title} className='w-34 h-34' />
                    </div>
                    <div className="h-32 border-l border-dashed border-gray-400"></div>
                    <div>
                        <h2 className='font-extrabold text-2xl text-[#03373D] '>{service.title} </h2>
                        <p className='font-medium text-[#606060] '>{service.description} </p>
                    </div>
                </div> )
            }
        </div>
    );
};

export default AboutServices;
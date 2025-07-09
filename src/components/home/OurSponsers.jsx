import React from 'react';
import Marquee from 'react-fast-marquee';
import brand1 from '../../assets/brands/amazon.png'
import brand2 from '../../assets/brands/casio.png'
import brand3 from '../../assets/brands/amazon_vector.png'
import brand4 from '../../assets/brands/moonstar.png'
import brand5 from '../../assets/brands/randstad.png'
import brand6 from '../../assets/brands/start-people 1.png'
import brand7 from '../../assets/brands/start.png'


const logos = [brand1,brand2,brand3,brand4,brand5,brand6,brand7]

const OurSponsers = () => {
    return (
        <div className='my-24'>
            <div>
                <h2 className='font-extrabold text-3xl text-[#03373D] text-center '>We've helped thousands of sales teams</h2>
            </div>
            <Marquee 
            pauseOnHover
            speed={80}
            >
                {
                    logos.map((logo,index)=><div key={index} className='mx-18 flex items-center my-10'>
                        <img src={logo} alt="" className='h-6 object-center' />
                    </div> )
                }
            </Marquee>
        </div>
    );
};

export default OurSponsers;
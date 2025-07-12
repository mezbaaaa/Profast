import React from 'react'
import image1 from '../../assets/customer-top.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../../../src/index.css'
const testimonials = [
    {
        quote: 'A posture corrector works by providing support and gentle alignment...',
        name: 'Awlad Hossin',
        title: 'Senior Product Designer'
    },
    {
        quote: 'A posture corrector works by providing support and gentle alignment...',
        name: 'Rasel Ahamed',
        title: 'CTO'
    },
    {
        quote: 'A posture corrector works by providing support and gentle alignment...',
        name: 'Nasir Uddin',
        title: 'CEO'
    },
    {
        quote: 'A posture corrector works by providing support and gentle alignment...',
        name: 'Nashit Karim',
        title: 'Designer'
    },{
        quote: 'A posture corrector works by providing support and gentle alignment...',
        name: 'Rasel Ahamed',
        title: 'CTO'
    }
]

const Review = () => {

    return (
        <div>
            <div className='mx-auto w-max'>
                <img src={image1} alt="" />
            </div>

            <div className='my-10 text-center'>
                <h1 className='text-4xl font-extrabold text-[#03373D]'>
                    What our customers are sayings
                </h1>
                <p className='text-[#606060] mt-3'>
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    Achieve proper alignment, reduce <br />
                    pain, and strengthen your body with ease!
                </p>
            </div>
            <div className="max-w-5xl mx-auto ">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={30}
                    slidesPerView={3}
                >
                    {testimonials.map((item, i) => (
                        <SwiperSlide key={i} className="!flex justify-center rounded-2xl my-6 ">
                            <div className="bg-white rounded-xl p-8 border border-gray-400 max-w-sm text-center">
                                <p className="mb-4 text-gray-600">{item.quote}</p>
                                <hr className="my-4 border-dashed" />
                                <h4 className="text-lg font-semibold">{item.name}</h4>
                                <p className="text-sm text-gray-400">{item.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Review

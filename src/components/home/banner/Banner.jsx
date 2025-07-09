import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'

const Banner = () => {
  return (
        <Carousel
        className='mt-8' 
        infiniteLoop={true}
        autoPlay={true} 
        stopOnHover={true}
        transitionTime={1000}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        swipeScrollTolerance={10}
        >
            <div>
                <img src={bannerImg1} alt="" />
                <p></p>
            </div>
            <div>
                <img src={bannerImg2} alt="" />
                <p></p>
            </div>
            <div>
                <img src={bannerImg3} alt="" />
                <p></p>
            </div>
        </Carousel>
  );
};

export default Banner;
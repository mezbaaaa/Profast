import React from 'react';
import Banner from './banner/Banner';
import HowItsWork from './HowItsWork';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItsWork></HowItsWork>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;
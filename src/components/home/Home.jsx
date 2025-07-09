import React from 'react';
import Banner from './banner/Banner';
import HowItsWork from './HowItsWork';
import OurServices from './OurServices';
import OurSponsers from './OurSponsers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItsWork></HowItsWork>
            <OurServices></OurServices>
            <OurSponsers></OurSponsers>
        </div>
    );
};

export default Home;
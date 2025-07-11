import React from 'react';
import Banner from './banner/Banner';
import HowItsWork from './HowItsWork';
import OurServices from './OurServices';
import OurSponsers from './OurSponsers';
import AboutServices from './AboutServices';
import Priority from './Priority';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItsWork></HowItsWork>
            <OurServices></OurServices>
            <OurSponsers></OurSponsers>
            <AboutServices></AboutServices>
            <Priority></Priority>
        </div>
    );
};

export default Home;
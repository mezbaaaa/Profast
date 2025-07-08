import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <div className='w-[1500px] mx-auto syne-font'>
            <header>
                <Navbar></Navbar>
            </header>
            <body>
                <Outlet></Outlet>
            </body>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;
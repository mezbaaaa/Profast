import React from 'react';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='w-[1500px] mx-auto syne-font'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
               <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;
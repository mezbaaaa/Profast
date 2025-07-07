import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <div>
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
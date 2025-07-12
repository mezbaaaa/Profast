import React from 'react';
import authImage from '../../src/assets/authImage.png';
import { Link, Outlet } from 'react-router';
import logo from '../../src/assets/logo.png'

const AuthRoots = () => {
    return (
        <div className='relative'>
            <div className='absolute left-10 top-10'>
                <Link to={'/'} className='flex items-end cursor-pointer'>
                    <img src={logo} alt="logo Image" className='mb-2' />
                    <p className='font-extrabold text-3xl -ml-4'>Profast</p>
                </Link>
            </div>
            <div className="grid grid-cols-2 min-h-screen text-center">
                <div className="col-span-1 flex items-center justify-center">
                    <Outlet />
                </div>
                <div className="col-span-1 bg-gradient-to-r from-[#DEF29F] to-[#E8F6BD] flex items-center justify-center">
                    <img src={authImage} alt="Auth" className="max-w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default AuthRoots;

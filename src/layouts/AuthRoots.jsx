import React from 'react';
import authImage from '../../src/assets/authImage.png';
import { Outlet } from 'react-router';

const AuthRoots = () => {
  return (
    <div className='relative'>
        <div className='absolute'>
            hello
        </div>
        <div className="grid grid-cols-2 min-h-screen text-center">
      <div className="col-span-1 flex items-center justify-center">
        <Outlet/>
      </div>
      <div className="col-span-1 bg-gradient-to-r from-[#DEF29F] to-[#E8F6BD] flex items-center justify-center">
        <img src={authImage} alt="Auth" className="max-w-full h-auto" />
      </div>
    </div>
    </div>
  );
};

export default AuthRoots;

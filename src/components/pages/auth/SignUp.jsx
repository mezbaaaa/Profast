import React from 'react';
import { Link } from 'react-router';
import SoicalLogin from './SoicalLogin';
import uploadIcon from '../../../assets/image-upload-icon.png'

const SignUp = () => {
    return (
        <div className="w-full max-w-md mx-auto text-left">
      <h1 className="text-4xl font-extrabold mb-2">Create an Account</h1>
      <p className="mb-6 text-gray-600">Register with Profast</p>

      <div className="flex flex-col gap-4">
        <div>
            <img src={uploadIcon} alt="icon" className='w-14 h-14 cursor-pointer' />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name='name'
            placeholder="Name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none "
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name='email'
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-md focus:outline-none "
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name='password'
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-md focus:outline-none "
          />
        </div>

        <button className="w-full py-3 bg-[#CAEB66] cursor-pointer text-black font-semibold rounded-md">
          Register
        </button>

        <p className="text-sm text-gray-500 text-left">
          Already have an account? <Link to={'/login'} className="text-lime-600 font-medium hover:underline">Login</Link>
        </p>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-sm text-gray-400">Or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <SoicalLogin></SoicalLogin>
      </div>
    </div>
    );
};

export default SignUp;
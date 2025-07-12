import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="w-full max-w-md mx-auto text-left">
      <h1 className="text-4xl font-extrabold mb-2">Welcome Back</h1>
      <p className="mb-6 text-gray-600">Login with Profast</p>

      <div className="flex flex-col gap-4">
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

        <div className="text-left">
          <a href="#" className="text-sm text-gray-500 hover:underline">Forgot Password?</a>
        </div>

        <button className="w-full py-3 bg-[#CAEB66] cursor-pointer text-black font-semibold rounded-md">
          Login
        </button>

        <p className="text-sm text-gray-500 text-left">
          Don’t have any account? <Link className="text-lime-600 font-medium hover:underline">Register</Link>
        </p>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-sm text-gray-400">Or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 cursor-pointer">
          <FcGoogle size={20} />
          <span className="text-base font-medium text-gray-700">Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
import React from 'react';
import { Link } from 'react-router';

const ForgetPass = () => {
    return (
        <div className="w-full max-w-md mx-auto text-left">
            <h1 className="text-4xl font-extrabold mb-2">Forgot Password</h1>
            <p className="mb-6 text-gray-600 text-lg">Enter your email address and we’ll send you a reset link.</p>

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

                <button className="w-full py-3 bg-[#CAEB66] cursor-pointer text-black font-semibold rounded-md">
                    Send
                </button>

                <p className="text-sm text-gray-500 text-left">
                    Remember your password? <Link to={'/login'} className="text-lime-600 font-medium hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgetPass;
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SoicalLogin = () => {
    return (
        <div>
            <button className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 cursor-pointer">
          <FcGoogle size={20} />
          <span className="text-base font-medium text-gray-700">Login with Google</span>
        </button>
        </div>
    );
};

export default SoicalLogin;
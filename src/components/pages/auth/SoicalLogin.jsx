import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';

const SoicalLogin = () => {
    const { googleSignin } = useContext(AuthContext)
    const navigate=useNavigate()

    const handleGooleLogin=()=>{
        googleSignin().then(result=>{
            const user = result.user;
            console.log(user)
            if(user){
                navigate('/')
            }
        }).catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <button onClick={handleGooleLogin} className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 cursor-pointer">
                <FcGoogle size={20} />
                <span className="text-base font-medium text-gray-700">Login with Google</span>
            </button>
        </div>
    );
};

export default SoicalLogin;
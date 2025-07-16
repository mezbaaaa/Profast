import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import SoicalLogin from './SoicalLogin';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState()
  const { register, handleSubmit } = useForm()
  const { singInUser } = useContext(AuthContext)

  const onSubmit = data => {
    console.log(data)
    const email = data.email;
    const password = data.password;
    singInUser(email,password).then(result=>{
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
    <div className="w-full max-w-md mx-auto text-left">
      <h1 className="text-4xl font-extrabold mb-2">Welcome Back</h1>
      <p className="mb-6 text-gray-600">Login with Profast</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email')}
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none "
            />
          </div>

          <div className='relative'>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type={show ? 'text' : 'password'}
              {...register('password')}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-md focus:outline-none "
            />
            <span className='absolute right-3 bottom-3 cursor-pointer' onClick={() => setShow(!show)}>
              {show ? <Eye /> : <EyeOff />}
            </span>
          </div>

          <div className="text-left">
            <Link to={'/forgetpassword'} className="text-sm text-gray-500 hover:underline">Forgot Password?</Link>
          </div>

          <button className="w-full py-3 bg-[#CAEB66] cursor-pointer text-black font-semibold rounded-md">
            Login
          </button>

          <p className="text-sm text-gray-500 text-left">
            Don’t have any account? <Link to={'/signup'} className="text-lime-600 font-medium hover:underline">Register</Link>
          </p>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="text-sm text-gray-400">Or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <SoicalLogin></SoicalLogin>
        </div>
      </form>
    </div>
  );
};

export default Login;
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import SoicalLogin from './SoicalLogin';
import uploadIcon from '../../../assets/image-upload-icon.png'
import { AuthContext } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const SignUp = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { createUser } = useContext(AuthContext)

  const onSubmit = (data) => {
    console.log(data)
    const name = data.name;
    const email = data.email;
    const password = data.password;
    createUser(email,password).then(result=>{
      const user = result.user;
      console.log(user)
      updateProfile(auth.currentUser,{
        displayName:name
      })
      if(user){
        navigate('/')
      }
    }).catch(error=>{
      console.log(error)
    })
  }

  return (
    <div className="w-full max-w-md mx-auto text-left">
      <h1 className="text-4xl font-extrabold mb-2">Create an Account</h1>
      <p className="mb-6 text-gray-600">Register with Profast</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <div>
            <img src={uploadIcon} alt="icon" className='w-14 h-14 cursor-pointer' />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register('name',{
                required:true
              })}
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-md focus:outline-none "
            />
            {
              errors.name?.type==='required' && <p className="text-red-500 text-sm">Name is required</p>
            }
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email',{
                required:true
              })}
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none "
            />
            {
              errors.email?.type==='required' && <p className="text-red-500 text-sm">Email is required</p>
            }
          </div>

          <div>
            <div className='relative'>
              <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
              <input
                type={show ? 'text' : 'password'}
                {...register('password', {
                  required: true,
                  minLength: 6
                })}
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-md focus:outline-none "
              />
              <span className='absolute right-3 bottom-3 cursor-pointer' onClick={() => setShow(!show)}>
                {show ? <Eye /> : <EyeOff />}
              </span>
            </div>
            {
              errors.password?.type === 'required' && <p className='text-red-500 text-sm'>
                Password is required
              </p>
            }
            {
              errors.password?.type=== 'minLength' && <p className='text-red-500 text-sm'>Password must be 6 characters or longer</p>
            }
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
      </form>
    </div>
  );
};

export default SignUp;
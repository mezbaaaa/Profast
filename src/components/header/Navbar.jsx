import { MoveUpRight } from 'lucide-react';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../../src/assets/logo.png'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout().then(result=>{
            const user= result.user;
            console.log(user)
        })
    }
    return (
        <div className='flex items-center justify-between bg-[#FFFFFF] rounded-xl px-4 py-3 border border-gray-200 mt-8'>
            <Link to={'/'} className='flex items-end cursor-pointer'>
                <img src={logo} alt="logo Image" className='mb-2' />
                <p className='font-extrabold text-3xl -ml-4'>Profast</p>
            </Link>
            <div className='flex items-center gap-5 text-lg'>
                <NavLink>Services</NavLink>
                <NavLink to={'/coverage'}>Coverage</NavLink>
                <NavLink to={'/about-us'}>About Us</NavLink>
                <NavLink to={'/pricing'}>Pricing</NavLink>
                <NavLink to={'/rider'}>Be a Rider</NavLink>
            </div>
            <div className='flex gap-4'>
                <Link className='flex items-center '><button className='text-[#1F1F1F] font-bold text-xl px-8 py-4 bg-[#CAEB66] rounded-xl cursor-pointer'>Be a rider</button></Link>
                {
                    !user ? <Link to={'/login'} className='px-8 py-4 border rounded-xl border-[#DADADA] text-[#606060] font-bold text-xl'>Sing In</Link> :
                        <div onClick={handleLogout} className='px-8 py-4 cursor-pointer border rounded-xl border-[#DADADA] text-[#606060] font-bold text-xl'>Log out</div>
                }
            </div>
        </div>
    );
};

export default Navbar;
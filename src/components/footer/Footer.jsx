
import React from 'react';
import logo from '../../../src/assets/logo.png'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white py-16 px-4 text-center rounded-3xl my-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {/* Logo */}
        <div className="mb-4">
          {/* Replace with your logo */}
          <p className='flex items-end cursor-pointer'>
            <img src={logo} alt="logo Image" className='mb-2' />
            <p className='font-extrabold text-3xl -ml-4'>Profast</p>
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-300 max-w-2xl leading-relaxed text-sm sm:text-base">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* Divider */}
        <div className="w-full border-t border-dashed border-cyan-900 my-6"></div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Coverage</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>

        {/* Divider */}
        <div className="w-full border-t border-dashed border-cyan-900 my-6"></div>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center">
          {/* Replace with your own social icons */}
          <a href="" target='_blank' className="bg-[#0077B5] p-3 rounded-full text-white">
            <FaLinkedin size={20}/>
          </a>
          <a href="" target='_blank' className="bg-white p-3 rounded-full text-black">
            <FaTwitter size={20} />
          </a>
          <a href="" target='_blank' className="bg-[#1877F2] p-3 rounded-full text-white">
            <FaFacebook size={20} />
          </a>
          <a href="" target='_blank' className="bg-[#FF0000] p-3 rounded-full text-white">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
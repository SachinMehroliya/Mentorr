

import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-4 w-full">

      {/* Footer Main Section */}
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex flex-col md:flex-row justify-between gap-8 text-sm mb-6">

          {/* Left Section */}
          <div className="flex flex-col gap-4">
            <img className="w-32" src={assets.logo1} alt="Logo" />
            <p className="text-gray-600 max-w-md leading-relaxed">
            Where passion meets expertise: connect with dedicated mentors who believe in your potential and are ready to share their wisdom to help you achieve extraordinary goals.
            </p>
          </div>

          {/* Center Section */}
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold text-gray-800">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li className="hover:text-primary cursor-pointer">Home</li>
              <li className="hover:text-primary cursor-pointer">About Us</li>
              <li className="hover:text-primary cursor-pointer">Contact Us</li>
              <li className="hover:text-primary cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold text-gray-800">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li className="hover:text-primary">+91-7015245749</li>
              <li className="hover:text-primary">sachinverma13713@gmail.com</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-300 mt-6 pt-4 text-center">
          <p className="text-xs text-gray-600">© 2024 Reraj - All Rights Reserved.</p>
        </div>

      </div>

    </div>
  );
};

export default Footer;







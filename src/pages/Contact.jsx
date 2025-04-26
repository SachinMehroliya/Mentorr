
import React from 'react';
import { assets } from "../assets/assets";
import CONTACTUS_PHOTO from '/src/photos/CONTACTUS_PHOTO.jpg'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-10">
      {/* Title */}
      <div className="text-center text-4xl font-bold text-gray-700 pt-10 tracking-wide">
        <p>CONTACT <span className="text-primary">US</span></p>
      </div>

      {/* Content Section */}
      <div className="my-16 flex flex-col justify-center items-center md:flex-row gap-16 px-6 text-sm max-w-6xl mx-auto">
        
        {/* Image */}
        <img className="w-full h-96 md:max-w-md shadow-lg rounded-xl object-cover" src={CONTACTUS_PHOTO} alt="Contact Us" />
        
        {/* Contact Information */}
        <div className="flex flex-col justify-center items-start space-y-6 text-gray-700">
          <p className="font-semibold text-2xl text-gray-800">Our Office</p>
          <p className="text-gray-600 leading-relaxed">
            54709 Willms Station <br />
           India
          </p>
          <p className="text-gray-600">
            Tel: 7015245749 <br />
            Email: <a href="mailto:greatstackdev@gmail.com" className="text-blue-500">sachin@gmail.com</a>
          </p>

          <p className="font-semibold text-2xl text-gray-800">Careers at Mentorr</p>
          <p className="text-gray-600 leading-relaxed">Learn more about our teams and job openings.</p>
          
          {/* Explore Jobs Button */}
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all">
            Explore Jobs
          </button>
        </div>

      </div>
    </div>
  );
}

export default Contact;


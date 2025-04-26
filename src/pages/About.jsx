

import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-pink-50 to-purple-50 py-10">

      {/* Header Section */}
      <div className="text-center text-4xl font-bold text-gray-700 pt-10 tracking-wide">
        <p>
          ABOUT <span className="text-primary">US</span>
        </p>
      </div>

      {/* Main Content Section */}
      <div className="my-16 flex flex-col md:flex-row gap-16 px-6 max-w-7xl mx-auto">
        
        {/* Image Section */}
        <img
          className="w-full md:max-w-md shadow-lg rounded-xl object-cover"
          src={assets.about_image}
          alt="About Us"
        />

        {/* Text Content Section */}
        <div className="flex flex-col justify-center gap-8 md:w-2/4 text-gray-700">
          <p className="leading-relaxed">
            Welcome to Mentorr, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className="leading-relaxed">
            Mentorr is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <b className="text-xl text-gray-800">Our Vision</b>
          <p className="leading-relaxed">
            Our vision at Mentorr is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center text-3xl font-bold text-gray-700 my-10">
        <p>
          WHY <span className="text-primary">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 px-6 max-w-7xl mx-auto">

        {/* Card 1 */}
        <div className="border px-8 py-10 sm:py-16 flex flex-col items-start gap-5 text-lg text-gray-600 hover:bg-gradient-to-r from-primary to-purple-600 hover:text-white transition-all duration-500 rounded-lg shadow-md cursor-pointer">
          <b className="text-xl">Efficiency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        {/* Card 2 */}
        <div className="border px-8 py-10 sm:py-16 flex flex-col items-start gap-5 text-lg text-gray-600 hover:bg-gradient-to-r from-primary to-purple-600 hover:text-white transition-all duration-500 rounded-lg shadow-md cursor-pointer">
          <b className="text-xl">Convenience</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        {/* Card 3 */}
        <div className="border px-8 py-10 sm:py-16 flex flex-col items-start gap-5 text-lg text-gray-600 hover:bg-gradient-to-r from-primary to-purple-600 hover:text-white transition-all duration-500 rounded-lg shadow-md cursor-pointer">
          <b className="text-xl">Personalization</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  );
};

export default About;


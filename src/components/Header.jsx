// import React from 'react'
// import { assets } from '../assets/assets'

// const Header = () => {
//   return (
//     <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
//         {/* --------Left side ------- */}
//       <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
//         <p className='text-3xl md:text-4xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
//             BOOK APPOINTMENT <br/> With Trusted Doctors
//         </p>
//         <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
//             <img className='w-28' src={assets.group_profiles} alt=''/>
//             <p>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block'/>schedule your appointment hassle-free.</p>
//         </div>
//         <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
//             Book appointment <img className='w-3' src={assets.arrow_icon} alt=''/>
//         </a>
//       </div>

//         {/* --------Right side ------- */}
//       <div className='md:w-1/2 relative'>
//         <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt=''/>
//       </div>

//     </div>
//   )
// }

// export default Header











import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col md:flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white  shadow-xl p-8 md:p-12 lg:p-10 overflow-hidden">
      {/* -------- Left side -------- */}
      <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 md:mb-6 text-center md:text-left">
        Connect With Experts <br /> <span className='text-3xl md:text-4xl lg:text-5xl'>Elevate Your Potential</span>
        </h1>
        <p className="text-lg md:text-xl font-light mb-6 max-w-md text-center md:text-left">
        Connect, learn, and grow with guidance from those who lead the way. Your aspirations deserve mentorship from the best in the field
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#speciality"
            className="inline-flex items-center gap-2 bg-white text-indigo-500 px-6 py-3 sm:px-10 sm:py-4 rounded-full text-md  font-semibold shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            Find Mentor
            {/* <img className="w-4" src={assets.arrow_icon} alt="Arrow" /> */}
          </a>
          <button
          onClick={() => navigate('/add-doctor')}
            
            className="inline-flex items-center gap-2 bg-white text-indigo-500  px-6 py-3 sm:px-10 sm:py-4 rounded-full text-md font-semibold shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            Become Mentor
            {/* <img className="w-4" src={assets.arrow_icon} alt="Arrow" /> */}
          </button>
        </div>
      </div>

      {/* -------- Right side -------- */}
      <div className="md:w-1/2 mt-6 md:mt-0 relative z-10">
        <img
          className="w-full rounded-lg shadow-lg object-cover h-auto transform hover:scale-105 transition-transform duration-500"
          src={assets.header_img}
          alt="Doctor"
        />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white bg-opacity-20 rounded-full blur-3xl filter"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white bg-opacity-20 rounded-full blur-3xl filter"></div>
    </div>
  );
};

export default Header;

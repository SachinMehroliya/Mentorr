// import React from 'react'
// import { specialityData } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const SpecialityMenu = () => {
//   return (
//     <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
//       <h1 className='text-3xl font-medium'>Find by Speciality</h1>
//       <p className='sm:w-2/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
//       <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
//         {specialityData.map((item,index)=>(
//             <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shriink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
//                 <img className='w-16 sm:w-24 mb-2' src={item.image} alt=''/>
//                 <p>{item.speciality}</p>
//             </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default SpecialityMenu



// import React from 'react';
// import { specialityData } from '../assets/assets';
// import { Link } from 'react-router-dom';

// const SpecialityMenu = () => {
//   return (
//     <div
//       className="flex flex-col items-center gap-6 py-16 text-gray-800 bg-gradient-to-r from-indigo-100 to-purple-100 shadow-md"
//       id="speciality"
//     >
//       <h1 className="text-4xl font-bold text-gray-900">Find by Speciality</h1>
//       <p className="sm:w-2/3 text-center text-sm text-gray-600">
//         Browse through our extensive list of trusted Mentors and schedule your sessions hassle-free.
//       </p>
//       <div className="flex sm:justify-center gap-6 pt-5 w-full overflow-x-auto">
//         {specialityData.map((item, index) => (
//           <Link
//             onClick={() => scrollTo(0, 0)}
//             className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 transition-transform duration-300 hover:scale-105"
//             key={index}
//             to={`/doctors/${item.speciality}`}
//           >
//             <div className="bg-white p-4 rounded-full shadow-lg transition-shadow duration-300 hover:shadow-xl">
//               <img className="w-20 sm:w-24 mb-2" src={item.image} alt="" />
//             </div>
//             <p className="mt-2 text-center font-medium text-gray-800">{item.speciality}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpecialityMenu;




import React from 'react';
import { Link } from 'react-router-dom';
import IITJEE from '/src/photos/IITJEE.png'
import NEET from '/src/photos/NEET.svg'
import SOFTWARE from '/src/photos/SOFTWARE.png'
import FINANCE from '/src/photos/FINANCE.png'
import CONSULTING from '/src/photos/CONSULTING.png'
import PRODUCT from '/src/photos/PRODUCT.png'
// import Image2 from '../assets/image2.png'; // Add all images here
// import Image3 from '../assets/image3.png'; // Example for multiple images

const specialityData = [
  { speciality: 'IIT-JEE', image: IITJEE },
  { speciality: 'NEET', image: NEET },
  { speciality: 'SOFTWARE', image: SOFTWARE },
  { speciality: 'FINANCE', image: FINANCE },
  { speciality: 'CONSULTING', image: CONSULTING },
  { speciality: 'PRODUCT MANAGEMENT', image: PRODUCT },
  // { speciality: 'Speciality Two', image: Image2 },
  // { speciality: 'Speciality Three', image: Image3 },
  // Add more specialities as needed
];

const SpecialityMenu = () => {
  return (
    <div
      className="flex flex-col items-center gap-6 py-16 text-gray-800 bg-gradient-to-r from-indigo-100 to-purple-100 shadow-md"
      id="speciality"
    >
      <h1 className="text-4xl font-bold text-gray-900">Find by Speciality</h1>
      <p className="sm:w-2/3 text-center text-sm text-gray-600">
        Browse through our extensive list of trusted Mentors and schedule your sessions hassle-free.
      </p>
      <div className="flex sm:justify-center gap-6 pt-5 w-full overflow-x-auto">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 transition-transform duration-300 hover:scale-105"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <div className="bg-white p-4 rounded-full shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <img className="w-20 sm:w-24 mb-2" src={item.image} alt={item.speciality} />
            </div>
            <p className="mt-2 text-center font-medium text-gray-800">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;

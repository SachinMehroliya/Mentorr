// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext';

// const Doctors = () => {


//   const { speciality } = useParams();

//   const {doctors} = useContext(AppContext)
//   const [filterDoc,setFilterDoc] = useState([]);
//   const navigate = useNavigate();


//   const applyFilter = () => {
//     if (speciality){
//       setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
//     } else {
//       setFilterDoc(doctors)
//     }
//   }

//   useEffect(()=>{
//     applyFilter()
//   },[doctors,speciality])

//   return (
//     <div>
//       <p className='text-gray-600'>Browse through the doctors specialist.</p>
//       <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
//         <div className='flex flex-col gap-4 text-sm text-gray-600'>
//           <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}>General physician</p>
//           <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
//           <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
//           <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
//           <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
//           <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
//         </div>
//         <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
//           {
//             filterDoc.map((item,index)=>(
//               <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
//                 <img className='bg-blue-50' src={item.image} alt='' />
//                 <div className='p-4'>
//                 <div className='flex items-center gap-2 text-sm text-center text-green-500'>
//                   <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
//                 </div>
//                 <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//                 <p className='text-gray-600 text-sm'>{item.speciality}</p>
//                 </div>
//                 </div>
//           ))
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Doctors




// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';

// const Doctors = () => {

//   const { speciality } = useParams();
//   const { doctors } = useContext(AppContext);
//   const [filterDoc, setFilterDoc] = useState([]);
//   const [showFilter,setShowFilter] = useState(false)
//   const navigate = useNavigate();

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
//     } else {
//       setFilterDoc(doctors);
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   return (
//     <div className="px-4 sm:px-8 lg:px-16 py-8">

//       <p className="text-gray-700 text-lg font-medium mb-4">Browse Doctors by Specialization</p>

//       <div className="flex flex-col sm:flex-row items-start gap-8 mt-5">
//         <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
//         {/* Sidebar with specialities */} 
//         <div className={` flex-col gap-4 text-sm text-gray-600 w-full sm:w-auto ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
//           {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map(spec => (
//             <p
//               key={spec}
//               onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)}
//               className={`pl-4 py-2 pr-16 border border-gray-300 rounded-md hover:bg-indigo-100 hover:text-black transition-all cursor-pointer ${
//                 speciality === spec ? 'bg-indigo-100 text-black' : ''
//               }`}
//             >
//               {spec}
//             </p>
//           ))}
//         </div>

//         {/* Doctors grid */}
//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filterDoc.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => navigate(`/appointment/${item._id}`)}
//               className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
//             >
//               <img className="bg-blue-50 w-full h-70 md:h-48 object-cover" src={item.image} alt={item.name} />
//               <div className="p-4">
//                 <div className="flex items-center gap-2 text-sm text-green-500">
//                   <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                   <p>Available</p>
//                 </div>
//                 <p className="text-gray-900 text-lg font-medium mt-2">{item.name}</p>
//                 <p className="text-gray-600 text-sm">{item.speciality}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Doctors;






// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';

// const Doctors = () => {

//   const { speciality } = useParams();
//   const { doctors } = useContext(AppContext);
//   const [filterDoc, setFilterDoc] = useState([]);
//   const [showFilter, setShowFilter] = useState(false);
//   const navigate = useNavigate();

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
//     } else {
//       setFilterDoc(doctors);
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   return (
//     <div className="px-4 sm:px-8 lg:px-16 py-8">
//       <p className="text-gray-700 text-lg font-medium mb-4">Browse Doctors by Specialization</p>

//       <div className="flex flex-col sm:flex-row items-start gap-8 mt-5">
//         <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
//         {/* Sidebar with specialities */}
//         <div className={` flex-col gap-4 text-sm text-gray-600 w-full sm:w-auto ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
//           {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map(spec => (
//             <p
//               key={spec}
//               onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)}
//               className={`pl-4 py-2 pr-16 border border-gray-300 rounded-md hover:bg-indigo-100 hover:text-black transition-all cursor-pointer ${speciality === spec ? 'bg-indigo-100 text-black' : ''}`}
//             >
//               {spec}
//             </p>
//           ))}
//         </div>

//         {/* Doctors list */}
//         <div className="w-full flex flex-col gap-6">
//           {filterDoc.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => navigate(`/appointment/${item._id}`)}
//               className="w-full h-52 flex flex-col md:flex-row items-center border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
//             >
//               {/* Image container with fixed height */}
//               <div className="w-full md:w-1/3 h-52">
//                 <img
//                   className="w-full h-full object-cover object-center" // Ensures all images have the same height
//                   src={item.image}
//                   alt={item.name}
//                 />
//               </div>
//               {/* Doctor details */}
//               <div className="p-4 w-full md:w-2/3 flex flex-col justify-center">
//               <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500' } `}>
//                 <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'}  rounded-full`}></p>
//                 <p>{item.available ? 'Available' : 'Not Available'}</p>
//               </div>
//                 <p className="text-gray-900 text-xl font-medium">{item.name}</p>
//                 <p className="text-gray-600 text-sm mb-2">{item.speciality}</p>
//                 <p className="text-gray-500 text-sm">Location: {item.about}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Doctors;





// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';

// const Doctors = () => {
//   const { speciality } = useParams();
//   const { doctors } = useContext(AppContext);
//   const [filterDoc, setFilterDoc] = useState([]);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const navigate = useNavigate();

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
//     } else {
//       setFilterDoc(doctors);
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   return (
//     <div className="px-4 sm:px-8 lg:px-1 py-8">
//       <p className="text-gray-700 text-lg font-medium mb-4">Browse Doctors by Specialization</p>

//       <div className="flex flex-col md:flex-row gap-8">

//         {/* Sidebar Filters */}
//         <div className={`flex-col gap-4 w-full md:w-1/3 lg:w-1/4 `}>
//           <select
//             className="border border-gray-300 rounded-md p-2 text-sm w-full mb-4"
//             onChange={(e) => navigate(e.target.value ? `/doctors/${e.target.value}` : '/doctors')}
//             value={speciality || ''}
//           >
//             <option value="">All Specialities</option>
//             {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map(spec => (
//               <option key={spec} value={spec}>{spec}</option>
//             ))}
//           </select>

//           {filterDoc.map((doctor, index) => (
//             <div
//               key={index}
//               onClick={() => setSelectedDoctor(doctor)}
//               className={`p-4 border rounded-lg cursor-pointer hover:bg-blue-100 transition-all flex items-center ${selectedDoctor === doctor ? 'bg-blue-200' : ''}`}
//               style={{ minWidth: '280px', maxWidth: '360px' }}
//             >
//               <img src={doctor.image} alt={doctor.name} className="w-20 h-28 rounded mr-4" />
//               <div>
//                 <p className="font-medium text-blue-600">{doctor.name}</p>
//                 <p className="text-gray-600 text-sm">{doctor.speciality}</p>
//                 <p className="text-sm text-gray-500">Experience: {doctor.experience} years</p>
//                 <p className={`text-xs ${doctor.available ? 'text-green-500' : 'text-red-500'}`}>
//                   {doctor.available ? 'Available' : 'Not Available'}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Doctor Details Section */}
//         <div className="w-full md:w-2/3 lg:w-2/3 flex flex-col gap-16 ml-auto">
//           {selectedDoctor ? (
//             <div className="p-6 border rounded-lg shadow-lg">
//               <div className="flex items-center mb-4">
//                 <img
//                   src={selectedDoctor.image}
//                   alt={selectedDoctor.name}
//                   className="w-32 h-32 rounded-full border-4 border-blue-600"
//                 />
//                 <div className="ml-6">
//                   <p className="text-2xl font-semibold text-blue-600">{selectedDoctor.name}</p>
//                   <p className="text-gray-600">{selectedDoctor.speciality}</p>
//                   <p className="text-gray-500">Experience: {selectedDoctor.experience} years</p>
//                   <p className={`text-sm ${selectedDoctor.available ? 'text-green-500' : 'text-red-500'}`}>
//                     {selectedDoctor.available ? 'Available' : 'Not Available'}
//                   </p>
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-2">Location: {selectedDoctor.about}</p>
//               <p className="text-gray-700 mb-2">Experience: {selectedDoctor.experience} years</p>
//               <p className="text-gray-700">Contact: {selectedDoctor.contact}</p>
//               <button
//                 onClick={() => navigate(`/appointment/${selectedDoctor._id}`)}
//                 className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all"
//               >
//                 Book Appointment
//               </button>
//             </div>
//           ) : (
//             <p className="text-center text-gray-600">Select a doctor to view details</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;







// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';

// const Doctors = () => {
//   const { speciality } = useParams();
//   const { doctors } = useContext(AppContext);
//   const [filterDoc, setFilterDoc] = useState([]);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const navigate = useNavigate();

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
//     } else {
//       setFilterDoc(doctors);
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   return (
//     <div className="px-4 sm:px-8 lg:px-1 py-8">
//       <p className="text-gray-700 text-lg font-medium mb-4">Browse Doctors by Specialization</p>

//       <div className="flex flex-col md:flex-row gap-8">
        
//         {/* Sidebar Filters */}
//         <div className={`flex-col gap-6 w-full md:w-1/3 lg:w-auto overflow-y-auto`}>
//           <select
//             className="border border-gray-300 rounded-md p-2 text-sm w-full mb-4"
//             onChange={(e) => navigate(e.target.value ? `/doctors/${e.target.value}` : '/doctors')}
//             value={speciality || ''}
//           >
//             <option value="">All Specialities</option>
//             {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map(spec => (
//               <option key={spec} value={spec}>{spec}</option>
//             ))}
//           </select>

//           {filterDoc.map((doctor, index) => (
//             <div
//               key={index}
//               onClick={() => setSelectedDoctor(doctor)}
//               className={`p-4 border rounded-lg cursor-pointer hover:bg-blue-100 transition-all flex items-center ${selectedDoctor === doctor ? 'bg-blue-200' : ''}`}
//               style={{ minWidth: '280px', maxWidth: '360px' }}
//             >
//               <img src={doctor.image} alt={doctor.name} className="w-20 h-28 rounded mr-4" />
//               <div>
//                 <p className="font-medium text-blue-600">{doctor.name}</p>
//                 <p className="text-gray-600 text-sm">{doctor.speciality}</p>
//                 <p className="text-sm text-gray-500">Experience: {doctor.experience} years</p>
//                 <p className={`text-xs ${doctor.available ? 'text-green-500' : 'text-red-500'}`}>
//                   {doctor.available ? 'Available' : 'Not Available'}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Doctor Details Section */}
//         <div
//           className={`w-full md:w-2/3 lg:w-2/3 flex flex-col gap-16 ml-auto transition-all ${
//             selectedDoctor && window.innerWidth < 768 ? 'fixed top-0 left-0 h-full w-full bg-white p-8 z-10' : ''
//           }`}
//           style={{ overflowY: selectedDoctor && window.innerWidth >= 768 ? 'auto' : 'hidden' }}
//         >
//           {selectedDoctor ? (
//             <div className="p-6 border rounded-lg shadow-lg">
//               <div className="flex items-center mb-4">
//                 <img
//                   src={selectedDoctor.image}
//                   alt={selectedDoctor.name}
//                   className="w-32 h-32 rounded-full border-4 border-blue-600"
//                 />
//                 <div className="ml-6">
//                   <p className="text-2xl font-semibold text-blue-600">{selectedDoctor.name}</p>
//                   <p className="text-gray-600">{selectedDoctor.speciality}</p>
//                   <p className="text-gray-500">Experience: {selectedDoctor.experience} years</p>
//                   <p className={`text-sm ${selectedDoctor.available ? 'text-green-500' : 'text-red-500'}`}>
//                     {selectedDoctor.available ? 'Available' : 'Not Available'}
//                   </p>
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-2">Location: {selectedDoctor.about}</p>
//               <p className="text-gray-700 mb-2">Experience: {selectedDoctor.experience} years</p>
//               <p className="text-gray-700">Contact: {selectedDoctor.contact}</p>
//               <button
//                 onClick={() => navigate(`/appointment/${selectedDoctor._id}`)}
//                 className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all"
//               >
//                 Book Appointment
//               </button>
//               {window.innerWidth < 768 && (
//                 <button
//                   onClick={() => setSelectedDoctor(null)}
//                   className="mt-4 bg-gray-400 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-500 transition-all"
//                 >
//                   Close
//                 </button>
//               )}
//             </div>
//           ) : (
//             <p className="text-center text-gray-600">Select a doctor to view details</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;






import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="px-4 sm:px-8 lg:px-1 py-8">
      <p className="text-gray-700 text-lg font-medium mb-4">Browse Mentors by Specialization</p>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters with Scrollable Doctor List */}
        <div
          className="flex flex-col gap-6 w-full md:w-[350px] lg:w-[350px] overflow-y-auto"
          style={{ maxHeight: '80vh' }}
        >
          <select
            className="border border-gray-300 rounded-md p-2 text-sm w-full mb-4"
            onChange={(e) => navigate(e.target.value ? `/doctors/${e.target.value}` : '/doctors')}
            value={speciality || ''}
          >
            <option value="">All Specialities</option>
            {['IIT-JEE', 'NEET', 'Software', 'Finance', 'Consulting', 'Product Management'].map(spec => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>

          {filterDoc.map((doctor, index) => (
            <div
              key={index}
              onClick={() => setSelectedDoctor(doctor)}
              className={`p-4 border rounded-lg cursor-pointer hover:bg-blue-100 transition-all flex items-center ${selectedDoctor === doctor ? 'bg-blue-200' : ''}`}
              style={{ minWidth: '280px', maxWidth: '360px' }}
            >
              <img src={doctor.image} alt={doctor.name} className="w-28 h-28 rounded mr-4" />
              <div>
                <p className="font-medium text-blue-600">{doctor.name}</p>
                <p className="text-gray-600 text-sm">{doctor.speciality}</p>
                <p className="text-sm text-gray-500">Experience: {doctor.experience}</p>
                <p className={`text-xs ${doctor.available ? 'text-green-500' : 'text-red-500'}`}>
                  {doctor.available ? 'Available' : 'Not Available'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Details Section */}
        <div
          className={`w-full md:w-2/3 lg:w-2/3 flex flex-col gap-16 ml-auto transition-all ${
            selectedDoctor && window.innerWidth < 768 ? 'fixed top-0 left-0 h-full w-full bg-white p-8 z-10' : ''
          }`}
          style={{ overflowY: selectedDoctor && window.innerWidth >= 768 ? 'auto' : 'hidden' }}
        >
          {selectedDoctor ? (
            <div className="p-6 border rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-32 h-32 rounded-full border-4 border-blue-600"
                />
                <div className="ml-6">
                  <p className="text-2xl font-semibold text-blue-600">{selectedDoctor.name}</p>
                  <p className="text-gray-600">{selectedDoctor.speciality}</p>
                  <p className="text-gray-500">Experience: {selectedDoctor.experience} years</p>
                  <p className={`text-sm ${selectedDoctor.available ? 'text-green-500' : 'text-red-500'}`}>
                    {selectedDoctor.available ? 'Available' : 'Not Available'}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">Location: {selectedDoctor.about}</p>
              <p className="text-gray-700 mb-2">Experience: {selectedDoctor.experience} years</p>
              <p className="text-gray-700">Contact: {selectedDoctor.contact}</p>
              <button
                onClick={() => navigate(`/appointment/${selectedDoctor._id}`)}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all"
              >
                Book Session
              </button>
              {window.innerWidth < 768 && (
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="mt-4 bg-gray-400 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-500 transition-all"
                >
                  Close
                </button>
              )}
            </div>
          ) : (
            <p className="text-center text-gray-600">Select a mentor to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;

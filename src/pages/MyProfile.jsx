// import React, { useState } from 'react'
// import { assets } from '../assets/assets'

// const MyProfile = () => {

//   const [userData,setUserData] = useState({
//     name:"Edward Vincent",
//     image:assets.profile_pic,
//     email:'richardjameswap@gmail.com',
//     phone:'+1  123 456 7890',
//     address:{
//       line1:"57th Cross, Richmond ",
//       line2:"Circle, Church Road, London"
//     },
//     gender:"Male",
//     dob:'2000-01-20'
//   })

//   const [isEdit,setIsEdit] = useState(true)

//   return (
//     <div className='w-full flex flex-col gap-2 text-sm items-center'>
//       <img className='w-36 rounded' src={userData.image} alt="" />

//       {
//         isEdit 
//         ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))} />
//         : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
//       }

//       <hr className='bg-zinc-400 h-[1px] border-none' />
//       <div>
//         <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
//         <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
//           <p className='font-medium'>Email id:</p>
//           <p className='text-blue-500'>{userData.email}</p>
//           <p className='font-medium'>Phone:</p>
//           {
//             isEdit 
//             ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))} />
//             : <p className='text-blue-400'>{userData.phone}</p>
//           }
//           <p className='font-medium'>Address:</p>
//           {
//             isEdit
//             ? <p>
//               <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, line1: e.target.value}}))} value={userData.address.line1} type="text" />
//               <br />
//               <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, line2: e.target.value}}))} value={userData.address.line2} type="text" />
//             </p>
//             : <p className='text-gray-500'>
//               {userData.address.line1}
//               <br />
//               {userData.address.line2}
//             </p>
//           }
//         </div>
//       </div>
//       <div>
//         <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
//         <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
//           <p className='font-medium'>Gender:</p>
//           {
//         isEdit 
//         ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//         : <p className='text-gray-400'>{userData.gender}</p>
//       }
//       <p className='font-medium'>Birthday:</p>
//       {
//         isEdit 
//         ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))} value={userData.dob} />
//         : <p className='text-gray-400'>{userData.dob}</p>
//       }
//         </div>
//       </div>

//       <div className='mt-10'>
//         {
//           isEdit
//           ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(false)}>Save information</button>
//           : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(true)}>Edit</button>
//         }
//       </div>
//     </div>
//   )
// }

// export default MyProfile




import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import axios from 'axios'
import { toast } from 'react-toastify';

const MyProfile = () => {
  const {userData,setUserData,token,backendUrl,loadUserProfileData} = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false);
  const [image,setImage] = useState(false)


  const updateUserProfileData = async () => {
    try {
      
      const formData = new FormData()
      formData.append('name',userData.name)
      formData.append('phone',userData.phone)
      formData.append('address',JSON.stringify(userData.address))
      formData.append('gender',userData.gender)
      formData.append('dob',userData.dob)

      image && formData.append('image',image)

      const {data} = await axios.post(backendUrl + '/api/user/update-profile',formData,{headers:{token}})

      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return userData && (
    <div className="w-full flex justify-center items-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-10 min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl text-center flex flex-col items-center space-y-6">
        
        {
          isEdit
          ? <label htmlFor="image">
            <div className='inline-bloack relative cursor-pointer'>
              <img className='w-36 rounded opacity-75' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
              <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon } alt="" />
            </div>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden />
          </label>
          : <img 
            className="w-36 h-36 rounded-full object-cover border-4 border-primary shadow-lg" 
            src={userData.image} 
            alt="Profile"
          />
        }

        {/* Name */}
        {isEdit ? (
          <input
            className="bg-gray-100 text-3xl font-semibold text-center p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            type="text"
            value={userData.name}
            onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
          />
        ) : (
          <p className="font-bold text-4xl text-gray-800 mt-4">{userData.name}</p>
        )}

        {/* Divider */}
        <hr className="bg-gray-200 w-full" />

        {/* Contact Information */}
        <div className="w-full">
          <p className="text-gray-600 font-semibold text-lg underline mb-3">Contact Information</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-4 text-gray-700">
            <p className="font-medium">Email:</p>
            <p className="text-blue-500">{userData.email}</p>

            <p className="font-medium">Phone:</p>
            {isEdit ? (
              <input
                className="bg-gray-50 rounded-md p-2 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                type="text"
                value={userData.phone}
                onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
              />
            ) : (
              <p className="text-blue-400">{userData.phone}</p>
            )}

            <p className="font-medium">Address:</p>
            {isEdit ? (
              <div>
                <input
                  className="bg-gray-50 rounded-md p-2 border border-gray-300 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  value={userData.address.line1}
                  onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                  type="text"
                />
                <input
                  className="bg-gray-50 rounded-md p-2 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  value={userData.address.line2}
                  onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                  type="text"
                />
              </div>
            ) : (
              <p className="text-gray-500">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>

        {/* Basic Information */}
        <div className="w-full mt-6">
          <p className="text-gray-600 font-semibold text-lg underline mb-3">Basic Information</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-4 text-gray-700">
            <p className="font-medium">Gender:</p>
            {isEdit ? (
              <select
                className="bg-gray-50 rounded-md p-2 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
                value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-400">{userData.gender}</p>
            )}

            <p className="font-medium">Birthday:</p>
            {isEdit ? (
              <input
                className="bg-gray-50 rounded-md p-2 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                type="date"
                onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
                value={userData.dob}
              />
            ) : (
              <p className="text-gray-400">{userData.dob}</p>
            )}
          </div>
        </div>

        {/* Edit/Save Button */}
        <div className="mt-10">
          {isEdit ? (
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-2 rounded-full shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all"
              onClick={updateUserProfileData}
            >
              Save Information
            </button>
          ) : (
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-2 rounded-full shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all"
              onClick={() => setIsEdit(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;


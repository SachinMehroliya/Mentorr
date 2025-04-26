// import React from "react";
// import { assets } from "../assets/assets_admin/assets";
// import { useState } from "react";
// import { useContext } from "react";
// import { AdminContext } from "../context/AdminContext";
// import {toast} from 'react-toastify'
// import axios from 'axios'

// const AddDoctor = () => {

//     const [docImg,setDocImg] = useState(false)
//     const [name,setName] = useState('')
//     const [email,setEmail] = useState('')
//     const [password,setPassword] = useState('')
//     const [experience,setExperience] = useState('1 Year')
//     const [fees,setFees] = useState('')
//     const [about,setAbout] = useState('')
//     const [speciality,setSpeciality] = useState('General physician')
//     const [degree,setDegree] = useState('')
//     const [address1,setAddress1] = useState('')
//     const [address2,setAddress2] = useState('')

//     const {backendUrl,aToken} = useContext(AdminContext)

//     const onSubmitHandler = async (event) => {
//         event.preventDefault()
//         try {
            
//             if (!docImg) {
//                 return toast.error('Image Not Selected')
//             }

//             const formData = new FormData()

//             formData.append('image',docImg)
//             formData.append('name',name)
//             formData.append('email',email)
//             formData.append('password',password)
//             formData.append('experience',experience)
//             formData.append('fees',Number(fees))
//             formData.append('about',about)
//             formData.append('speciality',speciality)
//             formData.append('degree',degree)
//             formData.append('address',JSON.stringify({line1:address1,line2:address2}))
            
//             formData.forEach((value,key)=>{
//                 console.log(`${key} : ${value}`);
                
//             })

//             const {data} = await axios.post(backendUrl + '/api/user/add-doctor',formData,{headers:{aToken}})

//             if (data.success) {
//                 toast.success(data.message)
//                 setDocImg(false)
//                 setName('')
//                 setPassword('')
//                 setEmail('')
//                 setAddress1('')
//                 setAddress2('')
//                 setDegree('')
//                 setAbout('')
//                 setFees('')
//             } else {
//                 toast.error(data.message)
//             }


//         } catch (error) {
//             toast.error(error.message)
//             console.log(error)
//         }
//     }


//   return (
//     <form onSubmit={onSubmitHandler} className="md:my-10 w-auto max-w-3xl md:mx-auto bg-white p-10 rounded-3xl shadow-lg transform transition-all hover:shadow-2xl md:hover:scale-105">
//       <h2 className="mb-8 text-3xl font-bold text-center text-gradient">Add New Doctor</h2>

//       {/* Image Upload Section */}
//       <div className="flex flex-col items-center mb-10">
//         <label htmlFor="doc-img" className="cursor-pointer">
//           <img 
//             src={docImg? URL.createObjectURL(docImg) :assets.upload_area} 
//             alt="Upload" 
//             className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 hover:border-indigo-700 transition-all duration-300" 
//           />
//         </label>
//         <p className="mt-3 text-gray-600 text-sm text-center font-medium">Upload Doctor's Picture</p>
//         <input onChange={(e)=>setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
//       </div>

//       {/* Form Fields */}
//       <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-10">
//         {/* Doctor Name */}
//         <div className="flex flex-col">
//           <label className="text-gray-800 font-semibold mb-1">Doctor Name</label>
//           <input onChange={(e)=> setName(e.target.value)} value={name} 
//             type="text" 
//             placeholder="Name" 
//             className="input-field"
//             required 
//           />
//         </div>

//         {/* Doctor Email */}
//         <div className="flex flex-col">
//           <label className="text-gray-800 font-semibold mb-1">Doctor Email</label>
//           <input onChange={(e)=> setEmail(e.target.value)} value={email} 
//             type="email" 
//             placeholder="Email" 
//             className="input-field"
//             required 
//           />
//         </div>

//         {/* Password */}
//         <div className="flex flex-col">
//           <label className="text-gray-800 font-semibold mb-1">Password</label>
//           <input onChange={(e)=> setPassword(e.target.value)} value={password} 
//             type="password" 
//             placeholder="Password" 
//             className="input-field"
//             required 
//           />
//         </div>

//         {/* Experience */}
//         <div className="flex flex-col">
//           <label className="text-gray-800 font-semibold mb-1">Experience</label>
//           <select onChange={(e)=> setExperience(e.target.value)} value={experience}  className="input-field" required>
//             {[...Array(10).keys()].map(year => (
//               <option key={year} value={`${year + 1} Year`}>
//                 {year + 1} Year
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Fees */}
//         <div className="flex flex-col">
//           <label className="text-gray-800 font-semibold mb-1">Fees</label>
//           <input onChange={(e)=> setFees(e.target.value)} value={fees} 
//             type="number" 
//             placeholder="Consultation Fees" 
//             className="input-field"
//             required 
//           />
//         </div>

//         {/* Speciality */}
//         <div className="flex flex-col">
//           <label className="text-gray-800 font-semibold mb-1">Speciality</label>
//           <select onChange={(e)=> setSpeciality(e.target.value)} value={speciality}  className="input-field" required>
//             {["General physician", "Gynecologist", "Dermatologist", "Pediatrician", "Neurologist", "Gastroenterologist"].map(spec => (
//               <option key={spec} value={spec}>{spec}</option>
//             ))}
//           </select>
//         </div>

//         {/* Education */}
//         <div className="flex flex-col">
//           <label className="text-gray-800 font-semibold mb-1">Education</label>
//           <input onChange={(e)=> setDegree(e.target.value)} value={degree} 
//             type="text" 
//             placeholder="Education" 
//             className="input-field"
//             required 
//           />
//         </div>
//       </div>

//       {/* Address */}
//       <div className="flex flex-col mb-6">
//         <label className="text-gray-800 font-semibold mb-1">Address</label>
//         <input onChange={(e)=> setAddress1(e.target.value)} value={address1} 
//           type="text" 
//           placeholder="Address line 1" 
//           className="input-field mb-3"
//           required 
//         />
//         <input onChange={(e)=> setAddress2(e.target.value)} value={address2} 
//           type="text" 
//           placeholder="Address line 2" 
//           className="input-field"
//           required 
//         />
//       </div>

//       {/* About Doctor */}
//       <div className="flex flex-col mb-10">
//         <label className="text-gray-800 font-semibold mb-1">About Doctor</label>
//         <textarea onChange={(e)=> setAbout(e.target.value)} value={about} 
//           placeholder="Write a brief description about the doctor..." 
//           rows={2} 
//           className="input-field"
//           required 
//         />
//       </div>

//       {/* Submit Button */}
//       <button 
//         type="submit" 
//         className="w-full py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
//       >
//         Add Doctor
//       </button>
//     </form>
//   );
// };

// export default AddDoctor;








import React, { useState, useContext } from "react";
import { assets } from "../assets/assets_admin/assets";
import { AdminContext } from "../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [docImg, setDocImg] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [experience, setExperience] = useState("1 Year");
    const [fees, setFees] = useState("");
    const [about, setAbout] = useState("");
    const [speciality, setSpeciality] = useState("General physician");
    const [degree, setDegree] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");

    const { backendUrl, aToken } = useContext(AdminContext);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (!docImg) {
                return toast.error("Image Not Selected");
            }

            const formData = new FormData();
            formData.append("image", docImg);
            formData.append("name", name);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("experience", experience);
            formData.append("fees", Number(fees));
            formData.append("about", about);
            formData.append("speciality", speciality);
            formData.append("degree", degree);
            formData.append("address", JSON.stringify({ line1: address1, line2: address2 }));

            const { data } = await axios.post(backendUrl + "/api/user/add-doctor", formData, { headers: { aToken } });

            if (data.success) {
                toast.success(data.message);
                resetForm();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const resetForm = () => {
        setDocImg(false);
        setName("");
        setPassword("");
        setEmail("");
        setAddress1("");
        setAddress2("");
        setDegree("");
        setAbout("");
        setFees("");
    };

    const nextPage = () => setCurrentPage((prev) => prev + 1);
    const prevPage = () => setCurrentPage((prev) => prev - 1);

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return (
                    <div>
                        {/* Image Upload Section */}
                        <div className="flex flex-col items-center mb-10">
                            <label htmlFor="doc-img" className="cursor-pointer">
                                <img 
                                    src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} 
                                    alt="Upload" 
                                    className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 hover:border-indigo-700 transition-all duration-300" 
                                />
                            </label>
                            <p className="mt-3 text-gray-600 text-sm text-center font-medium">Upload Doctor's Picture</p>
                            <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
                        </div>

                        {/* Doctor Name and Email */}
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-10">
                            <div className="flex flex-col">
                                <label className="text-gray-800 font-semibold mb-1">Doctor Name</label>
                                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" className="input-field" required />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-800 font-semibold mb-1">Doctor Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" className="input-field" required />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-10">
                        <div className="flex flex-col">
                            <label className="text-gray-800 font-semibold mb-1">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="input-field" required />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-800 font-semibold mb-1">Experience</label>
                            <select onChange={(e) => setExperience(e.target.value)} value={experience} className="input-field" required>
                                {[...Array(10).keys()].map((year) => (
                                    <option key={year} value={`${year + 1} Year`}>{year + 1} Year</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-800 font-semibold mb-1">Fees</label>
                            <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" placeholder="Consultation Fees" className="input-field" required />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-10">
                        <div className="flex flex-col">
                            <label className="text-gray-800 font-semibold mb-1">Speciality</label>
                            <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className="input-field" required>
                                {["General physician", "Gynecologist", "Dermatologist", "Pediatrician", "Neurologist", "Gastroenterologist"].map((spec) => (
                                    <option key={spec} value={spec}>{spec}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-800 font-semibold mb-1">Education</label>
                            <input onChange={(e) => setDegree(e.target.value)} value={degree} type="text" placeholder="Education" className="input-field" required />
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <div className="flex flex-col mb-6">
                            <label className="text-gray-800 font-semibold mb-1">Address</label>
                            <input onChange={(e) => setAddress1(e.target.value)} value={address1} type="text" placeholder="Address line 1" className="input-field mb-3" required />
                            <input onChange={(e) => setAddress2(e.target.value)} value={address2} type="text" placeholder="Address line 2" className="input-field" required />
                        </div>

                        <div className="flex flex-col mb-10">
                            <label className="text-gray-800 font-semibold mb-1">About Doctor</label>
                            <textarea onChange={(e) => setAbout(e.target.value)} value={about} placeholder="Write a brief description about the doctor..." rows={2} className="input-field" required />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className="md:my-10 w-auto max-w-3xl md:mx-auto bg-white p-10 rounded-3xl shadow-lg transition-all">
            <h2 className="mb-8 text-3xl text-primary font-bold text-center">Add New Doctor</h2>
            {renderPage()}

            <div className="flex justify-between mt-6">
                {currentPage > 1 && (
                    <button type="button" onClick={prevPage} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg">Back</button>
                )}
                {currentPage < 4 ? (
                    <button type="button" onClick={nextPage} className="px-4 py-2 bg-indigo-500 text-white rounded-lg">Next</button>
                ) : (
                    <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg">Add Doctor</button>
                )}
            </div>
        </form>
    );
};

export default AddDoctor;











// import React, { useState, useContext } from "react";
// import { assets } from "../assets/assets_admin/assets";
// import { AdminContext } from "../context/AdminContext";
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const AddDoctor = () => {
//   const { backendUrl, aToken } = useContext(AdminContext);

//   // Form states
//   const [docImg, setDocImg] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [experience, setExperience] = useState('1 Year');
//   const [fees, setFees] = useState('');
//   const [about, setAbout] = useState('');
//   const [speciality, setSpeciality] = useState('General physician');
//   const [degree, setDegree] = useState('');
//   const [address1, setAddress1] = useState('');
//   const [address2, setAddress2] = useState('');
//   const [step, setStep] = useState(1);

//   // Submit handler
//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     try {
//       if (!docImg) return toast.error('Image Not Selected');

//       const formData = new FormData();
//       formData.append('image', docImg);
//       formData.append('name', name);
//       formData.append('email', email);
//       formData.append('password', password);
//       formData.append('experience', experience);
//       formData.append('fees', Number(fees));
//       formData.append('about', about);
//       formData.append('speciality', speciality);
//       formData.append('degree', degree);
//       formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

//       const { data } = await axios.post(backendUrl + '/api/user/add-doctor', formData, { headers: { aToken } });

//       if (data.success) {
//         toast.success(data.message);
//         setDocImg(false); setName(''); setPassword(''); setEmail(''); setAddress1(''); setAddress2(''); setDegree(''); setAbout(''); setFees('');
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//       console.log(error);
//     }
//   };

//   // Component for buttons
//   const StepButton = ({ hasBack, hasNext, onSubmit }) => (
//     <div className="flex justify-between mt-8">
//       {hasBack && (
//         <button onClick={() => setStep(step - 1)} type="button" className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 text-gray-700 transition-all">
//           Back
//         </button>
//       )}
//       {hasNext && (
//         <button onClick={() => setStep(step + 1)} type="button" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all">
//           Next
//         </button>
//       )}
//       {onSubmit && (
//         <button type="submit" className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all">
//           Add Mentor
//         </button>
//       )}
//     </div>
//   );

//   // Step components with added styling
//   const steps = [
//     { content: (
//       <>
//         <div className="flex flex-col mb-6">
//           <label className="text-gray-700 font-semibold mb-2">Mentor Name</label>
//           <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="input-field rounded-lg shadow-sm" required />
//         </div>
//         <div className="flex flex-col mb-6">
//           <label className="text-gray-700 font-semibold mb-2">Email</label>
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field rounded-lg shadow-sm" required />
//         </div>
//         <div className="flex flex-col mb-6">
//           <label className="text-gray-700 font-semibold mb-2">Password</label>
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field rounded-lg shadow-sm" required />
//         </div>
//       </>
//     ), hasNext: true },
//     { content: (
//       <>
//         <div className="flex flex-col mb-6">
//           <label className="text-gray-700 font-semibold mb-2">Experience</label>
//           <select value={experience} onChange={(e) => setExperience(e.target.value)} className="input-field rounded-lg shadow-sm">
//             {[...Array(10).keys()].map((year) => (
//               <option key={year} value={`${year + 1} Year`}>
//                 {year + 1} Year
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="flex flex-col mb-6">
//           <label className="text-gray-700 font-semibold mb-2">Fees</label>
//           <input type="number" placeholder="Consultation Fees" value={fees} onChange={(e) => setFees(e.target.value)} className="input-field rounded-lg shadow-sm" required />
//         </div>
//       </>
//     ), hasBack: true, hasNext: true },
//     { content: (
//       <>
//         <div className="flex flex-col mb-6">
//           <label className="text-gray-700 font-semibold mb-2">Speciality</label>
//           <select value={speciality} onChange={(e) => setSpeciality(e.target.value)} className="input-field rounded-lg shadow-sm">
//             {["General physician", "Gynecologist", "Dermatologist", "Pediatrician", "Neurologist", "Gastroenterologist"].map((spec) => (
//               <option key={spec} value={spec}>{spec}</option>
//             ))}
//           </select>
//         </div>
//         <div className="flex flex-col mb-6">
//           <label className="text-gray-700 font-semibold mb-2">Education</label>
//           <input type="text" placeholder="Education" value={degree} onChange={(e) => setDegree(e.target.value)} className="input-field rounded-lg shadow-sm" required />
//         </div>
//       </>
//     ), hasBack: true, hasNext: true },
//     { content: (
//       <>
//         <div className="flex flex-col mb-6">
//           <label className="text-gray-700 font-semibold mb-2">Address Line 1</label>
//           <input type="text" placeholder="Address line 1" value={address1} onChange={(e) => setAddress1(e.target.value)} className="input-field rounded-lg shadow-sm" required />
//         </div>
//         <div className="flex flex-col mb-6">
//           <label className="text-gray-700 font-semibold mb-2">Address Line 2</label>
//           <input type="text" placeholder="Address line 2" value={address2} onChange={(e) => setAddress2(e.target.value)} className="input-field rounded-lg shadow-sm" required />
//         </div>
//       </>
//     ), hasBack: true, hasNext: true },
//     { content: (
//       <>
//         <div className="flex flex-col items-center mb-8">
//           <label htmlFor="doc-img" className="cursor-pointer">
//             <img src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="Upload" className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 transition-all" />
//           </label>
//           <p className="mt-3 text-gray-500 text-sm font-medium">Upload Doctor's Picture</p>
//           <input type="file" id="doc-img" hidden onChange={(e) => setDocImg(e.target.files[0])} />
//         </div>
//       </>
//     ), hasBack: true, onSubmit: true }
//   ];

//   return (
//     <form onSubmit={onSubmitHandler} className="max-w-3xl mx-auto p-10 my-10 bg-white rounded-3xl shadow-lg transform transition-all">
//       <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-10">Add New Mentor</h2>
//       {steps[step - 1].content}
//       <StepButton {...steps[step - 1]} />
//     </form>
//   );
// };

// export default AddDoctor;

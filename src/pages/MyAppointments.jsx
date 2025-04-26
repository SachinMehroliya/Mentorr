// import React, { useContext } from 'react'
// import { AppContext } from '../context/AppContext'

// const MyAppointments = () => {

//   const {doctors} = useContext(AppContext)
//   return (
//     <div>
//       <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
//       <div>
//         {doctors.slice(0,3).map((item,index)=>(
//           <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
//             <div>
//               <img className='w-32 bg-indigo-50' src={item.image} alt="" />
//             </div>
//             <div className='flex-1 text-sm text-zinc-600'>
//               <p className='text-neutral-800 font-semibold'>{item.name}</p>
//               <p>{item.speciality}</p>
//               <p className='text-zinc-700 font-medium mt-1'>Address:</p>
//               <p className='text-xs'>{item.address.line1}</p>
//               <p className='text-xs'>{item.address.line2}</p>
//               <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 25, July, 2024 | 8:30 PM</p>
//             </div>
//             <div></div>
//             <div className='flex flex-col gap-2 justify-end'>
//               <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
//               <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default MyAppointments


import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);

  const [appointments,setAppointments] = useState([])
  const months = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0]+ " " + months[Number(dateArray[1])] + " " + dateArray[2] 
  }

  const navigate = useNavigate()

  const getUserAppointments = async () => {

    try {
      const {data} = await axios.get(backendUrl+'/api/user/appointments',{headers:{token}})

      if (data.success) {
        setAppointments(data.appointments.reverse())
        console.log(data.appointments);
        
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }


  const cancelAppointment = async (appointmentId) => {
    try {
      

      const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment',{appointmentId},{headers:{token}})
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }


    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const initPay = (order) => {

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: 'Appointment Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);

        try {
          
          const {data} = await axios.post(backendUrl+'/api/user/verifyRazorpay',response,{headers:{token}})
          if (data.success) {
            getUserAppointments()
            navigate('/my-appointments')
          }
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
        
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const appointmentRazorpay = async (appointmentId) => {

    try {
      
      const {data} = await axios.post(backendUrl + '/api/user/payment-razorpay',{appointmentId},{headers:{token}})

      if (data.success) {
        initPay(data.order)
        
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }

  }

  useEffect(()=>{
    if (token) {
      getUserAppointments()
    }
  },[token])

  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      {/* Heading */}
      <p className="pb-3 text-xl font-semibold text-gray-700 border-b border-gray-300">
        My Appointments
      </p>

      {/* Appointments List */}
      <div className="mt-6">
        {appointments.map((item, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-6 py-4 px-4 border-b border-gray-200 bg-white rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-lg"
            key={index}
          >
            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <img
                className="w-32 h-36 rounded-lg object-cover bg-indigo-50"
                src={item.docData.image}
                alt={item.name}
              />
            </div>

            {/* Appointment Info */}
            <div className="flex flex-col justify-between text-sm text-gray-600">
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  {item.docData.name}
                </p>
                <p className="text-indigo-600 font-medium">
                  {item.docData.speciality}
                </p>
              </div>

              <div className="mt-4 text-gray-600">
                <p className="text-gray-800 font-medium">Address:</p>
                <p>{item.docData.address.line1}</p>
                <p>{item.docData.address.line2}</p>
                <p className="mt-2">
                  <span className="font-medium text-gray-800">
                    Date & Time:
                  </span>{' '}
                  {slotDateFormat(item.slotDate)} | {item.slotTime}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col justify-center gap-4 text-center">
              {!item.cancelled && item.payment && !item.isCompleted && <button className="text-sm text-white sm:min-w-48 bg-green-500 py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300">Paid</button>}
              {!item.cancelled && !item.payment && !item.isCompleted && <button onClick={()=>appointmentRazorpay(item._id)} className="text-sm text-white bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Pay Online
              </button>}
              {!item.cancelled && !item.isCompleted && <button onClick={()=>cancelAppointment(item._id)} className="text-sm sm:min-w-48 text-white bg-red-500 py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300">
                Cancel Appointment
              </button>}
              {item.cancelled && !item.isCompleted && <button className="text-sm text-white sm:min-w-48 bg-red-500 py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300">Appointment Cancelled</button>}
              {item.isCompleted && <button className="text-sm text-white sm:min-w-48 bg-green-500 py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300">Completed</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;


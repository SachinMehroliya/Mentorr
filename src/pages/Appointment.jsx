
// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { assets } from "../assets/assets";
// import RelatedDoctors from "../components/RelatedDoctors";
// import { toast } from "react-toastify";
// import axios from "axios";

// const Appointment = () => {
//   const { docId } = useParams();
//   const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext);
//   const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

//   const navigate = useNavigate();

//   const [docInfo, setDocInfo] = useState(null);
//   const [docSlots, setDocSlots] = useState([]);
//   const [slotIndex, setSlotIndex] = useState(0);
//   const [slotTime, setSlotTime] = useState("");

//   const fetchDocInfo = async () => {
//     const docInfo = doctors.find((doc) => doc._id === docId);
//     setDocInfo(docInfo);
//     console.log(docInfo);
//   };

//   const getAvailableSlots = async () => {
//     let today = new Date();
//     const slots = [];

//     for (let i = 0; i < 7; i++) {
//       let currentDate = new Date(today);
//       currentDate.setDate(today.getDate() + i);

//       let endTime = new Date(currentDate);
//       endTime.setHours(24, 0, 0, 0); // End of the day at midnight

//       let startTime = new Date(currentDate);
//       if (today.getDate() === currentDate.getDate()) {
//         // For today, only add future time slots
//         startTime.setHours(today.getHours());
//         startTime.setMinutes(today.getMinutes() + 30 - (today.getMinutes() % 30));

//         if (startTime < today) {
//           startTime = new Date(today); // Start from current time
//         }
//       } else {
//         // For future dates, start from 10:00 AM
//         startTime.setHours(10, 0, 0);
//       }

//       const timeSlots = [];
//       while (startTime < endTime) {
//         let formattedTime = startTime.toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         });

//         // Check if the slot is available using docInfo.slots_booked
//         let day = currentDate.getDate();
//         let month = currentDate.getMonth() + 1; // Months are 0-indexed
//         let year = currentDate.getFullYear();
//         const slotDate = day + "_" + month + "_" + year;

//         const isSlotAvailable =
//           docInfo.slots_booked[slotDate] &&
//           docInfo.slots_booked[slotDate].includes(formattedTime)
//             ? false
//             : true;

//         if (isSlotAvailable) {
//           timeSlots.push({
//             datetime: new Date(startTime),
//             time: formattedTime,
//           });
//         }

//         startTime.setMinutes(startTime.getMinutes() + 30); // Increment by 30 minutes
//       }

//       slots.push(timeSlots);
//     }

//     setDocSlots(slots);
//   };

//   const bookAppointment = async () => {
//     if (!token) {
//       toast.warn("Login to book an appointment");
//       return navigate("/login");
//     }

//     try {
//       if (!docSlots || docSlots.length === 0) {
//         console.log("No slots available.");
//         toast.error("No available slots found.");
//         return;
//       }

//       if (!docSlots[slotIndex] || docSlots[slotIndex].length === 0) {
//         console.log("Invalid slotIndex or no slots for this day.");
//         toast.error("Please select a valid slot.");
//         return;
//       }

//       if (!slotTime) {
//         toast.error("Please select a time slot.");
//         return;
//       }

//       const selectedSlot = docSlots[slotIndex].find((slot) => slot.time === slotTime);
//       console.log("Selected Slot:", selectedSlot); // Log selected slot for debugging

//       if (!selectedSlot || !selectedSlot.datetime) {
//         console.log("No valid slot found.");
//         toast.error("Invalid slot selected.");
//         return;
//       }

//       const selectedDateTime = new Date(selectedSlot.datetime);
//       const day = selectedDateTime.getDate();
//       const month = selectedDateTime.getMonth() + 1; // Months are 0-indexed
//       const year = selectedDateTime.getFullYear();
//       const slotDate = `${day}_${month}_${year}`; // Format the date (e.g., 26_10_2024)

//       const { data } = await axios.post(
//         `${backendUrl}/api/user/book-appointment`,
//         { docId, slotDate, slotTime: selectedSlot.time }, // Use selectedSlot.time here
//         { headers: { token } }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         getDoctorsData(); // Refresh doctor data
//         navigate("/my-appointments"); // Redirect to user's appointments
//       } else {
//         toast.error(data.message);
//       }

//       toast.success(`Appointment booked for ${slotDate} at ${selectedSlot.time}`);
//     } catch (error) {
//       console.error("Error booking appointment:", error);
//       toast.error("Failed to book appointment");
//     }
//   };

//   useEffect(() => {
//     fetchDocInfo();
//   }, [doctors, docId]);

//   useEffect(() => {
//     if (docInfo) {
//       getAvailableSlots();
//     }
//   }, [docInfo]); // Only depend on docInfo now

//   return (
//     docInfo && (
//       <div className="px-6 py-8 max-w-screen-xl mx-auto">
//         {/*------- Doctor Details --------- */}
//         <div className="flex flex-col sm:flex-row gap-6 bg-white shadow-md rounded-lg p-6">
//           {/* Doctor Image */}
//           <img
//             className="bg-primary h-72 w-full sm:max-w-xs rounded-lg object-cover"
//             src={docInfo.image}
//             alt="Doctor"
//           />
//           {/* Doctor Info */}
//           <div className="flex-1 border border-gray-200 rounded-lg p-6 bg-white">
//             <p className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
//               {docInfo.name}
//               <img className="w-5" src={assets.verified_icon} alt="Verified" />
//             </p>
//             <p className="text-sm text-gray-600 mt-1">
//               {docInfo.degree} - {docInfo.speciality}
//             </p>
//             <p className="text-sm font-light text-gray-600 mt-2">
//               Experience: {docInfo.experience}
//             </p>
//             <p className="text-sm font-medium text-gray-900 mt-4">About:</p>
//             <p className="text-sm text-gray-500 mt-1">{docInfo.about}</p>
//             <p className="text-lg font-medium text-gray-800 mt-4">
//               Appointment fee:{" "}
//               <span className="text-primary">
//                 {currencySymbol}
//                 {docInfo.fees}
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* ------- Booking slots ------ */}
//         <div className="mt-8">
//           <p className="text-lg font-medium text-gray-700">Booking slots</p>
//           <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
//             {docSlots.length > 0 &&
//               docSlots.map((item, index) => (
//                 <div
//                   onClick={() => setSlotIndex(index)}
//                   className={`text-center py-4 px-6 rounded-lg cursor-pointer transition-all ${
//                     slotIndex === index ? "bg-indigo-600 text-white" : "border border-gray-300"
//                   }`}
//                   key={index}
//                 >
//                   <p className="font-semibold">
//                     {item[0] && daysOfWeek[item[0].datetime.getDay()]}
//                   </p>
//                   <p>{item[0] && item[0].datetime.getDate()}</p>
//                 </div>
//               ))}
//           </div>

//           {/* ------- Time Slots ------ */}
//           <div className="flex gap-3 w-full overflow-x-auto mt-4">
//             {docSlots.length > 0 && docSlots[slotIndex].map((item, index) => (
//                 <p
//                   onClick={() => setSlotTime(item.time)}
//                   className={`text-sm px-4 py-2 rounded-full cursor-pointer transition-all whitespace-nowrap ${
//                     item.time === slotTime
//                       ? "bg-indigo-600 text-white"
//                       : "border border-gray-300 text-gray-600"
//                   }`}
//                   key={index}
//                 >
//                   {item.time}
//                 </p>
//               ))}
//           </div>

//           <button
//             onClick={bookAppointment}
//             className="bg-indigo-600 text-white font-light px-8 py-3 rounded-full mt-6 hover:bg-indigo-500 transition-all"
//           >
//             Book Appointment
//           </button>
//         </div>

//         {/* ------- Related Doctors ------ */}
//         <div className="mt-12">
//           <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
//         </div>
//       </div>
//     )
//   );
// };

// export default Appointment;




import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import { toast } from "react-toastify";
import axios from "axios";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const navigate = useNavigate();
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [appointmentType, setAppointmentType] = useState(""); // "video" or "one-to-one"

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    let today = new Date();
    const slots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(24, 0, 0, 0);

      let startTime = new Date(currentDate);
      if (today.getDate() === currentDate.getDate()) {
        startTime.setHours(today.getHours());
        startTime.setMinutes(today.getMinutes() + 30 - (today.getMinutes() % 30));
        if (startTime < today) {
          startTime = new Date(today);
        }
      } else {
        startTime.setHours(10, 0, 0);
      }

      const timeSlots = [];
      while (startTime < endTime) {
        let formattedTime = startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        const slotDate = day + "_" + month + "_" + year;

        const isSlotAvailable =
          docInfo.slots_booked[slotDate] &&
          docInfo.slots_booked[slotDate].includes(formattedTime)
            ? false
            : true;

        if (isSlotAvailable) {
          timeSlots.push({
            datetime: new Date(startTime),
            time: formattedTime,
          });
        }
        startTime.setMinutes(startTime.getMinutes() + 30);
      }
      slots.push(timeSlots);
    }
    setDocSlots(slots);
  };

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Login to book an appointment");
      return navigate("/login");
    }

    try {
      if (!slotTime || !appointmentType) {
        toast.error("Please select a time slot and appointment type.");
        return;
      }

      const selectedSlot = docSlots[slotIndex].find((slot) => slot.time === slotTime);
      if (!selectedSlot || !selectedSlot.datetime) {
        toast.error("Invalid slot selected.");
        return;
      }

      const selectedDateTime = new Date(selectedSlot.datetime);
      const day = selectedDateTime.getDate();
      const month = selectedDateTime.getMonth() + 1;
      const year = selectedDateTime.getFullYear();
      const slotDate = `${day}_${month}_${year}`;

      const { data } = await axios.post(
        `${backendUrl}/api/user/book-appointment`,
        { docId, slotDate, slotTime: selectedSlot.time, appointmentType },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getDoctorsData();
        navigate("/my-appointments");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      toast.error("Failed to book appointment");
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  return (
    docInfo && (
      <div className="px-6 py-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 bg-white shadow-md rounded-lg p-6">
          <img
            className="bg-primary h-72 w-full sm:max-w-xs rounded-lg object-cover"
            src={docInfo.image}
            alt="Doctor"
          />
          <div className="flex-1 border border-gray-200 rounded-lg p-6 bg-white">
            <p className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="Verified" />
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <p className="text-sm font-light text-gray-600 mt-2">
              Experience: {docInfo.experience}
            </p>
            <p className="text-lg font-medium text-gray-800 mt-4">
              Appointment fee:{" "}
              <span className="text-primary">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Video Call and One-to-One Call Options */}
        <div className="mt-8 flex flex-col sm:flex-row gap-6">
          {/* Video Call Container */}
          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-6 bg-gray-50 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Video Call</h3>
            <p className="text-gray-600 mt-2">Connect via secure video</p>
            <p className="text-lg font-medium text-primary mt-4">
              {currencySymbol} {docInfo.fees}
            </p>
            <button
              onClick={() => setAppointmentType("video")}
              className={`mt-4 px-6 py-2 rounded-full ${
                appointmentType === "video" ? "bg-indigo-600 text-white" : "border border-gray-300"
              }`}
            >
              Book Video Call
            </button>
          </div>

          {/* One-to-One Call Container */}
          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-6 bg-gray-50 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">1:1 Call</h3>
            <p className="text-gray-600 mt-2">Talk privately with the doctor</p>
            <p className="text-lg font-medium text-primary mt-4">
              {currencySymbol} {docInfo.oneToOneCallFee}
            </p>
            <button
              onClick={() => setAppointmentType("one-to-one")}
              className={`mt-4 px-6 py-2 rounded-full ${
                appointmentType === "one-to-one" ? "bg-indigo-600 text-white" : "border border-gray-300"
              }`}
            >
              Book 1:1 Call
            </button>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="mt-8">
          <p className="text-lg font-medium text-gray-700">Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-4 px-6 rounded-lg cursor-pointer transition-all ${
                    slotIndex === index ? "bg-indigo-600 text-white" : "border border-gray-300"
                  }`}
                  key={index}
                >
                  <p className="font-semibold">
                    {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                  </p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          <div className="flex gap-3 w-full overflow-x-auto mt-4">
            {docSlots.length > 0 &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm px-4 py-2 rounded-full cursor-pointer transition-all whitespace-nowrap ${
                    item.time === slotTime
                      ? "bg-indigo-600 text-white"
                      : "border border-gray-300 text-gray-600"
                  }`}
                  key={index}
                >
                  {item.time}
                </p>
              ))}
          </div>

          <button
            onClick={bookAppointment}
            className="bg-indigo-600 text-white font-light px-8 py-3 rounded-full mt-6 hover:bg-indigo-500 transition-all"
          >
            Book Appointment
          </button>
        </div>

        <div className="mt-12">
          <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
      </div>
    )
  );
};

export default Appointment;

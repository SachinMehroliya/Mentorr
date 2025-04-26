




// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import { toast } from 'react-toastify';



// const VerifyOtp = () => {
//   const { backendUrl } = useContext(AppContext);
//   const [otp, setOtp] = useState('');
//   const [message, setMessage] = useState('');
//   const location = useLocation();
//   const email = location.state?.email;

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(backendUrl + '/api/user/verify-otp', { email, otp });
//       setMessage(response.data.message);
//       toast.success(response.data.message);
//     } catch (error) {
//       setMessage('Failed to verify OTP or OTP expired');
//       toast.error('Failed to verify OTP');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center min-h-[80vh] justify-center">
//       <div className="p-8 border rounded-xl max-w-md w-full bg-white shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
//         <form onSubmit={handleVerifyOtp}>
//           <label>OTP:</label>
//           <input
//             type="text"
//             className="border rounded w-full p-2 mt-1"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             required
//           />
//           <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded-md mt-4">
//             Verify OTP
//           </button>
//         </form>
//         {message && <p className="text-green-500 mt-2">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;






// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
// import { AppContext } from '../context/AppContext';
// import { toast } from 'react-toastify';

// const VerifyOtp = () => {
//   const { backendUrl } = useContext(AppContext);
//   const [otp, setOtp] = useState('');
//   const [message, setMessage] = useState('');
//   const location = useLocation();
//   const navigate = useNavigate(); // Initialize navigate
//   const email = location.state?.email;

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${backendUrl}/api/user/verify-otp`, { email, otp });
//       setMessage(response.data.message);
//       toast.success(response.data.message);

//       // Navigate to home page on successful OTP verification
//       navigate('/');
//     } catch (error) {
//       setMessage('Failed to verify OTP or OTP expired');
//       toast.error('Failed to verify OTP');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center min-h-[80vh] justify-center">
//       <div className="p-8 border rounded-xl max-w-md w-full bg-white shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
//         <form onSubmit={handleVerifyOtp}>
//           <label>OTP:</label>
//           <input
//             type="text"
//             className="border rounded w-full p-2 mt-1"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             required
//           />
//           <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded-md mt-4">
//             Verify OTP
//           </button>
//         </form>
//         {message && <p className="text-green-500 mt-2">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;





// import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import { toast } from 'react-toastify';

// const VerifyOtp = () => {
//   const { backendUrl } = useContext(AppContext);
//   const [otp, setOtp] = useState('');
//   const [message, setMessage] = useState('');
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate(); // Initialize navigate
//   const email = location.state?.email; // Get email from location state passed from the login page

//   // Fetch the user's status and email from the location (which is passed after login)
//   useEffect(() => {
//     if (!email) {
//       navigate('/login'); // Redirect to login if email isn't found
//     }
//   }, [email, navigate]);

//   // Handle OTP verification
//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     try {
//         setIsOtpVerified(true);
//       const response = await axios.post(`${backendUrl}/api/user/verify-otp`, { email, otp,isOtpVerified });
//       setMessage(response.data.message);
//       toast.success(response.data.message);

//       // Redirect to home page after OTP verification
//       navigate('/');
//     } catch (error) {
//       setMessage('Failed to verify OTP or OTP expired');
//       toast.error('Failed to verify OTP');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center min-h-[80vh] justify-center">
//       <div className="p-8 border rounded-xl max-w-md w-full bg-white shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
//         <form onSubmit={handleVerifyOtp}>
//           <label>OTP:</label>
//           <input
//             type="text"
//             className="border rounded w-full p-2 mt-1"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             required
//           />
//           <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded-md mt-4">
//             Verify OTP
//           </button>
//         </form>
//         {message && <p className="text-green-500 mt-2">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;


import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const { backendUrl } = useContext(AppContext);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  let email = location.state?.email;

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/verify-otp`, { email, otp });
      setMessage(response.data.message);

      if (response.status === 200) {
        console.log(response.message);
        navigate('/');
      }
    } catch (error) {
      setMessage('Failed to verify OTP or OTP expired');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Verify OTP</h2>
        <form onSubmit={handleVerifyOtp}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your OTP"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Verify OTP
          </button>
        </form>
        {message && (
          <p className={`mt-4 text-center ${message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default VerifyOtp;

  

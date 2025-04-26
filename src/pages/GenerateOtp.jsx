// src/components/GenerateOtp.js
// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';

// const GenerateOtp = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate(); 

//   const handleGenerateOtp = async (e) => {
//     const {backendUrl} = useContext(AppContext)
//     e.preventDefault();
//     try {
//       const response = await axios.post(backendUrl + '/api/user/generate-otp', { email });
//       setMessage(response.data.message); 
//       if (response.status === 200) {        
//         setTimeout(() => {
//           navigate('/verify-otp', { state: { email } });
//         }, 2000);
//       }
//     } catch (error) {
//       setMessage('Failed to generate OTP');
//     }
//   };

//   return (
//     <div className="max-w-96 mx-28 my-auto p-5 bg-[#f9f9f9] border-r-8">
//       <h2>Generate OTP</h2>
//       <form onSubmit={handleGenerateOtp}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Generate OTP</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default GenerateOtp;




import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const GenerateOtp = () => {
  const { backendUrl } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleGenerateOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + '/api/user/generate-otp', { email });
      setMessage(response.data.message);
      toast.success(response.data.message);
      if (response.status === 200) {
        setTimeout(() => navigate('/verify-otp', { state: { email } }), 2000);
      }
    } catch (error) {
      setMessage('Failed to generate OTP. Please try again.');
      toast.error('Failed to generate OTP');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-[80vh] justify-center">
      <div className="p-8 border rounded-xl max-w-md w-full bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Generate OTP</h2>
        <form onSubmit={handleGenerateOtp}>
          <label>Email:</label>
          <input
            type="email"
            className="border rounded w-full p-2 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded-md mt-4">
            Generate OTP
          </button>
        </form>
        {message && <p className="text-green-500 mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default GenerateOtp;


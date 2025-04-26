import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddDoctor from './pages/AddDoctor'
import GenerateOtp from './pages/GenerateOtp'
import VerifyOtp from './pages/VerifyOtp'
//sm:mx-[5%]
const App = () => {
  return (
    <div className='mx-4'>
      <ToastContainer/>
      <Navbar />
      
            <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/generate-otp' element={<GenerateOtp />} />
        <Route path='/verify-otp' element={<VerifyOtp />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/add-doctor' element={<AddDoctor />} />
      </Routes>
      <Footer/>
    </div>
  )
}
export default App






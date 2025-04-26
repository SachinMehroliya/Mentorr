


import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const {token,setToken,userData} = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false);
  

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }


  return (
    <div className="flex items-center justify-between py-2 px-1 shadow-lg bg-white">
      {/* Logo with gap */}
      <div className="flex items-center"> {/* Added gap between logo and menu */}
        <img
          onClick={() => navigate('/')}
          className="w-48 cursor-pointer transition-transform duration-300 hover:scale-105"
          src={assets.logo1}
          alt=""
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 ml-auto font-semibold text-gray-700 text-base">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-indigo-600' : 'hover:text-indigo-600'
          }
        >
          <li className="relative py-1">
            HOME
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-600 group-hover:w-full transition-all"></span>
          </li>
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            isActive ? 'text-indigo-600' : 'hover:text-indigo-600'
          }
        >
          <li className="relative py-1">
            ALL MENTORS
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-600 group-hover:w-full transition-all"></span>
          </li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-indigo-600' : 'hover:text-indigo-600'
          }
        >
          <li className="relative py-1">
            ABOUT
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-600 group-hover:w-full transition-all"></span>
          </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-indigo-600' : 'hover:text-indigo-600'
          }
        >
          <li className="relative py-1">
            CONTACT
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-600 group-hover:w-full transition-all"></span>
          </li>
        </NavLink>
      </ul>

      {/* Profile and Buttons */}
      <div className="flex items-center gap-6 ml-auto">
{token ? (
          <div className="relative group flex items-center cursor-pointer">
            <img
              className="w-10 h-10 rounded-full object-cover border-2 border-indigo-600 transition-all duration-300 hover:border-indigo-400"
              src={userData.image}
              alt=""
            />
            {/* Dropdown below profile photo */}
            <div className="absolute right-0 mt-48 w-48 hidden group-hover:flex flex-col bg-white border border-gray-200 shadow-lg rounded-md z-20">
              <p
                onClick={() => navigate('/my-profile')}
                className="p-3 cursor-pointer hover:bg-indigo-600 hover:text-white transition-all"
              >
                My Profile
              </p>
              <p
                onClick={() => navigate('/my-appointments')}
                className="p-3 cursor-pointer hover:bg-indigo-600 hover:text-white transition-all"
              >
                My Appointments
              </p>
              <p
                onClick={logout}
                className="p-3 cursor-pointer hover:bg-red-600 hover:text-white transition-all"
              >
                Logout
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-indigo-600 text-white px-6 py-2 hidden md:block rounded-full font-medium transition-transform hover:scale-105"
          >
            Create account
          </button>
        )}

        {/* Mobile Menu Toggle */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-8 h-8 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          showMenu ? 'fixed w-full h-full bg-gray-800 bg-opacity-50' : 'h-0 w-0'
        } transition-all z-30 top-0 right-0 overflow-hidden`}
      >
        <div className="flex justify-between items-center px-5 py-6 bg-white w-full">
          <img className="w-36" src={assets.logo} alt="" />
          <img
            onClick={() => setShowMenu(false)}
            className="w-7 cursor-pointer"
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-6 mt-10 text-lg font-semibold text-gray-700 bg-white">
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/"
            className="py-2 hover:text-indigo-600"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/doctors"
            className="py-2 hover:text-indigo-600"
          >
            ALL MENTORS
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/about"
            className="py-2 hover:text-indigo-600"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/contact"
            className="py-2 hover:text-indigo-600"
          >
            CONTACT
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;







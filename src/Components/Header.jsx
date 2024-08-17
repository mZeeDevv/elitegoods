import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const navigate = useNavigate(); 
  return (
   <>
  <header>
   <nav className='flex items-center justify-between shadow-md bg-[#91DDCF]'>
    <img src={logo} alt="logo" className='md:w-[200px] w-[100px]'/>
    <ul className='flex items-center mr-5 text-sm md:text-lg text-[#F7F9F2]'>
     <li className='md:mx-3 mx-2 cursor-pointer md:font-semibold  hover:text-gray-700 duration-200 transition-all' onClick={() => navigate("/")}>Home</li>
     <li className='md:mx-3 cursor-pointer md:font-semibold  hover:text-gray-700 duration-200 transition-all' onClick={() => navigate("/about")}>About</li>
     <li className='md:mx-3  mx-2 cursor-pointer md:font-semibold  hover:text-gray-700 duration-200 transition-all' onClick={() => navigate("/trending")}>Trending</li>
     <li className='md:mx-3 cursor-pointer md:font-semibold  hover:text-gray-700 duration-200 transition-all' onClick={() => navigate("/profile")}>Profile</li>
     </ul>
   </nav>
  </header>
   </>
  )
}

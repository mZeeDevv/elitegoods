import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const navigate = useNavigate(); 
  return (
   <>
  <header>
   <nav className='flex items-center justify-between bg-white shadow-md'>
    <img src={logo} alt="logo" className='md:w-[200px] w-[100px]'/>
    <ul className='flex items-center mr-5 text-sm md:text-lg'>
     <li className='md:mx-3 mx-2 cursor-pointer md:font-semibold text-gray-600 hover:text-black duration-200 transition-all' onClick={() => navigate("/")}>Home</li>
     <li className='md:mx-3 cursor-pointer md:font-semibold text-gray-600 hover:text-black duration-200 transition-all' onClick={() => navigate("/about")}>About</li>
     <li className='md:mx-3  mx-2 cursor-pointer md:font-semibold text-gray-600 hover:text-black duration-200 transition-all' onClick={() => navigate("/trending")}>Trending</li>
     <li className='md:mx-3 cursor-pointer md:font-semibold text-gray-600 hover:text-black duration-200 transition-all' onClick={() => navigate("/profile")}>Profile</li>
     </ul>

   </nav>
  </header>
   </>
  )
}

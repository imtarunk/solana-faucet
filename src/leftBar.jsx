import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { Link } from 'react-router-dom';
const LeftBar = () => {
  return (
    <div className='space-y-5 flex flex-col justify-center items-center text-white '>
      <Link to="/" className='hover:text-gray-500 hover:cursor-pointer'><FaHome size={'30px'} /></Link>
      <FaBitcoin size={'30px'} className='hover:text-gray-500 hover:cursor-pointer' />
      <Link to={'/payment'}><FaWallet size={'30px'} className='hover:text-gray-500  hover:cursor-pointer' /></Link>

    </div>
  )
}

export default LeftBar
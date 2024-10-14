import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

const LeftBar = () => {
  return (
    <div className='space-y-5 flex flex-col justify-center items-center text-white '>
      <FaHome size={'30px'} className='hover:text-gray-500 hover:cursor-pointer' />
      <FaBitcoin size={'30px'} className='hover:text-gray-500 hover:cursor-pointer' />
      <FaWallet size={'30px'} className='hover:text-gray-500  hover:cursor-pointer' />
    </div>
  )
}

export default LeftBar
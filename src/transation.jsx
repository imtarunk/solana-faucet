import React, { useState } from 'react';
import { CiWallet } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const Transaction = () => {
  const [amount, setAmount] = useState()
  const [reciverPublicKey, setReciverPublicKey] = useState('')
  console.log(amount, reciverPublicKey);

  const handleTransation = () => {

  }
  return (
    <div className='flex justify-center items-center min-h-screen p-5'>
      <div className='p-6 text-white bg-gray-800 rounded-lg shadow-md w-full max-w-md'>
        <div className='mb-4'>
          <h1 className='text-xl font-bold'>Send Devnet Crypto</h1>
          <span className='text-gray-400 text-sm'>Transfer cryptocurrency to another wallet</span>
        </div>
        <div className='space-y-5'>
          <div className='flex flex-col'>
            <label className='text-sm text-gray-200'>Recipient Address</label>
            <input type="text" className='mt-1 p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e) => setReciverPublicKey(e.target.value)} />
          </div>
          <div className='flex flex-col'>
            <label className='text-sm text-gray-200'>Amount</label>
            <div className='flex flex-col md:flex-row md:items-center md:space-x-2'>
              <input type="text" className='mt-1 p-2 rounded-md bg-gray-700 border border-gray-600 flex-1 w-[70%]' onChange={(e) => setAmount((e.target.value))} />
              <select className='mt-1 rounded-md bg-gray-700 border border-gray-600 text-gray-300 w-[30%]'>
                <option value="">Select a cryptocurrency</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum</option>
                <option value="solana">Solana</option>
              </select>
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='flex px-6 py-2 items-center justify-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 w-full md:w-1/2'>
              <CiWallet className='mr-2' />
              Send
              <FaArrowRight className='ml-2' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;

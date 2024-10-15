import React, { useState } from 'react';
import { CiWallet } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import toast from 'react-hot-toast';

const Payment = () => {
  const wallet = useWallet(); // Get wallet context
  const { connection } = useConnection(); // Get connection context
  const [amount, setAmount] = useState('');
  const [receiverPublicKey, setReceiverPublicKey] = useState('');

  // Function to send tokens
  const sendTokens = async () => {
    if (!receiverPublicKey || !amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error('Please enter a valid recipient address and amount.');
      return;
    }

    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(receiverPublicKey),
        lamports: Number(amount) * LAMPORTS_PER_SOL,
      })
    );

    try {
      const signature = await wallet.sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');
      toast.success(`Successfully sent ${amount} SOL to ${receiverPublicKey}`);
      // Clear input fields
      setAmount('');
      setReceiverPublicKey('');
    } catch (error) {
      toast.error('Transaction failed. Please try again.');
      console.error('Transaction error:', error);
    }
  };

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
            <input
              type="text"
              className='mt-1 p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={(e) => setReceiverPublicKey(e.target.value)}
              value={receiverPublicKey}
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-sm text-gray-200'>Amount</label>
            <div className='flex flex-col md:flex-row md:items-center md:space-x-2'>
              <input
                type="text"
                className='mt-1 p-2 rounded-md bg-gray-700 border border-gray-600 flex-1'
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
              <select className='mt-1 rounded-md bg-gray-700 border border-gray-600 text-gray-300'>
                <option value="">Select a cryptocurrency</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum</option>
                <option value="solana">Solana</option>
              </select>
            </div>
          </div>
          <div className='flex justify-center'>
            <button
              className='flex px-6 py-2 items-center justify-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 w-full'
              onClick={sendTokens}
            >
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

export default Payment;

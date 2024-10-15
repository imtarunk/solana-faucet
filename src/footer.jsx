import React from 'react'

const Footer = () => {
  return (
    <div className='text-gray-200 absolute bottom-4 flex flex-col justify-center items-center w-full text-m space-y-2'>
      <p className='text-gray-400 text-sm'>Solana Devnet Faucet is a tool provided by Solana to assist developers in obtaining free test SOL tokens for development purposes on the Solana Devnet</p>
      <a href="https://codextarun.vercel.app/">© codextarun.vercel.app</a>
    </div>
  )
}

export default Footer
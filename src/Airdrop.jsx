import React from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import toast, { Toaster } from 'react-hot-toast';

const Airdrop = () => {
  const { connection } = useConnection(); // Destructure the connection object
  const { publicKey } = useWallet(); // Destructure the publicKey from the wallet
  const [airdropAmount, setAirdropAmount] = React.useState('');

  const handleAirdrop = async () => {
    if (!publicKey && !airdropAmount) {
      toast.error('Wallet not connected!');
      return;
    }
    if (!airdropAmount) {
      toast.error('Entre airdrop amount');
      return;
    }
    const lapportTosol = airdropAmount * 1000000000
    try {
      toast.loading('Airdrop in progress...');
      await connection.requestAirdrop(publicKey, lapportTosol); // Airdrop 1 SOL (in lamports)transaction 
      toast.dismiss();
      toast.success(`Successfully airdropped ${airdropAmount} SOL!`);
    } catch (error) {
      toast.dismiss();
      toast.error('Airdrop failed!');
      console.error('Airdrop error:', error);
      setAirdropAmount('')
    }
  };

  return (
    <div className=''>
      <img src="https://i.pinimg.com/originals/e0/c9/9d/e0c99dc81ff52363ebf93aece74a4544.png" alt="" />
      <div className='space-x-2'>
        <input type="number" placeholder="Amount" onChange={(e) => setAirdropAmount(e.target.value)}
          value={airdropAmount} className='p-2 rounded-full' />
        <button
          onClick={handleAirdrop}
          className="bg-custom-gradient text-white p-2 rounded-full "
        >
          Airdrop
        </button>

      </div>
      <Toaster reverseOrder={false} />
    </div >
  );
};

export default Airdrop;

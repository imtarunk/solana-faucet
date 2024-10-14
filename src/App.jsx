import './App.css'
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './Airdrop'
import toast, { Toaster } from 'react-hot-toast';
import LeftBar from './leftBar';


function App() {

  return (
    <div className="flex w-full h-screen">
      <div className="w-[4%] flex justify-center items-center border-r">
        <LeftBar />
      </div>
      <div className="w-[95%] p-4">
        < center className='' >

          <div className=''>
            <ConnectionProvider endpoint={'https://solana-devnet.g.alchemy.com/v2/IAF1DSxpwE1ZKom4NwQizksxb00mRb5M'}>
              <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <div className='flex flex-col space-y-5'>
                    <Airdrop />
                    <div className='flex justify-center items-center space-x-3'>
                      <WalletMultiButton className='bg-custom-gradient' />
                      <WalletDisconnectButton className='bg-custom-gradient' />
                    </div>
                  </div>
                </WalletModalProvider>
              </WalletProvider>
            </ConnectionProvider>
            <div className='text-gray-200 absolute bottom-4  justify-center items-center w-full text-m space-y-2'>
              <p className='text-gray-400 text-sm'>Solana Devnet Faucet is a tool provided by Solana to assist developers in obtaining free test SOL tokens for development purposes on the Solana Devnet</p>
              <a href="https://codextarun.vercel.app/">© codextarun.vercel.app</a>
            </div>

          </div>
        </center >
      </div>
    </div>

  )
}

export default App


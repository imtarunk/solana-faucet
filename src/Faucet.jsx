import React from 'react'
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
import Transaction from './transation';
const Faucet = () => {
  return (
    <div>
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

          </div>
        </center >
      </div>
    </div>
  )
}

export default Faucet
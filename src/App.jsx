import './App.css'
import React, { FC, useMemo } from 'react';
import { Outlet } from 'react-router-dom'

import { Toaster } from 'react-hot-toast';
import LeftBar from './leftBar';
import Footer from './footer';


function App() {

  return (
    <div className="flex w-full h-screen justify-center">
      <div className="w-[4%] flex justify-center items-center border-r">
        <LeftBar />
      </div>
      <div className='justify-center items-center w-[95%]'>
        <Outlet />
        <Toaster />
      </div>
      <Footer />
    </div>

  )
}

export default App


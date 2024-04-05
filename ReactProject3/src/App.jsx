import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
import Button from './component/Button'
import Nav from './component/Nav'
import { TbMobiledata } from "react-icons/tb";



function App() {
  
  
  return (
    <>
      <Nav />
      <div className='h-lvh w-lvw  flex flex-col justify-center items-center'>
          <div className='relative backdrop-blur-sm border-x  p-2 rounded-xl flex flex-col justify-center items-center'>

            <Card title="Convert From" display="INR" countryCode='in'/>
            
            <div className='absolute lg:bottom-48 bottom-48 h-10 w-60 bg-blue-600 hover:bg-blue-700 text-white rounded-xl border border-white  flex flex-col justify-center items-center'>
              <span className='text-3xl'><TbMobiledata /></span>
            </div>

            <Card title="Convert To" display="USD" countryCode='us'/>

            <Button from = "INR" to= "USD" />

          </div>
      </div> 
    </>
  )
}

export default App

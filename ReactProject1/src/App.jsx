import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")


  return (
    <>
      <div className='h-lvh w-lvw flex flex-wrap flex-col justify-end items-center duration-200' style={{backgroundColor: color}}>
          <div className='bg-black  flex flex-wrap flex-row justify-center items-end mb-10 p-2 rounded-full'>
            
              <button className='bg-violet-600 p-2 m-1 w-20 h-10 rounded-full' onClick={()=>{setColor("#7C3AED")}}>
                 
              </button>
              <button className='bg-indigo-600 p-2 m-1 w-20 h-10 rounded-full'onClick={()=>{setColor("#4F46E5")}}>
                
              </button>
              <button className='bg-blue-600 p-2 m-1 w-20 h-10 rounded-full' onClick={()=>{setColor("#2563EB")}}>
               
              </button>
              <button className='bg-green-600 p-2 m-1 w-20 h-10 rounded-full' onClick={()=>{setColor("#16A34A")}}>
                 
              </button>
              <button className='bg-yellow-600 p-2 m-1 w-20 h-10 rounded-full' onClick={()=>{setColor("#CA8A04")}}>
                
              </button>
              <button className='bg-orange-600 p-2 m-1 w-20 h-10 rounded-full' onClick={()=>{setColor("#EA580C")}}>
                
              </button>
              <button className='bg-red-600 p-2 m-1 w-20 h-10 rounded-full' onClick={()=>{setColor("#DC2626")}}>
                 
              </button>
            
          </div>
      </div>
    </>
  )
}

export default App

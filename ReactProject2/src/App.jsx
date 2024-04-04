import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OutputField from './components/OutputField'
import Nav from './components/Nav'

function App() {
  const [length, setLength] = useState(8);
  const[password, setPassword] = useState("Password will be displayed here");
  const[number, setNumber] = useState(false);
  const[character, setCharacter] = useState(false);

  //useCallback('fun to be optimised', [dependencies of the fun]) hook "this hook is used for optimisation/ memoization/ cache "
  // following function can also work fine without callBack but not recomended !
  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number){ str += "0123456789"; }

    if(character){ str += "!@#$%^&*-_[]{}~`+="; }
    
    const strLen = str.length;
    let char = "";
    for (let i = 1; i <= length; i++) {
      
      let charVal = Math.floor((Math.random()*strLen)+1);
      char = str.charAt(charVal);
      
      pass += char;

      setPassword(pass);
      
    }
  },[length,number,character,setPassword]);

  //useEffect('function to be executed', [dependencies to be tracked for changes]) hook
  useEffect(generatePassword,[length,number,character]);

  return (

    <>

      <Nav />
      <div className='h-lvh w-lvh px-3 lg:pt-0 pt-24  flex flex-col lg:justify-center justify-start items-center '>
        
        <div className='flex justify-start items-center '>
          <h1 className='  text-6xl font-bold'>GET NEW PASSWORD IN A CLICK !</h1>
        </div>
        
        
        <div>
          <OutputField pass = {password} len = {length}/>
        </div>

      
       
        <div className='  flex flex-row flex-wrap justify-evenly items-center h-10 w-full'>
          <div className='flex flex-col flex-wrap justify-evenly items-center '>
            <div className='flex flex-col justify-center items-center w-48'>
              <p className="font-bold text-2xl">Length {length}</p>
            </div>
            
            <input 
              type="range" 
              min={8} 
              max={100} 
              value={length}
              className='m-2 appearance-none w-80 bg-gray-600 h-1 rounded-lg outline-none' 
              onChange={(e)=>{setLength(e.target.value)}}
              />
          </div>
          <div className='flex flex-row  justify-evenly items-center py-3' >
            <input type="checkbox" className=' form-checkbox h-6 w-6' onChange={()=>{setNumber((preVal)=>!preVal)}}/> 
            <p className='font-bold pl-3'>Include Numbers</p>
          </div>
          <div className='flex flex-row  justify-evenly items-center py-3'>
            <input type="checkbox" className=' form-checkbox h-6 w-6' onChange={()=>{setCharacter((preVal)=>!preVal)}}/> 
            <p className='font-bold pl-3'>Include Characters</p>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default App

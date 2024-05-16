import './App.css'
import React, { useCallback, useEffect, useState } from 'react'
import Nav from './components/Nav'

function App() {
  
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [data, setData] = useState(['','','','','','','','','']);
  let [head, setHead] = useState("Let's go !");
  
  // useEffect(
  //   ()=>{
  //     if(data[0] === data[1] && data[1] == data[2] && data[2]!=''){
  //       setLock(true)
  //     }else if(data[3] === data[4] && data[4] == data[5] && data[5]!=''){
  //       setLock(true)
  //     }else if(data[6] === data[7] && data[7] == data[8] && data[8]!=''){
  //       setLock(true)
  //     }else if(data[0] === data[3] && data[3] == data[6] && data[6]!=''){
  //       setLock(true)
  //     }else if(data[1] === data[4] && data[4] == data[7] && data[7]!=''){
  //       setLock(true)
  //     }else if(data[2] === data[5] && data[5] == data[8] && data[8]!=''){
  //       setLock(true)
  //     }else if(data[0] === data[4] && data[4] == data[8] && data[8]!=''){
  //       setLock(true)
  //     }else if(data[2] === data[4] && data[4] == data[6] && data[6]!=''){
  //       setLock(true)
  //     }
  //   }
  // ,[count,setCount,data,setData,lock])


  let toggle = useCallback((e,num)=>{
    
    if(lock){
      setHead("Win!");
      return 0;
    }else if(count > 8){
      setHead("Game Over !")
      return 0;
    }else if(count%2 === 0 && e.target.innerText === ''){
      e.target.innerText = "X";
      data[num] = 'X';
      setCount(e => e+1);
    }else if(count%2 === 1 && e.target.innerText === '' ){
      e.target.innerText =  "O";
      data[num] = 'O';
      setCount(e => e+1);
    }

    if(data[0] === data[1] && data[1] == data[2] && data[2]!=''){
      setLock(true)
    }else if(data[3] === data[4] && data[4] == data[5] && data[5]!=''){
      setLock(true)
    }else if(data[6] === data[7] && data[7] == data[8] && data[8]!=''){
      setLock(true)
    }else if(data[0] === data[3] && data[3] == data[6] && data[6]!=''){
      setLock(true)
    }else if(data[1] === data[4] && data[4] == data[7] && data[7]!=''){
      setLock(true)
    }else if(data[2] === data[5] && data[5] == data[8] && data[8]!=''){
      setLock(true)
    }else if(data[0] === data[4] && data[4] == data[8] && data[8]!=''){
      setLock(true)
    }else if(data[2] === data[4] && data[4] == data[6] && data[6]!=''){
      setLock(true)
    }

    if(count === 8){
      setHead("Game Over !")
    }

    console.log(data)
    
  },[count,setCount,data,setData,lock]);

  
  return (
    <>
    <Nav />
    <div className='relative h-lvh w-lvw p-0 m-0 flex flex-col justify-center items-center '>
        <h1 className='text-lime-800 text-lg font-extrabold head'>
          {head}
        </h1>
        <div className='flex flex-row justify-center items-center'>
            <div 
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,0)}}
            ></div>
            <div 
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,1)}}
            ></div>
            <div 
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,2)}}
            ></div>
        </div>

        <div className='flex flex-row justify-center items-center'>
            <div 
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,3)}}
            ></div>
            <div 
              className='rounded-lg  shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,4)}}
            ></div>
            <div 
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,5)}}
            ></div>
        </div>

        <div className='flex flex-row justify-center items-center'>
            <div 
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,6)}}
            ></div>
            <div 
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,7)}}
            ></div>
            <div 
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,8)}}
            ></div>
        </div>
        <div className='mt-3'>
          <button 
            className='text-lg bg-red-500 shadow-lg  p-3 rounded-lg hover:bg-red-600 text-white'
            onClick={()=>{location.reload()}}  
          >
              Reset
          </button>
        </div>
    </div>
    
    
    </>
  )
}

export default App

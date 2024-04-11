import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext';
import Profile from './Profile';


function Login(){

    const [username, setUsername]  = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = React.useContext(UserContext); 

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password});

    }

    const handleReset = (e)=>{
      e.preventDefault();
      setPassword('');
      setUsername('');
      setUser(null);
    }

    return (
        <>
        <div>
          <h1 className='w-full  flex justify-center items-center flex-col text-5xl  text-black text-center'>
            LOGIN
          </h1>
        </div>
        <Profile />
          <div className='w-full p-5 flex justify-center items-center flex-col '>
              
              <label>Username</label>
              <input 
                type="text" 
                placeholder='enter username'
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                className='w-60 bg bg-white h-10 text-center border border-black rounded-md mt-2 mb-7'
              />
              <label>Password</label>
              <input 
                type="password" 
                placeholder='enter password'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className='w-60 bg bg-white h-10 text-center border border-black rounded-md mt-2 mb-7'
              />

              <div className='w-full flex justify-center items-center flex-row '>
                <button 
                  type='button'
                  onClick={handleSubmit}
                  className='w-28 bg bg-green-500 hover:bg-green-700 boreder  text-white h-10 text-center border border-black rounded-md mb-7 mr-1'
                >
                  Login
                </button>
                <button 
                  type='button'
                  onClick={handleReset}
                  className='w-28 bg bg-red-500 hover:bg-red-700 text-white h-10 text-center border border-black rounded-md mb-7 ml-1'
                >
                  Reset
                </button>
              </div>
              

          </div>
            
          
        </>
      )

}

export default Login;
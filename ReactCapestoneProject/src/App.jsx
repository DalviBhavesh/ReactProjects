import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {useDispatch} from "react-redux"
import authService from './appwrite/auth'
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'

function App() {
  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
    })
    .finally(()=> setLoading(false))
  }, [])





  return !loading ? (
    <>
      <Header />
     <div className='bg-slate-400 pt-14  h-lvh flex flex-wrap justify-center items-center content-between '>
     
      <div className=' bg-amber-300 w-full h-full flex flex-wrap justify-center items-center '>
          <main>
           Todo: {/* <Outlet/> */}
          </main>
      </div>
      
     </div>
     <Footer />
     
    </>
  ) : null
}

export default App

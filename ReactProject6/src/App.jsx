
import { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from './context/theme';
import ThemeButton from './components/ThemeButton';
import Card from './components/Card';
import Nav from './components/Nav';

function App() {
  
  const [mode, setMode] = useState("light");
  
  const lightTheme = ()=>{
    setMode("Light")
  }
  
  const darkTheme = ()=>{
    setMode("dark")
  }

  useEffect(()=>{
    const querySel = document.querySelector('html');
    querySel.classList.remove("light","dark");
    querySel.classList.add(mode);
  },[mode])

  return (
    <>
      <ThemeProvider value={{mode,lightTheme,darkTheme}}>   
        <Nav />
        <div className='flex flex-wrap h-lvh items-center'>
          <div className='w-lvw'>
            <div className='w-72 lg:w-full max-w-sm mx-auto flex justify-end mb-4'>
              <ThemeButton/>
            </div>
            <div className='w-72 lg:w-full max-w-sm mx-auto'>
              <Card />
            </div>
          </div>
        </div>

      </ThemeProvider>
    </>
  )
}

export default App

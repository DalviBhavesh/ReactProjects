import React from 'react'
import { useEffect,useState } from "react";
import Input from './components/Input';
import Card from './components/Card'

function App() { 
    let [weather, setWeather] = useState();
    let [place, setPlace] = useState("Mumbai");
    
    let getWeather = useEffect(()=>{
        async function fetchData(place) {
        let APIkey = "371422a963a3b4242d317379b1df554c";
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APIkey}`)
                        .then((result)=>{return result.json()})
                        // .then((res)=>{console.log(res)})

        console.log(data)
        setWeather(data);
        
        
        }

        fetchData(place)
    
    },[place])
        
  return (
    <>
      <div className='flex justify-end items-center fixed pe-2 lg:p-3 w-lvw z-50 backdrop-blur-xl text-blue-800' >
        <Input place = {place} setPlace = {setPlace} />
      </div>
      
      <div 
        className=' py-20 h-lvh flex flex-row flex-wrap justify-center items-center overflow-auto text-white'
        style={{
          backgroundImage: `url(./src/assets/3d-nature-with-clouds-mountains.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        >
          <Card place = {place} weather={weather} />
          
      </div>
      
    </>
  )
}

export default App

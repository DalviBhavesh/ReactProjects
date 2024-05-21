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
      <Input place = {place} setPlace = {setPlace} />
      <Card weather={weather} />
    </>
  )
}

export default App

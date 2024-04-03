import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0);
  //const[arr,setArr] = useState([{name:"leon Yezeda", btnText:"view"},{name:"Billy Eylish",btnText:"view"}]);
  const arr = 
  [
    {
      name:"FIRE",
      link:"https://images.unsplash.com/photo-1618325508550-951512a1e82d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmlyZXxlbnwwfHwwfHx8MA%3D%3D", 
      text:"Fire represents the transformative and purifying aspects of existence, symbolizing change, passion, and the will to transform and create.", 
      btnText:"Read More",
      btnLink:"https://en.wikipedia.org/wiki/Fire"
    },
    {
      name:"WATER",
      link:"https://images.unsplash.com/photo-1457195740896-7f345efef228?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGVyfGVufDB8fDB8fHww", 
      text:"Water embodies the fluid, ever-changing nature of life, representing emotions, intuition, and the subconscious mind, flowing and adapting to circumstances.", 
      btnText:"Read More",
      btnLink:"https://en.wikipedia.org/wiki/Water"
    },
    {
      name:"EARTH",
      link:"https://images.unsplash.com/photo-1433185000771-ec45c869c61b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvaWx8ZW58MHx8MHx8fDA%3D",
      text:"Earth symbolizes the grounding and nurturing aspects of life, providing stability, sustenance, and a foundation for growth and manifestation.", 
      btnText:"Read More",
      btnLink:"https://en.wikipedia.org/wiki/Soil"
    },
    {
      name:"AIR",
      link:"https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlyfGVufDB8fDB8fHww",
      text:"Air, invisible yet omnipresent, whispers the essence of life, connecting all beings in a silent symphony of existence.", 
      btnText:"Read More",
      btnLink:"https://simple.wikipedia.org/wiki/Air"
    }] ;

    const click = ()=>{

    }
    
  return (
    <>
      <Nav />
      <div className='bg-slate-200 overflow-auto h-lvh w-lvw p-10 m-0 flex justify-evenly items-center flex-wrap flex-row bg-no-repeat  bg-cover' style={{backgroundImage: `url("https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1807&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}>
        <div className='m-5'></div>
        <Card username = {arr[0].name} link = {arr[0].link} text={arr[0].text} btnText = {arr[0].btnText} btnLink= {arr[0].btnLink} />
        <Card username = {arr[1].name} link = {arr[1].link} text={arr[1].text} btnText = {arr[1].btnText} btnLink= {arr[1].btnLink} />
        <Card username = {arr[2].name} link = {arr[2].link} text={arr[2].text} btnText = {arr[2].btnText} btnLink= {arr[2].btnLink} />
        <Card username = {arr[3].name} link = {arr[3].link} text={arr[3].text} btnText = {arr[3].btnText} btnLink= {arr[3].btnLink} />
        
        
      </div>
        
    </>
  )
 
}

export default App

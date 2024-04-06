import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import Card from './component/Card'
import Button from './component/Button'
import Nav from './component/Nav'
import { TbMobiledata } from "react-icons/tb";
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  
  const [amount, SetAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  //console.log("ans",currencyInfo);
  const swap = ()=>{
    setFrom(to);
    setTo(from);
    // setConvertedAmount(amount);
    // SetAmount(convertedAmount);
  }

  const convert = ()=>{
    console.log("running")
    setConvertedAmount(amount*currencyInfo[to]);
  }

  return (
    <>
      <Nav />
      <div className='h-lvh w-lvw  flex flex-col justify-center items-center'>
          <div className='relative backdrop-blur-sm border-x  p-2 rounded-xl flex flex-col justify-center items-center'>

            <Card 
              title="Convert From" 
              amount= {amount} 
              countryCode={from.substring(0,2)} 
              currencyOptions={options} 
              onCurrencyChange={(curr)=>{
                  setFrom(curr)
              }}
              selectCurrency={from}
              onAmountChange={(amt)=>{
                SetAmount(amt)
              }}
            />
            
            <div 
              className='absolute lg:bottom-48 bottom-48 h-10 w-60 bg-blue-600 hover:bg-blue-700 text-white rounded-xl border border-white  flex flex-col justify-center items-center'
              onClick={swap}
              >
              <span className='text-3xl'><TbMobiledata /></span>
            </div>

            <Card 
              title="Convert To" 
              amount={convertedAmount} 
              countryCode={to.substring(0,2)}
              currencyOptions={options} 
              onCurrencyChange={(curr)=>{
                  setTo(curr)
              }}
              selectCurrency={to}
              amountDisable = {true}
            />

            <Button from = {from.toUpperCase()} to= {to.toUpperCase()} submit = {convert} />

          </div>
      </div> 
    </>
  )
}

export default App

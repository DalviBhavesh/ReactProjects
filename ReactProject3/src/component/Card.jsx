import React, {useId} from "react";

function Card({
    title,
    countryCode = "in",
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencydisable = false
}) 
{
    // this hook generates random and unique values 
    // we are using it to give id to aour tags 
    // we are using it just for knowing the hook and nothing special
    
    const amountInputId = useId();
    
    return (
        <>
            <div className="lg:w-96  w-80 h-28 bg-white flex justify-between items-center rounded-xl m-2">

                <div className="lg:w-64 w-48 bg-white flex justify-center items-start flex-col flex-wrap m-2 p-1"> 
                   <div className="ps-3 pb-2 flex justify-center items-center flex-col flex-wrap text-gray-700">
                        <p>{title}</p>
                   </div>
                    <div className="flex justify-center items-center flex-row flex-wrap">
                        <img className=" lg:w-11 lg:h-7 w-9 h-6 bg-white rounded-s-full"  src = {`https://flagcdn.com/w2560/${countryCode}.jpg`} />
                        <input 
                            className="lg:w-48 lg:h-7 w-36 pl-2 bg-slate-300 rounded-e-full" 
                            id={amountInputId} 
                            type="number" 
                            min={0}
                            value={amount} 
                            disabled = {amountDisable}
                            onChange={(e)=>{ 
                                //for handelling null value we have used && operator
                                //so that if the variable 'onAmountChange' contains null value than the && of null will be false 
                                //and the property of and is if first condition is false then it returns false then and there 
                                //without even evaluating the second condition
                                onAmountChange && onAmountChange(Number(e.target.value)); 
                            }}
                         />
                    </div> 
                </div>

                <div className=" w-20 bg-white flex justify-center items-center flex-col flex-wrap m-2 p-1">
                    <div className="pb-2 flex justify-center items-end flex-col flex-wrap text-gray-700">
                        <p>Currency</p>
                    </div>
                    <div className=" flex justify-center items-center flex-row flex-wrap">  
                        <select 
                            className=" bg-slate-300 lg:h-7 w-16 text-center rounded-full" 
                            name="currencyCode"
                            value={selectCurrency}
                            onChange={(e)=>{
                                onCurrencyChange && onCurrencyChange(e.target.value)
                            }}
                        >

                            {
                                currencyOptions.map((curr)=>(
                                    //Remember to use key while using loops in react, for performance optimization
                                    <option key={curr} value={curr}> {curr} </option>
                                    
                                ))
                            }

                            {/* <option value="INR">INR</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option> */}
                        </select>
                    </div>   
                </div>
                
            </div>
        </>
    )
}

export default Card;
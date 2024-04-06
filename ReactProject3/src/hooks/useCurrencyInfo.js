import { useEffect, useState } from "react";


//designing custom hooks
function useCurrencyInfo(currency){
    const[data, setData] = useState({});
    useEffect(()=>{
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        )
        .then((res)=>{
            //console.log( "first:",res);
            return res.json()
        })
        .then((res)=>{
            setData(res[currency]);
            //console.log( "second:",res);
           
        });
        
    },[currency]);
    
    return data;
}

export default useCurrencyInfo;
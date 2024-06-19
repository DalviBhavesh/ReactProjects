import React, { useCallback, useEffect, useState } from "react";

function Navbar(){
    const lable = ["home", "projects", "contacts" ];
    let [ham, setHam] = useState("hidden");
    

    const hamburger = ()=>{
        
        if(ham === "hidden"){
            setHam("flex")
            console.log(ham);
        }else{
            setHam("hidden");
            console.log(ham);
        }
     
    }

      

    return(
        <>
            <div className=" sticky h-12 w-full p-2 bg-black flex justify-start items-center">
                
                <div className="p-1 mx-2 bg-green-400 flex justify-center items-center">LOGO</div>
                
                <div className=" p-1 mx-2 w-full  bg-green-400 hidden lg:flex justify-center items-center">
                    {
                        lable&&lable.map((lableName)=>(
                            <div className="p-1 mx-2 hover:bg-amber-300">{lableName.toUpperCase()}</div>
                        ))
                        
                    }
                    
                </div>

                <div className={` m-2 p-1 w-full top-10 bg-green-400 lg:hidden flex justify-end items-center`}>
                   
                    <button 
                        className="px-2 py-1 mx-2  hover:bg-amber-300"
                        onClick={hamburger} 
                    >H</button>
                       
                </div>

                <div className= {`fixed  p-1 h-full w-full top-12 bg-green-400 lg:hidden ${ham} justify-start items-center flex-col `}>
                    <div className=" w-full flex justify-start items-center">
                        <button className="px-2 py-1 mx-2  hover:bg-amber-300"  onClick={hamburger} >
                            X
                        </button>
                    </div>
                    {
                        lable&&lable.map((lableName)=>(
                            <div className="p-1 m-2 w-full hover:bg-amber-300 flex justify-center items-center">{lableName.toUpperCase()}</div>
                        ))
                        
                    }
                    
                </div>
            </div>  
        </>
    );
}

export default Navbar;
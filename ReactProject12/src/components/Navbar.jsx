import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";
import { SlClose } from "react-icons/sl";
import { PiCodesandboxLogoDuotone } from "react-icons/pi";

function Navbar(){
    const lable = [
            {
                name: "Home",
                url: ""
            },
            {
                name : "About Me",
                url: "/about"
            },
            {
                name : "My Projects",
                url: "/project"
            },
            {
                name: "Contact Me",
                url: "/contact"
            } 
        ];

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
            <div className=" fixed h-12 w-full p-2 lg:pe-10 bg-white flex justify-start items-center z-50 shadow-md border-b-black ">
                <div className="p-1 ms-2 rounded-lg border-2 shadow-md border-black flex justify-center items-center ">
                                
                                <a href="/" className="text-2xl animate-bounce"><PiCodesandboxLogoDuotone /></a>  
                                
                </div>
                <div className="p-1 mx-2 rounded-lg border-2 shadow-md border-black flex justify-center items-center font-mono  font-bold">
                            
                              <a href="">[Bhavesh.CodeBase]</a>  
                              
                </div>
                
                <div className=" p-1 mx-2 w-full  bg-transparent hidden lg:flex justify-end items-center">
                    {
                        lable&&lable.map((lableName)=>(
                            <NavLink 
                                key={lableName.name}
                                className={({isActive})=>isActive? `min-w-24 text-center p-1 mx-2 bg-lime-400 rounded-lg shadow-md border-2 border-black`:`min-w-24 text-center p-1 mx-2 hover:bg-lime-200 hover:shadow-md rounded-lg `} 
                                to={lableName.url}
                                
                            >
                                <p>{lableName.name}</p>
                            </NavLink>
                        ))
                        
                    }
                    
                </div>

                <div className={` m-2 p-1 w-full top-10 bg-transparent lg:hidden flex justify-end items-center`}>
                   
                    <button 
                        className="px-2 py-1 mx-2 border-2 border-black bg-lime-400 text-2xl rounded-lg shadow-md"
                        onClick={hamburger} 
                    ><TiThMenuOutline /></button>
                       
                </div>

                
            </div>  

            <div onClick={hamburger} className= {`fixed  p-1 h-full w-lvw top-12 backdrop-blur-sm lg:hidden ${ham} justify-start items-center flex-col z-50 `}>
                    <div className="inline pt-2 pb-4  w-full  bg-lime-400 justify-start items-center flex-col rounded-lg ">

                        <div className="w-full flex justify-start items-center">
                            <button className="px-2 py-1 mx-2 text-2xl  hover:bg-lime-300 rounded-lg "  onClick={hamburger} >
                                <SlClose />
                            </button>
                        </div>

                        {
                            lable&&lable.map((lableName)=>(
                                <NavLink 
                                    key={lableName.name}
                                    className={({isActive})=> isActive? `p-1 m-2 bg-white flex justify-center items-center shadow-md rounded-lg border-2 border-black`:`p-1 m-2 hover:shadow-md hover:bg-lime-300 flex justify-center items-center rounded-lg border-2 border-lime-400`} 
                                    to={lableName.url}
                                >
                                    {lableName.name}
                                </NavLink>
                            ))
                            
                        }

                    </div>
                    
                    
            </div>
        </>
    );
}

export default Navbar;
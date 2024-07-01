import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar(){
    const lable = [
            {
                name: "home",
                url: ""
            },
            {
                name : "projects",
                url: "/project"
            },
            {
                name: "contacts",
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
            <div className=" sticky h-12 w-full p-2 bg-black flex justify-start items-center">
                
                <div className="p-1 mx-2 bg-green-400 flex justify-center items-center">LOGO</div>
                
                <div className=" p-1 mx-2 w-full  bg-green-400 hidden lg:flex justify-center items-center">
                    {
                        lable&&lable.map((lableName)=>(
                            <NavLink 
                                className={({isActive})=>isActive? `p-1 mx-2 bg-amber-300`:`p-1 mx-2 hover:bg-amber-300`} 
                                to={lableName.url}
                                
                            >
                                {lableName.name.toUpperCase()}
                            </NavLink>
                        ))
                        
                    }
                    
                </div>

                <div className={` m-2 p-1 w-full top-10 bg-green-400 lg:hidden flex justify-end items-center`}>
                   
                    <button 
                        className="px-2 py-1 mx-2  hover:bg-amber-300"
                        onClick={hamburger} 
                    >H</button>
                       
                </div>

                
            </div>  

            <div className= {`fixed  p-1 h-full w-lvw top-12 bg-green-400 lg:hidden ${ham} justify-start items-center flex-col `}>
                    <div className="inline pb-4  w-full  bg-lime-500 justify-start items-center flex-col">

                        <div className="w-full flex justify-start items-center">
                            <button className="px-2 py-1 mx-2  hover:bg-amber-300"  onClick={hamburger} >
                                X
                            </button>
                        </div>

                        {
                            lable&&lable.map((lableName)=>(
                                <NavLink 
                                    className={({isActive})=> isActive? `p-1 m-2 bg-amber-300 flex justify-center items-center`:`p-1 m-2 hover:bg-amber-300 flex justify-center items-center`} 
                                    to={lableName.url}
                                >
                                    {lableName.name.toUpperCase()}
                                </NavLink>
                            ))
                            
                        }

                    </div>
                    
                    
            </div>
        </>
    );
}

export default Navbar;
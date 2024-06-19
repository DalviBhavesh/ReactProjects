import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";


function Nav(){
    let head = [
        {
            key:1,
            name: "Home",
            url: "/",
        },
        {
            key:2,
            name: "About",
            url: "/about",
        },
        {
            key:3,
            name: "Contact",
            url: "/contact"
        },
        {
            key:4,
            name: "Socials",
            url: "/Socials"
        }
    ]
    const [ham, setHam] = useState(false);
    return(
        <>
            <div className="sticky top-0 w-full h-12 bg-black text-center text-white flex flex-row justify-evenly items-center">
                <div className="w-56 font-thin text-3xl">NavBar</div>
                <div className="w-full hidden  md:flex flex-row justify-center items-center">
                    
                        {
                            head&&head.map((e)=>{
                                return (<NavLink 
                                            key={e.key}
                                            to={e.url}
                                            className={({isActive})=>{
                                               return (isActive? "bg-lime-500 text-black hover:bg-lime-500 " : "")+"p-1 m-1 hover:bg-slate-400 rounded-md"
                                            }} 
                                            >{e.name}</NavLink>)
                            })
                        }
                            
                   
                
                    
                </div>
                <div className="bg-gray-600 md:hidden" onClick={()=>{ham?setHam(false):setHam(true)}}>
                    X
                </div>
                <div className={`fixed top-12 md:hidden h-lvh w-full ${ham?'flex':'hidden'} flex-col justify-evenly items-center bg-orange-950`} >
                    
                        {
                            head&&head.map((e)=>{
                                return (<NavLink 
                                            key={e.key}
                                            to={e.url}
                                            className={({isActive})=>{
                                               return (isActive? "bg-lime-500 text-black hover:bg-lime-500 " : "")+" m-4 w-5/6 h-full hover:bg-slate-400 rounded-md flex flex-col justify-center item-center"
                                            }} 
                                            >{e.name}</NavLink>)
                            })
                        }
                            
                   
                
                    
                </div>

            </div>
        </>
    )
}

export default Nav;
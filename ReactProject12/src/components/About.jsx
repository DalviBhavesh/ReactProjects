import React from "react";
import { NavLink } from "react-router-dom";
import { LuMessagesSquare } from "react-icons/lu";

function About(){
    return(
        <>
            <div className=" pt-16  min-h-lvh bg-red-400 flex flex-col lg:flex-row  justify-center items-center ">
                
                {/* Image Link: "https://imagetolink.com/ib/EATCplYAZo.png" */}
                
                {/* LEFT */}
                <div className="bg-blue-400 w-full lg:w-1/3 h-fit px-4 flex flex-col justify-center items-center">
                    
                    {/* PROFILE CARD */}
                    <div className="bg-white w-80 h-80 rounded-xl shadow-lg">
                        <div className="relative bg-lime-300 w-full h-24 rounded-t-lg shadow-lg">
                            
                            <img className="absolute right-24 top-2 h-36 rounded-full border-4 border-lime-300 shadow-lg" src="https://imagetolink.com/ib/EATCplYAZo.png" alt="" />

                        </div>
                        <div className="text-center text-4xl ">
                            <h1 className="text-4xl lg:5xl text-center mt-14 font-bold " >Bhavesh Dalvi</h1>
                            <p className="text-lg ">Software Engineer</p>
                            <p className="text-gray-600 text-sm"> Mumbai,India</p>
                            <div className="w-full flex justify-center item-center ">
                                <NavLink 
                                    to="/contact"
                                >
                                <button className="bg-black text-white text-base font-bold  mt-4 px-3 py-2 rounded-lg shadow-xl border-2 border-slate-600 hover:bg-white hover:text-black hover:border-black flex justify-center items-center ">
                                    <LuMessagesSquare className="font-bold text-xl" /><p className="ps-2">Reach Out</p>
                                </button>
                                </NavLink>
                            </div>
                            
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className=" bg-white w-80 h-80 rounded-xl shadow-lg m-5">
                        <h1 className="bg-lime-300 py-2 text-center text-3xl font-bold rounded-t-lg drop-shadow-xl text-slate-900">About Me</h1>
                        <p></p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="bg-yellow-400 w-full h-fit flex justify-center items-center shadow-lg">
                    RIGHT
                </div>

            </div>
        </>
    )
}

export default About;
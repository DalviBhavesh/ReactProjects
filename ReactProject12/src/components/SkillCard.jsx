import React from "react";
import { SiSpring } from "react-icons/si";


function SkillCard({photoUrl, skillUrl="", skillName="NOT AVAILABLE"}){
    return(
        <>
        <a href={skillUrl} target="_blank">
        <div className="relative w-44 h-60 p-2 m-2 bg-white  shadow-lg rounded-xl overflow-clip flex flex-col justify-evenly items-center lg:hover:bg-gray-200 border-2 border-black">

            
            <div  className="text-9xl text-black w-32 h-32 p-2 mb-2 bg-transparent border-2 border-transparent rounded-xl flex flex-col justify-center items-center object-contain object-center">
                {photoUrl}
            </div>

            <h1 className="w-full h-16 text-2xl flex justify-center items-center text-center font-bold border-t border-t-black ">{skillName}</h1>
            {/* DESIGN DIV */}
            {/* <div className=" absolute  bg-lime-300  w-96 h-40 rounded-3xl rotate-45 right-20 bottom-36"></div>
            <div className=" absolute  bg-lime-300  w-96 h-40 rounded-3xl -rotate-45 left-20 top-50"></div> */}

            </div>
        </a>
        
        </>
    )
}

export default SkillCard;
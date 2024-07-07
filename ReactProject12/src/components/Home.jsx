import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";

function Home(){
    return (
        <>
            <div 
                
                className="w-full  max-h-fit text-8xl flex flex-row flex-wrap justify-evenly items-center "
            >


                    <div className="  h-fit lg:h-full w-full lg:w-1/2  mt-12 lg:mt-0 flex flex-wrap justify-center items-center  ">
                        <img 
                            src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1670.jpg?t=st=1720365022~exp=1720368622~hmac=e1a103d239cc5d097f1b6ccec8ef0df6e70383d336a32e767a123c5ba2d01117&w=740" 
                            alt=""
                            className="w-96 lg:w-auto" />
                    </div> 



                    <div className=" h-80 p-2  lg:h-lvh w-full lg:w-1/2 flex flex-col flex-wrap justify-start lg:justify-center items-center ">
                        
                        <h1 className="  text-xl lg:text-3xl font-light font-mono text-center">
                            <span className="">Hi! I'm  <span className="underline">Bhavesh Dalvi</span> a</span>
                            <br /> 
                            <span className="text-3xl lg:text-6xl text-lime-400 font-bold">'SOFTWARE ENGINEER'</span>
                            <p className="">
                            Translating ideas into code.
                            </p>
                        </h1>

                        
                        
                        <div className="flex justify-center items-center">
                            <a href="https://drive.google.com/file/d/1LoJMC6_RJlnePpEInvrJTMxleMLXPAGt/view?usp=sharing" target="_blank" className=" p-2 mt-7 mx-1 text-center rounded-lg font-bold text-sm shadow-lg border-gray-400 bg-black text-white hover:bg-white hover:text-black hover:border-black border-2 flex justify-center items-center">
                                View Resume
                            </a>
                            <Link to="/about"  className=" p-2 mt-7 mx-1 text-center rounded-lg font-bold text-sm shadow-lg border-gray-400 bg-black text-white hover:bg-white hover:text-black hover:border-black border-2 flex justify-center items-center">
                                More About Me
                            </Link>
                        </div>

                        <div className="p-2 m-2 flex flex-row justify-center items-center">
                            <a href="https://www.linkedin.com/in/bhavesh-dalvi-a74758244/" target="_blank" className=" shadow-lg m-2 p-2 text-3xl  lg:text-3xl rounded-full hover:bg-slate-400"><IoLogoLinkedin /></a>
                            <a href="https://github.com/DalviBhavesh" target="_blank" className=" shadow-lg m-2 p-2 text-3xl  lg:text-3xl rounded-full hover:bg-slate-400"><SiGithub /></a>
                            <a href="https://leetcode.com/u/BhaveshDalvi/" target="_blank" className=" shadow-lg m-2 p-2 text-3xl  lg:text-3xl rounded-full hover:bg-slate-400"><SiLeetcode /></a>
                            <a href="https://www.instagram.com/_dalvibhavesh07_/?hl=en" target="_blank" className=" shadow-lg m-2 p-2 text-3xl  lg:text-3xl rounded-full hover:bg-slate-400"><FaInstagram /></a>
                        </div>
                        

                    </div>

                         
            </div>
        </>
    );
}

export default Home;
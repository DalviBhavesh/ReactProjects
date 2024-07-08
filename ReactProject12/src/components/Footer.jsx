import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { PiCodesandboxLogoDuotone } from "react-icons/pi";

function Footer(){
    return(
        <>
            <div className="w-full h-36 bg-lime-400">
            <footer className="w-full bg-black">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* <!--Grid--> */}
                    <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
                        <a href="https://pagedone.io/"  className="flex justify-center items-center text-lime-400 ">
                                <p className="text-5xl"><PiCodesandboxLogoDuotone /></p>
                                <p className="text-3xl ps-2 font-bold ">Bhavesh.CodeBase</p>
                        </a>


                        <ul className="text-lg text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
                            <li ><NavLink to="/"  className={({isActive})=>(isActive?"text-gray-400 underline":"text-white")+" hover:text-gray-400"}>Home</NavLink></li>
                            <li className="sm:my-0 my-2" ><NavLink to="/about"  className={({isActive})=>(isActive?"text-gray-400 underline":"text-white")+" hover:text-gray-400"}>About Me</NavLink></li>
                            <li ><NavLink to="/project"  className={({isActive})=>(isActive?"text-gray-400 underline":"text-white")+" hover:text-gray-400"}>My Projects</NavLink></li>
                            <li  className="sm:my-0 my-2"><NavLink to="/contact"  className={({isActive})=>(isActive?"text-gray-400 underline":"text-white")+" hover:text-gray-400"}>Contact Me</NavLink></li>
                        </ul>


                        <div className="flex  space-x-4 sm:justify-center  ">

                            <a href="https://www.linkedin.com/in/bhavesh-dalvi-a74758244/" target="_blank"  className="w-9 h-9 text-xl rounded-full bg-gray-800 text-white flex justify-center items-center hover:bg-lime-400 hover:text-black">
                            <IoLogoLinkedin />       
                            </a>

                            <a href="https://github.com/DalviBhavesh" target="_blank" className="w-9 h-9 text-xl rounded-full bg-gray-800 text-white flex justify-center items-center hover:bg-lime-400 hover:text-black">
                            <SiGithub />      
                            </a>

                            <a href="https://leetcode.com/u/BhaveshDalvi/" target="_blank" className="w-9 h-9 text-xl rounded-full bg-gray-800 text-white flex justify-center items-center hover:bg-lime-400 hover:text-black">
                            <SiLeetcode />      
                            </a>

                            <a href="https://www.instagram.com/_dalvibhavesh07_/?hl=en" target="_blank" className="w-9 h-9 text-xl rounded-full bg-gray-800 text-white flex justify-center items-center hover:bg-lime-400 hover:text-black">
                            <FaInstagram />       
                            </a>

                            
                        </div>
                    </div>
                    {/* <!--Grid--> */}
                    <div className="py-7 border-t border-gray-700">
                        <div className="flex items-center justify-center">
                            <span className="text-gray-400 ">©<a href="https://pagedone.io/">bhavesh.codebase</a>2024, All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        </>
    )
}

export default Footer;
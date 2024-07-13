import React from "react";
import { NavLink } from "react-router-dom";
import { LuMessagesSquare } from "react-icons/lu";
import SkillCard from "./SkillCard";
import { SiSpring } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { FaEthereum } from "react-icons/fa6";
import { TbCloudComputing } from "react-icons/tb";
import { FaProjectDiagram } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import { DiEclipse } from "react-icons/di";
import { SiIntellijidea } from "react-icons/si";
import { SiApachetomcat } from "react-icons/si";
import { FaPython } from "react-icons/fa";


function About(){
    return(
        <>
            <div className=" pt-16  min-h-lvh bg-white flex flex-col lg:flex-row  justify-center items-center ">
                
                {/* Image Link: "https://imagetolink.com/ib/EATCplYAZo.png" */}
                
                {/* LEFT */}
                <div className="bg-white w-full lg:w-80 h-fit px-4  flex flex-col justify-center items-center">
                    
                    {/* PROFILE CARD */}
                    <div className="bg-white w-80 h-80 rounded-xl shadow-lg border-4 border-black">
                        <div className="relative bg-black w-full h-24 rounded-t-lg shadow-lg">
                            
                            <img className="absolute left-20 top-2 h-36 w-36 rounded-full border-4 border-lime-300 shadow-lg" src="https://imagetolink.com/ib/EATCplYAZo.png" alt="My Photo" />

                        </div>
                        <div className="text-center text-4xl ">
                            <h1 className="text-4xl lg:5xl text-center mt-14 font-bold " >Bhavesh Dalvi</h1>
                            <p className="text-lg ">Software Engineer </p>
                            <p className="text-gray-600 text-sm"> Mumbai,India</p>
                            <div className="w-full flex justify-center item-center ">
                                <NavLink 
                                    to="/project"
                                >
                                <button className="bg-black text-white text-base font-bold  mt-4 mx-1 px-3 py-2 rounded-lg shadow-xl border-2 border-slate-600 hover:bg-white hover:text-black hover:border-black flex justify-center items-center ">
                                    <FaProjectDiagram className="font-bold text-xl" /><p className="ps-2">Projects</p>
                                </button>
                                </NavLink>

                                <NavLink 
                                    to="/contact"
                                >
                                <button className="bg-black text-white text-base font-bold  mt-4 mx-1 px-3 py-2 rounded-lg shadow-xl border-2 border-slate-600 hover:bg-white hover:text-black hover:border-black flex justify-center items-center ">
                                    <LuMessagesSquare className="font-bold text-xl" /><p className="ps-2">Reach Out</p>
                                </button>
                                </NavLink>
                            </div>
                            
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className= "relative pt-12 bg-lime-300 w-80 h-80 rounded-lg shadow-lg m-5  border-4 border-black ">
                        <h1 className= "absolute top-0 w-full bg-black py-2 text-center text-3xl font-bold rounded-t-sm drop-shadow-xl text-white">About Me</h1>
                        <div 
                            // style={{scrollbarWidth:"thin"}}
                            className=" h-64 overflow-hidden overflow-y-scroll text-sm sm:text-base pt-5 p-2 lg:p-4  bg-white "
                        >
                            <ul className=" list-disc px-2 text-justify">
                    
                                <li>
                                    🚀 I am a passionate software Engineer specializing in web development and cloud computing.
                                </li>
                                    <br/>
                                <li>
                                    👨‍💻 I thrive in collaborative environments and enjoy tackling challenging problem that allow me to apply my skills and creativity.
                                </li>
                                    <br/>
                                <li>
                                    🌱 I am committed to continuous learning and growth in this ever-evolving field.
                                </li>
                               
                                
                            </ul>
                                
                            
                        </div>
                        
                    </div>
                </div>

                {/* RIGHT */}
                <div className="bg-white-900 w-80 lg:w-2/3 h-fit lg:px-4 flex flex-col flex-wrap justify-center items-center ">
                    
                    {/* UPPER SECTION */}
                    <div className=" w-full h-80 bg-lime-300 flex flex-col  justify-evenly items-center shadow-lg rounded-lg border-4 border-black">
                        <h1 className= " top-0 w-full bg-black py-2 text-center text-3xl font-bold rounded-t-sm  text-white">My Skills</h1>
                        <div className="w-full h-full flex flex-row justify-evenly items-center overflow-x-auto overflow-clip">
                            
                            <SkillCard skillName="Java" photoUrl={<FaJava />} skillUrl="https://www.oracle.com/java/" />
                            <SkillCard skillName="React"  photoUrl={<FaReact />} skillUrl="https://react.dev/" />
                            <SkillCard skillName="Tailwind" photoUrl={<RiTailwindCssFill />} skillUrl="https://tailwindcss.com/"/>
                            <SkillCard skillName="Spring Framework" photoUrl={<SiSpring />} skillUrl="https://spring.io/" />
                            <SkillCard skillName="Spring-Boot"  photoUrl={<SiSpringboot />} skillUrl="https://spring.io/" />
                            <SkillCard skillName="Hibernate" photoUrl={<SiHibernate />} skillUrl="https://hibernate.org/"/>
                            <SkillCard skillName="MySQL"  photoUrl={<SiMysql />} skillUrl="https://www.mysql.com/"/>
                            <SkillCard skillName="HTML" photoUrl={<IoLogoHtml5 />} skillUrl="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"/>
                            <SkillCard skillName="CSS" photoUrl={<IoLogoCss3 />} skillUrl="https://www.w3.org/Style/CSS/" />
                            <SkillCard skillName="Javascript" photoUrl={<IoLogoJavascript />} skillUrl="https://developer.mozilla.org/en-US/docs/Web/JavaScript"/>
                            <SkillCard skillName="Bootstrap" photoUrl={<FaBootstrap />} skillUrl="https://getbootstrap.com/"/>
                            <SkillCard skillName="GCP" photoUrl={<SiGooglecloud />} skillUrl="https://getbootstrap.com/"/>
                            <SkillCard skillName="AWS" photoUrl={<FaAws />} skillUrl="https://getbootstrap.com/"/>
                            <SkillCard skillName="VS Code IDE" photoUrl={<VscVscodeInsiders />} skillUrl="https://getbootstrap.com/"/>
                            <SkillCard skillName="Eclips IDE" photoUrl={<DiEclipse />} skillUrl="https://getbootstrap.com/"/>
                            <SkillCard skillName="IntelliJ IDE" photoUrl={<SiIntellijidea />} skillUrl="https://getbootstrap.com/"/>
                            <SkillCard skillName="Tomcat Server" photoUrl={<SiApachetomcat />} skillUrl="https://getbootstrap.com/"/>
                            <SkillCard skillName="Python" photoUrl={<FaPython />} skillUrl="https://getbootstrap.com/"/>
                          
                            
                            
                        </div>
                        
                      
                    </div>

                    {/* BOTTOM SECTION */}
                    <div className="w-full h-fit bg-white my-5 flex flex-row flex-wrap justify-center items-center ">
                        
                        {/* BOTTOM LEFT */}
                        <div className=" h-80 w-80 lg:w-1/2 my-2 lg:my-0 lg:px-2  flex  justify-center items-center ">
                            <div className="h-full w-full border-4 border-black bg-white rounded-lg shadow-lg">
                                <h1 className= " top-0 w-full bg-black py-2 text-center text-3xl font-bold rounded-t-sm shadow-xl  text-white">Prefered Technology</h1>
                                <div className="w-full h-70 flex flex-wrap justify-center items-center ">
                                    <div className="w-1/2 h-32 flex flex-col justify-center items-center font-bold text-center border-lime-300 border-e-2 border-b-2">
                                        <MdWeb className="text-7xl"/>
                                        <p className="text-base lg:text-lg p-1">web devlopment</p>
                                    </div>
                                    <div className="w-1/2 h-32 flex flex-col justify-center items-center font-bold text-center border-lime-300 border-s-2 border-b-2">
                                        <LuBrainCircuit className="text-7xl"/>
                                        <p className="text-base lg:text-lg p-1">Machine Learning</p>
                                    </div>
                                    <div className="w-1/2 h-32 flex flex-col justify-center items-center font-bold text-center border-lime-300 border-e-2 border-t-2">
                                        <TbCloudComputing className="text-7xl"/>
                                        <p className="text-base lg:text-lg p-1">Cloud Computing</p>
                                    </div>
                                    <div className="w-1/2 h-32  flex flex-col justify-center items-center font-bold text-center border-lime-300 border-s-2 border-t-2">
                                        <FaEthereum className="text-7xl"/>
                                        <p className="text-base lg:text-lg p-1">Blockchain</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                        {/* BOTTOM RIGHT */}
                        <div className=" h-80 w-80 lg:w-1/2 my-2 lg:my-0 lg:px-2  flex  justify-center items-center ">
                            <div className="h-full w-full border-4 border-black bg-white  rounded-lg shadow-lg ">
                                <h1 className= " top-0 w-full bg-black py-2 text-center text-3xl font-bold rounded-t-sm shadow-lg text-white">My Strength</h1>
                                <ul className="list-disc text-2xl ps-12 pt-8 font-bold">
                                    <li className="p-1 bg-lime-300">Problem Solving</li>
                                    <li className="p-1 bg-lime-300">Creativity</li>
                                    <li className="p-1 bg-lime-300">Attention to Detail</li>
                                    <li className="p-1 bg-lime-300">Teamwork</li>
                                    <li className="p-1 bg-lime-300">Optimism</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;
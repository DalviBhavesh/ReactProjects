import React, { useCallback, useState } from "react"
import { FiInfo } from "react-icons/fi";
import { RxExternalLink } from "react-icons/rx";

function Project(){

   

    const projects = [
        {
            name: "cloudy",
            desc: "This project is made using reactjs and tailwind css for learning purpose",
            imageUrl: "https://img.freepik.com/free-photo/3d-monsoon-season-sale_23-2150472532.jpg?uid=R77836449&ga=GA1.1.1609911804.1708796131&semt=ais_user",
            link: "https://dalvibhavesh.github.io/Cloudy/",
            customeStyle: "object-cover object-center"
        },
        {
            name: "currency converter",
            desc: "This project can be used to manage tasks of day to day life like groceries and other important stuffthat requires planning .",
            imageUrl: "https://img.freepik.com/free-vector/indian-rupee-composition-with-flat-design_23-2147992017.jpg?t=st=1720027600~exp=1720031200~hmac=7cfb9b6e89f808345cb6a637eb6c9533dc6e115fa2a7e70c61273fadb222f7d1&w=740",
            link: "https://dalvibhavesh.github.io/CurrencyConverter/",
            customeStyle: "object-cover object-center"
        },
        {
            name: "tic-tac-toe game",
            desc: "This project is made using reactjs and tailwind css for learning purpose",
            imageUrl: "https://img.freepik.com/free-vector/illustrated-board-game-set_23-2148689530.jpg?t=st=1720025031~exp=1720028631~hmac=15e08fe374919d43bfd0ab1591e5e0d2c2b67464556197621748aa0dfcbbea27&w=1060",
            link: "https://dalvibhavesh.github.io/TicTacToe/",
            customeStyle: "object-cover object-center"
        },
        {
            name: "task tracker",
            desc: "This project is made using reactjs and tailwind css for learning purpose",
            imageUrl: "https://img.freepik.com/free-vector/organic-flat-time-management-illustration_52683-60702.jpg?uid=R77836449&ga=GA1.1.1609911804.1708796131&semt=ais_user",
            link: "https://dalvibhavesh.github.io/TaskTracker/",
            customeStyle: "object-contain object-top"
        },
        {
            name: "password generator",
            desc: "This project is made using reactjs and tailwind css for learning purpose",
            imageUrl: "https://img.freepik.com/free-vector/phishing-account-concept-with-envelope-credit-card_23-2148555136.jpg?uid=R77836449&ga=GA1.1.1609911804.1708796131&semt=ais_user",
            link: "https://dalvibhavesh.github.io/RandomPasswordGenerator/",
            customeStyle: "object-cover object-top"
        },
        {
            name: "BMI calculator",
            desc: "This project is made using reactjs and tailwind css for learning purpose",
            imageUrl: "https://img.freepik.com/free-vector/fat-person-consulting-doctor-man-suffering-from-obesity-overweight-problem-having-diabetes-heart-disease-risk-healthcare-health-last-lifestyle-concept_74855-10053.jpg?t=st=1720025662~exp=1720029262~hmac=7b84e4e617f972724db3823b7a0557f0027349ce524d72104b7f24420178c5cf&w=996",
            link: "https://dalvibhavesh.github.io/JS_Projects/Project2/Index.html",
            customeStyle: "object-contain object-top"
        },
        {
            name: "guessing game",
            desc: "This project is made using reactjs and tailwind css for learning purpose",
            imageUrl: "https://img.freepik.com/free-vector/gradient-mystery-box-illustration_23-2149532750.jpg?uid=R77836449&ga=GA1.1.1609911804.1708796131&semt=ais_user",
            link: "https://dalvibhavesh.github.io/JS_Projects/Project4/index.html",
            customeStyle: "object-cover object-center"
        },
        {
            name: "login page",
            desc: "This project is made using reactjs and tailwind css for learning purpose",
            imageUrl: "https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?uid=R77836449&ga=GA1.1.1609911804.1708796131&semt=sph",
            link: "https://dalvibhavesh.github.io/ContextApiPractice1/",
            customeStyle: "object-cover object-center"
        },
        {
            name: "dark mode",
            desc: "This project is made using reactjs and tailwind css for learning purpose",
            imageUrl: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149053805.jpg?t=st=1720025992~exp=1720029592~hmac=b0f800b7ff08d1c25e9c9a9c610682fd23e78c897cd9d2fbefab2cc24e0a4749&w=1060",
            link: "https://dalvibhavesh.github.io/ContextApiPractice2/",
            customeStyle: "object-cover object-center"
        },
        {
            name: "infinite color",
            desc: "This project is made using reactjs and tailwind css for learning purpose",
            imageUrl: "https://img.freepik.com/free-vector/colorful-abstract-backgroun-paper-cut-style_1361-585.jpg?uid=R77836449&ga=GA1.1.1609911804.1708796131&semt=ais_user",
            link: "https://dalvibhavesh.github.io/JS_Projects/Project7/index.html",
            customeStyle: "object-cover object-top"
        },
        {
            name: "fidget game",
            desc: "This project is made using reactjs and tailwind css for learning purpose",
            imageUrl: "https://img.freepik.com/free-vector/energy-saving-concept-illustration_114360-13556.jpg?uid=R77836449&ga=GA1.1.1609911804.1708796131&semt=ais_user",
            link: "https://dalvibhavesh.github.io/JS_Projects/Project5/button.html",
            customeStyle: "object-cover object-center"
        },
        {
            name: "colour switcher",
            desc: "This project is made using reactjs and tailwind css for learning purpose",
            imageUrl: "https://img.freepik.com/free-photo/bright-rainbow-lgbt-community_23-2148165438.jpg?t=st=1720028364~exp=1720031964~hmac=a4d49fc8b306d6ff8df94fe521ea102f80c8fbc25fc94b0c4e76a6308648cc59&w=740",
            link: "https://dalvibhavesh.github.io/JS_Projects/Project1/Index.html",
            customeStyle: "object-cover object-bottom"
        },
        {
            name: "Hover 3d cube (css only)",
            desc: "This project is made using reactjs and tailwind css for learning purpose",
            imageUrl: "https://img.freepik.com/free-vector/box-mockup_1017-7633.jpg?t=st=1720026792~exp=1720030392~hmac=30f2d9789dbe02ebe4b7001f9a1563f9236172326746486bc59b066b79a2c16e&w=740",
            link: "https://dalvibhavesh.github.io/JS_Projects/Project6/pract-cube.html",
            customeStyle: "object-cover object-center"
        },
        {
            name: "glassmorphism clock",
            desc: "This project is made using reactjs and tailwind css for learning purpose",
            imageUrl: "https://img.freepik.com/free-vector/gradient-glassmorphism-background_23-2149452798.jpg?uid=R77836449&ga=GA1.1.1609911804.1708796131&semt=sph",
            link: "https://dalvibhavesh.github.io/JS_Projects/Project3/index.html",
            customeStyle: "object-cover object-center"
        },
        {
            name: "Keyboard check",
            desc: "This project is made using reactjs and tailwind css for learning purpose",
            imageUrl: "https://img.freepik.com/free-photo/close-up-keyboard-button_74190-780.jpg?uid=R77836449&ga=GA1.1.1609911804.1708796131&semt=sph",
            link: "https://dalvibhavesh.github.io/JS_Projects/Project8/index.html",
            customeStyle: "object-cover object-center"
        },
        
    ]

    let [display,setDisplay] = useState("hidden");
    let [info, setInfo] = useState("");
    let [topic, setTopic] = useState("");
    

    return(
        <>
            
            <div className="h-lvh w-full pt-14  bg-white flex justify-center item-center flex-wrap overflow-y-scroll">
                
                {
                    projects&&projects.map((e)=>(
                        <div key={e.name} className="w-80 h-96 m-5 pb-2  bg-lime-400 flex flex-col justify-evenly items-center rounded-lg hover:shadow-2xl border border-black ">
                        
                            <div className="w-full h-64 flex justify-center items-center ">
                                <img 
                                    src={e.imageUrl? e.imageUrl:"https://img.freepik.com/free-photo/young-handsome-tattooed-man-makes-bonfire-by-ocean_1321-3195.jpg?t=st=1719943157~exp=1719946757~hmac=2f647f970c221813b69a467394ec01e3842a7750338db67b1f7440910aae286e&w=360"} 
                                    className={`w-full h-64 bg-white flex justify-center items-center rounded-t-lg  ${e.customeStyle ? e.customeStyle : ""}`}
                                /> 
                            </div>
                            
                            <div className="bg-white w-full h-28 text-xl font-bold px-2 flex flex-col justify-center items-center text-center  ">
                                <h1>{e.name.toUpperCase()}</h1> 
                            </div>

                            <div className="bg-white w-full h-24 flex flex-row justify-center items-center border-t border-black border-dashed">
                                <a href={e.link} target="_blank" className="w-36 bg-black hover:bg-slate-700 text-white shadow-lg p-2 rounded-lg flex flex-row justify-evenly items-center ">
                                    <p className="text-xl"><RxExternalLink /></p>
                                    <p>View Project</p>
                                </a>
                                <button 
                                    className="w-36 bg-black ms-2 hover:bg-slate-700 text-white shadow-lg p-2 rounded-lg  flex flex-row justify-evenly items-center "
                                    onClick={()=>{setDisplay("flex"); setInfo(e.desc); setTopic(e.name)}}
                                >
                                    <p className="text-xl"><FiInfo /></p>
                                    <p >Description</p>
                                </button>
                            </div>

                        </div>
                    ))
                }

                {/* discription component */}
                <div className={`fixed top-12 w-full h-lvh bg-transparent backdrop-blur-sm ${display} justify-center items-center`}>
                    <div className="w-80 bg-white p-3 flex flex-col justify-center items-center border border-black rounded-lg shadow-lg">
                        <div className="w-full p-2 flex justify-end items-center border-b border-black">
                            <h1 className="w-full text-center text-xl font-bold">{topic.toUpperCase()}</h1>
                        </div>
                        
                        <div className="py-4 text-center">
                            {info}
                        </div> 
                        <div>
                            <button 
                                    className="font-bold bg-lime-400  px-2 py-1 hover:bg-lime-500 border border-black rounded-lg " 
                                    onClick={()=>{setDisplay("hidden"); setInfo(""); setTopic("")}}
                                >
                                Ok Cool..!
                            </button>
                        </div>                       
                    </div>
                    
                </div>
   
            </div>
        </>
    )
}

export default Project;
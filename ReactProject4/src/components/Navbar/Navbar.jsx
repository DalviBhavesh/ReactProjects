import React, { useState,useEffect, useCallback, useRef } from "react";
import {Link, NavLink} from "react-router-dom"
import { FaHamburger } from "react-icons/fa";


function Navbar(){
    let [hamburger, setHamburger] = useState("hidden");

    let ham = useCallback(()=>{
        (hamburger == "hidden") ? setHamburger("block") : setHamburger("hidden");
        console.log(hamburger)}, [hamburger])
     

    

    return (
        <>
        <header className=" shadow sticky z-50 top-0">
            <nav className="relative bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    <div
                        onClick={ham} 
                        className="flex lg:hidden">
                        <h1 className="text-3xl"><FaHamburger /></h1>
                    </div>
                    
                    <div
                        className= "hidden justify-evenly items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `${(isActive)? "text-orange-700" : "text-gray-800"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to= "/about"
                                    className={({isActive}) =>
                                        `${(isActive)? "text-orange-700":"text-gray-800"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to= "/profile"
                                    className={({isActive}) =>
                                        `${(isActive)? "text-orange-700":"text-gray-800"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Profile
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                        `${(isActive) ? "text-orange-700":"text-gray-800"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to= "/user/This is an example of fetching dynamic data from url.(this complete string is fetched from url dynamically...)"
                                    className={({isActive}) =>
                                        `${(isActive)? "text-orange-700":"text-gray-800"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    user
                                </NavLink>
                            </li>

                            <li className="py-2 lg:py-0">
                                <Link
                                    to="#"
                                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none p-1"
                                >
                                    Log in
                                </Link> 
                                <Link
                                    to="#"
                                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                    Get started
                                </Link> 
                            </li>

                            
                            
                        </ul>

                    </div>
                </div>
            </nav>
           
        </header>

        {/* hamburger menu */}
            
            <div className={`${hamburger} fixed z-20 bg-white w-full px-3 pb-2 lg:hidden`}>
                    <div
                        className= {` justify-evenly items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `${(isActive)? "bg-orange-700 text-white" : "bg-white text-gray-800"} block py-2 pr-4 pl-3 border-b border-gray-100 `
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to= "/about"
                                    className={({isActive}) =>
                                        `${(isActive)? "bg-orange-700 text-white" : "bg-white text-gray-800"} block py-2 pr-4 pl-3  border-b border-gray-100 `
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to= "/profile"
                                    className={({isActive}) =>
                                        `${(isActive)? "bg-orange-700 text-white" : "bg-white text-gray-800"} block py-2 pr-4 pl-3  border-b border-gray-100 `
                                    }
                                >
                                    Profile
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                        `${(isActive) ? "bg-orange-700 text-white" : "bg-white text-gray-800"} block py-2 pr-4 pl-3  border-b border-gray-100 `
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to= "/user/This is an example of fetching dynamic data from url.(this complete string is fetched from url dynamically...)"
                                    className={({isActive}) =>
                                        `${(isActive)? "bg-orange-700 text-white" : "bg-white text-gray-800"} block py-2 pr-4 pl-3  border-b border-gray-100 `
                                    }
                                >
                                    user
                                </NavLink>
                            </li>

                            <li className="py-2 lg:py-0">
                                <Link
                                    to="#"
                                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none p-1"
                                >
                                    Log in
                                </Link> 
                                <Link
                                    to="#"
                                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                    Get started
                                </Link> 
                            </li>

                            
                            
                        </ul>

                    </div>
            </div>
        </>
        
    );
}

export default Navbar;

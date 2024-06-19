import React from "react";
import Nav from "./Nav";
import { useRouteError } from "react-router-dom";

function Err(){
    const error = useRouteError();
    console.log(error);
    return(
        <>
            <Nav />
            <div className="w-full h-lvh bg-slate-500 text-center flex flex-col justify-center item-center  text-5xl">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    Error: <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    )
}

export default Err;
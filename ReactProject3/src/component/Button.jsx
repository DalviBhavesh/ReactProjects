import React from "react";

function Button({
    from = "INR",
    to = "USD",
    submit
}) 
{
    return(
        <>
        <button 
        className=" lg:w-96 w-80 h-16 my-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-xl text-white"
        onClick={submit && submit}
        >
            Convert {from} to {to}
        </button>
        </>
    );
}

export default Button;
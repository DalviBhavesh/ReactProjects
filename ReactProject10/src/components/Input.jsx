import React from "react";

function Input(
    {
        place,
        setPlace
    }
){

    return(
        <>
            <input
                className='bg-blue-300 p-2 rounded-md border border-white hover:border-black '
                onChange={(e)=>{setPlace(e.target.value)}}
                value={place}
            />
        </>
    )

}

export default Input;
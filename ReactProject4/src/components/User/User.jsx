import React from "react";
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams();
    return(
        <>
            <div className="p-5 w-full h-lvh bg-orange-700 text-white flex justify-center items-center font-bold text-xl">
                <h1>{userid}</h1>
            </div>
        </>
    );
}

export default User;
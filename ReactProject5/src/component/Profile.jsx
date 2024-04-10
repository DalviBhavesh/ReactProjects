import React, {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile(){

    const {user} = React.useContext(UserContext);
        
    if(!user){
        return (
        <div className="text-xl text-red-700 font-bold text-center my-2">Please Login !</div>
    )
    }else if(user.username === '' || user.password === ''){
        return <div className="text-xl text-red-700 font-bold text-center my-2">Please Login !</div>
    }
    
    return(
        <>
        <div className="text-xl text-green-700 font-bold text-center my-2">Welcome {user.username} !</div>

        </>
    ) 
}

export default Profile; 

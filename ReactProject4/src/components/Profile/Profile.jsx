import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Profile(){
    
    const data = useLoaderData();

    // const [data, setData] = useState([]); 

    // useEffect(()=>{
        
    //     fetch("https://api.github.com/users/dalvibhavesh")
    //     .then((result)=>{
    //         return result.json();
    //     })
    //     .then((result)=>{
    //         console.log(result);
    //         setData(result);
    //     })

    // },[])
   

    return(
        <>
            <div className='bg-orange-700 text-white'>
                <div className='w-full h-lvh  flex flex-wrap justify-evenly items-center font-bold lg:text-9xl text-5xl'>
                    
                    <img className='rounded-full' src={data.avatar_url} alt="" />
                    <h1>{data.login}</h1>
                
                    
                </div>
                <div className=' p-5 text-center'>
                    <h1>NOTE: this image and name is displayed using github API</h1>
                </div>
                
            </div>
            
        </>
    )
}

export default Profile;

export const githubInfoApiData = async ()=>{
    const response = await fetch("https://api.github.com/users/dalvibhavesh");       
    return response.json();
}
    

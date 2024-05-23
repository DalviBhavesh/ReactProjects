import React from "react";
import { BsCloudSun } from "react-icons/bs";


function Card(
    {   
        place,
        weather
    }
){

//Converting time from Unix to normal format

let convertTime = (unix_timestamp)=>{

    
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds
    var date = new Date(unix_timestamp * 1000);

    // Hours part from the timestamp
    var hours = Math.abs(date.getHours()-12);

    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();

    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;

}
    
convertTime()
    

    return (
        <>
            



            {/* temprature data start */}

            <div className="backdrop-blur-lg shadow-lg flex flex-col justify-center items-center p-3 m-2 rounded-2xl cursor-pointer" style={{backgroundColor: "rgba(0,0,0,0.5)",}}>

                    <div className="w-full flex justify-between items-center ">
                        
                        <h1 className="text-lg text font-bold ">
                            {weather&&weather.cod == 200 ? place.toUpperCase(): "Invalid Search"}
                        </h1>
                        <h1 className="text-lg text font-bold text-yellow-200">
                            {weather&&weather.cod == 200 ? weather.sys.country: "?"}
                        </h1>
                        
                    </div>

                <div className="flex flex-row justify-around items-center lg:p-3">


                        <div>
                                <div className=" flex flex-row justify-center items-center p-2">
                                    <img src="./src/assets/hot.png"  className="h-24 w-24 lg:h-32 lg:w-32"/>
                                </div>
                        </div>

                        <div>
                            <div className="w-full flex  justify-center items-center">    
                                <div className="text-6xl lg:text-7xl flex flex-row justify-normal font-extralight cursor-pointer">
                                    <span className="hover:underline">{weather&&weather.cod == 200 ? JSON.stringify((weather.main.temp-273.15)).substring(0,5): "NAN"}</span><span className="text-lg">{"\u00B0"}C</span>
                                </div> 
                            </div>
                        </div>


                </div>
                
                



                <div className="w-full flex flex-row justify-evenly item-center " >
                        
                        <div className="flex flex-col justify-center item-center shadow p-2 rounded-lg hover:bg-black cursor-pointer" >
                            <h1 className="font-bold">
                                Feels Like
                            </h1>
                            <h1>
                                {weather&&weather.cod == 200 ? JSON.stringify((weather.main.feels_like-273.15)).substring(0,5)+ " \u00B0"+"C": "No Data Found"}
                            </h1>
                        </div>
                         
                        <div className="flex flex-col justify-center item-center shadow p-2 rounded-lg hover:bg-black cursor-pointer">
                            <h1 className="font-bold">
                                Max Temp
                            </h1>
                            <h1>
                            {weather&&weather.cod == 200 ? JSON.stringify((weather.main.temp_max-273.15)).substring(0,5)+ " \u00B0"+"C": "No Data Found"}
                            </h1>
                        </div>

                        <div className="flex flex-col justify-center item-center shadow p-2 rounded-lg hover:bg-black cursor-pointer">
                            <h1 className="font-bold">
                                Min Temp
                            </h1>
                            <h1 >
                            {weather&&weather.cod == 200 ? JSON.stringify((weather.main.temp_min-273.15)).substring(0,5)+ " \u00B0"+"C": "No Data Found"}
                            </h1>
                        </div>
                </div>
                    
              
            </div>
            
            {/* temprature data over */}

            <div>
                <div className="flex flex-row flex-wrap justify-center items-center">

                    <div className="cursor-pointer backdrop-blur-lg shadow-lg flex flex-col justify-center items-center p-2 lg:p-3 lg:m-2 rounded-2xl" style={{backgroundColor: "rgba(0,0,0,0.5)",}}>
                        <div className="w-full text-center lg:text-start">
                            Humidity
                        </div>
                        <div className=" flex flex-col lg:flex-row justify-center item-center" >
                            <div className="flex justify-center items-center">
                                <img src="./src/assets/humidity.png" className="w-20 m-4" />
                            </div>
                            <div className=" flex justify-center item-center text-4xl lg:text-6xl lg:pt-8 px-2 font-extralight cursor-pointer">
                                <span className="hover:underline">{weather&&weather.cod == 200 ? JSON.stringify((weather.main.humidity)).substring(0,4) : "NA "}</span> <span className="text-lg">%</span>
                            </div>
                        </div>
                        
                    </div>

                    <div className="cursor-pointer backdrop-blur-lg shadow-lg flex flex-col justify-center items-center p-2 m-1 lg:p-3 lg:m-2 rounded-2xl" style={{backgroundColor: "rgba(0,0,0,0.5)",}}>
                        <div className="w-full text-center lg:text-start">
                            Pressure
                        </div>

                        <div className=" flex flex-col lg:flex-row justify-center item-center">
                            <div className="flex justify-center items-center">
                                <img src="./src/assets/pressure.png" className="w-20 m-4" />
                            </div>
                            <div className=" flex justify-center item-center text-4xl lg:text-6xl lg:pt-8 px-2 font-extralight cursor-pointer">
                                <span className="hover:underline">{weather&&weather.cod == 200 ? JSON.stringify((weather.main.pressure)) : "NA "}</span> <span className="text-lg">mbar</span>
                            </div>
                        </div>
                        
                    </div>

                    </div>

                    <div className="flex flex-row flex-wrap justify-center items-center">

                        <div className=" backdrop-blur-lg shadow-lg flex flex-col justify-center items-center p-2 m-1 lg:p-3 lg:m-2 rounded-2xl" style={{backgroundColor: "rgba(0,0,0,0.5)",}}>
                            <div className="w-full text-center lg:text-start">
                                wind Speed
                            </div>

                            <div className=" flex flex-col lg:flex-row justify-center item-center">
                                <div className="flex justify-center items-center">
                                <img src="./src/assets/air-hot-balloon.png" className="w-20 m-4" />
                                </div>
                                <div className=" flex justify-center item-center text-4xl lg:text-6xl lg:pt-8 px-2 font-extralight cursor-pointer">
                                    <span className="hover:underline">{weather&&weather.cod == 200 ? JSON.stringify((weather.wind.speed)): "NA "}</span><span className="text-lg">m/sec</span>
                                </div>
                            </div>
                            
                        </div>

                        <div className=" backdrop-blur-lg shadow-lg flex flex-col justify-center items-center p-2 m-1 lg:p-3 lg:m-2 rounded-2xl " style={{backgroundColor: "rgba(0,0,0,0.5)",}}>
                            
                            <div className="w-full text-center lg:text-start">
                                wind direction
                            </div>

                            <div className=" flex flex-col lg:flex-row justify-center item-center">
                                <div className=" rounded-full flex justify-center item-center"  style={{rotate:`${(weather&&weather.cod == 200 ? weather.wind.deg : "0") +"deg"}`}}>
                                    <img src="./src/assets/direction.png" className= "w-20 m-4" />
                                </div>
                                <div className=" flex justify-center item-center text-4xl lg:text-6xl lg:pt-8 px-2 font-extralight cursor-pointer">
                                    <span className="hover:underline">{weather&&weather.cod == 200 ? JSON.stringify((weather.wind.deg)): "NA "}</span><span className="text-lg">{"\u00B0"}</span>
                                </div>
                            </div>
                        
                        </div>
            
                </div>
            </div>

            
            


            {/* <br />
            <hr />
            <h1>Humidity and Presssure Data</h1>
            <hr />
            


            <h1>
                Humidity: {weather&&weather.cod == 200 ? JSON.stringify((weather.main.humidity)).substring(0,4)+" %": "No Data Found"}
            </h1>

            <h1>
                Pressure: {weather&&weather.cod == 200 ? JSON.stringify((weather.main.pressure))+" mbar": "No Data Found"}
            </h1>


            <br />
            <hr />
            <h1>Wind Data</h1>
            <hr />
           
            
            
            <h1>
                wind Speed: {weather&&weather.cod == 200 ? JSON.stringify((weather.wind.speed))+" m/sec": "No Data Found"}
            </h1>
            <h1>
                wind direction: {weather&&weather.cod == 200 ? JSON.stringify((weather.wind.deg))+"\u00B0": "No Data Found"}
            </h1>



            <br />
            <hr />
            <h1>Other Data</h1>
            <hr />
            
            <h1>
                Sunrise at: {weather&&weather.cod == 200 ? JSON.stringify((convertTime(weather.sys.sunrise)))+ " AM": "No Data Found"}
            </h1>
            <h1>
                Sunset at: {weather&&weather.cod == 200 ? JSON.stringify((convertTime(weather.sys.sunset)))+ " PM": "No Data Found"}
            </h1> */}
 
        </>
    )
}

export default Card;
import React from "react";


function Card(
    {
        weather,
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
            <div >

            <br/>
            <hr />
            <h1>
                City: {weather&&weather.cod == 200 ? JSON.stringify((weather.name)): "No Data Found"}
            </h1>
            <hr />
            

            


            <br />
            <hr />
            <h1>Temprature Data</h1>
            <hr />
            


            <h1>
                Temp: {weather&&weather.cod == 200 ? JSON.stringify((weather.main.temp-273.15)).substring(0,5)+" C": "No Data Found"}
            </h1>  

            <h1>
                Temp Feels Like: {weather&&weather.cod == 200 ? JSON.stringify((weather.main.feels_like-273.15)).substring(0,5)+" C": "No Data Found"}
            </h1> 

            <h1>
                Max Temp: {weather&&weather.cod == 200 ? JSON.stringify((weather.main.temp_max-273.15)).substring(0,5)+" C": "No Data Found"}
            </h1> 

            <h1>
                Min Temp: {weather&&weather.cod == 200 ? JSON.stringify((weather.main.temp_min-273.15)).substring(0,5)+" C": "No Data Found"}
            </h1> 


            <br />
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
                wind direction: {weather&&weather.cod == 200 ? JSON.stringify((weather.wind.deg))+" Degree": "No Data Found"}
            </h1>



            <br />
            <hr />
            <h1>Other Data</h1>
            <hr />
            



            <h1>
                Country: {weather&&weather.cod == 200 ? JSON.stringify((weather.sys.country)): "No Data Found"}
            </h1>
            <h1>
                Sunrise at: {weather&&weather.cod == 200 ? JSON.stringify((convertTime(weather.sys.sunrise)))+ " AM": "No Data Found"}
            </h1>
            <h1>
                Sunset at: {weather&&weather.cod == 200 ? JSON.stringify((convertTime(weather.sys.sunset)))+ " PM": "No Data Found"}
            </h1>

            </div> 
        </>
    )
}

export default Card;